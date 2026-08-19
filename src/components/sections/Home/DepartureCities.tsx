import Image from "next/image";
import Link from "next/link";

const destinations = [
  {
    city: "Marrakech",
    tours: 13,
    image: "/images/marrakech.jpg",
    description: "Desert adventures, Atlas Mountains & southern Morocco",
    href: "/tours/from-marrakech",
  },
  {
    city: "Fes",
    tours: 12,
    image: "/images/fes.jpg",
    description: "Imperial cities, culture & authentic Moroccan experiences",
    href: "/tours/from-fes",
  },
  {
    city: "Casablanca",
    tours: 10,
    image: "/images/casablanca.jpg",
    description: "Atlantic coast, Rabat & journeys across Morocco",
    href: "/tours/from-casablanca",
  },
  {
    city: "Tangier",
    tours: 6,
    image: "/images/tangier.jpg",
    description: "Northern Morocco, Chefchaouen & Mediterranean escapes",
    href: "/tours/from-tangier",
  },
];

export default function DepartureCities() {
  return (
    <section className="bg-[hsl(var(--background))] px-5 py-20 sm:px-8 lg:px-10 lg:py-15">
      <div className="mx-auto max-w-[1280px]">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-[720px] text-center lg:mb-16">

          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[hsl(var(--primary))]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[hsl(var(--primary))]">
              Start Your Journey
            </span>

            <span className="h-px w-8 bg-[hsl(var(--primary))]" />
          </div>

          <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.5rem,5vw,4.2rem)] font-semibold leading-[0.95] tracking-[-0.035em] text-[hsl(var(--heading))]">
            Explore Morocco by
            <span className="text-[hsl(var(--primary))]"> Departure City</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[580px] text-sm leading-7 text-[hsl(var(--text-secondary))] sm:text-base">
            Choose where your journey begins and discover carefully crafted
            private tours designed to show you the very best of Morocco.
          </p>

        </div>

        {/* Destination Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {destinations.map((destination) => (
            <Link
              key={destination.city}
              href={destination.href}
              className="group relative h-[430px] overflow-hidden rounded-[24px] bg-[hsl(var(--secondary))] shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            >

              {/* Image */}
              <Image
                src={destination.image}
                alt={`${destination.city} Morocco tours`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Base Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5" />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[hsl(var(--primary)/0.08)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Tour Count */}
              <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 backdrop-blur-md">
                <span className="text-[11px] font-semibold tracking-wide text-white">
                  {destination.tours} tours
                </span>
              </div>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6">

                <div className="mb-3 flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-sm">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="text-white"
                    >
                      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                    From
                  </span>
                </div>

                <h3 className="font-[family-name:var(--font-cormorant)] text-[34px] font-semibold leading-none tracking-[-0.02em] text-white">
                  {destination.city}
                </h3>

                <p className="mt-3 max-w-[260px] text-[12px] leading-5 text-white/65">
                  {destination.description}
                </p>

                {/* Explore Link */}
                <div className="mt-5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--gold-muted))] transition-all duration-300 group-hover:gap-3">
                  Explore tours

                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </div>

              </div>
            </Link>
          ))}

        </div>

        {/* Bottom Link */}
        <div className="mt-10 text-center">
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 text-sm font-bold text-[hsl(var(--heading))] transition-colors hover:text-[hsl(var(--primary))]"
          >
            View all Morocco tours

            <span className="text-[hsl(var(--primary))]">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}