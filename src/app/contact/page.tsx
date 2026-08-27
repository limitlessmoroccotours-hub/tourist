// src/app/contact/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";
import ContactForm from "@/components/sections/contact/ContactForm";

// ─────────────────────────────
// CONTACT CONFIG
// Change these later when you create
// Moroccan Trip email / WhatsApp.
// ─────────────────────────────

const SITE_URL = "https://moroccan-trip.com";

const CONTACT_EMAIL =
  "contact@moroccan-trip.com";

const WHATSAPP_NUMBER =
  "212607747056";

const WHATSAPP_DISPLAY =
  "+212 607 747 056";

// ─────────────────────────────
// SEO
// ─────────────────────────────

export const metadata: Metadata = {
  title:
    "Contact Moroccan Trip | Marrakech Travel Team",

  description:
    "Contact our Marrakech-based team for questions about private Morocco tours, Sahara journeys, day trips and custom travel plans.",

  alternates: {
    canonical:
      `${SITE_URL}/contact`,
  },

  openGraph: {
    title:
      "Contact Moroccan Trip | Marrakech Travel Team",

    description:
      "Get in touch with our local Marrakech team for help with Morocco tours, day trips and private travel planning.",

    url:
      `${SITE_URL}/contact`,

    siteName:
      "Moroccan Trip",

    type:
      "website",
  },
};

// ─────────────────────────────
// SERVER ACTION
// ─────────────────────────────

async function submitContactForm(
  formData: FormData
) {
  "use server";

  const getValue = (name: string) =>
    String(
      formData.get(name) ?? ""
    ).trim();

  const fullName =
    getValue("fullName");

  const email =
    getValue("email");

  const phone =
    getValue("phone");

  const subject =
    getValue("subject");

  const message =
    getValue("message");

  const whatsappMessage = `
Hello Moroccan Trip,

I would like to contact your team.

CONTACT DETAILS

Name: ${fullName}
Email: ${email}
WhatsApp / Phone: ${phone || "Not provided"}

SUBJECT

${subject}

MESSAGE

${message}

Thank you.
  `.trim();

  const whatsappUrl =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

  redirect(whatsappUrl);
}

// ─────────────────────────────
// JSON-LD HELPER
// ─────────────────────────────

function jsonLdString(data: unknown) {
  return JSON.stringify(data).replace(
    /</g,
    "\\u003c"
  );
}

// ─────────────────────────────
// PAGE
// ─────────────────────────────


export default function ContactPage() {
  const contactPageJsonLd = {
    "@context":
      "https://schema.org",

    "@type":
      "ContactPage",

    name:
      "Contact Moroccan Trip",

    url:
      `${SITE_URL}/contact`,

    description:
      "Contact the Moroccan Trip travel team in Marrakech, Morocco.",

    mainEntity: {
      "@type":
        "Organization",

      name:
        "Moroccan Trip",

      url:
        SITE_URL,

      areaServed: {
        "@type":
          "Country",

        name:
          "Morocco",
      },

      address: {
        "@type":
          "PostalAddress",

        addressLocality:
          "Marrakech",

        addressCountry:
          "MA",
      },
    },
  };

  const breadcrumbJsonLd = {
    "@context":
      "https://schema.org",

    "@type":
      "BreadcrumbList",

    itemListElement: [
      {
        "@type":
          "ListItem",

        position:
          1,

        name:
          "Home",

        item:
          SITE_URL,
      },

      {
        "@type":
          "ListItem",

        position:
          2,

        name:
          "Contact",

        item:
          `${SITE_URL}/contact`,
      },
    ],
  };

  return (
    <>
     

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            jsonLdString(
              contactPageJsonLd
            ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            jsonLdString(
              breadcrumbJsonLd
            ),
        }}
      />

<section className="bg-background px-4 py-12 text-foreground sm:px-6 lg:px-8 lg:py-16">
      <section className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Contact Us
          </p>

          <h1 className="mt-3 text-3xl font-bold text-heading sm:text-4xl">
            Let&apos;s Plan Your Morocco Journey
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-text-secondary">
            Tell us about your travel plans and our local team will help you
            create a private Morocco tour designed around you.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* FORM */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-heading">
              Send us a message
            </h2>

            <p className="mt-2 text-sm leading-6 text-text-secondary">
            Fill in the form and our Morocco travel team will contact you shortly.
            </p>

           <ContactForm />
          </div>

          {/* CONTACT INFORMATION */}
          <aside className="relative flex min-h-full flex-col overflow-hidden rounded-xl bg-secondary p-7 text-secondary-foreground shadow-sm sm:p-9">
            <div className="relative">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold-muted">
                Your Morocco Travel Concierge
              </p>

              <h2 className="mt-4 max-w-md text-3xl font-bold leading-tight sm:text-4xl">
                From your first idea to a journey designed around you.
              </h2>

              <p className="mt-5 max-w-md text-base leading-8 text-secondary-foreground/75">
                Share your travel plans and let our local team transform them
                into a clear, comfortable and authentic Morocco itinerary.
              </p>
            </div>

            <div className="relative mt-9 space-y-7">
              <div className="grid grid-cols-[44px_1fr] gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-secondary-foreground/15 bg-secondary-foreground/5">
                  <MessageCircle className="h-5 w-5 text-gold-muted" />
                </div>

                <div className="border-b border-secondary-foreground/10 pb-7">
                  <h3 className="mt-1 text-lg font-bold">
                    Tell us about your trip
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-secondary-foreground/70">
                    Share your dates, preferred destinations, group size and
                    travel style.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[44px_1fr] gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-secondary-foreground/15 bg-secondary-foreground/5">
                  <Sparkles className="h-5 w-5 text-gold-muted" />
                </div>
                <div>
                  <h3 className="mt-1 text-lg font-bold">
                    Travel with confidence
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-secondary-foreground/70">
                    Enjoy local assistance, private transport and a journey
                    organized around you.
                  </p>
                </div>
              </div>
            </div>

            <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "Hello Moroccan Trip, I would like to plan my Morocco trip."
                )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-between rounded-xl bg-primary px-5 py-4 font-bold text-primary-foreground transition hover:bg-primary-hover"
            >
              <span className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5" />
                Start on WhatsApp
              </span>

              <ArrowUpRight className="h-5 w-5" />
            </a>
          </aside>
        </div>
        {/* CONTACT SUPPORTING CONTENT */}
<div className="mx-auto mt-12 max-w-4xl border-t border-border pt-10">
  <div className="grid gap-10 md:grid-cols-2">
    {/* LEFT */}
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
        Planning Your Morocco Trip
      </p>

      <h2 className="mt-3 text-2xl font-bold text-heading sm:text-3xl">
        Tell Us What Kind of Morocco Experience You Have in Mind
      </h2>

      <p className="mt-4 leading-7 text-text-secondary">
        Whether you are planning a private Morocco tour, a Sahara desert
        journey, a day trip or a customized itinerary, our local team can help
        you organize a journey around your dates, interests and travel style.
      </p>

      <p className="mt-4 leading-7 text-text-secondary">
        Explore our{" "}
        <Link
          href="/tours"
          className="font-semibold text-primary hover:underline"
        >
          Morocco tours
        </Link>
        , browse our{" "}
        <Link
          href="/day-trips"
          className="font-semibold text-primary hover:underline"
        >
          day trips
        </Link>
        , or tell us what you need through our{" "}
        <Link
          href="/custom-tour"
          className="font-semibold text-primary hover:underline"
        >
          custom tour
        </Link>{" "}
        service.
      </p>
    </div>

    {/* RIGHT */}
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
        Before You Contact Us
      </p>

      <h2 className="mt-3 text-2xl font-bold text-heading sm:text-3xl">
        What to Include in Your Message
      </h2>

      <p className="mt-4 leading-7 text-text-secondary">
        If possible, include your travel dates, number of travelers, arrival
        city, preferred destinations, trip duration and any special requests.
        These details help us understand the journey you are looking for.
      </p>

      <p className="mt-4 leading-7 text-text-secondary">
        If your plans are still flexible, simply tell us what you would most
        like to experience in Morocco and we can help you explore suitable
        options.
      </p>

      <Link
        href="/plan-your-trip"
        className="mt-6 inline-flex items-center gap-2 font-bold text-primary hover:underline"
      >
        Plan your Morocco trip
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </div>
  </div>
</div>
      </section>
    </section>
    </>
  );
}