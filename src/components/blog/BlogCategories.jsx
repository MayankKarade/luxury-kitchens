"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

import { API_ENDPOINTS } from "@/config";
import { fadeInUp, stagger } from "./blogData";
import { getBlogCategoryIcon } from "./BlogCategoryIcons";

function mapCategory(category, index) {
  const iconNames = [
    "kitchen",
    "interior",
    "space",
    "material",
    "international",
  ];

  return {
    id: category.id,
    slug: category.slug,
    image: category.image,
    iconName: iconNames[index % iconNames.length],
    title: category.blogcat_name,
    count: `${String(category.count).padStart(2, "0")} Articles`,
  };
}

export default function BlogCategories() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${API_ENDPOINTS.Blog.category}`);
        const apiCategories = response.data.data.category;

        setCategories(apiCategories.map(mapCategory));
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
          {categories.map(({ id, iconName, title, count }) => {
            const CategoryIcon = getBlogCategoryIcon(iconName, title);

            return (
              <motion.article
                key={id}
                variants={fadeInUp}
                className="flex min-h-[108px] items-center gap-4 rounded-xl border border-white/12 bg-[#010129] px-5 py-5 text-left shadow-xl sm:min-h-[150px] sm:flex-col sm:items-center sm:justify-center sm:gap-0 sm:py-6 sm:text-center lg:min-h-[190px] lg:shadow-2xl"
              >
                <CategoryIcon
                  className="h-10 w-10 shrink-0 text-brand-gold sm:mb-4 sm:h-11 sm:w-11 lg:mb-5 lg:h-12 lg:w-12"
                  strokeWidth={1.6}
                />
                <div className="min-w-0">
                  <h2 className="font-serif text-lg font-semibold leading-snug text-white sm:max-w-[170px] sm:text-xl">
                    {title}
                  </h2>
                  <p className="mt-2 text-sm font-bold text-brand-gold sm:mt-4">
                    {count}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      )}
    </section>
  );
}
