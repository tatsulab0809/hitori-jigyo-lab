# Google Search Console / Analytics setup

## Site-side status

- `robots.txt` is generated at `https://hitori-jigyo-lab.com/robots.txt`.
- `sitemap.xml` is generated at `https://hitori-jigyo-lab.com/sitemap.xml`.
- Google Search Console verification can be added with `PUBLIC_GOOGLE_SITE_VERIFICATION`.
- GA4 measurement can be added with `PUBLIC_GA_MEASUREMENT_ID`.

## Recommended setup order

1. Create a Google Search Console property for `https://hitori-jigyo-lab.com/`.
2. Choose the HTML tag verification method.
3. Copy only the verification token from the tag.
4. Add the token to `.env` as `PUBLIC_GOOGLE_SITE_VERIFICATION=...`.
5. Build, commit, push, and wait for Cloudflare Pages deployment.
6. Press Verify in Search Console.
7. Submit `https://hitori-jigyo-lab.com/sitemap.xml`.
8. Create a GA4 property and web stream.
9. Add the measurement ID to `.env` as `PUBLIC_GA_MEASUREMENT_ID=G-...`.
10. Build, commit, push, and verify realtime traffic.

## What to watch first

- Search Console: indexed pages, excluded pages, queries, impressions, average position.
- GA4: page views, traffic source, article entrances, article-to-tool-page movement.
- Early success signal: impressions start appearing for small search terms, even before clicks increase.

## Operating note

The site should not chase every trending topic. Use Search Console data to find small, specific questions where the site can answer from a solo-business point of view.
