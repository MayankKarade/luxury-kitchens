"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import heroImg from "../../assets/images/luxury_kitchen_hero_1780070314375.png";
import { categories, fadeInUp, stagger } from "./blogData";

export default function BlogHero() {
  return (
    <section className="relative  min-h-screen 2xl:min-h-[50rem] bg-[#FFFFFF] pt-28 sm:pt-36">
      <div className="absolute inset-0">
        <Image
          src={heroImg}
          alt="Luxury kitchen and living interior"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[1.12] contrast-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/72 via-brand-dark/48 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/48 via-transparent to-brand-dark/24" />
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
            className="mb-8 flex items-center gap-2 text-xs font-semibold"
          >
            <Link
              href="/"
              className="text-white/85 transition-colors hover:text-white"
            >
              Home
            </Link>
            <span className="text-brand-gold">&gt;</span>
            <span className="text-brand-gold">Blog &amp; Insights</span>
          </motion.div>

          <motion.span
            variants={fadeInUp}
            className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-gold"
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

      <section className="hidden lg:flex absolute left-1/2 bottom-0 z-50 w-full -translate-x-1/2 translate-y-1/2 px-4  justify-center">
        {" "}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mx-auto grid  grid-cols-1  gap-4.5 sm:grid-cols-2 lg:grid-cols-5 justify-between"
        >
          {categories.map(({ Icon, title, count }) => (
            <motion.article
              key={title}
              variants={fadeInUp}
              className="flex min-h-[108px] items-center gap-3 rounded-xl border border-white/12 bg-[#010129] px-5 py-5 text-left shadow-xl sm:min-h-[150px] sm:flex-col sm:items-center sm:justify-center sm:gap-0  sm:text-center lg:shadow-2xl"
            >
              <Icon
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
          ))}
        </motion.div>
      </section>
    </section>
  );
}
