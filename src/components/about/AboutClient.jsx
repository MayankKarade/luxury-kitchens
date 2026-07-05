import React from "react";
import AboutHero from "./AboutHero";
import OurStory from "./OurStory";
import AboutStats from "./AboutStats";
import OurProcess from "./OurProcess";
import WhyChooseUs from "./WhyChooseUs";
import Presence from "./Presence";
import Team from "./Team";

const AboutClient = () => {
  return (
    <div className="w-full  flex  justify-center items-center">
      <div id="about-page-root" className="w-full max-w-[1500px]">
        <AboutHero />
        <OurStory />
        <AboutStats />
        <OurProcess />
        <WhyChooseUs />
        <Presence />
        <Team />
      </div>
    </div>
  );
};

export default AboutClient;
