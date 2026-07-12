"use client";
import { useEffect, useMemo, useState } from "react";
import ServiceDetailCTA from "./ServiceDetailCTA";
import ServiceDetailHero from "./ServiceDetailHero";
import ServiceMaterials from "./ServiceMaterials";
import ServiceStylesSlider from "./ServiceStylesSlider";
import ServiceWhyChoose from "./ServiceWhyChoose";
import axios from "axios";
import { API_ENDPOINTS } from "@/config";
import { getServiceDetail } from "./serviceDetailData";

function getMergedService(baseService, apiDetail, apiCategories) {
  if (!apiDetail) {
    return baseService;
  }

  const title = apiDetail.title || apiDetail.service_name || baseService.title;
  const apiStyles = apiCategories.map((category) => ({
    title: category.title,
    text: category.description,
    image: category.image,
    slug: category.slug,
  }));

  return {
    ...baseService,
    title,
    label: title.toUpperCase(),
    headline: title,
    description: apiDetail.description || baseService.description,
    image: apiDetail.image || baseService.image,
    heroImage: apiDetail.image || baseService.heroImage,
    showcaseImage: apiDetail.image || baseService.showcaseImage,
    whyTitle: `Why Choose Our ${title}?`,
    styles: apiStyles.length > 0 ? apiStyles : baseService.styles,
  };
}

export default function ServiceDetailClient({ service, slug }) {
  const effectiveSlug = slug || service?.slug;
  const baseService = useMemo(
    () => service || getServiceDetail(effectiveSlug),
    [effectiveSlug, service],
  );
  const [mergedService, setMergedService] = useState(baseService);

  useEffect(() => {
    if (!effectiveSlug) {
      return;
    }

    const fetchServiceDetail = async () => {
      try {
        const response = await axios.get(
          `${API_ENDPOINTS.Services.serviceDetail}`,
          {
            params: {
              slug: effectiveSlug,
            },
          },
        );
        const detail = response.data.data.detail[0];
        const category = response.data.data.category;

        setMergedService(getMergedService(baseService, detail, category));
      } catch (error) {
        console.log(error.response);
      }
    };

    fetchServiceDetail();
  }, [baseService, effectiveSlug]);

  return (
    <div className="w-full  flex  justify-center items-center">
      <div className="w-full max-w-[1500px]">
        <ServiceDetailHero service={mergedService} />
        <ServiceWhyChoose service={mergedService} />
        <ServiceStylesSlider service={mergedService} />
        <ServiceMaterials service={mergedService} />
        <ServiceDetailCTA service={mergedService} />
      </div>
    </div>
  );
}
