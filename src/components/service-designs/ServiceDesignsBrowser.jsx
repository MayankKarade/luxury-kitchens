"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

import { API_BASE_URL, API_ENDPOINTS } from "@/config";
import { ServiceDesignIcon } from "./ServiceDesignIcons";

const productImageBaseUrl = `${API_BASE_URL?.replace(/\/api\/?$/, "")}/productImage/`;

function getFilterLabel(filter) {
  return typeof filter === "string" ? filter : filter.label || filter.name;
}

function getFilterId(filter) {
  return typeof filter === "string" ? filter : (filter.id ?? filter.value);
}

function getColorValue(color) {
  return typeof color === "string" ? color : color.value || color.image;
}

function getColorId(color) {
  return typeof color === "string" ? color : (color.id ?? color.value);
}

function getColorLabel(color) {
  return typeof color === "string" ? "Filter color" : color.name;
}

function resolveProductImage(image) {
  if (!image || typeof image !== "string") {
    return image;
  }

  if (image.startsWith("http") || image.startsWith("/")) {
    return image;
  }

  return `${productImageBaseUrl}${image}`;
}

function normalizeProducts(responseData, fallbackProducts) {
  const products =
    (Array.isArray(responseData?.data) ? responseData.data : null) ||
    responseData?.data?.product ||
    responseData?.product ||
    responseData?.data?.products ||
    responseData?.products ||
    [];

  if (!Array.isArray(products)) {
    return fallbackProducts;
  }

  return products.map((product) => ({
    id: product.id,
    slug: product.slug || String(product.id),
    title: product.heading || product.title || product.slug,
    text: product.description || product.text,
    price: product.price,
    image: resolveProductImage(product.image) || fallbackProducts[0]?.image,
    badge: product.rating ? `${product.rating} Rating` : product.badge,
    design_id: product.design_id,
    style_id: product.style_id,
    color_id: product.color_id,
  }));
}

function normalizeExistingProducts(products) {
  return products.map((product) => ({
    ...product,
    image: resolveProductImage(product.image),
  }));
}

function getProductPrice(product) {
  const rawPrice = product?.price;

  if (typeof rawPrice === "number") {
    return rawPrice;
  }

  const parsedPrice = Number(String(rawPrice || "").replace(/[^\d.]/g, ""));

  return Number.isFinite(parsedPrice) ? parsedPrice : null;
}

function getPriceBounds(products) {
  const prices = products
    .map(getProductPrice)
    .filter((price) => Number.isFinite(price));

  if (prices.length === 0) {
    return {
      min: 0,
      max: 50000,
    };
  }

  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  return {
    min: Math.max(0, Math.floor(minPrice / 1000) * 1000),
    max: Math.max(50000, Math.ceil(maxPrice / 1000) * 1000),
  };
}

function formatPrice(value) {
  return `$${Number(value || 0).toLocaleString("en-US")}`;
}

function buildFilterFormData(selectedFilters) {
  const formData = new FormData();

  const appendValues = (key, values) => {
    if (values.length === 0) {
      formData.append(`${key}[]`, "");
      return;
    }

    values.forEach((value) => {
      formData.append(`${key}[]`, value);
    });
  };

  appendValues("design_id", selectedFilters.designIds);
  appendValues("style_id", selectedFilters.styleIds);
  appendValues("color_id", selectedFilters.colorIds);

  return formData;
}

function CategoryList({ categories, selectedDesignIds, onToggleDesign }) {
  return (
    <div className="space-y-1">
      {categories.map((category, index) => {
        const categoryId =
          category.id ??
          (index === 0 ? null : (category.value ?? category.label));
        const isAllCategory = categoryId == null || index === 0;
        const isActive = isAllCategory
          ? selectedDesignIds.length === 0
          : selectedDesignIds.includes(String(categoryId));

        return (
          <button
            key={category.label}
            type="button"
            onClick={() => onToggleDesign(categoryId)}
            className={`flex w-full items-center justify-between rounded-md px-2 py-2 text-left text-[13px] font-semibold transition-colors ${
              isActive
                ? "bg-brand-gold/25 text-brand-gold"
                : "text-zinc-700 hover:bg-brand-gold/10"
            }`}
          >
            <span>{category.label}</span>
            <span
              className={`rounded-md px-2 py-1 text-[10px] font-extrabold ${
                isActive
                  ? "bg-brand-gold text-white"
                  : "bg-neutral-100 text-zinc-500"
              }`}
            >
              {category.design_count ?? category.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function FilterSidebar({
  collection,
  selectedFilters,
  isFiltering,
  onToggleDesign,
  onToggleStyle,
  onToggleColor,
  onResetFilters,
  priceRange,
  priceBounds,
  onPriceRangeChange,
  productCount,
}) {
  const rangeSize = priceBounds.max - priceBounds.min || 1;
  const selectedMinPercent =
    ((priceRange.min - priceBounds.min) / rangeSize) * 100;
  const selectedMaxPercent =
    ((priceRange.max - priceBounds.min) / rangeSize) * 100;

  return (
    <aside className="h-fit rounded-lg border border-neutral-200 bg-white p-4 shadow-sm lg:sticky lg:top-28">
      <h2 className="text-sm font-extrabold uppercase tracking-wide text-neutral-900">
        Browse Designs
      </h2>
      <div className="mt-4 border-b border-neutral-200 pb-5">
        <CategoryList
          categories={collection.categories}
          selectedDesignIds={selectedFilters.designIds}
          onToggleDesign={onToggleDesign}
        />
      </div>

      <div className="pt-4">
        <h3 className="text-sm font-extrabold uppercase tracking-wide text-neutral-900">
          Filter By
        </h3>

        <div className="mt-4">
          <p className="text-sm font-bold text-neutral-900">Style</p>
          <div className="mt-3 space-y-3">
            {collection.filters.map((filter) => {
              const filterId = String(getFilterId(filter));
              const filterLabel = getFilterLabel(filter);

              return (
                <label
                  key={filterId}
                  className="flex items-center gap-3 text-sm font-medium text-zinc-600"
                >
                  <input
                    type="checkbox"
                    checked={selectedFilters.styleIds.includes(filterId)}
                    onChange={() => onToggleStyle(filterId)}
                    className="h-4 w-4 rounded border-neutral-300 accent-brand-gold"
                  />
                  {filterLabel}
                </label>
              );
            })}
          </div>
        </div>

        <div className="mt-7">
          <p className="text-sm font-bold text-neutral-900">Colors</p>
          <div className="mt-3 flex flex-wrap gap-3">
            {collection.swatches.map((color) => {
              const colorId = String(getColorId(color));
              const colorValue = getColorValue(color);
              const colorLabel = getColorLabel(color);
              const isSelected = selectedFilters.colorIds.includes(colorId);

              return (
                <button
                  key={colorId}
                  type="button"
                  aria-label={colorLabel}
                  onClick={() => onToggleColor(colorId)}
                  className={`relative h-7 w-7 overflow-hidden rounded-md border bg-neutral-100 shadow-sm transition-all ${
                    isSelected
                      ? "border-brand-gold ring-2 ring-brand-gold/35"
                      : "border-neutral-200 hover:border-brand-gold"
                  }`}
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
            {productCount}
          </p>
        </div>

        <div className="mt-7">
          <p className="text-sm font-bold text-neutral-900">Price Range</p>
          <div className="mt-5 px-1">
            <div className="relative h-5">
              <div className="absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-neutral-200" />
              <div
                className="absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-brand-gold"
                style={{
                  left: `${selectedMinPercent}%`,
                  right: `${100 - selectedMaxPercent}%`,
                }}
              />
              <input
                type="range"
                min={priceBounds.min}
                max={priceBounds.max}
                step="500"
                value={priceRange.min}
                onChange={(event) =>
                  onPriceRangeChange({
                    min: Math.min(Number(event.target.value), priceRange.max),
                    max: priceRange.max,
                  })
                }
                aria-label="Minimum price"
                className="pointer-events-none absolute left-0 top-0 h-5 w-full appearance-none bg-transparent accent-brand-gold [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-brand-gold [&::-moz-range-thumb]:bg-white [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-brand-gold [&::-webkit-slider-thumb]:bg-white"
              />
              <input
                type="range"
                min={priceBounds.min}
                max={priceBounds.max}
                step="500"
                value={priceRange.max}
                onChange={(event) =>
                  onPriceRangeChange({
                    min: priceRange.min,
                    max: Math.max(Number(event.target.value), priceRange.min),
                  })
                }
                aria-label="Maximum price"
                className="pointer-events-none absolute left-0 top-0 h-5 w-full appearance-none bg-transparent accent-brand-gold [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-brand-gold [&::-moz-range-thumb]:bg-white [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-brand-gold [&::-webkit-slider-thumb]:bg-white"
              />
            </div>
            <div className="mt-4 flex justify-between text-xs font-bold text-zinc-500">
              <span>{formatPrice(priceRange.min)}</span>
              <span>{formatPrice(priceRange.max)}</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onResetFilters}
          disabled={isFiltering}
          className="mt-7 flex h-11 w-full items-center justify-center rounded-md border border-brand-gold bg-white text-[11px] font-extrabold uppercase tracking-wide text-brand-gold transition-colors hover:bg-brand-gold hover:text-white"
        >
          {isFiltering ? "Filtering..." : "Reset Filters"}
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
  const initialProducts = useMemo(
    () => normalizeExistingProducts(collection.products),
    [collection.products],
  );
  const priceBounds = useMemo(
    () => getPriceBounds(initialProducts),
    [initialProducts],
  );
  const [selectedFilters, setSelectedFilters] = useState({
    designIds: [],
    styleIds: [],
    colorIds: [],
  });
  const [products, setProducts] = useState(() => initialProducts);
  const [priceRange, setPriceRange] = useState(() => priceBounds);
  const [isFiltering, setIsFiltering] = useState(false);

  useEffect(() => {
    setSelectedFilters({
      designIds: [],
      styleIds: [],
      colorIds: [],
    });
    setProducts(initialProducts);
    setPriceRange(priceBounds);
  }, [collection, initialProducts, priceBounds]);

  const filteredProducts = useMemo(
    () =>
      products.filter((product) => {
        const price = getProductPrice(product);

        return (
          !Number.isFinite(price) ||
          (price >= priceRange.min && price <= priceRange.max)
        );
      }),
    [products, priceRange],
  );

  const applyFilters = async (nextFilters) => {
    setSelectedFilters(nextFilters);
    setIsFiltering(true);

    try {
      const response = await axios.post(
        API_ENDPOINTS.Product.productFilter,
        buildFilterFormData(nextFilters),
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      setProducts(normalizeProducts(response.data, collection.products));
    } catch (error) {
      console.log(error.response);
    } finally {
      setIsFiltering(false);
    }
  };

  const toggleSelection = (values, value) => {
    const normalizedValue = String(value);

    return values.includes(normalizedValue)
      ? values.filter((item) => item !== normalizedValue)
      : [...values, normalizedValue];
  };

  const handleToggleDesign = (designId) => {
    const nextFilters = {
      ...selectedFilters,
      designIds:
        designId == null
          ? []
          : toggleSelection(selectedFilters.designIds, designId),
    };

    applyFilters(nextFilters);
  };

  const handleToggleStyle = (styleId) => {
    const nextFilters = {
      ...selectedFilters,
      styleIds: toggleSelection(selectedFilters.styleIds, styleId),
    };

    applyFilters(nextFilters);
  };

  const handleToggleColor = (colorId) => {
    const nextFilters = {
      ...selectedFilters,
      colorIds: toggleSelection(selectedFilters.colorIds, colorId),
    };

    applyFilters(nextFilters);
  };

  const handleResetFilters = () => {
    setPriceRange(priceBounds);
    applyFilters({
      designIds: [],
      styleIds: [],
      colorIds: [],
    });
  };

  return (
    <section className="bg-brand-white px-4 py-9 text-brand-dark sm:px-10 md:px-16">
      <div className="mx-auto grid  gap-6 lg:grid-cols-[235px_minmax(0,1fr)]">
        <FilterSidebar
          collection={collection}
          selectedFilters={selectedFilters}
          isFiltering={isFiltering}
          onToggleDesign={handleToggleDesign}
          onToggleStyle={handleToggleStyle}
          onToggleColor={handleToggleColor}
          onResetFilters={handleResetFilters}
          priceRange={priceRange}
          priceBounds={priceBounds}
          onPriceRangeChange={setPriceRange}
          productCount={filteredProducts.length}
        />

        <div className="min-w-0">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="font-serif text-3xl font-semibold leading-tight text-neutral-900 sm:text-[36px]">
              {collection.listTitle}{" "}
              <span className="font-sans text-base font-bold text-zinc-500">
                ({filteredProducts.length}{" "}
                {filteredProducts.length === 1 ? "Result" : "Results"})
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
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id || product.slug || product.title}
                product={product}
                service={service}
              />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="rounded-lg border border-dashed border-neutral-200 bg-white px-6 py-10 text-center">
              <p className="text-sm font-bold uppercase tracking-wide text-zinc-500">
                No designs found for selected filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
