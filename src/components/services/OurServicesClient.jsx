"use client";

import React, { useEffect, useState } from "react";
import ServicesHero from "./ServicesHero";
import WhatWeOffer from "./WhatWeOffer";
import ExcellenceDetail from "./ExcellenceDetail";
import axios from "axios";
import { API_ENDPOINTS } from "@/config";

export default function OurServicesClient() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const fetchServiceCategory = async () => {
      try {
        const response = await axios.get(
          `${API_ENDPOINTS.Services.servicesList}`,
        );
        if (response.data) {
          setServices(response?.data?.data?.service);
        }
      } catch (error) {}
    };
    fetchServiceCategory();
  }, []);

  return (
    <div className="w-full  flex  justify-center items-center">
      <div id="services-page-root" className="w-full max-w-[1800px] ">
        <ServicesHero />

        <WhatWeOffer services={services} />

        <ExcellenceDetail />
      </div>
    </div>
  );
}
