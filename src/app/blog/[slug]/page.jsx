import BlogDetailPage from "@/components/blog-detail/BlogDetailPage";
import { getBlogArticle, getBlogSlugs } from "@/components/blog-detail/blogDetailData";

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  return {
    title: `${article.title} - Netsaarthi Blog`,
    description: article.description,
  };
}

export default async function BlogArticleRoute({ params }) {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  return <BlogDetailPage article={article} />;
}
