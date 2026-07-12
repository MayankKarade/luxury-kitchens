import { notFound } from "next/navigation";

import ServiceDetailClient from "@/components/service-detail/ServiceDetailClient";
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
    title: `${service.title} - Netsaarthi | Luxury Kitchens & Interiors`,
    description: service.description,
  };
}

export default async function ServiceDetailRoute({ params }) {
  const { service_name } = await params;

  if (!serviceSlugs.includes(service_name)) {
    notFound();
  }

  return <ServiceDetailClient slug={service_name} />;
}
