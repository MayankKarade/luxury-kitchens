import {
  getBlogDetailMetadata,
  renderBlogDetailRoute,
} from "@/app/blog/blogDetailRoute";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  return getBlogDetailMetadata(params);
}

export default async function BlogDetailRoute({ params }) {
  return renderBlogDetailRoute(params);
}
