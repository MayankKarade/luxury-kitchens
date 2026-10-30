import { getPageMetadata } from "@/lib/seo";
import StructuredData from "@/components/seo/StructuredData";
import ConsultationClient from "@/components/consultation/ConsultationClient";

export const metadata = getPageMetadata('/consultation');

export default function ConsultationPage() {
  return <>
    <StructuredData metadata={metadata} />
    <ConsultationClient />
  </>;
}
