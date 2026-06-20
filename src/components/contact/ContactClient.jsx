import ContactHero from "./ContactHero";
import ContactMain from "./ContactMain";
import OfficeLocations from "./OfficeLocations";

export default function ContactClient() {
  return (
    <div className="min-h-screen bg-brand-white">
      <ContactHero />
      <ContactMain />
      <OfficeLocations />
    </div>
  );
}
