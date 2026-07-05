import ContactHero from "./ContactHero";
import ContactMain from "./ContactMain";
import OfficeLocations from "./OfficeLocations";

export default function ContactClient() {
  return (
    // <div className="min-h-screen bg-brand-white">
    <div className="w-full  flex  justify-center items-center">
      <div className="w-full max-w-[1500px]">
        <ContactHero />
        <ContactMain />
        <OfficeLocations />
      </div>
    </div>
  );
}
