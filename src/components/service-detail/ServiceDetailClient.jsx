import ServiceDetailCTA from "./ServiceDetailCTA";
import ServiceDetailHero from "./ServiceDetailHero";
import ServiceMaterials from "./ServiceMaterials";
import ServiceStylesSlider from "./ServiceStylesSlider";
import ServiceWhyChoose from "./ServiceWhyChoose";

export default function ServiceDetailClient({ service }) {
  return (
    // <div className="min-h-screen bg-brand-white">
    <div className="w-full  flex  justify-center items-center">
      <div className="w-full max-w-[1500px]">
        <ServiceDetailHero service={service} />
        <ServiceWhyChoose service={service} />
        <ServiceStylesSlider service={service} />
        <ServiceMaterials service={service} />
        <ServiceDetailCTA service={service} />
      </div>
    </div>
  );
}
