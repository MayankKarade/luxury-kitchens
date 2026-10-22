import ServiceDesignDetailPage from "@/components/service-design-detail/ServiceDesignDetailPage";
import { notFound } from "next/navigation";
import { getServiceDetail } from "@/components/service-detail/serviceDetailData";
import { getServiceDesignProductForRoute } from "@/lib/serviceDesignRoute";

export const dynamic = "force-dynamic";
export const dynamicParams = true;

export async function generateMetadata({ params }) {
  const { service_name, design_slug } = await params;
  const service = getServiceDetail(service_name);
  const product = await getServiceDesignProductForRoute(
    service,
    service_name,
    design_slug,
  );

  if (!product) notFound();

  return {
    title: `${product.title} - ${service.title} | Netsaarthi`,
    description: product.detailText,
  };
}

export default async function ServiceDesignDetailRoute({ params }) {
  const { service_name, design_slug } = await params;
  const service = getServiceDetail(service_name);
  const product = await getServiceDesignProductForRoute(
    service,
    service_name,
    design_slug,
  );

  if (!product) notFound();

  return (
    <ServiceDesignDetailPage
      service={service}
      product={product}
      designSlug={design_slug}
    />
  );
}
