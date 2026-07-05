import { DetailIcon } from "./ServiceDesignDetailIcons";

const benefits = [
  {
    icon: "whatsapp",
    title: "Free Consultation",
    text: "Get expert advice",
  },
  {
    icon: "service",
    title: "Custom Design",
    text: "Tailored to your needs",
  },
  {
    icon: "clock",
    title: "On-Time Delivery",
    text: "Hassle-free experience",
  },
  {
    icon: "shield",
    title: "Premium Quality",
    text: "Long-lasting materials",
  },
  {
    icon: "user",
    title: "After-Sales Support",
    text: "We are with you all the way",
  },
];

export default function DesignBenefitStrip() {
  return (
    <section className="bg-brand-dark px-4 py-5 text-white sm:px-10 md:px-16">
      <div className="mx-auto grid  overflow-hidden rounded-lg bg-[#0a0e11] sm:grid-cols-2 lg:grid-cols-5">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="grid grid-cols-[44px_1fr] items-center gap-3 border-b border-white/10 px-5 py-4 last:border-b-0 sm:border-r lg:border-b-0"
          >
            <DetailIcon
              name={benefit.icon}
              className="h-10 w-10 text-brand-gold"
            />
            <div>
              <h3 className="text-sm font-extrabold text-white">
                {benefit.title}
              </h3>
              <p className="mt-1 text-xs font-medium text-zinc-400">
                {benefit.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
