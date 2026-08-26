# Overseas SaaS Review Template

Use this for every overseas SaaS article.

## Frontmatter Pattern

```astro
<ArticleLayout
  title="[Tool name]は日本のひとり事業に使えるか"
  description="[Tool name]を日本の個人事業主・副業者目線で、料金、日本語対応、無料プラン、解約、ChatGPT/Codexで代替できるかまで確認します。"
  category="ひとり事業ツール"
  date="YYYY-MM-DD"
  heroImage="/images/[slug]-comic.png"
  heroImageAlt="[Tool name]を試すTATSUの4コマ漫画調アイキャッチ"
>
```

## Article Sections

1. Intro: who this is for
2. Affiliate disclosure
3. Quick judgment
4. What the tool does
5. What I checked from Japan
6. Pricing and yen note
7. Free plan or trial
8. Japanese usability
9. Payment and cancellation concerns
10. Can ChatGPT or Codex replace it?
11. Who it fits
12. Who should skip it
13. TATSU experiment note
14. Official link and affiliate link area
15. Checked date and source note

## Required Checks

- Official pricing or affiliate page checked date
- Japanese input/output behavior if actually tested
- Free plan/trial existence
- Payment method
- Cancellation path
- Refund or lock period if relevant
- Affiliate disclosure near links
- No income guarantee
- No exaggerated claims
- No brand impersonation

## Disclosure Block

```html
<div class="note-box">
  <h2>広告・アフィリエイトについて</h2>
  <p>この記事には、今後アフィリエイトリンクを設置する可能性があります。紹介リンクを経由して申し込みがあると、ひとり事業ラボが報酬を受け取る場合があります。ただし、紹介報酬の有無に関係なく、TATSUが実際に確認したこと、迷ったこと、向いている人・向かない人を分けて書きます。</p>
</div>
```

## Quick Judgment Table

```html
<div class="review-format">
  <p class="panel-label">Quick Judgment</p>
  <div class="format-grid">
    <span>日本語対応: [未確認/確認済み]</span>
    <span>無料プラン: [あり/なし/未確認]</span>
    <span>難易度: [低/中/高]</span>
    <span>おすすめ度: [1-5]</span>
    <span>代替候補: [ChatGPT/Codex/etc]</span>
    <span>確認日: YYYY-MM-DD</span>
  </div>
</div>
```
