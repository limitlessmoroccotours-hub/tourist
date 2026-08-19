import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[720px] overflow-hidden bg-[hsl(var(--secondary))] sm:min-h-[780px] lg:min-h-[820px]">

      {/* Background Image */}
      <Image
        src="/heropic.jpg"
        alt="Morocco desert landscape"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,16,32,0.88)_0%,rgba(10,16,32,0.68)_42%,rgba(10,16,32,0.30)_100%)]" />

      {/* Bottom Soft Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[hsl(var(--secondary))] to-transparent" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[720px] max-w-[1280px] items-center px-5 pb-20 pt-32 sm:min-h-[780px] sm:px-8 lg:min-h-[820px] lg:px-10">

        <div className="max-w-[760px]">

          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[hsl(var(--primary))]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[hsl(var(--gold-muted))]">
              Discover Morocco
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-[750px] font-[family-name:var(--font-cormorant)] text-[clamp(3.5rem,7vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.045em] text-white">
            Morocco,
            <br />
            <span className="text-[hsl(var(--gold-muted))]">
              Beyond the Ordinary.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-[600px] text-[15px] leading-7 text-white/75 sm:text-[17px] sm:leading-8">
            Discover Morocco through thoughtfully designed journeys,
            from the vibrant streets of Marrakech to the golden dunes
            of the Sahara and the quiet beauty of the Atlas Mountains.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">

            <Link
              href="/tours"
              className="group inline-flex h-13 items-center justify-center gap-3 rounded-full bg-[hsl(var(--primary))] px-7 text-sm font-bold text-[hsl(var(--primary-foreground))] shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[hsl(var(--primary-hover))] hover:shadow-xl"
            >
              Explore Our Tours

              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </Link>

            <Link
              href="/contact"
              className="inline-flex h-13 items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/15"
            >
              Plan Your Trip
            </Link>

          </div>

          {/* Trust / Highlights */}
          
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 hidden flex-col items-center gap-3 lg:flex">
        <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/50 [writing-mode:vertical-rl]">
          Scroll to explore
        </span>

        <span className="h-12 w-px bg-white/25" />
      </div>

    </section>
  );
}