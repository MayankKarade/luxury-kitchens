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
  const data = responseData.data;

  if (Array.isArray(data.blogs)) return data.blogs[0];
  if (data.blogs) return data.blogs;

  return data;
}

function getBlogCategories(responseData) {
  return responseData.data.category;
}

function mapBlogDetail(blog, categories, slug) {
  const matchedCategory = categories.find(
    (category) => category.id === blog.blog_id,
  );
  const category = blog.category_name || matchedCategory?.blogcat_name;
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
    categories: categories.map((categoryItem) => ({
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
  const [blogArticle, setBlogArticle] = useState(article || null);

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
        const blog = getBlogDetailData(response.data);
        const categories = getBlogCategories(response.data);
        setBlogArticle(mapBlogDetail(blog, categories, slug));
      } catch (error) {
        console.log(error.response);
      }
    };

    blogdetails();
  }, [slug]);

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
