import { ServiceDetailIcon } from "./ServiceDetailIcons";

export default function ServiceMaterials({ service }) {
  return (
    <section className="bg-brand-white px-4 py-6 text-white sm:px-10 md:px-16">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-lg bg-[#071014] shadow-sm lg:grid-cols-[0.85fr_1.65fr]">
        <div className="border-b border-white/10 px-6 py-7 lg:border-b-0 lg:border-r">
          <h2 className="font-serif text-2xl font-medium uppercase">
            Materials We Use
          </h2>
          <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-300">
            We use only the finest materials and hardware to ensure durability,
            beauty and long-lasting performance.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5">
          {service.materials.map((material) => (
            <div
              key={material.title}
              className="flex flex-col items-center justify-center border-b border-white/10 px-4 py-7 text-center last:border-r-0 sm:border-r lg:border-b-0"
            >
              <ServiceDetailIcon
                name={material.icon}
                className="mb-4 h-10 w-10 text-brand-gold"
              />
              <h3 className="text-xs font-bold leading-5 text-white">
                {material.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
