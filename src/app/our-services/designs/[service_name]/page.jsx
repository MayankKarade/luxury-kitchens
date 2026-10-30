import { getServiceForRoute } from "@/lib/serviceRoute";
import { permanentRedirect } from "next/navigation";
import { getDesignCollectionMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { service_name } = await params;
  const service = await getServiceForRoute(service_name);

  return getDesignCollectionMetadata(service, false);
}

export default async function ServiceDesignsRoute({ params }) {
  const { service_name } = await params;
  const service = await getServiceForRoute(service_name);

  permanentRedirect(`/our-services/${service.slug}/designs`);
}
