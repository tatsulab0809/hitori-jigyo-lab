# マルコ用 引き継ぎメモ

Date: 2026-08-26

## Project

- Site name: ひとり事業ラボ
- Public URL: https://hitori-jigyo-lab.com
- GitHub: https://github.com/tatsulab0809/hitori-jigyo-lab.git
- Local source: `C:\Users\tatsu\OneDrive\ドキュメント\LUKE project`

## Current Direction

ひとり事業ラボは、海外AI/SaaSを日本のひとり事業者目線で試すアフィリエイト事業用サイトとして進行中。

Positioning:

> AIと海外SaaSで、ひとり事業を小さく作る実験室。

## What Was Done

### Phase 1

Existing site was audited and repositioned toward overseas AI/SaaS affiliate content.

Main file:

- `docs/phase-1-overseas-affiliate-audit.md`

### Phase 2

Visible site direction was updated.

Added:

- `/diagnosis/`
- `/tools/`
- `/overseas-saas/`

Main file:

- `docs/phase-2-site-direction-update.md`

### Image Direction

The site image style was set to a simple, slightly awkward, friendly 4-koma manga style.

Main files:

- `docs/image-style-guide.md`
- `docs/image-asset-replacement-plan.md`

### Phase 3

Overseas affiliate operation layer was added.

Added:

- Registration profiles in Japanese and English
- Affiliate program data
- Overseas SaaS review template
- First 3 overseas SaaS articles

Main files:

- `docs/phase-3-affiliate-operation-layer.md`
- `docs/affiliate-registration-profiles.md`
- `docs/overseas-saas-review-template.md`
- `src/data/affiliate/programs.js`

## Important Files

- `docs/project-brief.md`
- `docs/operating-rules.md`
- `docs/phase-1-overseas-affiliate-audit.md`
- `docs/phase-2-site-direction-update.md`
- `docs/phase-3-affiliate-operation-layer.md`
- `docs/affiliate-registration-profiles.md`
- `docs/overseas-saas-review-template.md`
- `docs/image-style-guide.md`
- `docs/image-asset-replacement-plan.md`
- `src/data/articles.js`
- `src/data/affiliate/programs.js`
- `src/pages/index.astro`
- `src/pages/diagnosis/index.astro`
- `src/pages/tools/index.astro`
- `src/pages/overseas-saas/index.astro`

## New Articles

- `src/pages/articles/overseas-saas-before-use/index.astro`
- `src/pages/articles/webflow-for-japanese-solo-business/index.astro`
- `src/pages/articles/beehiiv-vs-kit-japanese-solo-business/index.astro`

## Build

Last validation:

- `npm run build`
- Success
- 43 pages generated

## Next Recommended Phase

Phase 4:

1. TATSU applies to priority overseas affiliate programs.
2. Approved affiliate links are added to `src/data/affiliate/programs.js`.
3. Create a visible recommended tools page using approved programs.
4. Add click IDs or a simple link management structure.
5. Start weekly experiment logs for applications, approvals, rejections, and lessons.

## Copy Note

This handoff copy excludes heavy generated folders such as:

- `.git`
- `.astro`
- `node_modules`
- `dist`

The copied files are enough for strategy review, source inspection, and continuation of implementation when dependencies are installed.
