import Image from "next/image";
import Link from "next/link";


export default function HeroSection() {
  return (
    <section
      className="
      relative
      isolate
      min-h-[720px]
      overflow-hidden
      bg-[hsl(var(--secondary))]
      sm:min-h-[760px]
      lg:min-h-[780px]
      "
    >

      {/* Background */}

      <Image
        src="/heropic.webp"
        alt="Morocco desert landscape and Sahara travel experience"
        fill
        priority
        sizes="100vw"
        className="
        object-cover
        object-center
        "
      />


      {/* Overlay */}

      <div
        className="
        absolute
        inset-0
        bg-[linear-gradient(90deg,rgba(10,16,32,0.88)_0%,rgba(10,16,32,0.70)_45%,rgba(10,16,32,0.25)_100%)]
        "
      />


      {/* Bottom Fade */}

      <div
        className="
        absolute
        inset-x-0
        bottom-0
        h-40
        bg-gradient-to-t
        from-[hsl(var(--secondary))]
        to-transparent
        "
      />



      {/* Content */}

      <div
        className="
        relative
        mx-auto
        flex
        min-h-[720px]
        max-w-7xl
        items-center
        px-5
        pt-28
        pb-20

        sm:min-h-[760px]
        sm:px-8

        lg:min-h-[780px]
        lg:px-10
        "
      >


        <div
          className="
          max-w-3xl
          "
        >


          {/* Small Label */}

          <div
            className="
            mb-6
            flex
            items-center
            gap-3
            "
          >

            <span
              className="
              h-px
              w-12
              bg-[hsl(var(--primary))]
              "
            />


            <span
              className="
              text-[11px]
              font-bold
              uppercase
              tracking-[0.28em]
              text-[hsl(var(--gold-muted))]
              "
            >
              Private & Authentic Morocco Tours
            </span>


          </div>





          {/* Heading */}

          <h1
            className="
            font-[family-name:var(--font-cormorant)]
            text-[clamp(3rem,5.5vw,5.5rem)]
            font-semibold
            leading-[0.95]
            tracking-[-0.04em]
            text-white
            "
          >

            Morocco Tours

            <br />

            <span
              className="
              text-[hsl(var(--gold-muted))]
              "
            >
              Beyond the Ordinary
            </span>


          </h1>






          {/* Description */}

          <p
            className="
            mt-7
            max-w-xl
            text-base
            leading-8
            text-white/80

            sm:text-lg
            "
          >

Discover Morocco through private tours and authentic experiences.
From Marrakech to the Sahara Desert, travel with a local team creating unforgettable journeys.

          </p>






          {/* Buttons */}

          <div
            className="
            mt-9
            flex
            flex-col
            gap-4

            sm:flex-row
            "
          >


            <Link

              href="/tours"

              className="
              group
              inline-flex
              h-14
              items-center
              justify-center
              gap-3
              rounded-full
              bg-[hsl(var(--primary))]
              px-8
              text-sm
              font-bold
              text-[hsl(var(--primary-foreground))]
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[hsl(var(--primary-hover))]
              "

            >

              Explore Morocco Tours


              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="
                transition-transform
                group-hover:translate-x-1
                "
              >

                <path d="M5 12h14" />

                <path d="m13 6 6 6-6 6" />

              </svg>


            </Link>





            <Link

              href="/contact"

              className="
              inline-flex
              h-14
              items-center
              justify-center
              rounded-full
              border
              border-white/30
              bg-white/10
              px-8
              text-sm
              font-bold
              text-white
              backdrop-blur-sm
              transition
              hover:bg-white/20
              "

            >

              Plan Your Trip

            </Link>



          </div>








          {/* Trust */}

          <div
            className="
            mt-10
            flex
            flex-wrap
            gap-4
            "
          >


            <a

              href="https://www.tripadvisor.fr/Attraction_Review-g293734-d33115204-Reviews-Limitless_morocco_tours-Marrakech_Marrakech_Safi.html"

              target="_blank"

              rel="noopener noreferrer"

              className="
              rounded-full
              border
              border-white/20
              bg-white/10
              px-5
              py-3
              text-sm
              text-white/90
              backdrop-blur-sm
              transition
              hover:bg-white/20
              "

            >

              ★★★★★ Tripadvisor Rated Experience

            </a>



            <div
              className="
              rounded-full
              border
              border-white/20
              bg-white/10
              px-5
              py-3
              text-sm
              text-white/90
              backdrop-blur-sm
              "
            >

              Local Morocco Experts

            </div>



            <div
              className="
              rounded-full
              border
              border-white/20
              bg-white/10
              px-5
              py-3
              text-sm
              text-white/90
              backdrop-blur-sm
              "
            >

              Private & Custom Tours

            </div>



          </div>



        </div>


      </div>






      {/* Scroll */}

      <div
        className="
        absolute
        bottom-8
        right-8
        hidden
        flex-col
        items-center
        gap-3
        lg:flex
        "
      >

        <span
          className="
          text-[9px]
          font-semibold
          uppercase
          tracking-[0.3em]
          text-white/50
          [writing-mode:vertical-rl]
          "
        >

          Scroll to explore

        </span>


        <span
          className="
          h-12
          w-px
          bg-white/30
          "
        />


      </div>



    </section>
  );
}