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
import heroImg from "../../assets/Home/caliwoodLocationHero.png";
import supportImg from "../../assets/images/interior_living_room_1780070361503.png";
import ServiceLocationsMap from "./ServiceLocationsMap";

const locations = [
  {
    id: "usa",
    name: "USA",
    flag: "🇺🇸",
    image:
      "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=900&q=80",
    description:
      "Premium kitchen & interior solutions across all major cities in the United States.",
    address:
      "218 N. Lee Street, Suite # 200 Alexandria, VA 22314-2631 United States",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=218%20N.%20Lee%20Street%2C%20Suite%20%23%20200%20Alexandria%2C%20VA%2022314-2631%20United%20States",
  },
  {
    id: "ghana",
    name: "Ghana",
    flag: "🇬🇭",
    image:
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=900&q=80",
    description:
      "Transforming spaces in Ghana with innovation and premium quality.",
    address:
      "Off No. TMA 0411, Adjacent Adenta Police Station, Adenta - Accra, Ghana",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Off%20No.%20TMA%200411%2C%20Adjacent%20Adenta%20Police%20Station%2C%20Adenta%20-%20Accra%2C%20Ghana",
  },
];

const heroStats = [
  { Icon: Globe2, value: String(locations.length), label: "Countries Served" },
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
    <section className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-brand-dark pt-28 pb-14 sm:pt-40 2xl:min-h-[50rem]">
      <div className="absolute inset-0">
        <Image
          src={heroImg}
          alt="Luxury kitchen with global city view"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/35" />
      </div>

      {/* <button
        aria-label="Open locations menu"
        className="absolute right-8 top-40 z-10 hidden text-brand-gold lg:block"
      >
        <Menu className="h-6 w-6" />
      </button> */}

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
              Locations
            </span>
          </motion.div>

          <motion.span
            variants={fadeInUp}
            className="bg-brand-gold text-white rounded-full px-3 py-0.5 font-sans text-xs font-bold tracking-[0.25em] uppercase block w-fit"
          >
            SERVING GHANA &amp; THE USA
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
  const CountryFlag = ({ country }) => {
    if (country === "usa") {
      return (
        <svg
          viewBox="0 0 7410 3900"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
          aria-label="USA Flag"
        >
          <rect width="7410" height="3900" fill="#FFFFFF" />

          <g fill="#B22234">
            <rect y="0" width="7410" height="300" />
            <rect y="600" width="7410" height="300" />
            <rect y="1200" width="7410" height="300" />
            <rect y="1800" width="7410" height="300" />
            <rect y="2400" width="7410" height="300" />
            <rect y="3000" width="7410" height="300" />
            <rect y="3600" width="7410" height="300" />
          </g>

          <rect width="2964" height="2100" fill="#3C3B6E" />

          <g fill="#FFFFFF">
            {[
              [260, 220],
              [760, 220],
              [1260, 220],
              [1760, 220],
              [2260, 220],
              [2760, 220],

              [510, 570],
              [1010, 570],
              [1510, 570],
              [2010, 570],
              [2510, 570],

              [260, 920],
              [760, 920],
              [1260, 920],
              [1760, 920],
              [2260, 920],
              [2760, 920],

              [510, 1270],
              [1010, 1270],
              [1510, 1270],
              [2010, 1270],
              [2510, 1270],

              [260, 1620],
              [760, 1620],
              [1260, 1620],
              [1760, 1620],
              [2260, 1620],
              [2760, 1620],

              [510, 1970],
              [1010, 1970],
              [1510, 1970],
              [2010, 1970],
              [2510, 1970],
            ].map(([cx, cy], index) => (
              <circle key={index} cx={cx} cy={cy} r="68" />
            ))}
          </g>
        </svg>
      );
    }

    if (country === "ghana") {
      return (
        <svg
          viewBox="0 0 900 600"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
          aria-label="Ghana Flag"
        >
          <rect width="900" height="200" y="0" fill="#CE1126" />

          <rect width="900" height="200" y="200" fill="#FCD116" />

          <rect width="900" height="200" y="400" fill="#006B3F" />

          <polygon
            fill="#000000"
            points="
              450,240
              470,302
              535,302
              482,340
              502,402
              450,364
              398,402
              418,340
              365,302
              430,302
            "
          />
        </svg>
      );
    }

    return null;
  };

  return (
    <section className="bg-[#F8F7F3] px-[1rem] py-[3.5rem] text-brand-dark sm:px-[2.5rem] md:px-[4rem] lg:py-[4.5rem]">
      <div className="mx-auto w-full max-w-[1600px]">
        {/* Section Heading */}
        <div className="mx-auto max-w-[680px] text-center">
          <span className="text-[0.7rem] font-[800] uppercase tracking-[0.18em] text-brand-gold">
            OUR LOCATIONS
          </span>

          <h2 className="mt-[0.75rem] font-serif text-[2rem] font-[500] leading-[2.4rem] text-brand-dark sm:text-[2.35rem] sm:leading-[2.7rem]">
            Where We Serve
          </h2>

          <div className="mx-auto mt-[0.75rem] h-[2px] w-[2.75rem] bg-brand-gold" />

          <p className="mx-auto mt-[0.9rem] max-w-[560px] text-[0.875rem] leading-[1.5rem] text-[#686868]">
            Discover our locations and connect with Cali Wood for your next
            furniture or interior project.
          </p>
        </div>

        {/* Location Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="mt-[2.5rem] grid grid-cols-1 gap-[1.25rem] xl:grid-cols-2"
        >
          {locations.map((location) => (
            <motion.article
              id={location.id}
              key={location.id}
              variants={fadeInUp}
              className="group overflow-hidden rounded-[0.875rem] border-[1px] border-[#E4E0D8] bg-white shadow-[0_12px_35px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)]"
            >
              <div className="grid grid-cols-1 md:grid-cols-[43%_57%]">
                {/* Image Section */}
                <div className="relative min-h-[220px] overflow-hidden md:min-h-[320px]">
                  <Image
                    src={location.image}
                    alt={`${location.name} location`}
                    fill
                    sizes="(min-width: 1280px) 22vw, (min-width: 768px) 43vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    referrerPolicy="no-referrer"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                  {/* Country Flag Badge */}
                  <div className="absolute left-[1rem] top-[1rem] z-[20] flex h-[2.65rem] w-[3.8rem] items-center justify-center overflow-hidden rounded-[0.4rem] border-[2px] border-white bg-white shadow-[0_7px_20px_rgba(0,0,0,0.25)]">
                    <CountryFlag country={location.id} />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex min-h-[320px] flex-col justify-between px-[1.4rem] py-[1.5rem] sm:px-[1.6rem] sm:py-[1.7rem]">
                  <div>
                    <div className="flex items-center gap-[0.65rem]">
                      <span className="h-[2px] w-[2rem] bg-brand-gold" />

                      <span className="text-[0.65rem] font-[800] uppercase tracking-[0.18em] text-brand-gold">
                        CALI WOOD
                      </span>
                    </div>

                    <h3 className="mt-[0.75rem] font-serif text-[2rem] font-[600] leading-[2.2rem] text-brand-dark">
                      {location.name}
                    </h3>

                    <p className="mt-[0.9rem] text-[0.82rem] leading-[1.45rem] text-[#666666]">
                      {location.description}
                    </p>

                    {location.address ? (
                      <div className="mt-[1.15rem] flex items-start gap-[0.7rem] rounded-[0.5rem] border-[1px] border-[#EEEAE2] bg-[#FAF9F6] px-[0.85rem] py-[0.8rem]">
                        <MapPin className="mt-[0.15rem] h-[1rem] w-[1rem] shrink-0 text-brand-gold" />

                        <p className="text-[0.72rem] font-[500] leading-[1.25rem] text-[#5F5F5F]">
                          {location.address}
                        </p>
                      </div>
                    ) : null}
                  </div>

                  {/* Explore Link */}
                  <div className="mt-[1.35rem]">
                    {location.mapUrl ? (
                      <a
                        href={location.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-[0.6rem] text-[0.75rem] font-[800] uppercase tracking-[0.08em] text-brand-gold transition-all duration-300 hover:gap-[0.85rem] hover:text-[#9A0101]"
                      >
                        Explore {location.name}
                        <ArrowRight className="h-[1rem] w-[1rem]" />
                      </a>
                    ) : (
                      <Link
                        href={`#${location.id}`}
                        className="inline-flex items-center gap-[0.6rem] text-[0.75rem] font-[800] uppercase tracking-[0.08em] text-brand-gold transition-all duration-300 hover:gap-[0.85rem] hover:text-[#9A0101]"
                      >
                        Explore {location.name}
                        <ArrowRight className="h-[1rem] w-[1rem]" />
                      </Link>
                    )}
                  </div>
                </div>
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
      <div className="mx-auto grid  grid-cols-1 items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
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
            Serving Ghana &amp; the USA,
            <br />With Local Care
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
            className="mt-8 inline-flex items-center gap-4 rounded-md border border-brand-gold px-6 py-3 text-xs font-bold tracking-wide text-brand-gold transition-colors hover:bg-brand-gold hover:text-white"
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
          className="relative w-full"
        >
          <ServiceLocationsMap />
        </motion.div>
      </div>
    </section>
  );
}

function ServiceHighlights() {
  return (
    <section className="bg-brand-white px-4 pb-10 sm:px-10 md:px-16">
      <div className="mx-auto grid  overflow-hidden rounded-xl border border-white/10 bg-[#010129] shadow-xl lg:grid-cols-[1fr_260px]">
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
    <div className="w-full  flex  justify-center items-center">
      <div className="w-full max-w-[1800px]">
        <LocationsHero />
        <LocationCards />
        <GlobalCommitment />
        <ServiceHighlights />
      </div>
    </div>
  );
}
