import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://moroccan-trip.com";

export const metadata: Metadata = {
  title: "Privacy Policy | Moroccan Trip",
  description:
    "Read the Moroccan Trip Privacy Policy and learn how we collect, use, and handle personal information when you contact us or request travel services.",

  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
  },

  openGraph: {
    title: "Privacy Policy | Moroccan Trip",
    description:
      "Learn how Moroccan Trip handles personal information submitted through our website and communication channels.",
    url: `${SITE_URL}/privacy-policy`,
    siteName: "Moroccan Trip",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="mx-auto max-w-4xl px-6 py-16 lg:py-20">
        <header className="border-b border-border pb-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Moroccan Trip
          </p>

          <h1 className="mt-3 text-4xl font-bold text-heading sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-5 max-w-3xl leading-7 text-text-secondary">
            Moroccan Trip respects your privacy and is committed to handling
            your personal information responsibly. This Privacy Policy explains
            what information we may collect when you use our website, contact
            our team, or request information about a Morocco trip.
          </p>
        </header>

        <div className="mt-10 space-y-10">
          {/* INFORMATION WE COLLECT */}
          <section>
            <h2 className="text-2xl font-bold text-heading">
              Information We Collect
            </h2>

            <p className="mt-4 leading-7 text-text-secondary">
              When you contact Moroccan Trip through our website, we may collect
              information that you choose to provide. This can include your
              name, email address, phone or WhatsApp number, travel dates,
              preferred destinations, number of travelers, travel preferences,
              and the details included in your message.
            </p>

            <p className="mt-4 leading-7 text-text-secondary">
              You are not required to provide information that is not relevant
              to your travel request. We encourage you to share only the details
              necessary for us to understand and respond to your inquiry.
            </p>
          </section>

          {/* HOW WE USE INFORMATION */}
          <section>
            <h2 className="text-2xl font-bold text-heading">
              How We Use Your Information
            </h2>

            <p className="mt-4 leading-7 text-text-secondary">
              We use the information you provide primarily to communicate with
              you and respond to your request. Depending on your inquiry, this
              may include discussing tour options, preparing a customized
              itinerary, answering questions about Morocco travel, or helping
              you plan a private tour or day trip.
            </p>

            <p className="mt-4 leading-7 text-text-secondary">
              Information may also be used when necessary to organize travel
              services you request and to maintain communication with you
              regarding your trip.
            </p>
          </section>

          {/* WHATSAPP */}
          <section>
            <h2 className="text-2xl font-bold text-heading">
              WhatsApp Communications
            </h2>

            <p className="mt-4 leading-7 text-text-secondary">
              Our website provides the option to contact Moroccan Trip through
              WhatsApp. If you choose to use WhatsApp, your communication is
              also subject to WhatsApp&apos;s own privacy practices and terms.
              Information sent through WhatsApp is processed through that
              third-party service.
            </p>

            <p className="mt-4 leading-7 text-text-secondary">
              You may choose to contact us through another available
              communication method if you prefer not to use WhatsApp.
            </p>
          </section>

          {/* SHARING */}
          <section>
            <h2 className="text-2xl font-bold text-heading">
              Sharing of Information
            </h2>

            <p className="mt-4 leading-7 text-text-secondary">
              Personal information may be shared when reasonably necessary to
              respond to your request, arrange services you have asked us to
              organize, protect our legal interests, or comply with applicable
              legal obligations.
            </p>

            <p className="mt-4 leading-7 text-text-secondary">
              We do not intentionally publish the personal information you send
              through our contact channels on this website.
            </p>
          </section>

          {/* RETENTION */}
          <section>
            <h2 className="text-2xl font-bold text-heading">
              How Long We Keep Information
            </h2>

            <p className="mt-4 leading-7 text-text-secondary">
              We keep personal information only for as long as reasonably
              necessary for the purpose for which it was provided, including
              responding to inquiries, organizing requested travel services,
              maintaining relevant records, and meeting applicable legal
              obligations.
            </p>
          </section>

          {/* SECURITY */}
          <section>
            <h2 className="text-2xl font-bold text-heading">
              Information Security
            </h2>

            <p className="mt-4 leading-7 text-text-secondary">
              We take reasonable steps to protect the information provided to
              us. However, no website, internet transmission, or electronic
              communication system can be guaranteed to be completely secure.
              For this reason, please avoid sending highly sensitive
              information that is not necessary for your travel inquiry.
            </p>
          </section>

          {/* USER CHOICES */}
          <section>
            <h2 className="text-2xl font-bold text-heading">
              Your Privacy Choices
            </h2>

            <p className="mt-4 leading-7 text-text-secondary">
              If you have previously contacted Moroccan Trip and would like to
              ask about the personal information you provided, request a
              correction, or ask us to delete information that we are not
              required to retain, you can contact our team.
            </p>
          </section>

          {/* THIRD PARTY LINKS */}
          <section>
            <h2 className="text-2xl font-bold text-heading">
              Third-Party Websites and Services
            </h2>

            <p className="mt-4 leading-7 text-text-secondary">
              Our website may contain links to third-party websites or services.
              Moroccan Trip does not control the privacy practices of those
              third parties. We recommend reviewing their privacy policies when
              you leave our website or use an external service.
            </p>
          </section>

          {/* CHANGES */}
          <section>
            <h2 className="text-2xl font-bold text-heading">
              Changes to This Privacy Policy
            </h2>

            <p className="mt-4 leading-7 text-text-secondary">
              We may update this Privacy Policy when our website, services, or
              privacy practices change. The latest version will be published on
              this page.
            </p>
          </section>

          {/* CONTACT */}
          <section className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-heading">
              Contact Us About Privacy
            </h2>

            <p className="mt-4 leading-7 text-text-secondary">
              If you have questions about this Privacy Policy or about
              information you previously provided to Moroccan Trip, please
              contact our team through our contact page.
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