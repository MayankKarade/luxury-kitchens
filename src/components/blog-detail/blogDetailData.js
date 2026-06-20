import customFurniture from "../../assets/images/custom_furniture_card_1780250074999.png";
import livingImg from "../../assets/images/interior_living_room_1780070361503.png";
import kitchenImg from "../../assets/images/luxury_kitchen_hero_1780070314375.png";
import modularKitchen from "../../assets/images/modular_kitchen_card_1780250098516.png";
import renovationImg from "../../assets/images/renovation_kitchen_living_1780070378792.png";
import wardrobeImg from "../../assets/images/luxury_wardrobe_card_1780070338933.png";
import { articles } from "@/components/blog/blogData";

const categoryCounts = [
  { title: "Kitchen Design Trends", count: "12" },
  { title: "Luxury Interior Ideas", count: "10" },
  { title: "Space Optimization", count: "08" },
  { title: "Material Guides", count: "09" },
  { title: "International Inspiration", count: "07" },
];

const tableOfContents = [
  "Introduction",
  "Natural Stone Takes Center Stage",
  "Dark & Moody Color Palettes",
  "Smart Kitchens, Smarter Living",
  "Seamless Storage Solutions",
  "Statement Lighting",
  "Mixed Materials & Textures",
  "Large Kitchen Islands",
  "Sustainable & Eco-Friendly Choices",
  "Conclusion",
];

const sectionImages = [modularKitchen, kitchenImg, livingImg, wardrobeImg];

const defaultSections = [
  {
    title: "Natural Stone Takes Center Stage",
    body:
      "Marble, quartzite, and granite continue to dominate luxury kitchens. From waterfall islands to statement backsplashes, natural stone adds unmatched beauty and sophistication.",
    image: modularKitchen,
  },
  {
    title: "Dark & Moody Color Palettes",
    body:
      "Deep hues like charcoal, navy, and forest green are making a bold statement. These rich tones add depth, drama, and a sense of intimacy to the kitchen space.",
    image: kitchenImg,
  },
  {
    title: "Smart Kitchens, Smarter Living",
    body:
      "Integrated appliances, thoughtful lighting, and intelligent storage systems create kitchens that feel effortless while supporting everyday cooking and hosting.",
    image: livingImg,
  },
  {
    title: "Seamless Storage Solutions",
    body:
      "Hidden pantries, soft-close pull-outs, and vertical organizers keep luxury kitchens visually clean without sacrificing function or accessibility.",
    image: wardrobeImg,
  },
];

function titleCaseCategory(category) {
  return category
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getBlogSlugs() {
  return articles.map((article) => article.slug);
}

export function getBlogArticle(slug) {
  const baseArticle =
    articles.find((article) => article.slug === slug) || articles[0];
  const recentPosts = articles
    .filter((article) => article.slug !== baseArticle.slug)
    .slice(0, 4);
  const sections = defaultSections.map((section, index) => ({
    ...section,
    image: sectionImages[index % sectionImages.length],
  }));

  return {
    ...baseArticle,
    categoryTitle: titleCaseCategory(baseArticle.category),
    author: "Neha Sharma",
    authorRole: "Design Expert",
    heroImage: baseArticle.image || kitchenImg,
    tableOfContents,
    introduction:
      "Luxury kitchens are no longer just about high-end appliances and premium finishes. They are about creating beautiful, functional spaces that reflect your lifestyle. Here are the top design ideas that combine elegance, innovation, and timeless appeal.",
    sections,
    categories: categoryCounts,
    recentPosts,
    sidebarCta: {
      title: "Have a Project in Mind?",
      text: "Let's create a kitchen that's tailored to your style and needs.",
    },
    fallbackImages: [kitchenImg, modularKitchen, livingImg, customFurniture, renovationImg],
  };
}
