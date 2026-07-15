"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { GalleryIcon } from "./GalleryIcons";
import { galleryTabs, kitchenHero } from "./galleryData";

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
};

export default function GalleryHero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-brand-dark pt-28 pb-14 sm:pt-40 2xl:min-h-[50rem]">
      <div className="absolute inset-0">
        <Image
          src={kitchenHero}
          alt="Luxury kitchen gallery background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/35" />
      </div>

      <div className="relative z-10 mx-auto flex w-full flex-col justify-center px-4 sm:px-10 md:px-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-[620px]"
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
              Gallery
            </span>
          </motion.div>

          <motion.span
            variants={fadeInUp}
            className="bg-brand-gold text-white rounded-full px-3 py-0.5 font-sans text-xs font-bold tracking-[0.25em] uppercase block w-fit"
          >
            OUR GALLERY
          </motion.span>
          <motion.h1
            variants={fadeInUp}
            className="mt-4 font-serif text-4xl font-medium leading-[1.08] text-white sm:text-5xl lg:text-[60px]"
          >
            Visuals That Inspire.
            <br />
            Designs That Transform.
          </motion.h1>
          <motion.div
            variants={fadeInUp}
            className="my-5 h-0.5 w-14 bg-brand-gold"
          />
          <motion.p
            variants={fadeInUp}
            className="max-w-lg text-sm font-medium leading-7 text-zinc-200 sm:text-base"
          >
            Explore our curated collection of luxury interiors, innovative
            designs, and exceptional craftsmanship.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mt-10 grid overflow-hidden rounded-lg border border-white/10 bg-brand-dark/25 backdrop-blur-xs sm:grid-cols-2 lg:grid-cols-4"
        >
          {galleryTabs.map((tab, index) => (
            <motion.a
              key={tab.id}
              href={`#${tab.id}`}
              variants={fadeInUp}
              className={`flex items-center gap-4 border-b border-white/10 px-6 py-5 transition-colors hover:bg-brand-gold/10 sm:border-r lg:border-b-0 ${
                index === 0
                  ? "border-brand-gold bg-brand-gold/5 text-brand-gold"
                  : "text-zinc-200"
              }`}
            >
              <GalleryIcon name={tab.icon} className="h-11 w-11 shrink-0" />
              <span>
                <span className="block text-sm font-extrabold text-white">
                  {tab.title}
                </span>
                <span className="mt-1 block text-xs font-semibold text-zinc-300">
                  {tab.subtitle}
                </span>
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
