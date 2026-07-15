import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const out = join(root, "out");
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
  const candidates = [
    direct,
    join(direct, "index.html"),
    `${direct}.html`,
  ];
  return candidates.some((candidate) => existsSync(candidate));
}

if (!existsSync(out)) {
  throw new Error("Missing out/. Run npm run build first.");
}

const allFiles = filesUnder(out);
const pages = allFiles.filter((file) => {
  if (!file.endsWith("index.html")) return false;
  const path = relative(out, file);
  return !path.startsWith("404/") && !path.startsWith("_not-found/");
});
const titles = new Map();
const descriptions = new Map();
let jsonLdBlocks = 0;

for (const page of pages) {
  const html = readFileSync(page, "utf8");
  const route = `/${relative(out, page).replace(/index\.html$/, "")}`;

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

  const title = capture(html, /<title>([^<]+)<\/title>/);
  const description = capture(html, /<meta[^>]+name="description"[^>]+content="([^"]+)"/);
  if (title) {
    if (titles.has(title)) errors.push(`${route}: duplicate title also used by ${titles.get(title)}`);
    titles.set(title, route);
  }
  if (description) {
    if (descriptions.has(description)) errors.push(`${route}: duplicate description also used by ${descriptions.get(description)}`);
    descriptions.set(description, route);
  }

  for (const match of html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(match[1]);
      jsonLdBlocks += 1;
    } catch {
      errors.push(`${route}: invalid JSON-LD`);
    }
  }

  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    if (!targetExists(match[1])) errors.push(`${route}: broken internal link ${match[1]}`);
  }
}

const requiredFiles = [
  "index.html",
  "guides/index.html",
  "privacy/index.html",
  "terms/index.html",
  "robots.txt",
  "sitemap.xml",
  "manifest.webmanifest",
  "icon.png",
  "apple-icon.png",
  "app-ads.txt",
  "images/app-store/keepyeet-icon.webp",
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
if (sitemapUrls.length !== 16) errors.push(`Expected 16 sitemap URLs, found ${sitemapUrls.length}`);
if (new Set(sitemapUrls).size !== sitemapUrls.length) errors.push("Sitemap contains duplicate URLs");

const homepage = readFileSync(join(out, "index.html"), "utf8");
const appStoreLinks = count(homepage, /href="https:\/\/apps\.apple\.com\/app\/id6759491629"/g);
const playLinks = count(homepage, /href="https:\/\/play\.google\.com\/store\/apps\/details\?id=com\.keepyeet\.app"/g);
if (appStoreLinks < 3) errors.push(`Homepage has only ${appStoreLinks} App Store links`);
if (playLinks < 3) errors.push(`Homepage has only ${playLinks} Google Play links`);

const report = {
  pagesChecked: pages.length,
  sitemapUrls: sitemapUrls.length,
  jsonLdBlocks,
  homepageStoreLinks: { appStore: appStoreLinks, googlePlay: playLinks },
  errors,
};

console.log(JSON.stringify(report, null, 2));
if (errors.length) process.exitCode = 1;
