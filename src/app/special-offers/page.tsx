import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { specialOffers } from "@/data/specialOffers";


export const metadata: Metadata = {
  title: "Morocco Travel Offers | Special Tour Packages & Experiences",
  description:
    "Discover special Morocco travel offers including desert adventures, private experiences, family packages and unique journeys designed for different travel styles.",
  alternates: {
    canonical: "/special-offers",
  },
};


export default function SpecialOffersPage() {
  return (
    <main className="min-h-screen bg-[hsl(var(--background))]">


      {/* HERO */}

      <section className="border-b border-[hsl(var(--border))]">

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

          <div className="max-w-3xl">

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[hsl(var(--primary))]">
              Curated Morocco Experiences
            </p>


            <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[hsl(var(--heading))] sm:text-5xl lg:text-6xl">
              Special Morocco Travel Offers
            </h1>


            <p className="mt-6 max-w-2xl text-base leading-8 text-[hsl(var(--text-secondary))] sm:text-lg">

              Explore carefully designed Morocco travel packages created for
              different types of travelers. From desert adventures to private
              experiences, discover unique journeys with flexible options and
              personalized service.

            </p>

          </div>

        </div>

      </section>



      {/* OFFERS GRID */}


      <section className="bg-[hsl(var(--surface-soft))]">

        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">


          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--primary))]">
                Our Offers
              </p>


              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[hsl(var(--heading))] sm:text-4xl">
                Choose your Morocco experience
              </h2>

            </div>


            <p className="text-sm text-[hsl(var(--text-muted))]">
              {specialOffers.length}{" "}
              {specialOffers.length === 1
                ? "offer"
                : "offers"}
            </p>


          </div>




          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">


            {specialOffers.map((offer) => (

              <article
                key={offer.id}
                className="
                group
                overflow-hidden
                rounded-[30px]
                border
                border-[hsl(var(--border))]
                bg-[hsl(var(--card))]
                shadow-[0_6px_30px_rgba(0,0,0,0.05)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)]
                "
              >


                {/* IMAGE */}


                <Link
                  href={`/special-offers/${offer.slug}`}
                  className="relative block aspect-[4/3] overflow-hidden"
                >

                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    sizes="(max-width:768px)100vw,(max-width:1280px)50vw,33vw"
                    className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-[1.05]
                    "
                  />


                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />


                  {offer.badge && (

                    <span
                      className="
                      absolute
                      left-5
                      top-5
                      rounded-full
                      bg-white/95
                      px-4
                      py-2
                      text-xs
                      font-bold
                      text-[hsl(var(--heading))]
                      shadow-sm
                      "
                    >
                      {offer.badge}
                    </span>

                  )}


                </Link>




                {/* CONTENT */}


                <div className="p-6">


                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[hsl(var(--primary))]">

                    {offer.category}

                  </p>



                  <Link href={`/special-offers/${offer.slug}`}>

                    <h2
                      className="
                      mt-3
                      text-2xl
                      font-semibold
                      leading-tight
                      tracking-[-0.025em]
                      text-[hsl(var(--heading))]
                      transition-colors
                      group-hover:text-[hsl(var(--primary))]
                      "
                    >

                      {offer.title}

                    </h2>

                  </Link>




                  <p className="mt-4 text-sm leading-7 text-[hsl(var(--text-secondary))]">

                    {offer.shortDescription}

                  </p>




                  {/* QUICK INFO */}


                  <div
                    className="
                    mt-6
                    grid
                    grid-cols-2
                    gap-4
                    border-y
                    border-[hsl(var(--border))]
                    py-5
                    "
                  >


                    <div>

                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[hsl(var(--text-muted))]">
                        Duration
                      </p>

                      <p className="mt-1 text-sm font-semibold text-[hsl(var(--heading))]">
                        {offer.duration}
                      </p>

                    </div>



                    <div>

                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[hsl(var(--text-muted))]">
                        Designed For
                      </p>

                      <p className="mt-1 line-clamp-2 text-sm font-semibold text-[hsl(var(--heading))]">
                        {offer.targetAudience}
                      </p>

                    </div>


                  </div>




                  <Link
                    href={`/special-offers/${offer.slug}`}
                    className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-bold
                    text-[hsl(var(--primary))]
                    hover:text-[hsl(var(--primary-hover))]
                    "
                  >

                    View Package

                    <span aria-hidden="true">
                      →
                    </span>


                  </Link>



                </div>


              </article>


            ))}


          </div>


        </div>


      </section>




      {/* CTA */}


      <section className="bg-[hsl(var(--surface-soft))] pb-16 lg:pb-20">


        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">


          <div
            className="
            overflow-hidden
            rounded-[32px]
            bg-[hsl(var(--secondary))]
            px-6
            py-10
            sm:px-10
            sm:py-12
            lg:px-14
            "
          >

            <div className="max-w-2xl">


              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--primary))]">
                Private & Flexible
              </p>


              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[hsl(var(--secondary-foreground))] sm:text-4xl">

                Looking for a custom Morocco experience?

              </h2>


              <p className="mt-5 text-sm leading-7 text-[hsl(var(--footer-muted))] sm:text-base">

                Tell us your travel plans and we can create a private itinerary
                designed around your interests, dates and preferred travel style.

              </p>



              <Link
                href="/contact"
                className="
                mt-7
                inline-flex
                h-12
                items-center
                rounded-full
                bg-[hsl(var(--primary))]
                px-7
                text-sm
                font-bold
                text-white
                transition-all
                hover:-translate-y-0.5
                "
              >

                Plan Your Trip

              </Link>


            </div>


          </div>


        </div>


      </section>


    </main>
  );
}