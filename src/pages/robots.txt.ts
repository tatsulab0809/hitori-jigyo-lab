const site = "https://hitori-jigyo-lab.com";

export function GET() {
  return new Response(
    [
      "User-agent: *",
      "Allow: /",
      "Disallow: /go/",
      "",
      `Sitemap: ${site}/sitemap.xml`,
      ""
    ].join("\n"),
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8"
      }
    }
  );
}
