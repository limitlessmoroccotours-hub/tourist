import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { excursionesEs } from "@/data/excursiones-es";


type ExcursionPageProps = {
  params: Promise<{
    slug: string;
  }>;
};


const SITE_URL = "https://moroccan-trip.com";



// ─────────────────────────────────────────────
// STATIC PAGES
// ─────────────────────────────────────────────


export function generateStaticParams() {

  return excursionesEs.map((trip) => ({
    slug: trip.slug,
  }));

}



// ─────────────────────────────────────────────
// SEO METADATA
// ─────────────────────────────────────────────


export async function generateMetadata({
  params,
}: ExcursionPageProps): Promise<Metadata> {


  const { slug } = await params;


  const trip = excursionesEs.find(
    (item) => item.slug === slug
  );


  if (!trip) {

    return {

      title: {
        absolute:
          "Excursión no encontrada | Moroccan Trip",
      },


      robots: {
        index: false,
        follow: false,
      },

    };

  }



  const canonicalUrl =
    `${SITE_URL}/es/excursiones/${trip.slug}`;



  const imageUrl =
    `${SITE_URL}${trip.image}`;



  return {


    title: {
      absolute:
        trip.seo.title,
    },


    description:
      trip.seo.description,



    alternates: {

      canonical:
        canonicalUrl,

    },



    openGraph: {


      title:
        trip.seo.title,


      description:
        trip.seo.description,


      url:
        canonicalUrl,


      siteName:
        "Moroccan Trip",


      type:
        "website",


      locale:
        "es_ES",



      images: [

        {

          url:
            imageUrl,


          alt:
            trip.title,

        }

      ],

    },



    twitter: {

      card:
        "summary_large_image",


      title:
        trip.seo.title,


      description:
        trip.seo.description,


      images:
        [
          imageUrl
        ],

    },



    robots: {

      index:
        true,


      follow:
        true,

    },


  };

}






// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────


export default async function ExcursionPage({
  params,
}: ExcursionPageProps) {


  const { slug } =
    await params;



  const trip =
    excursionesEs.find(
      (item) =>
        item.slug === slug
    );



  if (!trip) {

    notFound();

  }



  const overviewParagraphs =
    trip.overview
      .trim()
      .split(/\n\s*\n/)
      .map(
        (paragraph) =>
          paragraph.trim()
      )
      .filter(Boolean);




  const relatedTrips =
    excursionesEs
      .filter(
        (item) =>
          item.slug !== trip.slug
      )
      .slice(0, 3);






  const breadcrumbJsonLd = {


    "@context":
      "https://schema.org",


    "@type":
      "BreadcrumbList",



    itemListElement: [


      {

        "@type":
          "ListItem",


        position:
          1,


        name:
          "Inicio",


        item:
          SITE_URL,

      },



      {

        "@type":
          "ListItem",


        position:
          2,


        name:
          "Excursiones",


        item:
          `${SITE_URL}/es/excursiones`,

      },



      {

        "@type":
          "ListItem",


        position:
          3,


        name:
          trip.title,


        item:
          `${SITE_URL}/es/excursiones/${trip.slug}`,

      },


    ],

  };






  return (

    <main className="min-h-screen bg-[hsl(var(--background))]">


      {/* STRUCTURED DATA */}


      <script

        type="application/ld+json"

        dangerouslySetInnerHTML={{

          __html:
            JSON.stringify(
              breadcrumbJsonLd
            ).replace(
              /</g,
              "\\u003c"
            ),

        }}

      />





      {/* HERO */}



      <section className="relative min-h-[620px] overflow-hidden lg:min-h-[690px]">


        <Image

          src={
            trip.image
          }


          alt={
            `${trip.title} en Marruecos`
          }


          fill


          priority


          sizes="100vw"


          className="object-cover"

        />



        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />


        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />





        <div className="relative mx-auto flex min-h-[620px] max-w-7xl flex-col px-5 pb-28 pt-7 sm:px-8 lg:min-h-[690px] lg:px-10 lg:pb-36">



          {/* BREADCRUMB */}



          <nav

            aria-label="Breadcrumb"

            className="flex items-center gap-2 text-sm text-white/70"

          >


            <Link

              href="/es"

              className="transition-colors hover:text-white"

            >

              Inicio

            </Link>



            <span aria-hidden="true">
              /
            </span>



            <Link

              href="/es/excursiones"

              className="transition-colors hover:text-white"

            >

              Excursiones

            </Link>



            <span aria-hidden="true">
              /
            </span>



            <span

              aria-current="page"

              className="max-w-[220px] truncate text-white/90 sm:max-w-sm"

            >

              {trip.title}

            </span>


          </nav>





          {/* HERO CONTENT */}


          <div className="mt-auto max-w-4xl">


            <div className="flex flex-wrap items-center gap-3">


              {trip.badge && (


                <span className="rounded-full bg-[hsl(var(--primary))] px-4 py-2 text-xs font-bold text-white shadow-lg">


                  {trip.badge}


                </span>


              )}





              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">


                {trip.category}


              </span>


            </div>





            <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-orange-200">


              {trip.tourType} · {trip.departure}


            </p>




            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.03] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-[68px]">


              {trip.title}


            </h1>





            <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">


              {trip.shortDescription}


            </p>




            <div className="mt-8 flex flex-col gap-3 sm:flex-row">


              <Link

                href="/es/contacto"

                className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-[hsl(var(--primary))] px-7 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[hsl(var(--primary-hover))]"

              >

                {trip.booking.contactLabel}

                <span aria-hidden="true">
                  →
                </span>


              </Link>





              <a

                href="#itinerario"

                className="inline-flex h-13 items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20"

              >

                Ver itinerario

              </a>



            </div>



          </div>


        </div>


      </section>
            {/* QUICK INFO */}


            <section className="relative z-10 mx-auto -mt-12 max-w-7xl px-5 sm:px-8 lg:px-10">


<div className="grid overflow-hidden rounded-[28px] border border-[hsl(var(--border))] bg-[hsl(var(--card))] shadow-xl sm:grid-cols-2 lg:grid-cols-4">


  <StatItem

    label="Duración"

    value={trip.duration}

  />


  <StatItem

    label="Salida"

    value={trip.departure}

  />


  <StatItem

    label="Regreso"

    value={trip.returnTo}

  />


  <StatItem

    label="Tamaño del grupo"

    value={trip.groupSize}

  />


</div>


</section>





{/* OVERVIEW */}



<section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">


<div className="grid gap-12 lg:grid-cols-[1fr_360px]">


  <div>


    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[hsl(var(--primary))]">

      Sobre esta excursión

    </p>



    <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] text-[hsl(var(--heading))] sm:text-4xl">


      Descubre el Valle de Ourika desde Marrakech


    </h2>





    <div className="mt-8 space-y-5 text-base leading-8 text-[hsl(var(--text-secondary))]">


      {overviewParagraphs.map((paragraph, index) => (


        <p key={index}>

          {paragraph}

        </p>


      ))}


    </div>


  </div>





  {/* SIDE INFO */}



  <aside className="h-fit rounded-[28px] border border-[hsl(var(--border))] bg-[hsl(var(--surface-soft))] p-7">


    <h3 className="text-xl font-semibold text-[hsl(var(--heading))]">

      Información rápida

    </h3>



    <div className="mt-6 space-y-5">


      <div>

        <p className="text-xs font-bold uppercase tracking-[0.15em] text-[hsl(var(--text-muted))]">

          Idiomas disponibles

        </p>


        <p className="mt-2 text-sm font-semibold text-[hsl(var(--heading))]">

          {trip.languages.join(", ")}

        </p>


      </div>





      <div>

        <p className="text-xs font-bold uppercase tracking-[0.15em] text-[hsl(var(--text-muted))]">

          Destinos

        </p>


        <p className="mt-2 text-sm font-semibold text-[hsl(var(--heading))]">

          {trip.locations.slice(0, 3).join(", ")}

        </p>


      </div>





      <div>

        <p className="text-xs font-bold uppercase tracking-[0.15em] text-[hsl(var(--text-muted))]">

          Tipo de experiencia

        </p>


        <p className="mt-2 text-sm font-semibold text-[hsl(var(--heading))]">

          {trip.tourType}

        </p>


      </div>


    </div>


  </aside>


</div>


</section>







{/* HIGHLIGHTS */}



<section className="bg-[hsl(var(--surface-soft))]">


<div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">


  <div className="max-w-3xl">


    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[hsl(var(--primary))]">

      Lo más destacado

    </p>



    <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[hsl(var(--heading))] sm:text-4xl">


      Una experiencia auténtica en las montañas del Atlas


    </h2>


  </div>





  <div className="mt-10 grid gap-5 md:grid-cols-2">


    {trip.highlights.map((item, index) => (


      <div

        key={index}

        className="rounded-[22px] border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6"

      >


        <div className="flex gap-4">


          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--primary))] text-sm font-bold text-white">

            {index + 1}

          </span>




          <p className="text-sm leading-7 text-[hsl(var(--text-secondary))]">

            {item}

          </p>


        </div>


      </div>


    ))}


  </div>


</div>


</section>







{/* ITINERARY */}



<section

id="itinerario"

className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10"

>


<div className="max-w-3xl">


  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[hsl(var(--primary))]">

    Itinerario

  </p>



  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[hsl(var(--heading))] sm:text-4xl">


    Programa de tu excursión al Valle de Ourika


  </h2>


</div>





<div className="mt-10 space-y-6">


  {trip.itinerary.map((step, index) => (


    <article

      key={index}

      className="rounded-[28px] border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-7"

    >


      <div className="flex gap-5">


        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--primary))] text-sm font-bold text-white">

          {index + 1}

        </div>



        <div>


          <h3 className="text-xl font-semibold text-[hsl(var(--heading))]">

            {step.title}

          </h3>



          <p className="mt-3 whitespace-pre-line text-sm leading-7 text-[hsl(var(--text-secondary))]">

            {step.description}

          </p>


        </div>


      </div>


    </article>


  ))}


</div>


</section>
      {/* INCLUDED / EXCLUDED */}



      <section className="bg-[hsl(var(--surface-soft))]">


        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">


          <div className="grid gap-8 lg:grid-cols-2">


            {/* INCLUDED */}


            <div className="rounded-[30px] border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-8">


              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[hsl(var(--primary))]">

                Incluido

              </p>



              <h2 className="mt-4 text-3xl font-semibold text-[hsl(var(--heading))]">

                Qué incluye esta excursión

              </h2>




              <ul className="mt-8 space-y-4">


                {trip.included.map((item, index) => (


                  <li

                    key={index}

                    className="flex gap-3 text-sm leading-7 text-[hsl(var(--text-secondary))]"

                  >


                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-600 text-xs text-white">

                      ✓

                    </span>



                    {item}


                  </li>


                ))}


              </ul>


            </div>






            {/* EXCLUDED */}



            <div className="rounded-[30px] border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-8">


              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[hsl(var(--primary))]">

                No incluido

              </p>



              <h2 className="mt-4 text-3xl font-semibold text-[hsl(var(--heading))]">

                Gastos adicionales

              </h2>




              <ul className="mt-8 space-y-4">


                {trip.excluded.map((item, index) => (


                  <li

                    key={index}

                    className="flex gap-3 text-sm leading-7 text-[hsl(var(--text-secondary))]"

                  >


                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500 text-xs text-white">

                      ×

                    </span>



                    {item}


                  </li>


                ))}


              </ul>


            </div>


          </div>


        </div>


      </section>







      {/* GALLERY */}



      {trip.gallery.length > 0 && (


        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">


          <div className="max-w-3xl">


            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[hsl(var(--primary))]">

              Galería

            </p>



            <h2 className="mt-4 text-3xl font-semibold text-[hsl(var(--heading))] sm:text-4xl">

              Descubre esta experiencia en imágenes

            </h2>


          </div>





          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">


            {trip.gallery.map((image, index) => (


              <div

                key={index}

                className="relative aspect-[4/3] overflow-hidden rounded-[28px]"

              >


                <Image

                  src={image}

                  alt={`${trip.title} - imagen ${index + 1}`}

                  fill

                  sizes="(max-width:768px)100vw,33vw"

                  className="object-cover transition-transform duration-700 hover:scale-105"

                />


              </div>


            ))}


          </div>


        </section>


      )}







      {/* FAQ */}



      <section className="bg-[hsl(var(--surface-soft))]">


        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">


          <div className="max-w-3xl">


            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[hsl(var(--primary))]">

              Preguntas frecuentes

            </p>



            <h2 className="mt-4 text-3xl font-semibold text-[hsl(var(--heading))] sm:text-4xl">

              Todo lo que necesitas saber

            </h2>


          </div>





          <div className="mt-10 space-y-5">


            {trip.faqs.map((faq, index) => (


              <details

                key={index}

                className="group rounded-[24px] border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6"

              >


                <summary className="cursor-pointer list-none text-lg font-semibold text-[hsl(var(--heading))]">

                  {faq.question}

                </summary>



                <p className="mt-4 text-sm leading-7 text-[hsl(var(--text-secondary))]">

                  {faq.answer}

                </p>


              </details>


            ))}


          </div>


        </div>


      </section>







      {/* RELATED EXCURSIONS */}



      {relatedTrips.length > 0 && (


        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">


          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">


            <div>


              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[hsl(var(--primary))]">

                Más experiencias

              </p>



              <h2 className="mt-4 text-3xl font-semibold text-[hsl(var(--heading))]">

                Otras excursiones desde Marrakech

              </h2>


            </div>


          </div>





          <div className="mt-10 grid gap-7 md:grid-cols-3">


            {relatedTrips.map((item) => (


              <Link

                key={item.id}

                href={`/es/excursiones/${item.slug}`}

                className="group overflow-hidden rounded-[28px] border border-[hsl(var(--border))] bg-[hsl(var(--card))]"

              >


                <div className="relative aspect-[4/3] overflow-hidden">


                  <Image

                    src={item.image}

                    alt={item.title}

                    fill

                    sizes="(max-width:768px)100vw,33vw"

                    className="object-cover transition-transform duration-700 group-hover:scale-105"

                  />


                </div>




                <div className="p-6">


                  <h3 className="text-xl font-semibold leading-tight text-[hsl(var(--heading))]">

                    {item.title}

                  </h3>


                  <p className="mt-3 text-sm leading-7 text-[hsl(var(--text-secondary))]">

                    {item.shortDescription}

                  </p>


                </div>


              </Link>


            ))}


          </div>


        </section>


      )}







      {/* CTA */}



      <section className="bg-[hsl(var(--secondary))]">


        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">


          <div className="max-w-3xl">


            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-200">

              Viaje privado y personalizado

            </p>



            <h2 className="mt-4 text-4xl font-semibold leading-tight text-white">

              Reserva tu excursión desde Marrakech

            </h2>



            <p className="mt-5 text-base leading-8 text-white/70">

              Contacta con nosotros y diseñaremos una experiencia privada en
              Marruecos adaptada a tus fechas, intereses y estilo de viaje.

            </p>




            <Link

              href="/es/contacto"

              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[hsl(var(--primary))] px-8 text-sm font-bold text-white transition-all hover:-translate-y-0.5"

            >

              Solicitar información

            </Link>


          </div>


        </div>


      </section>





    </main>

  );

}






// ─────────────────────────────────────────────
// SMALL COMPONENTS
// ─────────────────────────────────────────────



function StatItem({

  label,

  value,

}: {

  label: string;

  value: string;

}) {


  return (


    <div className="border-b border-[hsl(var(--border))] p-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">


      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[hsl(var(--text-muted))]">

        {label}

      </p>



      <p className="mt-2 text-sm font-semibold text-[hsl(var(--heading))]">

        {value}

      </p>


    </div>


  );


}