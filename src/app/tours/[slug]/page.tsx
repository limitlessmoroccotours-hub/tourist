import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tours } from "@/data/tours";
import TourMap from "@/components/tours/TourMap";

type TourPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// ─────────────────────────────────────────────
// STATIC TOUR PAGES
// ─────────────────────────────────────────────

export function generateStaticParams() {
  return tours.map((tour) => ({
    slug: tour.slug,
  }));
}

// ─────────────────────────────────────────────
// SEO METADATA
// ─────────────────────────────────────────────

export async function generateMetadata({
    params,
  }: TourPageProps): Promise<Metadata> {
    const { slug } = await params;
  
    const tour = tours.find((item) => item.slug === slug);
  
    if (!tour) {
      return {
        title: {
          absolute: "Tour Not Found | Moroccan Trip",
        },
  
        robots: {
          index: false,
          follow: false,
        },
      };
    }
  
    const canonicalPath = `/tours/${tour.slug}`;
  
    return {
      title: {
        absolute: tour.seo.title,
      },
  
      description: tour.seo.description,
  
      alternates: {
        canonical: canonicalPath,
      },
  
      openGraph: {
        title: tour.seo.title,
        description: tour.seo.description,
        url: canonicalPath,
        siteName: "Moroccan Trip",
        type: "website",
        locale: "en_US",
  
        images: [
          {
            url: tour.image,
            alt: tour.title,
          },
        ],
      },
  
      twitter: {
        card: "summary_large_image",
        title: tour.seo.title,
        description: tour.seo.description,
        images: [tour.image],
      },
  
      robots: {
        index: true,
        follow: true,
      },
    };
  }

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────

export default async function TourPage({ params }: TourPageProps) {
  const { slug } = await params;

  const tour = tours.find((item) => item.slug === slug);

  if (!tour) {
    notFound();
  }

  const touristTripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
  
    name: tour.title,
  
    description: tour.shortDescription,
  
    image: [
      `https://moroccan-trip.com${tour.image}`,
    ],
  
    touristType: "Private Morocco Tour",
  
    provider: {
      "@type": "Organization",
      "@id": "https://moroccan-trip.com/#organization",
      name: "Moroccan Trip",
      url: "https://moroccan-trip.com",
    },
  
    itinerary: {
      "@type": "ItemList",
      itemListElement: tour.itinerary.map((day) => ({
        "@type": "TouristAttraction",
        name: day.title,
        description: day.description,
      })),
    },
  
    duration: tour.duration,
  
    location: {
      "@type": "Country",
      name: "Morocco",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
  
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://moroccan-trip.com",
      },
  
      {
        "@type": "ListItem",
        position: 2,
        name: "Tours",
        item: "https://moroccan-trip.com/tours",
      },
  
      {
        "@type": "ListItem",
        position: 3,
        name: tour.title,
        item: `https://moroccan-trip.com/tours/${tour.slug}`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
  
    mainEntity: tour.faqs.map((faq) => ({
      "@type": "Question",
  
      name: faq.question,
  
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const schemas = [
    touristTripSchema,
    breadcrumbSchema,
    ...(tour.faqs?.length ? [faqSchema] : []),
  ];

  const overviewParagraphs = tour.overview
    .trim()
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

    const relatedTours = tours
  .filter((item) => item.slug !== tour.slug)
  .map((item) => {
    let score = 0;

    // Same tour category
    if (item.category === tour.category) {
      score += 8;
    }

    // Same departure city
    if (item.departure === tour.departure) {
      score += 6;
    }

    // Same arrival city
    if (item.arrival === tour.arrival) {
      score += 3;
    }

    // Shared places along the route
    const sharedLocations = item.locations.filter((location) =>
      tour.locations.includes(location)
    ).length;

    score += Math.min(sharedLocations, 6);

    // Similar duration
    const nightDifference = Math.abs(item.nights - tour.nights);

    if (nightDifference === 0) {
      score += 3;
    } else if (nightDifference === 1) {
      score += 2;
    } else if (nightDifference === 2) {
      score += 1;
    }

    return {
      tour: item,
      score,
    };
  })
  .sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }

    return a.tour.title.localeCompare(b.tour.title);
  })
  .slice(0, 3)
  .map((item) => item.tour);

    return (
      <>
        <script
          id="tour-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemas),
          }}
        />
    
        <main className="min-h-screen bg-[hsl(var(--background))] pb-20 lg:pb-0">
      {/* ───────────────────────────────────── */}
      {/* BREADCRUMB */}
      {/* ───────────────────────────────────── */}

      <section className="border-b border-[hsl(var(--border))]">
        <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8 lg:px-10">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 overflow-hidden text-sm text-[hsl(var(--text-muted))]"
          >
            <Link
              href="/"
              className="shrink-0 transition-colors hover:text-[hsl(var(--primary))]"
            >
              Home
            </Link>

            <BreadcrumbArrow />

            <Link
              href="/tours"
              className="shrink-0 transition-colors hover:text-[hsl(var(--primary))]"
            >
              Tours
            </Link>

            <BreadcrumbArrow />

            <span
              aria-current="page"
              className="truncate text-[hsl(var(--text-secondary))]"
            >
              {tour.title}
            </span>
          </nav>
        </div>
      </section>

      {/* ───────────────────────────────────── */}
      {/* HERO */}
      {/* ───────────────────────────────────── */}

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
          {/* IMAGE */}

          <div className="relative overflow-hidden rounded-[30px] bg-[hsl(var(--surface-soft))] shadow-sm">
            <div className="relative aspect-[4/3]">
              <Image
                src={tour.image}
                alt={`${tour.title} in Morocco`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />

              {tour.badge && (
                <span className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-neutral-900 shadow-lg backdrop-blur-md">
                  {tour.badge}
                </span>
              )}

              <span className="absolute bottom-5 left-5 rounded-full bg-black/45 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                {tour.category}
              </span>
            </div>
          </div>

          {/* CONTENT */}

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[hsl(var(--primary))]">
              {tour.tourType} · Morocco
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-[1.06] tracking-[-0.035em] text-[hsl(var(--heading))] sm:text-5xl lg:text-[54px]">
              {tour.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[hsl(var(--heading)/0.74)] sm:text-lg">
              {tour.shortDescription}
            </p>

            {/* QUICK DETAILS */}

            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-y border-[hsl(var(--border))] py-7 sm:grid-cols-3">
              <TourDetail
                icon={<ClockIcon />}
                label="Duration"
                value={tour.duration}
              />

              <TourDetail
                icon={<CarIcon />}
                label="Tour Type"
                value={tour.tourType}
              />

              <TourDetail
                icon={<UsersIcon />}
                label="Group Size"
                value={tour.groupSize}
              />

              <TourDetail
                icon={<MapPinIcon />}
                label="Departure"
                value={tour.departure}
              />

              <TourDetail
                icon={<FlagIcon />}
                label="Arrival"
                value={tour.arrival}
              />

              <TourDetail
                icon={<LanguageIcon />}
                label="Languages"
                value={tour.languages.join(", ")}
              />
            </div>

            {/* CTA */}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[hsl(var(--primary))] px-7 text-sm font-bold text-[hsl(var(--primary-foreground))] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[hsl(var(--primary-hover))] hover:shadow-lg"
              >
                {tour.booking.contactLabel}

                <ArrowRightIcon />
              </Link>

              <a
                href="#itinerary"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[hsl(var(--border))] px-7 text-sm font-semibold text-[hsl(var(--heading))] transition-all duration-200 hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]"
              >
                View Itinerary
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────── */}
{/* TOUR SECTION NAVIGATION */}
{/* ───────────────────────────────────── */}

<div className="sticky top-[72px] z-40 border-y border-[hsl(var(--border))] bg-[hsl(var(--background)/0.96)] py-2 backdrop-blur-xl lg:top-[136px] lg:border-y-0 lg:bg-transparent lg:py-3">
  <div className="mx-auto max-w-7xl lg:px-10">
    <div className="overflow-hidden bg-[hsl(var(--background)/0.98)] lg:mx-auto lg:max-w-6xl lg:rounded-[24px] lg:border lg:border-[hsl(var(--border))] lg:p-1.5 lg:shadow-[0_16px_45px_rgba(28,20,13,0.08)]">
      <nav
        aria-label="Tour sections"
        className="flex items-center gap-1 overflow-x-auto scroll-smooth px-2 py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:px-0 lg:py-0"
      >
        <TourNavLink
          href="#overview"
          icon={<DocumentIcon />}
          label="Overview"
        />

        <TourNavLink
          href="#itinerary"
          icon={<RouteIcon />}
          label="Itinerary"
        />

        <TourNavLink
          href="#route"
          icon={<MapPinIcon />}
          label="Route"
        />

        <TourNavLink
          href="#highlights"
          icon={<StarIcon />}
          label="Highlights"
        />

        <TourNavLink
          href="#included"
          icon={<CheckIcon />}
          label="Included"
        />

        <TourNavLink
          href="#accommodation"
          icon={<BedIcon />}
          label="Stay"
        />

        {tour.gallery.length > 0 && (
          <TourNavLink
            href="#gallery"
            icon={<GalleryIcon />}
            label="Gallery"
          />
        )}

        {tour.faqs.length > 0 && (
          <TourNavLink
            href="#faq"
            icon={<QuestionIcon />}
            label="FAQ"
          />
        )}
      </nav>
    </div>
  </div>
</div>

      {/* ───────────────────────────────────── */}
      {/* MAIN TOUR CONTENT */}
      {/* ───────────────────────────────────── */}

      <section className="mt-2 border-t border-[hsl(var(--border))] bg-[hsl(var(--surface-soft))] lg:mt-1">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[minmax(0,1fr)_330px] lg:px-10 lg:py-16">
          {/* ─────────────────────────────── */}
          {/* LEFT CONTENT */}
          {/* ─────────────────────────────── */}

          <div className="min-w-0 space-y-10">
            {/* ───────────────────────────── */}
            {/* OVERVIEW */}
            {/* ───────────────────────────── */}

            <TourSection id="overview">
              <SectionHeading
                icon={<DocumentIcon />}
                eyebrow="Tour Overview"
                title="Your Morocco journey"
              />

              <div className="mt-7 max-w-4xl space-y-5">
                {overviewParagraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-[16px] leading-8 text-[hsl(var(--heading)/0.78)]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </TourSection>

            {/* ───────────────────────────── */}
            {/* ITINERARY */}
            {/* ───────────────────────────── */}

            <TourSection id="itinerary">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <SectionHeading
                  icon={<RouteIcon />}
                  eyebrow="Day by Day"
                  title="Your day-by-day itinerary"
                />

                <span className="shrink-0 rounded-full border border-[hsl(var(--primary)/0.14)] bg-[hsl(var(--primary)/0.07)] px-4 py-2 text-sm font-semibold text-[hsl(var(--primary))]">
                  {tour.duration}
                </span>
              </div>

              <p className="mt-5 max-w-3xl text-[15px] leading-7 text-[hsl(var(--heading)/0.72)]">
                Open each day to discover the route, stops and experiences
                planned during your private journey.
              </p>

              <div className="mt-8 space-y-4">
                {tour.itinerary.map((day) => {
                  const paragraphs = day.description
                    .trim()
                    .split(/\n\s*\n/)
                    .map((paragraph) => paragraph.trim())
                    .filter(Boolean);

                  return (
                    <details
                      key={day.day}
                      open={day.day === 1}
                      className="group overflow-hidden rounded-[22px] border border-[hsl(var(--border))] bg-[hsl(var(--card))] transition-all duration-200 open:border-[hsl(var(--primary)/0.25)] open:shadow-[0_10px_30px_rgba(0,0,0,0.045)]"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 sm:px-6 [&::-webkit-details-marker]:hidden">
                        <div className="flex min-w-0 items-center gap-4">
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[hsl(var(--primary)/0.1)] text-sm font-bold text-[hsl(var(--primary))]">
                            {day.day}
                          </span>

                          <div className="min-w-0">
                            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[hsl(var(--primary))]">
                              Day {day.day}
                            </p>

                            <h3 className="mt-1 text-[15px] font-semibold leading-6 text-[hsl(var(--heading))] sm:text-base">
                              {day.title}
                            </h3>
                          </div>
                        </div>

                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[hsl(var(--border))] text-[hsl(var(--heading))] transition-all duration-200 group-open:rotate-180 group-open:border-[hsl(var(--primary)/0.25)] group-open:bg-[hsl(var(--primary)/0.08)] group-open:text-[hsl(var(--primary))]">
                          <ChevronDownIcon />
                        </span>
                      </summary>

                      <div className="border-t border-[hsl(var(--border))] px-5 py-6 sm:px-6 sm:py-7">
                        <div className="space-y-4">
                          {paragraphs.map((paragraph, index) => (
                            <p
                              key={index}
                              className="text-[15px] leading-8 text-[hsl(var(--heading)/0.76)]"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>

                        {day.highlights.length > 0 && (
                          <div className="mt-7 rounded-2xl bg-[hsl(var(--surface-soft))] p-5">
                            <p className="text-sm font-semibold text-[hsl(var(--heading))]">
                              Day Highlights
                            </p>

                            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                              {day.highlights.map((highlight) => (
                                <li
                                  key={highlight}
                                  className="flex items-start gap-2.5 text-sm leading-6 text-[hsl(var(--heading)/0.72)]"
                                >
                                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--primary))]" />

                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </details>
                  );
                })}
              </div>
            </TourSection>

            {/* ───────────────────────────── */}
            {/* ROUTE & MAP */}
            {/* ───────────────────────────── */}

            <TourSection id="route">
              <SectionHeading
                icon={<MapPinIcon />}
                eyebrow="Tour Route"
                title="Follow the journey across Morocco"
              />

              <p className="mt-5 max-w-3xl text-[15px] leading-7 text-[hsl(var(--heading)/0.72)]">
                See the main stops along your private tour and explore the route
                on the interactive map.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-2">
                {tour.locations.map((location, index) => (
                  <div
                    key={`${location}-${index}`}
                    className="flex items-center gap-2"
                  >
                    <span className="rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface-soft))] px-3.5 py-2 text-xs font-medium text-[hsl(var(--heading)/0.74)] sm:text-sm">
                      {location}
                    </span>

                    {index < tour.locations.length - 1 && (
                      <span className="text-xs text-[hsl(var(--text-muted))]">
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {tour.map && tour.map.stops.length > 0 && (
                <div className="mt-8 border-t border-[hsl(var(--border))] pt-7">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[hsl(var(--primary))]">
                        <MapPinIcon />
                      </span>

                      <h3 className="text-sm font-semibold text-[hsl(var(--heading))]">
                        Interactive route map
                      </h3>
                    </div>

                    <span className="text-sm font-medium text-[hsl(var(--heading)/0.62)]">
                      {tour.departure} → {tour.arrival}
                    </span>
                  </div>

                  <TourMap stops={tour.map.stops} />
                </div>
              )}
            </TourSection>

            {/* ───────────────────────────── */}
            {/* HIGHLIGHTS */}
            {/* ───────────────────────────── */}

            <TourSection id="highlights">
              <SectionHeading
                icon={<StarIcon />}
                eyebrow="Tour Highlights"
                title="Highlights of your journey"
              />

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {tour.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="group flex gap-3 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[hsl(var(--primary)/0.25)] hover:shadow-sm"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))]">
                      <CheckSmallIcon />
                    </span>

                    <p className="text-sm leading-6 text-[hsl(var(--heading)/0.74)]">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </TourSection>

            {/* ───────────────────────────── */}
            {/* INCLUDED / NOT INCLUDED */}
            {/* ───────────────────────────── */}

            <TourSection id="included">
              <SectionHeading
                icon={<CheckIcon />}
                eyebrow="Tour Details"
                title="Included & not included"
              />

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {/* INCLUDED */}

                <div className="rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))]">
                      <CheckIcon />
                    </span>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--text-muted))]">
                        Your Tour
                      </p>

                      <h3 className="mt-1 text-xl font-semibold text-[hsl(var(--heading))]">
                        Included
                      </h3>
                    </div>
                  </div>

                  <ul className="mt-7 space-y-4">
                    {tour.included.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-[hsl(var(--heading)/0.72)]"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))]">
                          <CheckSmallIcon />
                        </span>

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* NOT INCLUDED */}

                <div className="rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(var(--surface-soft))] text-[hsl(var(--text-muted))]">
                      <CloseIcon />
                    </span>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--text-muted))]">
                        Please Note
                      </p>

                      <h3 className="mt-1 text-xl font-semibold text-[hsl(var(--heading))]">
                        Not Included
                      </h3>
                    </div>
                  </div>

                  <ul className="mt-7 space-y-4">
                    {tour.excluded.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-[hsl(var(--heading)/0.72)]"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[hsl(var(--border))] text-[hsl(var(--text-muted))]">
                          <CloseSmallIcon />
                        </span>

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TourSection>

            {/* ───────────────────────────── */}
            {/* ACCOMMODATION */}
            {/* ───────────────────────────── */}

            <TourSection id="accommodation">
              <SectionHeading
                icon={<BedIcon />}
                eyebrow="Where You'll Stay"
                title="Accommodation during the tour"
              />

              <p className="mt-5 max-w-3xl text-[15px] leading-7 text-[hsl(var(--heading)/0.72)]">
                Your accommodation can be adapted to your preferred comfort
                level and travel style.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {tour.accommodation.map((stay) => (
                  <div
                    key={`${stay.night}-${stay.location}`}
                    className="group rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[hsl(var(--primary)/0.25)] hover:shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[hsl(var(--primary))]">
                          Night {stay.night}
                        </p>

                        <h3 className="mt-3 text-xl font-semibold text-[hsl(var(--heading))]">
                          {stay.location}
                        </h3>

                        <p className="mt-2 text-sm text-[hsl(var(--heading)/0.7)]">
                          {stay.type}
                        </p>
                      </div>

                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[hsl(var(--primary)/0.08)] text-[hsl(var(--primary))]">
                        <BedIcon />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </TourSection>

            {/* ───────────────────────────── */}
            {/* GALLERY */}
            {/* ───────────────────────────── */}

            {tour.gallery.length > 0 && (
              <TourSection id="gallery">
                <SectionHeading
                  icon={<GalleryIcon />}
                  eyebrow="Tour Gallery"
                  title="A glimpse of the journey"
                />

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {tour.gallery.map((image, index) => (
                    <div
                      key={`${image}-${index}`}
                      className={`group relative overflow-hidden rounded-3xl bg-[hsl(var(--surface-soft))] ${
                        tour.gallery.length === 1
                          ? "aspect-[16/9] sm:col-span-2"
                          : index === 0 && tour.gallery.length >= 3
                            ? "aspect-[16/9] sm:col-span-2"
                            : "aspect-[4/3]"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${tour.title} - tour photo ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />

                      <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                    </div>
                  ))}
                </div>
              </TourSection>
            )}

            {/* ───────────────────────────── */}
            {/* FAQ */}
            {/* ───────────────────────────── */}

            {tour.faqs.length > 0 && (
              <TourSection id="faq">
                <SectionHeading
                  icon={<QuestionIcon />}
                  eyebrow="Frequently Asked Questions"
                  title="Questions about this tour"                />

                <p className="mt-5 max-w-3xl text-[15px] leading-7 text-[hsl(var(--heading)/0.72)]">
                  Find answers to common questions about the itinerary,
                  accommodation and your travel experience.
                </p>

                <div className="mt-8 space-y-3">
                  {tour.faqs.map((faq) => (
                    <details
                      key={faq.question}
                      className="group overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] transition-all duration-200 open:border-[hsl(var(--primary)/0.25)]"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 sm:px-6 [&::-webkit-details-marker]:hidden">
                        <h3 className="text-[15px] font-semibold leading-6 text-[hsl(var(--heading))] sm:text-base">
                          {faq.question}
                        </h3>

                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[hsl(var(--border))] text-[hsl(var(--heading))] transition-all duration-200 group-open:rotate-180 group-open:border-[hsl(var(--primary)/0.25)] group-open:bg-[hsl(var(--primary)/0.08)] group-open:text-[hsl(var(--primary))]">
                          <ChevronDownIcon />
                        </span>
                      </summary>

                      <div className="border-t border-[hsl(var(--border))] px-5 py-5 sm:px-6">
                        <p className="max-w-3xl text-sm leading-7 text-[hsl(var(--heading)/0.72)]">
                          {faq.answer}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </TourSection>
            )}

            {/* ───────────────────────────── */}
{/* RELATED TOURS */}
{/* ───────────────────────────── */}

{relatedTours.length > 0 && (
  <section className="rounded-[30px] border border-[hsl(var(--border))] bg-[hsl(var(--background))] p-6 shadow-[0_2px_15px_rgba(0,0,0,0.025)] sm:p-8 lg:p-9">
    {/* HEADING */}

    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <SectionHeading
        icon={<RouteIcon />}
        eyebrow="Continue Exploring"
        title="You may also like"
      />

      <Link
        href="/tours"
        className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-[hsl(var(--primary))] transition-opacity hover:opacity-75"
      >
        View all tours

        <span className="transition-transform duration-200 group-hover:translate-x-1">
          <ArrowRightIcon />
        </span>
      </Link>
    </div>

    <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[hsl(var(--text-secondary))]">
      Explore more private Morocco tours with similar routes, destinations
      and travel experiences.
    </p>

    {/* TOUR CARDS */}

    <div className="mt-8 grid gap-5 md:grid-cols-3">
      {relatedTours.map((relatedTour) => (
        <Link
          key={relatedTour.slug}
          href={`/tours/${relatedTour.slug}`}
          className="group overflow-hidden rounded-[24px] border border-[hsl(var(--border))] bg-[hsl(var(--card))] transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--primary)/0.3)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
        >
          {/* IMAGE */}

          <div className="relative aspect-[4/3] overflow-hidden bg-[hsl(var(--surface-soft))]">
            <Image
              src={relatedTour.image}
              alt={`${relatedTour.title} in Morocco`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 280px"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

            {/* BADGE */}

            {relatedTour.badge && (
              <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold text-neutral-900 shadow-sm backdrop-blur-md">
                {relatedTour.badge}
              </span>
            )}

            {/* DURATION */}

            <span className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/45 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-md">
              {relatedTour.duration}
            </span>
          </div>

          {/* CONTENT */}

          <div className="p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[hsl(var(--primary))]">
              {relatedTour.category}
            </p>

            <h3 className="mt-2 text-lg font-semibold leading-6 tracking-[-0.015em] text-[hsl(var(--heading))] transition-colors duration-200 group-hover:text-[hsl(var(--primary))]">
              {relatedTour.title}
            </h3>

            <p className="mt-3 line-clamp-3 text-sm leading-6 text-[hsl(var(--text-secondary))]">
              {relatedTour.shortDescription}
            </p>

            {/* ROUTE */}

            <div className="mt-5 border-t border-[hsl(var(--border))] pt-4">
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[hsl(var(--text-muted))]">
                    Route
                  </p>

                  <p className="mt-1 truncate text-xs font-semibold text-[hsl(var(--heading))]">
                    {relatedTour.departure}
                    <span className="mx-1.5 text-[hsl(var(--text-muted))]">
                      →
                    </span>
                    {relatedTour.arrival}
                  </p>
                </div>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--primary)/0.08)] text-[hsl(var(--primary))] transition-all duration-300 group-hover:bg-[hsl(var(--primary))] group-hover:text-[hsl(var(--primary-foreground))]">
                  <ArrowRightIcon />
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </section>
)}

            {/* ───────────────────────────── */}
            {/* FINAL CTA */}
            {/* ───────────────────────────── */}

            <section className="relative overflow-hidden rounded-[32px] bg-[hsl(var(--primary))] px-6 py-10 sm:px-10 sm:py-12">
              <div className="relative z-10 max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[hsl(var(--primary-foreground)/0.72)]">
                  Private · Flexible · Customizable
                </p>

                <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.03em] text-[hsl(var(--primary-foreground))] sm:text-4xl">
                Ready to plan your private Morocco tour?                </h2>

                <p className="mt-5 text-sm leading-7 text-[hsl(var(--primary-foreground)/0.82)] sm:text-base">
                  Tell us your travel dates, group size and preferred
                  accommodation level. We&apos;ll prepare your private tour
                  around your travel plans.
                </p>

                <Link
                  href="/contact"
                  className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[hsl(var(--background))] px-7 text-sm font-bold text-[hsl(var(--heading))] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  {tour.booking.contactLabel}

                  <ArrowRightIcon />
                </Link>
              </div>

              <div className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-white/5" />
              <div className="absolute -right-10 top-0 h-36 w-36 rounded-full bg-white/5" />
            </section>
          </div>

          {/* ─────────────────────────────── */}
          {/* BOOKING SIDEBAR */}
          {/* ─────────────────────────────── */}

          <aside className="hidden lg:block">
            <div className="sticky top-[220px] overflow-hidden rounded-[28px] border border-[hsl(var(--border))] bg-[hsl(var(--card))] shadow-[0_12px_35px_rgba(28,20,13,0.06)]">
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[hsl(var(--primary))]">
                  Plan Your Tour
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-[hsl(var(--heading))]">
                  Request your private trip
                </h2>

                <p className="mt-3 text-sm leading-6 text-[hsl(var(--heading)/0.7)]">
                  The final quote depends on group size, accommodation level
                  and the services you choose.
                </p>

                <div className="mt-6 space-y-4 border-y border-[hsl(var(--border))] py-6">
                  <SidebarDetail
                    label="Duration"
                    value={tour.duration}
                  />

                  <SidebarDetail
                    label="Tour Type"
                    value={tour.tourType}
                  />

                  <SidebarDetail
                    label="Group Size"
                    value={tour.groupSize}
                  />

                  <SidebarDetail
                    label="Departure"
                    value={tour.departure}
                  />

                  <SidebarDetail
                    label="Languages"
                    value={tour.languages.join(", ")}
                  />
                </div>

                <Link
                  href="/contact"
                  className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[hsl(var(--primary))] px-6 text-sm font-bold text-[hsl(var(--primary-foreground))] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[hsl(var(--primary-hover))] hover:shadow-lg"
                >
                  {tour.booking.contactLabel}

                  <ArrowRightIcon />
                </Link>

                {tour.booking.customizable && (
                  <div className="mt-5 flex items-start gap-2.5 rounded-2xl bg-[hsl(var(--surface-soft))] p-4">
                    <span className="mt-0.5 shrink-0 text-[hsl(var(--primary))]">
                      <CheckSmallIcon />
                    </span>

                    <p className="text-xs leading-5 text-[hsl(var(--text-muted))]">
                      This private tour can be customized to match your travel
                      dates and preferences.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ───────────────────────────────────── */}
      {/* MOBILE BOOKING BAR */}
      {/* ───────────────────────────────────── */}

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[hsl(var(--border))] bg-[hsl(var(--background)/0.96)] p-3 shadow-[0_-5px_25px_rgba(0,0,0,0.06)] backdrop-blur-xl lg:hidden">
        <div className="mx-auto flex max-w-lg items-center gap-3">
          <div className="min-w-0 flex-1 pl-1">
            <p className="truncate text-[11px] text-[hsl(var(--text-muted))]">
              {tour.duration} · {tour.tourType}
            </p>

            <p className="truncate text-sm font-semibold text-[hsl(var(--heading))]">
              Private & customizable
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--primary))] px-5 text-sm font-bold text-[hsl(var(--primary-foreground))]"
          >
            {tour.booking.contactLabel}
          </Link>
        </div>
      </div>
    </main>
    </>
  );
}

// ─────────────────────────────────────────────
// REUSABLE COMPONENTS
// ─────────────────────────────────────────────

function TourSection({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-[120px] rounded-[30px] border border-[hsl(var(--border))] bg-[hsl(var(--background))] p-6 shadow-[0_8px_30px_rgba(28,20,13,0.035)] sm:p-8 lg:scroll-mt-[220px] lg:p-9"
    >
      {children}
    </section>
  );
}

function SectionHeading({
  icon,
  eyebrow,
  title,
}: {
  icon: ReactNode;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))]">
        {icon}
      </span>

      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.17em] text-[hsl(var(--primary))]">
          {eyebrow}
        </p>

        <h2 className="mt-2 text-2xl font-semibold leading-tight tracking-[-0.025em] text-[hsl(var(--heading))] sm:text-3xl">
          {title}
        </h2>
      </div>
    </div>
  );
}

function TourNavLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      className="
        group
        flex
        min-w-[100px]
        shrink-0
        items-center
        justify-center
        gap-2
        rounded-[14px]
        px-3
        py-2.5
        text-xs
        font-semibold
        text-[hsl(var(--heading)/0.7)]
        transition-all
        duration-200
        hover:bg-[hsl(var(--primary)/0.08)]
        hover:text-[hsl(var(--primary))]
        lg:min-w-max
        lg:flex-1
        lg:rounded-[16px]
        lg:px-3.5
        lg:text-[13px]
      "
    >
      <span
        className="
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-[hsl(var(--surface-soft))]
          text-[hsl(var(--primary))]
          transition-all
          duration-200
          group-hover:bg-[hsl(var(--primary)/0.12)]
        "
      >
        {icon}
      </span>

      <span className="whitespace-nowrap">
        {label}
      </span>
    </a>
  );
}

function TourDetail({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-3">
      <span className="mt-0.5 shrink-0 text-[hsl(var(--primary))]">
        {icon}
      </span>

      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[hsl(var(--text-muted))]">
          {label}
        </p>

        <p className="mt-1 text-sm font-semibold leading-5 text-[hsl(var(--heading))]">
          {value}
        </p>
      </div>
    </div>
  );
}

function SidebarDetail({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-5">
      <span className="text-sm text-[hsl(var(--text-muted))]">
        {label}
      </span>

      <span className="text-right text-sm font-semibold text-[hsl(var(--heading))]">
        {value}
      </span>
    </div>
  );
}

// ─────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────

function BreadcrumbArrow() {
  return (
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      width="16"
      height="16"
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

function DocumentIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8" />
      <path d="M8 17h6" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01Z" />
    </svg>
  );
}

function RouteIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <circle cx="6" cy="19" r="2" />
      <circle cx="18" cy="5" r="2" />
      <path d="M8 19h3a4 4 0 0 0 4-4V9a4 4 0 0 1 4-4" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function CheckSmallIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

function CloseSmallIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

function BedIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M2 4v16" />
      <path d="M22 12v8" />
      <path d="M2 17h20" />
      <path d="M6 12V8a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v4" />
      <path d="M13 12h5a4 4 0 0 1 4 4v1" />
    </svg>
  );
}

function GalleryIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-5-5L5 21" />
    </svg>
  );
}

function QuestionIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.1 9a3 3 0 1 1 5.83 1c0 2-3 2-3 4" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="m5 11 1.5-4h11L19 11" />
      <path d="M3 12a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5H3Z" />
      <circle cx="7" cy="17" r="1" />
      <circle cx="17" cy="17" r="1" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function FlagIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M5 22V4" />
      <path d="M5 5h11l-1 4 1 4H5" />
    </svg>
  );
}

function LanguageIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18" />
      <path d="M12 3a15 15 0 0 0 0 18" />
    </svg>
  );
}