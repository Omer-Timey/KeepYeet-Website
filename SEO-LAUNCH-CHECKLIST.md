# Replace the Netlify site with KeepYeet on Vercel

This is the complete production cutover guide for `keepyeet.app`. There are no environment variables to add and no further code settings to configure. `npm run build` validates the static export, sitemap, crawler rules, JSON-LD, internal links, required assets, and the exact `app-ads.txt` record.

## 1. Deploy the project to Vercel

1. In Vercel, create a new project and import this repository.
2. Leave the build command as `npm run build`.
3. Deploy it once to the temporary Vercel URL and confirm the homepage and guides load.
4. In Vercel → Project → Settings → Domains, add both `keepyeet.app` and `www.keepyeet.app`.
5. Make `keepyeet.app` the primary domain and redirect `www.keepyeet.app` to `https://keepyeet.app/`.
6. Copy the exact DNS records Vercel displays. Do not guess or use another project's values.

## 2. Replace only the Netlify website records in Cloudflare

First, keep the Netlify site online. This gives you a fallback until Vercel is confirmed working.

Remove these four old Netlify A records:

| Name | Old value |
|---|---|
| `@` | `13.52.188.95` |
| `@` | `52.52.192.191` |
| `www` | `13.52.188.95` |
| `www` | `52.52.192.191` |

Then add the two records Vercel requests:

| Name | New value | Cloudflare proxy |
|---|---|---|
| `@` | Vercel's requested apex A record | DNS only (gray cloud) |
| `www` | Vercel's requested CNAME record | DNS only (gray cloud) |

Do not modify Cloudflare nameservers, MX records, SPF, DKIM, or the existing Google verification TXT record. DNS-only mode is intentional for the first launch: the current Cloudflare configuration injects restrictive crawler rules into `robots.txt`.

After Vercel verifies the domain and issues HTTPS, you can keep DNS-only mode permanently. If you later enable the orange cloud, first disable Cloudflare Managed Robots, AI Crawl Control, and Content Signals, then recheck the live `robots.txt`.

## 3. Check the live Vercel site

Open each URL after DNS propagation:

- `https://keepyeet.app/`
- `https://keepyeet.app/guides/`
- `https://keepyeet.app/privacy`
- `https://keepyeet.app/terms`
- `https://keepyeet.app/robots.txt`
- `https://keepyeet.app/sitemap.xml`
- `https://keepyeet.app/llms.txt`
- `https://keepyeet.app/app-ads.txt`

Expected result:

- Homepage and all 12 guides load.
- `/privacy` permanently redirects to `/privacy/`; `/terms` permanently redirects to `/terms/`.
- `robots.txt` allows Googlebot, Bingbot, OAI-SearchBot, ChatGPT-User, GPTBot, Claude crawlers, Google-Extended, and Perplexity.
- `sitemap.xml` contains the homepage, guide index, 12 guides, Privacy, and Terms: 16 canonical pages total.
- `app-ads.txt` is visible as plain text and contains exactly `google.com, pub-8977682726278420, DIRECT, f08c47fec0942fa0`.

Once these pass, wait one day before removing the custom domain from Netlify.

## 4. Google Search Console

Your existing Google Search Console connection stays valid because Cloudflare already hosts the Google verification TXT record. Do not create a new property, reverify the domain, or use Change of Address: the domain remains `keepyeet.app`.

After Vercel is live:

1. Open the existing `keepyeet.app` property in Search Console.
2. Open Sitemaps and make sure `https://keepyeet.app/sitemap.xml` is listed. Submit it if it is not; otherwise wait for its next successful read after the cutover.
3. Use URL Inspection → Test live URL for the homepage, `/guides/`, and three important guides.
4. Request indexing for those few pages. The sitemap covers the remaining guides.
5. Over the following days, check Page indexing for crawl or robots errors and Performance for impressions and queries.

Search Console is only for Google. The site itself already exposes the crawler access, sitemap, FAQs, guides, structured data, and source-backed content that support discovery by Google Search and AI search products.

## 5. Google Play

The site now permanently describes KeepYeet as available on iOS and Android. Publish the Google Play listing as planned, then verify the existing Google Play button opens the public listing. No code change or Vercel setting is needed when that happens.
