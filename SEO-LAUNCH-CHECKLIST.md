# KeepYeet SEO/GEO launch checklist

The repository builds a fully static Next.js export for Vercel. `npm run build` also runs the export validator, so a deployment fails if canonical pages, sitemap coverage, crawler rules, JSON-LD, required assets, internal links, or the exact `app-ads.txt` record are broken.

## Before connecting the production domain

1. Add `keepyeet.app` to the Vercel project and make it the primary production domain.
2. Redirect `www.keepyeet.app` to `https://keepyeet.app/` in Vercel's domain settings.
3. If Cloudflare remains in front of Vercel, disable Managed Robots, AI Crawl Control, and any Content Signals rule that injects bot-specific `Disallow: /` directives. Using DNS-only records avoids Cloudflare rewriting the repository's `robots.txt`.
4. Confirm the Google Play URL returns HTTP 200 before publication. It currently uses package `com.keepyeet.app`. Once the listing is public, set `NEXT_PUBLIC_GOOGLE_PLAY_LIVE=true` in the Vercel production environment so the application schema includes Android and the Play listing.

## Optional verification variables

Set these only after creating the matching webmaster properties:

- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` — Google Search Console HTML-tag token.
- `NEXT_PUBLIC_BING_SITE_VERIFICATION` — Bing Webmaster Tools `msvalidate.01` token.

These values are inserted at build time and do not add analytics or change the privacy policy.

## Verify immediately after deployment

- `https://keepyeet.app/` returns 200.
- `https://keepyeet.app/guides/` and all 12 guide routes return 200.
- `https://keepyeet.app/robots.txt` returns the repository rules without injected disallows.
- `https://keepyeet.app/sitemap.xml` returns XML containing all 16 canonical HTML URLs and image entries.
- `https://keepyeet.app/llms.txt` returns the KeepYeet product and guide index as plain text.
- `https://keepyeet.app/app-ads.txt` returns 200 as plain text with exactly:
  `google.com, pub-8977682726278420, DIRECT, f08c47fec0942fa0`
- A nonexistent route returns a real 404 and is not indexable.
- App Store and Google Play buttons resolve to public listings.

## Submit and monitor

1. Submit `https://keepyeet.app/sitemap.xml` in Google Search Console.
2. Import the Search Console property into Bing Webmaster Tools or submit the same sitemap there.
3. Inspect the homepage, guide index, and several guide URLs in Search Console after the first crawl.
4. Validate the live pages with Google's Rich Results Test and Schema.org Validator.
5. Monitor non-branded queries, indexed-page coverage, Core Web Vitals, and ChatGPT referrals. ChatGPT Search referrals include `utm_source=chatgpt.com`.

Crawler access and valid markup make the site eligible for discovery. Search engines and AI assistants still decide what to index, rank, cite, or recommend, so no website implementation can guarantee placement.
