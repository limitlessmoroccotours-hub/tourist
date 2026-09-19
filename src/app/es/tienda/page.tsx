import Image from "next/image";
import Link from "next/link";

import { shopProducts } from "@/data/shop-es";


export const metadata = {

  title:
    "Tienda de Fósiles de Marruecos | Fósiles Auténticos",


  description:
    "Descubre fósiles auténticos de Marruecos, incluyendo trilobites y ejemplares geológicos únicos. Explora tesoros naturales para coleccionistas y amantes de la historia natural.",


  keywords: [

    "fosiles de marruecos",

    "fosiles trilobites",

    "fosil trilobites",

    "fósiles auténticos",

    "tienda de fósiles",

    "trilobites de marruecos",

    "comprar fósiles"

  ],

};



export default function TiendaPage() {


  return (

    <main
      className="
        min-h-screen
        bg-[hsl(var(--background))]
      "
    >



      {/* HERO */}


      <section
        className="
          border-b
          border-[hsl(var(--border))]
        "
      >


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


          <div
            className="
              max-w-3xl
            "
          >


            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.22em]
                text-[hsl(var(--primary))]
              "
            >

              Colección de Fósiles de Marruecos

            </p>





            <h1
              className="
                mt-4
                text-4xl
                font-semibold
                leading-[1.05]
                tracking-[-0.04em]
                text-[hsl(var(--heading))]
                sm:text-5xl
                lg:text-6xl
              "
            >

              Fósiles Auténticos de Marruecos y Ejemplares de Trilobites

            </h1>






            <p
              className="
                mt-6
                max-w-2xl
                text-base
                leading-8
                text-[hsl(var(--text-secondary))]
                sm:text-lg
              "
            >

              Descubre fósiles auténticos de Marruecos, incluyendo
              trilobites procedentes de famosas regiones fósiles.
              Cada pieza representa millones de años de historia natural
              y es seleccionada cuidadosamente para coleccionistas,
              museos y amantes de la geología.

            </p>



          </div>



        </div>


      </section>







      {/* INTRO */}



      <section
        className="
          mx-auto
          max-w-7xl
          px-5
          py-14
          sm:px-8
          lg:px-10
        "
      >


        <div
          className="
            max-w-3xl
          "
        >



          <h2
            className="
              text-3xl
              font-semibold
              tracking-tight
              text-[hsl(var(--heading))]
              sm:text-4xl
            "
          >

            Descubre Fósiles de Marruecos

          </h2>





          <p
            className="
              mt-5
              leading-8
              text-[hsl(var(--text-secondary))]
            "
          >

            Marruecos es uno de los lugares más famosos del mundo
            para descubrir fósiles. Las Montañas del Anti-Atlas son
            conocidas por sus excepcionales ejemplares conservados
            durante millones de años.

          </p>






          <p
            className="
              mt-5
              leading-8
              text-[hsl(var(--text-secondary))]
            "
          >

            Nuestra colección incluye fósiles auténticos seleccionados
            para coleccionistas, colecciones educativas y personas que
            buscan un tesoro natural único de Marruecos.

          </p>



        </div>



      </section>








      {/* PRODUCTS */}



      <section
        className="
          bg-[hsl(var(--surface-soft))]
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
          "
        >





          <div
            className="
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >



            <div>


              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[hsl(var(--primary))]
                "
              >

                Tienda de Fósiles

              </p>





              <h2
                className="
                  mt-3
                  text-3xl
                  font-semibold
                  text-[hsl(var(--heading))]
                  sm:text-4xl
                "
              >

                Fósiles Marroquíes Disponibles

              </h2>



            </div>





            <p
              className="
                text-sm
                text-[hsl(var(--text-muted))]
              "
            >

              {shopProducts.length} piezas auténticas disponibles

            </p>




          </div>









          <div
            className="
              mt-10
              grid
              gap-8
              md:grid-cols-2
              xl:grid-cols-3
            "
          >




            {shopProducts.map((product)=>(


              <article

                key={product.id}

                className="
                  group
                  overflow-hidden
                  rounded-3xl
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

                  href={`/es/tienda/${product.slug}`}

                  className="block"

                >



                  <div
                    className="
                      relative
                      aspect-[4/3]
                      overflow-hidden
                    "
                  >



                    <Image

                      src={product.image}

                      alt={product.title}

                      fill

                      sizes="
                      (max-width:768px)100vw,
                      (max-width:1280px)50vw,
                      33vw
                      "

                      className="
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "

                    />




                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/50
                        via-black/10
                        to-transparent
                      "
                    />





                    {product.badge && (

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
                        "

                      >

                        {product.badge}

                      </span>

                    )}





                  </div>


                </Link>







                <div className="p-6">





                  <p

                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-[hsl(var(--primary))]
                    "

                  >

                    {product.category}

                  </p>





                  <h3

                    className="
                      mt-3
                      text-2xl
                      font-semibold
                      text-[hsl(var(--heading))]
                    "

                  >


                    <Link

                      href={`/es/tienda/${product.slug}`}

                    >

                      {product.title}

                    </Link>



                  </h3>







                  <p

                    className="
                      mt-4
                      text-sm
                      leading-7
                      text-[hsl(var(--text-secondary))]
                    "

                  >

                    {product.shortDescription}

                  </p>








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


                      <p
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          text-[hsl(var(--text-muted))]
                        "
                      >

                        Origen

                      </p>


                      <p
                        className="
                          mt-1
                          text-sm
                          font-semibold
                        "
                      >

                        Marruecos

                      </p>


                    </div>







                    <div>


                      <p
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          text-[hsl(var(--text-muted))]
                        "
                      >

                        Periodo

                      </p>


                      <p
                        className="
                          mt-1
                          text-sm
                          font-semibold
                        "
                      >

                        Paleozoico

                      </p>


                    </div>





                  </div>








                  <Link

                    href={`/es/tienda/${product.slug}`}

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

                    Ver detalles del fósil →

                  </Link>





                </div>





              </article>



            ))}



          </div>





        </div>



      </section>









      {/* CTA */}



      <section

        className="
          mx-auto
          max-w-7xl
          px-5
          py-16
          sm:px-8
          lg:px-10
        "

      >



        <div

          className="
            rounded-3xl
            bg-[hsl(var(--secondary))]
            p-10
            sm:p-14
          "

        >



          <h2

            className="
              text-3xl
              font-semibold
              text-white
              sm:text-4xl
            "

          >

            ¿Buscas un fósil marroquí específico?

          </h2>





          <p

            className="
              mt-5
              max-w-2xl
              leading-8
              text-white/70
            "

          >

            Contacta con nosotros para consultar disponibilidad,
            fotografías adicionales, detalles del fósil y opciones
            de envío internacional.

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

            Contactar

          </Link>





        </div>




      </section>





    </main>

  );

}