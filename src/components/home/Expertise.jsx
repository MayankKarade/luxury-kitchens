"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  RefreshCw,
  Sliders,
  Sofa,
} from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

import { API_ENDPOINTS } from "@/config";
import { ServiceDetailIcon } from "../service-detail/ServiceDetailIcons";
import kitchenImg from "../../assets/images/luxury_kitchen_hero_1780070314375.png";
import wardrobeImg from "../../assets/images/luxury_wardrobe_card_1780070338933.png";
import interiorImg from "../../assets/images/interior_living_room_1780070361503.png";
import renovationImg from "../../assets/images/renovation_kitchen_living_1780070378792.png";
import officeImg from "../../assets/images/executive_office_card_1780070403397.png";

const MotionLink = motion.create(Link);

const fallbackServices = [
  {
    id: "modular-kitchens",
    slug: "modular-kitchens",
    title: "Modular Kitchens",
    description:
      "Stylish, functional and customized kitchens designed for modern living.",
    image: kitchenImg,
    iconElement: (
      <LayoutGrid className="h-5 w-5 text-brand-gold" strokeWidth={1.8} />
    ),
  },
  {
    id: "luxury-wardrobes",
    slug: "luxury-wardrobes",
    title: "Luxury Wardrobes",
    description: "Smart storage solutions that blend elegance with functionality.",
    image: wardrobeImg,
    iconElement: (
      <Sliders className="h-5 w-5 text-brand-gold" strokeWidth={1.8} />
    ),
  },
  {
    id: "interior-design",
    slug: "interior-design",
    title: "Interior Design",
    description:
      "Complete interior solutions tailored to your taste and lifestyle.",
    image: interiorImg,
    iconElement: <Sofa className="h-5 w-5 text-brand-gold" strokeWidth={1.8} />,
  },
  {
    id: "renovation-services",
    slug: "renovation-services",
    title: "Renovations",
    description: "Transform your existing spaces with our renovation expertise.",
    image: renovationImg,
    iconElement: (
      <RefreshCw className="h-5 w-5 text-brand-gold" strokeWidth={1.8} />
    ),
  },
  {
    id: "commercial-interiors",
    slug: "commercial-interiors",
    title: "Commercial Interiors",
    description:
      "Premium interior solutions for offices, retail and commercial spaces.",
    image: officeImg,
    iconElement: (
      <Building2 className="h-5 w-5 text-brand-gold" strokeWidth={1.8} />
    ),
  },
];

function getApiServices(responseData) {
  const services =
    responseData?.data?.service ||
    responseData?.data?.services ||
    responseData?.service ||
    responseData?.services ||
    [];

  return Array.isArray(services) ? services : [];
}

function mapApiService(service) {
  return {
    id: service.id || service.slug || service.title,
    slug: service.slug || service.service_slug || String(service.id || ""),
    title: service.title || service.name || service.heading || "Service",
    description:
      service.description ||
      service.short_description ||
      service.service_description ||
      "",
    image: service.image || service.service_image || fallbackServices[0].image,
    icon: service.icon || service.service_icon,
  };
}

function ServiceBadgeIcon({ service }) {
  if (service.icon) {
    return (
      <Image
        src={service.icon}
        alt={service.title}
        width={24}
        height={24}
        className="object-contain"
      />
    );
  }

  return (
    service.iconElement || (
      <ServiceDetailIcon name="service" className="h-5 w-5 text-brand-gold" />
    )
  );
}

export default function Expertise() {
  const [apiServices, setApiServices] = useState([]);
  const services = apiServices.length > 0 ? apiServices : fallbackServices;
  const autoplayPlugins = useMemo(
    () => [
      Autoplay({
        delay: 3200,
        stopOnFocusIn: false,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
    [],
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      duration: 28,
      loop: services.length > 1,
      slidesToScroll: 1,
    },
    autoplayPlugins,
  );

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(API_ENDPOINTS.Services.servicesList);
        const apiServiceList = getApiServices(response.data).map(mapApiService);

        if (apiServiceList.length > 0) {
          setApiServices(apiServiceList);
        }
      } catch (error) {
        setApiServices([]);
      }
    };

    fetchServices();
  }, []);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
    emblaApi?.plugins()?.autoplay?.reset?.();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
    emblaApi?.plugins()?.autoplay?.reset?.();
  }, [emblaApi]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: { y: -8, transition: { duration: 0.2 } },
  };

  return (
    <section
      id="services"
      className="bg-[#ffffff] px-4 py-12 sm:px-10 sm:py-16 md:px-16 lg:py-20"
    >
      <div className="mx-auto">
        <motion.div
          className="grid grid-cols-1 items-end gap-8 pb-14 lg:grid-cols-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={fadeInUp}
            className="flex flex-col gap-3 lg:col-span-7"
          >
            <span className="font-sans text-[12.5px] font-bold uppercase tracking-[0.2em] text-brand-gold">
              OUR EXPERTISE
            </span>
            <h2 className="font-serif text-3xl font-semibold leading-[1.15] tracking-tight text-[#111827] sm:text-4xl lg:text-[46px]">
              Premium Solutions <br />
              <span className="font-semibold text-[#111827]">
                For Every Space
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-start gap-5 lg:col-span-5"
          >
            <p className="max-w-md font-sans text-base leading-relaxed text-zinc-500">
              From concept to completion, we deliver bespoke interior solutions
              that reflect your style and elevate your living and working
              spaces.
            </p>
            <MotionLink
              href="/our-services"
              className="inline-flex items-center gap-1 font-sans text-[13px] font-bold uppercase tracking-wider text-brand-gold transition-colors hover:text-[#9A0101]"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span>VIEW ALL SERVICES</span>
              <span className="relative -top-0.5 ml-1 text-lg leading-none">
                -&gt;
              </span>
            </MotionLink>
          </motion.div>
        </motion.div>

        <div className="relative">
          <button
            type="button"
            onClick={scrollPrev}
            className="absolute -left-2 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-100 bg-brand-white text-brand-gold shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all duration-300 hover:bg-neutral-50 hover:shadow-md sm:flex lg:-left-6"
            aria-label="Previous service"
          >
            <ChevronLeft className="h-5 w-5 stroke-[1.7]" />
          </button>

          <button
            type="button"
            onClick={scrollNext}
            className="absolute -right-2 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-100 bg-brand-white text-brand-gold shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all duration-300 hover:bg-neutral-50 hover:shadow-md sm:flex lg:-right-6"
            aria-label="Next service"
          >
            <ChevronRight className="h-5 w-5 stroke-[1.7]" />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <motion.div
              className="-ml-4 flex touch-pan-y"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {services.map((service, index) => (
                <div
                  key={`${service.id}-${index}`}
                  className="min-w-0 flex-[0_0_100%] pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_20%]"
                >
                  <motion.div
                    variants={cardVariants}
                    whileHover="hover"
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/50 bg-brand-white shadow-sm transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="relative">
                      <div className="relative h-44 shrink-0 overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <motion.div
                        className="absolute -bottom-6 left-5 z-40 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#010129] shadow-lg transition-all duration-200 group-hover:scale-[1.1] group-hover:rotate-6"
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <ServiceBadgeIcon service={service} />
                      </motion.div>
                    </div>

                    <div className="flex flex-grow flex-col justify-between bg-brand-white p-5 pb-6 pt-8">
                      <div className="flex flex-col gap-2.5">
                        <h3 className="font-serif text-[18px] font-bold leading-snug tracking-tight text-[#111827] md:text-[19px]">
                          {service.title}
                        </h3>
                        <p className="min-h-[52px] font-sans text-xs leading-relaxed text-zinc-500 sm:text-[13px]">
                          {service.description}
                        </p>
                      </div>

                      <div className="mt-2 border-t border-zinc-100 pt-4">
                        <motion.div
                          whileHover={{ x: 4 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <Link
                            href={`/our-services/${service.slug}`}
                            className="inline-flex items-center gap-1 font-sans text-[11px] font-extrabold tracking-widest text-brand-gold transition-colors hover:text-[#9A0101]"
                          >
                            <span>EXPLORE</span>
                            <span className="relative -top-0.5 ml-0.5 text-base leading-none transition-transform duration-300 group-hover:translate-x-1">
                              -&gt;
                            </span>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
