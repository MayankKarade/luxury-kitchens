"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import heroImg from "../../assets/images/luxury_kitchen_hero_1780070314375.png";
import { fadeInUp, stagger } from "./blogData";

export default function BlogHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-brand-dark pt-28 sm:pt-36">
      <div className="absolute inset-0">
        <Image
          src={heroImg}
          alt="Luxury kitchen and living interior"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[1.12] contrast-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/78 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090b] via-transparent to-black/30" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[430px] max-w-7xl flex-col justify-start px-4 pb-12 sm:min-h-[500px] sm:px-10 md:px-16 lg:min-h-[510px] lg:pb-28">
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
    </section>
  );
}
