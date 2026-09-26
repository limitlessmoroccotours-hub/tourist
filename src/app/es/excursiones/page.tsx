import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { excursionesEs } from "@/data/excursiones-es";


export const metadata: Metadata = {
  title:
    "Excursiones desde Marrakech | Excursiones de un día en Marruecos",

  description:
    "Descubre las mejores excursiones desde Marrakech. Explora el Valle de Ourika, las montañas del Atlas, pueblos bereberes y los destinos más increíbles de Marruecos.",

  alternates: {
    canonical: "/es/excursiones",
  },
};


export default function ExcursionesPage() {
  return (
    <main className="min-h-screen bg-[hsl(var(--background))]">

      {/* HERO */}

      <section className="border-b border-[hsl(var(--border))]">

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

          <div className="max-w-3xl">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[hsl(var(--primary))]">
              Descubre Marruecos más allá de Marrakech
            </p>


            <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-[hsl(var(--heading))] sm:text-5xl lg:text-6xl">

              Excursiones desde Marrakech para descubrir Marruecos

            </h1>


            <p className="mt-6 max-w-2xl text-base leading-8 text-[hsl(var(--text-secondary))] sm:text-lg">

              Disfruta de excursiones privadas desde Marrakech hacia las
              montañas del Atlas, valles naturales, pueblos tradicionales y
              algunos de los paisajes más impresionantes de Marruecos.

            </p>

          </div>

        </div>

      </section>



      {/* EXCURSIONES */}

      <section className="bg-[hsl(var(--surface-soft))]">

        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">


          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">


            <div>

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--primary))]">

                Nuestras experiencias

              </p>


              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[hsl(var(--heading))] sm:text-4xl">

                Elige tu excursión perfecta

              </h2>

            </div>



            <p className="text-sm text-[hsl(var(--text-muted))]">

              {excursionesEs.length}{" "}
              {excursionesEs.length === 1
                ? "excursión disponible"
                : "excursiones disponibles"}

            </p>


          </div>



          {/* CARDS */}


          <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3">


            {excursionesEs.map((trip) => (

              <article
                key={trip.id}
                className="
                group
                overflow-hidden
                rounded-[28px]
                border
                border-[hsl(var(--border))]
                bg-[hsl(var(--card))]
                shadow-[0_4px_24px_rgba(0,0,0,0.04)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_14px_35px_rgba(0,0,0,0.08)]
                "
              >


                {/* IMAGE */}


                <Link
                  href={`/es/excursiones/${trip.slug}`}
                  className="
                  relative
                  block
                  aspect-[4/3]
                  overflow-hidden
                  bg-[hsl(var(--surface-soft))]
                  "
                >

                  <Image

                    src={trip.image}

                    alt={trip.title}

                    fill

                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"

                    className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-[1.04]
                    "

                  />


                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />


                  {trip.badge && (

                    <span className="absolute left-5 top-5 rounded-full bg-white/95 px-3.5 py-2 text-xs font-bold text-[hsl(var(--heading))] shadow-sm backdrop-blur-md">

                      {trip.badge}

                    </span>

                  )}



                  <span className="absolute bottom-5 left-5 rounded-full bg-black/45 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur-md">

                    {trip.duration}

                  </span>


                </Link>



                {/* CONTENT */}


                <div className="p-6">


                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[hsl(var(--primary))]">

                    {trip.category}

                  </p>



                  <Link href={`/es/excursiones/${trip.slug}`}>

                    <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.025em] text-[hsl(var(--heading))] transition-colors group-hover:text-[hsl(var(--primary))]">

                      {trip.title}

                    </h2>

                  </Link>



                  <p className="mt-4 text-sm leading-7 text-[hsl(var(--text-secondary))]">

                    {trip.shortDescription}

                  </p>




                  <div className="mt-6 grid grid-cols-2 gap-4 border-y border-[hsl(var(--border))] py-5">


                    <div>

                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[hsl(var(--text-muted))]">

                        Salida

                      </p>


                      <p className="mt-1 text-sm font-semibold text-[hsl(var(--heading))]">

                        {trip.departure}

                      </p>


                    </div>



                    <div>

                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[hsl(var(--text-muted))]">

                        Tipo de excursión

                      </p>


                      <p className="mt-1 text-sm font-semibold text-[hsl(var(--heading))]">

                        {trip.tourType}

                      </p>


                    </div>


                  </div>



                  <Link

                    href={`/es/excursiones/${trip.slug}`}

                    className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-bold
                    text-[hsl(var(--primary))]
                    transition-colors
                    hover:text-[hsl(var(--primary-hover))]
                    "

                  >

                    Ver excursión

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


          <div className="overflow-hidden rounded-[32px] bg-[hsl(var(--secondary))] px-6 py-10 sm:px-10 sm:py-12 lg:px-14">


            <div className="max-w-2xl">


              <p className="text-xs font-bold uppercase tracking-[0.17em] text-[hsl(var(--primary))]">

                Privado y flexible

              </p>



              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[hsl(var(--secondary-foreground))] sm:text-4xl">

                ¿Buscas una excursión diferente?

              </h2>



              <p className="mt-5 text-sm leading-7 text-[hsl(var(--footer-muted))] sm:text-base">

                Cuéntanos qué lugar quieres visitar y crearemos una experiencia
                privada adaptada a tus fechas y preferencias.

              </p>



              <Link

                href="/es/contacto"

                className="
                mt-7
                inline-flex
                h-12
                items-center
                justify-center
                rounded-full
                bg-[hsl(var(--primary))]
                px-7
                text-sm
                font-bold
                text-[hsl(var(--primary-foreground))]
                transition-all
                hover:-translate-y-0.5
                hover:bg-[hsl(var(--primary-hover))]
                "

              >

                Planificar mi excursión

              </Link>


            </div>


          </div>


        </div>


      </section>


    </main>
  );
}