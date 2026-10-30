import ServiceDesignsPage from "@/components/service-designs/ServiceDesignsPage";
import { getServiceForRoute } from "@/lib/serviceRoute";
import { getServiceCollectionData } from "@/lib/serviceCollectionRoute";
import { getDesignCollectionMetadata } from "@/lib/seo";
import StructuredData from "@/components/seo/StructuredData";
import { permanentRedirect } from "next/navigation";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { service_name } = await params;
  const service = await getServiceForRoute(service_name);

  const data = await getServiceCollectionData(service.slug);
  return getDesignCollectionMetadata(service, Boolean(data?.product.length));
}

export default async function ServiceDesignsRoute({ params }) {
  const { service_name } = await params;
  const service = await getServiceForRoute(service_name);
  if (service_name !== service.slug) permanentRedirect(`/our-services/${service.slug}/designs`);

  const data = await getServiceCollectionData(service.slug);
  return <>
    <StructuredData metadata={getDesignCollectionMetadata(service, Boolean(data?.product.length))} />
    <ServiceDesignsPage key={service.slug} service={service} initialData={data} />
  </>;
}
