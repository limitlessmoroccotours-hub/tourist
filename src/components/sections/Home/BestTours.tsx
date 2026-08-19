import Image from "next/image";
import Link from "next/link";

const tours = [
  {
    title: "3-Day Marrakech Desert Tour to Merzouga",
    slug: "/tours/3-day-marrakech-desert-tour-to-merzouga",
    image: "/images/tours/marrakech-merzouga-3-days.jpg",
    badge: "Most Popular",
    duration: "3 Days / 2 Nights",
    from: "Marrakech",
    destination: "Merzouga",
    description:
      "Cross the Atlas Mountains, explore the Dades Valley and experience a magical night beneath the Sahara stars.",
  },
  {
    title: "4-Day Marrakech to Fes Desert Tour",
    slug: "/tours/4-day-marrakech-to-fes-desert-tour",
    image: "/images/tours/marrakech-fes-desert.jpg",
    badge: "Trending",
    duration: "4 Days / 3 Nights",
    from: "Marrakech",
    destination: "Fes",
    description:
      "A complete journey through the desert, ancient kasbahs and the spectacular landscapes of southern Morocco.",
  },
  {
    title: "14-Day Grand Morocco Tour from Casablanca",
    slug: "/tours/14-day-grand-morocco-tour",
    image: "/images/tours/grand-morocco-tour.jpg",
    badge: "Best Seller",
    duration: "14 Days / 13 Nights",
    from: "Casablanca",
    destination: "Morocco",
    description:
      "Discover Morocco's imperial cities, Atlantic coast, Sahara Desert and mountain landscapes in one unforgettable journey.",
  },
  {
    title: "12-Day Grand Morocco Adventure Tour",
    slug: "/tours/12-day-grand-morocco-adventure-tour",
    image: "/images/tours/grand-morocco-adventure.jpg",
    badge: "Top Rated",
    duration: "12 Days / 11 Nights",
    from: "Casablanca",
    destination: "Morocco",
    description:
      "Experience the best of Morocco from north to south with carefully selected stays and authentic local experiences.",
  },
  {
    title: "7-Day Sahara Desert Tour from Fes to Marrakech",
    slug: "/tours/7-day-sahara-desert-tour-fes-marrakech",
    image: "/images/tours/fes-marrakech-sahara.jpg",
    badge: "Guest Favorite",
    duration: "7 Days / 6 Nights",
    from: "Fes",
    destination: "Marrakech",
    description:
      "Journey from Fes through the Middle Atlas and Sahara Desert before finishing in vibrant Marrakech.",
  },
  {
    title: "8-Day Morocco Imperial Cities & Sahara Tour",
    slug: "/tours/8-day-morocco-imperial-cities-sahara",
    image: "/images/tours/imperial-cities-sahara.jpg",
    badge: "Recommended",
    duration: "8 Days / 7 Nights",
    from: "Marrakech",
    destination: "Fes",
    description:
      "Combine Morocco's historic cities with the landscapes, culture and unforgettable atmosphere of the Sahara.",
  },
];

function ArrowIcon() {
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
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      width="14"
      height="14"
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

function CalendarIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h18" />
    </svg>
  );
}

export default function BestTours() {
  return (
    <section className="bg-[hsl(var(--surface-soft))] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1280px]">

        {/* Section Header */}
        <div className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">

          <div className="max-w-[700px]">

            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-[hsl(var(--primary))]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[hsl(var(--primary))]">
                Handpicked Journeys
              </span>
            </div>

            <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.7rem,5vw,4.5rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-[hsl(var(--heading))]">
              Our Best Morocco Tours
            </h2>

            <p className="mt-5 max-w-[620px] text-sm leading-7 text-[hsl(var(--text-secondary))] sm:text-base">
              Explore our most loved journeys across Morocco, from
              unforgettable Sahara adventures to immersive private
              tours through the country's most remarkable cities.
            </p>

          </div>

          {/* View All */}
          <Link
            href="/tours"
            className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[hsl(var(--heading))] transition-all duration-300 hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] lg:self-end"
          >
            View All Tours
            <ArrowIcon />
          </Link>

        </div>

        {/* Tours Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {tours.map((tour) => (
            <article
              key={tour.slug}
              className="group overflow-hidden rounded-[24px] border border-[hsl(var(--border))] bg-[hsl(var(--card))] shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            >

              {/* Image */}
              <Link
                href={tour.slug}
                className="relative block aspect-[16/10] overflow-hidden"
              >
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Image Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

                {/* Badge */}
                <div className="absolute left-4 top-4">
                  <span className="inline-flex rounded-full border border-white/20 bg-black/25 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                    {tour.badge}
                  </span>
                </div>

                {/* Arrow */}
                <div className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white/95 text-[hsl(var(--heading))] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowIcon />
                </div>
              </Link>

              {/* Content */}
              <div className="p-5 sm:p-6">

                <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-[hsl(var(--text-muted))]">

                  <span className="inline-flex items-center gap-1.5">
                    <CalendarIcon />
                    {tour.duration}
                  </span>

                  <span className="h-3 w-px bg-[hsl(var(--border))]" />

                  <span className="inline-flex items-center gap-1.5">
                    <LocationIcon />
                    From {tour.from}
                  </span>

                </div>

                <Link href={tour.slug}>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-[26px] font-semibold leading-[1.05] tracking-[-0.02em] text-[hsl(var(--heading))] transition-colors duration-300 group-hover:text-[hsl(var(--primary))]">
                    {tour.title}
                  </h3>
                </Link>

                <p className="mt-3 line-clamp-2 text-[13px] leading-6 text-[hsl(var(--text-secondary))]">
                  {tour.description}
                </p>

                {/* Destination */}
                <div className="mt-5 flex items-center justify-between border-t border-[hsl(var(--border))] pt-4">

                  <div>
                    <span className="block text-[9px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--text-muted))]">
                      Journey
                    </span>

                    <span className="mt-1 block text-xs font-semibold text-[hsl(var(--heading))]">
                      {tour.from} → {tour.destination}
                    </span>
                  </div>

                  <Link
                    href={tour.slug}
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[hsl(var(--primary))] transition-all duration-300 group-hover:gap-2.5"
                  >
                    Explore
                    <ArrowIcon />
                  </Link>

                </div>

              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}