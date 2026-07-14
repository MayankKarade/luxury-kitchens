"use client";

import { useEffect, useMemo, useState } from "react";
import ServiceDesignsBrowser from "./ServiceDesignsBrowser";
import ServiceDesignsHero from "./ServiceDesignsHero";
import { getServiceDesignCollection } from "./serviceDesignData";
import axios from "axios";
import { API_ENDPOINTS } from "@/config";

function getApiCollection(staticCollection, apiData) {
  const products = Array.isArray(apiData?.product) ? apiData.product : [];
  const styles = Array.isArray(apiData?.style) ? apiData.style : [];
  const designs = Array.isArray(apiData?.design) ? apiData.design : [];
  const colors = Array.isArray(apiData?.color) ? apiData.color : [];
  const totalDesignCount = designs.reduce((total, design) => {
    const designCount = Number(design.design_count);

    return Number.isFinite(designCount) ? total + designCount : total;
  }, 0);

  return {
    ...staticCollection,
    resultCount:
      products.length > 0
        ? `${products.length} ${products.length === 1 ? "Result" : "Results"}`
        : staticCollection.resultCount,
    categories:
      designs.length > 0
        ? [
            {
              id: null,
              label: staticCollection.categories[0]?.label || "All Designs",
              count: String(totalDesignCount).padStart(2, "0"),
              design_count: totalDesignCount,
              active: true,
            },
            ...designs.map((design) => ({
              id: design.id,
              label: design.dname,
              count: String(
                design.design_count ??
                  products.filter((product) => product.design_id === design.id)
                    .length,
              ).padStart(2, "0"),
              design_count:
                design.design_count ??
                products.filter((product) => product.design_id === design.id)
                  .length,
            })),
          ]
        : staticCollection.categories,
    filters:
      styles.length > 0
        ? styles
            .map((style) => ({
              id: style.id,
              label: style.sname,
            }))
            .filter((style) => style.label)
        : staticCollection.filters,
    swatches:
      colors.length > 0
        ? colors.map((color) => ({
            id: color.id,
            name: color.name,
            value: color.image,
          }))
        : staticCollection.swatches,
    products:
      products.length > 0
        ? products.map((product) => ({
            id: product.id,
            slug: product.slug || String(product.id),
            title: product.heading || product.slug,
            text: product.description,
            price: product.price,
            image: product.image,
            badge: product.rating ? `${product.rating} Rating` : undefined,
            design_id: product.design_id,
            style_id: product.style_id,
            color_id: product.color_id,
          }))
        : staticCollection.products,
  };
}

export default function ServiceDesignsPage({ service }) {
  const staticCollection = useMemo(
    () => getServiceDesignCollection(service),
    [service],
  );
  const [apiState, setApiState] = useState({
    collection: null,
    slug: null,
    status: "loading",
  });

  useEffect(() => {
    const fetchServiceProducts = async () => {
      try {
        const response = await axios.get(`${API_ENDPOINTS.Product.product}`, {
          params: {
            slug: service.slug,
          },
        });
        const products = response.data?.data?.product;

        if (Array.isArray(products)) {
          setApiState({
            collection: getApiCollection(staticCollection, response.data.data),
            slug: service.slug,
            status: "success",
          });
          return;
        }

        setApiState({
          collection: null,
          slug: service.slug,
          status: "error",
        });
      } catch (error) {
        setApiState({
          collection: null,
          slug: service.slug,
          status: "error",
        });
      }
    };
    fetchServiceProducts();
  }, [service.slug, staticCollection]);

  if (apiState.slug !== service.slug || apiState.status === "loading") {
    return (
      <div className="w-full flex justify-center bg-brand-white px-4 py-28 text-brand-dark sm:px-10 md:px-16">
        <p className="text-sm font-bold uppercase tracking-wide text-zinc-500">
          Loading designs...
        </p>
      </div>
    );
  }

  if (!apiState.collection) {
    return (
      <div className="w-full flex justify-center bg-brand-white px-4 py-28 text-brand-dark sm:px-10 md:px-16">
        <p className="text-sm font-bold uppercase tracking-wide text-zinc-500">
          Designs are not available right now.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full  flex  justify-center items-center">
      <div className="w-full max-w-[1500px]">
        <ServiceDesignsHero service={service} collection={apiState.collection} />
        <ServiceDesignsBrowser service={service} collection={apiState.collection} />
      </div>
    </div>
  );
}
