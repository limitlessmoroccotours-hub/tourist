import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { blogPostsEs } from "@/data/blog-es";
import { toursEs } from "@/data/tours-es";
import { excursionesEs } from "@/data/excursiones-es";
import { specialOffersEs } from "@/data/specialOffers-es";

// ─────────────────────────────
// CONFIG
// ─────────────────────────────

const SITE_URL = "https://moroccan-trip.com";
const SITE_NAME = "Moroccan Trip";

// ─────────────────────────────
// TYPES
// ─────────────────────────────

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type RelatedCardProps = {
  href: string;
  title: string;
  description: string;
  image: string;
  badge?: string;
  meta?: string;
};

// ─────────────────────────────
// HELPERS
// ─────────────────────────────

function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("es-ES", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

function splitParagraphs(text: string) {
  return text
    .trim()
    .split(/\n\s*\n/)
    .map((paragraph) =>
      paragraph
        .replace(/\s+/g, " ")
        .trim()
    )
    .filter(Boolean);
}

function isDefined<T>(value: T | undefined): value is T {
  return value !== undefined;
}

function isSubsection(sectionId: string) {
  const seasonSections = [
    "primavera-marruecos",
    "verano-marruecos",
    "otono-marruecos",
    "invierno-marruecos",
  ];

  return (
    seasonSections.includes(sectionId) ||
    sectionId.startsWith("marruecos-")
  );
}

function jsonLdString(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

// ─────────────────────────────
// STATIC BLOG ROUTES
// ─────────────────────────────

export function generateStaticParams() {
  return blogPostsEs.map((post) => ({
    slug: post.slug,
  }));
}

// Because the blog comes from local static data,
// unknown slugs should return 404.

export const dynamicParams = false;

// ─────────────────────────────
// DYNAMIC SEO METADATA
// ─────────────────────────────

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = blogPostsEs.find(
    (blogPost) => blogPost.slug === slug
  );

  if (!post) {
    return {
      title: `Artículo no encontrado | ${SITE_NAME}`,
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalUrl = absoluteUrl(
    `/es/blog/${post.slug}`
  );

  const imageUrl = absoluteUrl(post.image);

  return {
    title: post.seo.title,

    description: post.seo.description,

    authors: [
      {
        name: post.author,
      },
    ],

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title: post.seo.title,
      description: post.seo.description,

      url: canonicalUrl,

      siteName: SITE_NAME,

      type: "article",

      publishedTime: post.publishedAt,

      modifiedTime:
        post.updatedAt ?? post.publishedAt,

      authors: [post.author],

      section: post.category,

      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: post.seo.title,
      description: post.seo.description,
      images: [imageUrl],
    },
  };
}

// ─────────────────────────────
// RELATED CARD
// ─────────────────────────────

function RelatedCard({
  href,
  title,
  description,
  image,
  badge,
  meta,
}: RelatedCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link
        href={href}
        className="relative block aspect-[16/10] overflow-hidden"
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {badge && (
          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-orange-700 shadow-sm backdrop-blur">
            {badge}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-6">
        {meta && (
          <p className="text-xs font-semibold uppercase tracking-wide text-orange-600">
            {meta}
          </p>
        )}

        <h3 className="mt-2 text-lg font-bold leading-snug text-slate-950">
          <Link
            href={href}
            className="transition hover:text-orange-600"
          >
            {title}
          </Link>
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">
          {description}
        </p>

        <div className="mt-auto pt-5">
          <Link
            href={href}
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-950 transition hover:text-orange-600"
          >
            Ver detalles

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
  );
}

// ─────────────────────────────
// PAGE
// ─────────────────────────────

export default async function BlogPostPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const post = blogPostsEs.find(
    (blogPost) => blogPost.slug === slug
  );

  if (!post) {
    notFound();
  }

  // ─────────────────────────────
  // RELATED TOURS
  // Preserve order from blog.ts
  // ─────────────────────────────

  const relatedTours =
    post.relatedTours
      ?.map((tourSlug) =>
        toursEs.find(
          (tour) => tour.slug === tourSlug
        )
      )
      .filter(isDefined) ?? [];

  // ─────────────────────────────
  // RELATED DAY TRIPS
  // ─────────────────────────────

  const relatedDayTrips =
    post.relatedDayTrips
      ?.map((excursionSlug) =>
        excursionesEs.find(
          (excursion) =>
            excursion.slug === excursionSlug
        )
      )
      .filter(isDefined) ?? [];

  // ─────────────────────────────
  // RELATED SPECIAL OFFERS
  // ─────────────────────────────

  const relatedSpecialOffers =
    post.relatedSpecialOffers
      ?.map((offerSlug) =>
        specialOffersEs.find(
          (offer) =>
            offer.slug === offerSlug
        )
      )
      .filter(isDefined) ?? [];

  // ─────────────────────────────
  // STRUCTURED DATA
  // ─────────────────────────────

  const articleUrl = absoluteUrl(
    `/es/blog/${post.slug}`
  );

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",

    headline: post.title,

    description: post.seo.description,

    image: [
      absoluteUrl(post.image),
    ],

    datePublished: post.publishedAt,

    dateModified:
      post.updatedAt ?? post.publishedAt,

    author: {
      "@type": "Organization",
      name: post.author,
      url: SITE_URL,
    },

    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },

    articleSection: post.category,

    url: articleUrl,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: absoluteUrl("/es"),
      },

      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: absoluteUrl("/es/blog"),
      },

      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: articleUrl,
      },
    ],
  };

  const faqJsonLd =
    post.faqs && post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",

          mainEntity: post.faqs.map(
            (faq) => ({
              "@type": "Question",

              name: faq.question,

              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })
          ),
        }
      : null;

  return (
    <>
      {/* ─────────────────────────────
          STRUCTURED DATA
      ───────────────────────────── */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            jsonLdString(articleJsonLd),
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

      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              jsonLdString(faqJsonLd),
          }}
        />
      )}

      <main className="bg-white">
        {/* ─────────────────────────────
            BREADCRUMB
        ───────────────────────────── */}

        <div className="border-b border-slate-100 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-sm text-slate-500"
            >
              <Link
                href="/es"
                className="transition hover:text-orange-600"
              >
                Inicio
              </Link>

              <span
                aria-hidden="true"
                className="text-slate-300"
              >
                /
              </span>

              <Link
                href="/es/blog"
                className="transition hover:text-orange-600"
              >
                Blog
              </Link>

              <span
                aria-hidden="true"
                className="text-slate-300"
              >
                /
              </span>

              <span className="max-w-[500px] truncate font-medium text-slate-700">
                {post.title}
              </span>
            </nav>
          </div>
        </div>

        {/* ─────────────────────────────
            ARTICLE HERO
        ───────────────────────────── */}

        <section className="bg-[#f7f4ee]">
          <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-4xl text-center">
              <span className="inline-flex rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-bold text-orange-700 shadow-sm">
                {post.category}
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                {post.title}
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                {post.excerpt}
              </p>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-slate-500">
                <span className="font-semibold text-slate-700">
                  {post.author}
                </span>

                <span aria-hidden="true">
                  •
                </span>

                <time
                  dateTime={
                    post.publishedAt
                  }
                >
                  {formatDate(
                    post.publishedAt
                  )}
                </time>

                <span aria-hidden="true">
                  •
                </span>

                <span>
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────
            MAIN IMAGE
        ───────────────────────────── */}

        <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
          <div className="relative aspect-[16/8] overflow-hidden rounded-[2rem] bg-slate-100 shadow-sm">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
            />
          </div>
        </section>

        {/* ─────────────────────────────
            MOBILE TABLE OF CONTENTS
        ───────────────────────────── */}

        <section className="mx-auto max-w-4xl px-6 pt-10 xl:hidden">
          <details className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <summary className="cursor-pointer font-bold text-slate-950">
              Tabla de contenidos
            </summary>

            <nav
              aria-label="Tabla de contenidos"
              className="mt-5 border-t border-slate-200 pt-4"
            >
              <ul className="space-y-2">
                {post.sections.map(
                  (section) => (
                    <li
                      key={section.id}
                      className={
                        isSubsection(
                          section.id
                        )
                          ? "pl-4"
                          : ""
                      }
                    >
                      <a
                        href={`#${section.id}`}
                        className="text-sm leading-6 text-slate-600 transition hover:text-orange-600"
                      >
                        {
                          section.heading
                        }
                      </a>
                    </li>
                  )
                )}

                {post.faqs &&
                  post.faqs.length >
                    0 && (
                    <li>
                      <a
                        href="#frequently-asked-questions"
                        className="text-sm leading-6 text-slate-600 transition hover:text-orange-600"
                      >
                        Preguntas frecuentes
                      </a>
                    </li>
                  )}
              </ul>
            </nav>
          </details>
        </section>

        {/* ─────────────────────────────
            ARTICLE + SIDEBAR
        ───────────────────────────── */}

        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-14 lg:px-8 xl:grid-cols-[minmax(0,800px)_280px] xl:justify-center xl:gap-20">
          {/* ARTICLE */}

          <article className="min-w-0">
            {/* INTRODUCTION */}

            <div className="border-b border-slate-200 pb-12">
              {splitParagraphs(
                post.introduction
              ).map(
                (
                  paragraph,
                  index
                ) => (
                  <p
                    key={index}
                    className={`leading-8 text-slate-700 ${
                      index === 0
                        ? "text-xl font-medium leading-9 text-slate-900"
                        : "mt-5 text-base sm:text-lg"
                    }`}
                  >
                    {paragraph}
                  </p>
                )
              )}
            </div>

            {/* CONTENT */}

            <div className="pt-4">
              {post.sections.map(
                (section) => {
                  const subsection =
                    isSubsection(
                      section.id
                    );

                  return (
                    <section
                      key={section.id}
                      id={section.id}
                      className="scroll-mt-28 border-b border-slate-100 py-10 last:border-b-0"
                    >
                      {subsection ? (
                        <h3 className="text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl">
                          {
                            section.heading
                          }
                        </h3>
                      ) : (
                        <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
                          {
                            section.heading
                          }
                        </h2>
                      )}

                      <div className="mt-6 space-y-5">
                        {section.paragraphs.map(
                          (
                            paragraph,
                            index
                          ) => (
                            <p
                              key={
                                index
                              }
                              className="text-base leading-8 text-slate-700 sm:text-[17px]"
                            >
                              {
                                paragraph
                              }
                            </p>
                          )
                        )}
                      </div>

                      {section.bullets &&
                        section
                          .bullets
                          .length >
                          0 && (
                          <ul className="mt-7 space-y-3 rounded-2xl bg-[#f7f4ee] p-6 sm:p-7">
                            {section.bullets.map(
                              (
                                bullet
                              ) => (
                                <li
                                  key={
                                    bullet
                                  }
                                  className="flex gap-3 text-sm leading-7 text-slate-700 sm:text-base"
                                >
                                  <span className="mt-2.5 flex h-2 w-2 shrink-0 rounded-full bg-orange-500" />

                                  <span>
                                    {
                                      bullet
                                    }
                                  </span>
                                </li>
                              )
                            )}
                          </ul>
                        )}
                    </section>
                  );
                }
              )}
            </div>

            {/* ─────────────────────────────
                FAQ
            ───────────────────────────── */}

            {post.faqs &&
              post.faqs.length > 0 && (
                <section
                  id="frequently-asked-questions"
                  className="scroll-mt-28 border-t border-slate-200 pt-14"
                >
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
                    Preguntas frecuentes
                  </p>

                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                    Preguntas frecuentes
                  </h2>

                  <div className="mt-8 space-y-4">
                    {post.faqs.map(
                      (
                        faq,
                        index
                      ) => (
                        <details
                          key={
                            faq.question
                          }
                          className="group rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
                          open={
                            index === 0
                          }
                        >
                          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold leading-7 text-slate-950">
                            <h3 className="text-base font-bold sm:text-lg">
                              {
                                faq.question
                              }
                            </h3>

                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-50 text-xl font-normal text-orange-600 transition group-open:rotate-45">
                              +
                            </span>
                          </summary>

                          <p className="mt-4 pr-8 text-sm leading-7 text-slate-600 sm:text-base">
                            {
                              faq.answer
                            }
                          </p>
                        </details>
                      )
                    )}
                  </div>
                </section>
              )}

            {/* BACK TO BLOG */}

            <div className="mt-14 border-t border-slate-200 pt-8">
              <Link
                href="/es/blog"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-950 transition hover:text-orange-600"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    d="M15.5 10h-11m0 0L9 5.5M4.5 10 9 14.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                Volver al blog de viajes de Marruecos
              </Link>
            </div>
          </article>

          {/* ─────────────────────────────
              DESKTOP TABLE OF CONTENTS
          ───────────────────────────── */}

          <aside className="hidden xl:block">
            <div className="sticky top-28">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="font-bold text-slate-950">
                  En esta página
                </p>

                <nav
                  aria-label="Tabla de contenidos"
                  className="mt-4 max-h-[65vh] overflow-y-auto border-t border-slate-100 pt-4 pr-2"
                >
                  <ul className="space-y-2.5">
                    {post.sections.map(
                      (section) => (
                        <li
                          key={
                            section.id
                          }
                          className={
                            isSubsection(
                              section.id
                            )
                              ? "pl-4"
                              : ""
                          }
                        >
                          <a
                            href={`#${section.id}`}
                            className={`block leading-5 transition hover:text-orange-600 ${
                              isSubsection(
                                section.id
                              )
                                ? "text-xs text-slate-500"
                                : "text-sm font-medium text-slate-700"
                            }`}
                          >
                            {
                              section.heading
                            }
                          </a>
                        </li>
                      )
                    )}

                    {post.faqs &&
                      post.faqs
                        .length >
                        0 && (
                        <li>
                          <a
                            href="#frequently-asked-questions"
                            className="block text-sm font-medium leading-5 text-slate-700 transition hover:text-orange-600"
                          >
                            Preguntas frecuentes
                          </a>
                        </li>
                      )}
                  </ul>
                </nav>
              </div>

              {/* SMALL CTA */}

              <div className="mt-5 rounded-2xl bg-slate-950 p-6 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-400">
                  Planifica tu viaje
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Descubre Marruecos
                  en privado
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Explora tours privados, rutas por el Sahara y excursiones por Marruecos.
                </p>

                <Link
                  href="/es/tours"
                  className="mt-5 inline-flex rounded-full bg-orange-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-orange-600"
                >
                  Explorar tours
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* ─────────────────────────────
            RELATED TOURS
        ───────────────────────────── */}

        {relatedTours.length > 0 && (
          <section className="border-t border-slate-100 bg-slate-50/70">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
                  Tours relacionados
                </p>

                <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Explora nuestros tours
                  en Marruecos
                </h2>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  Descubre viajes privados relacionados con esta guía de viaje.
                </p>
              </div>

              <div className="mt-9 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                {relatedTours.map(
                  (tour) => (
                    <RelatedCard
                      key={tour.slug}
                      href={`/es/tours/${tour.slug}`}
                      title={
                        tour.title
                      }
                      description={
                        tour.shortDescription
                      }
                      image={
                        tour.image
                      }
                      badge={
                        tour.badge
                      }
                      meta={`${tour.duration} · ${tour.category}`}
                    />
                  )
                )}
              </div>
            </div>
          </section>
        )}

        {/* ─────────────────────────────
            RELATED DAY TRIPS
        ───────────────────────────── */}

        {relatedDayTrips.length >
          0 && (
          <section className="border-t border-slate-100 bg-white">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
                  Desde Marrakech
                </p>

                <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Excursiones
                  relacionadas
                </h2>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  Añade montañas, valles, cascadas o paisajes desérticos a tu estancia en Marrakech.
                </p>
              </div>

              <div className="mt-9 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
                {relatedDayTrips.map(
                  (excursion) => (
                    <RelatedCard
                      key={
                        excursion.slug
                      }
                      href={`/es/excursiones/${excursion.slug}`}
                      title={
                        excursion.title
                      }
                      description={
                        excursion.shortDescription
                      }
                      image={
                        excursion.image
                      }
                      badge={
                        excursion.badge
                      }
                      meta={
                        excursion.duration
                      }
                    />
                  )
                )}
              </div>
            </div>
          </section>
        )}

        {/* ─────────────────────────────
            RELATED SPECIAL OFFERS
        ───────────────────────────── */}

        {relatedSpecialOffers.length >
          0 && (
          <section className="border-t border-slate-100 bg-[#f7f4ee]">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
                  Experiencias
                  especiales
                </p>

                <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Ofertas especiales
                  en Marruecos
                </h2>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  Explora experiencias personalizables en Marruecos según tu estilo de viaje.
                </p>
              </div>

              <div className="mt-9 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                {relatedSpecialOffers.map(
                  (offer) => (
                    <RelatedCard
                      key={
                        offer.slug
                      }
                      href={`/es/ofertas-especiales/${offer.slug}`}
                      title={
                        offer.title
                      }
                      description={
                        offer.shortDescription
                      }
                      image={
                        offer.image
                      }
                      badge={
                        offer.badge
                      }
                      meta={
                        offer.category
                      }
                    />
                  )
                )}
              </div>
            </div>
          </section>
        )}

        {/* ─────────────────────────────
            FINAL CTA
        ───────────────────────────── */}

        <section className="px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-12 sm:px-10 sm:py-14 lg:px-14">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-400">
                  Moroccan Trip
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  ¿Listo para planificar
                  tu viaje a Marruecos?
                </h2>

                <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
                  Descubre tours privados por Marruecos, rutas por el Sahara, excursiones de montaña y experiencias personalizables.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/es/tours"
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-orange-600"
                >
                  Explorar tours
                </Link>

                <Link
                  href="/es/contacto"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Contáctanos
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}