import ServiceDetailCTA from "./ServiceDetailCTA";
import ServiceDetailHero from "./ServiceDetailHero";
import ServiceMaterials from "./ServiceMaterials";
import ServiceStylesSlider from "./ServiceStylesSlider";
import ServiceWhyChoose from "./ServiceWhyChoose";

export default function ServiceDetailClient({ service }) {
  return (
    <div className="min-h-screen bg-brand-white">
      <ServiceDetailHero service={service} />
      <ServiceWhyChoose service={service} />
      <ServiceStylesSlider service={service} />
      <ServiceMaterials service={service} />
      <ServiceDetailCTA service={service} />
    </div>
  );
}
