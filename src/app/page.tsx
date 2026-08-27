import type { Metadata } from "next";

import Hero from "@/components/sections/Home/Herosection";
import DepartureCities from "@/components/sections/Home/DepartureCities";
import FeaturedTours from "@/components/sections/Home/FeaturedTours";
import FAQs from "@/components/sections/Home/FAQs";
import TrustBar from "@/components/sections/Home/TrustBar";
import MoroccoExperiences from "@/components/sections/Home/MoroccoExperiences";
import SpecialOffers from "@/components/sections/Home/SpecialOffers";
import DayTrips from "@/components/sections/Home/DayTrips";
import TravelInspiration from "@/components/sections/Home/TravelInspiration";
import HomeSchema from "@/components/seo/HomeSchema";



export const metadata: Metadata = {

  title:
    "Morocco Tours | Private Sahara Desert Tours & Authentic Experiences",


  description:
    "Discover Morocco with private tours, Sahara Desert adventures and authentic experiences. Explore Marrakech, Fes, Casablanca and Morocco with local travel experts.",


  keywords: [
    "Morocco tours",
    "private Morocco tours",
    "Sahara Desert tours",
    "Marrakech desert tours",
    "Morocco travel experiences",
    "Morocco tour packages",
  ],


  alternates: {

    canonical:
      "https://moroccan-trip.com",

  },


  openGraph: {

    title:
      "Morocco Tours | Private Sahara Desert Tours & Authentic Experiences",


    description:
      "Private Morocco tours, Sahara adventures and authentic journeys created by local Morocco experts.",


    url:
      "https://moroccan-trip.com",


    siteName:
      "Moroccan Trip",


    type:
      "website",


    images: [
      {
        url:
          "/images/home/og-home.webp",

        width:
          1200,

        height:
          630,

        alt:
          "Morocco Tours and Sahara Desert Experiences",
      },
    ],

  },


  twitter: {

    card:
      "summary_large_image",


    title:
      "Morocco Tours | Private Sahara Desert Tours & Authentic Experiences",


    description:
      "Explore Morocco through private tours, Sahara adventures and authentic local experiences.",


    images:
      [
        "/images/home/og-home.webp"
      ],

  },


};



export default function Home() {

  return (

    <>

      <HomeSchema />
      
      <Hero />

      <TrustBar />

      <DepartureCities />

      <FeaturedTours />

      <MoroccoExperiences />

      <SpecialOffers />

      <DayTrips />

      <TravelInspiration />

      <FAQs />

    </>

  );

}