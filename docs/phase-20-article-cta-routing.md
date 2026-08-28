# Phase 20: Article CTA routing

## Purpose

Improve article-end navigation so readers do not leave after one article. The shared article layout now adds topic-aware related articles and next-action links across all article pages.

## What changed

- Added automatic related-article blocks to `ArticleLayout.astro`.
- Added topic-based next-action links for:
  - affiliate application / review readiness
  - newsletter tools
  - website tools
  - analytics
  - CRM
  - image production
  - overseas SaaS
- Added styling for compact related-article cards in `global.css`.

## Expected effect

- Better internal circulation from search-entry articles.
- Clearer routes from articles to comparison pages, diagnosis, media kit, affiliate program pages, and lab logs.
- More useful page journeys for both readers and affiliate program reviewers.

## Notes

This is layout-level routing, so future articles inherit the system without editing every article by hand.
