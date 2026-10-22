import kitchenImg from "../../assets/images/luxury_kitchen_hero_1780070314375.png";
import livingImg from "../../assets/images/interior_living_room_1780070361503.png";
import wardrobeImg from "../../assets/images/luxury_wardrobe_card_1780070338933.png";
import officeImg from "../../assets/images/executive_office_card_1780070403397.png";

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

export const heroStats = [
  {
    icon: "rating",
    value: "4.9/5",
    label: "Average Client Rating",
  },
  {
    icon: "quote",
    value: "1200+",
    label: "Happy Clients",
  },
  {
    icon: "trophy",
    value: "15+",
    label: "Years Of Excellence",
  },
  {
    icon: "globe",
    value: "5+",
    label: "Countries Served",
  },
];

export const clientReviews = [
  {
    id: "bespoke-kitchen",
    title: "Bespoke Kitchen",
    name: "[Actual Client Name]",
    location: "[Actual Location]",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80",
    text: "The team understood exactly what we wanted from the beginning. Our kitchen was designed around the available space, and the final result feels practical, well-finished and tailored to the way we use it every day.",
  },
  {
    id: "fitted-wardrobe",
    title: "Fitted Wardrobe",
    name: "[Actual Client Name]",
    location: "[Actual Location]",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&h=160&q=80",
    text: "Our fitted wardrobe has completely improved the way we use the space. The layout, built-in lighting and storage were planned around our needs, and everything feels clean, organised and beautifully finished.",
  },
  {
    id: "tv-media-unit",
    title: "TV & Media Unit",
    name: "[Actual Client Name]",
    location: "[Actual Location]",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80",
    text: "We wanted a TV unit that looked refined but also gave us practical storage. Cali Wood created a made-to-size solution that fits the room perfectly and gives the entire space a much more finished look.",
  },
  {
    id: "corporate-custom-furniture",
    title: "Corporate / Custom Furniture",
    name: "[Actual Client Name]",
    location: "[Actual Location]",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80",
    text: "Cali Wood delivered furniture that works well for our space and everyday requirements. From planning through installation, the process was clear, and the finished result feels professional, functional and properly considered.",
  },
  {
    id: "luxury-kitchen",
    title: "Luxury Kitchen",
    name: "[Actual Client Name]",
    location: "[Actual Location]",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80",
    text: "The entire kitchen was planned around our space and preferences. The layout feels much more practical now, and the finish gives the room a clean, premium look without compromising functionality.",
  },
  {
    id: "standard-kitchen",
    title: "Standard Kitchen",
    name: "[Actual Client Name]",
    location: "[Actual Location]",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&h=160&q=80",
    text: "We wanted a well-designed kitchen that made better use of the available space. The team helped us choose a layout that works for everyday use, and the final installation was neat and well organised.",
  },
  {
    id: "walk-in-wardrobe",
    title: "Walk-In Wardrobe",
    name: "[Actual Client Name]",
    location: "[Actual Location]",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80",
    text: "The wardrobe was designed around the way we actually store and use our clothes. The lighting, shelving and overall layout make the space feel much more organised and easy to use.",
  },
  {
    id: "wooden-door-wardrobe",
    title: "Wooden Door Wardrobe",
    name: "[Actual Client Name]",
    location: "[Actual Location]",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80",
    text: "We were looking for something simple, practical and made specifically for our room. The finished wardrobe fits the space properly and gives us the storage we needed without making the room feel crowded.",
  },
  {
    id: "tv-wall-unit",
    title: "TV Wall Unit",
    name: "[Actual Client Name]",
    location: "[Actual Location]",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80",
    text: "The TV unit has completely changed the look of our living room. It feels built into the space rather than added afterwards, and the storage helps keep everything much cleaner and more organised.",
  },
  {
    id: "media-unit-lighting",
    title: "Media Unit with Lighting",
    name: "[Actual Client Name]",
    location: "[Actual Location]",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&h=160&q=80",
    text: "We wanted a modern media unit with storage and lighting, but it still needed to feel simple and elegant. The final result fits the room beautifully and gives the whole space a more finished appearance.",
  },
  {
    id: "corporate-furniture",
    title: "Corporate Furniture",
    name: "[Actual Client Name]",
    location: "[Actual Location]",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80",
    text: "The furniture was planned around the way our team uses the workspace. The result feels professional, functional and much better suited to the office than standard ready-made furniture.",
  },
  {
    id: "reception-counter",
    title: "Reception Counter",
    name: "[Actual Client Name]",
    location: "[Actual Location]",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80",
    text: "Our reception area needed something custom that would fit the available space and still look professional. The finished counter feels well proportioned, practical and appropriate for the environment.",
  },
  {
    id: "custom-interior",
    title: "Custom Interior",
    name: "[Actual Client Name]",
    location: "[Actual Location]",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80",
    text: "We had a space that needed a more personalised solution than standard furniture could provide. Cali Wood helped turn our requirements into a design that fits the room and works well for everyday use.",
  },
  {
    id: "full-project-process",
    title: "Full Project Process",
    name: "[Actual Client Name]",
    location: "[Actual Location]",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&h=160&q=80",
    text: "The process was clear from the first discussion through measurement, design, manufacturing and installation. We always understood what stage the project was at, and the final result matched what had been planned.",
  },
];

export const videoTestimonials = [
  {
    title: "Modern Kitchen Transformation",
    location: "New York, USA",
    region: "USA",
    flag: "\u{1F1FA}\u{1F1F8}",
    image: kitchenImg,
  },
  {
    title: "Luxury Walk-in Wardrobe",
    location: "Toronto, Canada",
    region: "CAN",
    flag: "\u{1F1E8}\u{1F1E6}",
    image: wardrobeImg,
  },
  {
    title: "Complete Home Interior",
    location: "London, UK",
    region: "UK",
    flag: "\u{1F1EC}\u{1F1E7}",
    image: livingImg,
  },
];

export const successStories = [
  {
    tag: "RESIDENTIAL",
    title: "From Outdated To Outstanding",
    text: "We transformed a dated kitchen into a modern, elegant space that the whole family loves.",
    image: kitchenImg,
  },
  {
    tag: "COMMERCIAL",
    title: "Elevating Office Spaces",
    text: "A complete commercial interior solution that boosted productivity and brand image.",
    image: officeImg,
  },
  {
    tag: "LUXURY INTERIORS",
    title: "Luxury Redefined",
    text: "A stunning interior makeover that brought luxury, comfort and style together.",
    image: livingImg,
  },
];

export const brandLogos = [
  "KOHLER.",
  "blum",
  "HAFELE",
  "BOSCH",
  "caesarstone",
  "PIRNAR",
  "AGT",
];
