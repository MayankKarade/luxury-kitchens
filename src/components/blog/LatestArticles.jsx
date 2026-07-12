"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Timer } from "lucide-react";

import { API_ENDPOINTS } from "@/config";

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

function ArticleCard({ article, index }) {
  const title = article.blog_title || "Untitled Blog";
  const description =
    article.blog_desc || stripHtml(article.blog_main_description);
  const category = article.category_name || "Blog";
  const date = formatDate(article.created_at);
  const image = article.blog_image;
  const slug = article.blog_slug;

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      className="group overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-[0_8px_24px_rgba(15,17,23,.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-56 overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-neutral-100" />
        )}
      </div>

      <div className="p-6">
        <span className="text-xs font-extrabold uppercase tracking-wide text-brand-gold">
          {category}
        </span>

        <h3 className="mt-3 font-serif text-2xl font-semibold leading-[1.15] text-neutral-900">
          {title}
        </h3>

        <p className="mt-4 min-h-[52px] text-sm leading-6 text-zinc-600">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-zinc-500">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            {date}
          </div>

          <div className="flex items-center gap-2">
            <Timer className="h-4 w-4" />5 min read
          </div>

          <Link
            href={`/blog-detail/${slug}`}
            className="inline-flex items-center gap-2 text-brand-gold transition-colors hover:text-[#9A0101]"
          >
            Read More
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function LatestArticles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(API_ENDPOINTS.Blog.blogsList);

        const apiBlogs = response.data?.data?.blogs;

        setArticles(Array.isArray(apiBlogs) ? apiBlogs : []);
      } catch (error) {
        console.log("Blogs API Error:", error);
        setArticles([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="bg-brand-white px-4 pb-10 pt-8 text-brand-dark sm:px-10 sm:pt-10 md:px-16 lg:pt-36">
      <div className="mx-auto">
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand-gold">
              LATEST INSIGHTS
            </span>

            <h2 className="mt-4 font-serif text-3xl font-medium sm:text-[42px]">
              Latest Articles &amp; Ideas
            </h2>
          </div>

          <Link
            href="/blog"
            className="group inline-flex w-fit items-center gap-4 rounded-md border border-brand-gold px-6 py-3 text-xs font-bold tracking-wide text-brand-gold transition-colors hover:bg-brand-gold hover:text-white"
          >
            VIEW ALL ARTICLES
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {isLoading ? (
          <div className="flex min-h-40 items-center justify-center text-sm font-semibold text-neutral-500">
            Loading articles...
          </div>
        ) : articles.length === 0 ? (
          <div className="flex min-h-40 items-center justify-center text-sm font-semibold text-neutral-500">
            No blog articles available.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article, index) => (
              <ArticleCard key={article.id} article={article} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
