"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

import { API_ENDPOINTS } from "@/config";
import { mapBlogDetailResponse } from "./blogDetailMapper";
import BlogDetailHero from "./BlogDetailHero";
import BlogDetailMain from "./BlogDetailMain";

export default function BlogDetailPage({ article }) {
  const params = useParams();
  const slug = params?.slug;
  const [fetchedArticle, setFetchedArticle] = useState(null);
  const blogArticle = article || fetchedArticle;

  useEffect(() => {
    if (article) {
      return;
    }

    if (!slug) {
      return;
    }

    const blogdetails = async () => {
      try {
        const response = await axios.get(`${API_ENDPOINTS.Blog.blogDetail}`, {
          params: {
            slug,
            blog_slug: slug,
          },
        });
        setFetchedArticle(mapBlogDetailResponse(response.data, slug));
      } catch (error) {
        console.log(error.response);
      }
    };

    blogdetails();
  }, [article, slug]);

  if (!blogArticle) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-brand-white text-sm font-semibold text-neutral-500">
        Loading blog details...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-white">
      <BlogDetailHero article={blogArticle} />
      <BlogDetailMain article={blogArticle} />
    </div>
  );
}
