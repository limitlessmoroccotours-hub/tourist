import Image from "next/image";
import Link from "next/link";
import { tours } from "@/data/tours";

const featuredTourSlugs = [
  "3-day-desert-tour-marrakech-merzouga",
  "4-day-sahara-desert-tour-from-marrakech",
  "7-day-morocco-imperial-cities-tour",
  "10-day-morocco-tour-from-casablanca",
];

export default function FeaturedTours() {
  const featuredTours = featuredTourSlugs
    .map((slug) => tours.find((tour) => tour.slug === slug))
    .filter(Boolean);

  return (
    <section className="border-b border-[hsl(var(--border))]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[hsl(var(--primary))]">
              Explore Morocco
            </p>

            <h2 className="text-3xl font-semibold tracking-[-0.025em] text-[hsl(var(--heading))] sm:text-4xl">
              Featured Morocco Tours
            </h2>

            <p className="mt-4 text-base leading-7 text-[hsl(var(--text-secondary))]">
              Discover our most popular private Morocco tours, including Sahara
              Desert adventures, cultural journeys and customizable itineraries.
            </p>
          </div>


          <Link
            href="/tours"
            className="inline-flex w-fit items-center rounded-full bg-[hsl(var(--primary))] px-5 py-3 text-sm font-semibold text-[hsl(var(--primary-foreground))]"
          >
            View All Tours
          </Link>

        </div>


        {/* Cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

          {featuredTours.map((tour) => (

            <article
              key={tour!.id}
              className="group overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] transition-all duration-300 hover:-translate-y-1"
            >

              <Link href={`/tours/${tour!.slug}`}>

                <div className="relative aspect-[4/3] overflow-hidden">

                  <Image
                    src={tour!.image}
                    alt={tour!.title}
                    fill
                    sizes="(max-width:768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />


                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />


                  {tour!.badge && (
                    <span className="absolute left-4 top-4 rounded-full bg-[hsl(var(--primary))] px-3 py-1 text-[10px] font-bold uppercase text-[hsl(var(--primary-foreground))]">
                      {tour!.badge}
                    </span>
                  )}

                </div>


                <div className="p-5">

                  <p className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--primary))]">
                    {tour!.departure} → {tour!.arrival}
                  </p>


                  <h3 className="mt-3 text-xl font-semibold leading-tight text-[hsl(var(--heading))]">
                    {tour!.title}
                  </h3>


                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-[hsl(var(--text-secondary))]">
                    {tour!.shortDescription}
                  </p>


                  <div className="mt-5 flex items-center justify-between border-t border-[hsl(var(--border))] pt-4">

                    <span className="text-sm text-[hsl(var(--text-muted))]">
                      {tour!.duration}
                    </span>


                    <span className="text-sm font-semibold text-[hsl(var(--primary))]">
                      View Tour →
                    </span>

                  </div>

                </div>

              </Link>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}