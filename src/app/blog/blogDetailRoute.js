import BlogDetailPage from "@/components/blog-detail/BlogDetailPage";
import { mapBlogDetailResponse } from "@/components/blog-detail/blogDetailMapper";
import { API_ENDPOINTS } from "@/config";
import axios from "axios";
import { notFound } from "next/navigation";

export async function getApiBlogDetail(slug) {
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
}

export async function getBlogDetailMetadata(params) {
  const { slug } = await params;
  const article = await getApiBlogDetail(slug);

  if (!article) {
    return {
      title: "Blog Not Found - Netsaarthi Blog",
    };
  }

  return {
    title: `${article.title} - Netsaarthi Blog`,
    description: article.description,
  };
}

export async function renderBlogDetailRoute(params) {
  const { slug } = await params;
  const article = await getApiBlogDetail(slug);

  if (!article) {
    notFound();
  }

  return <BlogDetailPage article={article} />;
}
