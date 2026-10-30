import { getPageMetadata } from "@/lib/seo";
import StructuredData from "@/components/seo/StructuredData";
import LocationsClient from "@/components/locations/LocationsClient";

export const metadata = getPageMetadata('/locations');

export default function LocationsPage() {
  return <>
    <StructuredData metadata={metadata} />
    <LocationsClient />
  </>;
}
