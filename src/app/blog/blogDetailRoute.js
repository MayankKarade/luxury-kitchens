import BlogDetailPage from "@/components/blog-detail/BlogDetailPage";
import { API_ENDPOINTS } from "@/config";
import axios from "axios";
import { notFound } from "next/navigation";

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
  if (data) return data;

  return responseData?.blog || responseData?.blogs || null;
}

function getCategoryName(blog) {
  return blog.category_name || blog.blog_category || blog.category || "Blog";
}

export async function getApiBlogDetail(slug) {
  try {
    const response = await axios.get(`${API_ENDPOINTS.Blog.blogDetail}`, {
      params: {
        slug,
        blog_slug: slug,
      },
    });
    const blog = getBlogDetailData(response.data);

    if (!blog) return null;

    const category = getCategoryName(blog);
    const description =
      stripHtml(
        blog.blog_desc ||
          blog.blog_description ||
          blog.blog_main_description ||
          blog.short_description ||
          blog.description ||
          blog.excerpt ||
          blog.content ||
          blog.body,
      ) || "";
    const image =
      blog.blog_image ||
      blog.image ||
      blog.thumbnail ||
      blog.featured_image ||
      blog.banner_image ||
      "";
    const body =
      stripHtml(
        blog.blog_main_description ||
          blog.content ||
          blog.body ||
          blog.long_description,
      ) || description;

    return {
      slug: blog.blog_slug || blog.slug || slug,
      category: String(category).toUpperCase(),
      categoryTitle: String(category)
        .replace(/[-_]+/g, " ")
        .toLowerCase()
        .replace(/\b\w/g, (letter) => letter.toUpperCase()),
      title: blog.blog_title || blog.title || blog.name || "Untitled Blog",
      description,
      date: formatDate(blog.published_at || blog.created_at || blog.date) || "",
      readTime: blog.read_time || blog.readTime || blog.reading_time || "",
      author: blog.author || blog.author_name || "Netsaarthi",
      authorRole: blog.author_role || "Design Team",
      heroImage: image,
      introduction:
        stripHtml(
          blog.introduction ||
            blog.blog_desc ||
            blog.short_description ||
            blog.excerpt,
        ) || description,
      tableOfContents: ["Overview"],
      sections: [
        {
          title: "Overview",
          body,
          image,
        },
      ],
      categories: [],
      recentPosts: [],
      sidebarCta: {
        title: "Have a Project in Mind?",
        text: "Let's create a kitchen that's tailored to your style and needs.",
      },
    };
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
