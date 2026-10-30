import ServiceDesignDetailPage from "@/components/service-design-detail/ServiceDesignDetailPage";
import { notFound, permanentRedirect } from "next/navigation";
import { getServiceForRoute } from "@/lib/serviceRoute";
import { getServiceDesignProductForRoute } from "@/lib/serviceDesignRoute";
import { getDesignMetadata } from "@/lib/seo";
import StructuredData from "@/components/seo/StructuredData";

export const dynamic = "force-dynamic";
export const dynamicParams = true;

export async function generateMetadata({ params }) {
  const { service_name, design_slug } = await params;
  const service = await getServiceForRoute(service_name);
  const product = await getServiceDesignProductForRoute(
    service,
    service.slug,
    design_slug,
  );

  if (!product) notFound();

  return getDesignMetadata(service, product);
}

export default async function ServiceDesignDetailRoute({ params }) {
  const { service_name, design_slug } = await params;
  const service = await getServiceForRoute(service_name);
  const product = await getServiceDesignProductForRoute(
    service,
    service.slug,
    design_slug,
  );

  if (!product) notFound();
  if (service_name !== service.slug || design_slug !== product.slug) {
    permanentRedirect(`/our-services/${service.slug}/designs/${product.slug}`);
  }

  return (
    <>
    <StructuredData metadata={getDesignMetadata(service, product)} />
    <ServiceDesignDetailPage
      service={service}
      product={product}
      designSlug={design_slug}
    />
    </>
  );
}
