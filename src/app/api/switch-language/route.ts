import {
    NextRequest,
    NextResponse,
  } from "next/server";
  
  import { tours } from "@/data/tours";
  import { toursEs } from "@/data/tours-es";
  
  import { blogPosts } from "@/data/blog";
  import { blogPostsEs } from "@/data/blog-es";
  
  import { dayTrips } from "@/data/dayTrips";
  import { excursionesEs } from "@/data/excursiones-es";
  
  import { specialOffers } from "@/data/specialOffers";
  import { specialOffersEs } from "@/data/specialOffers-es";
  
  import { shopProducts } from "@/data/shop";
  
  import {
    shopProducts as shopProductsEs,
  } from "@/data/shop-es";
  
  
  // ─────────────────────────────
  // STATIC PAGE PAIRS
  // ─────────────────────────────
  
  const englishToSpanish: Record<string, string> = {
  
    "/":
      "/es",
  
    "/about-us":
      "/es/nosotros",
  
    "/contact":
      "/es/contacto",
  
    "/blog":
      "/es/blog",
  
    "/day-trips":
      "/es/excursiones",
  
    "/custom-tour":
      "/es/viajes-organizados-a-marruecos",
  
    "/shop":
      "/es/tienda",
  
    "/special-offers":
      "/es/ofertas-especiales",
  
    "/tours":
      "/es/tours",
  
  
    "/tours/from-marrakech":
      "/es/tours/desde-marrakech",
  
    "/tours/from-fes":
      "/es/tours/desde-fez",
  
    "/tours/from-casablanca":
      "/es/tours/desde-casablanca",
  
    "/tours/from-tangier":
      "/es/tours/desde-tanger",
  
    "/tours/from-agadir":
      "/es/tours/desde-agadir",
  
    "/tours/from-errachidia":
      "/es/tours/desde-errachidia",
  
  };
  
  
  const spanishToEnglish: Record<string, string> =
    Object.fromEntries(
  
      Object.entries(
        englishToSpanish
      ).map(
        ([english, spanish]) => [
          spanish,
          english,
        ]
      )
  
    );
  
  
  // ─────────────────────────────
  // SAFE PATH
  // ─────────────────────────────
  
  function safePath(
    value: string | null
  ) {
  
    if (
      !value ||
      !value.startsWith("/")
    ) {
      return "/";
    }
  
  
    try {
  
      const url =
        new URL(
          value,
          "https://moroccan-trip.com"
        );
  
      return url.pathname;
  
    } catch {
  
      return "/";
  
    }
  
  }
  
  
  // ─────────────────────────────
  // ENGLISH → SPANISH
  // ─────────────────────────────
  
  function toSpanish(
    path: string
  ) {
  
  
    // Static pages
  
    if (englishToSpanish[path]) {
      return englishToSpanish[path];
    }
  
  
    // Tours
  
    if (path.startsWith("/tours/")) {
  
      const slug =
        path.replace(
          "/tours/",
          ""
        );
  
  
      const englishTour =
        tours.find(
          (tour) =>
            tour.slug === slug
        );
  
  
      if (englishTour) {
  
        const spanishTour =
          toursEs.find(
            (tour) =>
              tour.id === englishTour.id
          );
  
  
        if (spanishTour) {
  
          return `/es/tours/${spanishTour.slug}`;
  
        }
  
      }
  
  
      // Tour exists only in English
      return "/es/tours";
  
    }
  
  
    // Blog
  
    if (path.startsWith("/blog/")) {
  
      const slug =
        path.replace(
          "/blog/",
          ""
        );
  
  
      const englishPost =
        blogPosts.find(
          (post) =>
            post.slug === slug
        );
  
  
      if (englishPost) {
  
        const spanishPost =
          blogPostsEs.find(
            (post) =>
              post.id === englishPost.id
          );
  
  
        if (spanishPost) {
  
          return `/es/blog/${spanishPost.slug}`;
  
        }
  
      }
  
  
      return "/es/blog";
  
    }
  
  
    // Day Trips
  
    if (
      path.startsWith(
        "/day-trips/"
      )
    ) {
  
      const slug =
        path.replace(
          "/day-trips/",
          ""
        );
  
  
      const englishTrip =
        dayTrips.find(
          (trip) =>
            trip.slug === slug
        );
  
  
      if (englishTrip) {
  
        const spanishTrip =
          excursionesEs.find(
            (trip) =>
              trip.id === englishTrip.id
          );
  
  
        if (spanishTrip) {
  
          return `/es/excursiones/${spanishTrip.slug}`;
  
        }
  
      }
  
  
      return "/es/excursiones";
  
    }
  
  
    // Shop
  
    if (path.startsWith("/shop/")) {
  
      const slug =
        path.replace(
          "/shop/",
          ""
        );
  
  
      const englishProduct =
        shopProducts.find(
          (product) =>
            product.slug === slug
        );
  
  
      if (englishProduct) {
  
        const spanishProduct =
          shopProductsEs.find(
            (product) =>
              product.id === englishProduct.id
          );
  
  
        if (spanishProduct) {
  
          return `/es/tienda/${spanishProduct.slug}`;
  
        }
  
      }
  
  
      return "/es/tienda";
  
    }
  
  
    // Special Offers
  
    if (
      path.startsWith(
        "/special-offers/"
      )
    ) {
  
      const slug =
        path.replace(
          "/special-offers/",
          ""
        );
  
  
      const englishOffer =
        specialOffers.find(
          (offer) =>
            offer.slug === slug
        );
  
  
      if (englishOffer) {
  
        const spanishOffer =
          specialOffersEs.find(
            (offer) =>
              offer.id === englishOffer.id
          );
  
  
        if (spanishOffer) {
  
          return `/es/ofertas-especiales/${spanishOffer.slug}`;
  
        }
  
      }
  
  
      return "/es/ofertas-especiales";
  
    }
  
  
    // No Spanish version yet
  
    return "/es";
  
  }
  
  
  // ─────────────────────────────
  // SPANISH → ENGLISH
  // ─────────────────────────────
  
  function toEnglish(
    path: string
  ) {
  
  
    // Static pages
  
    if (spanishToEnglish[path]) {
      return spanishToEnglish[path];
    }
  
  
    // Tours
  
    if (
      path.startsWith(
        "/es/tours/"
      )
    ) {
  
      const slug =
        path.replace(
          "/es/tours/",
          ""
        );
  
  
      const spanishTour =
        toursEs.find(
          (tour) =>
            tour.slug === slug
        );
  
  
      if (spanishTour) {
  
        const englishTour =
          tours.find(
            (tour) =>
              tour.id === spanishTour.id
          );
  
  
        if (englishTour) {
  
          return `/tours/${englishTour.slug}`;
  
        }
  
      }
  
  
      return "/tours";
  
    }
  
  
    // Blog
  
    if (
      path.startsWith(
        "/es/blog/"
      )
    ) {
  
      const slug =
        path.replace(
          "/es/blog/",
          ""
        );
  
  
      const spanishPost =
        blogPostsEs.find(
          (post) =>
            post.slug === slug
        );
  
  
      if (spanishPost) {
  
        const englishPost =
          blogPosts.find(
            (post) =>
              post.id === spanishPost.id
          );
  
  
        if (englishPost) {
  
          return `/blog/${englishPost.slug}`;
  
        }
  
      }
  
  
      return "/blog";
  
    }
  
  
    // Excursiones
  
    if (
      path.startsWith(
        "/es/excursiones/"
      )
    ) {
  
      const slug =
        path.replace(
          "/es/excursiones/",
          ""
        );
  
  
      const spanishTrip =
        excursionesEs.find(
          (trip) =>
            trip.slug === slug
        );
  
  
      if (spanishTrip) {
  
        const englishTrip =
          dayTrips.find(
            (trip) =>
              trip.id === spanishTrip.id
          );
  
  
        if (englishTrip) {
  
          return `/day-trips/${englishTrip.slug}`;
  
        }
  
      }
  
  
      return "/day-trips";
  
    }
  
  
    // Tienda
  
    if (
      path.startsWith(
        "/es/tienda/"
      )
    ) {
  
      const slug =
        path.replace(
          "/es/tienda/",
          ""
        );
  
  
      const spanishProduct =
        shopProductsEs.find(
          (product) =>
            product.slug === slug
        );
  
  
      if (spanishProduct) {
  
        const englishProduct =
          shopProducts.find(
            (product) =>
              product.id === spanishProduct.id
          );
  
  
        if (englishProduct) {
  
          return `/shop/${englishProduct.slug}`;
  
        }
  
      }
  
  
      return "/shop";
  
    }
  
  
    // Special Offers
  
    if (
      path.startsWith(
        "/es/ofertas-especiales/"
      )
    ) {
  
      const slug =
        path.replace(
          "/es/ofertas-especiales/",
          ""
        );
  
  
      const spanishOffer =
        specialOffersEs.find(
          (offer) =>
            offer.slug === slug
        );
  
  
      if (spanishOffer) {
  
        const englishOffer =
          specialOffers.find(
            (offer) =>
              offer.id === spanishOffer.id
          );
  
  
        if (englishOffer) {
  
          return `/special-offers/${englishOffer.slug}`;
  
        }
  
      }
  
  
      return "/special-offers";
  
    }
  
  
    return "/";
  
  }
  
  
  // ─────────────────────────────
  // API ROUTE
  // ─────────────────────────────
  
  export function GET(
    request: NextRequest
  ) {
  
    const params =
      request.nextUrl.searchParams;
  
  
    const language =
      params.get("lang");
  
  
    const path =
      safePath(
        params.get("path")
      );
  
  
    const destination =
      language === "es"
        ? toSpanish(path)
        : toEnglish(path);
  
  
    return NextResponse.redirect(
      new URL(
        destination,
        request.nextUrl.origin
      )
    );
  
  }