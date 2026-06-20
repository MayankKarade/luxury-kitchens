import kitchenHero from "../../assets/images/luxury_kitchen_hero_1780070314375.png";
import modularKitchen from "../../assets/images/modular_kitchen_card_1780250098516.png";
import livingRoom from "../../assets/images/interior_living_room_1780070361503.png";
import wardrobe from "../../assets/images/luxury_wardrobe_card_1780070338933.png";
import office from "../../assets/images/executive_office_card_1780070403397.png";
import renovation from "../../assets/images/renovation_kitchen_living_1780070378792.png";
import customFurniture from "../../assets/images/custom_furniture_card_1780250074999.png";

const sharedStyles = [
  {
    title: "Modern Kitchens",
    text: "Clean lines, minimal design, and smart functionality for a contemporary look.",
    image: modularKitchen,
  },
  {
    title: "Luxury Kitchens",
    text: "Premium materials, elegant finishes, and timeless sophistication.",
    image: kitchenHero,
  },
  {
    title: "Classic Kitchens",
    text: "Timeless designs with a perfect blend of tradition and modern convenience.",
    image: renovation,
  },
  {
    title: "Compact Kitchens",
    text: "Space-saving designs that deliver maximum functionality.",
    image: livingRoom,
  },
];

const sharedBenefits = [
  {
    icon: "percent",
    title: "Maximized Space",
    text: "Intelligent storage solutions to make the most of every inch.",
  },
  {
    icon: "spark",
    title: "Aesthetic Appeal",
    text: "Sleek designs that elevate the look of your home.",
  },
  {
    icon: "grid",
    title: "Easy Maintenance",
    text: "High-quality finishes that are easy to clean and maintain.",
  },
  {
    icon: "layout",
    title: "Personalized Solutions",
    text: "Choose from a wide range of styles, colors, finishes and accessories.",
  },
];

const sharedMaterials = [
  { icon: "layers", title: "Premium Plywood" },
  { icon: "counter", title: "Quartz & Granite Countertops" },
  { icon: "wrench", title: "High-Quality Hardware" },
  { icon: "panel", title: "Acrylic, Laminate & Veneers" },
  { icon: "glass", title: "Toughened Glass & Accessories" },
];

const baseDetail = {
  heroImage: kitchenHero,
  featureCards: [
    { icon: "user", title: "Ergonomic Design" },
    { icon: "cube", title: "Premium Materials" },
    { icon: "grid", title: "Smart Storage Solutions" },
    { icon: "layout", title: "Customizable Layouts" },
  ],
  trustCards: [
    {
      icon: "shield",
      title: "Tailored To Your Space",
      text: "Custom layouts that fit your home perfectly.",
    },
    {
      icon: "quality",
      title: "Quality You Can Trust",
      text: "Premium materials and hardware for lasting durability.",
    },
    {
      icon: "clock",
      title: "On-Time Delivery",
      text: "We value your time and ensure timely completion.",
    },
    {
      icon: "service",
      title: "End-to-End Service",
      text: "From design to installation, we have got you covered.",
    },
  ],
  benefits: sharedBenefits,
  showcaseImage: kitchenHero,
  stats: [
    { value: "2000+", label: "Kitchens Designed" },
    { value: "100%", label: "Custom Solutions" },
    { value: "10+", label: "Years of Experience" },
    { value: "500+", label: "Happy Clients" },
  ],
  styles: sharedStyles,
  materials: sharedMaterials,
};

export const serviceDetails = {
  "modular-kitchens": {
    ...baseDetail,
    slug: "modular-kitchens",
    title: "Modular Kitchens",
    label: "MODULAR KITCHENS",
    headline: "Smart. Stylish. Made For You.",
    description:
      "Our modular kitchens combine innovative design, premium materials, and intelligent storage solutions to create spaces that are beautiful, functional, and built to last.",
    whyTitle: "Why Choose Our Modular Kitchens?",
    stylesTitle: "Our Kitchen Styles",
    designButtonText: "VIEW KITCHEN DESIGNS",
    ctaTitle: "Let's Design Your Dream Kitchen",
    ctaText:
      "Book a consultation with our experts and take the first step towards your perfect kitchen.",
  },
  "luxury-wardrobes": {
    ...baseDetail,
    slug: "luxury-wardrobes",
    title: "Luxury Wardrobes",
    label: "LUXURY WARDROBES",
    headline: "Organized. Elegant. Built Around You.",
    description:
      "Our wardrobes bring premium finishes, smart compartments, and tailored layouts together for storage that feels refined and effortless.",
    whyTitle: "Why Choose Our Luxury Wardrobes?",
    stylesTitle: "Our Wardrobe Styles",
    designButtonText: "VIEW WARDROBE DESIGNS",
    ctaTitle: "Let's Design Your Dream Wardrobe",
    ctaText:
      "Book a consultation with our experts and plan a wardrobe that fits your lifestyle.",
    heroImage: wardrobe,
    showcaseImage: wardrobe,
  },
  "interior-design": {
    ...baseDetail,
    slug: "interior-design",
    title: "Interior Design",
    label: "INTERIOR DESIGN",
    headline: "Beautiful. Functional. Completely Yours.",
    description:
      "We design refined interiors with thoughtful layouts, premium finishes, and a balanced aesthetic that supports everyday living.",
    whyTitle: "Why Choose Our Interior Design?",
    stylesTitle: "Our Interior Styles",
    designButtonText: "VIEW INTERIOR DESIGNS",
    ctaTitle: "Let's Design Your Dream Interior",
    ctaText:
      "Book a consultation with our experts and start shaping your complete interior vision.",
    heroImage: livingRoom,
    showcaseImage: livingRoom,
  },
  "renovation-services": {
    ...baseDetail,
    slug: "renovation-services",
    title: "Renovation Services",
    label: "RENOVATION SERVICES",
    headline: "Refresh. Upgrade. Transform.",
    description:
      "Our renovation services modernize existing spaces with precise planning, premium materials, and clean execution.",
    whyTitle: "Why Choose Our Renovation Services?",
    stylesTitle: "Our Renovation Styles",
    designButtonText: "VIEW RENOVATION IDEAS",
    ctaTitle: "Let's Transform Your Space",
    ctaText:
      "Book a consultation with our experts and plan a renovation that improves comfort and value.",
    heroImage: renovation,
    showcaseImage: renovation,
  },
  "commercial-interiors": {
    ...baseDetail,
    slug: "commercial-interiors",
    title: "Commercial Interiors",
    label: "COMMERCIAL INTERIORS",
    headline: "Professional. Premium. Purpose Built.",
    description:
      "We create commercial interiors that balance brand presence, workflow, durability, and premium visual impact.",
    whyTitle: "Why Choose Our Commercial Interiors?",
    stylesTitle: "Our Commercial Styles",
    designButtonText: "VIEW COMMERCIAL DESIGNS",
    ctaTitle: "Let's Design Your Commercial Space",
    ctaText:
      "Book a consultation with our experts and create a workspace designed for performance.",
    heroImage: office,
    showcaseImage: office,
  },
  "custom-furniture": {
    ...baseDetail,
    slug: "custom-furniture",
    title: "Custom Furniture",
    label: "CUSTOM FURNITURE",
    headline: "Crafted. Precise. Made For You.",
    description:
      "Our custom furniture solutions are designed around your space, material preferences, and daily usage needs.",
    whyTitle: "Why Choose Our Custom Furniture?",
    stylesTitle: "Our Furniture Styles",
    designButtonText: "VIEW FURNITURE DESIGNS",
    ctaTitle: "Let's Craft Your Custom Piece",
    ctaText:
      "Book a consultation with our experts and create furniture that fits your space perfectly.",
    heroImage: customFurniture,
    showcaseImage: customFurniture,
  },
};

export const serviceSlugs = Object.keys(serviceDetails);

function titleFromSlug(slug) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getServiceDetail(slug) {
  if (serviceDetails[slug]) {
    return serviceDetails[slug];
  }

  const title = titleFromSlug(slug || "modular-kitchens");

  return {
    ...serviceDetails["modular-kitchens"],
    slug,
    title,
    label: title.toUpperCase(),
    whyTitle: `Why Choose Our ${title}?`,
  };
}
