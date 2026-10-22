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

const kitchenContent = {
  title: "Kitchens",
  label: "KITCHENS",
  headline: "Kitchens",
  description:
    "From practical standard kitchens to personalised luxury designs, Cali Wood creates made-to-size kitchens planned around your space, preferences and everyday needs.",
  primaryButtonText: "BOOK A SITE VISIT",
  featureCards: [
    { icon: "user", title: "Smart Use of Space", text: "Designed around your room." },
    { icon: "cube", title: "Premium Materials", text: "Quality options for luxury kitchens." },
    { icon: "grid", title: "Custom Sizes", text: "Made to suit your space." },
    { icon: "layout", title: "Flexible Layouts", text: "L-shaped or U-shaped." },
  ],
  trustCards: [
    { icon: "shield", title: "Tailored to Your Space", text: "Kitchen layouts planned around your space, needs and preferences." },
    { icon: "quality", title: "Made to Your Size", text: "Custom sizing is available to suit individual project requirements." },
    { icon: "clock", title: "Clear Design & Quote", text: "Receive a proposed design and clear quotation before approval." },
    { icon: "service", title: "Complete Service", text: "From measurement and design to manufacturing and installation." },
  ],
  whyTitle: "Why Choose Our Kitchens?",
  whyText: "Designed around your space and preferences, Cali Wood kitchens combine practical layouts, made-to-size cabinetry and a choice of materials and finishes.",
  benefits: [
    { icon: "percent", title: "Smart Use of Space", text: "L-shaped and U-shaped layouts help make effective use of the available space." },
    { icon: "spark", title: "Made to Your Size", text: "Custom sizing allows your kitchen to be adapted to the dimensions of your space." },
    { icon: "grid", title: "Choice of Worktops", text: "Choose from granite, quartz or marble to suit your preferred kitchen finish." },
    { icon: "layout", title: "Personalised Options", text: "Add islands, pantry units, display cabinets and other features to suit your needs." },
  ],
  stats: [
    { value: "2", label: "Kitchen Layouts" },
    { value: "2.2 m", label: "Standard Height" },
    { value: "3", label: "Worktop Options" },
    { value: "2", label: "Kitchen Ranges" },
  ],
  materialsText: "Choose from standard or premium materials and a selection of worktop finishes based on your kitchen design and preferences.",
  materials: [
    { icon: "layers", title: "Standard Materials", text: "For standard kitchen solutions." },
    { icon: "counter", title: "Premium Materials", text: "Available for luxury kitchens." },
    { icon: "wrench", title: "Granite", text: "Worktop option." },
    { icon: "panel", title: "Quartz", text: "Worktop option." },
    { icon: "glass", title: "Marble", text: "Worktop option." },
  ],
  ctaTitle: "Let’s Plan Your Kitchen",
  ctaText: "Tell us about your space, style and budget, and take the next step towards a kitchen designed around your needs.",
  ctaActions: [
    { icon: "calendar", title: "Book a Site Visit", text: "Arrange a visit to measure your space.", href: "/consultation" },
    { icon: "service", title: "WhatsApp Chat", text: "Tell us about your kitchen requirements.", href: "https://wa.me/233501523779" },
    { icon: "quality", title: "Request Quote", text: "Get a quote based on your project.", href: "/consultation" },
    { icon: "user", title: "Call Us", text: "Speak directly with the Cali Wood team.", href: "tel:+233501523779" },
  ],
};

const wardrobeContent = {
  title: "Fitted Wardrobes",
  label: "WARDROBES",
  headline: "Fitted Wardrobes",
  description:
    "Made-to-size fitted wardrobes designed around your room, storage needs and preferred style, with built-in lighting and a choice of door and accessory options.",
  primaryButtonText: "BOOK A SITE VISIT",
  designButtonText: "VIEW WARDROBE DESIGNS",
  featureCards: [
    { icon: "user", title: "Made to Fit", text: "Designed around your room." },
    { icon: "cube", title: "Built-In Lighting", text: "Included with every wardrobe." },
    { icon: "grid", title: "Door Options", text: "Glass, wooden or open." },
    { icon: "layout", title: "Accessory Choice", text: "Blum or standard options." },
  ],
  trustCards: [
    { icon: "shield", title: "Designed for Your Space", text: "Wardrobes planned around the dimensions and storage needs of your room." },
    { icon: "quality", title: "Made to Your Size", text: "Custom sizing helps create a better fit for individual spaces." },
    { icon: "clock", title: "Built-In Lighting", text: "Integrated lighting is included across the documented wardrobe options." },
    { icon: "service", title: "Flexible Accessories", text: "Choose between Blum and standard accessory configurations." },
  ],
  whyTitle: "Why Choose Our Wardrobes?",
  whyText: "Cali Wood fitted wardrobes combine made-to-size storage, practical organisation and a choice of door styles and accessories to suit your space and everyday needs.",
  benefits: [
    { icon: "percent", title: "Made-to-Size Storage", text: "Each wardrobe can be planned around the dimensions and requirements of your room." },
    { icon: "spark", title: "Choice of Door Styles", text: "Choose from glass, wooden or open-door wardrobe configurations." },
    { icon: "grid", title: "Built-In Lighting", text: "All documented wardrobe options include lighting for a more practical and refined finish." },
    { icon: "layout", title: "Personalised Storage", text: "Add mirrors, shoe racks, jewellery drawers or sliding doors based on your needs." },
  ],
  stats: [
    { value: "3", label: "Door Options" },
    { value: "2", label: "Accessory Options" },
    { value: "Built-In", label: "Lighting Included" },
    { value: "4", label: "Popular Extras" },
  ],
  stylesTitle: "Our Wardrobe Styles",
  materialsTitle: "Materials & Accessories",
  materialsText: "Choose the door style and accessory configuration that best suits your wardrobe design, storage needs and preferred finish.",
  materials: [
    { icon: "layers", title: "Glass Doors", text: "A clean and contemporary wardrobe option." },
    { icon: "counter", title: "Wooden Doors", text: "A practical and refined fitted wardrobe finish." },
    { icon: "wrench", title: "Open Wardrobes", text: "Accessible storage with an open configuration." },
    { icon: "panel", title: "Blum Accessories", text: "Premium accessory option." },
    { icon: "glass", title: "Standard Accessories", text: "Practical accessory option." },
  ],
  ctaTitle: "Let’s Plan Your Wardrobe",
  ctaText: "Tell us about your room, storage needs and preferred wardrobe style, and take the next step towards a fitted solution designed around your space.",
  ctaActions: [
    { icon: "calendar", title: "Book a Site Visit", text: "Arrange a visit to measure your space.", href: "/consultation" },
    { icon: "service", title: "WhatsApp Chat", text: "Tell us about your wardrobe requirements.", href: "https://wa.me/233501523779" },
    { icon: "quality", title: "Request Quote", text: "Get a quote based on your project.", href: "/consultation" },
    { icon: "user", title: "Call Us", text: "Speak directly with the Cali Wood team.", href: "tel:+233501523779" },
  ],
};

const tvUnitContent = {
  title: "TV & Media Units",
  label: "TV UNITS",
  headline: "TV & Media Units",
  description:
    "Made-to-fit TV and media units designed around your living space, with practical storage, clean detailing and custom features for a refined entertainment area.",
  primaryButtonText: "BOOK A SITE VISIT",
  designButtonText: "VIEW TV UNIT DESIGNS",
  featureCards: [
    { icon: "user", title: "Made to Fit", text: "Designed around your space." },
    { icon: "cube", title: "Accessory Options", text: "Blum or Sumit options." },
    { icon: "grid", title: "Smart Storage", text: "Practical built-in solutions." },
    { icon: "layout", title: "Custom Features", text: "Lighting, shelving and panelling." },
  ],
  trustCards: [
    { icon: "shield", title: "Designed for Your Space", text: "TV units planned around your room, layout and entertainment requirements." },
    { icon: "quality", title: "Made to Fit", text: "Custom solutions designed to work naturally within the available space." },
    { icon: "clock", title: "Accessory Choice", text: "Choose between Blum and Sumit accessory configurations." },
    { icon: "service", title: "Practical Details", text: "Add shelving, lighting, panelling and concealed cable management." },
  ],
  whyTitle: "Why Choose Our TV Units?",
  whyText: "Cali Wood TV and media units combine made-to-fit furniture, practical storage and custom detailing to create an organised and refined entertainment space.",
  benefits: [
    { icon: "percent", title: "Made-to-Fit Design", text: "Each TV unit is planned around the dimensions and requirements of your room." },
    { icon: "spark", title: "Accessory Options", text: "Choose between Blum or Sumit accessories based on your project requirements." },
    { icon: "grid", title: "Clean Cable Management", text: "Hidden cable management helps maintain a cleaner and more organised finished space." },
    { icon: "layout", title: "Personalised Features", text: "Add slat wall panelling, floating shelves and LED backlighting to personalise your unit." },
  ],
  stats: [
    { value: "2", label: "Accessory Options" },
    { value: "1 m", label: "Standard Height" },
    { value: "4", label: "Popular Extras" },
    { value: "2", label: "Pricing Options" },
  ],
  stylesTitle: "Our TV Unit Styles",
  materialsTitle: "Features & Accessories",
  materialsText: "Personalise your TV and media unit with accessory and design options that improve storage, presentation and everyday functionality.",
  materials: [
    { icon: "layers", title: "Blum Accessories", text: "Premium accessory option for your TV unit." },
    { icon: "counter", title: "Sumit Accessories", text: "Alternative accessory configuration for your project." },
    { icon: "wrench", title: "Slat Wall Panelling", text: "Add texture and detail to your entertainment wall." },
    { icon: "panel", title: "Floating Shelves", text: "Create additional display and storage space." },
    { icon: "glass", title: "LED Backlighting", text: "Add subtle lighting around your media area." },
  ],
  ctaTitle: "Let’s Plan Your TV Unit",
  ctaText: "Tell us about your space, storage needs and preferred features, and take the next step towards a TV and media unit designed around your room.",
  ctaActions: [
    { icon: "calendar", title: "Book a Site Visit", text: "Arrange a visit to measure your space.", href: "/consultation" },
    { icon: "service", title: "WhatsApp Chat", text: "Tell us about your TV unit requirements.", href: "https://wa.me/233501523779" },
    { icon: "quality", title: "Request Quote", text: "Get a quote based on your project.", href: "/consultation" },
    { icon: "user", title: "Call Us", text: "Speak directly with the Cali Wood team.", href: "tel:+233501523779" },
  ],
};

const corporateFurnitureContent = {
  title: "Corporate Furniture",
  label: "CORPORATE FURNITURE",
  headline: "Corporate Furniture",
  description:
    "Made-to-size furniture solutions for offices, reception areas and professional spaces, designed around your layout, functional requirements and business needs.",
  primaryButtonText: "BOOK A SITE VISIT",
  designButtonText: "VIEW FURNITURE DESIGNS",
  featureCards: [
    { icon: "user", title: "Made to Fit", text: "Designed around your workspace." },
    { icon: "cube", title: "Custom Designs", text: "Tailored to project requirements." },
    { icon: "grid", title: "Professional Spaces", text: "Built for business environments." },
    { icon: "layout", title: "Complete Service", text: "Design, manufacture and install." },
  ],
  trustCards: [
    { icon: "shield", title: "Designed for Your Space", text: "Furniture planned around the dimensions and requirements of your workplace." },
    { icon: "quality", title: "Custom Sizes", text: "Made-to-size solutions available for individual business environments." },
    { icon: "clock", title: "Tailored Designs", text: "Furniture developed around your layout, function and project needs." },
    { icon: "service", title: "Complete Service", text: "From planning and manufacturing through to professional installation." },
  ],
  whyTitle: "Why Choose Our Corporate Furniture?",
  whyText: "Cali Wood creates purpose-built corporate furniture designed to make professional spaces more practical, organised and suited to the way your business operates.",
  benefits: [
    { icon: "percent", title: "Made-to-Size Solutions", text: "Furniture can be created around the dimensions and layout of your professional space." },
    { icon: "spark", title: "Reception Solutions", text: "Custom reception counters designed around the needs and layout of your reception area." },
    { icon: "grid", title: "Custom Designs", text: "Furniture solutions can be tailored to specific functional and design requirements." },
    { icon: "layout", title: "Professional Finish", text: "Each project is designed, manufactured and installed as a complete furniture solution." },
  ],
  stats: [
    { value: "Custom", label: "Sizes Available" },
    { value: "Bespoke", label: "Design Options" },
    { value: "3", label: "Space Types" },
    { value: "Complete", label: "Project Service" },
  ],
  stylesTitle: "Our Corporate Furniture Styles",
  materialsTitle: "Furniture & Solutions",
  materialsText: "Choose made-to-size furniture solutions designed around the layout, practical needs and individual requirements of your professional or commercial space.",
  materials: [
    { icon: "layers", title: "Corporate Furniture", text: "Purpose-built furniture for offices and professional environments." },
    { icon: "counter", title: "Reception Counters", text: "Custom counters designed for reception and front-of-house spaces." },
    { icon: "wrench", title: "Custom Interiors", text: "Tailored furniture solutions for individual business environments." },
    { icon: "panel", title: "Custom Sizes", text: "Furniture manufactured to suit specific dimensions and layouts." },
    { icon: "glass", title: "Custom Designs", text: "Individual designs developed around your project requirements." },
  ],
  ctaTitle: "Let’s Plan Your Workspace",
  ctaText: "Tell us about your space and business requirements, and take the next step towards corporate furniture designed around your professional environment.",
  ctaActions: [
    { icon: "calendar", title: "Book a Site Visit", text: "Arrange a visit to discuss and measure your space.", href: "/consultation" },
    { icon: "service", title: "WhatsApp Chat", text: "Tell us about your furniture requirements.", href: "https://wa.me/233501523779" },
    { icon: "quality", title: "Request Quote", text: "Get a quote based on your project.", href: "/consultation" },
    { icon: "user", title: "Call Us", text: "Speak directly with the Cali Wood team.", href: "tel:+233501523779" },
  ],
};

const bathroomVanityContent = {
  title: "Bathroom Vanities",
  label: "BATHROOM VANITIES",
  headline: "Bathroom Vanities",
  description:
    "Custom vanity units designed to suit your bathroom space, storage needs and preferred finish, with practical layouts and a clean, refined appearance.",
  primaryButtonText: "BOOK A SITE VISIT",
  designButtonText: "VIEW VANITY DESIGNS",
  featureCards: [
    { icon: "user", title: "Made to Fit", text: "Designed around your bathroom space." },
    { icon: "cube", title: "Practical Storage", text: "Built for everyday use." },
    { icon: "grid", title: "Custom Layouts", text: "Planned around your needs." },
    { icon: "layout", title: "Clean Finish", text: "Designed for a refined look." },
  ],
  trustCards: [
    { icon: "shield", title: "Designed for Your Space", text: "Vanity units planned around the dimensions and layout of your bathroom." },
    { icon: "quality", title: "Practical Storage", text: "Designed to help organise everyday bathroom essentials more efficiently." },
    { icon: "clock", title: "Custom Layouts", text: "Solutions can be planned around your preferred arrangement and use." },
    { icon: "service", title: "Complete Service", text: "From planning and manufacturing to professional installation." },
  ],
  whyTitle: "Why Choose Our Bathroom Vanities?",
  whyText: "Cali Wood bathroom vanity solutions are designed to combine practical storage, custom sizing and a clean visual finish for a more organised bathroom space.",
  benefits: [
    { icon: "percent", title: "Made-to-Fit Design", text: "Each vanity unit can be planned around the available bathroom space." },
    { icon: "spark", title: "Practical Storage", text: "Designed to improve storage and daily usability." },
    { icon: "grid", title: "Custom Layouts", text: "Configurations can be adapted to suit your needs and preferred setup." },
    { icon: "layout", title: "Refined Finish", text: "Built to create a clean and considered final look." },
  ],
  stats: [
    { value: "Custom", label: "Sizes Available" },
    { value: "Practical", label: "Storage Design" },
    { value: "Tailored", label: "Layout Options" },
    { value: "Complete", label: "Project Service" },
  ],
  stylesTitle: "Our Vanity Styles",
  materialsTitle: "Materials & Finishes",
  materialsText: "Choose finishes and design details that suit your bathroom space and the overall look you want to achieve.",
  materials: [
    { icon: "layers", title: "Custom Vanity Units", text: "Made-to-size solutions planned for your bathroom." },
    { icon: "counter", title: "Practical Storage", text: "Designed for everyday organisation." },
    { icon: "wrench", title: "Tailored Layouts", text: "Adapted to your available space." },
    { icon: "panel", title: "Clean Finishes", text: "Created for a neat and refined final result." },
    { icon: "glass", title: "Professional Installation", text: "Installed as part of the complete service." },
  ],
  ctaTitle: "Let’s Plan Your Vanity Unit",
  ctaText: "Tell us about your bathroom space and what you need, and take the next step towards a vanity solution designed around your requirements.",
  ctaActions: [
    { icon: "calendar", title: "Book a Site Visit", text: "Arrange a visit to discuss and measure your space.", href: "/consultation" },
    { icon: "service", title: "WhatsApp Chat", text: "Tell us about your vanity requirements.", href: "https://wa.me/233501523779" },
    { icon: "quality", title: "Request Quote", text: "Get a quote based on your project.", href: "/consultation" },
    { icon: "user", title: "Call Us", text: "Speak directly with the Cali Wood team.", href: "tel:+233501523779" },
  ],
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

export function getServiceStylesTitle(title) {
  const serviceTitle = String(title || "").trim();
  const styleNames = [
    [/kitchen/i, "Kitchen"],
    [/wardrobe/i, "Wardrobe"],
    [/\btv\b|media unit/i, "TV Unit"],
    [/corporate furniture/i, "Corporate Furniture"],
    [/vanit/i, "Vanity"],
    [/commercial interior/i, "Commercial"],
    [/interior/i, "Interior"],
    [/renovation/i, "Renovation"],
    [/custom furniture/i, "Furniture"],
  ];
  const match = styleNames.find(([pattern]) => pattern.test(serviceTitle));
  const name = match ? match[1] : serviceTitle;
  return name ? `Our ${name} Styles` : "Our Design Styles";
}

function titleFromSlug(slug) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getServiceDetail(slug) {
  if (slug === "bathroom-vanities") {
    return { ...serviceDetails["custom-furniture"], ...bathroomVanityContent, slug };
  }

  if (slug === "corporate-furniture") {
    return { ...serviceDetails["commercial-interiors"], ...corporateFurnitureContent, slug };
  }

  if (slug === "tv-units") {
    return { ...serviceDetails["custom-furniture"], ...tvUnitContent, slug };
  }

  if (["fitted-wardrobes", "luxury-wardrobes"].includes(slug)) {
    return { ...serviceDetails["luxury-wardrobes"], ...wardrobeContent, slug };
  }

  if (["modular-kitchens", "kitchens", "kitchen", "bespoke-kitchens", "luxury-kitchens"].includes(slug)) {
    return { ...serviceDetails["modular-kitchens"], ...kitchenContent, slug };
  }

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
    stylesTitle: getServiceStylesTitle(title),
  };
}
