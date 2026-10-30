import { getPageMetadata } from "@/lib/seo";
import StructuredData from "@/components/seo/StructuredData";
import OurServicesClient from "@/components/services/OurServicesClient";

export const metadata = getPageMetadata('/our-services');

export default function ServicesPage() {
  return <>
    <StructuredData metadata={metadata} />
    <OurServicesClient />
  </>;
}
