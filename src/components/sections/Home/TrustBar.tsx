export default function TrustBar() {
    return (
      <section
        className="
        border-y
        border-[hsl(var(--border))]
        bg-[hsl(var(--background))]
        "
      >
  
        <div
          className="
          mx-auto
          max-w-7xl
          px-5
          py-10
  
          sm:px-8
          lg:px-10
          "
        >
  
  
          <div
            className="
            grid
            gap-8
  
            sm:grid-cols-2
            lg:grid-cols-4
            "
          >
  
  
            {/* Tripadvisor */}
  
            <div
              className="
              group
              flex
              items-start
              gap-4
              "
            >
  
              <div
                className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[hsl(var(--border))]
                text-[hsl(var(--primary))]
                "
              >
                ★
              </div>
  
  
              <div>
  
                <h3
                  className="
                  font-[family-name:var(--font-cormorant)]
                  text-xl
                  font-semibold
                  text-[hsl(var(--heading))]
                  "
                >
                  Tripadvisor
                </h3>
  
  
                <p
                  className="
                  mt-1
                  text-sm
                  text-[hsl(var(--text-secondary))]
                  "
                >
                  Rated Experience
                </p>
  
              </div>
  
  
            </div>
  
  
  
  
  
  
  
            {/* Local Experts */}
  
  
            <div
              className="
              flex
              items-start
              gap-4
              "
            >
  
              <div
                className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[hsl(var(--border))]
                text-[hsl(var(--primary))]
                "
              >
                ✦
              </div>
  
  
  
              <div>
  
  
                <h3
                  className="
                  font-[family-name:var(--font-cormorant)]
                  text-xl
                  font-semibold
                  text-[hsl(var(--heading))]
                  "
                >
                  Local Experts
                </h3>
  
  
                <p
                  className="
                  mt-1
                  text-sm
                  text-[hsl(var(--text-secondary))]
                  "
                >
                  Marrakech Based Team
                </p>
  
  
              </div>
  
  
            </div>
  
  
  
  
  
  
  
  
  
            {/* Private Tours */}
  
  
            <div
              className="
              flex
              items-start
              gap-4
              "
            >
  
              <div
                className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[hsl(var(--border))]
                text-[hsl(var(--primary))]
                "
              >
                ◇
              </div>
  
  
  
              <div>
  
  
                <h3
                  className="
                  font-[family-name:var(--font-cormorant)]
                  text-xl
                  font-semibold
                  text-[hsl(var(--heading))]
                  "
                >
                  Private Tours
                </h3>
  
  
                <p
                  className="
                  mt-1
                  text-sm
                  text-[hsl(var(--text-secondary))]
                  "
                >
                  Custom Morocco Journeys
                </p>
  
  
              </div>
  
  
            </div>
  
  
  
  
  
  
  
  
  
            {/* Authentic */}
  
  
            <div
              className="
              flex
              items-start
              gap-4
              "
            >
  
              <div
                className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[hsl(var(--border))]
                text-[hsl(var(--primary))]
                "
              >
                ✧
              </div>
  
  
  
              <div>
  
  
                <h3
                  className="
                  font-[family-name:var(--font-cormorant)]
                  text-xl
                  font-semibold
                  text-[hsl(var(--heading))]
                  "
                >
                  Authentic
                </h3>
  
  
                <p
                  className="
                  mt-1
                  text-sm
                  text-[hsl(var(--text-secondary))]
                  "
                >
                  Moroccan Experiences
                </p>
  
  
              </div>
  
  
            </div>
  
  
  
  
          </div>
  
  
        </div>
  
  
      </section>
    );
  }