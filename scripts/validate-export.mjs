import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const out = join(root, "out");
const origin = "https://keepyeet.app";
const errors = [];

function filesUnder(directory) {
  return readdirSync(directory).flatMap((entry) => {
    const path = join(directory, entry);
    return statSync(path).isDirectory() ? filesUnder(path) : [path];
  });
}

function count(text, pattern) {
  return [...text.matchAll(pattern)].length;
}

function capture(text, pattern) {
  return pattern.exec(text)?.[1] ?? "";
}

function targetExists(href) {
  const clean = href.split("#")[0].split("?")[0];
  if (!clean || !clean.startsWith("/")) return true;

  const decoded = decodeURI(clean);
  const direct = join(out, decoded);
  const candidates = [direct, join(direct, "index.html"), `${direct}.html`];
  return candidates.some((candidate) => existsSync(candidate));
}

function pageRoute(page) {
  return `/${relative(out, page).replace(/index\.html$/, "")}`;
}

function expectedCanonical(route) {
  return route === "/" ? `${origin}/` : `${origin}${route}`;
}

function schemaTypes(value, types = new Set()) {
  if (Array.isArray(value)) {
    for (const item of value) schemaTypes(item, types);
    return types;
  }
  if (!value || typeof value !== "object") return types;

  const type = value["@type"];
  if (Array.isArray(type)) type.forEach((item) => types.add(item));
  else if (typeof type === "string") types.add(type);

  for (const child of Object.values(value)) schemaTypes(child, types);
  return types;
}

function robotsGroupAllows(text, userAgent) {
  const lines = text.split(/\r?\n/).map((line) => line.trim());
  for (let index = 0; index < lines.length; index += 1) {
    if (lines[index].toLowerCase() !== `user-agent: ${userAgent.toLowerCase()}`) continue;

    const directives = [];
    for (let cursor = index + 1; cursor < lines.length; cursor += 1) {
      if (lines[cursor].toLowerCase().startsWith("user-agent:")) break;
      if (lines[cursor]) directives.push(lines[cursor].toLowerCase());
    }
    return directives.includes("allow: /") && !directives.includes("disallow: /");
  }
  return false;
}

if (!existsSync(out)) {
  throw new Error("Missing out/. Run npm run build:next first.");
}

const allFiles = filesUnder(out);
const pages = allFiles.filter((file) => {
  if (!file.endsWith("index.html")) return false;
  const path = relative(out, file);
  return !path.startsWith("404/") && !path.startsWith("_not-found/");
});
const titles = new Map();
const descriptions = new Map();
const canonicalRoutes = new Map();
const routeSchemaTypes = new Map();
let jsonLdBlocks = 0;

for (const page of pages) {
  const html = readFileSync(page, "utf8");
  const route = pageRoute(page);

  const checks = [
    ["title", /<title>[^<]+<\/title>/g],
    ["description", /<meta[^>]+name="description"[^>]*>/g],
    ["canonical", /<link[^>]+rel="canonical"[^>]*>/g],
    ["h1", /<h1(?:\s[^>]*)?>/g],
  ];

  for (const [label, pattern] of checks) {
    const total = count(html, pattern);
    if (total !== 1) errors.push(`${route}: expected one ${label}, found ${total}`);
  }

  if (!/<html[^>]+lang="en"/.test(html)) errors.push(`${route}: missing html lang=en`);
  if (/<meta[^>]+name="robots"[^>]+content="[^"]*noindex/i.test(html)) {
    errors.push(`${route}: indexable page contains noindex`);
  }
  const protectedLegalRoute = route === "/privacy/" || route === "/terms/";
  if (
    !protectedLegalRoute &&
    !/<meta[^>]+name="googlebot"[^>]+max-image-preview:large/i.test(html)
  ) {
    errors.push(`${route}: missing Googlebot large-preview directive`);
  }

  const title = capture(html, /<title>([^<]+)<\/title>/);
  const description = capture(html, /<meta[^>]+name="description"[^>]+content="([^"]+)"/);
  const canonical = capture(html, /<link[^>]+rel="canonical"[^>]+href="([^"]+)"/);
  if (title) {
    if (titles.has(title)) errors.push(`${route}: duplicate title also used by ${titles.get(title)}`);
    titles.set(title, route);
  }
  if (description) {
    if (descriptions.has(description)) {
      errors.push(`${route}: duplicate description also used by ${descriptions.get(description)}`);
    }
    descriptions.set(description, route);
  }
  if (canonical) {
    if (canonical !== expectedCanonical(route)) {
      errors.push(`${route}: canonical ${canonical} does not match ${expectedCanonical(route)}`);
    }
    if (canonicalRoutes.has(canonical)) {
      errors.push(`${route}: duplicate canonical also used by ${canonicalRoutes.get(canonical)}`);
    }
    canonicalRoutes.set(canonical, route);
  }

  const types = new Set();
  for (const match of html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try {
      const parsed = JSON.parse(match[1]);
      schemaTypes(parsed, types);
      jsonLdBlocks += 1;
    } catch {
      errors.push(`${route}: invalid JSON-LD`);
    }
  }
  routeSchemaTypes.set(route, types);

  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    if (!targetExists(match[1])) errors.push(`${route}: broken internal link ${match[1]}`);
  }
  for (const match of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\balt="[^"]*"/.test(match[0])) errors.push(`${route}: image without alt attribute`);
  }

  for (const property of ["og:title", "og:description", "og:image"]) {
    if (!new RegExp(`<meta[^>]+property="${property}"`, "i").test(html)) {
      errors.push(`${route}: missing ${property}`);
    }
  }
  if (!/<meta[^>]+name="twitter:card"/i.test(html)) errors.push(`${route}: missing twitter:card`);
}

const requiredSchema = new Map([
  ["/", ["WebSite", "WebPage", "MobileApplication", "FAQPage", "Person", "Brand"]],
  ["/guides/", ["CollectionPage", "ItemList", "BreadcrumbList"]],
]);

for (const route of canonicalRoutes.values()) {
  if (!route.startsWith("/guides/") || route === "/guides/") continue;
  requiredSchema.set(route, ["Article", "HowTo", "FAQPage", "BreadcrumbList"]);
}

for (const [route, requiredTypes] of requiredSchema) {
  const types = routeSchemaTypes.get(route) ?? new Set();
  for (const type of requiredTypes) {
    if (!types.has(type)) errors.push(`${route}: missing ${type} structured data`);
  }
}

const requiredFiles = [
  "index.html",
  "guides/index.html",
  "privacy/index.html",
  "terms/index.html",
  "robots.txt",
  "sitemap.xml",
  "llms.txt",
  "manifest.webmanifest",
  "icon.png",
  "apple-icon.png",
  "app-ads.txt",
  "images/app-store/keepyeet-icon.webp",
  "images/app-store/keepyeet-hero-phone.webp",
  ...Array.from({ length: 6 }, (_, index) =>
    `images/app-store/screenshot-${String(index + 1).padStart(2, "0")}.webp`,
  ),
];

for (const file of requiredFiles) {
  if (!existsSync(join(out, file))) errors.push(`Missing exported file: ${file}`);
}

const appAds = readFileSync(join(out, "app-ads.txt"), "utf8").trim();
if (appAds !== "google.com, pub-8977682726278420, DIRECT, f08c47fec0942fa0") {
  errors.push("app-ads.txt does not match the configured AdMob seller record");
}

const sitemap = readFileSync(join(out, "sitemap.xml"), "utf8");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (new Set(sitemapUrls).size !== sitemapUrls.length) errors.push("Sitemap contains duplicate URLs");

const canonicalUrls = [...canonicalRoutes.keys()].sort();
const sortedSitemapUrls = [...sitemapUrls].sort();
if (JSON.stringify(sortedSitemapUrls) !== JSON.stringify(canonicalUrls)) {
  const missing = canonicalUrls.filter((url) => !sitemapUrls.includes(url));
  const extra = sitemapUrls.filter((url) => !canonicalRoutes.has(url));
  if (missing.length) errors.push(`Sitemap is missing canonicals: ${missing.join(", ")}`);
  if (extra.length) errors.push(`Sitemap has non-canonical URLs: ${extra.join(", ")}`);
}

for (const url of sitemapUrls) {
  if (!url.startsWith(`${origin}/`)) errors.push(`Sitemap URL uses the wrong origin: ${url}`);
  const pathname = new URL(url).pathname;
  if (!targetExists(pathname)) errors.push(`Sitemap URL has no exported page: ${url}`);
}

const sitemapImages = count(sitemap, /<image:loc>[^<]+<\/image:loc>/g);
if (sitemapImages < 8) errors.push(`Expected image sitemap entries, found ${sitemapImages}`);

const robots = readFileSync(join(out, "robots.txt"), "utf8");
const requiredBots = [
  "Googlebot",
  "Google-Extended",
  "Bingbot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "Claude-SearchBot",
  "Claude-User",
  "ClaudeBot",
  "PerplexityBot",
];
if (!robotsGroupAllows(robots, "*")) errors.push("robots.txt does not allow the wildcard crawler");
for (const bot of requiredBots) {
  if (!robotsGroupAllows(robots, bot)) errors.push(`robots.txt does not explicitly allow ${bot}`);
}
if (!robots.includes(`Sitemap: ${origin}/sitemap.xml`)) {
  errors.push("robots.txt does not advertise the canonical sitemap");
}

const llms = readFileSync(join(out, "llms.txt"), "utf8");
if (!llms.startsWith("# KeepYeet\n\n> ")) errors.push("llms.txt does not follow the expected heading format");
for (const url of sitemapUrls.filter((url) => url.includes("/guides/"))) {
  if (!llms.includes(url)) errors.push(`llms.txt is missing guide URL ${url}`);
}
if (!llms.includes(`${origin}/app-ads.txt`)) errors.push("llms.txt does not expose app-ads.txt");

const manifest = JSON.parse(readFileSync(join(out, "manifest.webmanifest"), "utf8"));
if (manifest.name !== "KeepYeet: Swipe Photo Cleaner") errors.push("Manifest name is incorrect");
if (manifest.start_url !== "/") errors.push("Manifest start_url must be /");
if (!Array.isArray(manifest.icons) || manifest.icons.length < 2) {
  errors.push("Manifest must expose app icons");
}

const homepage = readFileSync(join(out, "index.html"), "utf8");
const appStoreLinks = count(homepage, /href="https:\/\/apps\.apple\.com\/app\/id6759491629"/g);
const playLinks = count(homepage, /href="https:\/\/play\.google\.com\/store\/apps\/details\?id=com\.keepyeet\.app"/g);
if (appStoreLinks < 3) errors.push(`Homepage has only ${appStoreLinks} App Store links`);
if (playLinks < 3) errors.push(`Homepage has only ${playLinks} Google Play links`);
if (/100% private/i.test(homepage)) errors.push("Homepage contains the unsupported 100% private claim");
if (/"@type":"AggregateRating"/.test(homepage)) {
  errors.push("Homepage contains a hidden aggregate rating in structured data");
}

const report = {
  pagesChecked: pages.length,
  sitemapUrls: sitemapUrls.length,
  sitemapImages,
  jsonLdBlocks,
  explicitCrawlerRules: requiredBots.length,
  homepageStoreLinks: { appStore: appStoreLinks, googlePlay: playLinks },
  errors,
};

console.log(JSON.stringify(report, null, 2));
if (errors.length) process.exitCode = 1;
