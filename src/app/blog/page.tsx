import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { blogPosts } from "@/data/blog";

// ─────────────────────────────
// SEO METADATA
// ─────────────────────────────

export const metadata: Metadata = {
  title: "Morocco Travel Blog & Guides | Moroccan Trip",

  description:
    "Explore Morocco travel guides, destination tips, Sahara advice, weather guides and practical information to help you plan your Morocco trip.",

  alternates: {
    canonical: "/blog",
  },

  openGraph: {
    title: "Morocco Travel Blog & Guides | Moroccan Trip",

    description:
      "Explore practical Morocco travel guides, destination inspiration, Sahara advice and useful tips for planning your trip.",

    url: "/blog",

    type: "website",

    images: [
      {
        url: "/images/blog/best-time-to-visit-morocco.jpg",
        width: 1200,
        height: 630,
        alt: "Morocco Travel Blog",
      },
    ],
  },
};

// ─────────────────────────────
// HELPERS
// ─────────────────────────────

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

// ─────────────────────────────
// PAGE
// ─────────────────────────────

export default function BlogPage() {
  const featuredPost =
    blogPosts.find((post) => post.featured) ?? blogPosts[0];

  const otherPosts = featuredPost
    ? blogPosts.filter((post) => post.id !== featuredPost.id)
    : blogPosts;

  const categories = Array.from(
    new Set(blogPosts.map((post) => post.category))
  );

  return (
    <main className="bg-white">
      {/* ─────────────────────────────
          HERO
      ───────────────────────────── */}

      <section className="relative overflow-hidden bg-[#f7f4ee]">
        <div
          aria-hidden="true"
          className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-orange-700 shadow-sm">
              Morocco Travel Inspiration
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Morocco Travel Blog
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Practical Morocco travel guides, destination ideas, Sahara advice,
              seasonal tips and useful information to help you plan a memorable
              journey through Morocco.
            </p>
          </div>

          {/* CATEGORY PILLS */}

          {categories.length > 0 && (
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {category}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ─────────────────────────────
          FEATURED ARTICLE
      ───────────────────────────── */}

      {featuredPost && (
        <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
              Featured Guide
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Start Planning Your Morocco Trip
            </h2>
          </div>

          <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              {/* IMAGE */}

              <Link
                href={`/blog/${featuredPost.slug}`}
                className="relative block min-h-[320px] overflow-hidden sm:min-h-[420px] lg:min-h-full"
              >
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                <span className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-wide text-orange-700 shadow-sm backdrop-blur">
                  Featured
                </span>
              </Link>

              {/* CONTENT */}

              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-500">
                  <span className="font-semibold text-orange-600">
                    {featuredPost.category}
                  </span>

                  <span aria-hidden="true">•</span>

                  <span>{formatDate(featuredPost.publishedAt)}</span>

                  <span aria-hidden="true">•</span>

                  <span>{featuredPost.readTime}</span>
                </div>

                <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="transition hover:text-orange-600"
                  >
                    {featuredPost.title}
                  </Link>
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-600">
                  {featuredPost.excerpt}
                </p>

                <div className="mt-8">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-orange-600"
                  >
                    Read Travel Guide

                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                      className="h-4 w-4"
                    >
                      <path
                        d="M4.5 10h11m0 0-4.5-4.5M15.5 10 11 14.5"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </section>
      )}

      {/* ─────────────────────────────
          OTHER BLOG POSTS
      ───────────────────────────── */}

      {otherPosts.length > 0 && (
        <section className="border-t border-slate-100 bg-slate-50/60">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
                Travel Guides
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Explore More About Morocco
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Discover useful guides about Morocco&apos;s destinations,
                seasons, desert experiences and travel planning.
              </p>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {otherPosts.map((post) => (
                <article
                  key={post.id}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* CARD IMAGE */}

                  <Link
                    href={`/blog/${post.slug}`}
                    className="relative block aspect-[16/10] overflow-hidden"
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </Link>

                  {/* CARD CONTENT */}

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
                      <span className="text-orange-600">
                        {post.category}
                      </span>

                      <span aria-hidden="true">•</span>

                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="mt-4 text-xl font-bold leading-snug text-slate-950">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="transition hover:text-orange-600"
                      >
                        {post.title}
                      </Link>
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto pt-6">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-slate-950 transition hover:text-orange-600"
                      >
                        Read Article

                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          aria-hidden="true"
                          className="h-4 w-4"
                        >
                          <path
                            d="M4.5 10h11m0 0-4.5-4.5M15.5 10 11 14.5"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─────────────────────────────
          BLOG VALUE SECTION
      ───────────────────────────── */}

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path
                  d="M12 21s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <circle
                  cx="12"
                  cy="10"
                  r="2.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
              </svg>
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-950">
              Destination Guides
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              Learn about Marrakech, Fes, the Sahara, Atlas Mountains and other
              destinations before building your itinerary.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="8"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <path
                  d="M12 7v5l3 2"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-950">
              Practical Travel Advice
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              Find useful information about weather, seasons, travel times and
              choosing the right experience for your Morocco trip.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path
                  d="m4 17 5-10 4 7 2-4 5 7H4Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-950">
              Morocco Experiences
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              Compare desert journeys, mountain escapes, day trips and private
              tours that fit naturally into your travel plans.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────
          CTA
      ───────────────────────────── */}

      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-12 sm:px-10 sm:py-14 lg:px-14">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-400">
                Plan Your Journey
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to Discover Morocco?
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
                Explore our private Morocco tours, Sahara journeys and day trips,
                or contact us to create an itinerary around your travel plans.
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
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}