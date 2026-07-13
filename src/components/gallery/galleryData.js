import kitchenHero from "../../assets/Home/caliwoodHomeHero.png";
import livingRoom from "../../assets/images/interior_living_room_1780070361503.png";
import wardrobe from "../../assets/images/luxury_wardrobe_card_1780070338933.png";
import office from "../../assets/images/executive_office_card_1780070403397.png";
import modularKitchen from "../../assets/images/modular_kitchen_card_1780250098516.png";
import renovation from "../../assets/images/renovation_kitchen_living_1780070378792.png";

export { kitchenHero };

export const galleryTabs = [
  {
    id: "images",
    icon: "image",
    title: "Images",
    subtitle: "Explore Photos",
  },
  {
    id: "videos",
    icon: "video",
    title: "Videos",
    subtitle: "Watch Projects",
  },
  {
    id: "designs",
    icon: "cube",
    title: "3D Designs",
    subtitle: "Explore 3D Renders",
  },
  {
    id: "walkthroughs",
    icon: "walk",
    title: "Walkthroughs",
    subtitle: "Virtual Tour Experience",
  },
];

export const imageGallery = [
  {
    title: "Luxury Neutral Kitchen",
    image: modularKitchen,
    className: "lg:col-span-3 lg:row-span-2",
  },
  {
    title: "Modern Living Interior",
    image: livingRoom,
    className: "lg:col-span-2",
  },
  {
    title: "Warm Kitchen Space",
    image: kitchenHero,
    className: "lg:col-span-2",
  },
  {
    title: "Calm Bedroom Styling",
    image: renovation,
    className: "lg:col-span-2",
  },
  {
    title: "Luxury Wardrobe Detail",
    image: wardrobe,
    className: "lg:col-span-2",
  },
  {
    title: "Statement Dining Kitchen",
    image: kitchenHero,
    className: "lg:col-span-3 lg:row-span-2",
  },
];

export const videos = [
  {
    title: "Modern Kitchen Transformation",
    location: "New York, USA",
    region: "USA",
    duration: "02:45",
    image: kitchenHero,
  },
  {
    title: "Luxury Interior Walkthrough",
    location: "Toronto, Canada",
    region: "CAN",
    duration: "03:12",
    image: livingRoom,
  },
  {
    title: "Contemporary Home Interior",
    location: "London, UK",
    region: "UK",
    duration: "02:30",
    image: renovation,
  },
  {
    title: "Complete Home Makeover",
    location: "Los Angeles, USA",
    region: "USA",
    duration: "03:50",
    image: office,
  },
  {
    title: "Premium Wardrobe Tour",
    location: "Toronto, Canada",
    region: "CAN",
    duration: "02:58",
    image: wardrobe,
  },
];

export const designs3d = [
  {
    title: "Open Plan Apartment",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Modern Villa Floor Plan",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Luxury Kitchen Concept",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Premium Residence Layout",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
  },
];

export const walkthroughs = [
  {
    title: "Luxury Kitchen Walkthrough",
    location: "360° Virtual Tour",
    region: "360",
    image: kitchenHero,
  },
  {
    title: "Modern Apartment Walkthrough",
    location: "360° Virtual Tour",
    region: "360",
    image: livingRoom,
  },
  {
    title: "Premium Villa Walkthrough",
    location: "360° Virtual Tour",
    region: "360",
    image: renovation,
  },
  {
    title: "Commercial Space Walkthrough",
    location: "360° Virtual Tour",
    region: "360",
    image: office,
  },
  {
    title: "Wardrobe Studio Walkthrough",
    location: "360° Virtual Tour",
    region: "360",
    image: wardrobe,
  },
];
