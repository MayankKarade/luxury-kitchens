"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import heroImg from "../../assets/Home/caliwoodHomeHero.png";
import { fadeInUp, heroStats, stagger } from "./testimonialData";
import {
  GlobeLineIcon,
  QuoteMarkIcon,
  RatingStarIcon,
  TrophyIcon,
} from "./TestimonialIcons";

const statIcons = {
  rating: RatingStarIcon,
  quote: QuoteMarkIcon,
  trophy: TrophyIcon,
  globe: GlobeLineIcon,
};

export default function TestimonialsHero() {
  return (
    <section className="relative overflow-hidden bg-brand-dark pt-28 sm:pt-36">
      <div className="absolute inset-0">
        <Image
          src={heroImg}
          alt="Luxury kitchen interior for testimonials"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/35" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[560px]  flex-col justify-between px-4 sm:px-10 md:px-16 pb-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-[620px]"
        >
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-1.5 text-xs font-sans tracking-[0.12em] text-brand-gold/90 uppercase mb-8"
          >
            <Link
              href="/"
              className="text-zinc-350 text-white font-semibold transition-colors duration-200"
            >
              Home
            </Link>
            <span className="text-brand-gold font-normal px-0.5">&gt;</span>
            <span className="text-brand-gold font-semibold hover:font-bold">
              Testimonials
            </span>
          </motion.div>

          <motion.span
            variants={fadeInUp}
            className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand-gold"
          >
            TESTIMONIALS
          </motion.span>
          <motion.h1
            variants={fadeInUp}
            className="mt-4 font-serif text-4xl font-medium leading-[1.08] text-white sm:text-5xl lg:text-[62px]"
          >
            Trusted By Clients.
            <br />
            Proven By Results.
          </motion.h1>
          <motion.div
            variants={fadeInUp}
            className="my-5 h-0.5 w-14 bg-brand-gold"
          />
          <motion.p
            variants={fadeInUp}
            className="max-w-md text-sm font-medium leading-7 text-zinc-200 sm:text-base"
          >
            Real stories from real clients who have experienced the Netsaarthi
            difference.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid w-full grid-cols-1 overflow-hidden border-t border-white/10 bg-brand-dark/25 backdrop-blur-xs sm:grid-cols-2 lg:grid-cols-4"
        >
          {heroStats.map((stat) => {
            const Icon = statIcons[stat.icon];
            return (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="flex items-center gap-4 border-b border-white/10 px-5 py-5 last:border-b-0 sm:border-r lg:border-b-0"
              >
                <Icon className="h-10 w-10 shrink-0 text-brand-gold" />
                <div>
                  <div className="font-sans text-2xl font-extrabold leading-none text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1.5 text-[11px] font-semibold text-zinc-300">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
