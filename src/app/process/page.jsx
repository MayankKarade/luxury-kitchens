import { getPageMetadata } from "@/lib/seo";
import StructuredData from "@/components/seo/StructuredData";
import ProcessClient from "@/components/process/ProcessClient";

export const metadata = getPageMetadata('/process');

export default function ProcessPage() {
  return <>
    <StructuredData metadata={metadata} />
    <ProcessClient />
  </>;
}
