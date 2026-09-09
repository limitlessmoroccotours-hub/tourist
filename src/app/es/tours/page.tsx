import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import { toursEs } from "@/data/tours-es";

// ─────────────────────────────────────────────
// SEO METADATA
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  title: {
    absolute:
      "Tours Privados por Marruecos | Desierto del Sahara y Circuitos",
  },

  description:
    "Descubre tours privados por Marruecos desde Marrakech, Casablanca, Fez, Tánger, Agadir y Errachidia. Viajes al Sahara y circuitos personalizados.",

  alternates: {
    canonical:
      "https://moroccan-trip.com/es/tours",

    languages: {
      en:
        "https://moroccan-trip.com/tours",

      es:
        "https://moroccan-trip.com/es/tours",

      "x-default":
        "https://moroccan-trip.com/tours",
    },
  },

  openGraph: {
    title:
      "Tours Privados por Marruecos | Desierto del Sahara y Circuitos",

    description:
      "Descubre tours privados por Marruecos, viajes al desierto del Sahara y circuitos personalizados desde las principales ciudades de Marruecos.",

    url:
      "https://moroccan-trip.com/es/tours",

    siteName:
      "Moroccan Trip",

    type:
      "website",

    locale:
      "es_ES",

    images: [
      {
        url:
          "https://moroccan-trip.com/images/home/og-home.webp",

        width: 1200,

        height: 630,

        alt:
          "Tours privados por Marruecos - Moroccan Trip",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "Tours Privados por Marruecos | Moroccan Trip",

    description:
      "Explora Marruecos con tours privados, viajes al Sahara y circuitos personalizados desde Marrakech, Casablanca, Fez, Tánger y otras ciudades.",

    images: [
      "https://moroccan-trip.com/images/home/og-home.webp",
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

// ─────────────────────────────────────────────
// DEPARTURE CONTENT
// ─────────────────────────────────────────────

const departureContent = [
  {
    city: "Marrakech",

    slug: "marrakech",

    departureNames: [
      "marrakech",
    ],

    label:
      "Tours desde Marrakech",

    title:
      "Tours privados desde Marrakech",

    description:
      "Comienza tu viaje en Marrakech y descubre el desierto del Sahara, antiguas kasbahs, valles de montaña y algunos de los paisajes más impresionantes de Marruecos.",
  },

  {
    city: "Casablanca",

    slug: "casablanca",

    departureNames: [
      "casablanca",
    ],

    label:
      "Tours desde Casablanca",

    title:
      "Tours privados desde Casablanca",

    description:
      "Descubre Marruecos desde Casablanca con viajes privados por ciudades imperiales, lugares culturales, el Sahara y otros destinos del país.",
  },

  {
    city: "Fez",

    slug: "fez",

    departureNames: [
      "fes",
      "fez",
    ],

    label:
      "Tours desde Fez",

    title:
      "Tours privados desde Fez",

    description:
      "Viaja desde Fez hacia Merzouga, el desierto del Sahara, Marrakech y otros destinos de Marruecos con itinerarios privados adaptados a tus planes de viaje.",
  },

  {
    city: "Tánger",

    slug: "tanger",

    departureNames: [
      "tangier",
      "tanger",
    ],

    label:
      "Tours desde Tánger",

    title:
      "Tours privados desde Tánger",

    description:
      "Comienza en el norte de Marruecos y viaja desde Tánger hacia Chefchaouen, Fez, el Sahara, Marrakech y otros destinos.",
  },

  {
    city: "Agadir",

    slug: "agadir",

    departureNames: [
      "agadir",
    ],

    label:
      "Tours desde Agadir",

    title:
      "Tours privados desde Agadir",

    description:
      "Descubre Marruecos desde Agadir con viajes privados al desierto y rutas por la costa atlántica, incluyendo algunos de los destinos más interesantes del sur del país.",
  },

  {
    city: "Errachidia",

    slug: "errachidia",

    departureNames: [
      "errachidia",
    ],

    label:
      "Tours desde Errachidia",

    title:
      "Tours privados desde Errachidia",

    description:
      "Comienza tu viaje cerca del Sahara y descubre el Valle del Ziz, Erfoud, Merzouga y los paisajes del sureste de Marruecos.",
  },
];

// ─────────────────────────────────────────────
// NORMALIZE CITY NAME
// ─────────────────────────────────────────────

function normalizeCity(value: string) {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(
      /[\u0300-\u036f]/g,
      ""
    );
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────

export default function SpanishToursPage() {
  const activeDepartureSections =
    departureContent
      .map((section) => ({
        ...section,

        tours: toursEs.filter(
          (tour) => {
            const departure =
              normalizeCity(
                tour.departure
              );

            return section.departureNames.some(
              (name) =>
                normalizeCity(name) ===
                departure
            );
          }
        ),
      }))
      .filter(
        (section) =>
          section.tours.length > 0
      );

  return (
    <main className="min-h-screen bg-[hsl(var(--background))]">

      {/* ───────────────────────────── */}
      {/* HERO */}
      {/* ───────────────────────────── */}

      <section className="border-b border-[hsl(var(--border))]">

        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">

          <div className="max-w-3xl">

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[hsl(var(--primary))]">
              Explora Marruecos
            </p>

            <h1 className="text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-[hsl(var(--heading))] sm:text-5xl lg:text-6xl">
              Tours privados por Marruecos
              desde diferentes ciudades
            </h1>

            <p className="mt-6 max-w-2xl text-[17px] leading-8 text-[hsl(var(--heading))] opacity-75 sm:text-lg">
              Elige dónde comienza tu viaje y
              descubre tours privados desde
              Marrakech, Casablanca, Fez,
              Tánger, Agadir y Errachidia.
              Cada itinerario puede adaptarse
              a tus fechas, intereses y estilo
              de viaje.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-[hsl(var(--heading))] opacity-65">

              <span>
                <strong className="font-bold text-[hsl(var(--heading))]">
                  {toursEs.length}
                </strong>{" "}

                {toursEs.length === 1
                  ? "tour disponible"
                  : "tours disponibles"}
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-[hsl(var(--heading))] opacity-30 sm:block" />

              <span>
                Privados y personalizables
              </span>

            </div>

          </div>
        </div>

      </section>

      {/* ───────────────────────────── */}
      {/* DEPARTURE NAVIGATION */}
      {/* ───────────────────────────── */}

      {activeDepartureSections.length >
        0 && (
        <section className="border-b border-[hsl(var(--border))] bg-[hsl(var(--card))]">

          <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8 lg:px-10">

            <div className="flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

              {activeDepartureSections.map(
                (section) => (
                  <a
                    key={
                      section.slug
                    }
                    href={`#${section.slug}`}
                    className="shrink-0 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-5 py-2.5 text-sm font-bold text-[hsl(var(--heading))] transition-all duration-200 hover:border-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--primary-foreground))]"
                  >

                    {section.city}

                    <span className="ml-2 text-xs font-semibold opacity-60">
                      {
                        section
                          .tours
                          .length
                      }
                    </span>

                  </a>
                )
              )}

            </div>

          </div>

        </section>
      )}

      {/* ───────────────────────────── */}
      {/* DEPARTURE SECTIONS */}
      {/* ───────────────────────────── */}

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">

        <div className="space-y-24 lg:space-y-28">

          {activeDepartureSections.map(
            (section) => (
              <section
                key={
                  section.slug
                }
                id={
                  section.slug
                }
                className="scroll-mt-28"
              >

                {/* ───────────────────────────── */}
                {/* SECTION HEADING */}
                {/* ───────────────────────────── */}

                <div className="mb-10 flex flex-col gap-5 border-b border-[hsl(var(--border))] pb-8 sm:flex-row sm:items-end sm:justify-between">

                  <div className="max-w-2xl">

                    <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-[hsl(var(--primary))]">
                      {
                        section.label
                      }
                    </p>

                    <h2 className="text-3xl font-semibold leading-tight tracking-[-0.025em] text-[hsl(var(--heading))] sm:text-4xl">
                      {
                        section.title
                      }
                    </h2>

                    <p className="mt-4 max-w-2xl text-base leading-7 text-[hsl(var(--heading))] opacity-72">
                      {
                        section.description
                      }
                    </p>

                  </div>

                  <div className="shrink-0">

                    <p className="text-sm font-medium text-[hsl(var(--heading))] opacity-65">

                      <span className="font-bold text-[hsl(var(--heading))] opacity-100">
                        {
                          section
                            .tours
                            .length
                        }
                      </span>{" "}

                      {section.tours.length ===
                      1
                        ? "tour disponible"
                        : "tours disponibles"}

                    </p>

                  </div>

                </div>

                {/* ───────────────────────────── */}
                {/* TOUR GRID */}
                {/* ───────────────────────────── */}

                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

                  {section.tours.map(
                    (tour) => (
                      <article
                        key={
                          tour.id
                        }
                        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] shadow-[0_8px_30px_rgba(16,24,48,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(16,24,48,0.10)]"
                      >

                        {/* ───────────────────────────── */}
                        {/* IMAGE */}
                        {/* ───────────────────────────── */}

                        <Link
                          href={`/es/tours/${tour.slug}`}
                          className="relative block shrink-0 overflow-hidden"
                        >

                          <div className="relative aspect-[4/3] overflow-hidden">

                            <Image
                              src={
                                tour.image
                              }
                              alt={
                                tour.title
                              }
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

                            {/* BADGE */}

                            {tour.badge && (
                              <div className="absolute left-4 top-4">

                                <span className="inline-flex rounded-full bg-[hsl(var(--primary))] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.07em] text-[hsl(var(--primary-foreground))] shadow-sm">
                                  {
                                    tour.badge
                                  }
                                </span>

                              </div>
                            )}

                          </div>

                        </Link>

                        {/* ───────────────────────────── */}
                        {/* CONTENT */}
                        {/* ───────────────────────────── */}

                        <div className="flex flex-1 flex-col p-6 sm:p-7">

                          {/* ROUTE */}

                          <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[hsl(var(--primary))]">

                            <span>
                              {
                                tour.departure
                              }
                            </span>

                            <svg
                              width="13"
                              height="13"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              aria-hidden="true"
                              className="shrink-0"
                            >
                              <path d="M5 12h14" />

                              <path d="m13 6 6 6-6 6" />
                            </svg>

                            <span>
                              {
                                tour.arrival
                              }
                            </span>

                          </div>

                          {/* TITLE */}

                          <h3 className="text-[1.35rem] font-semibold leading-[1.35] tracking-[-0.012em] text-[hsl(var(--heading))]">

                            <Link
                              href={`/es/tours/${tour.slug}`}
                              className="transition-colors duration-200 hover:text-[hsl(var(--primary))]"
                            >
                              {
                                tour.title
                              }
                            </Link>

                          </h3>

                          {/* DESCRIPTION */}

                          <p className="mt-3 line-clamp-3 text-[15px] leading-[1.7] text-[hsl(var(--heading))] opacity-75">
                            {
                              tour.shortDescription
                            }
                          </p>

                          {/* ───────────────────────────── */}
                          {/* TOUR DETAILS */}
                          {/* ───────────────────────────── */}

                          <div className="mt-6 grid grid-cols-2 gap-5 border-t border-[hsl(var(--border))] pt-5">

                            <div>

                              <p className="text-xs font-bold uppercase tracking-[0.08em] text-[hsl(var(--heading))] opacity-55">
                                Duración
                              </p>

                              <p className="mt-1.5 text-[15px] font-semibold leading-5 text-[hsl(var(--heading))]">
                                {
                                  tour.duration
                                }
                              </p>

                            </div>

                            <div>

                              <p className="text-xs font-bold uppercase tracking-[0.08em] text-[hsl(var(--heading))] opacity-55">
                                Tipo de tour
                              </p>

                              <p className="mt-1.5 text-[15px] font-semibold leading-5 text-[hsl(var(--heading))]">
                                {
                                  tour.tourType
                                }
                              </p>

                            </div>

                          </div>

                          {/* ───────────────────────────── */}
                          {/* FOOTER */}
                          {/* ───────────────────────────── */}

                          <div className="mt-auto flex items-center justify-between gap-4 pt-6">

                            <div className="text-sm font-medium text-[hsl(var(--heading))] opacity-65">

                              {
                                tour.nights
                              }{" "}

                              {tour.nights ===
                              1
                                ? "noche"
                                : "noches"}

                            </div>

                            <Link
                              href={`/es/tours/${tour.slug}`}
                              className="group/button inline-flex shrink-0 items-center gap-2 rounded-full bg-[hsl(var(--primary))] px-5 py-2.5 text-sm font-bold text-[hsl(var(--primary-foreground))] transition-all duration-200 hover:bg-[hsl(var(--primary-hover))]"
                            >

                              Ver tour

                              <svg
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                aria-hidden="true"
                                className="transition-transform duration-200 group-hover/button:translate-x-0.5"
                              >
                                <path d="M5 12h14" />

                                <path d="m13 6 6 6-6 6" />
                              </svg>

                            </Link>

                          </div>

                        </div>

                      </article>
                    )
                  )}

                </div>

              </section>
            )
          )}

        </div>

      </div>

    </main>
  );
}