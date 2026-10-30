import { getPageMetadata } from "@/lib/seo";
import StructuredData from "@/components/seo/StructuredData";
import ContactClient from "@/components/contact/ContactClient";

export const metadata = getPageMetadata('/contact');

export default function ContactPage() {
  return <>
    <StructuredData metadata={metadata} />
    <ContactClient />
  </>;
}
