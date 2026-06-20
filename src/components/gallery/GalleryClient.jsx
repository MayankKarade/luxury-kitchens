import Designs3D from "./Designs3D";
import GalleryCTA from "./GalleryCTA";
import GalleryHero from "./GalleryHero";
import ImageGallery from "./ImageGallery";
import VideoGallery from "./VideoGallery";
import WalkthroughGallery from "./WalkthroughGallery";

export default function GalleryClient() {
  return (
    <div className="min-h-screen bg-brand-white">
      <GalleryHero />
      <ImageGallery />
      <VideoGallery />
      <Designs3D />
      <WalkthroughGallery />
      <GalleryCTA />
    </div>
  );
}
