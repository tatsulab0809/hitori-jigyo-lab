import { articles, categories } from "../data/articles.js";

const site = "https://hitori-jigyo-lab.com";

const staticPages = [
  "/",
  "/about/",
  "/affiliate-disclosure/",
  "/affiliate-programs/",
  "/articles/",
  "/categories/",
  "/compare/",
  "/compare/analytics-tools/",
  "/compare/crm-tools/",
  "/compare/image-tools/",
  "/compare/newsletter-tools/",
  "/compare/website-tools/",
  "/contact/",
  "/diagnosis/",
  "/disclaimer/",
  "/editorial-policy/",
  "/for-partners/",
  "/lab-log/",
  "/media-kit/",
  "/monthly-log/",
  "/newsletter/",
  "/operator/",
  "/overseas-saas/",
  "/privacy-policy/",
  "/review-policy/",
  "/tools/"
];

const urls = [
  ...staticPages,
  ...categories.map((category) => category.href),
  ...articles.map((article) => article.href)
];

const uniqueUrls = [...new Set(urls)].sort();

function xmlEscape(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueUrls
  .map((path) => {
    const loc = xmlEscape(new URL(path, site).toString());

    return `  <url>
    <loc>${loc}</loc>
  </url>`;
  })
  .join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
