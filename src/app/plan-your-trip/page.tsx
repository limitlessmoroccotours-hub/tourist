import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

// ─────────────────────────────
// CONTACT CONFIG
// Change these later when you create
// Moroccan Trip email / WhatsApp.
// ─────────────────────────────

const CONTACT_EMAIL =
  "contact@limitlessmoroccotours.com";

const WHATSAPP_NUMBER =
  "212607747056";

const WHATSAPP_DISPLAY =
  "+212 607 747 056";

// ─────────────────────────────
// SEO
// ─────────────────────────────

export const metadata: Metadata = {
  title:
    "Plan Your Morocco Trip | Moroccan Trip",

  description:
    "Tell us about your travel plans and request a private Morocco journey designed around your dates, destinations and preferred travel style.",

  alternates: {
    canonical:
      "https://moroccan-trip.com/plan-your-trip",
  },
};

// ─────────────────────────────
// SERVER ACTION
// ─────────────────────────────

async function submitTripRequest(
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

  const country =
    getValue("country");

  const travelDate =
    getValue("travelDate");

  const adults =
    getValue("adults");

  const children =
    getValue("children");

  const travelType =
    getValue("travelType");

  const startingCity =
    getValue("startingCity");

  const endingCity =
    getValue("endingCity");

  const duration =
    getValue("duration");

  const accommodation =
    getValue("accommodation");

  const message =
    getValue("message");

  const whatsappMessage = `
Hello Moroccan Trip,

I would like to request a private Morocco trip.

TRAVELER DETAILS

Name: ${fullName}
Email: ${email}
WhatsApp / Phone: ${phone || "Not provided"}
Country: ${country || "Not provided"}

TRIP DETAILS

Preferred travel date: ${travelDate}
Adults: ${adults}
Children: ${children || "0"}

Travel type: ${travelType}
Starting city: ${startingCity}
Ending city: ${endingCity}
Trip duration: ${duration || "Not sure yet"}
Accommodation preference: ${accommodation}

MY TRAVEL PLANS

${message || "No additional details provided."}

Thank you.
  `.trim();

  const whatsappUrl =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

  redirect(whatsappUrl);
}

// ─────────────────────────────
// PAGE
// ─────────────────────────────

export default function PlanYourTripPage() {
  return (
    <main className="bg-white">
      {/* ─────────────────────────────
          HERO
      ───────────────────────────── */}

      <section className="relative overflow-hidden bg-[#f7f3ec]">
        <div
          aria-hidden="true"
          className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-orange-200/30 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-amber-200/30 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-16 text-center sm:py-20 lg:px-8">
          <span className="inline-flex rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-orange-700 shadow-sm">
            Private & Customizable Travel
          </span>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Plan Your Morocco Trip
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Tell us where you want to
            go, when you are traveling
            and what kind of experience
            you have in mind. Our local
            team will use your details
            to help plan a private
            journey around you.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────
          FORM + SIDEBAR
      ───────────────────────────── */}

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-16">
          {/* ─────────────────────────────
              BOOKING FORM
          ───────────────────────────── */}

          <div>
            <div className="mb-9">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
                Your Travel Plans
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                Tell Us About Your Journey
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                You do not need to have
                every detail decided.
                Share what you already
                know and tell us what you
                would like to experience.
              </p>
            </div>

            <form
              action={submitTripRequest}
              className="space-y-10"
            >
              {/* ─────────────────────────
                  TRAVELER INFORMATION
              ───────────────────────── */}

              <fieldset>
                <legend className="text-xl font-bold text-slate-950">
                  Traveler Information
                </legend>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <FormField
                    label="Full Name"
                    name="fullName"
                    placeholder="Your full name"
                    required
                  />

                  <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />

                  <FormField
                    label="WhatsApp / Phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 234 567 890"
                  />

                  <FormField
                    label="Country"
                    name="country"
                    placeholder="Your country"
                  />
                </div>
              </fieldset>

              <Divider />

              {/* ─────────────────────────
                  DATE + TRAVELERS
              ───────────────────────── */}

              <fieldset>
                <legend className="text-xl font-bold text-slate-950">
                  Travel Dates & Group
                </legend>

                <div className="mt-6 grid gap-6 sm:grid-cols-3">
                  <FormField
                    label="Preferred Travel Date"
                    name="travelDate"
                    type="date"
                    required
                  />

                  <FormField
                    label="Adults"
                    name="adults"
                    type="number"
                    min="1"
                    defaultValue="2"
                    required
                  />

                  <FormField
                    label="Children"
                    name="children"
                    type="number"
                    min="0"
                    defaultValue="0"
                  />
                </div>
              </fieldset>

              <Divider />

              {/* ─────────────────────────
                  TRIP DETAILS
              ───────────────────────── */}

              <fieldset>
                <legend className="text-xl font-bold text-slate-950">
                  Trip Details
                </legend>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <SelectField
                    label="Travel Type"
                    name="travelType"
                    required
                    options={[
                      "Morocco Tour",
                      "Sahara Desert Tour",
                      "Day Trip",
                      "Special Offer",
                      "Custom Tour",
                      "Not Sure Yet",
                    ]}
                  />

                  <FormField
                    label="Trip Duration"
                    name="duration"
                    placeholder="Example: 7 days"
                  />

                  <SelectField
                    label="Starting City"
                    name="startingCity"
                    required
                    options={[
                      "Marrakech",
                      "Casablanca",
                      "Fes",
                      "Tangier",
                      "Other",
                    ]}
                  />

                  <SelectField
                    label="Ending City"
                    name="endingCity"
                    required
                    options={[
                      "Marrakech",
                      "Casablanca",
                      "Fes",
                      "Tangier",
                      "Same as starting city",
                      "Other",
                    ]}
                  />

                  <div className="sm:col-span-2">
                    <SelectField
                      label="Accommodation Preference"
                      name="accommodation"
                      required
                      options={[
                        "Standard",
                        "Comfort",
                        "Luxury",
                        "Not Sure Yet",
                      ]}
                    />
                  </div>
                </div>
              </fieldset>

              <Divider />

              {/* ─────────────────────────
                  MESSAGE
              ───────────────────────── */}

              <fieldset>
                <legend className="text-xl font-bold text-slate-950">
                  Tell Us What You Have in Mind
                </legend>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  You can mention the
                  places you want to
                  visit, your preferred
                  pace, interests,
                  accommodation or any
                  special requests.
                </p>

                <textarea
                  name="message"
                  rows={7}
                  placeholder="Example: We would like to start in Marrakech, visit the Sahara Desert, spend more time in Merzouga and finish our journey in Fes..."
                  className="mt-5 w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-sm leading-7 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                />
              </fieldset>

              {/* ─────────────────────────
                  SUBMIT
              ───────────────────────── */}

              <div className="rounded-3xl bg-slate-50 p-6 sm:p-7">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-orange-600 px-7 py-4 text-sm font-bold text-white shadow-sm transition hover:bg-orange-700 sm:w-auto"
                >
                  Send Trip Request on WhatsApp

                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      d="M4.5 10h11m0 0-4.5-4.5M15.5 10 11 14.5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <p className="mt-4 max-w-2xl text-xs leading-6 text-slate-500">
                  No payment is required
                  to send your request.
                  After submitting, you
                  will be taken to
                  WhatsApp with your trip
                  details ready to send.
                </p>
              </div>
            </form>
          </div>

          {/* ─────────────────────────────
              SIDEBAR
          ───────────────────────────── */}

          <aside>
            <div className="sticky top-28 space-y-6">
              {/* WHY US */}

              <div className="rounded-3xl bg-slate-950 p-7 text-white">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-400">
                  Why Plan With Us?
                </p>

                <h2 className="mt-3 text-2xl font-bold">
                  Private Travel With a
                  Local Team
                </h2>

                <ul className="mt-6 space-y-4">
                  {[
                    "Marrakech-based local team",
                    "Private travel",
                    "Customizable routes",
                    "Flexible stops",
                    "Multilingual communication",
                    "Sahara travel experience",
                    "Day trips and multi-day journeys",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-slate-300"
                    >
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-orange-400">
                        ✓
                      </span>

                      <span>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* WHATSAPP */}

              <div className="rounded-3xl border border-slate-200 bg-white p-7">
                <p className="text-sm font-bold text-slate-950">
                  Prefer to Talk Directly?
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  You can contact our
                  team directly on
                  WhatsApp if you have a
                  quick question before
                  completing the form.
                </p>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    "Hello Moroccan Trip, I would like some help planning a private trip to Morocco."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex font-bold text-orange-600 transition hover:text-orange-700"
                >
                  {WHATSAPP_DISPLAY} →
                </a>
              </div>

              {/* EMAIL */}

              <div className="rounded-3xl border border-slate-200 bg-white p-7">
                <p className="text-sm font-bold text-slate-950">
                  Email Us
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  For detailed requests
                  or documents, you can
                  also contact us by
                  email.
                </p>

                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-5 block break-all text-sm font-bold text-orange-600 transition hover:text-orange-700"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>

              {/* BROWSE TOURS */}

              <div className="rounded-3xl border border-orange-200 bg-orange-50 p-7">
                <p className="font-bold text-slate-950">
                  Still Choosing a Tour?
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Explore our existing
                  routes first and use
                  them as inspiration
                  for your private
                  journey.
                </p>

                <Link
                  href="/tours"
                  className="mt-5 inline-flex text-sm font-bold text-orange-600 transition hover:text-orange-700"
                >
                  Explore Morocco Tours →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ─────────────────────────────
          HOW IT WORKS
      ───────────────────────────── */}

      <section className="border-y border-slate-100 bg-[#f7f4ee]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
              What Happens Next?
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              From Request to Journey
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Send Your Request",
                text: "Tell us your dates, travelers and the kind of Morocco journey you want.",
              },
              {
                number: "02",
                title: "We Review Your Plans",
                text: "Our team looks at the route, timing and experiences that fit your available days.",
              },
              {
                number: "03",
                title: "Adjust the Details",
                text: "We can discuss the itinerary, accommodation preferences and travel pace with you.",
              },
              {
                number: "04",
                title: "Prepare Your Journey",
                text: "Once the arrangements are agreed, you can prepare to discover Morocco with your local team.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="border-t-2 border-orange-500 pt-6"
              >
                <span className="text-sm font-bold text-orange-600">
                  {step.number}
                </span>

                <h3 className="mt-4 text-xl font-bold text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// ─────────────────────────────
// REUSABLE FORM COMPONENTS
// ─────────────────────────────

type FormFieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  min?: string;
  defaultValue?: string;
};

function FormField({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  min,
  defaultValue,
}: FormFieldProps) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-800">
        {label}

        {required && (
          <span className="ml-1 text-orange-600">
            *
          </span>
        )}
      </span>

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        min={min}
        defaultValue={defaultValue}
        className="mt-2.5 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
      />
    </label>
  );
}

type SelectFieldProps = {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
};

function SelectField({
  label,
  name,
  options,
  required = false,
}: SelectFieldProps) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-800">
        {label}

        {required && (
          <span className="ml-1 text-orange-600">
            *
          </span>
        )}
      </span>

      <select
        name={name}
        required={required}
        defaultValue=""
        className="mt-2.5 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
      >
        <option
          value=""
          disabled
        >
          Select an option
        </option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function Divider() {
  return (
    <div className="border-t border-slate-200" />
  );
}