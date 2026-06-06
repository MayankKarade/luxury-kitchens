"use client";

import React from "react";
import ServicesHero from "./ServicesHero";
import WhatWeOffer from "./WhatWeOffer";
import ExcellenceDetail from "./ExcellenceDetail";

export default function OurServicesClient() {
  return (
    <div id="services-page-root" className="bg-brand-dark overflow-hidden">
      {/* SECTION 1: SERVICES HERO WITH LUXURY DEPTH MASK */}
      <ServicesHero />

      {/* SECTION 2: WHAT WE OFFER / PREMIUM 6 SERVICES GRID (LIGHT BG) */}
      <WhatWeOffer />

      {/* SECTION 3: WHY CHOOSE US - EXCELLENCE IN EVERY DETAIL (DARK GRID CONTRAST) */}
      <ExcellenceDetail />
    </div>
  );
}
