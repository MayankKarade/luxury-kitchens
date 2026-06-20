"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { ContactIcon } from "./ContactIcons";
import { heroHighlights, heroImg } from "./contactData";

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

export default function ContactHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-brand-dark pt-28 sm:pt-36">
      <div className="absolute inset-0">
        <Image
          src={heroImg}
          alt="Luxury kitchen contact background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[1.08] contrast-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/78 to-black/8" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090b] via-transparent to-black/35" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl flex-col justify-center px-4 pb-10 sm:px-10 md:px-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-[620px]"
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
            <span className="text-brand-gold">Contact</span>
          </motion.div>

          <motion.span
            variants={fadeInUp}
            className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand-gold"
          >
            CONTACT US
          </motion.span>
          <motion.h1
            variants={fadeInUp}
            className="mt-4 font-serif text-4xl font-medium leading-[1.08] text-white sm:text-5xl lg:text-[62px]"
          >
            We&apos;d Love To Hear
            <br />
            From You.
          </motion.h1>
          <motion.div
            variants={fadeInUp}
            className="my-5 h-0.5 w-14 bg-brand-gold"
          />
          <motion.p
            variants={fadeInUp}
            className="max-w-lg text-sm font-medium leading-7 text-zinc-200 sm:text-base"
          >
            Have a question or ready to start your project? Get in touch with
            our team and we&apos;ll get back to you shortly.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mt-10 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-3"
        >
          {heroHighlights.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className="flex items-center gap-3"
            >
              <ContactIcon
                name={item.icon}
                className="h-9 w-9 shrink-0 text-brand-gold"
              />
              <div>
                <h3 className="text-xs font-extrabold text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-[11px] font-medium text-zinc-300">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
