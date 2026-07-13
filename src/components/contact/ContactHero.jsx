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
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/35" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)]  flex-col justify-center px-4 pb-10 sm:px-10 md:px-16">
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
              Contact
            </span>
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
          className="mt-10 w-full max-w-3xl rounded-xl border border-white/10 bg-brand-dark/20 px-4 py-5 shadow-2xl backdrop-blur-xs"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {heroHighlights.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="flex items-start justify-start gap-3 rounded-lg py-2 transition-all duration-300"
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-gold/40 text-brand-gold sm:h-12 sm:w-12">
                  <ContactIcon
                    name={item.icon}
                    className="h-6 w-6 text-brand-gold sm:h-7 sm:w-7"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="text-xs font-semibold tracking-wide text-white sm:text-sm">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-[11px] font-medium text-gray-400 sm:text-xs">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
