export function sanitizeHtml(value) {
  if (!value) return "";

  return String(value)
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, "")
    .replace(/\son\w+=(["']).*?\1/gi, "")
    .replace(/\son\w+=\S+/gi, "")
    .replace(/javascript:/gi, "");
}

export function stripHtml(value = "") {
  return sanitizeHtml(value)
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;|&amp;nbsp;/gi, " ")
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

export function getBlogDetailData(responseData) {
  const data = responseData?.data;

  if (Array.isArray(data?.blog)) return data.blog[0];
  if (Array.isArray(data?.blogs)) return data.blogs[0];
  if (data?.blog) return data.blog;
  if (Array.isArray(data?.blogs)) return data.blogs[0];
  if (data?.blogs && !Array.isArray(data.blogs)) return data.blogs;
  if (data) return data;

  return responseData?.blog || responseData?.blogs || null;
}

export function getBlogCategories(responseData) {
  const data = responseData?.data;
  const categories =
    data?.category ||
    data?.blog_category ||
    responseData?.category ||
    responseData?.blog_category ||
    [];

  return Array.isArray(categories) ? categories : [];
}

function toTitleCase(value) {
  return String(value || "Blog")
    .replace(/[-_]+/g, " ")
    .toLowerCase()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function cleanTocItem(value) {
  return stripHtml(value).replace(/^\d+\.?\s*/g, "").trim();
}

function extractTableOfContents(html) {
  const tocBlock = sanitizeHtml(html).match(
    /<h2[^>]*>\s*Table\s+of\s+Contents\s*<\/h2>\s*<(ol|ul)[^>]*>([\s\S]*?)<\/\1>/i,
  );

  if (!tocBlock) return [];

  return [...tocBlock[2].matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)]
    .map((match) => cleanTocItem(match[1]))
    .filter(Boolean);
}

function removeTableOfContents(html) {
  return sanitizeHtml(html)
    .replace(
      /<h2[^>]*>\s*Table\s+of\s+Contents\s*<\/h2>\s*<(ol|ul)[^>]*>[\s\S]*?<\/\1>/i,
      "",
    )
    .trim();
}

function getCategoryName(blog, categories) {
  const matchedCategory = categories.find(
    (category) => String(category.id) === String(blog?.blog_id),
  );

  return (
    blog?.category_name ||
    blog?.blog_category ||
    blog?.category ||
    matchedCategory?.blogcat_name ||
    "Blog"
  );
}

export function mapBlogDetailResponse(responseData, slug) {
  const blog = getBlogDetailData(responseData);

  if (!blog) return null;

  const categories = getBlogCategories(responseData);
  const category = getCategoryName(blog, categories);
  const mainDescription =
    blog.blog_main_description ||
    blog.content ||
    blog.body ||
    blog.long_description ||
    "";
  const contentHtml = removeTableOfContents(mainDescription);
  const description =
    stripHtml(
      blog.blog_desc ||
        blog.blog_description ||
        blog.short_description ||
        blog.description ||
        blog.excerpt ||
        mainDescription,
    ) || "";
  const image =
    blog.blog_image ||
    blog.blog_back_image ||
    blog.image ||
    blog.thumbnail ||
    blog.featured_image ||
    blog.banner_image ||
    "";
  const tableOfContents = extractTableOfContents(mainDescription);
  const body = stripHtml(contentHtml) || description;

  return {
    slug: blog.blog_slug || blog.slug || slug,
    category: String(category).toUpperCase(),
    categoryTitle: toTitleCase(category),
    title: blog.blog_title || blog.title || blog.name || "Untitled Blog",
    description,
    date: formatDate(blog.published_at || blog.created_at || blog.date) || "",
    readTime: blog.read_time || blog.readTime || blog.reading_time || "",
    author: blog.uploaded_by || blog.author || blog.author_name || "Netsaarthi",
    authorRole: blog.designation || blog.author_role || "Design Team",
    heroImage: image,
    introduction:
      stripHtml(
        blog.introduction ||
          blog.blog_desc ||
          blog.short_description ||
          blog.excerpt,
      ) || description,
    contentHtml,
    tableOfContents: tableOfContents.length ? tableOfContents : ["Overview"],
    sections: [
      {
        title: "Overview",
        body,
        image,
      },
    ],
    categories: categories.map((categoryItem) => ({
      id: categoryItem.id,
      title: categoryItem.blogcat_name || categoryItem.name || "Blog",
      slug: categoryItem.slug,
      image: categoryItem.image,
      count: categoryItem.count ?? categoryItem.blog_count,
    })),
    recentPosts: [],
    sidebarCta: {
      title: "Have a Project in Mind?",
      text: "Let's create a kitchen that's tailored to your style and needs.",
    },
  };
}
