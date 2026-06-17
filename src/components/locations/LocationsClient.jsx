"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Check,
  Clock3,
  Globe2,
  Handshake,
  Headphones,
  LifeBuoy,
  MapPin,
  Medal,
  Menu,
  UsersRound,
} from "lucide-react";

import { useConsultation } from "@/context/ConsultationContext";
import heroImg from "../../assets/images/luxury_kitchen_hero_1780070314375.png";
import supportImg from "../../assets/images/interior_living_room_1780070361503.png";
import worldMap from "../../assets/images/worldMap.png";

const locations = [
  {
    id: "usa",
    name: "USA",
    flag: "🇺🇸",
    image:
      "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=900&q=80",
    description:
      "Premium kitchen & interior solutions across all major cities in the United States.",
  },
  {
    id: "canada",
    name: "Canada",
    flag: "🇨🇦",
    image:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=900&q=80",
    description:
      "Elegant designs and expert craftsmanship for homes across Canada.",
  },
  {
    id: "uk",
    name: "UK",
    flag: "🇬🇧",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=80",
    description:
      "Delivering modern and luxurious interiors across the United Kingdom.",
  },
  {
    id: "europe",
    name: "Europe",
    flag: "🇪🇺",
    image:
      "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=900&q=80",
    description:
      "Serving clients across Europe with timeless designs and quality.",
  },
  {
    id: "ghana",
    name: "Ghana",
    flag: "🇬🇭",
    image:
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=900&q=80",
    description:
      "Transforming spaces in Ghana with innovation and premium quality.",
  },
];

const heroStats = [
  { Icon: Globe2, value: "5+", label: "Countries Served" },
  { Icon: UsersRound, value: "1200+", label: "Happy Clients" },
  { Icon: Medal, value: "15+", label: "Years Experience" },
  { Icon: Handshake, value: "Global", label: "Trusted Partner" },
];

const reasons = [
  "Local understanding with global standards",
  "Personalized service in every region",
  "On-time delivery and project execution",
  "Premium materials and modern designs",
  "Dedicated local project support",
];

const mapPins = [
  { label: "USA", flag: "🇺🇸", left: "24%", top: "55%" },
  { label: "Canada", flag: "🇨🇦", left: "33%", top: "29%" },
  { label: "UK", flag: "🇬🇧", left: "58%", top: "39%" },
  { label: "Europe", flag: "🇪🇺", left: "76%", top: "51%" },
  { label: "Ghana", flag: "🇬🇭", left: "62%", top: "72%" },
];

const serviceHighlights = [
  {
    Icon: Headphones,
    title: "Free Consultation",
    text: "Talk to our experts",
  },
  {
    Icon: Award,
    title: "International Standards",
    text: "Quality you can trust",
  },
  {
    Icon: Clock3,
    title: "On-Time Delivery",
    text: "Any location, anytime",
  },
  {
    Icon: LifeBuoy,
    title: "End-to-End Support",
    text: "We're with you always",
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

function LocationsHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-brand-dark pt-28 sm:pt-36">
      <div className="absolute inset-0">
        <Image
          src={heroImg}
          alt="Luxury kitchen with global city view"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[1.08] contrast-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/78 to-black/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090b] via-transparent to-black/30" />
      </div>

      <button
        aria-label="Open locations menu"
        className="absolute right-8 top-40 z-10 hidden text-brand-gold lg:block"
      >
        <Menu className="h-6 w-6" />
      </button>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl flex-col justify-end px-4 pb-6 sm:px-10 md:px-16 lg:pb-8">
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
            <span className="text-brand-gold">Locations</span>
          </motion.div>

          <motion.span
            variants={fadeInUp}
            className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand-gold"
          >
            OUR GLOBAL PRESENCE
          </motion.span>
          <motion.h1
            variants={fadeInUp}
            className="mt-4 font-serif text-4xl font-medium leading-[1.1] text-white sm:text-5xl lg:text-[62px]"
          >
            Bringing Luxury
            <br />
            Spaces To The World
          </motion.h1>
          <motion.div
            variants={fadeInUp}
            className="my-5 h-0.5 w-14 bg-brand-gold"
          />
          <motion.p
            variants={fadeInUp}
            className="max-w-lg text-sm font-medium leading-7 text-zinc-200 sm:text-base"
          >
            We proudly deliver premium kitchen and interior solutions across
            multiple countries with unmatched quality, innovation and
            commitment.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mt-8 grid max-w-3xl grid-cols-2 overflow-hidden rounded-md bg-black/20 backdrop-blur-xs border border-white/10 sm:grid-cols-4"
        >
          {heroStats.map(({ Icon, value, label }) => (
            <motion.div
              key={label}
              variants={fadeInUp}
              className="flex items-center gap-3 border-b border-r border-white/10 px-4 py-4 last:border-r-0 sm:border-b-0"
            >
              <Icon
                className="h-8 w-8 shrink-0 text-brand-gold"
                strokeWidth={1.8}
              />
              <div>
                <div className="font-sans text-lg font-extrabold text-white">
                  {value}
                </div>
                <div className="text-[10px] font-semibold text-zinc-200">
                  {label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function LocationCards() {
  return (
    <section className="bg-brand-white px-4 py-10 text-brand-dark sm:px-10 sm:py-12 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand-gold">
            OUR LOCATIONS
          </span>
          <h2 className="mt-3 font-serif text-3xl font-medium sm:text-[38px]">
            Where We Serve
          </h2>
          <div className="mx-auto mt-2 h-0.5 w-10 bg-brand-gold" />
          <p className="mt-2 text-sm text-zinc-600">
            Delivering excellence across borders. Designing spaces that inspire.
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
        >
          {locations.map((location) => (
            <motion.article
              id={location.id}
              key={location.id}
              variants={fadeInUp}
              className="group relative min-h-[385px] overflow-hidden rounded-xl border border-black/10 bg-black shadow-xl"
            >
              <Image
                src={location.image}
                alt={`${location.name} skyline`}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080b0e] via-[#080b0e]/45 to-transparent" />
              <div className="absolute left-5 top-5 flex h-9 w-12 items-center justify-center rounded-md bg-white/95 text-2xl shadow-lg">
                {location.flag}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-serif text-3xl font-semibold text-white">
                  {location.name}
                </h3>
                <div className="my-3 h-px w-full bg-white/15">
                  <div className="h-px w-10 bg-brand-gold" />
                </div>
                <p className="min-h-[72px] text-sm leading-6 text-zinc-100">
                  {location.description}
                </p>
                <Link
                  href={`#${location.id}`}
                  className="mt-4 inline-flex items-center gap-3 text-sm font-bold text-brand-gold transition-colors hover:text-[#eec176]"
                >
                  Explore {location.name}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function GlobalCommitment() {
  const { openModal } = useConsultation();

  return (
    <section className="bg-brand-white px-4 pb-10 text-brand-dark sm:px-10 md:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-brand-gold">
            WHY CHOOSE NETSAARTHI
          </span>
          <h2 className="mt-3 font-serif text-3xl font-medium leading-[1.16] sm:text-[36px]">
            A Global Brand,
            <br />A Local Commitment
          </h2>

          <ul className="mt-6 flex flex-col gap-4">
            {reasons.map((reason) => (
              <li
                key={reason}
                className="flex items-center gap-3 text-sm text-zinc-700"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-gold text-white">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                {reason}
              </li>
            ))}
          </ul>

          <button
            onClick={openModal}
            className="mt-8 inline-flex items-center gap-4 rounded-md border border-brand-gold px-6 py-3 text-xs font-bold tracking-wide text-brand-gold transition-colors hover:bg-brand-gold hover:text-black"
          >
            BOOK A CONSULTATION
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative min-h-[330px]"
        >
          <Image
            src={worldMap}
            alt="World map showing Netsaarthi service locations"
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-contain opacity-70"
          />
          <div className="pointer-events-none absolute left-[24%] top-[47%] hidden h-28 w-[42%] rounded-[50%] border-t border-dashed border-brand-gold/60 lg:block" />
          {mapPins.map((pin) => (
            <div
              key={pin.label}
              className="absolute flex items-center gap-2 rounded-md bg-white px-3 py-2 text-xs font-bold text-neutral-900 shadow-xl"
              style={{ left: pin.left, top: pin.top }}
            >
              <span className="text-xl leading-none">{pin.flag}</span>
              {pin.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceHighlights() {
  return (
    <section className="bg-brand-white px-4 pb-10 sm:px-10 md:px-16">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-xl border border-white/10 bg-[#080b0e] shadow-xl lg:grid-cols-[1fr_260px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {serviceHighlights.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="flex flex-col items-center justify-center border-b border-white/10 px-5 py-7 text-center last:border-r-0 sm:border-r lg:border-b-0"
            >
              <Icon
                className="mb-4 h-9 w-9 text-brand-gold"
                strokeWidth={1.7}
              />
              <h3 className="text-sm font-bold text-white">{title}</h3>
              <p className="mt-2 text-xs text-zinc-300">{text}</p>
            </div>
          ))}
        </div>
        <div className="relative min-h-[190px]">
          <Image
            src={supportImg}
            alt="Luxury interior support"
            fill
            sizes="260px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default function LocationsClient() {
  return (
    <div className="min-h-screen bg-brand-white">
      <LocationsHero />
      <LocationCards />
      <GlobalCommitment />
      <ServiceHighlights />
    </div>
  );
}
