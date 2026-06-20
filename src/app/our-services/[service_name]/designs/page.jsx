import ServiceDesignsPage from "@/components/service-designs/ServiceDesignsPage";
import { getServiceDesignCollection } from "@/components/service-designs/serviceDesignData";
import {
  getServiceDetail,
  serviceSlugs,
} from "@/components/service-detail/serviceDetailData";

export async function generateStaticParams() {
  return serviceSlugs.map((service_name) => ({ service_name }));
}

export async function generateMetadata({ params }) {
  const { service_name } = await params;
  const service = getServiceDetail(service_name);

  return {
    title: `${service.title} Designs - Netsaarthi | Luxury Kitchens & Interiors`,
    description: `Explore ${service.title.toLowerCase()} design collections, styles, and premium options by Netsaarthi.`,
  };
}

export default async function ServiceDesignsRoute({ params }) {
  const { service_name } = await params;
  const service = getServiceDetail(service_name);
  const collection = getServiceDesignCollection(service);

  return <ServiceDesignsPage service={service} collection={collection} />;
}
