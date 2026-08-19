import Image from "next/image";
import Link from "next/link";
import { tours } from "@/data/tours";

const departureContent = [
  {
    city: "Marrakech",
    slug: "marrakech",
    label: "Marrakech Tours",
    title: "Private Tours from Marrakech",
    description:
      "Start your journey in Marrakech and explore the Sahara, ancient kasbahs, mountain valleys and some of Morocco's most memorable destinations.",
  },
  {
    city: "Casablanca",
    slug: "casablanca",
    label: "Casablanca Tours",
    title: "Private Tours from Casablanca",
    description:
      "Discover Morocco from Casablanca with private journeys through imperial cities, cultural landmarks, the Sahara and destinations across the country.",
  },
  {
    city: "Fes",
    slug: "fes",
    label: "Fes Tours",
    title: "Private Tours from Fes",
    description:
      "Travel from Fes toward Merzouga, the Sahara, Marrakech and other parts of Morocco on private itineraries designed around your travel plans.",
  },
  {
    city: "Tangier",
    slug: "tangier",
    label: "Tangier Tours",
    title: "Private Tours from Tangier",
    description:
      "Begin in northern Morocco with private tours from Tangier to Chefchaouen, Fes, the Sahara, Marrakech and other destinations.",
  },
  {
    city: "Agadir",
    slug: "agadir",
    label: "Agadir Tours",
    title: "Tours & Surf Packages from Agadir",
    description:
      "Explore Morocco from Agadir with private desert journeys and Atlantic coast experiences, including Taghazout, Tamraght, Imsouane and surf packages.",
  },
  {
    city: "Errachidia",
    slug: "errachidia",
    label: "Errachidia Tours",
    title: "Private Tours from Errachidia",
    description:
      "Start closer to the Sahara with private tours from Errachidia through the Ziz Valley, Erfoud, Merzouga and the landscapes of southeastern Morocco.",
  },
];

export default function ToursPage() {
  const activeDepartureSections = departureContent
    .map((section) => ({
      ...section,
      tours: tours.filter(
        (tour) =>
          tour.departure.trim().toLowerCase() ===
          section.city.trim().toLowerCase()
      ),
    }))
    .filter((section) => section.tours.length > 0);

  return (
    <main className="min-h-screen bg-[hsl(var(--background))]">
      {/* ───────────────────────────── */}
      {/* HERO */}
      {/* ───────────────────────────── */}

      <section className="border-b border-[hsl(var(--border))]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[hsl(var(--primary))]">
              Explore Morocco
            </p>

            <h1 className="text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-[hsl(var(--heading))] sm:text-5xl lg:text-6xl">
              Private Morocco Tours by Departure City
            </h1>

            <p className="mt-6 max-w-2xl text-[17px] leading-8 text-[hsl(var(--heading))] opacity-75 sm:text-lg">
              Choose where your Morocco journey begins and explore private tours
              from Marrakech, Casablanca, Fes, Tangier, Agadir and Errachidia.
              Every itinerary can be customized around your travel plans.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-[hsl(var(--heading))] opacity-65">
              <span>
                <strong className="font-bold text-[hsl(var(--heading))]">
                  {tours.length}
                </strong>{" "}
                tours & experiences
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-[hsl(var(--heading))] opacity-30 sm:block" />

              <span>Private & customizable</span>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────── */}
      {/* DEPARTURE NAVIGATION */}
      {/* ───────────────────────────── */}

      <section className="border-b border-[hsl(var(--border))] bg-[hsl(var(--card))]">
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8 lg:px-10">
          <div className="flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {activeDepartureSections.map((section) => (
              <a
                key={section.slug}
                href={`#${section.slug}`}
                className="shrink-0 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-5 py-2.5 text-sm font-bold text-[hsl(var(--heading))] transition-all duration-200 hover:border-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--primary-foreground))]"
              >
                {section.city}

                <span className="ml-2 text-xs font-semibold opacity-60">
                  {section.tours.length}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────── */}
      {/* DEPARTURE SECTIONS */}
      {/* ───────────────────────────── */}

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="space-y-24 lg:space-y-28">
          {activeDepartureSections.map((section) => (
            <section
              key={section.slug}
              id={section.slug}
              className="scroll-mt-28"
            >
              {/* Section heading */}

              <div className="mb-10 flex flex-col gap-5 border-b border-[hsl(var(--border))] pb-8 sm:flex-row sm:items-end sm:justify-between">
                <div className="max-w-2xl">
                  <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-[hsl(var(--primary))]">
                    {section.label}
                  </p>

                  <h2 className="text-3xl font-semibold leading-tight tracking-[-0.025em] text-[hsl(var(--heading))] sm:text-4xl">
                    {section.title}
                  </h2>

                  <p className="mt-4 max-w-2xl text-base leading-7 text-[hsl(var(--heading))] opacity-72">
                    {section.description}
                  </p>
                </div>

                <div className="shrink-0">
                  <p className="text-sm font-medium text-[hsl(var(--heading))] opacity-65">
                    <span className="font-bold text-[hsl(var(--heading))] opacity-100">
                      {section.tours.length}
                    </span>{" "}
                    {section.tours.length === 1 ? "tour" : "tours"} available
                  </p>
                </div>
              </div>

              {/* ───────────────────────────── */}
              {/* TOUR GRID */}
              {/* ───────────────────────────── */}

              <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {section.tours.map((tour) => (
                  <article
                    key={tour.id}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] shadow-[0_8px_30px_rgba(16,24,48,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(16,24,48,0.10)]"
                  >
                    {/* ───────────────────────────── */}
                    {/* IMAGE */}
                    {/* ───────────────────────────── */}

                    <Link
                      href={`/tours/${tour.slug}`}
                      className="relative block shrink-0 overflow-hidden"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={tour.image}
                          alt={tour.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

                        {/* Badge */}

                        {tour.badge && (
                          <div className="absolute left-4 top-4">
                            <span className="inline-flex rounded-full bg-[hsl(var(--primary))] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.07em] text-[hsl(var(--primary-foreground))] shadow-sm">
                              {tour.badge}
                            </span>
                          </div>
                        )}
                      </div>
                    </Link>

                    {/* ───────────────────────────── */}
                    {/* CONTENT */}
                    {/* ───────────────────────────── */}

                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      {/* Route */}

                      <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[hsl(var(--primary))]">
                        <span>{tour.departure}</span>

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

                        <span>{tour.arrival}</span>
                      </div>

                      {/* Title */}

                      <h3 className="text-[1.35rem] font-semibold leading-[1.35] tracking-[-0.012em] text-[hsl(var(--heading))]">
                        <Link
                          href={`/tours/${tour.slug}`}
                          className="transition-colors duration-200 hover:text-[hsl(var(--primary))]"
                        >
                          {tour.title}
                        </Link>
                      </h3>

                      {/* Description */}

                      <p className="mt-3 line-clamp-3 text-[15px] leading-[1.7] text-[hsl(var(--heading))] opacity-75">
                        {tour.shortDescription}
                      </p>

                      {/* ───────────────────────────── */}
                      {/* TOUR DETAILS */}
                      {/* ───────────────────────────── */}

                      <div className="mt-6 grid grid-cols-2 gap-5 border-t border-[hsl(var(--border))] pt-5">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.08em] text-[hsl(var(--heading))] opacity-55">
                            Duration
                          </p>

                          <p className="mt-1.5 text-[15px] font-semibold leading-5 text-[hsl(var(--heading))]">
                            {tour.duration}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.08em] text-[hsl(var(--heading))] opacity-55">
                            Tour Type
                          </p>

                          <p className="mt-1.5 text-[15px] font-semibold leading-5 text-[hsl(var(--heading))]">
                            {tour.tourType}
                          </p>
                        </div>
                      </div>

                      {/* ───────────────────────────── */}
                      {/* FOOTER */}
                      {/* ───────────────────────────── */}

                      <div className="mt-auto flex items-center justify-between gap-4 pt-6">
                        <div className="text-sm font-medium text-[hsl(var(--heading))] opacity-65">
                          {tour.nights}{" "}
                          {tour.nights === 1 ? "night" : "nights"}
                        </div>

                        <Link
                          href={`/tours/${tour.slug}`}
                          className="group/button inline-flex shrink-0 items-center gap-2 rounded-full bg-[hsl(var(--primary))] px-5 py-2.5 text-sm font-bold text-[hsl(var(--primary-foreground))] transition-all duration-200 hover:bg-[hsl(var(--primary-hover))]"
                        >
                          View Tour

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
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}