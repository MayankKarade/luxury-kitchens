"use client";

import { useCallback, useEffect, useState } from "react";
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
  const [isDetailLoading, setIsDetailLoading] = useState(false);
  const blogArticle = fetchedArticle || article;

  const updateArticleFromResponse = useCallback(
    (responseData, requestSlug) => {
      const mappedArticle = mapBlogDetailResponse(responseData, requestSlug);

      if (!mappedArticle) {
        return;
      }

      setFetchedArticle((currentArticle) => ({
        ...mappedArticle,
        categories:
          mappedArticle.categories.length > 0
            ? mappedArticle.categories
            : currentArticle?.categories || article?.categories || [],
      }));
    },
    [article],
  );

  useEffect(() => {
    if (!slug) {
      return;
    }

    const blogdetails = async () => {
      try {
        const response = await axios.get(`${API_ENDPOINTS.Blog.blogDetail}`, {
          params: {
            slug: slug,
          },
        });
        updateArticleFromResponse(response.data, slug);
      } catch (error) {
        console.log(error.response);
      }
    };

    blogdetails();
  }, [slug, updateArticleFromResponse]);

  const handleCategorySelect = async (category) => {
    if (!category?.slug) {
      return;
    }

    setIsDetailLoading(true);

    try {
      const response = await axios.get(API_ENDPOINTS.Blog.singleDetail, {
        params: {
          slug: category.slug,
        },
      });

      updateArticleFromResponse(response.data, category.slug);
    } catch (error) {
      console.log(error.response);
    } finally {
      setIsDetailLoading(false);
    }
  };

  if (!blogArticle) {
    return (
      <div className="w-full flex justify-center ">
        <div className="flex min-h-screen w-full max-w-[1800px] items-center justify-center text-sm font-semibold text-neutral-500">
          Loading blog details...
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center ">
      <div className="w-full max-w-[1800px]">
        <BlogDetailHero article={blogArticle} />
        <BlogDetailMain
          article={blogArticle}
          isDetailLoading={isDetailLoading}
          onCategorySelect={handleCategorySelect}
        />
      </div>
    </div>
  );
}
