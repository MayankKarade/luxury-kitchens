import Brands from "@/components/home/Brands";
import Expertise from "@/components/home/Expertise";
import Hero from "@/components/home/Hero";
import Portfolio from "@/components/home/Portfolio";
import Process from "@/components/home/Process";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full  flex  justify-center items-center">
      <div className="w-full max-w-[1500px]">
        <Hero />
        <Stats />
        <Expertise />
        <Portfolio />
        <Process />
        <Testimonials />
        <Brands />
      </div>
    </div>
  );
}
