import Expertise from "@/components/home/Expertise";
import Hero from "@/components/home/Hero";
import Portfolio from "@/components/home/Portfolio";
import Process from "@/components/home/Process";
import Stats from "@/components/home/Stats";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Stats />
      <Expertise />
      <Portfolio />
      <Process />
    </div>
  );
}
