import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { toursEs } from "@/data/tours-es";


const SITE_URL = "https://moroccan-trip.com";



export const metadata: Metadata = {

  title:
    "Tours desde Tánger | Circuitos privados por Marruecos",

  description:
    "Descubre tours desde Tánger por Marruecos con Chefchaouen, Fez, Merzouga, el desierto del Sahara y los mejores destinos del país.",

  alternates: {
    canonical:
      `${SITE_URL}/es/tours/desde-tanger`,
  },

  openGraph: {

    title:
      "Tours desde Tánger | Circuitos privados por Marruecos",

    description:
      "Explora circuitos privados desde Tánger hacia el norte de Marruecos, Fez, el Sahara y Marrakech.",

    url:
      `${SITE_URL}/es/tours/desde-tanger`,

    siteName:
      "Moroccan Trip",

    type:
      "website",

  },

};






export default function ToursDesdeTangerPage() {



  const tangerTours =
    toursEs.filter(
      (tour) =>
        tour.departure === "Tánger"
    );







  const breadcrumbJsonLd = {

    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: [

      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: SITE_URL,
      },


      {
        "@type": "ListItem",
        position: 2,
        name: "Tours",
        item:
          `${SITE_URL}/es/tours`,
      },


      {
        "@type": "ListItem",
        position: 3,
        name:
          "Tours desde Tánger",
        item:
          `${SITE_URL}/es/tours/desde-tanger`,
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

              Explora Marruecos desde Tánger

            </p>







            <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[hsl(var(--heading))] sm:text-5xl lg:text-6xl">


              Tours desde Tánger y experiencias privadas por Marruecos


            </h1>







            <p className="mt-6 max-w-2xl text-base leading-8 text-[hsl(var(--text-secondary))] sm:text-lg">


              Descubre circuitos privados desde Tánger con Chefchaouen,
              Fez, el desierto del Sahara, Merzouga y los lugares más
              impresionantes de Marruecos.


            </p>





          </div>



        </div>



      </section>

      {/* TOURS GRID */}





      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">



        <div className="max-w-3xl">



          <h2 className="text-3xl font-semibold text-[hsl(var(--heading))] sm:text-4xl">


            Tours privados desde Tánger para descubrir Marruecos


          </h2>







          <p className="mt-5 leading-8 text-[hsl(var(--text-secondary))]">


            Tánger es una de las principales puertas de entrada a Marruecos.
            Desde la ciudad puedes comenzar viajes privados hacia Chefchaouen,
            Fez, el desierto del Sahara, Marrakech y otros destinos únicos.

            Nuestros tours desde Tánger ofrecen transporte cómodo,
            flexibilidad y una experiencia personalizada por Marruecos.


          </p>





        </div>





      </section>
            {/* TOURS GRID */}



            <section className="bg-[hsl(var(--surface-soft))]">


            <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
    
    
    
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
    
    
    
                <div>
    
    
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--primary))]">
    
                    Tours desde Tánger
    
                  </p>
    
    
    
    
                  <h2 className="mt-3 text-3xl font-semibold text-[hsl(var(--heading))] sm:text-4xl">
    
                    Explora nuestros circuitos desde Tánger
    
                  </h2>
    
    
    
                </div>
    
    
    
    
    
                <p className="text-sm text-[hsl(var(--text-muted))]">
    
                  {tangerTours.length} tours disponibles
    
                </p>
    
    
    
              </div>
    
    
    
    
    
    
    
              <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
    
    
    
                {tangerTours.map((tour)=>(
    
    
    
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
    
                      href={`/es/tours/${tour.slug}`}
    
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
    
    
    
    
    
    
    
    
                      <Link href={`/es/tours/${tour.slug}`}>
    
    
    
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
    
                            Duración
    
                          </p>
    
    
    
    
    
                          <p className="mt-1 text-sm font-semibold">
    
                            {tour.duration}
    
                          </p>
    
    
    
    
                        </div>
    
    
    
    
    
    
    
                        <div>
    
    
    
                          <p className="text-[10px] font-bold uppercase text-[hsl(var(--text-muted))]">
    
                            Tipo de tour
    
                          </p>
    
    
    
    
    
                          <p className="mt-1 text-sm font-semibold">
    
                            {tour.tourType}
    
                          </p>
    
    
    
    
    
                        </div>
    
    
    
    
    
                      </div>
    
    
    
    
    
    
    
    
    
                      <Link
    
                        href={`/es/tours/${tour.slug}`}
    
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
    
    
    
                        Ver tour →
    
    
    
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
    
    
                Planifica tu viaje por Marruecos desde Tánger
    
    
              </h2>
    
    
    
    
    
    
    
    
              <p className="mt-5 max-w-2xl leading-8 text-white/70">
    
    
                Cuéntanos tus planes de viaje y podemos crear una experiencia privada
                por Marruecos adaptada a tus fechas, intereses y estilo de viaje.
    
    
              </p>
    
    
    
    
    
    
    
    
              <Link
    
                href="/es/contact"
    
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
    
    
    
    
                Solicitar tu tour
    
    
    
    
              </Link>
    
    
    
    
    
            </div>
    
    
    
    
          </section>
    
    
    
    
    
    
        </main>
    
      );
    
    }