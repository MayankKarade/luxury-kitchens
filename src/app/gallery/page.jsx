import { getPageMetadata } from "@/lib/seo";
import StructuredData from "@/components/seo/StructuredData";
import GalleryClient from "@/components/gallery/GalleryClient";

export const metadata = getPageMetadata('/gallery');

export default function GalleryPage() {
  return <>
    <StructuredData metadata={metadata} />
    <GalleryClient />
  </>;
}
