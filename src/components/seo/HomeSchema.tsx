export default function HomeSchema() {

    const schema = {
  
      "@context": "https://schema.org",
  
      "@graph": [
  
        {
  
          "@type": "Organization",
  
          "@id": "https://moroccan-trip.com/#organization",
  
          "name": "MoroccanTrip",
  
          "url": "https://moroccan-trip.com/",
  
          "logo": {
            "@type": "ImageObject",
            "url":
              "https://moroccan-trip.com/images/home/Moroccan-Trip-Logo.svg"
          },
  
  
          "image":
            "https://moroccan-trip.com/images/home/og-home.webp",
  
  
          "description":
            "Private Morocco tours, Sahara Desert adventures and authentic travel experiences created by local Morocco experts.",
  
  
          "email":
            "contact@moroccan-trip.com",
  
  
          "telephone":
            "+212607747056",
  
  
          "areaServed": {
            "@type": "Country",
            "name": "Morocco"
          },
  
  
          "sameAs": [
  
            "https://www.tripadvisor.fr/Attraction_Review-g293734-d33115204-Reviews-Limitless_morocco_tours-Marrakech_Marrakech_Safi.html"
  
          ],
  
  
  
        },
  
  
        {
  
  
          "@type": "WebSite",
  
          "@id":
            "https://moroccan-trip.com/#website",
  
  
          "url":
            "https://moroccan-trip.com/",
  
  
          "name":
            "MoroccanTrip",
  
  
          "publisher": {
  
            "@id":
              "https://moroccan-trip.com/#organization"
  
          }
  
  
        }
  
      ]
  
    };
  
  
  
    return (
  
      <script
  
        type="application/ld+json"
  
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(schema)
        }}
  
      />
  
    );
  
  }