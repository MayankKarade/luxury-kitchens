import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const base = process.env.SEO_TEST_BASE_URL || "http://localhost:3000";
const source = JSON.parse(await readFile(new URL("../src/data/seoMetadata.json", import.meta.url), "utf8"));
const staticPaths = ["/", "/about", "/our-services", "/process", "/portfolio", "/gallery",
  "/testimonials", "/locations", "/contact", "/consultation", "/blog", "/privacy-policy",
  "/terms-and-conditions", "/return-and-refund"];
const services = ["kitchens", "fitted-wardrobes", "tv-units", "corporate-furniture", "bathroom-vanities"];
const decode = (text) => text.replace(/&amp;/g, "&").replace(/&quot;/g, '"')
  .replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const get = (path, options) => fetch(new URL(path, base), {
  headers: { "user-agent": "bingbot" }, ...options,
});
function meta(html, name) {
  const tags = html.match(/<meta\b[^>]*>/g) || [];
  const tag = tags.find((item) => item.includes(`name="${name}"`) || item.includes(`property="${name}"`));
  return decode(tag?.match(/content="([^"]*)"/)?.[1] || "");
}
function canonical(html) {
  return decode((html.match(/<link\b[^>]*rel="canonical"[^>]*>/)?.[0] || "").match(/href="([^"]*)"/)?.[1] || "");
}
let checked = 0;
for (const path of [...staticPaths, ...services.map((slug) => `/our-services/${slug}`), "/our-services/kitchens/designs"]) {
  const row = source.pages.find((page) => page.Path === path);
  const response = await get(path);
  assert.equal(response.status, 200, path);
  const html = await response.text();
  const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] || "");
  assert.equal(title, path === "/locations" ? "Cali Wood Locations | Ghana & USA" : row["SEO Title"], `${path}: title`);
  if (path !== "/locations") assert.equal(meta(html, "description"), row["SEO Description"], `${path}: description`);
  assert.equal(new URL(canonical(html)).href, `https://caliwoodgh.com${path}`, `${path}: canonical`);
  assert.equal(meta(html, "robots"), row.Robots.replace(",", ", "), `${path}: robots`);
  assert.equal(meta(html, "twitter:card"), "summary_large_image", `${path}: Twitter card`);
  assert.equal(meta(html, "og:url"), canonical(html), `${path}: OG URL`);
  assert(meta(html, "og:image").startsWith("https://caliwoodgh.com/og/"), `${path}: OG image`);
  assert(!meta(html, "keywords"), `${path}: no obsolete keywords tag`);
  const graphs = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .flatMap((match) => JSON.parse(match[1])["@graph"]);
  assert(graphs.some((entry) => entry["@type"] === "Organization"), `${path}: organization schema`);
  assert(graphs.some((entry) => entry["@type"] === "WebPage"), `${path}: page schema`);
  if (path === "/our-services/kitchens/designs") {
    assert(html.includes("/our-services/kitchens/designs/modern-l-shaped-kitchen"), "Collection must contain crawlable design links");
  }
  checked++;
  console.log(`PASS ${path}`);
}
for (const path of ["/our-services/technical-services", "/our-services/renovation-services",
  "/our-services/custom-furniture", "/our-services/interior-design", "/our-services/commercial-interiors",
  "/our-services/unknown-service", "/our-services/kitchens/designs/not-real"]) {
  const response = await get(path);
  assert.equal(response.status, 404, path);
}
for (const [path, destination] of [
  ["/our-services/designs/modular-kitchens", "/our-services/kitchens/designs"],
  ["/our-services/modular-kitchens", "/our-services/kitchens"],
]) {
  const response = await get(path, { redirect: "manual" });
  assert.equal(response.status, 308, path);
  assert.equal(new URL(response.headers.get("location"), base).pathname, destination);
}
const products = await (await get("/api/product?slug=kitchens")).json();
const slug = products.data.product[0].slug;
const designPath = `/our-services/kitchens/designs/${slug}`;
const design = await get(designPath);
assert.equal(design.status, 200);
const designHtml = await design.text();
assert.equal(canonical(designHtml), `https://caliwoodgh.com${designPath}`);
assert.equal(meta(designHtml, "robots"), "noindex, follow");
assert(!decode(designHtml.match(/<title>([^<]*)<\/title>/)?.[1] || "").includes("Netsaarthi"));
const sitemap = await (await get("/sitemap.xml")).text();
for (const path of ["/portfolio", "/gallery", "/testimonials", "/locations", "/privacy-policy", "/our-services/technical-services"]) {
  assert(!sitemap.includes(`<loc>https://caliwoodgh.com${path}</loc>`), `Noindex/missing route in sitemap: ${path}`);
}
assert(sitemap.includes("<loc>https://caliwoodgh.com/our-services/kitchens</loc>"));
assert(sitemap.includes("<loc>https://caliwoodgh.com/our-services/kitchens/designs</loc>"));
const robots = await (await get("/robots.txt")).text();
assert(robots.includes("Sitemap: https://caliwoodgh.com/sitemap.xml"));
assert(!robots.includes("Disallow: /portfolio"), "Crawlers must be able to read noindex");
for (const image of new Set(source.pages.map((row) => row["OG Image (create asset)"]))) {
  const response = await get(image);
  assert.equal(response.status, 200, image);
  assert(response.headers.get("content-type")?.includes("image/jpeg"), image);
  const bytes = new Uint8Array(await response.arrayBuffer());
  assert.equal(bytes[0], 255);
  assert.equal(bytes[1], 216);
}
console.log(`SEO verified: ${checked} pages, real design metadata, invalid routes, canonical redirects, sitemap, robots, and all share images.`);
