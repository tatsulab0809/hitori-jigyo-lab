# Phase 3: Affiliate Operation Layer

Date: 2026-08-26

## Goal

Prepare the site to start overseas affiliate operations.

This phase focuses on operational readiness rather than immediate monetization:

- Application profile text
- Program tracking data
- Review template
- First overseas SaaS articles
- Comic-style eyecatches for the new content

## Implemented

### Registration Profile

Created:

- `docs/affiliate-registration-profiles.md`

Includes:

- Japanese short profile
- Japanese long profile
- English short profile
- English long profile
- Promotion channel list
- Compliance notes
- TATSU tasks before applying

### Program Tracking Data

Created:

- `src/data/affiliate/programs.js`

Initial programs:

- PartnerStack
- impact.com
- Webflow Affiliate
- Shopify Affiliate / Partner
- beehiiv Partner
- Kit Affiliate
- HubSpot Affiliate
- Semrush Affiliate
- Jasper Affiliate

Each entry includes:

- Priority
- Status
- Category
- Official URL
- Commission note
- Cookie note
- Payout note
- Content fit
- Compliance notes
- Checked date

### Review Template

Created:

- `docs/overseas-saas-review-template.md`

This defines the required sections and checks for future overseas SaaS review articles.

### New Articles

Added:

- `/articles/overseas-saas-before-use/`
- `/articles/webflow-for-japanese-solo-business/`
- `/articles/beehiiv-vs-kit-japanese-solo-business/`

These articles use official links only for now. Affiliate links should be added after TATSU is approved by each program.

### New Images

Added:

- `public/images/eyecatch-overseas-saas-checklist-comic.png`
- `public/images/eyecatch-webflow-solo-business-comic.png`
- `public/images/eyecatch-newsletter-tools-comic.png`

## Source Notes

Official pages checked during this phase:

- Webflow Affiliate Program
- Webflow Affiliate Program Overview
- Shopify Affiliate / Partner earnings
- beehiiv Partner Program
- beehiiv Partner Program Help
- Kit Affiliate Program
- HubSpot Affiliate Program
- Jasper Affiliate Agreement
- PartnerStack support

## Validation

`npm run build` succeeded after the changes.

Build output:

- 43 pages generated

## Next Phase

Phase 4 should focus on affiliate application execution:

1. TATSU applies to the priority programs.
2. Codex adds approved affiliate links only after approval.
3. Create a simple visible "recommended tools" page using approved programs.
4. Add click tracking or at least structured link IDs.
5. Start one weekly experiment log for registrations, approvals, rejections, and lessons.
