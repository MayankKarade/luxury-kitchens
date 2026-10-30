import { getPageMetadata } from "@/lib/seo";
import StructuredData from "@/components/seo/StructuredData";
import PortfolioClient from "@/components/portfolio/PortfolioClient";

export const metadata = getPageMetadata('/portfolio');

export default function PortfolioPage() {
  return <>
    <StructuredData metadata={metadata} />
    <PortfolioClient />
  </>;
}
