"use client";

import { motion } from "framer-motion";

import { categories, fadeInUp, stagger } from "./blogData";

export default function BlogCategories() {
  return (
    <section className="relative z-20 bg-brand-white px-4 py-7 sm:px-10 sm:py-9 md:px-16 lg:-mt-24 lg:bg-transparent lg:py-0">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
      >
        {categories.map(({ Icon, title, count }) => (
          <motion.article
            key={title}
            variants={fadeInUp}
            className="flex min-h-[108px] items-center gap-4 rounded-xl border border-white/12 bg-[#080b0e] px-5 py-5 text-left shadow-xl sm:min-h-[150px] sm:flex-col sm:items-center sm:justify-center sm:gap-0 sm:py-6 sm:text-center lg:min-h-[190px] lg:shadow-2xl"
          >
            <Icon
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
        ))}
      </motion.div>
    </section>
  );
}
