import Link from "next/link";

import DesignImageGallery from "./DesignImageGallery";
import DesignInfoPanel from "./DesignInfoPanel";

export default function DesignDetailHeader({ service, product }) {
  return (
    <section className="bg-brand-white px-4 pb-8 pt-6 text-brand-dark sm:px-10 md:px-16">
      <div className="mx-auto ">
        <div className="mb-7 flex flex-wrap items-center gap-2 text-xs font-semibold">
          <Link
            href="/"
            className="text-zinc-600 transition-colors hover:text-brand-gold"
          >
            Home
          </Link>
          <span className="text-brand-gold">&gt;</span>
          <Link
            href="/our-services"
            className="text-zinc-600 transition-colors hover:text-brand-gold"
          >
            Services
          </Link>
          <span className="text-brand-gold">&gt;</span>
          <Link
            href={`/our-services/${service.slug}`}
            className="text-zinc-600 transition-colors hover:text-brand-gold"
          >
            {service.title}
          </Link>
          <span className="text-brand-gold">&gt;</span>
          <span className="text-brand-gold">{product.title}</span>
        </div>

        <div className="grid gap-7 lg:grid-cols-[1.35fr_0.95fr]">
          <DesignImageGallery product={product} />
          <DesignInfoPanel product={product} />
        </div>
      </div>
    </section>
  );
}
