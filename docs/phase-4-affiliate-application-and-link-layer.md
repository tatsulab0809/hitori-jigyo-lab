# Phase 4: Affiliate Application And Link Layer

Date: 2026-08-26

## Goal

Move from research into operations:

- Apply to priority overseas affiliate networks and direct programs.
- Keep all program status in one data file.
- Avoid hard-coding affiliate links directly inside articles.
- Add reader-facing disclosure and clean CTA paths before approvals arrive.

## Implementation Added

- Program data lives in `src/data/affiliate/programs.js`.
- Each program now has a `slug`, `applyUrl`, `officialUrl`, and `trackingUrl`.
- Public program status page added at `/affiliate-programs/`.
- Redirect/exit pages added at `/go/[slug]/`.
- If `trackingUrl` is empty, `/go/[slug]/` sends readers to the official URL.
- After approval, paste the approved affiliate URL into `trackingUrl`.

## First Application Order

1. PartnerStack
2. impact.com
3. Webflow Affiliate
4. beehiiv Partner
5. Kit Affiliate
6. Shopify Affiliate / Partner
7. HubSpot Affiliate

Semrush and Jasper are later-stage candidates. They should not be pushed heavily until the site has more practical review depth.

## Approval Workflow

For each program:

1. Open `/affiliate-programs/`.
2. Use the application profile text in `docs/affiliate-registration-profiles.md`.
3. Submit the site URL: `https://hitori-jigyo-lab.com`.
4. Use the operator name: `TATSU`.
5. After approval, update `trackingUrl` in `src/data/affiliate/programs.js`.
6. Change `status` from `to_apply` to `approved`.
7. Rebuild and publish.

## Link Rules

- Article links should point to `/go/webflow/`, `/go/beehiiv/`, `/go/kit/`, etc.
- Do not paste affiliate URLs directly into article files.
- Keep official source links in article footnotes or official-link sections.
- Use plain disclosure near commercial CTAs.
- If a program rejects the application, set `status` to `rejected` and keep only the official URL.

## Next Content To Create

- Webflow hands-on free plan review
- beehiiv setup log from Japanese user perspective
- Kit setup log from Japanese user perspective
- Shopify affiliate/partner route explanation for Japanese solo operators
- PartnerStack registration walkthrough

## Notes

The business is not ready for aggressive promotion yet. The first target is to make the site credible enough for affiliate approval and to prepare link infrastructure so approved links can be inserted without rewriting the whole site.
