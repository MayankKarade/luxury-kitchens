import { getServiceForRoute } from "@/lib/serviceRoute";
import { permanentRedirect } from "next/navigation";

const featuredServiceSlug = "fitted-wardrobes";

export const dynamic = "force-dynamic";

export default async function ServiceDesignsRoute({ searchParams }) {
  const { service: requestedService } = await searchParams;
  const service = await getServiceForRoute(requestedService ?? featuredServiceSlug);

  permanentRedirect(`/our-services/${service.slug}/designs`);
}
