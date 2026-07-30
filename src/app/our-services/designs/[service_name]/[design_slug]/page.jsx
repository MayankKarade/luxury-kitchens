import ServiceDesignDetailPage from "@/components/service-design-detail/ServiceDesignDetailPage";
import {
  getServiceDesignCollection,
} from "@/components/service-designs/serviceDesignData";
import {
  getServiceDetail,
  serviceSlugs,
} from "@/components/service-detail/serviceDetailData";
import { getExactServiceDesignProduct } from "@/lib/serviceDesignRoute";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  return serviceSlugs.flatMap((service_name) => {
    const service = getServiceDetail(service_name);
    const collection = getServiceDesignCollection(service);

    return collection.products.map((product) => ({
      service_name,
      design_slug: product.slug,
    }));
  });
}

export async function generateMetadata({ params }) {
  const { service_name, design_slug } = await params;
  const service = getServiceDetail(service_name);
  const product = await getExactServiceDesignProduct(
    service,
    service_name,
    design_slug,
  );

  if (!product) {
    notFound();
  }

  return {
    title: `${product.title} - ${service.title} | Netsaarthi`,
    description: product.detailText,
  };
}

export default async function ServiceDesignDetailRoute({ params }) {
  const { service_name, design_slug } = await params;
  const service = getServiceDetail(service_name);
  const product = await getExactServiceDesignProduct(
    service,
    service_name,
    design_slug,
  );

  if (!product) {
    notFound();
  }

  return (
    <ServiceDesignDetailPage
      service={service}
      product={product}
      designSlug={design_slug}
    />
  );
}
