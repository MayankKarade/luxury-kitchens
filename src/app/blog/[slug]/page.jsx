import {
  getBlogDetailMetadata,
  renderBlogDetailRoute,
} from "../blogDetailRoute";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  return getBlogDetailMetadata(params);
}

export default async function BlogArticleRoute({ params }) {
  return renderBlogDetailRoute(params);
}
