import Image from "next/image";
import Link from "next/link";


const experiences = [
  {
    title: "Sahara Desert Adventures",
    description:
      "Experience Morocco’s golden dunes, camel rides, desert camps and unforgettable Sahara sunsets.",
    image: "/images/home/MoroccoExperiences1.webp",
    link: "/tours",
  },

  {
    title: "Atlas Mountains Escape",
    description:
      "Discover mountain landscapes, Berber villages and authentic local life beyond the cities.",
    image: "/images/home/MoroccoExperiences2.webp",
    link: "/tours",
  },

  {
    title: "Moroccan Culture & Heritage",
    description:
      "Explore ancient medinas, traditional markets, Moroccan cuisine and local traditions.",
    image: "/images/home/MoroccoExperiences3.webp",
    link: "/tours",
  },

  {
    title: "Imperial Cities Journey",
    description:
      "Visit Marrakech, Fes, Rabat and Morocco’s most historic destinations.",
    image: "/images/home/MoroccoExperiences4.webp",
    link: "/tours",
  },
];



export default function MoroccoExperiences() {

  return (

    <section className="bg-[hsl(var(--background))]">


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

        <div className="max-w-3xl">


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
            Explore Morocco
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
            Morocco Experiences Beyond the Ordinary
          </h2>



          <p
            className="
            mt-5
            text-base
            leading-7
            text-[hsl(var(--text-secondary))]
            "
          >
            Discover Morocco through unforgettable experiences,
            from Sahara adventures and mountain escapes to cultural
            discoveries created by local experts.
          </p>


        </div>



        {/* Cards */}

        <div
          className="
          mt-12
          grid
          gap-8

          sm:grid-cols-2
          lg:grid-cols-4
          "
        >


          {experiences.map((item)=>(


            <article
              key={item.title}
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


              <Link href={item.link}>


                {/* Image */}


                <div
                  className="
                  relative
                  aspect-[4/5]
                  overflow-hidden
                  "
                >


                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width:768px) 100vw, 25vw"
                    className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                    "
                  />


                </div>




                {/* Content */}


                <div
                  className="
                  p-6
                  "
                >


                  <h3
                    className="
                    min-h-[58px]
                    text-2xl
                    font-semibold
                    leading-tight
                    text-[hsl(var(--heading))]
                    "
                  >
                    {item.title}
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
                    {item.description}
                  </p>



                  <div
                    className="
                    mt-6
                    flex
                    items-center
                    text-sm
                    font-semibold
                    text-[hsl(var(--primary))]
                    "
                  >
                    Explore Experience

                    <span className="ml-2 transition-transform group-hover:translate-x-1">
                      →
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