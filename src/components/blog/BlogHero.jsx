"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import heroImg from "../../assets/Home/caliwoodBlogHero.png";
import { fadeInUp, stagger } from "./blogData";
import { getBlogCategoryIcon } from "./BlogCategoryIcons";
import { API_ENDPOINTS } from "@/config";

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
  const count =
    category.count ||
    category.blog_count ||
    category.blogs_count ||
    category.total_blogs;

  return {
    iconName: category.icon || iconNames[index % iconNames.length],
    title:
      category.blogcat_name ||
      category.name ||
      category.category ||
      "Blog Category",
    count: count ? `${String(count).padStart(2, "0")} Articles` : "0 Articles",
  };
}

export default function BlogHero() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${API_ENDPOINTS.Blog.category}`);
        const apiCategories = getCategoryList(response.data);

        if (Array.isArray(apiCategories) && apiCategories.length > 0) {
          setCategories(apiCategories.map(mapCategory));
        }
      } catch (error) {
        setCategories([]);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="relative  min-h-screen 2xl:min-h-[50rem] bg-[#FFFFFF] pt-28 sm:pt-36">
      <div className="absolute inset-0">
        <Image
          src={heroImg}
          alt="Luxury kitchen and living interior"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/35" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[430px]  flex-col justify-start px-4 pb-12 sm:min-h-[500px] sm:px-10 md:px-16 lg:min-h-[510px] lg:pb-28">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-[590px]"
        >
          <motion.div
            variants={fadeInUp}
            className="w-fit px-3 py-0.5 rounded-full flex items-center bg-brand-gold/40 gap-1.5 text-xs font-sans tracking-[0.12em] text-brand-gold/90 uppercase mb-8"
          >
            <Link
              href="/"
              className="text-white font-medium hover:font-bold transition-all duration-150"
            >
              Home
            </Link>
            <span className="text-white font-normal px-0.5">&gt;</span>
            <span className="text-white font-medium hover:font-bold transition-all duration-150">
              Blog &amp; Insights
            </span>
          </motion.div>

          <motion.span
            variants={fadeInUp}
            className="bg-brand-gold text-white rounded-full px-3 py-0.5 font-sans text-xs font-bold tracking-[0.25em] uppercase block w-fit"
          >
            BLOG &amp; INSIGHTS
          </motion.span>
          <motion.h1
            variants={fadeInUp}
            className="mt-4 font-serif text-4xl font-medium leading-[1.1] text-white sm:text-5xl lg:text-[60px]"
          >
            Ideas. Inspiration.
            <br />
            Interior Excellence.
          </motion.h1>
          <motion.div
            variants={fadeInUp}
            className="my-5 h-0.5 w-14 bg-brand-gold"
          />
          <motion.p
            variants={fadeInUp}
            className="max-w-md text-sm font-medium leading-7 text-zinc-200 sm:text-base"
          >
            Explore expert tips, design trends, and inspiration to help you
            create beautiful, functional spaces.
          </motion.p>
        </motion.div>
      </div>

      {categories.length > 0 && (
        <section className="hidden lg:flex absolute left-1/2 bottom-0 z-50 w-full -translate-x-1/2 translate-y-1/2 px-4  justify-center">
          {" "}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="mx-auto grid  grid-cols-1  gap-4.5 sm:grid-cols-2 lg:grid-cols-5 justify-between"
          >
            {categories.map(({ iconName, title, count }) => {
              const CategoryIcon = getBlogCategoryIcon(iconName, title);

              return (
                <motion.article
                  key={title}
                  variants={fadeInUp}
                  className="flex min-h-[108px] items-center gap-3 rounded-xl border border-white/12 bg-[#010129] px-5 py-5 text-left shadow-xl sm:min-h-[150px] sm:flex-col sm:items-center sm:justify-center sm:gap-0  sm:text-center lg:shadow-2xl"
                >
                  <CategoryIcon
                    className="h-10 w-10 shrink-0 text-brand-gold sm:mb-3 sm:h-11 sm:w-11  lg:h-12 lg:w-12"
                    strokeWidth={1.6}
                  />
                  <div className="min-w-0">
                    <h2 className="font-serif text-lg font-semibold leading-snug text-white sm:max-w-[170px] sm:text-lg">
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
        </section>
      )}
    </section>
  );
}
