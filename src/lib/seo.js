import source from "@/data/seoMetadata.json";

export const SITE_URL = "https://caliwoodgh.com";
export const SITE_NAME = "Cali Wood";
export const seoPages = source.pages;

// Management confirmed both offices in this chat; preserve that approved scope.
const pageOverrides = {
  "/locations": {
    "SEO Title": "Cali Wood Locations | Ghana & USA",
    "SEO Description": "Find Cali Wood in Adenta, Accra, Ghana and Alexandria, Virginia, USA. Contact our team to discuss your kitchen, cabinetry or custom furniture project.",
    "OG Title": "Cali Wood | Our Ghana & USA Locations",
    "OG Description": "Connect with Cali Wood in Adenta, Accra and Alexandria, Virginia for your cabinetry and furniture project.",
    "Twitter Title": "Cali Wood | Our Ghana & USA Locations",
    "Twitter Description": "Connect with Cali Wood in Adenta, Accra and Alexandria, Virginia for your cabinetry and furniture project.",
  },
};

export function plainText(value = "") {
  return String(value).replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/gi, " ").replace(/&amp;/gi, "&")
    .replace(/&#39;|&apos;/gi, "'").replace(/&quot;/gi, '"')
    .replace(/\s+/g, " ").trim();
}

export function createMetadata({ path, title, description, ogTitle = title,
  ogDescription = description, twitterTitle = ogTitle,
  twitterDescription = ogDescription, image = "/og/brand.jpg", index = false,
  type = "website" }) {
  const url = new URL(path, SITE_URL).href;
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: { index, follow: true },
    openGraph: {
      type, locale: "en_GH", siteName: SITE_NAME, url,
      title: ogTitle, description: ogDescription,
      images: [{ url: image, width: 1200, height: 630, alt: ogTitle }],
    },
    twitter: {
      card: "summary_large_image", title: twitterTitle,
      description: twitterDescription, images: [image],
    },
  };
}

export function getPageMetadata(path) {
  const original = seoPages.find((page) => page.Path === path);
  if (!original) throw new Error(`Missing SEO metadata for ${path}`);
  const page = { ...original, ...pageOverrides[path] };
  return createMetadata({
    path: new URL(page["Canonical URL"]).pathname,
    title: page["SEO Title"], description: page["SEO Description"],
    ogTitle: page["OG Title"], ogDescription: page["OG Description"],
    twitterTitle: page["Twitter Title"], twitterDescription: page["Twitter Description"],
    image: page["OG Image (create asset)"],
    index: page.Robots.split(",").includes("index"),
  });
}

export function getServiceMetadata(service) {
  const path = `/our-services/${service.slug}`;
  if (seoPages.some((page) => page.Path === path)) return getPageMetadata(path);
  return createMetadata({ path, title: `${service.title} in Ghana | Cali Wood`,
    description: plainText(service.description).slice(0, 160) });
}

export function getDesignCollectionMetadata(service, hasDesigns) {
  const path = `/our-services/${service.slug}/designs`;
  if (seoPages.some((page) => page.Path === path)) {
    const metadata = getPageMetadata(path);
    return { ...metadata, robots: { index: metadata.robots.index && hasDesigns, follow: true } };
  }
  return createMetadata({ path, title: `${service.title} Designs in Ghana | Cali Wood`,
    description: `Explore ${service.title.toLowerCase()} design ideas, layouts and finishes from Cali Wood. Plan custom furniture and cabinetry around your space in Ghana.` });
}

export function getDesignMetadata(service, product) {
  const path = `/our-services/${service.slug}/designs/${product.slug}`;
  const variant = service.slug === "kitchens" && source.kitchenVariants.find(
    (item) => item["Kitchen Type"].toLowerCase() === product.title.toLowerCase(),
  );
  // Publication/content approval isn't exposed by the current API. Keep drafts
  // out of the index until an explicit editorial approval flag is available.
  return createMetadata({ path,
    title: variant?.["SEO Title"] || `${plainText(product.title)} | Cali Wood Ghana`,
    description: variant?.["SEO Description"] || plainText(product.detailText).slice(0, 155),
    ogTitle: variant?.["OG Title"], ogDescription: variant?.["OG Description"],
    image: service.slug === "kitchens" ? "/og/kitchens.jpg" : "/og/brand.jpg",
  });
}

export function getArticleMetadata(article) {
  const path = `/blog-detail/${article.slug}`;
  if (seoPages.some((page) => page.Path === path)) return getPageMetadata(path);
  return createMetadata({ path, title: `${plainText(article.title)} | Cali Wood Ghana`,
    description: plainText(article.description || article.contentHtml).slice(0, 155),
    ogTitle: `${plainText(article.title)} | Cali Wood`, image: "/og/blog.jpg" });
}
