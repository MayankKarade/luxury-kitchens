import { ServiceDetailIcon } from "../service-detail/ServiceDetailIcons";

const pricingPoints = [
  {
    number: "01",
    title: "Prices Are a Starting Point",
    description:
      "Final pricing depends on your space, materials and preferences. An exact quotation is confirmed once we understand your project requirements.",
    icon: "percent",
  },
  {
    number: "02",
    title: "Made to Your Size",
    description:
      "Our standard kitchen height is 2.2 m, with custom sizes available on request to suit your space and requirements.",
    icon: "panel",
  },
  {
    number: "03",
    title: "Choose Your Accessories",
    description:
      "Wardrobes are available with Blum or standard accessories, while TV units can be configured with Blum or Sumit accessories.",
    icon: "wrench",
  },
  {
    number: "04",
    title: "Choose Your Worktop",
    description:
      "Kitchen worktops are available in granite, quartz or marble, giving you flexibility to choose the right finish for your space.",
    icon: "counter",
  },
];

export default function PricingGuideSection() {
  return (
    <section className="bg-[#f8f6f1] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-[28px] xl:px-[34px]">
        <div className="mx-auto mb-16 flex max-w-[760px] flex-col items-center text-center">
          <p className="mb-3 block font-sans text-xs font-extrabold uppercase tracking-[0.25em] text-brand-gold">
            PRICING GUIDE
          </p>

          <h2 className="font-serif text-3xl font-normal tracking-tight text-neutral-900 sm:text-4xl lg:text-[42px]">
            How Our Pricing Works
          </h2>

          <div className="mb-5 mt-4 h-[2px] w-12 bg-brand-gold"></div>

          <p className="max-w-2xl font-sans text-[15px] leading-relaxed text-neutral-500 sm:text-base">
            Every Cali Wood project is tailored to the individual space, so
            final pricing depends on your measurements, materials, accessories
            and preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {pricingPoints.map((item) => {
            return (
              <article
                key={item.number}
                className="group relative min-h-[270px] border border-[#deddd6] bg-[#fcfbf7] px-6 py-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/45 hover:shadow-[0_12px_35px_rgba(1,1,41,0.08)] lg:py-8"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-13 w-13 items-center justify-center rounded-xl border border-brand-gold/25 bg-brand-dark text-brand-gold shadow-[0_10px_22px_rgba(1,1,41,0.10)] transition-all duration-300 group-hover:scale-105 group-hover:border-brand-gold/45 group-hover:bg-brand-gold group-hover:text-white">
                    <ServiceDetailIcon
                      name={item.icon}
                      className="h-7 w-7 stroke-[1.65]"
                    />
                  </div>

                  <span className="font-mono text-[12px] font-bold tracking-[0.18em] text-brand-gold/70">
                    {item.number}
                  </span>
                </div>

                <div className="mt-8">
                  <h3 className="font-serif text-[24px] font-semibold leading-[1.15] text-[#263026]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[13px] leading-[1.8] text-[#737770] sm:text-[14px]">
                    {item.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-gold transition-all duration-300 group-hover:w-full" />
              </article>
            );
          })}
        </div>

        <div className="mt-6 flex flex-col gap-3 border border-[#deddd6] bg-[#f1f0e9] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7 lg:mt-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#596552]">
              GOOD TO KNOW
            </p>

            <p className="mt-1 text-[13px] leading-6 text-[#6e726b] sm:text-[14px]">
              Final quotations are confirmed after we understand your space,
              materials and project requirements.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex h-11 shrink-0 items-center justify-center border border-[#283428] bg-[#283428] px-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-transparent hover:text-[#283428]"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
