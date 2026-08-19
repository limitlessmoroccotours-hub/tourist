// src/app/about-us/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// ─────────────────────────────
// CONFIG
// ─────────────────────────────

const SITE_URL = "https://moroccan-trip.com";

const LIMITLESS_URL =
  "https://limitlessmoroccotours.com";

const TRIPADVISOR_URL =
  "https://www.tripadvisor.fr/Attraction_Review-g293734-d33115204-Reviews-Limitless_morocco_tours-Marrakech_Marrakech_Safi.html";

// Reviews belong to Limitless Morocco Tours,
// the same experienced team behind Moroccan Trip.
// Confirm this number matches the live Tripadvisor page before publishing.
const TRIPADVISOR_REVIEW_COUNT = 43;

// ─────────────────────────────
// SEO METADATA
// ─────────────────────────────

export const metadata: Metadata = {
  title:
    "About Moroccan Trip | Local Morocco Tour Company",

  description:
    "Meet Moroccan Trip, a Marrakech-based local team creating private Morocco tours, Sahara journeys, day trips and customizable travel experiences.",

  alternates: {
    canonical: `${SITE_URL}/about-us`,
  },

  openGraph: {
    title:
      "About Moroccan Trip | Local Morocco Tour Company",

    description:
      "Meet the Marrakech-based team behind Moroccan Trip and discover our experience creating private journeys across Morocco.",

    url:
      `${SITE_URL}/about-us`,

    siteName:
      "Moroccan Trip",

    type:
      "website",

    images: [
      {
        url:
          `${SITE_URL}/images/about/moroccan-trip-team-guests-1.webp`,

        width:
          1200,

        height:
          630,

        alt:
          "Moroccan Trip local team with travelers during a private journey in Morocco",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "About Moroccan Trip | Local Morocco Tour Company",

    description:
      "Meet our Marrakech-based local team creating private journeys and travel experiences across Morocco.",

    images: [
      `${SITE_URL}/images/about/moroccan-trip-team-guests-1.webp`,
    ],
  },
};

// ─────────────────────────────
// REAL TRAVEL PHOTOS
// ─────────────────────────────

const aboutImages = [
  {
    src:
      "/images/about/moroccan-trip-team-guests-1.webp",

    alt:
      "Moroccan Trip driver with travelers during a private Morocco journey",
  },

  {
    src:
      "/images/about/moroccan-trip-team-guests-2.webp",

    alt:
      "Travelers with our local Morocco team during a previous private tour",
  },

  {
    src:
      "/images/about/moroccan-trip-team-guests-3.webp",

    alt:
      "Guests discovering Morocco with our driver and local travel team",
  },

  {
    src:
      "/images/about/moroccan-trip-team-guests-4.webp",

    alt:
      "Previous travelers with the Moroccan Trip team during their Morocco journey",
  },

  {
    src:
      "/images/about/moroccan-trip-team-guests-5.webp",

    alt:
      "Travelers enjoying a private Morocco tour with our local team",
  },
];

// ─────────────────────────────
// HELPERS
// ─────────────────────────────

function jsonLdString(data: unknown) {
  return JSON.stringify(data).replace(
    /</g,
    "\\u003c"
  );
}

// ─────────────────────────────
// PAGE
// ─────────────────────────────

export default function AboutUsPage() {
  // ─────────────────────────────
  // STRUCTURED DATA
  // ─────────────────────────────

  const organizationJsonLd = {
    "@context":
      "https://schema.org",

    "@type":
      "Organization",

    name:
      "Moroccan Trip",

    url:
      SITE_URL,

    description:
      "A Marrakech-based local travel team creating private Morocco tours, Sahara journeys, day trips and customizable travel experiences.",

    areaServed: {
      "@type":
        "Country",

      name:
        "Morocco",
    },

    address: {
      "@type":
        "PostalAddress",

      addressLocality:
        "Marrakech",

      addressCountry:
        "MA",
    },

    knowsLanguage: [
      "English",
      "French",
    ],
  };

  const aboutPageJsonLd = {
    "@context":
      "https://schema.org",

    "@type":
      "AboutPage",

    name:
      "About Moroccan Trip",

    url:
      `${SITE_URL}/about-us`,

    description:
      "Learn about Moroccan Trip, our Marrakech-based local team and our approach to private travel across Morocco.",

    mainEntity: {
      "@type":
        "Organization",

      name:
        "Moroccan Trip",

      url:
        SITE_URL,
    },
  };

  const breadcrumbJsonLd = {
    "@context":
      "https://schema.org",

    "@type":
      "BreadcrumbList",

    itemListElement: [
      {
        "@type":
          "ListItem",

        position:
          1,

        name:
          "Home",

        item:
          SITE_URL,
      },

      {
        "@type":
          "ListItem",

        position:
          2,

        name:
          "About Us",

        item:
          `${SITE_URL}/about-us`,
      },
    ],
  };

  return (
    <>
      {/* ─────────────────────────────
          STRUCTURED DATA
      ───────────────────────────── */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            jsonLdString(
              organizationJsonLd
            ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            jsonLdString(
              aboutPageJsonLd
            ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            jsonLdString(
              breadcrumbJsonLd
            ),
        }}
      />

      <main className="bg-white">

        {/* ─────────────────────────────
            HERO
        ───────────────────────────── */}

        <section className="relative overflow-hidden bg-[#f7f3ec]">
          <div
            aria-hidden="true"
            className="absolute -left-32 top-16 h-96 w-96 rounded-full bg-orange-200/30 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-amber-200/30 blur-3xl"
          />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">

            {/* HERO CONTENT */}

            <div>
              <span className="inline-flex items-center rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-orange-700 shadow-sm">
                Local Team • Marrakech, Morocco
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                About{" "}
                <span className="text-orange-600">
                  Moroccan Trip
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-xl font-semibold leading-8 text-slate-800">
                Local knowledge,
                experienced people and
                private journeys
                designed around you.
              </p>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                Moroccan Trip is a
                Marrakech-based
                Morocco tour company
                created by a local
                team with real
                experience welcoming
                travelers and
                organizing private
                journeys across the
                country.
              </p>

              <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
                From Marrakech and
                the Atlas Mountains
                to historic cities,
                southern valleys and
                the Sahara Desert,
                we help travelers
                discover Morocco at a
                comfortable and
                flexible pace.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/tours"
                  className="inline-flex items-center justify-center rounded-full bg-orange-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-orange-700"
                >
                  Explore Our Tours
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-900 transition hover:border-orange-300 hover:text-orange-600"
                >
                  Plan Your Trip
                </Link>
              </div>
            </div>

            {/* HERO REAL PHOTO */}

            <div className="relative pb-8">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-slate-200 shadow-xl">
                <Image
                  src={
                    aboutImages[0].src
                  }
                  alt={
                    aboutImages[0].alt
                  }
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* FLOATING TRUST CARD */}

              <div className="absolute bottom-0 left-5 right-5 rounded-2xl border border-white/70 bg-white/95 p-5 shadow-xl backdrop-blur sm:left-auto sm:right-6 sm:w-[330px]">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-600">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        d="m12 3 2.7 5.47 6.03.88-4.36 4.25 1.03 6-5.4-2.84L6.6 19.6l1.03-6L3.27 9.35l6.03-.88L12 3Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div>
                    <p className="font-bold text-slate-950">
                      {
                        TRIPADVISOR_REVIEW_COUNT
                      }
                      + Traveler Reviews
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Reviews earned by
                      our team through
                      Limitless Morocco
                      Tours on
                      Tripadvisor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────
            TRUST STRIP
        ───────────────────────────── */}

        <section className="border-b border-slate-100 bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-slate-200 md:grid-cols-4">

            <div className="bg-white px-5 py-8 text-center">
              <p className="text-3xl font-bold text-slate-950">
                {
                  TRIPADVISOR_REVIEW_COUNT
                }
                +
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Tripadvisor Reviews
              </p>
            </div>

            <div className="bg-white px-5 py-8 text-center">
              <p className="text-lg font-bold text-slate-950">
                Marrakech
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Local Team
              </p>
            </div>

            <div className="bg-white px-5 py-8 text-center">
              <p className="text-lg font-bold text-slate-950">
                Private
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Travel Experiences
              </p>
            </div>

            <div className="bg-white px-5 py-8 text-center">
              <p className="text-lg font-bold text-slate-950">
                Multilingual
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Travel Team
              </p>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────
            OUR STORY
        ───────────────────────────── */}

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
                Our Story
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                A New Website.
                <br />
                An Experienced
                Local Team.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
              <p>
                Moroccan Trip is a
                new website, but our
                experience with
                travelers in Morocco
                began before this
                website was created.
              </p>

              <p>
                Our local team in
                Marrakech has already
                welcomed travelers
                through{" "}
                <strong className="font-semibold text-slate-900">
                  Limitless Morocco
                  Tours
                </strong>
                , helping organize
                private journeys
                through Morocco&apos;s
                cities, mountain
                regions, traditional
                villages and desert
                landscapes.
              </p>

              <p>
                That experience
                taught us something
                important: travelers
                do not all need the
                same itinerary.
              </p>

              <p>
                Some guests want more
                time in the Sahara.
                Others care more about
                historic cities,
                mountain landscapes
                or a slower journey
                with fewer long
                driving days.
              </p>

              <p>
                Moroccan Trip was
                created to bring that
                experience into a
                clear, modern website
                where travelers can
                understand their
                options, explore
                different routes and
                contact the team
                directly.
              </p>

              <p className="font-semibold text-slate-950">
                The website is new.
                The people behind the
                journeys are not.
              </p>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────
            TRIPADVISOR TRUST
        ───────────────────────────── */}

        <section className="px-6 pb-20 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-orange-200 bg-orange-50/60">
            <div className="grid items-center gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:p-12">

              <div>
                <div
                  aria-label="5 stars"
                  className="flex gap-1 text-orange-500"
                >
                  {[1, 2, 3, 4, 5].map(
                    (star) => (
                      <svg
                        key={star}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5"
                      >
                        <path d="m12 2.8 2.79 5.65 6.24.91-4.52 4.4 1.07 6.21L12 17.04l-5.58 2.93 1.07-6.21-4.52-4.4 6.24-.91L12 2.8Z" />
                      </svg>
                    )
                  )}
                </div>

                <h2 className="mt-4 text-2xl font-bold text-slate-950 sm:text-3xl">
                  Experience You Can
                  Check for Yourself
                </h2>

                <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                  Before Moroccan Trip
                  was launched, guests
                  were already sharing
                  feedback about
                  journeys organized
                  by our team through
                  Limitless Morocco
                  Tours.
                </p>

                <p className="mt-3 max-w-3xl text-base leading-8 text-slate-600">
                  Our Tripadvisor
                  profile includes{" "}
                  <strong className="font-semibold text-slate-950">
                    {
                      TRIPADVISOR_REVIEW_COUNT
                    }
                    + traveler reviews
                  </strong>
                  . They reflect real
                  experiences with the
                  team behind Moroccan
                  Trip — from private
                  desert journeys to
                  longer trips across
                  Morocco.
                </p>

                <p className="mt-3 max-w-2xl text-xs leading-6 text-slate-500">
                  These reviews are
                  published under
                  Limitless Morocco
                  Tours, the previous
                  travel brand operated
                  by the same team
                  behind Moroccan
                  Trip.
                </p>
              </div>

              <a
                href={
                  TRIPADVISOR_URL
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-orange-600"
              >
                Read Tripadvisor
                Reviews

                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    d="M7 13 13 7m0 0H8.5M13 7v4.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────
            REAL JOURNEYS
        ───────────────────────────── */}

        <section className="bg-slate-950 py-20 text-white lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.7fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-400">
                  Our Travelers
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Real Journeys.
                  <br />
                  Real People.
                  <br />
                  Real Morocco.
                </h2>
              </div>

              <p className="max-w-xl text-base leading-8 text-slate-300">
                These photos come
                from previous journeys
                with travelers our team
                has welcomed in
                Morocco. They show the
                people and experiences
                behind the work we do.
              </p>
            </div>

            {/* PHOTO GALLERY */}

            <div className="mt-12 grid gap-5 md:grid-cols-12">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-800 md:col-span-7">
                <Image
                  src={
                    aboutImages[1].src
                  }
                  alt={
                    aboutImages[1].alt
                  }
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-800 md:col-span-5">
                <Image
                  src={
                    aboutImages[2].src
                  }
                  alt={
                    aboutImages[2].alt
                  }
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-800 md:col-span-5">
                <Image
                  src={
                    aboutImages[3].src
                  }
                  alt={
                    aboutImages[3].alt
                  }
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-800 md:col-span-7">
                <Image
                  src={
                    aboutImages[4].src
                  }
                  alt={
                    aboutImages[4].alt
                  }
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────
            LOCAL TEAM
        ───────────────────────────── */}

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
                Local Knowledge
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                A Local Morocco
                Travel Team Based in
                Marrakech
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-slate-600">
              <p>
                Marrakech is more than
                a departure point for
                us. It is where our
                team is based and
                where many of our
                journeys begin.
              </p>

              <p>
                From here, routes can
                cross the High Atlas
                Mountains toward Ait
                Ben Haddou,
                Ouarzazate, the Dades
                Valley, Todra Gorges,
                Merzouga and the
                Sahara.
              </p>

              <p>
                Longer journeys can
                connect Marrakech with
                Fes, Casablanca,
                Chefchaouen, Tangier,
                Essaouira and other
                regions of Morocco.
              </p>

              <p>
                Knowing how these
                places connect is
                important. A route
                should not simply look
                good on a map. It
                should also make sense
                when you are actually
                traveling it.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {/* LOCAL KNOWLEDGE */}

            <div className="rounded-3xl border border-slate-200 p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="h-6 w-6"
                >
                  <path
                    d="M12 21s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />

                  <circle
                    cx="12"
                    cy="10"
                    r="2.4"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                </svg>
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-950">
                Local Knowledge
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                We know the routes,
                landscapes and travel
                distances that connect
                Morocco&apos;s major
                destinations.
              </p>
            </div>

            {/* MULTILINGUAL */}

            <div className="rounded-3xl border border-slate-200 p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="h-6 w-6"
                >
                  <path
                    d="M4 6h10M9 4v2c0 4-2 7-5 9m4-5c1 2 3 4 5 5M15 20l3-8 3 8m-5-3h4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-950">
                Multilingual Team
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                We work with
                international
                travelers and
                communicate in
                multiple languages to
                make planning and
                travel easier.
              </p>
            </div>

            {/* EXPERIENCE */}

            <div className="rounded-3xl border border-slate-200 p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="h-6 w-6"
                >
                  <path
                    d="M5 12.5 9.3 17 19 7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-950">
                Practical Experience
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Our experience comes
                from organizing real
                journeys and traveling
                these routes with
                guests, not simply
                displaying itineraries
                online.
              </p>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────
            OUR APPROACH
        ───────────────────────────── */}

        <section className="border-y border-slate-100 bg-[#f7f4ee]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">

            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
                How We Travel
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Private Travel
                Without a Fixed
                Formula
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                We believe a good
                private journey should
                fit the traveler —
                not force every
                traveler into exactly
                the same schedule.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number:
                    "01",

                  title:
                    "Private Travel",

                  text:
                    "Travel with your own group and enjoy more freedom with the pace of the journey.",
                },

                {
                  number:
                    "02",

                  title:
                    "Flexible Routes",

                  text:
                    "Routes can be adapted around your available time, destinations and interests.",
                },

                {
                  number:
                    "03",

                  title:
                    "Realistic Pacing",

                  text:
                    "We prefer journeys that give you time to experience Morocco instead of rushing between destinations.",
                },

                {
                  number:
                    "04",

                  title:
                    "Clear Planning",

                  text:
                    "We explain the route and travel arrangements so you know what to expect before the journey begins.",
                },
              ].map(
                (item) => (
                  <div
                    key={
                      item.number
                    }
                    className="rounded-3xl border border-black/5 bg-white p-7 shadow-sm"
                  >
                    <span className="text-sm font-bold text-orange-600">
                      {
                        item.number
                      }
                    </span>

                    <h3 className="mt-5 text-xl font-bold text-slate-950">
                      {
                        item.title
                      }
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {
                        item.text
                      }
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────
            WHY CHOOSE US
        ───────────────────────────── */}

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
                Why Moroccan Trip?
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Choosing a Private
                Tour Company in
                Morocco
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600">
                Choosing a private
                tour company in
                Morocco means
                trusting people with
                an important part of
                your holiday.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600">
                We believe that trust
                should come from
                clear information,
                real experience and
                previous travelers —
                not from simply
                claiming to be the
                best.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600">
                That is why we show
                who we are, where we
                are based and the
                previous work behind
                our new Moroccan Trip
                website.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Marrakech-based local team",
                "Private transportation",
                "Flexible travel routes",
                "Multilingual communication",
                "Experience with Sahara journeys",
                "Customizable trips",
                "Day trips and multi-day travel",
                "Previous traveler reviews",
              ].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 px-5 py-4"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-600">
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                        className="h-4 w-4"
                      >
                        <path
                          d="m5.5 10 3 3 6-6"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>

                    <span className="text-sm font-semibold text-slate-800">
                      {item}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────
            WHAT WE OFFER
        ───────────────────────────── */}

        <section className="border-y border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">

            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
                Explore Morocco
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Choose the Experience
                That Fits Your Trip
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Start with one of our
                private tours, explore
                Marrakech surroundings
                on a day trip, or
                contact us about a
                customized journey.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">

              <Link
                href="/tours"
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-bold text-orange-600">
                  01
                </span>

                <h3 className="mt-5 text-2xl font-bold text-slate-950 transition group-hover:text-orange-600">
                  Private Morocco
                  Tours
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Multi-day journeys
                  through Morocco&apos;s
                  cities, Atlas
                  Mountains, valleys
                  and desert regions.
                </p>

                <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-slate-950">
                  Explore Tours
                  <span aria-hidden="true">
                    →
                  </span>
                </span>
              </Link>

              <Link
                href="/day-trips"
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-bold text-orange-600">
                  02
                </span>

                <h3 className="mt-5 text-2xl font-bold text-slate-950 transition group-hover:text-orange-600">
                  Marrakech Day Trips
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Discover Ourika,
                  Imlil, Ouzoud and
                  Agafay while keeping
                  Marrakech as your
                  base.
                </p>

                <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-slate-950">
                  Explore Day Trips
                  <span aria-hidden="true">
                    →
                  </span>
                </span>
              </Link>

              <Link
                href="/special-offers"
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-bold text-orange-600">
                  03
                </span>

                <h3 className="mt-5 text-2xl font-bold text-slate-950 transition group-hover:text-orange-600">
                  Special Experiences
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Explore flexible
                  options for desert
                  travel, couples,
                  families and
                  personalized
                  journeys.
                </p>

                <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-slate-950">
                  View Special Offers
                  <span aria-hidden="true">
                    →
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────
            HOW IT WORKS
        ───────────────────────────── */}

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
              Simple Planning
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              From Your First Message
              to Your Morocco Journey
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number:
                  "01",

                title:
                  "Tell Us Your Plans",

                text:
                  "Share your dates, number of travelers and the places or experiences that interest you.",
              },

              {
                number:
                  "02",

                title:
                  "Build the Route",

                text:
                  "We look at your available time and help organize a practical route through Morocco.",
              },

              {
                number:
                  "03",

                title:
                  "Customize",

                text:
                  "Adjust destinations, pace and travel arrangements according to your preferences.",
              },

              {
                number:
                  "04",

                title:
                  "Travel Morocco",

                text:
                  "Meet your local team and begin your private journey through Morocco.",
              },
            ].map(
              (step) => (
                <div
                  key={
                    step.number
                  }
                  className="border-t-2 border-orange-500 pt-6"
                >
                  <span className="text-sm font-bold text-orange-600">
                    {
                      step.number
                    }
                  </span>

                  <h3 className="mt-4 text-xl font-bold text-slate-950">
                    {
                      step.title
                    }
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {
                      step.text
                    }
                  </p>
                </div>
              )
            )}
          </div>
        </section>

        {/* ─────────────────────────────
            LIMITLESS CONNECTION
        ───────────────────────────── */}

        <section className="bg-[#f7f4ee]">
          <div className="mx-auto max-w-5xl px-6 py-16 text-center lg:px-8">

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
              Our Previous Work
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              The Experience Behind
              Moroccan Trip
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600">
              Before launching
              Moroccan Trip, our team
              was already organizing
              private travel through
              Limitless Morocco Tours.
              You can visit the
              previous website or read
              the Tripadvisor feedback
              left by travelers who
              experienced Morocco
              with our team.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">

              <a
                href={
                  LIMITLESS_URL
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-900 transition hover:border-orange-300 hover:text-orange-600"
              >
                Visit Limitless
                Morocco Tours
              </a>

              <a
                href={
                  TRIPADVISOR_URL
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-orange-600"
              >
                Read Tripadvisor
                Reviews
              </a>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────
            FINAL CTA
        ───────────────────────────── */}

        <section className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-12 sm:px-10 sm:py-14 lg:px-14">

            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">

              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-400">
                  Start Your Journey
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Ready to Discover
                  Morocco With a
                  Local Team?
                </h2>

                <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
                  Tell us your travel
                  dates, where you want
                  to go and the type of
                  journey you have in
                  mind. We can help
                  turn those ideas into
                  a practical private
                  Morocco experience.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">

                <Link
                  href="/tours"
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-orange-600"
                >
                  Explore Tours
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Plan Your Trip
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}