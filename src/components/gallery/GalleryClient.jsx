import Designs3D from "./Designs3D";
import GalleryCTA from "./GalleryCTA";
import GalleryHero from "./GalleryHero";
import ImageGallery from "./ImageGallery";
import VideoGallery from "./VideoGallery";
import WalkthroughGallery from "./WalkthroughGallery";

export default function GalleryClient() {
  return (
    // <div className="min-h-screen bg-brand-white">
    <div className="w-full  flex  justify-center items-center">
      <div className="w-full max-w-[1500px]">
        <GalleryHero />
        <ImageGallery />
        <VideoGallery />
        <Designs3D />
        <WalkthroughGallery />
        <GalleryCTA />
      </div>
    </div>
  );
}
