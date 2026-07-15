"use client";

import { useEffect, useState } from "react";
import DesignBenefitStrip from "./DesignBenefitStrip";
import DesignDetailHeader from "./DesignDetailHeader";
import DesignDetailTabs from "./DesignDetailTabs";
import DesignOverview from "./DesignOverview";
import axios from "axios";
import { API_ENDPOINTS } from "@/config";

function splitImages(value) {
  if (!value) return [];

  return value
    .split(",")
    .map((image) => image.trim())
    .filter(Boolean);
}

function mergeApiProduct(staticProduct, apiProduct) {
  if (!apiProduct) return staticProduct;

  const galleryImages = [
    apiProduct.image,
    ...splitImages(apiProduct.multi_image),
  ].filter(Boolean);

  return {
    ...staticProduct,
    slug: apiProduct.slug || staticProduct.slug,
    title: apiProduct.heading || staticProduct.title,
    text: apiProduct.description || staticProduct.text,
    detailText: apiProduct.description || staticProduct.detailText,
    price: apiProduct.price || staticProduct.price,
    rating: apiProduct.rating || staticProduct.rating,
    image: apiProduct.image || staticProduct.image,
    galleryImages:
      galleryImages.length > 0 ? galleryImages : staticProduct.galleryImages,
    video: apiProduct.video || staticProduct.video,
    overview: apiProduct.overview || staticProduct.overview,
    featuresContent: apiProduct.features,
    materialContent: apiProduct.material,
    specificationContent: apiProduct.specification,
    includedContent: apiProduct.include,
    premiumMaterialContent: apiProduct.premium_material,
    facts: [
      {
        icon: "service",
        label: "Style",
        value: apiProduct.style,
      },
      {
        icon: "counter",
        label: "Finish",
        value: apiProduct.finish,
      },
      {
        icon: "layout",
        label: "Configuration",
        value: apiProduct.configuration,
      },
      {
        icon: "spark",
        label: "Ideal For",
        value: apiProduct.ideal_for,
      },
    ].filter((fact) => fact.value),
    materials:
      apiProduct.material || apiProduct.premium_material
        ? [
            {
              swatch: "linear-gradient(135deg, #6b6963, #2f2e2b)",
              title: "Material",
              text: apiProduct.material || staticProduct.materials?.[0]?.text,
            },
            {
              swatch: "linear-gradient(135deg, #f3f1ec, #d7d2ca)",
              title: "Premium Material",
              text:
                apiProduct.premium_material ||
                staticProduct.materials?.[1]?.text,
            },
          ].filter((material) => material.text)
        : staticProduct.materials,
    quickFeatures:
      apiProduct.features || apiProduct.include
        ? [
            {
              icon: "shield",
              title: "Features",
              text:
                apiProduct.features || staticProduct.quickFeatures?.[0]?.text,
            },
            {
              icon: "grid",
              title: "Included",
              text:
                apiProduct.include || staticProduct.quickFeatures?.[1]?.text,
            },
          ].filter((feature) => feature.text)
        : staticProduct.quickFeatures,
  };
}

export default function ServiceDesignDetailPage({
  service,
  product,
  designSlug,
}) {
  const [activeTab, setActiveTab] = useState("overview");
  const [detailState, setDetailState] = useState({
    product: null,
    slug: null,
    status: "loading",
  });

  useEffect(() => {
    const fetchServiceProductDetail = async () => {
      try {
        const response = await axios.get(
          `${API_ENDPOINTS.Product.productDetail}`,
          {
            params: {
              slug: designSlug,
            },
          },
        );

        const apiProduct = response.data?.data?.product?.[0];

        if (apiProduct) {
          setDetailState({
            product: mergeApiProduct(product, apiProduct),
            slug: designSlug,
            status: "success",
          });
          return;
        }

        setDetailState({
          product: null,
          slug: designSlug,
          status: "error",
        });
      } catch (error) {
        setDetailState({
          product: null,
          slug: designSlug,
          status: "error",
        });
      }
    };
    fetchServiceProductDetail();
  }, [designSlug, product]);

  if (detailState.slug !== designSlug || detailState.status === "loading") {
    return (
      <div className="w-full flex justify-center bg-brand-white px-4 py-28 text-brand-dark sm:px-10 md:px-16">
        <p className="text-sm font-bold uppercase tracking-wide text-zinc-500">
          Loading design details...
        </p>
      </div>
    );
  }

  if (!detailState.product) {
    return (
      <div className="w-full flex justify-center bg-brand-white px-4 py-28 text-brand-dark sm:px-10 md:px-16">
        <p className="text-sm font-bold uppercase tracking-wide text-zinc-500">
          Design details are not available right now.
        </p>
      </div>
    );
  }

  return (
    // <div className="min-h-screen bg-brand-white">
    <div className="w-full  flex  justify-center items-center">
      <div className="w-full max-w-[1800px]">
        <div
          className="h-[92px] bg-brand-dark sm:h-[112px]"
          aria-hidden="true"
        />
        <DesignDetailHeader service={service} product={detailState.product} />
        <DesignDetailTabs activeTab={activeTab} onTabChange={setActiveTab} />
        <DesignOverview product={detailState.product} activeTab={activeTab} />
        <DesignBenefitStrip />
      </div>
    </div>
  );
}
