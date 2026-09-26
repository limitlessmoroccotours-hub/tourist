import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { specialOffersEs } from "@/data/specialOffers-es";


export const metadata: Metadata = {

  title:
    "Viajes al Desierto de Marruecos | Ofertas Especiales Sahara",

  description:
    "Descubre viajes al desierto de Marruecos con experiencias privadas en el Sahara, Merzouga y rutas personalizadas adaptadas a tu estilo de viaje.",

  alternates: {
    canonical: "/es/ofertas-especiales",
  },

};


export default function SpecialOffersEsPage() {

  return (

    <main className="min-h-screen bg-[hsl(var(--background))]">


      {/* HERO */}

      <section className="border-b border-[hsl(var(--border))]">

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

          <div className="max-w-3xl">


            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[hsl(var(--primary))]">
              Experiencias únicas en Marruecos
            </p>



            <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[hsl(var(--heading))] sm:text-5xl lg:text-6xl">

              Ofertas especiales de viajes a Marruecos

            </h1>




            <p className="mt-6 max-w-2xl text-base leading-8 text-[hsl(var(--text-secondary))] sm:text-lg">

              Descubre nuestros viajes al desierto de Marruecos,
              experiencias privadas en el Sahara, rutas por Merzouga
              y aventuras diseñadas para diferentes estilos de viaje.

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

                Nuestras ofertas

              </p>




              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[hsl(var(--heading))] sm:text-4xl">

                Elige tu experiencia en Marruecos

              </h2>


            </div>




            <p className="text-sm text-[hsl(var(--text-muted))]">

              {specialOffersEs.length}{" "}
              {specialOffersEs.length === 1
                ? "oferta"
                : "ofertas"}

            </p>


          </div>





          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">


            {specialOffersEs.map((offer)=>(


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


                <Link
                  href={`/es/ofertas-especiales/${offer.slug}`}
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

                    <span className="
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
                    ">

                      {offer.badge}

                    </span>

                  )}



                </Link>





                <div className="p-6">


                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[hsl(var(--primary))]">

                    {offer.category}

                  </p>




                  <Link href={`/es/ofertas-especiales/${offer.slug}`}>

                    <h2 className="
                    mt-3
                    text-2xl
                    font-semibold
                    leading-tight
                    tracking-[-0.025em]
                    text-[hsl(var(--heading))]
                    transition-colors
                    group-hover:text-[hsl(var(--primary))]
                    ">

                      {offer.title}

                    </h2>

                  </Link>





                  <p className="mt-4 text-sm leading-7 text-[hsl(var(--text-secondary))]">

                    {offer.shortDescription}

                  </p>






                  <div className="
                  mt-6
                  grid
                  grid-cols-2
                  gap-4
                  border-y
                  border-[hsl(var(--border))]
                  py-5
                  ">


                    <div>

                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[hsl(var(--text-muted))]">

                        Duración

                      </p>


                      <p className="mt-1 text-sm font-semibold">

                        {offer.duration}

                      </p>


                    </div>




                    <div>

                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[hsl(var(--text-muted))]">

                        Diseñado para

                      </p>


                      <p className="mt-1 line-clamp-2 text-sm font-semibold">

                        {offer.targetAudience}

                      </p>


                    </div>


                  </div>





                  <Link

                    href={`/es/ofertas-especiales/${offer.slug}`}

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

                    Ver oferta →

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


          <div className="
          overflow-hidden
          rounded-[32px]
          bg-[hsl(var(--secondary))]
          px-6
          py-10
          sm:px-10
          sm:py-12
          lg:px-14
          ">


            <h2 className="text-3xl font-semibold text-[hsl(var(--secondary-foreground))]">

              ¿Buscas un viaje personalizado por Marruecos?

            </h2>


            <p className="mt-5 max-w-2xl text-sm leading-7 text-[hsl(var(--footer-muted))]">

              Creamos itinerarios privados adaptados a tus fechas,
              intereses y estilo de viaje.

            </p>



            <Link

              href="/es/contacto"

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
              "

            >

              Planifica tu viaje

            </Link>


          </div>


        </div>


      </section>



    </main>

  );

}