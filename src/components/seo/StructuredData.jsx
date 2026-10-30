import { SITE_URL, SITE_NAME } from "@/lib/seo";

export default function StructuredData({ metadata, site = false }) {
  const url = metadata?.alternates?.canonical;
  const graph = site ? [
    { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: SITE_NAME,
      url: SITE_URL, logo: `${SITE_URL}/logo/caliwoodnavLogo.png` },
    { "@type": "WebSite", "@id": `${SITE_URL}/#website`, name: SITE_NAME,
      url: SITE_URL, publisher: { "@id": `${SITE_URL}/#organization` }, inLanguage: "en" },
  ] : [
    { "@type": "WebPage", "@id": `${url}#webpage`, url, name: metadata.title,
      description: metadata.description, inLanguage: "en",
      isPartOf: { "@id": `${SITE_URL}/#website` } },
    ...(new URL(url).pathname !== "/" ? [{
      "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        ...(new URL(url).pathname.startsWith("/our-services/") ? [
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/our-services` },
          { "@type": "ListItem", position: 3, name: metadata.title.split(" | ")[0], item: url },
        ] : [{ "@type": "ListItem", position: 2, name: metadata.title.split(" | ")[0], item: url }]),
      ],
    }] : []),
  ];

  return <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c"),
  }} />;
}
