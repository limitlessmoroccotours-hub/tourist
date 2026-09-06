export default function TrustBar({
  content,
}: {
  content?: {
    tripadvisorTitle?: string;
    tripadvisorSubtitle?: string;

    expertsTitle?: string;
    expertsSubtitle?: string;

    privateTitle?: string;
    privateSubtitle?: string;

    authenticTitle?: string;
    authenticSubtitle?: string;
  };
}) {
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
  
                <p
                  className="
                  font-[family-name:var(--font-cormorant)]
                  text-xl
                  font-semibold
                  text-[hsl(var(--heading))]
                  "
                >
                  {content?.tripadvisorTitle ?? "Tripadvisor"}
                </p>
  
  
                <p
                  className="
                  mt-1
                  text-sm
                  text-[hsl(var(--text-secondary))]
                  "
                >
                  {content?.tripadvisorSubtitle ?? "Rated Experience"}
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
  
  
                <p
                  className="
                  font-[family-name:var(--font-cormorant)]
                  text-xl
                  font-semibold
                  text-[hsl(var(--heading))]
                  "
                >
                  {content?.expertsTitle ?? "Local Experts"}
                </p>
  
  
                <p
                  className="
                  mt-1
                  text-sm
                  text-[hsl(var(--text-secondary))]
                  "
                >
                  {content?.expertsSubtitle ?? "Marrakech Based Team"}
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
  
  
                <p
                  className="
                  font-[family-name:var(--font-cormorant)]
                  text-xl
                  font-semibold
                  text-[hsl(var(--heading))]
                  "
                >
                  {content?.privateTitle ?? "Private Tours"}
                </p>
  
  
                <p
                  className="
                  mt-1
                  text-sm
                  text-[hsl(var(--text-secondary))]
                  "
                >
                  {content?.privateSubtitle ?? "Custom Morocco Journeys"}
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
  
  
                <p
                  className="
                  font-[family-name:var(--font-cormorant)]
                  text-xl
                  font-semibold
                  text-[hsl(var(--heading))]
                  "
                >
                  {content?.authenticTitle ?? "Authentic"}
                </p>
  
  
                <p
                  className="
                  mt-1
                  text-sm
                  text-[hsl(var(--text-secondary))]
                  "
                >
                  {content?.authenticSubtitle ?? "Moroccan Experiences"}
                </p>
  
  
              </div>
  
  
            </div>
  
  
  
  
          </div>
  
  
        </div>
  
  
      </section>
    );
  }