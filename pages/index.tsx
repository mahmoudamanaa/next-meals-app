import About from "@/components/home/About";
import HeroSection from "@/components/home/HeroSection";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <HeroSection />
      <About />
    </Fragment>
  );
}
