"use client";
import { API_ENDPOINTS } from "@/config";
import Designs3D from "./Designs3D";
import GalleryCTA from "./GalleryCTA";
import GalleryHero from "./GalleryHero";
import ImageGallery from "./ImageGallery";
import VideoGallery from "./VideoGallery";
import WalkthroughGallery from "./WalkthroughGallery";
import { useEffect, useState } from "react";
import axios from "axios";

export default function GalleryClient() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [galleryVideos, setGalleryVideos] = useState([]);
  const [galleryDesigns3D, setGalleryDesigns3D] = useState([]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await axios.get(`${API_ENDPOINTS.Gallery.gallery}`);
        setGalleryImages(response.data.data.gallery);
        setGalleryVideos(response.data.data.video);
        setGalleryDesigns3D(response.data.data.three_d);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchGallery();
  }, []);

  return (
    // <div className="min-h-screen bg-brand-white">
    <div className="w-full  flex  justify-center items-center">
      <div className="w-full max-w-[1500px]">
        <GalleryHero />
        <ImageGallery galleryImages={galleryImages} />
        <VideoGallery galleryVideos={galleryVideos} />
        <Designs3D galleryDesigns3D={galleryDesigns3D} />
        <WalkthroughGallery />
        <GalleryCTA />
      </div>
    </div>
  );
}
