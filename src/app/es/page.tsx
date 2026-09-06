import type { Metadata } from "next";

import Hero from "@/components/sections/Home/Herosection";
import DepartureCities from "@/components/sections/Home/DepartureCities";
import FeaturedTours from "@/components/sections/Home/FeaturedTours";
import FAQs from "@/components/sections/Home/FAQs";
import TrustBar from "@/components/sections/Home/TrustBar";
import MoroccoExperiences from "@/components/sections/Home/MoroccoExperiences";
import DayTrips from "@/components/sections/Home/DayTrips";
import TravelInspiration from "@/components/sections/Home/TravelInspiration";
import Reviews from "@/components/sections/Home/Reviews";
import HomeSchema from "@/components/seo/HomeSchema";



const heroSpanish = {

  label:
    "Tours privados y auténticos por Marruecos",

  title:
    "Viaje a Marruecos",

  subtitle:
    "Experiencias privadas en el desierto del Sahara",

  description:
    "Descubre Marruecos con tours privados, viajes personalizados y experiencias auténticas. Explora Marrakech, el desierto del Sahara y los lugares más increíbles con expertos locales.",

  primaryButton:
    "Explorar tours por Marruecos",

  secondaryButton:
    "Planifica tu viaje",

};





const trustBarSpanish = {

  tripadvisorTitle:
    "Tripadvisor",

  tripadvisorSubtitle:
    "Experiencia valorada",


  expertsTitle:
    "Expertos locales",

  expertsSubtitle:
    "Equipo basado en Marrakech",


  privateTitle:
    "Tours privados",

  privateSubtitle:
    "Viajes personalizados por Marruecos",


  authenticTitle:
    "Auténtico",

  authenticSubtitle:
    "Experiencias marroquíes",

};





const reviewsSpanish = {

  label:
    "Opiniones de viajeros",


  title:
    "Opiniones de viajeros sobre nuestros tours por Marruecos",


  titleHighlight:
    "",


  description:
    "Moroccan Trip ofrece tours privados en Marruecos con el mismo equipo local detrás de Limitless Morocco Tours. Estas opiniones verificadas de Tripadvisor fueron compartidas por viajeros que descubrieron Marrakech, el desierto del Sahara y otros lugares de Marruecos con nuestro equipo.",


  verifiedText:
    "Opiniones verificadas de Tripadvisor del perfil de Limitless Morocco Tours",


  readMore:
    "Leer opinión completa",


  cta:
    "Ver todas las opiniones en Tripadvisor",

};

const departureCitiesSpanish = {

    label:
      "Comienza tu viaje",
  
    title:
      "Explora Marruecos desde",
  
    titleHighlight:
      " tu ciudad de salida",
  
    description:
      "Elige tu punto de partida y descubre tours privados por Marruecos diseñados según tu estilo de viaje y tus intereses.",
  
    startingPoint:
      "Punto de salida",
  
    exploreTours:
      "Explorar tours",
  
    toursFrom:
      "Tours desde",
  
  };




export const metadata: Metadata = {


  title:
    "Viaje a Marruecos | Tours Privados y Experiencias Auténticas",



  description:
    "Descubre Marruecos con tours privados, viajes personalizados y experiencias auténticas. Explora Marrakech, el Sahara y Marruecos con expertos locales.",



  keywords: [

    "viaje a marruecos",
    "viajes a marruecos",
    "tours marruecos",
    "tour privado marruecos",
    "viaje organizado marruecos",

  ],



  alternates: {

    canonical:
      "https://moroccan-trip.com/es",

  },



  openGraph: {

    title:
      "Viaje a Marruecos | Tours Privados y Experiencias Auténticas",


    description:
      "Descubre Marruecos con tours privados, viajes personalizados y experiencias auténticas con expertos locales.",


    url:
      "https://moroccan-trip.com/es",


    siteName:
      "Moroccan Trip",


    type:
      "website",


    locale:
      "es_ES",


    images: [

      {

        url:
          "/images/home/og-home.webp",

        width:
          1200,

        height:
          630,

        alt:
          "Viaje a Marruecos y tours privados en el desierto del Sahara",

      },

    ],

  },



  twitter: {

    card:
      "summary_large_image",


    title:
      "Viaje a Marruecos | Tours Privados y Experiencias Auténticas",


    description:
      "Explora Marruecos con tours privados, aventuras en el Sahara y experiencias auténticas.",


    images:

      [
        "/images/home/og-home.webp"
      ],

  },


};






export default function SpanishHome() {


  return (

    <>


      <HomeSchema language="es" />


      <Hero content={heroSpanish} />


      <TrustBar content={trustBarSpanish} />


      <Reviews content={reviewsSpanish} />


      <DepartureCities content={departureCitiesSpanish} />


      <FeaturedTours />


      <MoroccoExperiences />


      <DayTrips />


      <TravelInspiration />


      <FAQs />


    </>

  );


}