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
    name: "Robert Anderson",
    location: "New York, USA",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80",
    text: "Netsaarthi transformed our kitchen into a luxurious and functional space. The attention to detail and quality is truly unmatched.",
  },
  {
    name: "Sophia Martinez",
    location: "Toronto, Canada",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&h=160&q=80",
    text: "From design to installation, the entire process was seamless. Their team understood our vision perfectly.",
  },
  {
    name: "James Wilson",
    location: "London, UK",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80",
    text: "Exceptional craftsmanship and premium materials. Our new interiors have become the highlight of our home.",
  },
  {
    name: "Emma Johnson",
    location: "Munich, Germany",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80",
    text: "Professional, creative and reliable. Netsaarthi delivered beyond our expectations. Highly recommended!",
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
