import { notFound } from "next/navigation";

import ServiceDesignsPage from "@/components/service-designs/ServiceDesignsPage";
import {
  getServiceDetail,
  serviceSlugs,
} from "@/components/service-detail/serviceDetailData";

export async function generateStaticParams() {
  return serviceSlugs.map((service_name) => ({ service_name }));
}

export async function generateMetadata({ params }) {
  const { service_name } = await params;

  if (!serviceSlugs.includes(service_name)) {
    return {};
  }

  const service = getServiceDetail(service_name);

  return {
    title: `${service.title} Designs - Netsaarthi`,
    description: `Explore ${service.title.toLowerCase()} design collections, styles, and premium options by Netsaarthi.`,
  };
}

export default async function ServiceDesignsRoute({ params }) {
  const { service_name } = await params;

  if (!serviceSlugs.includes(service_name)) {
    notFound();
  }

  const service = getServiceDetail(service_name);

  return <ServiceDesignsPage service={service} />;
}
