import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://moroccan-trip.com";

export const metadata: Metadata = {
  title: "Terms & Conditions | Moroccan Trip",
  description:
    "Read the Moroccan Trip terms and conditions for Morocco tours, travel inquiries, bookings, payments, itinerary changes, and travel services.",

  alternates: {
    canonical: `${SITE_URL}/terms`,
  },

  openGraph: {
    title: "Terms & Conditions | Moroccan Trip",
    description:
      "Review the terms that apply when using the Moroccan Trip website or arranging travel services with our team.",
    url: `${SITE_URL}/terms`,
    siteName: "Moroccan Trip",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="mx-auto max-w-4xl px-6 py-16 lg:py-20">
        {/* HEADER */}
        <header className="border-b border-border pb-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Moroccan Trip
          </p>

          <h1 className="mt-3 text-4xl font-bold text-heading sm:text-5xl">
            Terms &amp; Conditions
          </h1>

          <p className="mt-5 max-w-3xl leading-7 text-text-secondary">
            These Terms &amp; Conditions explain the general conditions that
            apply when you use the Moroccan Trip website, contact our team, or
            arrange travel services with us. Additional booking conditions may
            be provided before a specific trip is confirmed.
          </p>
        </header>

        <div className="mt-10 space-y-10">
          {/* USE OF WEBSITE */}
          <section>
            <h2 className="text-2xl font-bold text-heading">
              Use of Our Website
            </h2>

            <p className="mt-4 leading-7 text-text-secondary">
              You may use the Moroccan Trip website to explore travel
              information, tours, day trips and other services, and to contact
              our team about planning a trip in Morocco.
            </p>

            <p className="mt-4 leading-7 text-text-secondary">
              Information published on the website is provided for general
              travel-planning purposes. Tour details, availability, routes and
              other information may be updated when necessary.
            </p>
          </section>

          {/* TRAVEL INQUIRIES */}
          <section>
            <h2 className="text-2xl font-bold text-heading">
              Travel Inquiries and Tour Requests
            </h2>

            <p className="mt-4 leading-7 text-text-secondary">
              Sending a contact form, WhatsApp message or other inquiry does not
              by itself confirm a booking. Our team may need additional
              information about your travel dates, number of travelers,
              itinerary and requested services before confirming availability.
            </p>

            <p className="mt-4 leading-7 text-text-secondary">
              A trip should be considered confirmed only after the relevant
              arrangements and booking conditions have been communicated and
              accepted.
            </p>
          </section>

          {/* PRICES */}
          <section>
            <h2 className="text-2xl font-bold text-heading">
              Prices and Availability
            </h2>

            <p className="mt-4 leading-7 text-text-secondary">
              Tour prices and availability may depend on factors such as travel
              dates, group size, accommodation choices, transportation,
              requested activities and availability of travel services.
            </p>

            <p className="mt-4 leading-7 text-text-secondary">
              When a personalized itinerary or quotation is prepared, the
              information provided with that offer should be used as the
              applicable pricing information for that request.
            </p>
          </section>

          {/* PAYMENT */}
          <section>
            <h2 className="text-2xl font-bold text-heading">
              Payments and Booking Confirmation
            </h2>

            <p className="mt-4 leading-7 text-text-secondary">
              If payment is required to confirm a booking, the applicable
              payment amount, method and booking conditions will be
              communicated before confirmation.
            </p>

            <p className="mt-4 leading-7 text-text-secondary">
              Please review the details provided for your specific booking
              before making a payment. If anything is unclear, contact Moroccan
              Trip before completing the transaction.
            </p>
          </section>

          {/* CANCELLATIONS */}
          <section>
            <h2 className="text-2xl font-bold text-heading">
              Cancellations and Refunds
            </h2>

            <p className="mt-4 leading-7 text-text-secondary">
              Cancellation and refund conditions can vary depending on the
              services included in a trip and the arrangements made for a
              particular booking. Any applicable cancellation or refund
              conditions should be communicated before the booking is
              confirmed.
            </p>

            <p className="mt-4 leading-7 text-text-secondary">
              If you need to cancel or change confirmed travel arrangements,
              please contact our team as soon as possible so we can review the
              applicable booking conditions and available options.
            </p>
          </section>

          {/* ITINERARY */}
          <section>
            <h2 className="text-2xl font-bold text-heading">
              Itinerary Changes
            </h2>

            <p className="mt-4 leading-7 text-text-secondary">
              Morocco travel itineraries may occasionally need to change due to
              weather, road conditions, local circumstances, availability,
              safety considerations or other events that affect the planned
              journey.
            </p>

            <p className="mt-4 leading-7 text-text-secondary">
              When a change is necessary, we will aim to provide a reasonable
              alternative while considering the nature of the original travel
              arrangements.
            </p>
          </section>

          {/* TRAVELER RESPONSIBILITIES */}
          <section>
            <h2 className="text-2xl font-bold text-heading">
              Traveler Responsibilities
            </h2>

            <p className="mt-4 leading-7 text-text-secondary">
              Travelers are responsible for providing accurate information
              when arranging a trip and for informing us about relevant
              requirements that may affect the services requested.
            </p>

            <p className="mt-4 leading-7 text-text-secondary">
              Travelers are also responsible for ensuring that they have the
              passports, visas, travel documents and other entry requirements
              applicable to their individual circumstances and nationality.
            </p>
          </section>

          {/* INSURANCE */}
          <section>
            <h2 className="text-2xl font-bold text-heading">
              Travel Insurance
            </h2>

            <p className="mt-4 leading-7 text-text-secondary">
              Travelers should consider appropriate travel insurance for their
              trip. Coverage may be useful for circumstances such as medical
              needs, trip interruption, cancellation, baggage issues or other
              unexpected events, depending on the policy selected.
            </p>
          </section>

          {/* THIRD PARTIES */}
          <section>
            <h2 className="text-2xl font-bold text-heading">
              Third-Party Travel Services
            </h2>

            <p className="mt-4 leading-7 text-text-secondary">
              Some travel arrangements may involve independent third-party
              service providers, depending on the itinerary and services
              requested. These may include accommodation providers,
              transportation services, activity providers or other travel
              partners.
            </p>

            <p className="mt-4 leading-7 text-text-secondary">
              Third-party services may also be subject to their own operating
              conditions and policies.
            </p>
          </section>

          {/* FORCE MAJEURE */}
          <section>
            <h2 className="text-2xl font-bold text-heading">
              Events Outside Reasonable Control
            </h2>

            <p className="mt-4 leading-7 text-text-secondary">
              Travel can be affected by circumstances outside reasonable
              control, including severe weather, road closures, natural events,
              government restrictions, transportation disruption or other
              unexpected situations.
            </p>

            <p className="mt-4 leading-7 text-text-secondary">
              When such circumstances affect a planned service, we will aim to
              communicate with travelers and consider reasonable alternatives
              where possible.
            </p>
          </section>

          {/* WEBSITE CONTENT */}
          <section>
            <h2 className="text-2xl font-bold text-heading">
              Website Information
            </h2>

            <p className="mt-4 leading-7 text-text-secondary">
              We aim to keep information on moroccan-trip.com accurate and
              useful. However, travel information can change, and photographs,
              descriptions and sample itineraries should not be understood as a
              guarantee that every detail will always remain unchanged.
            </p>
          </section>

          {/* EXTERNAL LINKS */}
          <section>
            <h2 className="text-2xl font-bold text-heading">
              External Links
            </h2>

            <p className="mt-4 leading-7 text-text-secondary">
              Our website may include links to third-party websites or
              communication services such as WhatsApp. Those external services
              are operated independently and may have their own terms,
              policies and privacy practices.
            </p>
          </section>

          {/* PRIVACY */}
          <section>
            <h2 className="text-2xl font-bold text-heading">
              Privacy
            </h2>

            <p className="mt-4 leading-7 text-text-secondary">
              Information submitted through our website or communication
              channels is handled as described in our{" "}
              <Link
                href="/privacy-policy"
                className="font-semibold text-primary hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          {/* CHANGES */}
          <section>
            <h2 className="text-2xl font-bold text-heading">
              Changes to These Terms
            </h2>

            <p className="mt-4 leading-7 text-text-secondary">
              Moroccan Trip may update these Terms &amp; Conditions when our
              website, travel services or operating practices change. The
              current version will be published on this page.
            </p>
          </section>

          {/* CONTACT */}
          <section className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-heading">
              Questions About These Terms?
            </h2>

            <p className="mt-4 leading-7 text-text-secondary">
              If you have questions about these Terms &amp; Conditions or about
              conditions that apply to a particular tour or travel request,
              please contact Moroccan Trip before confirming your booking.
            </p>

            <Link
              href="/contact"
              className="mt-5 inline-flex font-bold text-primary hover:underline"
            >
              Contact Moroccan Trip
            </Link>
          </section>
        </div>
      </section>
    </main>
  );
}