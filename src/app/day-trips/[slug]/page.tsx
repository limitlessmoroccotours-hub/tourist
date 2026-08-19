import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { dayTrips } from "@/data/dayTrips";

type DayTripPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const SITE_URL = "https://moroccan-trip.com";

// ─────────────────────────────────────────────
// STATIC PAGES
// ─────────────────────────────────────────────

export function generateStaticParams() {
  return dayTrips.map((trip) => ({
    slug: trip.slug,
  }));
}

// ─────────────────────────────────────────────
// SEO METADATA
// ─────────────────────────────────────────────

export async function generateMetadata({
  params,
}: DayTripPageProps): Promise<Metadata> {
  const { slug } = await params;

  const trip = dayTrips.find((item) => item.slug === slug);

  if (!trip) {
    return {
      title: {
        absolute: "Day Trip Not Found | Moroccan Trip",
      },
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalUrl = `${SITE_URL}/day-trips/${trip.slug}`;
  const imageUrl = `${SITE_URL}${trip.image}`;

  return {
    title: {
      absolute: trip.seo.title,
    },

    description: trip.seo.description,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title: trip.seo.title,
      description: trip.seo.description,
      url: canonicalUrl,
      siteName: "Moroccan Trip",
      type: "website",
      locale: "en_US",

      images: [
        {
          url: imageUrl,
          alt: trip.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: trip.seo.title,
      description: trip.seo.description,
      images: [imageUrl],
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

export default async function DayTripPage({
  params,
}: DayTripPageProps) {
  const { slug } = await params;

  const trip = dayTrips.find((item) => item.slug === slug);

  if (!trip) {
    notFound();
  }

  const overviewParagraphs = trip.overview
    .trim()
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  const relatedTrips = dayTrips
    .filter((item) => item.slug !== trip.slug)
    .slice(0, 3);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Day Trips",
        item: `${SITE_URL}/day-trips`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: trip.title,
        item: `${SITE_URL}/day-trips/${trip.slug}`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[hsl(var(--background))]">
      {/* GOOGLE BREADCRUMB STRUCTURED DATA */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* ───────────────────────────────────── */}
      {/* IMMERSIVE HERO */}
      {/* ───────────────────────────────────── */}

      <section className="relative min-h-[620px] overflow-hidden lg:min-h-[690px]">
        <Image
          src={trip.image}
          alt={`${trip.title} in Morocco`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl flex-col px-5 pb-28 pt-7 sm:px-8 lg:min-h-[690px] lg:px-10 lg:pb-36">
          {/* BREADCRUMB */}

          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-sm text-white/70"
          >
            <Link
              href="/"
              className="transition-colors hover:text-white"
            >
              Home
            </Link>

            <span aria-hidden="true">/</span>

            <Link
              href="/day-trips"
              className="transition-colors hover:text-white"
            >
              Day Trips
            </Link>

            <span aria-hidden="true">/</span>

            <span
              aria-current="page"
              className="max-w-[220px] truncate text-white/90 sm:max-w-sm"
            >
              {trip.title}
            </span>
          </nav>

          {/* HERO CONTENT */}

          <div className="mt-auto max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              {trip.badge && (
                <span className="rounded-full bg-[hsl(var(--primary))] px-4 py-2 text-xs font-bold text-white shadow-lg">
                  {trip.badge}
                </span>
              )}

              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                {trip.category}
              </span>
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-orange-200">
              {trip.tourType} · {trip.departure}
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.03] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-[68px]">
              {trip.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              {trip.shortDescription}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-[hsl(var(--primary))] px-7 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[hsl(var(--primary-hover))]"
              >
                {trip.booking.contactLabel}
                <span aria-hidden="true">→</span>
              </Link>

              <a
                href="#itinerary"
                className="inline-flex h-13 items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20"
              >
                Explore the Itinerary
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────── */}
      {/* AT A GLANCE */}
      {/* ───────────────────────────────────── */}

      <section className="relative z-10 -mt-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid overflow-hidden rounded-[28px] border border-[hsl(var(--border))] bg-[hsl(var(--card))] shadow-[0_18px_55px_rgba(0,0,0,0.10)] sm:grid-cols-2 lg:grid-cols-5">
            <StatItem
              label="Duration"
              value={trip.duration}
            />

            <StatItem
              label="Departure"
              value={trip.departure}
            />

            <StatItem
              label="Return"
              value={trip.returnTo}
            />

            <StatItem
              label="Group Size"
              value={trip.groupSize}
            />

            <StatItem
              label="Languages"
              value={trip.languages.join(", ")}
              last
            />
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────── */}
      {/* OVERVIEW + HIGHLIGHTS */}
      {/* ───────────────────────────────────── */}

      <article>
        <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(300px,0.7fr)] lg:px-10 lg:py-28">
          {/* OVERVIEW */}

          <div>
            <SectionIntro
              eyebrow="The Experience"
              title="Discover the journey beyond Marrakech"
            />

            <div className="mt-8 max-w-3xl space-y-6">
              {overviewParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`leading-8 text-[hsl(var(--text-secondary))] ${
                    index === 0
                      ? "text-lg sm:text-xl sm:leading-9"
                      : "text-[16px]"
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* HIGHLIGHTS PANEL */}

          <aside>
            <div className="rounded-[30px] bg-[hsl(var(--secondary))] p-7 text-[hsl(var(--secondary-foreground))] sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--primary))]">
                Why You&apos;ll Love It
              </p>

              <h2 className="mt-3 text-3xl font-semibold">
                Day trip highlights
              </h2>

              <ul className="mt-7 space-y-5">
                {trip.highlights.slice(0, 7).map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs text-[hsl(var(--primary))]">
                      ✓
                    </span>

                    <span className="text-sm leading-6 text-white/75">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>

        {/* ───────────────────────────────────── */}
        {/* ROUTE */}
        {/* ───────────────────────────────────── */}

        <section className="border-y border-[hsl(var(--border))] bg-[hsl(var(--surface-soft))]">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="shrink-0">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--primary))]">
                  Your Route
                </p>

                <h2 className="mt-2 text-2xl font-semibold text-[hsl(var(--heading))]">
                  From city to landscape
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {trip.locations.map((location, index) => (
                  <div
                    key={`${location}-${index}`}
                    className="flex items-center gap-2"
                  >
                    <span className="rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))] px-4 py-2.5 text-sm font-semibold text-[hsl(var(--text-secondary))] shadow-sm">
                      {location}
                    </span>

                    {index < trip.locations.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="text-[hsl(var(--primary))]"
                      >
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────── */}
        {/* ITINERARY TIMELINE */}
        {/* ───────────────────────────────────── */}

        <section
          id="itinerary"
          className="scroll-mt-28 bg-[hsl(var(--background))]"
        >
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="max-w-2xl">
              <SectionIntro
                eyebrow="Day Itinerary"
                title="How your day unfolds"
              />

              <p className="mt-5 text-base leading-8 text-[hsl(var(--text-secondary))]">
                A relaxed private journey with time for landscapes, local
                stops and discovering the destination at your own pace.
              </p>
            </div>

            <div className="relative mt-14">
              <div className="absolute bottom-0 left-[23px] top-0 hidden w-px bg-[hsl(var(--border))] sm:block" />

              <div className="space-y-8">
                {trip.itinerary.map((item, index) => {
                  const paragraphs = item.description
                    .trim()
                    .split(/\n\s*\n/)
                    .map((paragraph) => paragraph.trim())
                    .filter(Boolean);

                  return (
                    <div
                      key={`${item.title}-${index}`}
                      className="relative sm:pl-20"
                    >
                      <div className="absolute left-0 top-0 z-10 hidden h-12 w-12 items-center justify-center rounded-full border-4 border-[hsl(var(--background))] bg-[hsl(var(--primary))] text-sm font-bold text-white shadow-sm sm:flex">
                        {index + 1}
                      </div>

                      <div className="rounded-[28px] border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 transition-all duration-300 hover:border-[hsl(var(--primary)/0.3)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.05)] sm:p-8">
                        <div className="flex items-center gap-3 sm:hidden">
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[hsl(var(--primary))] text-xs font-bold text-white">
                            {index + 1}
                          </span>

                          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[hsl(var(--primary))]">
                            Stop {index + 1}
                          </p>
                        </div>

                        <p className="hidden text-xs font-bold uppercase tracking-[0.15em] text-[hsl(var(--primary))] sm:block">
                          Stop {index + 1}
                        </p>

                        <h3 className="mt-3 text-2xl font-semibold leading-tight text-[hsl(var(--heading))]">
                          {item.title}
                        </h3>

                        <div className="mt-5 space-y-4">
                          {paragraphs.map((paragraph, paragraphIndex) => (
                            <p
                              key={paragraphIndex}
                              className="text-[15px] leading-8 text-[hsl(var(--text-secondary))]"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────── */}
        {/* INCLUDED / EXCLUDED */}
        {/* ───────────────────────────────────── */}

        <section className="bg-[hsl(var(--surface-soft))]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
            <div className="max-w-2xl">
              <SectionIntro
                eyebrow="Know Before You Go"
                title="What's included in your day"
              />
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <InclusionCard
                title="Included"
                subtitle="Part of your private day trip"
                items={trip.included}
                included
              />

              <InclusionCard
                title="Not Included"
                subtitle="Plan these separately"
                items={trip.excluded}
              />
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────── */}
        {/* GALLERY */}
        {/* ───────────────────────────────────── */}

        {trip.gallery.length > 0 && (
          <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <SectionIntro
                eyebrow="Visual Journey"
                title="A glimpse of the experience"
              />

              <p className="max-w-md text-sm leading-7 text-[hsl(var(--text-muted))]">
                Discover the landscapes and atmosphere waiting beyond
                Marrakech.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {trip.gallery.map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className={`group relative overflow-hidden rounded-[28px] bg-[hsl(var(--surface-soft))] ${
                    trip.gallery.length === 1
                      ? "aspect-[16/9] md:col-span-2"
                      : index === 0 && trip.gallery.length >= 3
                        ? "aspect-[16/9] md:col-span-2"
                        : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Photo from ${trip.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ───────────────────────────────────── */}
        {/* FAQ */}
        {/* ───────────────────────────────────── */}

        {trip.faqs.length > 0 && (
          <section className="border-y border-[hsl(var(--border))] bg-[hsl(var(--card))]">
            <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--primary))]">
                  Frequently Asked Questions
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[hsl(var(--heading))] sm:text-4xl">
                  Before your day trip
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[hsl(var(--text-secondary))]">
                  Practical answers about your private experience, transport
                  and itinerary.
                </p>
              </div>

              <div className="mt-12 grid gap-x-12 gap-y-8 md:grid-cols-2">
                {trip.faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="border-t border-[hsl(var(--border))] pt-6"
                  >
                    <h3 className="text-lg font-semibold leading-7 text-[hsl(var(--heading))]">
                      {faq.question}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[hsl(var(--text-secondary))]">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ───────────────────────────────────── */}
        {/* RELATED DAY TRIPS */}
        {/* ───────────────────────────────────── */}

        {relatedTrips.length > 0 && (
          <section className="bg-[hsl(var(--background))]">
            <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <SectionIntro
                  eyebrow="Continue Exploring"
                  title="More day trips from Morocco"
                />

                <Link
                  href="/day-trips"
                  className="text-sm font-bold text-[hsl(var(--primary))] hover:text-[hsl(var(--primary-hover))]"
                >
                  View all day trips →
                </Link>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedTrips.map((relatedTrip) => (
                  <article
                    key={relatedTrip.id}
                    className="group overflow-hidden rounded-[26px] border border-[hsl(var(--border))] bg-[hsl(var(--card))]"
                  >
                    <Link
                      href={`/day-trips/${relatedTrip.slug}`}
                      className="relative block aspect-[4/3] overflow-hidden"
                    >
                      <Image
                        src={relatedTrip.image}
                        alt={relatedTrip.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    </Link>

                    <div className="p-6">
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-[hsl(var(--primary))]">
                        {relatedTrip.duration}
                      </p>

                      <h3 className="mt-3 text-2xl font-semibold leading-tight text-[hsl(var(--heading))]">
                        <Link
                          href={`/day-trips/${relatedTrip.slug}`}
                          className="transition-colors hover:text-[hsl(var(--primary))]"
                        >
                          {relatedTrip.title}
                        </Link>
                      </h3>

                      <Link
                        href={`/day-trips/${relatedTrip.slug}`}
                        className="mt-5 inline-block text-sm font-bold text-[hsl(var(--primary))]"
                      >
                        Explore day trip →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ───────────────────────────────────── */}
        {/* FINAL CTA */}
        {/* ───────────────────────────────────── */}

        <section className="bg-[hsl(var(--secondary))]">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--primary))]">
                  Private · Flexible · Made for You
                </p>

                <h2 className="mt-4 text-3xl font-semibold leading-tight text-[hsl(var(--secondary-foreground))] sm:text-4xl lg:text-5xl">
                  Ready for your {trip.title}?
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-[hsl(var(--footer-muted))]">
                  Tell us your travel date, group size and preferences. We&apos;ll
                  help organize the day around your plans.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex h-13 w-fit items-center justify-center gap-2 rounded-full bg-[hsl(var(--primary))] px-8 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[hsl(var(--primary-hover))]"
              >
                {trip.booking.contactLabel}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}

// ─────────────────────────────────────────────
// SMALL COMPONENTS
// ─────────────────────────────────────────────

function StatItem({
  label,
  value,
  last = false,
}: {
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div
      className={`px-6 py-5 ${
        last
          ? ""
          : "border-b border-[hsl(var(--border))] sm:border-r lg:border-b-0"
      }`}
    >
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--text-muted))]">
        {label}
      </p>

      <p className="mt-2 text-sm font-semibold leading-5 text-[hsl(var(--heading))]">
        {value}
      </p>
    </div>
  );
}

function SectionIntro({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--primary))]">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.03em] text-[hsl(var(--heading))] sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function InclusionCard({
  title,
  subtitle,
  items,
  included = false,
}: {
  title: string;
  subtitle: string;
  items: string[];
  included?: boolean;
}) {
  return (
    <div className="rounded-[28px] border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-7 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.15em] text-[hsl(var(--text-muted))]">
        {subtitle}
      </p>

      <h3 className="mt-3 text-2xl font-semibold text-[hsl(var(--heading))]">
        {title}
      </h3>

      <ul className="mt-7 space-y-4">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-sm leading-6 text-[hsl(var(--text-secondary))]"
          >
            <span
              className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs ${
                included
                  ? "bg-[hsl(var(--primary)/0.10)] text-[hsl(var(--primary))]"
                  : "bg-[hsl(var(--surface-soft))] text-[hsl(var(--text-muted))]"
              }`}
            >
              {included ? "✓" : "×"}
            </span>

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}