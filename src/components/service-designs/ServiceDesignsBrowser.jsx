import Image from "next/image";
import Link from "next/link";

import { ServiceDesignIcon } from "./ServiceDesignIcons";

function CategoryList({ categories }) {
  return (
    <div className="space-y-1">
      {categories.map((category, index) => {
        return (
          <button
            key={category.label}
            type="button"
            className={`flex w-full items-center justify-between rounded-md px-2 py-2 text-left text-[13px] font-semibold transition-colors ${
              category.active || index === 0
                ? "bg-brand-gold/25 text-brand-gold"
                : "text-zinc-700 hover:bg-brand-gold/10"
            }`}
          >
            <span>{category.label}</span>
            <span
              className={`rounded-md px-2 py-1 text-[10px] font-extrabold ${
                category.active || index === 0
                  ? "bg-brand-gold text-white"
                  : "bg-neutral-100 text-zinc-500"
              }`}
            >
              {category.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function FilterSidebar({ collection }) {
  return (
    <aside className="h-fit rounded-lg border border-neutral-200 bg-white p-4 shadow-sm lg:sticky lg:top-28">
      <h2 className="text-sm font-extrabold uppercase tracking-wide text-neutral-900">
        Browse Designs
      </h2>
      <div className="mt-4 border-b border-neutral-200 pb-5">
        <CategoryList categories={collection.categories} />
      </div>

      <div className="pt-4">
        <h3 className="text-sm font-extrabold uppercase tracking-wide text-neutral-900">
          Filter By
        </h3>

        <div className="mt-4">
          <p className="text-sm font-bold text-neutral-900">Style</p>
          <div className="mt-3 space-y-3">
            {collection.filters.map((filter) => (
              <label
                key={filter}
                className="flex items-center gap-3 text-sm font-medium text-zinc-600"
              >
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-neutral-300 accent-brand-gold"
                />
                {filter}
              </label>
            ))}
          </div>
        </div>

        <div className="mt-7">
          <p className="text-sm font-bold text-neutral-900">Colors</p>
          <div className="mt-3 flex flex-wrap gap-3">
            {collection.swatches.map((color) => {
              const colorValue =
                typeof color === "string" ? color : color.value || color.image;
              const colorLabel =
                typeof color === "string" ? "Filter color" : color.name;

              return (
                <button
                  key={colorValue}
                  type="button"
                  aria-label={colorLabel}
                  className="relative h-7 w-7 overflow-hidden rounded-md border border-neutral-200 bg-neutral-100 shadow-sm"
                  style={
                    colorValue?.startsWith("http")
                      ? {
                          backgroundImage: `url(${colorValue})`,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                        }
                      : { background: colorValue }
                  }
                />
              );
            })}
          </div>
        </div>

        <div className="mt-7">
          <p className="text-sm font-bold text-neutral-900">Products</p>
          <p className="mt-2 text-sm font-semibold text-zinc-500">
            {collection.products.length}
          </p>
        </div>

        <div className="mt-7">
          <p className="text-sm font-bold text-neutral-900">Price Range</p>
          <div className="mt-5 px-1">
            <div className="relative h-1 rounded-full bg-brand-gold">
              <span className="absolute -left-1 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-brand-gold bg-white" />
              <span className="absolute -right-1 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-brand-gold bg-white" />
            </div>
            <div className="mt-4 flex justify-between text-xs font-bold text-zinc-500">
              <span>$5,000</span>
              <span>$50,000+</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="mt-7 flex h-11 w-full items-center justify-center rounded-md border border-brand-gold bg-white text-[11px] font-extrabold uppercase tracking-wide text-brand-gold transition-colors hover:bg-brand-gold hover:text-white"
        >
          Reset Filters
        </button>
      </div>
    </aside>
  );
}

function ProductCard({ product, service }) {
  const productSlug = product.slug || product.id || product.title;
  const detailHref = `/our-services/${service.slug}/designs/${productSlug}`;

  return (
    <article className="group h-full overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="relative aspect-[16/10.5] overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-black/5" />
        <Link
          href={detailHref}
          aria-label={`View details for ${product.title}`}
          className="absolute inset-0 z-10"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 z-20 rounded-md bg-brand-gold px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wide text-white shadow">
            {product.badge}
          </span>
        )}
        <button
          type="button"
          aria-label={`Save ${product.title}`}
          className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition-colors hover:bg-brand-gold hover:text-white"
        >
          <ServiceDesignIcon name="heart" className="h-4 w-4" />
        </button>
      </div>

      <div className="p-4">
        <Link
          href={detailHref}
          className="block font-serif text-[17px] font-semibold leading-tight text-neutral-900 transition-colors hover:text-brand-gold"
        >
          {product.title}
        </Link>
        <p className="mt-2 text-[12px] font-medium leading-4 text-zinc-600">
          {product.text}
        </p>
        {product.price && (
          <p className="mt-1 text-lg font-bold text-neutral-900">
            {product.price}
          </p>
        )}
        <Link
          href={detailHref}
          className="mt-5 flex h-11 items-center justify-center gap-3 rounded-md border border-brand-gold text-[11px] font-bold uppercase tracking-wide text-brand-gold transition-colors hover:bg-brand-gold hover:text-white"
        >
          View Details
          <ServiceDesignIcon name="arrow" className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

export default function ServiceDesignsBrowser({ service, collection }) {
  return (
    <section className="bg-brand-white px-4 py-9 text-brand-dark sm:px-10 md:px-16">
      <div className="mx-auto grid  gap-6 lg:grid-cols-[235px_minmax(0,1fr)]">
        <FilterSidebar collection={collection} />

        <div className="min-w-0">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="font-serif text-3xl font-semibold leading-tight text-neutral-900 sm:text-[36px]">
              {collection.listTitle}{" "}
              <span className="font-sans text-base font-bold text-zinc-500">
                ({collection.resultCount})
              </span>
            </h1>
            <select
              defaultValue="popularity"
              className="h-11 rounded-md border border-neutral-200 bg-white px-4 text-sm font-semibold text-zinc-600 outline-none transition-colors focus:border-brand-gold"
              aria-label="Sort designs"
            >
              <option value="popularity">Sort By: Popularity</option>
              <option value="latest">Sort By: Latest</option>
              <option value="price-low">Price: Low To High</option>
              <option value="price-high">Price: High To Low</option>
            </select>
          </div>

          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {collection.products.map((product) => (
              <ProductCard
                key={product.id || product.slug || product.title}
                product={product}
                service={service}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
