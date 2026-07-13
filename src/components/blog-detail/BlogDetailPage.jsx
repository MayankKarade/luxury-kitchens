"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

import { API_ENDPOINTS } from "@/config";
import BlogDetailHero from "./BlogDetailHero";
import BlogDetailMain from "./BlogDetailMain";

function stripHtml(value = "") {
  return String(value)
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function formatDate(value) {
  if (!value) return "";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return "";

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

function getBlogDetailData(responseData) {
  const data = responseData?.data;

  if (Array.isArray(data?.blog)) return data.blog[0];
  if (Array.isArray(data?.blogs)) return data.blogs[0];
  if (data?.blog) return data.blog;
  if (data?.blogs) return data.blogs;

  return data;
}

function getBlogCategories(responseData) {
  const data = responseData?.data;

  return data?.category || data?.blog_category || [];
}

function mapBlogDetail(blog, categories, slug) {
  const categoryList = Array.isArray(categories) ? categories : [];
  const matchedCategory = categoryList.find(
    (category) => category.id === blog.blog_id,
  );
  const category = blog.category_name || matchedCategory?.blogcat_name || "Blog";
  const description = stripHtml(
    blog.blog_desc ||
      blog.blog_description ||
      blog.blog_main_description ||
      blog.description,
  );
  const image = blog.blog_image || blog.image;
  const body = stripHtml(blog.blog_main_description || blog.description);

  return {
    slug: blog.blog_slug || blog.slug || slug,
    category: String(category).toUpperCase(),
    categoryTitle: String(category)
      .replace(/[-_]+/g, " ")
      .toLowerCase()
      .replace(/\b\w/g, (letter) => letter.toUpperCase()),
    title: blog.blog_title || blog.title,
    description,
    date: formatDate(blog.created_at),
    readTime: blog.read_time || "",
    author: blog.author || "Netsaarthi",
    authorRole: blog.author_role || "Design Team",
    heroImage: image,
    introduction: description,
    tableOfContents: ["Overview"],
    sections: [
      {
        title: "Overview",
        body,
        image,
      },
    ],
    categories: categoryList.map((categoryItem) => ({
      id: categoryItem.id,
      title: categoryItem.blogcat_name,
      slug: categoryItem.slug,
      image: categoryItem.image,
    })),
    recentPosts: [],
    sidebarCta: {
      title: "Have a Project in Mind?",
      text: "Let's create a kitchen that's tailored to your style and needs.",
    },
  };
}

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
        const blog = getBlogDetailData(response.data);
        const categories = getBlogCategories(response.data);
        setFetchedArticle(mapBlogDetail(blog, categories, slug));
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
