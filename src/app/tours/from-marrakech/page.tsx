import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { tours } from "@/data/tours";


const SITE_URL = "https://moroccan-trip.com";



export const metadata: Metadata = {

  title:
    "Marrakech Desert Tours | Private Sahara Tours from Marrakech",

  description:
    "Discover Marrakech desert tours including Sahara Desert adventures, Merzouga trips and private Morocco experiences starting from Marrakech.",

  alternates: {
    canonical:
      `${SITE_URL}/tours/from-marrakech`,
  },

  openGraph: {

    title:
      "Marrakech Desert Tours | Private Sahara Tours from Marrakech",

    description:
      "Explore private desert tours from Marrakech to the Sahara, Atlas Mountains and Morocco's most beautiful destinations.",

    url:
      `${SITE_URL}/tours/from-marrakech`,

    siteName:
      "Moroccan Trip",

    type:
      "website",

  },

};





export default function ToursFromMarrakechPage() {


  const marrakechTours =
    tours.filter(
      (tour) =>
        tour.departure === "Marrakech"
    );




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
        name: "Tours",
        item:
          `${SITE_URL}/tours`,
      },

      {
        "@type": "ListItem",
        position: 3,
        name:
          "Marrakech Desert Tours",
        item:
          `${SITE_URL}/tours/from-marrakech`,
      },

    ],

  };





  return (

    <main className="min-h-screen bg-[hsl(var(--background))]">


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              breadcrumbJsonLd
            ),
        }}
      />



      {/* HERO */}


      <section className="border-b border-[hsl(var(--border))]">


        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">


          <div className="max-w-3xl">


            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[hsl(var(--primary))]">

              Explore Morocco From Marrakech

            </p>



            <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[hsl(var(--heading))] sm:text-5xl lg:text-6xl">

              Marrakech Desert Tours & Private Morocco Experiences

            </h1>



            <p className="mt-6 max-w-2xl text-base leading-8 text-[hsl(var(--text-secondary))] sm:text-lg">

              Discover private Marrakech desert tours with Sahara adventures,
              Atlas Mountains landscapes and multi-day Morocco journeys
              starting from Marrakech.

            </p>


          </div>


        </div>


      </section>






      {/* INTRO SEO SECTION */}



      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">


        <div className="max-w-3xl">


          <h2 className="text-3xl font-semibold text-[hsl(var(--heading))] sm:text-4xl">

            Private Tours from Marrakech to Discover Morocco

          </h2>



          <p className="mt-5 leading-8 text-[hsl(var(--text-secondary))]">

            Marrakech is one of the best starting points for exploring Morocco.
            From the city, travelers can discover the High Atlas Mountains,
            traditional villages, ancient kasbahs and the Sahara Desert.

            Our private tours from Marrakech are designed for travelers who
            want flexibility, comfortable transportation and a personalized
            Morocco experience.

          </p>


        </div>


      </section>






      {/* TOURS GRID */}



      <section className="bg-[hsl(var(--surface-soft))]">


        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">



          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">


            <div>


              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--primary))]">

                Tours From Marrakech

              </p>


              <h2 className="mt-3 text-3xl font-semibold text-[hsl(var(--heading))] sm:text-4xl">

                Explore Our Marrakech Desert Tours

              </h2>


            </div>



            <p className="text-sm text-[hsl(var(--text-muted))]">

              {marrakechTours.length} tours available

            </p>


          </div>






          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">


            {marrakechTours.map((tour)=>(


              <article

                key={tour.id}

                className="
                group
                overflow-hidden
                rounded-[30px]
                border
                border-[hsl(var(--border))]
                bg-[hsl(var(--card))]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                "

              >



                <Link

                  href={`/tours/${tour.slug}`}

                  className="relative block aspect-[4/3] overflow-hidden"

                >


                  <Image

                    src={tour.image}

                    alt={tour.title}

                    fill

                    sizes="(max-width:768px)100vw,(max-width:1280px)50vw,33vw"

                    className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-[1.05]
                    "

                  />



                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"/>




                  {tour.badge && (

                    <span className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[hsl(var(--heading))]">

                      {tour.badge}

                    </span>

                  )}


                </Link>






                <div className="p-6">


                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[hsl(var(--primary))]">

                    {tour.category}

                  </p>




                  <Link href={`/tours/${tour.slug}`}>

                    <h3 className="mt-3 text-2xl font-semibold leading-tight text-[hsl(var(--heading))] transition-colors group-hover:text-[hsl(var(--primary))]">

                      {tour.title}

                    </h3>

                  </Link>





                  <p className="mt-4 text-sm leading-7 text-[hsl(var(--text-secondary))]">

                    {tour.shortDescription}

                  </p>






                  <div className="mt-6 grid grid-cols-2 gap-4 border-y border-[hsl(var(--border))] py-5">


                    <div>

                      <p className="text-[10px] font-bold uppercase text-[hsl(var(--text-muted))]">

                        Duration

                      </p>


                      <p className="mt-1 text-sm font-semibold">

                        {tour.duration}

                      </p>

                    </div>




                    <div>

                      <p className="text-[10px] font-bold uppercase text-[hsl(var(--text-muted))]">

                        Tour Type

                      </p>


                      <p className="mt-1 text-sm font-semibold">

                        {tour.tourType}

                      </p>

                    </div>


                  </div>






                  <Link

                    href={`/tours/${tour.slug}`}

                    className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-bold
                    text-[hsl(var(--primary))]
                    "

                  >

                    View Tour →

                  </Link>



                </div>



              </article>


            ))}



          </div>



        </div>


      </section>






      {/* CTA */}



      <section className="bg-[hsl(var(--secondary))]">


        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">


          <h2 className="text-4xl font-semibold text-white">

            Plan Your Morocco Desert Tour from Marrakech

          </h2>



          <p className="mt-5 max-w-2xl leading-8 text-white/70">

            Tell us your travel plans and we can help create a private Morocco
            journey that matches your dates, interests and travel style.

          </p>




          <Link

            href="/contact"

            className="
            mt-8
            inline-flex
            rounded-full
            bg-[hsl(var(--primary))]
            px-8
            py-4
            text-sm
            font-bold
            text-white
            "

          >

            Request Your Tour

          </Link>



        </div>


      </section>



    </main>

  );

}