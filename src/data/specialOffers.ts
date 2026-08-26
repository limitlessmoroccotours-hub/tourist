export type SpecialOffer = {
    id: string;
  
    slug: string;
  
    title: string;
  
    shortDescription: string;
  
    image: string;
  
    badge?: string;
  
    category: string;
  
    targetAudience: string;
  
    duration: string;
  
    destinations: string[];
  
    recommendedTours?: string[];
  
    highlights: string[];
  
    overview: string;
  
    itinerary: {
      title: string;
      description: string;
    }[];
  
    included: string[];
  
    excluded: string[];
  
    faqs: {
      question: string;
      answer: string;
    }[];
  
    seo: {
      title: string;
      description: string;
      keywords: string[];
    };
  
    booking: {
      available: boolean;
      customizable: boolean;
      contactLabel: string;
    };
  };
  
  
  
  // ─────────────────────────────
  // SPECIAL OFFERS
  // ─────────────────────────────
  
  export const specialOffers: SpecialOffer[] = [
  
    {
      id: "1",
  
      slug: "morocco-desert-tour",
  
      title:
        "Morocco Desert Tour | Sahara Adventure Special Offer",
  
  
      shortDescription:
        "Discover Morocco's desert landscapes with a private desert experience combining mountains, traditional villages and the Sahara atmosphere.",
  
  
      image:
        "/images/special-offers/morocco-desert-tour.webp",
  
  
      badge:
        "Desert Special Offer",
  
  
      category:
        "Desert Packages",
  
  
      targetAudience:
        "Travelers looking for a complete Morocco desert experience",
  
  
      duration:
        "Customizable",
  
  
  
      destinations: [
        "Marrakech",
        "High Atlas Mountains",
        "Ait Ben Haddou",
        "Draa Valley",
        "Merzouga Desert",
        "Sahara Desert",
      ],
  
  
  
      recommendedTours: [
  
        "3-day-desert-tour-marrakech-merzouga",
  
        "4-day-sahara-desert-tour-from-marrakech",
  
        "5-day-marrakech-fes-desert-tour",
  
      ],
  
  
  
      highlights: [
  
        "Private Morocco desert tour experience",
  
        "Discover Morocco's changing landscapes",
  
        "Cross the High Atlas Mountains",
  
        "Explore traditional villages and desert routes",
  
        "Experience the Sahara atmosphere",
  
        "Enjoy a flexible travel itinerary",
  
      ],
  
  
  
  
      overview: `
  Discover Morocco beyond the cities with a private Morocco desert tour designed for travelers who want to experience the country's most iconic landscapes.
  
  Travel through mountain roads, traditional villages and southern Morocco landscapes before reaching the desert regions.
  
  This special package combines culture, nature and adventure while allowing you to enjoy the journey at your own pace.
  
  The experience can be adapted according to your travel plans, making it a great choice for couples, families and private groups.
  `,
  
  
  
  
      itinerary: [
  
        {
          title:
            "Travel from Marrakech through Morocco's landscapes",
  
          description:
  `
  Begin your journey from Marrakech and travel through the High Atlas Mountains.
  
  Enjoy scenic roads, local villages and beautiful landscapes as you continue toward southern Morocco.
  `,
        },
  
  
        {
          title:
            "Discover the desert region",
  
          description:
  `
  Continue toward Morocco's desert landscapes and experience the peaceful atmosphere of the Sahara region.
  
  Enjoy the scenery, local culture and unique environment of southern Morocco.
  `,
        },
  
  
        {
          title:
            "Enjoy your personalized desert experience",
  
          description:
  `
  Continue the journey according to your selected itinerary.
  
  Because this is a customizable offer, the duration and route can be adapted to your travel style.
  `,
        },
  
      ],
  
  
  
  
      included: [
  
        "Private transportation",
  
        "Professional driver",
  
        "Flexible itinerary",
  
        "Travel assistance during the experience",
  
      ],
  
  
  
  
      excluded: [
  
        "Personal expenses",
  
        "Optional activities",
  
        "Tips and gratuities",
  
        "Meals unless included in the selected package",
  
      ],
  
  
  
  
      faqs: [
  
        {
          question:
            "What is included in this Morocco desert tour offer?",
  
          answer:
            "The offer includes private transportation, a flexible route and a personalized desert experience based on your selected itinerary.",
        },
  
  
        {
          question:
            "Is this a private Morocco desert tour?",
  
          answer:
            "Yes. This is designed as a private experience with flexibility for your travel preferences.",
        },
  
  
        {
          question:
            "Can I customize this desert package?",
  
          answer:
            "Yes. The duration, route and experiences can be adjusted according to your plans.",
        },
  
      ],
  
  
  
  
      seo: {
  
        title:
          "Morocco Desert Tour Deal | Sahara Adventure",
  
  
        description:
          "Discover Morocco with a private desert tour including mountain landscapes, traditional villages and Sahara experiences with a flexible itinerary.",
  
  
        keywords: [
  
          "morocco desert tour",
  
          "morocco desert tours",
  
          "desert tours in morocco",
  
          "desert tour morocco",
  
          "morocco sahara desert tours",
  
          "private morocco desert tour",
  
          "morocco desert experience",
  
        ],
  
      },
  
  
  
  
      booking: {
  
        available: true,
  
        customizable: true,
  
        contactLabel:
          "Request This Offer",
  
      },
  
    },
    {
        id: "2",
      
        slug: "morocco-honeymoon-package",
      
        title:
          "Morocco Honeymoon Package | Romantic Private Morocco Escape",
      
        shortDescription:
          "Experience a romantic Morocco honeymoon package combining Marrakech, the Sahara Desert, private travel, cultural discoveries and unforgettable landscapes designed for couples.",
      
      
        image:
          "/images/special-offers/morocco-honeymoon-package.webp",
      
      
        badge:
          "Honeymoon Special Offer",
      
      
        category:
          "Romantic Morocco Packages",
      
      
        targetAudience:
          "Couples looking for a private honeymoon experience in Morocco",
      
      
        duration:
          "Customizable",
      
      
        destinations: [
          "Marrakech",
          "High Atlas Mountains",
          "Ait Ben Haddou",
          "Merzouga",
          "Sahara Desert",
          "Essaouira",
        ],
      
      
        recommendedTours: [
          "10-day-morocco-tour-from-casablanca",
          "7-day-sahara-tour-from-casablanca",
          "4-day-sahara-desert-tour-from-marrakech",
        ],
      
      
        highlights: [
      
          "Private Morocco honeymoon experience designed for couples",
      
          "Discover Marrakech and its traditional atmosphere",
      
          "Cross the High Atlas Mountains through scenic landscapes",
      
          "Visit Ait Ben Haddou and southern Morocco villages",
      
          "Experience the Sahara Desert with a romantic desert atmosphere",
      
          "Enjoy a camel ride across the Erg Chebbi dunes",
      
          "Watch the sunset over the Sahara landscapes",
      
          "Combine adventure, culture and relaxation in one journey",
      
          "Flexible itinerary adapted to your travel style",
      
        ],
      
      
        overview: `
          Celebrate your honeymoon in Morocco with a private journey created for couples who want to discover the country's most beautiful landscapes and experiences.
      
          This Morocco honeymoon package combines romantic moments, cultural discoveries and unforgettable scenery. Travel through Marrakech, the Atlas Mountains and southern Morocco while enjoying the comfort and flexibility of a private experience.
      
          Discover traditional villages, ancient kasbahs and the unique atmosphere of the Sahara Desert. Experience the peaceful landscapes of Merzouga, enjoy time surrounded by desert scenery and create special memories together.
      
          The journey can also include relaxing coastal moments, making it a balanced Morocco honeymoon experience with adventure, culture and time to enjoy each destination at your own pace.
      
          Designed for couples, this private Morocco honeymoon tour can be customized according to your preferred duration, destinations and travel style.
        `,
      
      
        itinerary: [
      
          {
            title:
              "Marrakech Arrival and Romantic Moroccan Atmosphere",
      
            description:
              `
              Begin your honeymoon journey in Marrakech, one of Morocco's most famous cities.
      
              Discover the unique atmosphere of the old medina, traditional markets and beautiful surroundings while enjoying your first moments in Morocco together.
              `,
          },
      
      
          {
            title:
              "Atlas Mountains and Southern Morocco Landscapes",
      
            description:
              `
              Travel through the High Atlas Mountains and discover changing landscapes, traditional villages and historic places such as Ait Ben Haddou.
      
              This part of the journey introduces you to the natural beauty and cultural heritage of Morocco.
              `,
          },
      
      
          {
            title:
              "Sahara Desert Experience in Merzouga",
      
            description:
              `
              Continue toward the Sahara Desert and experience the peaceful atmosphere of Merzouga.
      
              Enjoy the desert landscapes, explore the Erg Chebbi dunes and experience one of Morocco's most memorable natural environments together.
              `,
          },
      
      
          {
            title:
              "Relax and Enjoy Your Private Morocco Escape",
      
            description:
              `
              Continue your journey according to your preferences.
      
              Whether you prefer more cultural discoveries, desert experiences or relaxing coastal moments, the itinerary can be adapted to create a honeymoon experience that matches your style.
              `,
          },
      
        ],
      
      
        included: [
      
          "Private transportation",
      
          "Professional driver",
      
          "Flexible honeymoon itinerary",
      
          "Travel assistance during the experience",
      
          "Private travel experience for couples",
      
        ],
      
      
        excluded: [
      
          "Personal expenses",
      
          "Optional activities",
      
          "Meals unless included in the selected package",
      
          "Tips and gratuities",
      
          "Services not mentioned in the included section",
      
        ],
      
      
        faqs: [
      
          {
            question:
              "Is this Morocco honeymoon package private?",
      
            answer:
              "Yes. This honeymoon experience is designed as a private journey for couples who want more flexibility and a personalized travel experience.",
          },
      
      
          {
            question:
              "What are the best places for a honeymoon in Morocco?",
      
            answer:
              "Popular honeymoon destinations in Morocco include Marrakech, the Atlas Mountains, the Sahara Desert and coastal areas such as Essaouira.",
          },
      
      
          {
            question:
              "Can this Morocco honeymoon tour be customized?",
      
            answer:
              "Yes. The duration, destinations and travel style can be adapted according to your honeymoon plans and preferences.",
          },
      
      
          {
            question:
              "Does the honeymoon package include the Sahara Desert?",
      
            answer:
              "The itinerary can include the Sahara Desert and Merzouga experience, depending on the selected version of your private honeymoon journey.",
          },
      
      
          {
            question:
              "Is Morocco a good destination for couples?",
      
            answer:
              "Morocco offers a combination of culture, landscapes, adventure and relaxation, making it a great destination for couples looking for a unique honeymoon experience.",
          },
      
        ],
      
      
        seo: {
      
          title:
            "Morocco Honeymoon Package | Romantic Private Morocco Tour",
      
      
          description:
            "Plan your Morocco honeymoon package with a private romantic tour including Marrakech, the Sahara Desert, cultural experiences and unforgettable landscapes for couples.",
      
      
          keywords: [
      
            "morocco honeymoon package",
      
            "morocco honeymoon",
      
            "honeymoon in morocco",
      
            "morocco honeymoon tour",
      
            "romantic morocco tour",
      
            "private morocco honeymoon",
      
            "morocco honeymoon itinerary",
      
            "sahara honeymoon experience",
      
            "couples trip to morocco",
      
          ],
      
        },
      
      
        booking: {
      
          available: true,
      
          customizable: true,
      
          contactLabel:
            "Plan Your Honeymoon",
      
        },
      
      },
      {
        id: "3",
      
        slug: "morocco-family-tours",
      
        title: "Morocco Family Tours | Private Family Vacation Experience",
      
        shortDescription:
          "Create unforgettable family memories in Morocco with a private family tour combining cultural cities, desert landscapes, mountains and flexible experiences designed around your travel style.",
      
      
        image:
          "/images/special-offers/morocco-family-tours.webp",
      
      
        badge:
          "Family Special Offer",
      
      
        category:
          "Family Morocco Tours",
      
      
        targetAudience:
          "Families looking for a comfortable and private Morocco holiday",
      
      
      
        duration:
          "Customizable",
      
      
      
        destinations: [
          "Marrakech",
          "Atlas Mountains",
          "Ait Ben Haddou",
          "Merzouga Sahara Desert",
          "Fes",
          "Essaouira",
        ],
      
      
      
        highlights: [
      
          "Private Morocco family tour designed around your pace",
      
          "Explore Morocco with comfortable private transportation",
      
          "Discover historic cities and traditional Moroccan culture",
      
          "Experience the Atlas Mountains and beautiful landscapes",
      
          "Visit the Sahara Desert with a memorable desert experience",
      
          "Enjoy flexible stops suitable for families",
      
          "Choose a travel style adapted to your family interests",
      
          "Combine adventure, culture and relaxation in one journey",
      
        ],
      
      
      
        overview: `
      
          Discover Morocco with a private family tour created for travelers who want
          to explore the country comfortably and at their own pace.
      
          Morocco is a destination where families can experience different landscapes
          in one journey, from the colorful streets of Marrakech and historic cities
          to mountain villages, desert scenery and Atlantic coastal towns.
      
          This family Morocco holiday can be customized depending on your travel dates,
          interests and preferred travel rhythm. Instead of following a fixed group
          schedule, you can enjoy a private experience with flexible stops and time
          to discover each destination.
      
          Your family can explore traditional Moroccan culture, enjoy scenic mountain
          routes, discover local communities and experience the unique atmosphere of
          the Sahara Desert.
      
          A private family tour in Morocco is a great choice for families who want
          comfort, flexibility and meaningful experiences while discovering one of
          North Africa's most diverse destinations.
      
        `,
      
      
      
        itinerary: [
      
          {
            title:
              "Discover Morocco's cultural cities",
      
            description:
              `
              Begin your family journey by exploring Morocco's famous cities.
      
              Discover traditional markets, historic areas and local culture while
              enjoying a comfortable pace that allows everyone to enjoy the experience.
              `,
          },
      
      
          {
            title:
              "Experience mountains and traditional villages",
      
            description:
              `
              Travel through Morocco's mountain landscapes and discover another side
              of the country.
      
              Enjoy scenic roads, traditional villages and beautiful views while
              making stops along the way.
              `,
          },
      
      
          {
            title:
              "Explore the Sahara Desert",
      
            description:
              `
              Continue toward southern Morocco and experience the atmosphere of the
              desert.
      
              Enjoy the unique landscapes of the Sahara and create unforgettable
              family memories in one of Morocco's most famous regions.
              `,
          },
      
      
          {
            title:
              "Relax and enjoy your private Morocco experience",
      
            description:
              `
              Continue your journey according to your family's interests.
      
              Because this is a private customizable offer, the route and experiences
              can be adapted to create the right balance between discovery and
              relaxation.
              `,
          },
      
        ],
      
      
      
        included: [
      
          "Private transportation during the experience",
      
          "Professional driver",
      
          "Flexible itinerary based on your family needs",
      
          "Travel assistance during your journey",
      
          "Private family travel experience",
      
        ],
      
      
      
        excluded: [
      
          "Flights",
      
          "Personal expenses",
      
          "Meals unless included in the selected package",
      
          "Entrance fees when required",
      
          "Optional activities",
      
          "Tips and gratuities",
      
        ],
      
      
      
        faqs: [
      
          {
            question:
              "Is this Morocco family tour private?",
      
            answer:
              "Yes. This is a private family experience designed for your group, giving you more flexibility with timing, stops and travel pace.",
          },
      
      
          {
            question:
              "Is Morocco a good destination for a family holiday?",
      
            answer:
              "Yes. Morocco offers a variety of experiences for families, including cultural cities, mountain landscapes, desert areas and coastal destinations.",
          },
      
      
          {
            question:
              "Can this family Morocco tour be customized?",
      
            answer:
              "Yes. The itinerary can be adapted according to your family's interests, available time and preferred travel style.",
          },
      
      
          {
            question:
              "Does the offer include the Sahara Desert?",
      
            answer:
              "The Sahara Desert can be included depending on the selected itinerary. We can create a family journey combining Morocco's main highlights and desert experiences.",
          },
      
      
          {
            question:
              "Is this suitable for families traveling with children?",
      
            answer:
              "Yes. The private format allows the journey to be planned with a comfortable pace and suitable stops for families.",
          },
      
      
        ],
      
      
      
        seo: {
      
          title:
            "Morocco Family Tours | Private Family Holiday Packages",
      
      
          description:
            "Discover Morocco with a private family tour including cultural cities, mountains, desert landscapes and flexible experiences designed for families.",
      
      
          keywords: [
      
            "morocco family tours",
      
            "family tours morocco",
      
            "morocco family holiday",
      
            "family vacation in morocco",
      
            "private family tour morocco",
      
            "morocco itinerary for families",
      
            "family friendly morocco tour",
      
            "morocco family vacation package",
      
          ],
      
        },
      
      
      
        recommendedTours: [
      
          "10-day-morocco-tour-from-casablanca",
      
          "7-day-sahara-tour-from-casablanca",
      
          "7-day-morocco-imperial-cities-tour",
      
        ],
      
      
      
        booking: {
      
          available: true,
      
          customizable: true,
      
          contactLabel:
            "Request This Family Offer",
      
        },
      
      },
      {
        id: "4",
      
        slug: "morocco-luxury-tours",
      
        title:
          "Morocco Luxury Tours | Private Luxury Travel Experience",
      
        shortDescription:
          "Discover Morocco in a more personal way with a private luxury tour combining historic cities, Sahara landscapes, cultural experiences and a flexible itinerary designed around your travel style.",
      
      
        image:
          "/images/special-offers/morocco-luxury-tours.webp",
      
      
        badge:
          "Luxury Morocco Experience",
      
      
        category:
          "Luxury Morocco Tours",
      
      
        targetAudience:
          "Travelers looking for a private and premium Morocco travel experience",
      
      
        duration:
          "Customizable",
      
      
      
        destinations: [
      
          "Casablanca",
      
          "Fes",
      
          "Chefchaouen",
      
          "Merzouga Sahara Desert",
      
          "Marrakech",
      
          "Essaouira",
      
        ],
      
      
      
        highlights: [
      
          "Private luxury Morocco tour designed around your preferences",
      
          "Explore Morocco with a flexible private itinerary",
      
          "Discover historic cities and traditional Moroccan culture",
      
          "Experience the Sahara Desert and Erg Chebbi dunes",
      
          "Travel through mountains, valleys and changing landscapes",
      
          "Enjoy a comfortable journey with private transportation",
      
          "Combine cultural discoveries with natural landscapes",
      
          "Choose a travel pace that suits your style",
      
        ],
      
      
      
        overview: `
      
          Discover Morocco through a private luxury travel experience created for
          travelers who want more than a standard holiday.
      
          This Morocco luxury tour combines the country's most impressive landscapes,
          historic cities and cultural destinations in one personalized journey.
      
          Travel through Morocco at your own pace, from ancient medinas and traditional
          villages to mountain landscapes and the peaceful atmosphere of the Sahara
          Desert.
      
          The experience can include destinations such as Fes, Marrakech, the desert
          region of Merzouga and the Atlantic coast, depending on your preferred
          itinerary.
      
          A private luxury tour in Morocco gives you the freedom to enjoy the journey
          with flexible stops, personalized planning and a travel style adapted to
          your interests.
      
          Whether you are interested in culture, nature, desert landscapes or a
          complete Morocco discovery, this private experience is designed to make
          your journey comfortable, meaningful and memorable.
      
        `,
      
      
      
        itinerary: [
      
          {
            title:
              "Begin your private Morocco journey",
      
            description:
              `
              Start your experience by discovering Morocco's famous cities and cultural
              heritage.
      
              Explore historic areas, traditional markets and local atmosphere while
              enjoying a private travel experience with a flexible schedule.
              `,
          },
      
      
          {
            title:
              "Discover mountains, valleys and traditional landscapes",
      
            description:
              `
              Continue through Morocco's changing landscapes, from mountain roads and
              valleys to traditional villages.
      
              Enjoy scenic routes and discover a different side of Morocco away from
              the main cities.
              `,
          },
      
      
          {
            title:
              "Experience the Sahara Desert",
      
            description:
              `
              Travel toward the desert region and discover the unique atmosphere of
              Merzouga and the Erg Chebbi dunes.
      
              Enjoy the peaceful surroundings of the Sahara as part of your private
              Morocco experience.
              `,
          },
      
      
          {
            title:
              "Enjoy a personalized Morocco experience",
      
            description:
              `
              Continue your journey according to your interests and preferred travel
              style.
      
              Because this is a customizable luxury Morocco tour, the route and
              experiences can be adapted to create your ideal trip.
              `,
          },
      
        ],
      
      
      
        included: [
      
          "Private transportation throughout the experience",
      
          "Professional driver",
      
          "Flexible itinerary planning",
      
          "Private travel experience",
      
          "Travel assistance during your journey",
      
        ],
      
      
      
        excluded: [
      
          "Flights",
      
          "Personal expenses",
      
          "Meals unless included in the selected package",
      
          "Entrance fees when required",
      
          "Optional activities",
      
          "Tips and gratuities",
      
        ],
      
      
      
        faqs: [
      
          {
            question:
              "What is included in this Morocco luxury tour?",
      
            answer:
              "The experience includes private transportation, flexible itinerary planning and a personalized Morocco journey based on your travel preferences.",
          },
      
      
          {
            question:
              "Is this a private luxury tour in Morocco?",
      
            answer:
              "Yes. This is designed as a private experience, giving you more flexibility and comfort compared with standard group tours.",
          },
      
      
          {
            question:
              "Can I customize this luxury Morocco tour?",
      
            answer:
              "Yes. The itinerary can be adapted according to your interests, available time and preferred travel style.",
          },
      
      
          {
            question:
              "Does this luxury Morocco experience include the Sahara Desert?",
      
            answer:
              "The Sahara Desert can be included depending on your selected itinerary. We can create a private journey combining desert landscapes with Morocco's cultural destinations.",
          },
      
      
          {
            question:
              "Who is this Morocco luxury tour suitable for?",
      
            answer:
              "This experience is suitable for travelers looking for privacy, flexibility and a more personalized way to discover Morocco.",
          },
      
        ],
      
      
      
        seo: {
      
          title:
            "Morocco Luxury Tours | Private Premium Experiences",
      
      
          description:
            "Discover Morocco luxury tours with a private travel experience combining historic cities, Sahara landscapes, cultural discoveries and personalized journeys.",
      
      
          keywords: [
      
            "morocco luxury tours",
      
            "morocco luxury tour",
      
            "luxury morocco tour",
      
            "private luxury tour morocco",
      
            "luxury travel morocco",
      
            "luxury trip to morocco",
      
            "private morocco experience",
      
            "premium morocco vacation",
      
          ],
      
        },
      
      
      
        recommendedTours: [
      
          "10-day-morocco-tour-from-casablanca",
      
          "12-day-best-of-morocco-tour",
      
          "14-day-morocco-tour-from-casablanca",
      
        ],
      
      
      
        booking: {
      
          available: true,
      
          customizable: true,
      
          contactLabel:
            "Request This Luxury Offer",
      
        },
      
      },
  
  ];


  export function getSpecialOfferSlugs(): string[] {
    return specialOffers.map((offer) => offer.slug);
  }