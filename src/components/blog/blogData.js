import kitchenImg from "../../assets/images/luxury_kitchen_hero_1780070314375.png";
import livingImg from "../../assets/images/interior_living_room_1780070361503.png";
import wardrobeImg from "../../assets/images/luxury_wardrobe_card_1780070338933.png";
import materialImg from "../../assets/images/custom_furniture_card_1780250074999.png";
import exteriorImg from "../../assets/images/renovation_kitchen_living_1780070378792.png";
import {
  InteriorIdeasIcon,
  InternationalDesignIcon,
  KitchenTrendsIcon,
  MaterialGuidesIcon,
  SpaceOptimizationIcon,
} from "./BlogCategoryIcons";

export const categories = [
  {
    Icon: KitchenTrendsIcon,
    title: "Kitchen Design Trends",
    count: "25 Articles",
  },
  {
    Icon: InteriorIdeasIcon,
    title: "Luxury Interior Ideas",
    count: "32 Articles",
  },
  {
    Icon: SpaceOptimizationIcon,
    title: "Space Optimization",
    count: "18 Articles",
  },
  {
    Icon: MaterialGuidesIcon,
    title: "Material Guides",
    count: "21 Articles",
  },
  {
    Icon: InternationalDesignIcon,
    title: "International Design Inspiration",
    count: "27 Articles",
  },
];

export const articles = [
  {
    slug: "top-kitchen-design-trends-for-2025",
    category: "KITCHEN DESIGN TRENDS",
    title: "Top Kitchen Design Trends For 2025",
    description:
      "Discover the latest kitchen design trends that combine luxury, functionality, and timeless style.",
    date: "May 10, 2025",
    readTime: "5 min read",
    image: kitchenImg,
  },
  {
    slug: "luxury-interior-ideas-that-never-go-out-of-style",
    category: "LUXURY INTERIOR IDEAS",
    title: "Luxury Interior Ideas That Never Go Out Of Style",
    description:
      "Explore timeless interior design ideas to elevate your home with elegance and sophistication.",
    date: "May 07, 2025",
    readTime: "6 min read",
    image: livingImg,
  },
  {
    slug: "smart-space-optimization-for-modern-homes",
    category: "SPACE OPTIMIZATION",
    title: "Smart Space Optimization For Modern Homes",
    description:
      "Smart solutions to maximize every inch of your space without compromising on aesthetics.",
    date: "May 04, 2025",
    readTime: "4 min read",
    image: wardrobeImg,
  },
  {
    slug: "ultimate-guide-to-premium-materials",
    category: "MATERIAL GUIDES",
    title: "The Ultimate Guide To Premium Materials",
    description:
      "A complete guide to choosing the right materials for durability, beauty, and long-term value.",
    date: "Apr 30, 2025",
    readTime: "7 min read",
    image: materialImg,
  },
  {
    slug: "modern-european-design-inspiration-for-homes",
    category: "INTERNATIONAL DESIGN INSPIRATION",
    title: "Modern European Design Inspiration For Homes",
    description:
      "Explore stunning European design concepts that bring a touch of luxury to your space.",
    date: "Apr 27, 2025",
    readTime: "5 min read",
    image: exteriorImg,
  },
  {
    slug: "minimalist-kitchens-the-new-luxury",
    category: "KITCHEN DESIGN TRENDS",
    title: "Minimalist Kitchens: The New Luxury",
    description:
      "Why minimalist kitchen designs are becoming the top choice for modern homeowners.",
    date: "Apr 24, 2025",
    readTime: "4 min read",
    image: kitchenImg,
  },
];

export const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
};
