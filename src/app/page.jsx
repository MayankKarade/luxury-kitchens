import { getPageMetadata } from "@/lib/seo";
import StructuredData from "@/components/seo/StructuredData";
import Brands from "@/components/home/Brands";
import Expertise from "@/components/home/Expertise";
import Hero from "@/components/home/Hero";
import Portfolio from "@/components/home/Portfolio";
import Process from "@/components/home/Process";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import Image from "next/image";

export const metadata = getPageMetadata('/');

export default function Home() {
  return (
    <>
      <StructuredData metadata={metadata} />
    <div className="w-full  flex  justify-center items-center">
      <div className="w-full max-w-[1800px]">
        <Hero />
        <Stats />
        <Expertise />
        <Portfolio />
        <Process />
        <Testimonials />
        <Brands />
      </div>
    </div>
    </>
  );
}
