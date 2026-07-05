"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  Expand,
  Layers3,
  MapPin,
  Ruler,
} from "lucide-react";

import kitchenImg from "../../assets/images/luxury_kitchen_hero_1780070314375.png";
import interiorImg from "../../assets/images/interior_living_room_1780070361503.png";
import officeImg from "../../assets/images/executive_office_card_1780070403397.png";
import renovationImg from "../../assets/images/renovation_kitchen_living_1780070378792.png";

const spotlightImages = [kitchenImg, interiorImg, officeImg, renovationImg];

const projectDetails = [
  { Icon: MapPin, label: "Location", value: "New York, USA" },
  { Icon: Ruler, label: "Area", value: "3500 sq. ft." },
  { Icon: Clock3, label: "Duration", value: "8 Weeks" },
  {
    Icon: Layers3,
    label: "Scope",
    value: "Design, Manufacturing & Installation",
  },
];

export default function ProjectSpotlight({
  setLightboxOpen,
  spotlightIdx,
  setSpotlightIdx,
}) {
  return (
    <section
      id="project-spotlight"
      className="relative overflow-hidden bg-[#010129] px-4 py-12 text-white sm:px-10 sm:py-16 md:px-16"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "radial-gradient(circle at 26% 38%, rgba(154,1,1,.08), transparent 28%), linear-gradient(120deg, transparent 20%, rgba(154,1,1,.08) 20.2%, transparent 20.5%, transparent 48%, rgba(154,1,1,.05) 48.2%, transparent 48.5%)",
        }}
      />

      <div className="relative z-10 mx-auto grid  grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.75fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col justify-center"
        >
          <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-[35px]">
            Project Spotlight
          </h2>
          <div className="mb-4 mt-3 h-0.5 w-12 bg-brand-gold" />

          <span className="mb-3 text-[11px] font-extrabold tracking-[0.16em] text-brand-gold">
            LUXURY KITCHEN
          </span>
          <h3 className="mb-3 max-w-sm font-serif text-3xl font-semibold leading-[1.13] sm:text-[36px]">
            Timeless Elegance in Every Detail
          </h3>
          <p className="mb-5 max-w-md text-[13px] leading-6 text-zinc-300 sm:text-sm">
            This luxury kitchen combines dark cabinetry with natural textures
            and premium finishes to create a space that is both functional and
            breathtaking.
          </p>

          <div className="mb-6 max-w-lg border-y border-white/5">
            {projectDetails.map(({ Icon, label, value }) => (
              <div
                key={label}
                className="grid grid-cols-[24px_92px_1fr] items-center gap-2 border-b border-white/5 py-3 last:border-b-0"
              >
                <Icon className="h-5 w-5 text-brand-gold" strokeWidth={1.8} />
                <span className="text-sm font-semibold text-zinc-100">
                  {label}
                </span>
                <span className="text-sm text-zinc-300">{value}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => setLightboxOpen(true)}
            className="group flex w-fit items-center gap-5 rounded-[4px] bg-brand-gold px-6 py-3.5 text-[11px] font-extrabold tracking-wide text-white shadow-[0_10px_25px_rgba(154,1,1,.17)] transition-colors hover:bg-[#9A0101]"
          >
            VIEW PROJECT DETAILS
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="grid min-h-[430px] grid-cols-1 gap-2.5 sm:grid-cols-[minmax(0,3fr)_minmax(150px,1fr)]"
        >
          <div className="group relative min-h-[360px] overflow-hidden rounded-xl border border-white/10 bg-black shadow-2xl sm:min-h-[430px]">
            <Image
              src={spotlightImages[spotlightIdx]}
              alt="Timeless luxury kitchen spotlight"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.015]"
            />
            <button
              onClick={() => setLightboxOpen(true)}
              aria-label="Expand project gallery"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/80 text-white transition-colors hover:border-brand-gold hover:text-brand-gold"
            >
              <Expand className="h-4.5 w-4.5" />
            </button>
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/45 px-3 py-2 backdrop-blur-sm">
              {spotlightImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSpotlightIdx(index)}
                  aria-label={`Show spotlight image ${index + 1}`}
                  className={`h-2 w-2 rounded-full border transition-all ${
                    spotlightIdx === index
                      ? "border-brand-gold bg-brand-gold"
                      : "border-white bg-white"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-1 sm:grid-rows-3">
            {spotlightImages.slice(1, 3).map((image, index) => {
              const imageIndex = index + 1;
              return (
                <button
                  key={imageIndex}
                  onClick={() => setSpotlightIdx(imageIndex)}
                  className={`relative min-h-28 overflow-hidden rounded-lg border transition-colors sm:min-h-0 ${
                    spotlightIdx === imageIndex
                      ? "border-brand-gold"
                      : "border-white/10 hover:border-brand-gold/60"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Project gallery thumbnail ${imageIndex + 1}`}
                    fill
                    sizes="(min-width: 1024px) 15vw, 33vw"
                    className="object-cover"
                  />
                </button>
              );
            })}

            <button
              onClick={() => setLightboxOpen(true)}
              className="group relative min-h-28 overflow-hidden rounded-lg border border-white/10 sm:min-h-0"
            >
              <Image
                src={spotlightImages[3]}
                alt="More project photos"
                fill
                sizes="(min-width: 1024px) 15vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/65 text-white">
                <span className="font-serif text-3xl font-semibold">+12</span>
                <span className="mt-1 text-xs font-medium">More Photos</span>
              </div>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
