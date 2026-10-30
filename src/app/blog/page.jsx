import { getPageMetadata } from "@/lib/seo";
import StructuredData from "@/components/seo/StructuredData";
import { Suspense } from "react";

import BlogClient from "@/components/blog/BlogClient";

export const metadata = getPageMetadata('/blog');

export default function BlogPage() {
  return (
    <>
      <StructuredData metadata={metadata} />
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-brand-white text-sm font-semibold text-neutral-500">
          Loading blog...
        </div>
      }
    >
      <BlogClient />
    </Suspense>
    </>
  );
}
