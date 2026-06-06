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
    <div id="about-page-root" className=" overflow-hidden">
      <AboutHero />
      <OurStory />
      <AboutStats />
      <OurProcess />
      <WhyChooseUs />
      <Presence />
      <Team />
    </div>
  );
};

export default AboutClient;
