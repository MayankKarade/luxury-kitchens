"use client";

import React from "react";
import ServicesHero from "./ServicesHero";
import WhatWeOffer from "./WhatWeOffer";
import ExcellenceDetail from "./ExcellenceDetail";

export default function OurServicesClient() {
  return (
    <div className="w-full  flex  justify-center items-center">
      <div id="services-page-root" className="w-full max-w-[1500px] ">
        <ServicesHero />

        <WhatWeOffer />

        <ExcellenceDetail />
      </div>
    </div>
  );
}
