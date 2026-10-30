import ServiceDetailClient from "@/components/service-detail/ServiceDetailClient";
import { getServiceForRoute } from "@/lib/serviceRoute";
import { getServiceMetadata } from "@/lib/seo";
import StructuredData from "@/components/seo/StructuredData";
import { permanentRedirect } from "next/navigation";

export const dynamic = "force-dynamic";
export const dynamicParams = true;

export async function generateMetadata({ params }) {
  const { service_name } = await params;
  const service = await getServiceForRoute(service_name);

  return getServiceMetadata(service);
}

export default async function ServiceDetailRoute({ params }) {
  const { service_name } = await params;
  const service = await getServiceForRoute(service_name);
  if (service_name !== service.slug) permanentRedirect(`/our-services/${service.slug}`);

  return <>
    <StructuredData metadata={getServiceMetadata(service)} />
    <ServiceDetailClient service={service} slug={service.slug} />
  </>;
}
