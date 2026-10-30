import { getPageMetadata, seoPages, SITE_URL } from "@/lib/seo";

export const dynamic = "force-dynamic";

const staticPaths = new Set(["/", "/about", "/our-services", "/process", "/portfolio",
  "/gallery", "/testimonials", "/locations", "/contact", "/consultation", "/blog",
  "/privacy-policy", "/terms-and-conditions", "/return-and-refund"]);

export default async function sitemap() {
  let services = [];
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/service`, { cache: "no-store" });
    if (response.ok) {
      const data = await response.json();
      services = Array.isArray(data?.data?.service) ? data.data.service : [];
    }
  } catch { /* Keep static pages available when the CMS is unreachable. */ }
  const activeServices = new Set(services.filter((service) => service.status == null || String(service.status) === "1")
    .map((service) => `/our-services/${service.slug}`));

  const entries = seoPages.filter((page) => (staticPaths.has(page.Path) || activeServices.has(page.Path)) &&
    getPageMetadata(page.Path).robots.index).map((page) => ({ url: new URL(page.Path, SITE_URL).href }));

  if (activeServices.has("/our-services/kitchens")) {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/product?slug=kitchens`, { cache: "no-store" });
      const data = response.ok ? await response.json() : null;
      if (Array.isArray(data?.data?.product) && data.data.product.length > 0) {
        entries.push({ url: `${SITE_URL}/our-services/kitchens/designs` });
      }
    } catch { /* Omit an unverified collection from the sitemap. */ }
  }
  return entries;
}
