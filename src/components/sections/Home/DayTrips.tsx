import Image from "next/image";
import Link from "next/link";
import { dayTrips } from "@/data/dayTrips";


const featuredDayTrips = [
  "agafay-desert-day-trip-from-marrakech",
  "ourika-valley-day-trip-from-marrakech",
  "ouzoud-waterfalls-day-trip-from-marrakech",
];


export default function DayTrips() {


  const trips = featuredDayTrips
    .map((slug) =>
      dayTrips.find((trip) => trip.slug === slug)
    )
    .filter(Boolean);



  return (

    <section
      className="
      bg-[hsl(var(--background))]
      "
    >


      <div
        className="
        mx-auto
        max-w-7xl
        px-5
        py-16

        sm:px-8
        lg:px-10
        lg:py-20
        "
      >


        {/* Header */}

        <div
          className="
          flex
          flex-col
          gap-5

          sm:flex-row
          sm:items-end
          sm:justify-between
          "
        >


          <div
            className="
            max-w-3xl
            "
          >


            <p
              className="
              mb-3
              text-xs
              font-bold
              uppercase
              tracking-[0.25em]
              text-[hsl(var(--primary))]
              "
            >
              Day Trips From Marrakech
            </p>



            <h2
              className="
              text-4xl
              font-semibold
              tracking-tight
              text-[hsl(var(--heading))]

              sm:text-5xl
              "
            >
              Discover Morocco Beyond The City
            </h2>



            <p
              className="
              mt-5
              text-base
              leading-7
              text-[hsl(var(--text-secondary))]
              "
            >
              Explore the Atlas Mountains, desert landscapes
              and natural wonders of Morocco with private
              day experiences from Marrakech.
            </p>


          </div>



          <Link
            href="/day-trips"
            className="
            inline-flex
            w-fit
            items-center
            rounded-full
            border
            border-[hsl(var(--primary))]
            px-6
            py-3
            text-sm
            font-semibold
            text-[hsl(var(--primary))]

            transition

            hover:bg-[hsl(var(--primary))]
            hover:text-white
            "
          >
            View All Day Trips
          </Link>


        </div>




        {/* Cards */}

        <div
          className="
          mt-12
          grid
          gap-8

          md:grid-cols-3
          "
        >


          {trips.map((trip)=> (


            <article
              key={trip!.id}
              className="
              group
              overflow-hidden
              rounded-3xl
              border
              border-[hsl(var(--border))]
              bg-[hsl(var(--card))]

              transition
              duration-300

              hover:-translate-y-1
              hover:shadow-xl
              "
            >


              <Link
                href={`/day-trips/${trip!.slug}`}
              >



                {/* Image */}

                <div
                  className="
                  relative
                  aspect-[4/3]
                  overflow-hidden
                  "
                >


                  <Image
                    src={trip!.image}
                    alt={trip!.title}
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



                  {trip!.badge && (

                    <span
                      className="
                      absolute
                      left-5
                      top-5
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
                      {trip!.badge}
                    </span>

                  )}


                </div>




                {/* Content */}

                <div
                  className="
                  p-6
                  "
                >



                  <p
                    className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wide
                    text-[hsl(var(--primary))]
                    "
                  >
                    {trip!.category}
                  </p>




                  <h3
                    className="
                    mt-3
                    text-2xl
                    font-semibold
                    leading-tight
                    text-[hsl(var(--heading))]
                    "
                  >
                    {trip!.title
                      .split("|")[0]
                      .trim()
                    }
                  </h3>




                  <p
                    className="
                    mt-4
                    line-clamp-3
                    text-sm
                    leading-6
                    text-[hsl(var(--text-secondary))]
                    "
                  >
                    {trip!.shortDescription}
                  </p>




                  <div
                    className="
                    mt-6
                    flex
                    items-center
                    justify-between
                    border-t
                    border-[hsl(var(--border))]
                    pt-4
                    "
                  >


                    <span
                      className="
                      text-sm
                      text-[hsl(var(--text-muted))]
                      "
                    >
                      {trip!.duration}
                    </span>



                    <span
                      className="
                      text-sm
                      font-bold
                      text-[hsl(var(--primary))]
                      "
                    >
                      Explore →
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