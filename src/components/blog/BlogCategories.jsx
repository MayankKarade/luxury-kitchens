"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

import { API_ENDPOINTS } from "@/config";
import { fadeInUp, stagger } from "./blogData";
import { getBlogCategoryIcon } from "./BlogCategoryIcons";

function getCategoryList(responseData) {
  return (
    responseData?.data?.blog_category ||
    responseData?.data?.category ||
    responseData?.data?.categories ||
    responseData?.blog_category ||
    responseData?.category ||
    responseData?.categories ||
    []
  );
}

function mapCategory(category, index) {
  const iconNames = [
    "kitchen",
    "interior",
    "space",
    "material",
    "international",
  ];

  return {
    id: category.id || category.slug || category.blogcat_name || index,
    slug: category.slug,
    image: category.image,
    iconName: iconNames[index % iconNames.length],
    title: category.blogcat_name || category.name || "Blog Category",
    count: `${String(category.count || 0).padStart(2, "0")} Articles`,
  };
}

export default function BlogCategories({
  activeCategorySlug,
  onCategorySelect,
}) {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${API_ENDPOINTS.Blog.category}`);
        const apiCategories = getCategoryList(response.data);

        setCategories(
          Array.isArray(apiCategories) ? apiCategories.map(mapCategory) : [],
        );
      } catch (error) {
        setCategories([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="relative block lg:hidden z-20 bg-brand-white px-4 py-7 sm:px-10 sm:py-9 md:px-16 lg:-mt-24 lg:bg-transparent lg:py-0">
      {isLoading ? (
        <div className="flex min-h-28 items-center justify-center text-sm font-semibold text-neutral-500">
          Loading categories...
        </div>
      ) : categories.length === 0 ? (
        <div className="flex min-h-28 items-center justify-center text-sm font-semibold text-neutral-500">
          No blog categories available.
        </div>
      ) : (
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mx-auto grid  grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
        >
          {categories.map((category) => {
            const { id, iconName, title, count, slug } = category;
            const CategoryIcon = getBlogCategoryIcon(iconName, title);
            const isActive = activeCategorySlug === slug;

            return (
              <motion.button
                key={id}
                type="button"
                onClick={() => onCategorySelect?.(category)}
                variants={fadeInUp}
                className={`flex min-h-[108px] items-center gap-4 rounded-xl border px-5 py-5 text-left shadow-xl transition-all duration-300 sm:min-h-[150px] sm:flex-col sm:items-center sm:justify-center sm:gap-0 sm:py-6 sm:text-center lg:min-h-[190px] lg:shadow-2xl ${
                  isActive
                    ? "border-brand-gold bg-brand-gold"
                    : "border-white/12 bg-[#010129] hover:border-brand-gold/70"
                }`}
              >
                <CategoryIcon
                  className={`h-10 w-10 shrink-0 sm:mb-4 sm:h-11 sm:w-11 lg:mb-5 lg:h-12 lg:w-12 ${
                    isActive ? "text-white" : "text-brand-gold"
                  }`}
                  strokeWidth={1.6}
                />
                <div className="min-w-0">
                  <span className="block font-serif text-lg font-semibold leading-snug text-white sm:max-w-[170px] sm:text-xl">
                    {title}
                  </span>
                  <p
                    className={`mt-2 text-sm font-bold sm:mt-4 ${
                      isActive ? "text-white" : "text-brand-gold"
                    }`}
                  >
                    {count}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      )}
    </section>
  );
}
