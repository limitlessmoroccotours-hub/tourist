import type { MetadataRoute } from "next";

import { blogPosts } from "@/data/blog";
import { tours } from "@/data/tours";
import { dayTrips } from "@/data/dayTrips";
import { shopProducts } from "@/data/shop";
import { specialOffers } from "@/data/specialOffers";

import { blogPostsEs } from "@/data/blog-es";
import { toursEs } from "@/data/tours-es";
import { excursionesEs } from "@/data/excursiones-es";
import { specialOffersEs } from "@/data/specialOffers-es";

import {
  shopProducts as shopProductsEs,
} from "@/data/shop-es";


const SITE_URL = "https://moroccan-trip.com";


function absolute(path: string) {
  return `${SITE_URL}${path}`;
}


function alternates(
  englishPath: string,
  spanishPath: string
) {
  return {
    languages: {
      en: absolute(englishPath),
      es: absolute(spanishPath),
      "x-default": absolute(englishPath),
    },
  };
}


export default function sitemap(): MetadataRoute.Sitemap {

  const urls: MetadataRoute.Sitemap = [];


  // ─────────────────────────────
  // HOME
  // ─────────────────────────────

  const homeAlternates =
    alternates("/", "/es");


  urls.push(
    {
      url: absolute("/"),
      alternates: homeAlternates,
    },
    {
      url: absolute("/es"),
      alternates: homeAlternates,
    }
  );



  // ─────────────────────────────
  // STATIC PAGE PAIRS
  // ─────────────────────────────

  const staticPairs = [

    {
      en: "/about-us",
      es: "/es/nosotros",
    },

    {
      en: "/contact",
      es: "/es/contacto",
    },

    {
      en: "/blog",
      es: "/es/blog",
    },

    {
      en: "/day-trips",
      es: "/es/excursiones",
    },

    {
      en: "/custom-tour",
      es: "/es/viajes-organizados-a-marruecos",
    },

    {
      en: "/shop",
      es: "/es/tienda",
    },

    {
      en: "/special-offers",
      es: "/es/ofertas-especiales",
    },

    {
      en: "/tours",
      es: "/es/tours",
    },

    {
      en: "/tours/from-marrakech",
      es: "/es/tours/desde-marrakech",
    },

    {
      en: "/tours/from-fes",
      es: "/es/tours/desde-fez",
    },

    {
      en: "/tours/from-casablanca",
      es: "/es/tours/desde-casablanca",
    },

    {
      en: "/tours/from-tangier",
      es: "/es/tours/desde-tanger",
    },

    {
      en: "/tours/from-agadir",
      es: "/es/tours/desde-agadir",
    },

    {
      en: "/tours/from-errachidia",
      es: "/es/tours/desde-errachidia",
    },

  ];


  staticPairs.forEach((pair) => {

    const languageAlternates =
      alternates(
        pair.en,
        pair.es
      );


    urls.push(
      {
        url:
          absolute(pair.en),

        alternates:
          languageAlternates,
      },

      {
        url:
          absolute(pair.es),

        alternates:
          languageAlternates,
      }
    );

  });



  // ─────────────────────────────
  // TOURS
  // Match English ↔ Spanish by ID
  // ─────────────────────────────

  tours.forEach((tour) => {

    const spanishTour =
      toursEs.find(
        (item) =>
          item.id === tour.id
      );


    if (!spanishTour) {

      urls.push({
        url:
          absolute(
            `/tours/${tour.slug}`
          ),
      });

      return;

    }


    const englishPath =
      `/tours/${tour.slug}`;

    const spanishPath =
      `/es/tours/${spanishTour.slug}`;


    const languageAlternates =
      alternates(
        englishPath,
        spanishPath
      );


    urls.push(
      {
        url:
          absolute(englishPath),

        alternates:
          languageAlternates,
      },

      {
        url:
          absolute(spanishPath),

        alternates:
          languageAlternates,
      }
    );

  });



  // ─────────────────────────────
  // BLOG
  // Match English ↔ Spanish by ID
  // ─────────────────────────────

  blogPosts.forEach((post) => {

    const spanishPost =
      blogPostsEs.find(
        (item) =>
          item.id === post.id
      );


    if (!spanishPost) {

      urls.push({
        url:
          absolute(
            `/blog/${post.slug}`
          ),

        lastModified:
          new Date(
            post.updatedAt ??
            post.publishedAt
          ),
      });

      return;

    }


    const englishPath =
      `/blog/${post.slug}`;

    const spanishPath =
      `/es/blog/${spanishPost.slug}`;


    const languageAlternates =
      alternates(
        englishPath,
        spanishPath
      );


    urls.push(
      {
        url:
          absolute(englishPath),

        lastModified:
          new Date(
            post.updatedAt ??
            post.publishedAt
          ),

        alternates:
          languageAlternates,
      },

      {
        url:
          absolute(spanishPath),

        lastModified:
          new Date(
            spanishPost.updatedAt ??
            spanishPost.publishedAt
          ),

        alternates:
          languageAlternates,
      }
    );

  });



  // ─────────────────────────────
  // DAY TRIPS / EXCURSIONES
  // Match English ↔ Spanish by ID
  // ─────────────────────────────

  dayTrips.forEach((trip) => {

    const spanishTrip =
      excursionesEs.find(
        (item) =>
          item.id === trip.id
      );


    if (!spanishTrip) {

      urls.push({
        url:
          absolute(
            `/day-trips/${trip.slug}`
          ),
      });

      return;

    }


    const englishPath =
      `/day-trips/${trip.slug}`;

    const spanishPath =
      `/es/excursiones/${spanishTrip.slug}`;


    const languageAlternates =
      alternates(
        englishPath,
        spanishPath
      );


    urls.push(
      {
        url:
          absolute(englishPath),

        alternates:
          languageAlternates,
      },

      {
        url:
          absolute(spanishPath),

        alternates:
          languageAlternates,
      }
    );

  });



  // ─────────────────────────────
  // SHOP / TIENDA
  // Match English ↔ Spanish by ID
  // ─────────────────────────────

  shopProducts.forEach((product) => {

    const spanishProduct =
      shopProductsEs.find(
        (item) =>
          item.id === product.id
      );


    if (!spanishProduct) {

      urls.push({
        url:
          absolute(
            `/shop/${product.slug}`
          ),
      });

      return;

    }


    const englishPath =
      `/shop/${product.slug}`;

    const spanishPath =
      `/es/tienda/${spanishProduct.slug}`;


    const languageAlternates =
      alternates(
        englishPath,
        spanishPath
      );


    urls.push(
      {
        url:
          absolute(englishPath),

        alternates:
          languageAlternates,
      },

      {
        url:
          absolute(spanishPath),

        alternates:
          languageAlternates,
      }
    );

  });



  // ─────────────────────────────
  // SPECIAL OFFERS
  // Match English ↔ Spanish by ID
  // ─────────────────────────────

  specialOffers.forEach((offer) => {

    const spanishOffer =
      specialOffersEs.find(
        (item) =>
          item.id === offer.id
      );


    if (!spanishOffer) {

      urls.push({
        url:
          absolute(
            `/special-offers/${offer.slug}`
          ),
      });

      return;

    }


    const englishPath =
      `/special-offers/${offer.slug}`;

    const spanishPath =
      `/es/ofertas-especiales/${spanishOffer.slug}`;


    const languageAlternates =
      alternates(
        englishPath,
        spanishPath
      );


    urls.push(
      {
        url:
          absolute(englishPath),

        alternates:
          languageAlternates,
      },

      {
        url:
          absolute(spanishPath),

        alternates:
          languageAlternates,
      }
    );

  });



  return urls;

}