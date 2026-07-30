import ServiceDetailClient from "@/components/service-detail/ServiceDetailClient";
import {
  getServiceDetail,
  serviceSlugs,
} from "@/components/service-detail/serviceDetailData";

export const dynamic = "force-dynamic";
export const dynamicParams = true;

export async function generateStaticParams() {
  return serviceSlugs.map((service_name) => ({ service_name }));
}

export async function generateMetadata({ params }) {
  const { service_name } = await params;
  const service = getServiceDetail(service_name);

  return {
    title: `${service.title} - Netsaarthi | Luxury Kitchens & Interiors`,
    description: service.description,
  };
}

export default async function ServiceDetailRoute({ params }) {
  const { service_name } = await params;

  return <ServiceDetailClient slug={service_name} />;
}
