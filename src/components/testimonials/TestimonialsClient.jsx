import ClientReviews from "./ClientReviews";
import SuccessStories from "./SuccessStories";
import TestimonialsHero from "./TestimonialsHero";
import TrustedBrands from "./TrustedBrands";
import VideoTestimonials from "./VideoTestimonials";

export default function TestimonialsClient() {
  return (
    // <div className="min-h-screen bg-brand-white">
    <div className="w-full  flex  justify-center items-center">
      <div className="w-full max-w-[1800px]">
        <TestimonialsHero />
        <ClientReviews />
        <VideoTestimonials />
        <SuccessStories />
        <TrustedBrands />
      </div>
    </div>
  );
}
