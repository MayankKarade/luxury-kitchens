import { Suspense } from "react";

import BlogClient from "@/components/blog/BlogClient";

export const metadata = {
  title: "Blog & Insights - Netsaarthi | Luxury Kitchens & Interiors",
  description:
    "Explore kitchen design trends, luxury interior ideas, space optimization tips, material guides and international design inspiration.",
};

export default function BlogPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-brand-white text-sm font-semibold text-neutral-500">
          Loading blog...
        </div>
      }
    >
      <BlogClient />
    </Suspense>
  );
}
