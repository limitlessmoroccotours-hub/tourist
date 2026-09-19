"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import LanguageSwitcher from "@/components/Layout/LanguageSwitcher";


const tripadvisorUrl =
  "https://www.tripadvisor.fr/Attraction_Review-g293734-d33115204-Reviews-Limitless_morocco_tours-Marrakech_Marrakech_Safi.html";


// ─────────────────────────────
// TYPES
// ─────────────────────────────

type NavItem = {
  label: string;
  href: string;
  dropdown?: [string, string][];
};


// ─────────────────────────────
// ENGLISH NAVIGATION
// ─────────────────────────────

const navItemsEn: NavItem[] = [
  {
    label: "Tours",
    href: "/tours",
    dropdown: [
      ["Tours From Marrakech", "/tours/from-marrakech"],
      ["Tours From Fes", "/tours/from-fes"],
      ["Tours From Casablanca", "/tours/from-casablanca"],
      ["Tours From Tangier", "/tours/from-tangier"],
      ["Tours From Agadir", "/tours/from-agadir"],
      ["Tours From Errachidia", "/tours/from-errachidia"],
    ],
  },

  {
    label: "Day Trips",
    href: "/day-trips",
  },

  {
    label: "Custom Tours",
    href: "/custom-tour",
  },

  {
    label: "Special Offers",
    href: "/special-offers",
  },

  {
    label: "Shop",
    href: "/shop",
  },

  {
    label: "About Us",
    href: "/about-us",
  },

  {
    label: "Blog",
    href: "/blog",
  },

  {
    label: "Contact",
    href: "/contact",
  },
];


// ─────────────────────────────
// SPANISH NAVIGATION
// ─────────────────────────────

const navItemsEs: NavItem[] = [
  {
    label: "Tours",
    href: "/es/tours",
    dropdown: [
      ["Tours desde Marrakech", "/es/tours/desde-marrakech"],
      ["Tours desde Fez", "/es/tours/desde-fez"],
      ["Tours desde Casablanca", "/es/tours/desde-casablanca"],
      ["Tours desde Tánger", "/es/tours/desde-tanger"],
      ["Tours desde Agadir", "/es/tours/desde-agadir"],
      ["Tours desde Errachidia", "/es/tours/desde-errachidia"],
    ],
  },

  {
    label: "Excursiones",
    href: "/es/excursiones",
  },

  {
    label: "Viajes organizados",
    href: "/es/viajes-organizados-a-marruecos",
  },

  {
    label: "Ofertas especiales",
    href: "/es/ofertas-especiales",
  },

  {
    label: "Tienda",
    href: "/es/tienda",
  },

  {
    label: "Nosotros",
    href: "/es/nosotros",
  },

  {
    label: "Blog",
    href: "/es/blog",
  },

  {
    label: "Contacto",
    href: "/es/contacto",
  },
];


// ─────────────────────────────
// CHEVRON ICON
// ─────────────────────────────

function Chevron() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}


// ─────────────────────────────
// HEADER
// ─────────────────────────────

export default function Header() {

  const pathname = usePathname();


  const isSpanish =
    pathname === "/es" ||
    pathname.startsWith("/es/");


  const navItems =
    isSpanish
      ? navItemsEs
      : navItemsEn;


  const homeHref =
    isSpanish
      ? "/es"
      : "/";


  const contactHref =
    isSpanish
      ? "/es/contacto"
      : "/contact";


  const [mobileOpen, setMobileOpen] =
    useState(false);


  const [dropdown, setDropdown] =
    useState<string | null>(null);


  // Close menus after route navigation
  useEffect(() => {

    setMobileOpen(false);
    setDropdown(null);

  }, [pathname]);


  const active = (href: string) => {

    return (
      pathname === href ||
      pathname.startsWith(href + "/")
    );

  };


  return (

    <header
      className="
      sticky
      top-0
      z-50
      w-full
      "
    >


      {/* ================= TOP BAR ================= */}

      <div
        className="
        hidden
        border-b
        border-[hsl(var(--border))]
        bg-[hsl(var(--background))]
        lg:block
        "
      >

        <div
          className="
          flex
          h-10
          items-center
          justify-center
          "
        >

          <div
            className="
            flex
            items-center
            gap-4
            text-xs
            font-semibold
            "
          >


            {/* Tripadvisor */}

            <a
              href={tripadvisorUrl}
              target="_blank"
              rel="noopener noreferrer"

              className="
              flex
              items-center
              gap-2
              text-[hsl(var(--heading))]
              transition-opacity
              hover:opacity-70
              "
            >

              <Image
                src="/images/home/TripAdvisor_Logo.svg"
                alt="Tripadvisor"
                width={70}
                height={22}
              />


              <span>
                {isSpanish
                  ? "Opiniones del equipo"
                  : "Team Reviews"}
              </span>

            </a>


            {/* Divider */}

            <span
              className="
              h-4
              w-px
              bg-[hsl(var(--border))]
              "
            />


            {/* Email */}

            <a
              href="mailto:contact@moroccan-trip.com"

              className="
              text-[hsl(var(--text-secondary))]
              transition
              hover:text-[hsl(var(--primary))]
              "
            >
              ✉ contact@moroccan-trip.com
            </a>


            {/* Divider */}

            <span
              className="
              h-4
              w-px
              bg-[hsl(var(--border))]
              "
            />


            {/* WhatsApp */}

            <a
              href="https://wa.me/212607747056"
              target="_blank"
              rel="noopener noreferrer"

              className="
              text-[hsl(var(--text-secondary))]
              transition
              hover:text-[hsl(var(--primary))]
              "
            >
              WhatsApp +212607747056
            </a>


          </div>

        </div>

      </div>


      {/* ================= MAIN HEADER ================= */}

      <div
        className="
        border-b
        border-[hsl(var(--border))]
        bg-[hsl(var(--background)/0.96)]
        backdrop-blur-xl
        "
      >

        <div
          className="
          mx-auto
          flex
          h-[82px]
          max-w-[1280px]
          items-center
          justify-between
          gap-4
          px-5
          lg:px-6
          "
        >


          {/* LOGO */}

          <Link
            href={homeHref}
            className="flex shrink-0 items-center"
          >

            <Image
              src="/images/home/Moroccan-Trip-Logo.svg"
              alt="Moroccan Trip"
              width={90}
              height={40}
              priority

              className="
              h-auto
              w-[100px]
              lg:w-[130px]
              "
            />

          </Link>


          {/* ================= DESKTOP NAV ================= */}

          <nav
            className="
            hidden
            flex-1
            items-center
            justify-center
            gap-0
            lg:flex
            "
          >

            {navItems.map((item) => (

              <div
                key={item.label}

                className="relative"

                onMouseEnter={() => {

                  if (item.dropdown) {
                    setDropdown(item.label);
                  }

                }}

                onMouseLeave={() => {

                  if (item.dropdown) {
                    setDropdown(null);
                  }

                }}
              >


                {item.dropdown ? (

                  <Link
                    href={item.href}

                    className={`
                    flex
                    items-center
                    gap-1.5
                    px-2.5
                    py-6
                    text-[13px]
                    font-semibold
                    transition

                    ${
                      active(item.href)
                        ? "text-[hsl(var(--primary))]"
                        : "text-[hsl(var(--heading))]"
                    }

                    hover:text-[hsl(var(--primary))]
                    `}
                  >

                    {item.label}

                    <Chevron />

                  </Link>

                ) : (

                  <Link
                    href={item.href}

                    className={`
                    block
                    whitespace-nowrap
                    px-2.5
                    py-6
                    text-[13px]
                    font-semibold
                    transition

                    ${
                      active(item.href)
                        ? "text-[hsl(var(--primary))]"
                        : "text-[hsl(var(--heading))]"
                    }

                    hover:text-[hsl(var(--primary))]
                    `}
                  >

                    {item.label}

                  </Link>

                )}


                {/* ================= TOURS DROPDOWN ================= */}

                {dropdown === item.label &&
                  item.dropdown && (

                    <div
                      className="
                      absolute
                      left-1/2
                      top-full
                      w-[620px]
                      -translate-x-1/2
                      pt-2
                      "
                    >

                      <div
                        className="
                        grid
                        grid-cols-2
                        gap-2
                        rounded-2xl
                        border
                        border-[hsl(var(--border))]
                        bg-[hsl(var(--card))]
                        p-4
                        shadow-[0_20px_60px_rgba(15,23,42,0.14)]
                        "
                      >

                        {item.dropdown.map(
                          ([label, href]) => (

                            <Link
                              key={href}
                              href={href}

                              className="
                              rounded-xl
                              px-4
                              py-3
                              text-sm
                              font-medium
                              text-[hsl(var(--text-main))]
                              transition

                              hover:bg-[hsl(var(--muted))]
                              hover:text-[hsl(var(--primary))]
                              "
                            >
                              {label}
                            </Link>

                          )
                        )}

                      </div>

                    </div>

                  )}


              </div>

            ))}

          </nav>


          {/* ================= LANGUAGE SWITCHER ================= */}

          <div
            className="
            hidden
            shrink-0
            lg:block
            "
          >

            <LanguageSwitcher />

          </div>


          {/* ================= MOBILE HEADER ================= */}

          <div
            className="
            flex
            items-center
            gap-3
            lg:hidden
            "
          >


            {/* Tripadvisor Mobile */}

            <a
              href={tripadvisorUrl}
              target="_blank"
              rel="noopener noreferrer"

              aria-label="Tripadvisor"
            >

              <Image
                src="/images/home/TripAdvisor_Logo.svg"
                alt="Tripadvisor"
                width={75}
                height={24}
              />

            </a>


            {/* Menu button */}

            <button
              type="button"

              aria-label={
                isSpanish
                  ? "Abrir menú"
                  : "Open menu"
              }

              aria-expanded={mobileOpen}

              onClick={() =>
                setMobileOpen(
                  (current) => !current
                )
              }

              className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-[hsl(var(--border))]
              text-lg
              text-[hsl(var(--heading))]
              transition

              hover:border-[hsl(var(--primary)/0.40)]
              hover:text-[hsl(var(--primary))]
              "
            >

              {mobileOpen ? "×" : "☰"}

            </button>


          </div>


        </div>

      </div>


      {/* ================= MOBILE MENU ================= */}

      {mobileOpen && (

        <div
          className="
          max-h-[calc(100vh-82px)]
          overflow-y-auto
          border-b
          border-[hsl(var(--border))]
          bg-[hsl(var(--background))]
          px-5
          py-5
          shadow-xl
          lg:hidden
          "
        >


          {/* Language Switcher Mobile */}

          <div
            className="
            mb-5
            border-b
            border-[hsl(var(--border))]
            pb-5
            "
          >

            <p
              className="
              mb-2
              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-[hsl(var(--text-secondary))]
              "
            >

              {isSpanish
                ? "Idioma"
                : "Language"}

            </p>


            <LanguageSwitcher mobile />

          </div>


          {/* Mobile Navigation */}

          {navItems.map((item) => (

            <div
              key={item.label}

              className="
              border-b
              border-[hsl(var(--border))]
              py-3
              "
            >

              <Link
                href={item.href}

                onClick={() =>
                  setMobileOpen(false)
                }

                className={`
                block
                font-semibold
                transition

                ${
                  active(item.href)
                    ? "text-[hsl(var(--primary))]"
                    : "text-[hsl(var(--heading))]"
                }
                `}
              >

                {item.label}

              </Link>


              {/* Mobile Tours Submenu */}

              {item.dropdown && (

                <div
                  className="
                  mt-3
                  space-y-1
                  border-l
                  border-[hsl(var(--border))]
                  pl-4
                  "
                >

                  {item.dropdown.map(
                    ([label, href]) => (

                      <Link
                        key={href}
                        href={href}

                        onClick={() =>
                          setMobileOpen(false)
                        }

                        className="
                        block
                        rounded-lg
                        py-1.5
                        text-sm
                        text-[hsl(var(--text-secondary))]
                        transition

                        hover:text-[hsl(var(--primary))]
                        "
                      >
                        {label}
                      </Link>

                    )
                  )}

                </div>

              )}

            </div>

          ))}


          {/* Mobile CTA */}

          <Link
            href={contactHref}

            onClick={() =>
              setMobileOpen(false)
            }

            className="
            mt-6
            flex
            items-center
            justify-center
            rounded-full
            bg-[hsl(var(--primary))]
            px-6
            py-3.5
            text-sm
            font-bold
            text-white
            transition

            hover:bg-[hsl(var(--primary-hover))]
            "
          >

            {isSpanish
              ? "Planifica tu viaje"
              : "Plan Your Trip"}

            <span
              className="
              ml-2
              transition-transform
              "
            >
              →
            </span>

          </Link>


        </div>

      )}


    </header>

  );

}