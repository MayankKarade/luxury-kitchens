import ServiceDesignDetailPage from "@/components/service-design-detail/ServiceDesignDetailPage";
import {
  getServiceDesignCollection,
  getServiceDesignProduct,
} from "@/components/service-designs/serviceDesignData";
import {
  getServiceDetail,
  serviceSlugs,
} from "@/components/service-detail/serviceDetailData";

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
  const product = getServiceDesignProduct(service, design_slug);

  return {
    title: `${product.title} - ${service.title} | Netsaarthi`,
    description: product.detailText,
  };
}

export default async function ServiceDesignDetailRoute({ params }) {
  const { service_name, design_slug } = await params;
  const service = getServiceDetail(service_name);
  const product = getServiceDesignProduct(service, design_slug);

  return <ServiceDesignDetailPage service={service} product={product} />;
}
