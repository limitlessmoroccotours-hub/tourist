"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


const tripadvisorUrl =
  "https://www.tripadvisor.fr/Attraction_Review-g293734-d33115204-Reviews-Limitless_morocco_tours-Marrakech_Marrakech_Safi.html";


// ─────────────────────────────
// ENGLISH LINKS
// ─────────────────────────────

const footerLinksEn = {

  explore: [
    {
      name: "Morocco Tours",
      href: "/tours",
    },

    {
      name: "Day Trips",
      href: "/day-trips",
    },

    {
      name: "Custom Tours",
      href: "/custom-tour",
    },

    {
      name: "Special Offers",
      href: "/special-offers",
    },

    {
      name: "Shop",
      href: "/shop",
    },
  ],


  company: [
    {
      name: "About Us",
      href: "/about-us",
    },

    {
      name: "Travel Blog",
      href: "/blog",
    },

    {
      name: "Contact",
      href: "/contact",
    },
  ],


  departures: [
    {
      name: "Marrakech",
      href: "/tours/from-marrakech",
    },

    {
      name: "Casablanca",
      href: "/tours/from-casablanca",
    },

    {
      name: "Fes",
      href: "/tours/from-fes",
    },

    {
      name: "Tangier",
      href: "/tours/from-tangier",
    },

    {
      name: "Agadir",
      href: "/tours/from-agadir",
    },

    {
      name: "Errachidia",
      href: "/tours/from-errachidia",
    },
  ],

};


// ─────────────────────────────
// SPANISH LINKS
// ─────────────────────────────

const footerLinksEs = {

  explore: [
    {
      name: "Tours por Marruecos",
      href: "/es/tours",
    },

    {
      name: "Excursiones",
      href: "/es/excursiones",
    },

    // Cambiaremos este href cuando confirmemos
    // el slug completo de /es/viajes-organizados...
    {
      name: "Viajes organizados",
      href: "/es/viajes-organizados-a-marruecos",
    },

    {
      name: "Ofertas especiales",
      href: "/es/ofertas-especiales",
    },

    {
      name: "Tienda",
      href: "/es/tienda",
    },
  ],


  company: [
    {
      name: "Nosotros",
      href: "/es/nosotros",
    },

    {
      name: "Blog de viajes",
      href: "/es/blog",
    },

    {
      name: "Contacto",
      href: "/es/contacto",
    },
  ],


  departures: [
    {
      name: "Marrakech",
      href: "/es/tours/desde-marrakech",
    },

    {
      name: "Casablanca",
      href: "/es/tours/desde-casablanca",
    },

    {
      name: "Fez",
      href: "/es/tours/desde-fez",
    },

    {
      name: "Tánger",
      href: "/es/tours/desde-tanger",
    },

    {
      name: "Agadir",
      href: "/es/tours/desde-agadir",
    },

    {
      name: "Errachidia",
      href: "/es/tours/desde-errachidia",
    },
  ],

};


export default function Footer() {

  const pathname =
    usePathname();


  const isSpanish =
    pathname === "/es" ||
    pathname.startsWith("/es/");


  const footerLinks =
    isSpanish
      ? footerLinksEs
      : footerLinksEn;


  const homeHref =
    isSpanish
      ? "/es"
      : "/";


  const contactHref =
    isSpanish
      ? "/es/contacto"
      : "/contact";


  return (

    <footer
      className="
      bg-[hsl(var(--footer))]
      text-white
      "
    >

      <div
        className="
        mx-auto
        max-w-7xl

        px-5
        py-16

        sm:px-8

        lg:px-10
        lg:py-20
        "
      >


        {/* Main Footer */}

        <div
          className="
          grid
          gap-12

          lg:grid-cols-5
          "
        >


          {/* Brand */}

          <div
            className="
            lg:col-span-2
            "
          >

            <Link
              href={homeHref}

              className="
              font-[family-name:var(--font-cormorant)]
              text-4xl
              font-semibold
              "
            >

              Moroccan

              <span
                className="
                text-[hsl(var(--primary))]
                "
              >
                Trip
              </span>

            </Link>


            <p
              className="
              mt-6
              max-w-sm
              text-sm
              leading-7
              text-white/65
              "
            >

              {isSpanish

                ? "Descubre Marruecos con tours privados, aventuras en el Sahara y experiencias auténticas creadas por un equipo local."

                : "Discover Morocco through private tours, Sahara adventures and authentic travel experiences created by local experts."}

            </p>


            {/* Tripadvisor Trust */}

            <div
              className="
              mt-6
              flex
              items-center
              gap-3
              "
            >

              <div
                className="
                rounded-full
                border
                border-white/20
                px-4
                py-2
                "
              >

                <span
                  className="
                  text-xs
                  font-semibold
                  text-white/80
                  "
                >
                  ★★★★★
                </span>

              </div>


              <a
                href={tripadvisorUrl}
                target="_blank"
                rel="noopener noreferrer"

                className="
                text-xs
                text-white/60
                transition
                hover:text-white
                "
              >

                {isSpanish
                  ? "Opiniones del equipo en Tripadvisor · Limitless Morocco Tours"
                  : "Team reviews on Tripadvisor · Limitless Morocco Tours"}

              </a>

            </div>

          </div>


          {/* Explore */}

          <div>

            <h3
              className="
              mb-5
              text-xs
              font-bold
              uppercase
              tracking-[0.25em]
              text-[hsl(var(--gold-muted))]
              "
            >
              {isSpanish
                ? "Explorar"
                : "Explore"}
            </h3>


            <ul className="space-y-3">

              {footerLinks.explore.map(
                (item) => (

                  <li key={item.name}>

                    <Link
                      href={item.href}

                      className="
                      text-sm
                      text-white/70
                      transition
                      hover:text-white
                      "
                    >
                      {item.name}
                    </Link>

                  </li>

                )
              )}

            </ul>

          </div>


          {/* Company */}

          <div>

            <h3
              className="
              mb-5
              text-xs
              font-bold
              uppercase
              tracking-[0.25em]
              text-[hsl(var(--gold-muted))]
              "
            >
              {isSpanish
                ? "Empresa"
                : "Company"}
            </h3>


            <ul className="space-y-3">

              {footerLinks.company.map(
                (item) => (

                  <li key={item.name}>

                    <Link
                      href={item.href}

                      className="
                      text-sm
                      text-white/70
                      transition
                      hover:text-white
                      "
                    >
                      {item.name}
                    </Link>

                  </li>

                )
              )}

            </ul>

          </div>


          {/* Departures */}

          <div>

            <h3
              className="
              mb-5
              text-xs
              font-bold
              uppercase
              tracking-[0.25em]
              text-[hsl(var(--gold-muted))]
              "
            >
              {isSpanish
                ? "Tours desde"
                : "Start From"}
            </h3>


            <ul className="space-y-3">

              {footerLinks.departures.map(
                (item) => (

                  <li key={item.name}>

                    <Link
                      href={item.href}

                      className="
                      text-sm
                      text-white/70
                      transition
                      hover:text-white
                      "
                    >
                      {item.name}
                    </Link>

                  </li>

                )
              )}

            </ul>

          </div>


        </div>


        {/* CTA */}

        <div
          className="
          mt-16
          flex
          flex-col
          gap-6
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-8

          sm:flex-row
          sm:items-center
          sm:justify-between
          "
        >

          <div>

            <h3
              className="
              font-[family-name:var(--font-cormorant)]
              text-3xl
              font-semibold
              "
            >
              {isSpanish
                ? "¿Listo para descubrir Marruecos?"
                : "Ready to explore Morocco?"}
            </h3>


            <p
              className="
              mt-2
              text-sm
              text-white/60
              "
            >
              {isSpanish

                ? "Crea un viaje personalizado por Marruecos con nuestro equipo local."

                : "Create your personalized Morocco journey with our local team."}
            </p>

          </div>


          <Link
            href={contactHref}

            className="
            inline-flex
            rounded-full
            bg-[hsl(var(--primary))]
            px-7
            py-3
            text-sm
            font-semibold
            transition

            hover:bg-[hsl(var(--primary-hover))]
            "
          >
            {isSpanish
              ? "Planifica tu viaje →"
              : "Plan Your Trip →"}
          </Link>

        </div>


        {/* Bottom */}

        <div
          className="
          mt-10
          flex
          flex-col
          gap-4
          border-t
          border-white/10
          pt-6
          text-xs
          text-white/50

          sm:flex-row
          sm:items-center
          sm:justify-between
          "
        >

          <p>
            © {new Date().getFullYear()} Moroccan Trip.{" "}
            {isSpanish
              ? "Todos los derechos reservados."
              : "All rights reserved."}
          </p>


          <div
            className="
            flex
            gap-5
            "
          >

            <Link href="/privacy-policy">
              {isSpanish
                ? "Política de privacidad"
                : "Privacy Policy"}
            </Link>

            <Link href="/terms">
              {isSpanish
                ? "Términos"
                : "Terms"}
            </Link>

          </div>

        </div>


      </div>

    </footer>

  );

}