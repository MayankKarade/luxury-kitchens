import { getPageMetadata } from "@/lib/seo";
import StructuredData from "@/components/seo/StructuredData";
import AboutClient from "@/components/about/AboutClient";

export const metadata = getPageMetadata('/about');

export default function AboutPage() {
  return <>
    <StructuredData metadata={metadata} />
    <AboutClient />
  </>;
}
