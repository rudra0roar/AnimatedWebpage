import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" min-h-screen bg-black/[0.86] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
    </main>
  );
}
// bg-black/[0.96]