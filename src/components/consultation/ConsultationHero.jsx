"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { ConsultationIcon } from "./ConsultationIcons";
import { heroHighlights, heroImg } from "./consultationData";

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

export default function ConsultationHero() {
  return (
    <section className="relative min-h-[620px] overflow-hidden bg-brand-dark pt-28 sm:pt-36 lg:min-h-[660px]">
      <div className="absolute inset-0">
        <Image
          src={heroImg}
          alt="Luxury kitchen consultation"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[1.08] contrast-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090b]/90 via-transparent to-black/25" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[490px] max-w-7xl flex-col justify-center px-4 pb-10 sm:px-10 md:px-16">
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
            <span className="text-brand-gold">Consultation</span>
          </motion.div>

          <motion.span
            variants={fadeInUp}
            className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand-gold"
          >
            CONSULTATION
          </motion.span>
          <motion.h1
            variants={fadeInUp}
            className="mt-4 font-serif text-4xl font-medium leading-[1.08] text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.65)] sm:text-5xl lg:text-[62px]"
          >
            Let&apos;s Design
            <br />
            Your Dream Space
            <br />
            Together.
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-lg text-sm font-semibold leading-7 text-zinc-100 sm:text-base"
          >
            Book a consultation with our experts and take the first step
            towards your luxury kitchen or interior.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mt-10 grid max-w-4xl grid-cols-1 gap-px overflow-hidden border-y border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {heroHighlights.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className="flex items-center gap-3 bg-black/20 px-4 py-4 backdrop-blur-xs"
            >
              <ConsultationIcon
                name={item.icon}
                className="h-7 w-7 shrink-0 text-brand-gold"
              />
              <span className="text-xs font-extrabold text-white">
                {item.title}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
