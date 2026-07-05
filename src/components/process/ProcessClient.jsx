"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Calendar,
  CheckCircle,
  Clock3,
  Headphones,
  LifeBuoy,
  Menu,
  PenTool,
  Ruler,
  ShieldCheck,
  Truck,
  UsersRound,
  Wrench,
} from "lucide-react";

import { useConsultation } from "@/context/ConsultationContext";
import heroImg from "../../assets/images/luxury_kitchen_hero_1780070314375.png";
import ctaImg from "../../assets/images/interior_living_room_1780070361503.png";

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We begin by understanding your needs, style, budget and lifestyle. Our experts guide you with ideas and solutions tailored just for you.",
    Icon: Headphones,
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1100&q=80",
  },
  {
    number: "02",
    title: "Design Planning",
    description:
      "Our designers create customized layouts and 3D concepts that combine functionality with aesthetics to visualize your dream space.",
    Icon: PenTool,
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1100&q=80",
  },
  {
    number: "03",
    title: "Material Selection",
    description:
      "Choose from our premium range of high-quality materials, finishes, fixtures and accessories handpicked for durability and elegance.",
    Icon: Ruler,
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1100&q=80",
  },
  {
    number: "04",
    title: "Manufacturing",
    description:
      "Precision manufacturing using advanced technology and skilled craftsmanship ensures flawless production and superior quality.",
    Icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1100&q=80",
  },
  {
    number: "05",
    title: "Installation",
    description:
      "Our professional team handles the complete installation with utmost care, ensuring every detail is perfectly executed.",
    Icon: BadgeCheck,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=80",
  },
  {
    number: "06",
    title: "Final Delivery",
    description:
      "We complete a detailed quality check and hand over your space on time, ready for you to enjoy a beautiful and functional environment.",
    Icon: Truck,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1100&q=80",
  },
];

const valueCards = [
  {
    Icon: ShieldCheck,
    title: "Transparent Communication",
    text: "We keep you informed at every step of the journey.",
  },
  {
    Icon: Award,
    title: "Quality Assurance",
    text: "Every detail is checked to ensure uncompromised quality.",
  },
  {
    Icon: Clock3,
    title: "On-Time Delivery",
    text: "We value your time and promise deadlines.",
  },
  {
    Icon: UsersRound,
    title: "Client Satisfaction",
    text: "Your happiness is our ultimate goal.",
  },
];

const ctaBenefits = [
  {
    Icon: Headphones,
    title: "Free Consultation",
    text: "Talk to our experts",
  },
  {
    Icon: PenTool,
    title: "Personalized Solutions",
    text: "Tailored for your needs",
  },
  {
    Icon: LifeBuoy,
    title: "Expert Guidance",
    text: "From start to finish",
  },
];

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

function ProcessHero() {
  const { openModal } = useConsultation();

  return (
    <section className="relative min-h-[590px] overflow-hidden bg-brand-dark pt-28 sm:pt-36 lg:min-h-[640px]">
      <div className="absolute inset-0">
        <Image
          src={heroImg}
          alt="Luxury kitchen process hero"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[1.1] contrast-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/72 via-brand-dark/48 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/48 via-transparent to-brand-dark/24" />
      </div>

      <button
        aria-label="Open process menu"
        className="absolute right-8 top-40 z-10 hidden text-brand-gold lg:block"
      >
        <Menu className="h-6 w-6" />
      </button>

      <div className="relative z-10 mx-auto flex min-h-[460px]  items-center px-4 pb-12 sm:px-10 md:px-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-[520px]"
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
            <span className="text-brand-gold">Our Process</span>
          </motion.div>

          <motion.span
            variants={fadeInUp}
            className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand-gold"
          >
            OUR PROCESS
          </motion.span>
          <motion.h1
            variants={fadeInUp}
            className="mt-4 font-serif text-4xl font-medium leading-[1.1] text-white sm:text-5xl lg:text-[58px]"
          >
            From Concept
            <br />
            To Completion
          </motion.h1>
          <motion.div
            variants={fadeInUp}
            className="my-5 h-0.5 w-14 bg-brand-gold"
          />
          <motion.p
            variants={fadeInUp}
            className="max-w-md text-sm font-medium leading-7 text-zinc-200 sm:text-base"
          >
            A seamless and transparent process designed to bring your dream
            space to life with precision, quality and perfection.
          </motion.p>
          <motion.button
            variants={fadeInUp}
            onClick={openModal}
            className="mt-7 inline-flex items-center gap-6 rounded-[4px] bg-brand-gold px-7 py-4 text-xs font-extrabold tracking-wide text-white shadow-[0_10px_24px_rgba(154,1,1,.18)] transition-colors hover:bg-[#9A0101]"
          >
            BOOK A CONSULTATION
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

function ProcessTimeline() {
  return (
    <section className="bg-brand-white px-4 py-10 text-brand-dark sm:px-10 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="relative">
          <div className="absolute bottom-8 left-8 top-8 hidden border-l border-dotted border-brand-gold/45 md:block" />

          <div className="space-y-5">
            {processSteps.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="relative grid grid-cols-1 items-center gap-4 md:grid-cols-[84px_1fr]"
              >
                <div className="hidden h-full items-center justify-center md:flex">
                  <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-brand-gold text-xs font-extrabold text-white shadow-md">
                    {step.number}
                  </div>
                  <div className="absolute left-8 h-px w-8 bg-brand-gold/35" />
                </div>

                <div className="grid overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-[0_8px_24px_rgba(15,17,23,.05)] md:grid-cols-[1.2fr_1fr]">
                  <div className="flex items-center gap-3 sm:gap-5 p-5 sm:p-7">
                    <div className="hidden sm:flex w-14 h-14 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-full bg-[#010129] text-brand-gold shadow-lg">
                      <step.Icon className="h-9 w-9" strokeWidth={1.55} />
                    </div>
                    <div>
                      <div className="flex flex-row gap-3">
                        <div className="flex sm:hidden w-11 h-11 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-full bg-[#010129] text-brand-gold shadow-lg">
                          <step.Icon className="h-4 w-4" strokeWidth={1.55} />
                        </div>
                        <div>
                          <span className="mb-1 block text-xs font-extrabold text-brand-gold md:hidden">
                            {step.number}
                          </span>
                          <h2 className="font-serif text-lg sm:text-2xl font-semibold leading-tight text-neutral-900 sm:text-[28px]">
                            {step.title}
                          </h2>
                        </div>
                      </div>
                      <p className="mt-3 max-w-md text-sm leading-6 text-zinc-600">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative min-h-[180px] md:min-h-[170px]">
                    <Image
                      src={step.image}
                      alt={`${step.title} process`}
                      fill
                      sizes="(min-width: 768px) 42vw, 100vw"
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessValues() {
  return (
    <section className="bg-brand-dark px-4 py-12 text-white sm:px-10 md:px-16">
      <div className="mx-auto grid  grid-cols-1 gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand-gold">
            WHY OUR PROCESS
          </span>
          <h2 className="mt-4 font-serif text-3xl font-medium leading-[1.18] sm:text-[36px]">
            Built On Transparency.
            <br />
            Delivered With Excellence.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {valueCards.map(({ Icon, title, text }) => (
            <div key={title} className="bg-white/5 px-6 py-7 text-center">
              <Icon
                className="mx-auto mb-5 h-9 w-9 text-brand-gold"
                strokeWidth={1.6}
              />
              <h3 className="text-sm font-bold text-white">{title}</h3>
              <p className="mt-3 text-xs leading-5 text-zinc-300">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessCta() {
  const { openModal } = useConsultation();

  return (
    <section className="relative overflow-hidden bg-brand-dark px-4 py-10 text-white sm:px-10 md:px-16">
      <div className="absolute inset-0">
        <Image
          src={ctaImg}
          alt="Luxury interior consultation"
          fill
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <div className="relative z-10 mx-auto grid  grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.15fr_0.75fr] lg:items-center">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand-gold">
            LET&apos;S BRING YOUR VISION TO LIFE
          </span>
          <h2 className="mt-4 font-serif text-3xl font-medium leading-[1.17] sm:text-[38px]">
            Ready To Start Your
            <br />
            Dream Project?
          </h2>
          <p className="mt-4 text-sm text-zinc-200">
            Book a free consultation with our experts today.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {ctaBenefits.map(({ Icon, title, text }) => (
            <div key={title} className="text-center">
              <Icon
                className="mx-auto mb-3 h-8 w-8 text-brand-gold"
                strokeWidth={1.7}
              />
              <h3 className="text-xs font-bold text-white">{title}</h3>
              <p className="mt-1 text-[11px] text-zinc-300">{text}</p>
            </div>
          ))}
        </div>

        <button
          onClick={openModal}
          className="inline-flex items-center justify-center gap-8 rounded-md bg-brand-gold px-8 py-4 text-xs font-extrabold tracking-wide text-white transition-colors hover:bg-[#9A0101]"
        >
          BOOK A CONSULTATION
          <Calendar className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}

export default function ProcessClient() {
  return (
    // <div className="min-h-screen bg-brand-white">
    <div className="w-full  flex  justify-center items-center">
      <div className="w-full max-w-[1500px]">
        <ProcessHero />
        <ProcessTimeline />
        <ProcessValues />
        <ProcessCta />
      </div>
    </div>
  );
}
