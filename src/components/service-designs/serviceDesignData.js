import customFurniture from "../../assets/images/custom_furniture_card_1780250074999.png";
import office from "../../assets/images/executive_office_card_1780070403397.png";
import livingRoom from "../../assets/images/interior_living_room_1780070361503.png";
import kitchenHero from "../../assets/images/luxury_kitchen_hero_1780070314375.png";
import wardrobe from "../../assets/images/luxury_wardrobe_card_1780070338933.png";
import modularKitchen from "../../assets/images/modular_kitchen_card_1780250098516.png";
import renovation from "../../assets/images/renovation_kitchen_living_1780070378792.png";

const kitchenCategories = [
  { label: "All Kitchens", count: "24", active: true },
  { label: "Modern Kitchens", count: "06" },
  { label: "Luxury Kitchens", count: "06" },
  { label: "Classic Kitchens", count: "05" },
  { label: "Compact Kitchens", count: "04" },
  { label: "L-Shaped Kitchens", count: "05" },
  { label: "U-Shaped Kitchens", count: "04" },
  { label: "Island Kitchens", count: "03" },
];

const kitchenProducts = [
  {
    slug: "sleek-matte-finish-kitchen",
    title: "Sleek Matte Finish Kitchen",
    text: "A perfect blend of elegance and functionality.",
    price: "$12,500",
    badge: "BEST SELLER",
    image: modularKitchen,
  },
  {
    slug: "luxury-high-gloss-kitchen",
    title: "Luxury High Gloss Kitchen",
    text: "High gloss finish with premium accessories.",
    price: "$18,900",
    badge: "NEW",
    image: kitchenHero,
  },
  {
    slug: "modern-handleless-kitchen",
    title: "Modern Handleless Kitchen",
    text: "Seamless design with handleless cabinets.",
    price: "$14,200",
    image: renovation,
  },
  {
    slug: "classic-wooden-kitchen",
    title: "Classic Wooden Kitchen",
    text: "Timeless wooden finish for a warm and cozy feel.",
    price: "$11,000",
    image: customFurniture,
  },
  {
    slug: "minimal-white-kitchen",
    title: "Minimal White Kitchen",
    text: "Minimalist white design for a clean and bright look.",
    price: "$10,800",
    image: livingRoom,
  },
  {
    slug: "industrial-style-kitchen",
    title: "Industrial Style Kitchen",
    text: "Bold industrial look with metal and wood textures.",
    price: "$13,900",
    image: wardrobe,
  },
  {
    slug: "two-tone-modular-kitchen",
    title: "Two Tone Modular Kitchen",
    text: "Stylish two-tone combination for a modern appeal.",
    price: "$12,200",
    image: office,
  },
  {
    slug: "compact-space-saver-kitchen",
    title: "Compact Space Saver Kitchen",
    text: "Smart solutions for small spaces with big functionality.",
    price: "$8,500",
    image: renovation,
  },
];

const fallbackImages = [
  modularKitchen,
  kitchenHero,
  livingRoom,
  wardrobe,
  office,
  renovation,
  customFurniture,
];

const colorSwatches = ["#ead8c0", "#cfcfcd", "#4d4d4a", "#17392e", "#101b2e"];

const filterStyles = ["Modern", "Contemporary", "Classic", "Luxury", "Minimal"];

const benefitCards = [
  {
    icon: "whatsapp",
    title: "Free Consultation",
    text: "Get expert advice",
  },
  {
    icon: "service",
    title: "Custom Design",
    text: "Tailored to your needs",
  },
  {
    icon: "shield",
    title: "Premium Quality",
    text: "Long-lasting materials",
  },
  {
    icon: "clock",
    title: "On-Time Delivery",
    text: "Hassle-free experience",
  },
  {
    icon: "layout",
    title: "End-to-End Service",
    text: "We are with you all the way",
  },
];

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function genericCategories(service) {
  return [
    { label: `All ${service.title}`, count: "24", active: true },
    ...service.styles.map((style, index) => ({
      label: style.title,
      count: String(index === 0 ? 6 : index === 1 ? 6 : 4).padStart(2, "0"),
    })),
    { label: "Premium Collections", count: "05" },
    { label: "Custom Layouts", count: "04" },
  ];
}

function genericProducts(service) {
  const names = [
    "Sleek Matte Finish",
    "Luxury High Gloss",
    "Modern Handleless",
    "Classic Wooden",
    "Minimal White",
    "Industrial Style",
    "Two Tone",
    "Compact Space Saver",
  ];

  return names.map((name, index) => {
    const title = `${name} ${service.title}`;

    return {
    slug: slugify(title),
    title,
    text:
      index % 2 === 0
        ? "A refined blend of premium finishes and practical functionality."
        : "Crafted for a polished look with tailored storage and comfort.",
    price: ["$12,500", "$18,900", "$14,200", "$11,000", "$10,800", "$13,900", "$12,200", "$8,500"][index],
    badge: index === 0 ? "BEST SELLER" : index === 1 ? "NEW" : undefined,
    image: fallbackImages[index % fallbackImages.length],
    };
  });
}

export function getServiceDesignCollection(service) {
  const isKitchen = service.slug === "modular-kitchens";
  const noun = isKitchen ? "Kitchens" : "Designs";
  const products = isKitchen ? kitchenProducts : genericProducts(service);

  return {
    heroTitle: isKitchen
      ? "Explore Our Modular Kitchen Collections"
      : `Explore Our ${service.title} Collections`,
    heroText: isKitchen
      ? "Discover a wide range of modular kitchen designs crafted for style, functionality, and your unique space."
      : `Discover a wide range of ${service.title.toLowerCase()} concepts crafted for style, function, and your unique space.`,
    heroFeatures: [
      { icon: "layers", title: "Premium Materials" },
      { icon: "grid", title: "Smart Storage Solutions" },
      { icon: "layout", title: "Customizable Designs" },
      { icon: "spark", title: "Timeless Elegance" },
    ],
    browseTitle: isKitchen ? "Browse Kitchens" : `Browse ${noun}`,
    listTitle: isKitchen ? "All Modular Kitchens" : `All ${service.title}`,
    resultCount: "24 Results",
    categories: isKitchen ? kitchenCategories : genericCategories(service),
    filters: filterStyles,
    swatches: colorSwatches,
    products: products.map((product) => ({
      ...product,
      slug: product.slug || slugify(product.title),
    })),
    ctaTitle: isKitchen
      ? "Can't Find What You're Looking For?"
      : `Can't Find The Right ${service.title}?`,
    ctaText: isKitchen
      ? "We create custom modular kitchens tailored to your space, style, and storage needs."
      : `We create custom ${service.title.toLowerCase()} solutions tailored to your space, style, and daily needs.`,
    benefits: benefitCards,
  };
}

export function getServiceDesignProduct(service, designSlug) {
  const collection = getServiceDesignCollection(service);
  const product =
    collection.products.find((item) => item.slug === designSlug) ||
    collection.products[1] ||
    collection.products[0];
  const galleryImages = [
    product.image,
    ...collection.products
      .filter((item) => item.slug !== product.slug)
      .slice(0, 5)
      .map((item) => item.image),
  ];
  const serviceLabel =
    service.slug === "modular-kitchens"
      ? "MODULAR KITCHEN"
      : service.label.replace(/S$/, "");

  return {
    ...product,
    serviceLabel,
    rating: "4.8",
    reviews: "32 Reviews",
    note: "*Price may vary based on size and customization",
    detailText:
      "High gloss finish with premium accessories and intelligent storage solutions that blend elegance with everyday functionality.",
    galleryImages,
    quickFeatures: [
      {
        icon: "shield",
        title: "Premium High Gloss Finish",
        text: "Scratch-resistant and easy to maintain.",
      },
      {
        icon: "grid",
        title: "Smart Storage Solutions",
        text: "Corner units, pull-outs and soft-close systems.",
      },
      {
        icon: "spark",
        title: "Premium Accessories",
        text: "Blum hinges, Hafele fittings and more.",
      },
      {
        icon: "layout",
        title: "Fully Customizable",
        text: "Layouts, finishes and storage tailored to you.",
      },
    ],
    overview:
      `The ${product.title} is designed for those who appreciate contemporary aesthetics and top-tier functionality. With its refined finish, premium hardware, and smart storage solutions, this design brings a perfect balance of style and practicality to your home.`,
    facts: [
      { icon: "service", label: "Style", value: "Modern" },
      { icon: "counter", label: "Finish", value: "High Gloss" },
      {
        icon: "layout",
        label: "Configuration",
        value: "Straight / L-Shaped / U-Shaped / Island",
      },
      { icon: "spark", label: "Ideal For", value: "Apartments, Villas, Premium Homes" },
    ],
    materials: [
      {
        swatch: "linear-gradient(135deg, #6b6963, #2f2e2b)",
        title: "High Gloss MDF",
        text: "18mm MDF with high gloss lacquer finish.",
      },
      {
        swatch: "linear-gradient(135deg, #f3f1ec, #d7d2ca)",
        title: "Quartz Countertop",
        text: "Stain-resistant, durable and elegant surface.",
      },
      {
        swatch: "linear-gradient(135deg, #10130f, #2a2d27)",
        title: "Toughened Glass",
        text: "Heat-resistant backsplash for easy cleaning.",
      },
      {
        swatch: "radial-gradient(circle, #f5f5f5 15%, #5f5a53 16%, #5f5a53 25%, #d9d9d9 26%)",
        title: "Premium Hardware",
        text: "Blum soft-close hinges and Hafele fittings.",
      },
    ],
    dimensionFeatures: [
      {
        icon: "service",
        title: "Optimized workflow",
        text: "Designed for maximum functionality.",
      },
      {
        icon: "user",
        title: "Ergonomic Design",
        text: "Comfortable heights and smart layouts.",
      },
      {
        icon: "shield",
        title: "Space Efficient",
        text: "Every inch is utilized intelligently.",
      },
    ],
  };
}
