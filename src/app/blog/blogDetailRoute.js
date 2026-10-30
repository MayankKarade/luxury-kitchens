import BlogDetailPage from "@/components/blog-detail/BlogDetailPage";
import { mapBlogDetailResponse } from "@/components/blog-detail/blogDetailMapper";
import { API_ENDPOINTS } from "@/config";
import axios from "axios";
import { notFound } from "next/navigation";
import { cache } from "react";
import { getArticleMetadata } from "@/lib/seo";
import StructuredData from "@/components/seo/StructuredData";

export const getApiBlogDetail = cache(async (slug) => {
  try {
    const response = await axios.get(`${API_ENDPOINTS.Blog.blogDetail}`, {
      params: {
        slug: slug,
      },
    });
    return mapBlogDetailResponse(response.data, slug);
  } catch (error) {
    return null;
  }
});

export async function getBlogDetailMetadata(params) {
  const { slug } = await params;
  const article = await getApiBlogDetail(slug);

  if (!article) {
    notFound();
  }

  return getArticleMetadata(article);
}

export async function renderBlogDetailRoute(params) {
  const { slug } = await params;
  const article = await getApiBlogDetail(slug);

  if (!article) {
    notFound();
  }

  return <>
    <StructuredData metadata={getArticleMetadata(article)} />
    <BlogDetailPage article={article} />
  </>;
}
