import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import { MovingCards } from "@/components/MovingCards";
import { Scrolling } from "@/components/Scrolling";
import { Tooltip } from "@/components/Tooltip";
import {UpcomingWebinars} from "@/components/UpcomingWebinars";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" min-h-screen bg-black/[0.86] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <Scrolling/>
      <MovingCards />
      <UpcomingWebinars />
      <Tooltip />
    </main>
  );
}
// bg-black/[0.96]