import ConsultationFormSection from "./ConsultationFormSection";
import ConsultationHero from "./ConsultationHero";
import ConsultationOptions from "./ConsultationOptions";
import WhatsAppCta from "./WhatsAppCta";

export default function ConsultationClient() {
  return (
    <div className="min-h-screen bg-brand-white">
      <ConsultationHero />
      <ConsultationOptions />
      <ConsultationFormSection />
      <WhatsAppCta />
    </div>
  );
}
