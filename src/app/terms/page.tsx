
export const metadata = {
  title: "Terms & Conditions | Moroccan Trip",
  description:
    "Read Moroccan Trip terms and conditions for Morocco tours, bookings, payments, and travel services."
};


export default function TermsPage() {
    return (
      <main className="mx-auto max-w-4xl px-6 py-16">
  
        <h1 className="text-4xl font-bold mb-8">
          Terms & Conditions
        </h1>
  
        <p className="mb-6">
          By using Moroccan Trip services, you agree to these terms
          and conditions.
        </p>
  
        <h2 className="text-2xl font-semibold mb-4">
          Tour Bookings
        </h2>
  
        <p className="mb-6">
          Tour availability, prices, and itineraries may change
          depending on availability and travel conditions.
        </p>
  
        <h2 className="text-2xl font-semibold mb-4">
          Payments
        </h2>
  
        <p className="mb-6">
          Payment details and booking conditions will be provided
          before confirming your trip.
        </p>
  
        <h2 className="text-2xl font-semibold mb-4">
          Contact
        </h2>
  
        <p>
          For any questions regarding our terms, please contact
          Moroccan Trip.
        </p>
  
      </main>
    );
  }