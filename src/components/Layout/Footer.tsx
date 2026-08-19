import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--footer))] text-[hsl(var(--footer-foreground))]">

      {/* Main Footer */}
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center"
            >
              <span className="font-[family-name:var(--font-cormorant)] text-[32px] font-semibold tracking-[-0.03em]">
                Moroccan
              </span>

              <span className="font-[family-name:var(--font-cormorant)] text-[32px] font-semibold tracking-[-0.03em] text-[hsl(var(--primary))]">
                Trip
              </span>
            </Link>

            <p className="mt-5 max-w-[350px] text-[14px] leading-7 text-[hsl(var(--footer-muted))]">
              Thoughtfully designed journeys across Morocco,
              created for travelers who want to experience the
              country beyond the ordinary.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-[family-name:var(--font-manrope)] text-sm font-bold uppercase tracking-[0.12em]">
              Explore
            </h3>

            <div className="mt-5 space-y-3">
              <Link
                href="/tours"
                className="block text-sm text-[hsl(var(--footer-muted))] transition-colors hover:text-[hsl(var(--primary-foreground))]"
              >
                Morocco Tours
              </Link>

              <Link
                href="/destinations"
                className="block text-sm text-[hsl(var(--footer-muted))] transition-colors hover:text-[hsl(var(--primary-foreground))]"
              >
                Destinations
              </Link>

              <Link
                href="/blog"
                className="block text-sm text-[hsl(var(--footer-muted))] transition-colors hover:text-[hsl(var(--primary-foreground))]"
              >
                Travel Journal
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-[family-name:var(--font-manrope)] text-sm font-bold uppercase tracking-[0.12em]">
              Company
            </h3>

            <div className="mt-5 space-y-3">
              <Link
                href="/about"
                className="block text-sm text-[hsl(var(--footer-muted))] transition-colors hover:text-[hsl(var(--primary-foreground))]"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="block text-sm text-[hsl(var(--footer-muted))] transition-colors hover:text-[hsl(var(--primary-foreground))]"
              >
                Contact
              </Link>

              <Link
                href="/privacy-policy"
                className="block text-sm text-[hsl(var(--footer-muted))] transition-colors hover:text-[hsl(var(--primary-foreground))]"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-[family-name:var(--font-manrope)] text-sm font-bold uppercase tracking-[0.12em]">
              Start Your Journey
            </h3>

            <p className="mt-5 text-sm leading-6 text-[hsl(var(--footer-muted))]">
              Tell us what you want to experience in Morocco.
              We will help you create the right journey.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[hsl(var(--primary))] transition-colors hover:text-[hsl(var(--primary-foreground))]"
            >
              Plan Your Trip

              <span aria-hidden="true">→</span>
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[hsl(var(--footer-border))]">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-5 py-6 text-xs text-[hsl(var(--footer-muted))] sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">

          <p>
            © {new Date().getFullYear()} MoroccanTrip. All rights reserved.
          </p>

          <p>
            Crafted for meaningful journeys across Morocco.
          </p>

        </div>
      </div>

    </footer>
  );
}