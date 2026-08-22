import Image from "next/image";
import Link from "next/link";
import { specialOffers } from "@/data/specialOffers";


const featuredOffers = [
  "morocco-desert-tour",
  "morocco-honeymoon-package",
  "morocco-family-tours",
];


export default function SpecialOffers() {


  const offers = featuredOffers
    .map((slug) =>
      specialOffers.find((offer) => offer.slug === slug)
    )
    .filter(Boolean);



  return (

    <section className="bg-[hsl(var(--secondary))]">


      <div
        className="
        mx-auto
        max-w-7xl
        px-5
        py-20
        sm:px-8
        lg:px-10
        lg:py-24
        "
      >


        {/* Header */}

        <div className="max-w-3xl">


          <p
            className="
            text-xs
            font-bold
            uppercase
            tracking-[0.25em]
            text-[hsl(var(--gold))]
            "
          >
            Special Offers
          </p>



          <h2
            className="
            mt-4
            text-4xl
            font-semibold
            leading-tight
            text-white
            sm:text-5xl
            "
          >
            Private Morocco Journeys
          </h2>



          <p
            className="
            mt-5
            text-base
            leading-8
            text-white/70
            "
          >
            Discover carefully designed Morocco experiences
            created for couples, families and travelers
            looking for unforgettable journeys.
          </p>


        </div>



        {/* Offers Grid */}


        <div
          className="
          mt-14
          grid
          gap-8

          md:grid-cols-3
          "
        >



          {offers.map((offer) => (

            <article
              key={offer!.id}
              className="
              group
              relative
              overflow-hidden
              rounded-[28px]
              "
            >


              <Link
                href={`/special-offers/${offer!.slug}`}
              >


                <div
                  className="
                  relative
                  aspect-[4/5]
                  "
                >


                  <Image
                    src={offer!.image}
                    alt={offer!.title}
                    fill
                    sizes="
                    (max-width:768px) 100vw,
                    33vw
                    "
                    className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                    "
                  />



                  {/* Overlay */}

                  <div
                    className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/90
                    via-black/40
                    to-transparent
                    "
                  />



                  {/* Badge */}

                  {offer!.badge && (

                    <span
                      className="
                      absolute
                      left-6
                      top-6
                      rounded-full
                      bg-[hsl(var(--primary))]
                      px-4
                      py-2
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-wider
                      text-white
                      "
                    >
                      {offer!.badge}
                    </span>

                  )}




                  {/* Content */}

                  <div
                    className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-7
                    "
                  >


                    <h3
                      className="
                      text-2xl
                      font-semibold
                      leading-tight
                      text-white
                      "
                    >
                      {offer!.title}
                    </h3>



                    <p
                      className="
                      mt-3
                      line-clamp-2
                      text-sm
                      leading-6
                      text-white/80
                      "
                    >
                      {offer!.shortDescription}
                    </p>



                    <div
                      className="
                      mt-5
                      flex
                      items-center
                      gap-2
                      text-sm
                      font-bold
                      text-[hsl(var(--gold-muted))]
                      "
                    >
                      Explore Offer

                      <span>
                        →
                      </span>

                    </div>


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