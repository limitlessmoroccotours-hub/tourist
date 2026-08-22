import Image from "next/image";
import Link from "next/link";

import { blogPosts } from "@/data/blog";



const featuredBlogs = blogPosts.slice(0,3);



export default function TravelInspiration() {


  return (

    <section
      className="
      bg-[hsl(var(--surface))]
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
          gap-6

          md:flex-row
          md:items-end
          md:justify-between
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
              text-sm
              font-bold
              uppercase
              tracking-[0.18em]
              text-[hsl(var(--primary))]
              "
            >
              Travel Inspiration
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
              Discover Morocco Before You Go
            </h2>



            <p
              className="
              mt-5
              text-base
              leading-7
              text-[hsl(var(--text-secondary))]
              "
            >
              Travel guides, local tips and inspiration to help
              you plan your perfect Morocco journey.
            </p>


          </div>



          <Link
            href="/blog"
            className="
            hidden
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

            md:inline-flex
            "
          >
            View All Guides →
          </Link>


        </div>





        {/* Blog Cards */}


        <div
          className="
          mt-12
          grid
          gap-8

          md:grid-cols-3
          "
        >


          {featuredBlogs.map((post)=>(


            <article
              key={post.id}
              className="
              group
              overflow-hidden
              rounded-3xl
              border
              border-black/5
              bg-white
              "
            >


              <Link
                href={`/blog/${post.slug}`}
              >


                <div
                  className="
                  relative
                  aspect-[4/3]
                  overflow-hidden
                  "
                >


                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width:768px) 100vw,33vw"
                    className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                    "
                  />


                </div>





                <div
                  className="
                  p-6
                  "
                >



                  <p
                    className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-wider
                    text-[hsl(var(--primary))]
                    "
                  >
                    {post.category}
                  </p>



                  <h3
                    className="
                    mt-3
                    text-2xl
                    leading-tight
                    font-semibold
                    text-[hsl(var(--heading))]
                    "
                  >
                    {post.title}
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
                    {post.excerpt}
                  </p>



                  <div
                    className="
                    mt-6
                    flex
                    justify-between
                    text-sm
                    font-semibold
                    text-[hsl(var(--primary))]
                    "
                  >

                    <span>
                      Read Article →
                    </span>


                    <span>
                      {post.readTime}
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