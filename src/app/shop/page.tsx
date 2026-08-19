import Image from "next/image";
import Link from "next/link";

import { shopProducts } from "@/data/shop";



export const metadata = {

  title:
    "Moroccan Fossils Shop | Authentic Trilobite Fossils from Morocco",


  description:
    "Explore authentic Moroccan fossils including trilobites and unique geological specimens from Morocco. Discover natural treasures for collectors and fossil enthusiasts worldwide.",


  keywords: [

    "moroccan fossils shop",

    "trilobite fossils from morocco",

    "moroccan trilobite fossils",

    "fossils from morocco",

    "authentic fossils for sale",

    "morocco fossil specimens"

  ],

};





export default function ShopPage() {


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
              Moroccan Fossils Collection
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
              Authentic Moroccan Fossils & Trilobite Specimens
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

              Discover authentic fossils from Morocco, including
              trilobite specimens from famous fossil regions.
              Each piece represents millions of years of natural
              history and is carefully selected for collectors,
              museums, and fossil enthusiasts.

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
            Discover Fossils from Morocco
          </h2>




          <p
            className="
              mt-5
              leading-8
              text-[hsl(var(--text-secondary))]
            "
          >

            Morocco is one of the world's most famous locations
            for fossil discoveries. The Anti-Atlas Mountains are
            known for exceptional fossil specimens preserved from
            ancient marine environments.

          </p>




          <p
            className="
              mt-5
              leading-8
              text-[hsl(var(--text-secondary))]
            "
          >

            Our collection focuses on authentic Moroccan fossils
            selected for collectors, educational purposes, and
            anyone searching for a unique natural treasure from
            Morocco.

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
                Fossil Shop
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
                Available Moroccan Fossils
              </h2>


            </div>



            <p
              className="
                text-sm
                text-[hsl(var(--text-muted))]
              "
            >
              {shopProducts.length} authentic collection items
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
                  href={`/shop/${product.slug}`}
                  className="
                    block
                  "
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








                <div
                  className="
                    p-6
                  "
                >




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
                      href={`/shop/${product.slug}`}
                      className="
                        transition-colors
                        hover:text-[hsl(var(--primary))]
                      "
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
                        Origin
                      </p>


                      <p
                        className="
                          mt-1
                          text-sm
                          font-semibold
                        "
                      >
                        Morocco
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
                        Period
                      </p>


                      <p
                        className="
                          mt-1
                          text-sm
                          font-semibold
                        "
                      >
                        Paleozoic
                      </p>


                    </div>



                  </div>






                  <Link

                    href={`/shop/${product.slug}`}

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

                    View Fossil Details →

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

            Looking for a Specific Moroccan Fossil?

          </h2>




          <p
            className="
              mt-5
              max-w-2xl
              leading-8
              text-white/70
            "
          >

            Contact us for availability, additional photos,
            fossil details and worldwide shipping options.

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

            Contact Us

          </Link>




        </div>


      </section>





    </main>

  );

}