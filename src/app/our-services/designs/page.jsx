import ServiceDesignsPage from "@/components/service-designs/ServiceDesignsPage";
import {
  getServiceDetail,
  serviceSlugs,
} from "@/components/service-detail/serviceDetailData";

const featuredServiceSlug = "luxury-wardrobes";

export async function generateMetadata() {
  const service = getServiceDetail(featuredServiceSlug);

  return {
    title: `Designs - Netsaarthi | Luxury Kitchens & Interiors`,
    description: `Explore ${service.title.toLowerCase()} design collections, styles, and premium options by Netsaarthi.`,
  };
}

export default async function ServiceDesignsRoute({ searchParams }) {
  const { service: requestedService } = await searchParams;
  const serviceSlug = serviceSlugs.includes(requestedService)
    ? requestedService
    : featuredServiceSlug;
  const service = getServiceDetail(serviceSlug);

  return <ServiceDesignsPage service={service} />;
}
