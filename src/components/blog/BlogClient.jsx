"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import BlogCategories from "./BlogCategories";
import BlogHero from "./BlogHero";
import LatestArticles from "./LatestArticles";
import Newsletter from "./Newsletter";

function toCategoryTitle(value) {
  return String(value || "Blog")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export default function BlogClient() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const categorySlug = searchParams.get("category");
    const categoryTitle = searchParams.get("title");

    if (!categorySlug) {
      setActiveCategory(null);
      return;
    }

    setActiveCategory({
      slug: categorySlug,
      title: categoryTitle || toCategoryTitle(categorySlug),
    });
  }, [searchParams]);

  const handleCategorySelect = (category) => {
    if (!category?.slug) {
      handleClearCategory();
      return;
    }

    const nextCategory = {
      slug: category.slug,
      title: category.title || toCategoryTitle(category.slug),
    };
    const params = new URLSearchParams(searchParams.toString());

    params.set("category", nextCategory.slug);
    params.set("title", nextCategory.title);
    setActiveCategory(nextCategory);
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleClearCategory = () => {
    setActiveCategory(null);
    router.push(pathname);
  };

  return (
    // <div className="min-h-screen bg-brand-white">
    <div className="w-full  flex  justify-center items-center">
      <div className="w-full max-w-[1800px]">
        <BlogHero
          activeCategorySlug={activeCategory?.slug}
          onCategorySelect={handleCategorySelect}
        />
        <BlogCategories
          activeCategorySlug={activeCategory?.slug}
          onCategorySelect={handleCategorySelect}
        />
        <LatestArticles
          activeCategorySlug={activeCategory?.slug}
          activeCategoryTitle={activeCategory?.title}
          onClearCategory={handleClearCategory}
        />
        <Newsletter />
      </div>
    </div>
  );
}
