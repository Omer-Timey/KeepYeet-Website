# KeepYeet website

A Vercel-ready Next.js App Router site for KeepYeet. The production build is a static export, so `npm run build` creates `out/index.html` plus all guide and legal routes.

Source for the public KeepYeet website.

## Local development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run lint
npm run typecheck
npm run build
npm run validate:export
```

The export validator checks unique titles, descriptions, canonicals and H1s; JSON-LD parsing; internal links; required assets; sitemap coverage; and both store CTAs.

## Vercel

Import this repository into Vercel with the default Root Directory. Vercel will detect Next.js from `package.json`; no Sites or Cloudflare runtime is used.

## Launch note

Both store CTAs are presented as available because Android is expected to be live before this website is published. Verify both destinations during the final deployment check.

The published privacy and terms documents were preserved from the existing KeepYeet landing-page source. Review their Apple-specific clauses before the Android release.
