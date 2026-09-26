import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { blogPostsEs } from "@/data/blog-es";


// ─────────────────────────────
// SEO METADATA
// ─────────────────────────────

export const metadata: Metadata = {

  title:
    "Blog de viajes a Marruecos | Guías y consejos | Moroccan Trip",


  description:
    "Descubre guías de viaje de Marruecos, consejos para Marrakech, el desierto del Sáhara, las montañas del Atlas y experiencias únicas para planificar tu viaje.",


  alternates: {

    canonical:
      "/es/blog",

  },


  openGraph: {

    title:
      "Blog de viajes a Marruecos | Moroccan Trip",


    description:
      "Guías prácticas, consejos de viaje y experiencias para descubrir Marruecos.",


    url:
      "/es/blog",


    type:
      "website",


    images:[

      {

        url:
          "/images/blog/best-time-to-visit-morocco.webp",

        width:
          1200,

        height:
          630,

        alt:
          "Blog de viajes a Marruecos",

      }

    ]

  }

};



// ─────────────────────────────
// HELPERS
// ─────────────────────────────


function formatDate(date:string){

  return new Intl.DateTimeFormat(
    "es-ES",
    {

      month:
        "long",

      day:
        "numeric",

      year:
        "numeric",

    }

  ).format(
    new Date(`${date}T00:00:00`)
  );

}



// ─────────────────────────────
// PAGE
// ─────────────────────────────


export default function BlogPage(){


  const featuredPost =
    blogPostsEs.find(
      (post)=> post.featured
    ) ?? blogPostsEs[0];



  const otherPosts =
    featuredPost

      ? blogPostsEs.filter(
          (post)=>
            post.id !== featuredPost.id
        )

      : blogPostsEs;



  const categories =
    Array.from(
      new Set(
        blogPostsEs.map(
          (post)=>
            post.category
        )
      )
    );



  return (

    <main className="bg-white">


      {/* ─────────────────────────────
          HERO
      ───────────────────────────── */}


      <section
        className="
        relative
        overflow-hidden
        bg-[#f7f4ee]
        "
      >


        <div
          aria-hidden="true"
          className="
          absolute
          -left-20
          top-10
          h-72
          w-72
          rounded-full
          bg-orange-200/30
          blur-3xl
          "
        />


        <div
          aria-hidden="true"
          className="
          absolute
          -right-20
          bottom-0
          h-80
          w-80
          rounded-full
          bg-amber-200/30
          blur-3xl
          "
        />



        <div
          className="
          relative
          mx-auto
          max-w-7xl
          px-6
          py-20
          sm:py-24
          lg:px-8
          lg:py-28
          "
        >


          <div
            className="
            mx-auto
            max-w-3xl
            text-center
            "
          >


            <span
              className="
              inline-flex
              rounded-full
              border
              border-orange-200
              bg-white
              px-4
              py-2
              text-sm
              font-semibold
              text-orange-700
              shadow-sm
              "
            >

              Inspiración de viajes a Marruecos

            </span>



            <h1
              className="
              mt-6
              text-4xl
              font-bold
              tracking-tight
              text-slate-950
              sm:text-5xl
              lg:text-6xl
              "
            >

              Blog de viajes a Marruecos

            </h1>



            <p
              className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-slate-600
              sm:text-lg
              "
            >

              Guías prácticas de Marruecos, consejos para viajar,
              información sobre el Sáhara, temporadas ideales y
              experiencias para ayudarte a planificar tu viaje.

            </p>


          </div>




          {/* CATEGORY PILLS */}


          {
            categories.length > 0 && (

              <div
                className="
                mt-10
                flex
                flex-wrap
                justify-center
                gap-3
                "
              >

                {
                  categories.map(
                    (category)=>(

                      <span

                        key={category}

                        className="
                        rounded-full
                        border
                        border-slate-200
                        bg-white
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-slate-700
                        shadow-sm
                        "
                      >

                        {category}

                      </span>

                    )
                  )
                }

              </div>

            )
          }


        </div>


      </section>
            {/* ─────────────────────────────
          FEATURED ARTICLE
      ───────────────────────────── */}


{
        featuredPost && (

          <section
            className="
            mx-auto
            max-w-7xl
            px-6
            py-16
            sm:py-20
            lg:px-8
            "
          >


            <div className="mb-8">


              <p
                className="
                text-sm
                font-bold
                uppercase
                tracking-[0.18em]
                text-orange-600
                "
              >

                Guía destacada

              </p>



              <h2
                className="
                mt-2
                text-3xl
                font-bold
                tracking-tight
                text-slate-950
                sm:text-4xl
                "
              >

                Empieza a planificar tu viaje a Marruecos

              </h2>


            </div>





            <article
              className="
              group
              overflow-hidden
              rounded-3xl
              border
              border-slate-200
              bg-white
              shadow-sm
              transition
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
              "
            >


              <div
                className="
                grid
                lg:grid-cols-[1.15fr_0.85fr]
                "
              >



                {/* IMAGE */}


                <Link

                  href={`/es/blog/${featuredPost.slug}`}

                  className="
                  relative
                  block
                  min-h-[320px]
                  overflow-hidden
                  sm:min-h-[420px]
                  lg:min-h-full
                  "

                >


                  <Image

                    src={featuredPost.image}

                    alt={featuredPost.title}

                    fill

                    priority

                    sizes="
                    (max-width:1024px)100vw,
                    58vw
                    "

                    className="
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-105
                    "

                  />



                  <div
                    className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/30
                    via-transparent
                    to-transparent
                    "
                  />



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
                    uppercase
                    tracking-wide
                    text-orange-700
                    shadow-sm
                    backdrop-blur
                    "
                  >

                    Destacado

                  </span>


                </Link>





                {/* CONTENT */}



                <div
                  className="
                  flex
                  flex-col
                  justify-center
                  p-7
                  sm:p-10
                  lg:p-12
                  "
                >



                  <div
                    className="
                    flex
                    flex-wrap
                    items-center
                    gap-x-3
                    gap-y-2
                    text-sm
                    text-slate-500
                    "
                  >


                    <span
                      className="
                      font-semibold
                      text-orange-600
                      "
                    >

                      {featuredPost.category}

                    </span>



                    <span aria-hidden="true">
                      •
                    </span>



                    <span>

                      {formatDate(featuredPost.publishedAt)}

                    </span>



                    <span aria-hidden="true">
                      •
                    </span>



                    <span>

                      {featuredPost.readTime}

                    </span>


                  </div>





                  <h2
                    className="
                    mt-5
                    text-3xl
                    font-bold
                    leading-tight
                    tracking-tight
                    text-slate-950
                    sm:text-4xl
                    "
                  >


                    <Link

                      href={`/es/blog/${featuredPost.slug}`}

                      className="
                      transition
                      hover:text-orange-600
                      "

                    >

                      {featuredPost.title}

                    </Link>


                  </h2>





                  <p
                    className="
                    mt-5
                    text-base
                    leading-8
                    text-slate-600
                    "
                  >

                    {featuredPost.excerpt}

                  </p>





                  <div className="mt-8">


                    <Link

                      href={`/es/blog/${featuredPost.slug}`}

                      className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-slate-950
                      px-6
                      py-3.5
                      text-sm
                      font-bold
                      text-white
                      transition
                      hover:bg-orange-600
                      "

                    >

                      Leer guía de viaje


                      <svg

                        viewBox="0 0 20 20"

                        fill="none"

                        aria-hidden="true"

                        className="h-4 w-4"

                      >

                        <path

                          d="
                          M4.5 10h11m0 0-4.5-4.5M15.5 10 11 14.5
                          "

                          stroke="currentColor"

                          strokeWidth="1.7"

                          strokeLinecap="round"

                          strokeLinejoin="round"

                        />

                      </svg>


                    </Link>


                  </div>



                </div>



              </div>


            </article>



          </section>

        )
      }





      {/* ─────────────────────────────
          OTHER BLOG POSTS
      ───────────────────────────── */}


      {
        otherPosts.length > 0 && (

          <section
            className="
            border-t
            border-slate-100
            bg-slate-50/60
            "
          >


            <div
              className="
              mx-auto
              max-w-7xl
              px-6
              py-16
              sm:py-20
              lg:px-8
              "
            >


              <div className="max-w-2xl">


                <p
                  className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-orange-600
                  "
                >

                  Guías de viaje

                </p>



                <h2
                  className="
                  mt-2
                  text-3xl
                  font-bold
                  tracking-tight
                  text-slate-950
                  sm:text-4xl
                  "
                >

                  Descubre más sobre Marruecos

                </h2>



                <p
                  className="
                  mt-4
                  text-base
                  leading-7
                  text-slate-600
                  "
                >

                  Descubre consejos útiles sobre destinos,
                  temporadas, experiencias en el desierto y
                  planificación de viajes por Marruecos.

                </p>


              </div>
              <div
                className="
                mt-10
                grid
                gap-8
                md:grid-cols-2
                lg:grid-cols-3
                "
              >

                {
                  otherPosts.map(
                    (post)=>(

                      <article

                        key={post.id}

                        className="
                        group
                        flex
                        h-full
                        flex-col
                        overflow-hidden
                        rounded-3xl
                        border
                        border-slate-200
                        bg-white
                        shadow-sm
                        transition
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-lg
                        "

                      >


                        {/* IMAGE */}


                        <Link

                          href={`/es/blog/${post.slug}`}

                          className="
                          relative
                          block
                          aspect-[16/10]
                          overflow-hidden
                          "

                        >


                          <Image

                            src={post.image}

                            alt={post.title}

                            fill

                            sizes="
                            (max-width:768px)100vw,
                            (max-width:1024px)50vw,
                            33vw
                            "

                            className="
                            object-cover
                            transition
                            duration-700
                            group-hover:scale-105
                            "

                          />



                          <div

                            className="
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-black/20
                            via-transparent
                            to-transparent
                            "

                          />


                        </Link>





                        {/* CONTENT */}



                        <div

                          className="
                          flex
                          flex-1
                          flex-col
                          p-6
                          "

                        >



                          <div

                            className="
                            flex
                            flex-wrap
                            items-center
                            gap-2
                            text-xs
                            font-medium
                            text-slate-500
                            "

                          >

                            <span
                              className="
                              text-orange-600
                              "
                            >

                              {post.category}

                            </span>



                            <span aria-hidden="true">
                              •
                            </span>



                            <span>

                              {post.readTime}

                            </span>


                          </div>





                          <h3

                            className="
                            mt-4
                            text-xl
                            font-bold
                            leading-snug
                            text-slate-950
                            "

                          >


                            <Link

                              href={`/es/blog/${post.slug}`}

                              className="
                              transition
                              hover:text-orange-600
                              "

                            >

                              {post.title}

                            </Link>


                          </h3>





                          <p

                            className="
                            mt-3
                            line-clamp-3
                            text-sm
                            leading-7
                            text-slate-600
                            "

                          >

                            {post.excerpt}

                          </p>





                          <div
                            className="
                            mt-auto
                            pt-6
                            "
                          >


                            <Link

                              href={`/es/blog/${post.slug}`}

                              className="
                              inline-flex
                              items-center
                              gap-2
                              text-sm
                              font-bold
                              text-slate-950
                              transition
                              hover:text-orange-600
                              "

                            >

                              Leer artículo


                              <svg

                                viewBox="0 0 20 20"

                                fill="none"

                                aria-hidden="true"

                                className="h-4 w-4"

                              >

                                <path

                                  d="
                                  M4.5 10h11m0 0-4.5-4.5M15.5 10 11 14.5
                                  "

                                  stroke="currentColor"

                                  strokeWidth="1.7"

                                  strokeLinecap="round"

                                  strokeLinejoin="round"

                                />

                              </svg>


                            </Link>


                          </div>


                        </div>


                      </article>


                    )
                  )
                }


              </div>


            </div>


          </section>


        )

      }







      {/* ─────────────────────────────
          BLOG VALUE SECTION
      ───────────────────────────── */}



      <section

        className="
        mx-auto
        max-w-7xl
        px-6
        py-16
        sm:py-20
        lg:px-8
        "

      >


        <div

          className="
          grid
          gap-8
          md:grid-cols-3
          "

        >



          <div

            className="
            rounded-3xl
            border
            border-slate-200
            p-7
            "

          >


            <h3
              className="
              text-lg
              font-bold
              text-slate-950
              "
            >

              Guías de destinos

            </h3>


            <p
              className="
              mt-2
              text-sm
              leading-7
              text-slate-600
              "
            >

              Aprende sobre Marrakech, Fez, el Sáhara,
              las montañas del Atlas y otros destinos
              antes de organizar tu viaje.

            </p>


          </div>





          <div

            className="
            rounded-3xl
            border
            border-slate-200
            p-7
            "

          >


            <h3
              className="
              text-lg
              font-bold
              text-slate-950
              "
            >

              Consejos prácticos

            </h3>


            <p
              className="
              mt-2
              text-sm
              leading-7
              text-slate-600
              "
            >

              Información sobre clima, temporadas,
              transporte y consejos útiles para viajar
              por Marruecos.

            </p>


          </div>





          <div

            className="
            rounded-3xl
            border
            border-slate-200
            p-7
            "

          >


            <h3
              className="
              text-lg
              font-bold
              text-slate-950
              "
            >

              Experiencias en Marruecos

            </h3>


            <p
              className="
              mt-2
              text-sm
              leading-7
              text-slate-600
              "
            >

              Descubre rutas por el desierto,
              excursiones y viajes privados adaptados
              a tus necesidades.

            </p>


          </div>



        </div>


      </section>







      {/* ─────────────────────────────
          CTA
      ───────────────────────────── */}



      <section

        className="
        px-6
        pb-20
        lg:px-8
        "

      >


        <div

          className="
          mx-auto
          max-w-7xl
          overflow-hidden
          rounded-[2rem]
          bg-slate-950
          px-6
          py-12
          sm:px-10
          sm:py-14
          lg:px-14
          "

        >


          <div

            className="
            grid
            items-center
            gap-8
            lg:grid-cols-[1fr_auto]
            "

          >


            <div className="max-w-2xl">


              <p
                className="
                text-sm
                font-bold
                uppercase
                tracking-[0.18em]
                text-orange-400
                "
              >

                Planifica tu viaje

              </p>



              <h2

                className="
                mt-3
                text-3xl
                font-bold
                tracking-tight
                text-white
                sm:text-4xl
                "

              >

                ¿Listo para descubrir Marruecos?

              </h2>



              <p

                className="
                mt-4
                text-base
                leading-7
                text-slate-300
                "

              >

                Explora nuestros viajes privados,
                rutas por el Sáhara y excursiones
                o contacta con nosotros para crear
                tu itinerario ideal.

              </p>


            </div>





            <div

              className="
              flex
              flex-wrap
              gap-3
              "

            >


              <Link

                href="/es/tours"

                className="
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-orange-500
                px-6
                py-3.5
                text-sm
                font-bold
                text-white
                transition
                hover:bg-orange-600
                "

              >

                Ver viajes

              </Link>





              <Link

                href="/es/contacto"

                className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-white/5
                px-6
                py-3.5
                text-sm
                font-bold
                text-white
                transition
                hover:bg-white/10
                "

              >

                Contactar

              </Link>


            </div>


          </div>


        </div>


      </section>


    </main>

  );

}
