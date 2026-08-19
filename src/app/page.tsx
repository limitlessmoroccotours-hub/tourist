import Hero from "@/components/sections/Home/Herosection";
import DepartureCities from "@/components/sections/Home/DepartureCities";
import BestTours from "@/components/sections/Home/BestTours";
import FAQs from "@/components/sections/Home/FAQs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <DepartureCities />
      <BestTours />
      <FAQs />
    
    </>
  );
}