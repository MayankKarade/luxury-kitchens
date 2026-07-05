"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { clientReviews, fadeInUp, stagger } from "./testimonialData";
import { ReviewQuoteIcon, StarRating } from "./TestimonialIcons";

export default function ClientReviews() {
  return (
    <section className="bg-brand-white px-4 py-12 text-brand-dark sm:px-10 sm:py-14 md:px-16">
      <div className="mx-auto ">
        <div className="mb-8 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand-gold">
              CLIENT REVIEWS
            </span>
            <h2 className="mt-3 font-serif text-3xl font-medium leading-tight sm:text-[40px]">
              What Our Clients Say
            </h2>
            <div className="mt-3 h-0.5 w-10 bg-brand-gold" />
          </div>
          <button className="group inline-flex items-center gap-4 rounded-md border border-brand-gold px-5 py-3 text-[10px] font-bold tracking-widest text-brand-gold transition-colors hover:bg-brand-gold hover:text-white">
            VIEW ALL REVIEWS
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4"
        >
          {clientReviews.map((review) => (
            <motion.article
              key={review.name}
              variants={fadeInUp}
              className="flex min-h-[282px] flex-col justify-between rounded-lg border border-neutral-200 bg-white px-6 py-7 shadow-[0_14px_38px_rgba(0,0,0,0.04)]"
            >
              <div>
                <div className="mb-5 flex items-start justify-between gap-4">
                  <StarRating />
                  <ReviewQuoteIcon className="h-7 w-7 text-brand-gold" />
                </div>
                <p className="text-[13px] font-medium leading-7 text-zinc-700">
                  {review.text}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-neutral-200">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-brand-dark">
                    {review.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-zinc-500">
                    {review.location}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
