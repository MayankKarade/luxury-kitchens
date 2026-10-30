import { cache } from "react";
import { notFound } from "next/navigation";
import { getServiceDetail } from "@/components/service-detail/serviceDetailData";

const aliases = {
  "modular-kitchens": "kitchens",
  "luxury-wardrobes": "fitted-wardrobes",
};

const getAvailableServices = cache(async () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!baseUrl) throw new Error("Service API is not configured");

  const response = await fetch(`${baseUrl}/service`, { cache: "no-store" });
  if (!response.ok) throw new Error("Unable to load services");

  const data = await response.json();
  if (!Array.isArray(data?.data?.service)) {
    throw new Error("Invalid service API response");
  }
  return data.data.service;
});

export const getServiceForRoute = cache(async (slug) => {
  if (typeof slug !== "string" || !slug) notFound();
  const services = await getAvailableServices();
  const canonicalSlug = aliases[slug] || slug;
  const match = services.find(
    (service) => service.slug === canonicalSlug &&
      (service.status == null || String(service.status) === "1"),
  );
  if (!match) notFound();

  return {
    ...getServiceDetail(match.slug),
    title: match.title || match.service_name || getServiceDetail(match.slug).title,
    description: match.description || getServiceDetail(match.slug).description,
    slug: match.slug,
  };
});
