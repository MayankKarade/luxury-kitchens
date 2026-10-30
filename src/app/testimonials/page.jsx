import { getPageMetadata } from "@/lib/seo";
import StructuredData from "@/components/seo/StructuredData";
import TestimonialsClient from "@/components/testimonials/TestimonialsClient";

export const metadata = getPageMetadata('/testimonials');

export default function TestimonialsPage() {
  return <>
    <StructuredData metadata={metadata} />
    <TestimonialsClient />
  </>;
}
