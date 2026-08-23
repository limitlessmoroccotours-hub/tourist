export type Tour = {
    // ─────────────────────────────
    // BASIC INFORMATION
    // ─────────────────────────────
  
    id: string;
    slug: string;
    title: string;
    shortDescription: string;
    image: string;
  
    badge?: string;
    featured?: boolean;
    category: string;
  
    // ─────────────────────────────
    // TOUR DETAILS
    // ─────────────────────────────
  
    duration: string;
    nights: number;
  
    tourType: string;
    groupSize: string;
    languages: string[];
  
    departure: string;
    arrival: string;
  
    locations: string[];
  
    // ─────────────────────────────
    // PRICING
    // ─────────────────────────────
  
    price?: {
      from: number;
      currency: string;
      label: string;
    };
  
    // ─────────────────────────────
    // HIGHLIGHTS
    // ─────────────────────────────
  
    highlights: string[];
  
    // ─────────────────────────────
    // OVERVIEW
    // ─────────────────────────────
  
    overview: string;
  
    // ─────────────────────────────
    // ITINERARY
    // ─────────────────────────────
  
    itinerary: {
      day: number;
      title: string;
      description: string;
      highlights: string[];
    }[];
  
    // ─────────────────────────────
    // INCLUDED / EXCLUDED
    // ─────────────────────────────
  
    included: string[];
  
    excluded: string[];
  
    // ─────────────────────────────
    // ACCOMMODATION
    // ─────────────────────────────
  
    accommodation: {
      night: number;
      location: string;
      type: string;
    }[];
  
    // ─────────────────────────────
    // GALLERY
    // ─────────────────────────────
  
    gallery: string[];
  
    // ─────────────────────────────
    // FAQ
    // ─────────────────────────────
  
    faqs: {
      question: string;
      answer: string;
    }[];
  
    // ─────────────────────────────
    // SEO
    // ─────────────────────────────
  
    seo: {
      title: string;
      description: string;
      keywords: string[];
    };
  
    // ─────────────────────────────
    // BOOKING
    // ─────────────────────────────
  
    booking: {
      available: boolean;
      minimumDays: number;
      customizable: boolean;
      contactLabel: string;
    };
  };



export const tours: Tour[] = [
    {
  id: "1",

  // ─────────────────────────────
  // BASIC INFORMATION
  // ─────────────────────────────

  slug: "3-day-desert-tour-marrakech-merzouga",

  title: "3-Day Desert Tour from Marrakech to Merzouga",

  shortDescription:
    "Travel from Marrakech to Merzouga on a private 3-day desert tour through the Atlas Mountains, ancient kasbahs, dramatic valleys and the Sahara dunes.",

  image: "/images/tours/3-day-desert-tour-marrakech-merzouga.webp",

  badge: "Most Booked",

  featured: true,

  category: "Desert Tours",

  // ─────────────────────────────
  // TOUR DETAILS
  // ─────────────────────────────

  duration: "3 Days / 2 Nights",

  nights: 2,

  tourType: "Private Tour",

  groupSize: "Up to 4 People",

  languages: ["English", "French"],

  departure: "Marrakech",

  arrival: "Marrakech",

  locations: [
    "Marrakech",
    "High Atlas Mountains",
    "Ait Ben Haddou",
    "Ouarzazate",
    "Dades Valley",
    "Todra Gorges",
    "Merzouga",
    "Erg Chebbi",
    "Sahara Desert",
  ],

  // ─────────────────────────────
  // PRICING
  // ─────────────────────────────

  // No fixed price.
  // The final price depends on the number of travelers,
  // accommodation level and requested services.

  // ─────────────────────────────
  // HIGHLIGHTS
  // ─────────────────────────────

  highlights: [
    "Cross the High Atlas Mountains and enjoy beautiful panoramic views",
    "Visit the famous Ait Ben Haddou fortified village",
    "Travel through Ouarzazate and the landscapes of southern Morocco",
    "Discover the Dades Valley and its dramatic mountain scenery",
    "Walk through the impressive Todra Gorges",
    "Ride a camel across the golden dunes of Erg Chebbi",
    "Watch the sunset over the Sahara Desert",
    "Spend a memorable night in a desert camp near Merzouga",
    "Wake up to the peaceful atmosphere of the Sahara",
    "Enjoy a private tour with more flexibility throughout the journey",
  ],

  // ─────────────────────────────
  // OVERVIEW
  // ─────────────────────────────

  overview: `
    Discover some of Morocco's most beautiful landscapes on this private
    3-day desert tour from Marrakech to Merzouga.

    The journey begins in Marrakech and takes you across the High Atlas
    Mountains, where winding roads and mountain views lead toward the south
    of Morocco. Along the way, you will visit Ait Ben Haddou, travel through
    Ouarzazate and continue into the Dades Valley.

    On the second day, the scenery changes as you travel toward Todra Gorges
    and the edge of the Sahara Desert. In Merzouga, you will leave the road
    behind and experience the Erg Chebbi dunes on a camel ride. The day ends
    with sunset in the desert and an overnight stay at a Sahara camp.

    After sunrise and breakfast on the final morning, the journey continues
    back toward Marrakech through the changing landscapes of southern Morocco.

    This Marrakech to Merzouga desert tour is designed for travelers who want
    to experience mountains, valleys, traditional villages and the Sahara in
    one private three-day journey.
  `,

  // ─────────────────────────────
  // ITINERARY
  // ─────────────────────────────

  itinerary: [
    {
      day: 1,

      title:
        "Marrakech – High Atlas Mountains – Ait Ben Haddou – Dades Valley",

      description: `
        Your 3-day Marrakech to Merzouga desert tour begins with a morning
        departure from Marrakech.

        Travel across the High Atlas Mountains and enjoy the changing scenery
        as the road climbs through mountain landscapes and traditional villages.

        Continue toward Ait Ben Haddou, one of the best-known fortified villages
        in southern Morocco. You will have time to discover the area before
        continuing toward Ouarzazate.

        In the afternoon, the journey continues through the landscapes of
        southern Morocco toward the Dades Valley.

        Arrive in the Dades area in the evening, where you will have dinner and
        spend the first night of the tour.
      `,

      highlights: [
        "Departure from Marrakech",
        "Cross the High Atlas Mountains",
        "Scenic mountain stops along the way",
        "Visit Ait Ben Haddou",
        "Pass through Ouarzazate",
        "Continue toward the Dades Valley",
        "Dinner and overnight stay in the Dades area",
      ],
    },

    {
      day: 2,

      title: "Dades Valley – Todra Gorges – Merzouga Sahara Desert",

      description: `
        After breakfast, continue your journey through the landscapes of
        southeastern Morocco toward the Sahara.

        The route takes you through valleys, small towns and desert scenery
        before reaching Todra Gorges. Here, you will have time to walk between
        the high canyon walls and enjoy the natural surroundings.

        Continue toward Merzouga, a small desert village located beside the
        Erg Chebbi dunes.

        In the late afternoon, prepare for one of the highlights of the trip:
        a camel ride into the Sahara Desert. Cross the golden dunes and enjoy
        the peaceful atmosphere as the sun begins to set.

        Your evening continues at a desert camp, where you can enjoy dinner
        and spend the night surrounded by the Sahara landscape.
      `,

      highlights: [
        "Breakfast in the Dades area",
        "Travel through southeastern Morocco",
        "Visit Todra Gorges",
        "Continue toward Merzouga",
        "Camel ride across the Erg Chebbi dunes",
        "Watch the Sahara sunset",
        "Dinner at the desert camp",
        "Overnight stay in the Sahara",
      ],
    },

    {
      day: 3,

      title: "Merzouga – Sahara Sunrise – Return to Marrakech",

      description: `
        Start your final day in the calm surroundings of the Sahara Desert.

        If you wish, wake up early to watch the sunrise over the Erg Chebbi
        dunes before returning to the camp for breakfast.

        After breakfast, leave the Merzouga area and begin the journey back
        toward Marrakech.

        The return drive gives you another chance to see the wide desert
        landscapes, mountains and small communities of southern Morocco.
        Stops can be made along the way for rest, meals and photos.

        Your 3-day desert trip from Marrakech ends when you arrive back in
        Marrakech in the evening.
      `,

      highlights: [
        "Optional early morning Sahara sunrise",
        "Breakfast at the desert camp",
        "Departure from Merzouga",
        "Scenic drive through southern Morocco",
        "Comfort stops along the journey",
        "Return to Marrakech",
      ],
    },
  ],

  // ─────────────────────────────
  // INCLUDED
  // ─────────────────────────────

  included: [
    "Private transportation during the tour",
    "English- or French-speaking driver",
    "Two nights of accommodation",
    "One night in the Dades area",
    "One night at a Sahara desert camp",
    "Breakfasts and dinners during the tour",
    "Camel ride in the Merzouga desert",
    "Free time to explore the main stops",
    "Flexible stops for photos and breaks during the journey",
  ],

  // ─────────────────────────────
  // NOT INCLUDED
  // ─────────────────────────────

  excluded: [
    "Lunches",
    "Drinks",
    "Entrance fees when required",
    "Local guides unless requested",
    "Personal expenses",
    "Travel insurance",
    "Tips and gratuities",
    "Any activities or services not mentioned in the included section",
  ],

  // ─────────────────────────────
  // ACCOMMODATION
  // ─────────────────────────────

  accommodation: [
    {
      night: 1,
      location: "Dades Valley",
      type: "Hotel or Riad",
    },
    {
      night: 2,
      location: "Merzouga",
      type: "Sahara Desert Camp",
    },
  ],

  // ─────────────────────────────
  // GALLERY
  // ─────────────────────────────

  gallery: [
    "/images/tours/3-day-desert-tour-marrakech-merzouga.webp",
  ],

  // ─────────────────────────────
  // FAQ
  // ─────────────────────────────

  faqs: [
    {
      question:
        "Is the 3-day desert tour from Marrakech to Merzouga private?",

      answer:
        "Yes. This is a private tour for you and your travel group. Private travel gives you more flexibility for stops and allows the journey to feel more relaxed and personal.",
    },

    {
      question:
        "What is included in the Marrakech to Merzouga desert tour?",

      answer:
        "The tour includes private transportation, two nights of accommodation, breakfasts and dinners, a camel ride in Merzouga and an overnight stay at a Sahara desert camp. Please check the included section for the complete list.",
    },

    {
      question: "Is the camel ride in Merzouga included?",

      answer:
        "Yes. A camel ride across the Erg Chebbi dunes is included as part of the Sahara Desert experience.",
    },

    {
      question: "Where will we sleep during the tour?",

      answer:
        "The first night is spent at a hotel or riad in the Dades area. The second night is spent at a Sahara desert camp near Merzouga.",
    },

    {
      question: "Can the 3-day Marrakech desert tour be customized?",

      answer:
        "Yes. Because this is a private tour, some parts of the experience can be adapted to your travel plans, interests and accommodation preferences. Contact us before booking to discuss what you would like to change.",
    },

    {
      question: "Do we visit Ait Ben Haddou during the tour?",

      answer:
        "Yes. Ait Ben Haddou is one of the main stops on the first day as you travel from Marrakech toward the Dades Valley.",
    },

    {
      question: "Does this tour visit Todra Gorges?",

      answer:
        "Yes. The itinerary includes a stop at Todra Gorges on the second day before continuing toward Merzouga and the Sahara Desert.",
    },

    {
      question: "Is there a lot of driving during the 3-day tour?",

      answer:
        "Yes. Marrakech and Merzouga are separated by a long distance, so this three-day itinerary includes several hours on the road. The journey is broken up with scenic stops, visits and rest breaks along the way.",
    },

    {
      question: "What should I bring for the Sahara Desert?",

      answer:
        "Comfortable clothes, walking shoes, sun protection and a light jacket are useful. Desert temperatures can change between daytime and evening, so bringing an extra layer is recommended.",
    },

    {
      question: "Can families join this private desert tour?",

      answer:
        "Families can request this tour. If you are traveling with young children, let us know their ages before booking so the itinerary and travel arrangements can be discussed in advance.",
    },
  ],

  // ─────────────────────────────
  // SEO
  // ─────────────────────────────

  seo: {
    title:
      "3-Day Marrakech to Merzouga Desert Tour | Moroccan Trip",

    description:
      "Discover Morocco on a private 3-day Marrakech to Merzouga desert tour through the Atlas Mountains, Ait Ben Haddou, Dades Valley and the Sahara.",

    // Internal SEO keyword map.
    // Do not output these as a meta keywords tag.
    keywords: [
      "3 days tour from Marrakech to Merzouga",
      "3 day desert tour from Marrakech to Merzouga",
      "Marrakech to Merzouga desert tour",
      "3 day desert trip from Marrakech",
      "Marrakech desert tour 3 days",
      "3 days Marrakech desert tour",
      "3 day Sahara desert tour from Marrakech",
      "private Sahara desert tour from Marrakech",
      "Marrakech to Merzouga tour",
      "Sahara desert tour from Marrakech",
    ],
  },

  // ─────────────────────────────
  // BOOKING
  // ─────────────────────────────

  booking: {
    available: true,
    minimumDays: 3,
    customizable: true,
    contactLabel: "Request a Quote",
  },
},

{
    id: "2",
  
    // ─────────────────────────────
    // BASIC INFORMATION
    // ─────────────────────────────
  
    slug: "3-day-marrakech-fes-desert-tour",
  
    title: "3-Day Marrakech to Fes Desert Tour",
  
    shortDescription:
      "Travel from Marrakech to Fes on a private 3-day desert tour through the High Atlas Mountains, ancient kasbahs, dramatic valleys and the golden dunes of Merzouga.",
  
    image: "/images/tours/3-day-marrakech-fes-desert-tour.webp",
  
    badge: "Marrakech to Fes",
  
    featured: true,
  
    category: "Desert Tours",
  
    // ─────────────────────────────
    // TOUR DETAILS
    // ─────────────────────────────
  
    duration: "3 Days / 2 Nights",
  
    nights: 2,
  
    tourType: "Private Tour",
  
    groupSize: "Up to 4 People",
  
    languages: ["English", "French"],
  
    departure: "Marrakech",
  
    arrival: "Fes",
  
    locations: [
      "Marrakech",
      "High Atlas Mountains",
      "Ait Ben Haddou",
      "Ouarzazate",
      "Dades Valley",
      "Todra Gorges",
      "Merzouga",
      "Erg Chebbi",
      "Ziz Valley",
      "Midelt",
      "Middle Atlas Mountains",
      "Ifrane",
      "Fes",
    ],
  
    // ─────────────────────────────
    // PRICING
    // ─────────────────────────────
  
    // No fixed price.
    // The final quote depends on the number of travelers,
    // accommodation level and requested services.
  
    // ─────────────────────────────
    // HIGHLIGHTS
    // ─────────────────────────────
  
    highlights: [
      "Cross the High Atlas Mountains from Marrakech",
      "Visit the historic Ait Ben Haddou fortified village",
      "Travel through Ouarzazate and the landscapes of southern Morocco",
      "Discover the beautiful Dades Valley",
      "Walk through the impressive Todra Gorges",
      "Ride a camel across the Erg Chebbi dunes in Merzouga",
      "Watch the sunset over the Sahara Desert",
      "Spend a night at a desert camp near Merzouga",
      "Travel through the scenic Ziz Valley",
      "Cross the Middle Atlas Mountains on the way to Fes",
      "See changing landscapes from the Sahara to northern Morocco",
      "Enjoy the flexibility of a private Marrakech to Fes journey",
    ],
  
    // ─────────────────────────────
    // OVERVIEW
    // ─────────────────────────────
  
    overview: `
      Travel between two of Morocco's most famous cities while discovering the
      Sahara on this private 3-day Marrakech to Fes desert tour.
  
      Your journey begins in Marrakech and crosses the High Atlas Mountains
      toward southern Morocco. Along the way, you will visit Ait Ben Haddou,
      pass through Ouarzazate and continue through beautiful valleys before
      spending the first night in the Dades area.
  
      The second day takes you deeper into southeastern Morocco. After visiting
      Todra Gorges, the route continues toward Merzouga and the golden dunes of
      Erg Chebbi. Here, you will experience a camel ride across the Sahara,
      enjoy the desert sunset and spend the night at a camp surrounded by dunes.
  
      On the final day, leave Merzouga and travel north toward Fes. The scenery
      changes again as you pass through the Ziz Valley, Midelt and the Middle
      Atlas Mountains before reaching Fes.
  
      This Marrakech to Fes desert tour is a practical way to combine a transfer
      between Marrakech and Fes with a real Sahara experience. Instead of taking
      a direct journey between the two cities, you will discover mountains,
      kasbahs, valleys and desert landscapes along the way.
    `,
  
    // ─────────────────────────────
    // ITINERARY
    // ─────────────────────────────
  
    itinerary: [
      {
        day: 1,
  
        title:
          "Marrakech – High Atlas Mountains – Ait Ben Haddou – Dades Valley",
  
        description: `
          Your 3-day desert tour from Marrakech to Fes begins in the morning
          with pickup in Marrakech.
  
          Travel across the High Atlas Mountains, following scenic roads through
          mountain landscapes and traditional villages. There will be time for
          stops along the way to enjoy the views and take photos.
  
          Continue to Ait Ben Haddou, a historic fortified village known for its
          traditional earthen architecture. You will have time to discover the
          area before continuing toward Ouarzazate.
  
          In the afternoon, travel through the landscapes of southern Morocco
          toward the Dades Valley. The scenery changes between dry mountains,
          palm-filled areas and small villages along the route.
  
          Arrive in the Dades area in the evening for dinner and your first
          overnight stay.
        `,
  
        highlights: [
          "Morning departure from Marrakech",
          "Cross the High Atlas Mountains",
          "Scenic stops along the mountain road",
          "Visit Ait Ben Haddou",
          "Pass through Ouarzazate",
          "Continue through southern Morocco",
          "Arrive in the Dades Valley",
          "Dinner and overnight stay in the Dades area",
        ],
      },
  
      {
        day: 2,
  
        title: "Dades Valley – Todra Gorges – Merzouga Sahara Desert",
  
        description: `
          After breakfast, leave the Dades Valley and continue your Marrakech to
          Fes desert journey toward the Sahara.
  
          Travel through the changing landscapes of southeastern Morocco before
          reaching Todra Gorges. Take some time to walk through the canyon and
          enjoy the impressive rock walls and natural surroundings.
  
          Continue toward Merzouga, located beside the Erg Chebbi dunes. As you
          approach the desert, the landscape gradually becomes more open and the
          golden dunes begin to appear.
  
          In the late afternoon, enjoy a camel ride across the Sahara Desert.
          Travel between the dunes and stop to experience the sunset over Erg
          Chebbi.
  
          After sunset, continue to your desert camp for dinner and an overnight
          stay in the peaceful surroundings of the Sahara.
        `,
  
        highlights: [
          "Breakfast in the Dades area",
          "Travel through southeastern Morocco",
          "Visit Todra Gorges",
          "Continue toward Merzouga",
          "Arrive at the Erg Chebbi dunes",
          "Camel ride in the Sahara Desert",
          "Watch the sunset over the dunes",
          "Dinner and overnight stay at a desert camp",
        ],
      },
  
      {
        day: 3,
  
        title:
          "Merzouga – Ziz Valley – Midelt – Middle Atlas Mountains – Fes",
  
        description: `
          Start the final morning of your 3-day Marrakech to Fes desert tour in
          the Sahara.
  
          You can wake up early to enjoy the sunrise over the Erg Chebbi dunes
          before breakfast at the camp.
  
          After leaving Merzouga, begin the journey north toward Fes. Travel
          through the Ziz Valley, where palm trees and mountain landscapes create
          a very different view from the open desert.
  
          Continue toward Midelt and cross the Middle Atlas Mountains. Along the
          way, you will see forests, mountain towns and cooler landscapes as the
          route moves farther north.
  
          Depending on timing and road conditions, stops can be made along the
          journey before continuing through the Ifrane area.
  
          Arrive in Fes in the evening, where your Marrakech to Fes Sahara tour
          comes to an end.
        `,
  
        highlights: [
          "Optional sunrise over the Erg Chebbi dunes",
          "Breakfast at the desert camp",
          "Departure from Merzouga",
          "Travel through the Ziz Valley",
          "Continue toward Midelt",
          "Cross the Middle Atlas Mountains",
          "Pass through the Ifrane area",
          "Arrival in Fes",
        ],
      },
    ],
  
    // ─────────────────────────────
    // INCLUDED
    // ─────────────────────────────
  
    included: [
      "Private transportation from Marrakech to Fes",
      "English- or French-speaking driver",
      "Two nights of accommodation",
      "One night in the Dades area",
      "One night at a Sahara desert camp",
      "Breakfasts and dinners during the tour",
      "Camel ride in the Merzouga desert",
      "Free time to explore the main stops",
      "Flexible stops for photos and breaks during the journey",
      "Drop-off in Fes at the end of the tour",
    ],
  
    // ─────────────────────────────
    // NOT INCLUDED
    // ─────────────────────────────
  
    excluded: [
      "Lunches",
      "Drinks",
      "Entrance fees when required",
      "Local guides unless requested",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities",
      "Any activities or services not mentioned in the included section",
    ],
  
    // ─────────────────────────────
    // ACCOMMODATION
    // ─────────────────────────────
  
    accommodation: [
      {
        night: 1,
        location: "Dades Valley",
        type: "Hotel or Riad",
      },
      {
        night: 2,
        location: "Merzouga",
        type: "Sahara Desert Camp",
      },
    ],
  
    // ─────────────────────────────
    // GALLERY
    // ─────────────────────────────
  
    gallery: [
      "/images/tours/3-day-marrakech-fes-desert-tour.webp",
    ],
  
    // ─────────────────────────────
    // FAQ
    // ─────────────────────────────
  
    faqs: [
      {
        question: "Is the Marrakech to Fes desert tour private?",
  
        answer:
          "Yes. This is a private tour for you and your travel group. You travel in a private vehicle with more flexibility for stops and breaks along the route.",
      },
  
      {
        question: "How long is the Marrakech to Fes desert tour?",
  
        answer:
          "The tour takes 3 days and 2 nights. The first night is in the Dades area and the second night is at a Sahara desert camp near Merzouga.",
      },
  
      {
        question: "Does the tour include Merzouga and the Sahara Desert?",
  
        answer:
          "Yes. Merzouga is one of the main stops on the tour. You will visit the Erg Chebbi dunes, enjoy a camel ride and spend one night at a Sahara desert camp.",
      },
  
      {
        question: "Where does the tour start and finish?",
  
        answer:
          "The tour starts in Marrakech and finishes in Fes. This makes it a convenient option for travelers who want to visit the Sahara while moving between the two cities.",
      },
  
      {
        question: "Is the camel ride in Merzouga included?",
  
        answer:
          "Yes. A camel ride through the Erg Chebbi dunes is included as part of your Sahara experience.",
      },
  
      {
        question: "What accommodation is included?",
  
        answer:
          "The tour includes one night at a hotel or riad in the Dades area and one night at a Sahara desert camp near Merzouga. Accommodation options can be discussed when planning your tour.",
      },
  
      {
        question: "Can the Marrakech to Fes desert tour be customized?",
  
        answer:
          "Yes. Because this is a private tour, some parts of the journey can be adapted to your travel plans, preferred accommodation level and interests.",
      },
  
      {
        question: "Do we visit Ait Ben Haddou during the tour?",
  
        answer:
          "Yes. Ait Ben Haddou is included on the first day while traveling from Marrakech toward Ouarzazate and the Dades Valley.",
      },
  
      {
        question: "Do we visit Todra Gorges?",
  
        answer:
          "Yes. You will stop at Todra Gorges on the second day before continuing toward Merzouga and the Sahara Desert.",
      },
  
      {
        question: "Is there a lot of driving on this 3-day tour?",
  
        answer:
          "Yes. The route from Marrakech to Fes through Merzouga covers a long distance. The journey is divided over three days with sightseeing stops, breaks and overnight stays along the way.",
      },
  
      {
        question: "What should I bring for the Sahara night?",
  
        answer:
          "Bring comfortable clothes, walking shoes, sun protection and an extra layer for the evening. Temperatures in the desert can change between daytime and night.",
      },
  
      {
        question: "Can families take this Marrakech to Fes desert tour?",
  
        answer:
          "Families can request this private tour. If you are traveling with young children, share their ages when contacting us so the travel arrangements can be discussed in advance.",
      },
    ],
  
    // ─────────────────────────────
    // SEO
    // ─────────────────────────────
  
    seo: {
      title:
        "3-Day Marrakech to Fes Desert Tour | Moroccan Trip",
  
      description:
        "Take a private 3-day Marrakech to Fes desert tour via Ait Ben Haddou, Dades Valley and Merzouga, with a camel ride and Sahara desert camp.",
  
      // Internal keyword map only.
      // Do not output this array as a meta keywords tag.
      keywords: [
        "marrakech to fes desert tour",
        "3 days desert tour from marrakech to fes",
        "3 day desert tour marrakech to fes",
        "marrakech fes desert tour",
        "3 day tour from marrakech to fes",
        "marrakech to fes desert tour 3 days",
        "3 day desert tour from marrakech to fes",
        "marrakech to fes sahara tour",
        "desert tour from marrakech to fes",
        "marrakech to fes via merzouga",
      ],
    },
  
    // ─────────────────────────────
    // BOOKING
    // ─────────────────────────────
  
    booking: {
      available: true,
      minimumDays: 3,
      customizable: true,
      contactLabel: "Request a Quote",
    },
  },

  {
    id: "3",
  
    // ─────────────────────────────
    // BASIC INFORMATION
    // ─────────────────────────────
  
    slug: "4-day-marrakech-fes-desert-tour",
  
    title: "4-Day Marrakech to Fes Desert Tour",
  
    shortDescription:
      "Enjoy a private 4-day journey from Marrakech to Fes with more time in Merzouga, including the Atlas Mountains, Dades Valley, Todra Gorges and the Sahara Desert.",
  
    image: "/images/tours/4-day-marrakech-fes-desert-tour.webp",
  
    badge: "More Time in the Sahara",
  
    featured: true,
  
    category: "Desert Tours",
  
    // ─────────────────────────────
    // TOUR DETAILS
    // ─────────────────────────────
  
    duration: "4 Days / 3 Nights",
  
    nights: 3,
  
    tourType: "Private Tour",
  
    groupSize: "Up to 4 People",
  
    languages: ["English", "French"],
  
    departure: "Marrakech",
  
    arrival: "Fes",
  
    locations: [
      "Marrakech",
      "High Atlas Mountains",
      "Ait Ben Haddou",
      "Ouarzazate",
      "Dades Valley",
      "Todra Gorges",
      "Merzouga",
      "Erg Chebbi",
      "Khamlia",
      "Sahara Desert",
      "Ziz Valley",
      "Midelt",
      "Middle Atlas Mountains",
      "Ifrane",
      "Fes",
    ],
  
    // ─────────────────────────────
    // PRICING
    // ─────────────────────────────
  
    // No fixed price.
    // The final quote depends on the number of travelers,
    // accommodation level and requested services.
  
    // ─────────────────────────────
    // HIGHLIGHTS
    // ─────────────────────────────
  
    highlights: [
      "Cross the High Atlas Mountains from Marrakech",
      "Visit the historic village of Ait Ben Haddou",
      "Travel through Ouarzazate and the landscapes of southern Morocco",
      "Spend the first night in the beautiful Dades Valley",
      "Walk through the dramatic Todra Gorges",
      "Reach Merzouga and the golden dunes of Erg Chebbi",
      "Enjoy more time exploring the Merzouga desert area",
      "Visit Khamlia and discover local desert culture",
      "Experience a camel ride across the Sahara dunes",
      "Watch the sunset over Erg Chebbi",
      "Spend a memorable night at a Sahara desert camp",
      "Travel through the scenic Ziz Valley",
      "Cross the Middle Atlas Mountains on the way to Fes",
      "Enjoy a slower itinerary with more time in the Sahara",
    ],
  
    // ─────────────────────────────
    // OVERVIEW
    // ─────────────────────────────
  
    overview: `
      Discover southern Morocco at a more relaxed pace on this private
      4-day Marrakech to Fes desert tour.
  
      The journey begins in Marrakech and crosses the High Atlas Mountains
      toward Ait Ben Haddou, Ouarzazate and the Dades Valley. Instead of
      rushing directly toward the Sahara, the itinerary gives you time to
      enjoy the changing landscapes and important stops along the route.
  
      After visiting Todra Gorges, continue to Merzouga at the edge of the
      Erg Chebbi dunes. The extra day makes this tour different from the
      shorter Marrakech to Fes itinerary. You will have more time to discover
      the desert area, experience local life around Merzouga and enjoy the
      Sahara without moving to the next destination immediately.
  
      Your desert experience includes a camel ride across the dunes, sunset
      in the Sahara and an overnight stay at a desert camp.
  
      On the final day, travel north from Merzouga through the Ziz Valley,
      Midelt and the Middle Atlas Mountains before arriving in Fes.
  
      This four-day tour from Marrakech to Fes is a good choice for travelers
      who want to combine the journey between two imperial cities with a fuller
      Sahara experience and a less rushed itinerary.
    `,
  
    // ─────────────────────────────
    // ITINERARY
    // ─────────────────────────────
  
    itinerary: [
      {
        day: 1,
  
        title:
          "Marrakech – High Atlas Mountains – Ait Ben Haddou – Dades Valley",
  
        description: `
          Your 4-day journey from Marrakech to Fes begins with a morning pickup
          in Marrakech.
  
          Travel across the High Atlas Mountains, where winding roads lead
          through mountain scenery and small villages. Stops can be made along
          the route to enjoy the views and take photos.
  
          Continue to Ait Ben Haddou, a historic fortified village built with
          traditional earthen architecture. Take time to explore the area before
          continuing toward Ouarzazate.
  
          From Ouarzazate, the journey continues through the landscapes of
          southern Morocco toward the Dades Valley.
  
          Arrive in the Dades area in the evening, where you will have dinner
          and spend the first night of the tour.
        `,
  
        highlights: [
          "Morning pickup in Marrakech",
          "Cross the High Atlas Mountains",
          "Scenic stops along the mountain route",
          "Visit Ait Ben Haddou",
          "Pass through Ouarzazate",
          "Continue toward the Dades Valley",
          "Dinner and overnight stay in the Dades area",
        ],
      },
  
      {
        day: 2,
  
        title: "Dades Valley – Todra Gorges – Merzouga",
  
        description: `
          After breakfast, leave the Dades Valley and continue east through
          southeastern Morocco.
  
          The first important stop of the day is Todra Gorges. Take time to walk
          through the canyon and enjoy the high rock walls and natural scenery.
  
          Continue through small towns and open landscapes as the route approaches
          the Sahara Desert.
  
          In the afternoon, arrive in Merzouga, a desert village beside the
          impressive Erg Chebbi dunes.
  
          Because this is a four-day Marrakech to Fes desert tour, there is no
          need to rush directly into the next part of the journey. The evening
          offers time to relax and enjoy your first views of the Sahara.
  
          Spend the night in the Merzouga area and prepare for a full desert
          experience the following day.
        `,
  
        highlights: [
          "Breakfast in the Dades Valley",
          "Travel through southeastern Morocco",
          "Visit Todra Gorges",
          "Continue toward the Sahara",
          "Arrive in Merzouga",
          "First views of the Erg Chebbi dunes",
          "Free time to relax in the desert area",
          "Overnight stay in Merzouga",
        ],
      },
  
      {
        day: 3,
  
        title: "Merzouga Desert Exploration – Khamlia – Camel Trek – Desert Camp",
  
        description: `
          Today is dedicated to discovering Merzouga and the Sahara at a slower
          pace.
  
          After breakfast, explore the area around the Erg Chebbi dunes and learn
          more about life in this part of southeastern Morocco.
  
          Visit Khamlia, a village near Merzouga known for its local culture and
          musical traditions. Depending on the day's arrangements, there may also
          be time to discover other desert landscapes and communities around the
          dunes.
  
          Later in the afternoon, prepare for your camel ride into the Sahara.
          Cross the golden dunes of Erg Chebbi and enjoy the quiet desert
          atmosphere as the sun begins to set.
  
          After sunset, continue to your Sahara camp. Enjoy dinner and spend the
          night surrounded by the dunes and open desert sky.
  
          This extra day in Merzouga is one of the main reasons to choose the
          4-day tour from Marrakech to Fes instead of the shorter three-day route.
        `,
  
        highlights: [
          "Full day in the Merzouga desert area",
          "Explore the landscapes around Erg Chebbi",
          "Visit Khamlia",
          "Discover local desert culture",
          "Free time around Merzouga",
          "Camel trek across the Sahara dunes",
          "Watch the sunset over Erg Chebbi",
          "Dinner at the desert camp",
          "Overnight stay in the Sahara",
        ],
      },
  
      {
        day: 4,
  
        title:
          "Merzouga – Ziz Valley – Midelt – Middle Atlas Mountains – Fes",
  
        description: `
          Start your final morning in the Sahara. If you wish, wake up early to
          watch the sunrise over the Erg Chebbi dunes before breakfast.
  
          After leaving Merzouga, begin the journey north toward Fes.
  
          Travel through the Ziz Valley, where palm-filled landscapes create a
          striking contrast with the desert scenery you experienced the previous
          day.
  
          Continue toward Midelt and cross the Middle Atlas Mountains. The
          landscape gradually changes again, with mountain roads, forests and
          cooler surroundings.
  
          Depending on timing and road conditions, stops can be made along the
          route before passing through the Ifrane area.
  
          Arrive in Fes in the evening, marking the end of your private 4-day
          desert tour from Marrakech to Fes.
        `,
  
        highlights: [
          "Optional sunrise over the Sahara dunes",
          "Breakfast at the desert camp",
          "Departure from Merzouga",
          "Travel through the Ziz Valley",
          "Continue toward Midelt",
          "Cross the Middle Atlas Mountains",
          "Pass through the Ifrane area",
          "Arrival in Fes",
        ],
      },
    ],
  
    // ─────────────────────────────
    // INCLUDED
    // ─────────────────────────────
  
    included: [
      "Private transportation from Marrakech to Fes",
      "English- or French-speaking driver",
      "Three nights of accommodation",
      "One night in the Dades area",
      "One night in the Merzouga area",
      "One night at a Sahara desert camp",
      "Breakfasts and dinners during the tour",
      "Camel ride in the Merzouga desert",
      "Time to explore the Merzouga desert area",
      "Free time at the main sightseeing stops",
      "Flexible stops for photos and breaks during the journey",
      "Drop-off in Fes at the end of the tour",
    ],
  
    // ─────────────────────────────
    // NOT INCLUDED
    // ─────────────────────────────
  
    excluded: [
      "Lunches",
      "Drinks",
      "Entrance fees when required",
      "Local guides unless requested",
      "Optional activities not included in the itinerary",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities",
      "Any services not mentioned in the included section",
    ],
  
    // ─────────────────────────────
    // ACCOMMODATION
    // ─────────────────────────────
  
    accommodation: [
      {
        night: 1,
        location: "Dades Valley",
        type: "Hotel or Riad",
      },
      {
        night: 2,
        location: "Merzouga",
        type: "Hotel or Riad",
      },
      {
        night: 3,
        location: "Merzouga",
        type: "Sahara Desert Camp",
      },
    ],
  
    // ─────────────────────────────
    // GALLERY
    // ─────────────────────────────
  
    gallery: [
      "/images/tours/4-day-marrakech-fes-desert-tour.webp",
    ],
  
    // ─────────────────────────────
    // FAQ
    // ─────────────────────────────
  
    faqs: [
      {
        question: "Is the 4-day Marrakech to Fes desert tour private?",
  
        answer:
          "Yes. This is a private tour for you and your travel group. Private transportation gives you more flexibility for stops, breaks and the pace of the journey.",
      },
  
      {
        question:
          "What is the difference between the 3-day and 4-day Marrakech to Fes desert tours?",
  
        answer:
          "The 4-day tour gives you more time in the Merzouga area. Instead of moving quickly through the Sahara, you have an additional day to explore the desert surroundings, visit places such as Khamlia and enjoy the experience at a more relaxed pace.",
      },
  
      {
        question: "How many nights are included in the 4-day tour?",
  
        answer:
          "The tour includes three nights: one night in the Dades area, one night in Merzouga and one night at a Sahara desert camp.",
      },
  
      {
        question: "Does the tour include a full day in Merzouga?",
  
        answer:
          "Yes. One of the main advantages of this itinerary is having additional time around Merzouga and the Erg Chebbi dunes before the camel trek and desert camp experience.",
      },
  
      {
        question: "Is a camel ride included?",
  
        answer:
          "Yes. A camel ride across the Erg Chebbi dunes is included as part of your Sahara Desert experience.",
      },
  
      {
        question: "Do we sleep in the Sahara Desert?",
  
        answer:
          "Yes. One night is spent at a desert camp near the Erg Chebbi dunes, where you can experience the quiet atmosphere of the Sahara after sunset.",
      },
  
      {
        question: "Does the tour visit Ait Ben Haddou?",
  
        answer:
          "Yes. Ait Ben Haddou is one of the main stops on the first day while traveling from Marrakech toward Ouarzazate and the Dades Valley.",
      },
  
      {
        question: "Do we visit Todra Gorges?",
  
        answer:
          "Yes. Todra Gorges is visited on the second day before continuing toward Merzouga.",
      },
  
      {
        question: "Where does the tour start and finish?",
  
        answer:
          "The tour starts in Marrakech and finishes in Fes, making it suitable for travelers who want to continue their Morocco journey without returning to Marrakech.",
      },
  
      {
        question: "Can the 4-day Marrakech to Fes tour be customized?",
  
        answer:
          "Yes. Because this is a private tour, parts of the itinerary can be adapted to your travel plans, preferred accommodation level and interests.",
      },
  
      {
        question: "Is this tour less rushed than the 3-day option?",
  
        answer:
          "Yes. The additional day allows more time in the Merzouga area, making the Sahara part of the journey more relaxed than the shorter three-day itinerary.",
      },
  
      {
        question: "Is there still a lot of driving during the tour?",
  
        answer:
          "Yes. Marrakech, Merzouga and Fes are separated by long distances. However, the four-day itinerary divides the journey into more manageable stages with sightseeing stops and overnight stays.",
      },
  
      {
        question: "What should I bring for the Sahara?",
  
        answer:
          "Comfortable clothing, walking shoes, sun protection and an extra layer for the evening are useful. Desert temperatures can change noticeably between daytime and night.",
      },
  
      {
        question: "Can families take this private desert tour?",
  
        answer:
          "Families can request this tour. If you are traveling with young children, share their ages when contacting us so the travel arrangements can be discussed before the trip.",
      },
    ],
  
    // ─────────────────────────────
    // SEO
    // ─────────────────────────────
  
    seo: {
      title:
        "4-Day Marrakech to Fes Desert Tour | Moroccan Trip",
  
      description:
        "Enjoy a private 4-day Marrakech to Fes desert tour with Dades Valley, Todra Gorges, extra time in Merzouga, a camel trek and Sahara desert camp.",
  
      // Internal SEO keyword map only.
      // Do not output these as a meta keywords tag.
      keywords: [
        "marrakech to fes desert tour 4 days",
        "4 days tour from marrakech to fes",
        "4 days trip from marrakech to fes",
        "4 day tour from marrakech to fes",
        "4 day desert tour from marrakech to fes",
        "4 day desert tour marrakech to fes",
        "4 day marrakech to fes desert tour",
        "4 days desert tour from marrakech to fes",
        "4 days marrakech to fes desert tour",
        "4 days desert tour from marrakech",
      ],
    },
  
    // ─────────────────────────────
    // BOOKING
    // ─────────────────────────────
  
    booking: {
      available: true,
      minimumDays: 4,
      customizable: true,
      contactLabel: "Request a Quote",
    },
  },

  {
    id: "4",
  
    // ─────────────────────────────
    // BASIC INFORMATION
    // ─────────────────────────────
  
    slug: "4-day-sahara-desert-tour-from-marrakech",
  
    title: "4-Day Sahara Desert Tour from Marrakech",
  
    shortDescription:
      "Explore southern Morocco on a private 4-day desert tour from Marrakech, with the High Atlas Mountains, Dades Valley, Merzouga, a Sahara camp and the Draa Valley.",
  
    image: "/images/tours/4-day-sahara-desert-tour-from-marrakech.webp",
  
    badge: "Sahara Adventure",
  
    featured: true,
  
    category: "Desert Tours",
  
    // ─────────────────────────────
    // TOUR DETAILS
    // ─────────────────────────────
  
    duration: "4 Days / 3 Nights",
  
    nights: 3,
  
    tourType: "Private Tour",
  
    groupSize: "Up to 4 People",
  
    languages: ["English", "French"],
  
    departure: "Marrakech",
  
    arrival: "Marrakech",
  
    locations: [
      "Marrakech",
      "High Atlas Mountains",
      "Ait Ben Haddou",
      "Ouarzazate",
      "Dades Valley",
      "Todra Gorges",
      "Merzouga",
      "Erg Chebbi",
      "Sahara Desert",
      "Rissani",
      "Nkob",
      "Draa Valley",
      "Ouarzazate",
      "Marrakech",
    ],
  
    // ─────────────────────────────
    // PRICING
    // ─────────────────────────────
  
    // No fixed price.
    // The final quote depends on the number of travelers,
    // accommodation level and requested services.
  
    // ─────────────────────────────
    // HIGHLIGHTS
    // ─────────────────────────────
  
    highlights: [
      "Cross the High Atlas Mountains from Marrakech",
      "Visit the historic Ait Ben Haddou fortified village",
      "Travel through Ouarzazate and the landscapes of southern Morocco",
      "Spend a night in the beautiful Dades Valley",
      "Walk through the impressive Todra Gorges",
      "Reach Merzouga and the golden dunes of Erg Chebbi",
      "Ride a camel across the Sahara Desert",
      "Watch the sunset over the dunes",
      "Spend a memorable night at a desert camp",
      "Travel through Rissani and the landscapes of southern Morocco",
      "Discover the palm-filled Draa Valley",
      "Enjoy a more relaxed return journey through Ouarzazate",
      "Return to Marrakech through the High Atlas Mountains",
      "Travel privately with flexible stops along the route",
    ],
  
    // ─────────────────────────────
    // OVERVIEW
    // ─────────────────────────────
  
    overview: `
      Discover the landscapes of southern Morocco on this private 4-day Sahara
      desert tour from Marrakech.
  
      The journey begins in Marrakech and crosses the High Atlas Mountains before
      continuing to Ait Ben Haddou, Ouarzazate and the Dades Valley. Along the
      way, mountain roads, traditional villages and wide valleys show a different
      side of Morocco beyond the busy cities.
  
      On the second day, travel through Todra Gorges toward Merzouga and the
      golden dunes of Erg Chebbi. In the Sahara, enjoy a camel ride across the
      dunes, watch the sunset and spend the night at a desert camp.
  
      Instead of making the long drive directly back to Marrakech the next day,
      this four-day itinerary follows a slower route through Rissani, Nkob and
      the Draa Valley. You will spend the third night in Ouarzazate before
      returning to Marrakech on the final day.
  
      This 4-day desert tour from Marrakech is a good choice for travelers who
      want to visit Merzouga and the Sahara without rushing the return journey.
      It combines mountains, valleys, kasbahs and desert landscapes in one
      private trip that starts and finishes in Marrakech.
    `,
  
    // ─────────────────────────────
    // ITINERARY
    // ─────────────────────────────
  
    itinerary: [
      {
        day: 1,
  
        title:
          "Marrakech – High Atlas Mountains – Ait Ben Haddou – Dades Valley",
  
        description: `
          Your 4-day desert tour from Marrakech begins with a morning pickup in
          the city.
  
          Travel across the High Atlas Mountains, following scenic roads through
          mountain landscapes and traditional villages. There will be time for
          stops along the way to enjoy the views and take photos.
  
          Continue to Ait Ben Haddou, one of the best-known fortified villages
          in southern Morocco. Take time to explore the area before continuing
          toward Ouarzazate.
  
          From Ouarzazate, travel farther into southern Morocco toward the Dades
          Valley. The route passes through changing landscapes, small communities
          and wide open valleys.
  
          Arrive in the Dades area in the evening for dinner and your first
          overnight stay.
        `,
  
        highlights: [
          "Morning pickup in Marrakech",
          "Cross the High Atlas Mountains",
          "Scenic stops along the mountain road",
          "Visit Ait Ben Haddou",
          "Pass through Ouarzazate",
          "Continue toward the Dades Valley",
          "Dinner and overnight stay in the Dades area",
        ],
      },
  
      {
        day: 2,
  
        title: "Dades Valley – Todra Gorges – Merzouga Sahara Desert",
  
        description: `
          After breakfast, leave the Dades Valley and continue your journey
          toward the Sahara Desert.
  
          Travel through the landscapes of southeastern Morocco before arriving
          at Todra Gorges. Take some time to walk through the canyon and enjoy
          the high rock walls and natural surroundings.
  
          Continue toward Merzouga, located beside the impressive Erg Chebbi
          dunes. As you approach the Sahara, the landscape becomes more open and
          the golden dunes begin to appear.
  
          In the late afternoon, prepare for a camel ride across the dunes.
          Experience the peaceful atmosphere of the Sahara and watch the colors
          change as the sun sets over Erg Chebbi.
  
          After sunset, continue to your desert camp for dinner and an overnight
          stay surrounded by the dunes.
        `,
  
        highlights: [
          "Breakfast in the Dades Valley",
          "Travel through southeastern Morocco",
          "Visit Todra Gorges",
          "Continue toward Merzouga",
          "Arrive at the Erg Chebbi dunes",
          "Camel ride in the Sahara Desert",
          "Watch the desert sunset",
          "Dinner and overnight stay at a Sahara camp",
        ],
      },
  
      {
        day: 3,
  
        title:
          "Merzouga – Rissani – Nkob – Draa Valley – Ouarzazate",
  
        description: `
          Start the morning in the Sahara. If you wish, wake up early to watch
          the sunrise over the Erg Chebbi dunes before breakfast.
  
          After leaving Merzouga, continue west through the landscapes of
          southern Morocco.
  
          Pass through the Rissani area and travel toward Nkob, with changing
          views of desert plains, rocky mountains and traditional villages along
          the route.
  
          The journey then reaches the Draa Valley, known for its long stretches
          of palm trees, old villages and green areas surrounded by dry mountain
          scenery.
  
          Continue toward Ouarzazate in the afternoon.
  
          This extra day is one of the main advantages of the 4-day Sahara tour
          from Marrakech. Instead of spending most of the day on a direct return
          drive, you can discover another part of southern Morocco and enjoy a
          more comfortable journey back toward Marrakech.
  
          Arrive in Ouarzazate in the evening for dinner and your third overnight
          stay.
        `,
  
        highlights: [
          "Optional sunrise over the Sahara dunes",
          "Breakfast before leaving Merzouga",
          "Travel through the Rissani area",
          "Continue toward Nkob",
          "Discover the landscapes of the Draa Valley",
          "See palm groves and traditional villages",
          "Continue toward Ouarzazate",
          "Dinner and overnight stay in Ouarzazate",
        ],
      },
  
      {
        day: 4,
  
        title: "Ouarzazate – High Atlas Mountains – Marrakech",
  
        description: `
          After breakfast in Ouarzazate, begin the final part of your journey
          back to Marrakech.
  
          Travel through the landscapes around Ouarzazate before crossing the
          High Atlas Mountains once again.
  
          The mountain road offers another opportunity to enjoy panoramic views,
          traditional villages and the changing scenery between southern Morocco
          and Marrakech.
  
          Stops can be made along the way for rest, photos and meals depending
          on your schedule.
  
          Arrive back in Marrakech later in the day, marking the end of your
          private 4 days tour from Marrakech to Merzouga and the Sahara.
        `,
  
        highlights: [
          "Breakfast in Ouarzazate",
          "Departure toward Marrakech",
          "Cross the High Atlas Mountains",
          "Scenic stops along the journey",
          "Flexible breaks for photos and rest",
          "Arrival back in Marrakech",
        ],
      },
    ],
  
    // ─────────────────────────────
    // INCLUDED
    // ─────────────────────────────
  
    included: [
      "Private transportation throughout the tour",
      "English- or French-speaking driver",
      "Three nights of accommodation",
      "One night in the Dades area",
      "One night at a Sahara desert camp",
      "One night in Ouarzazate",
      "Breakfasts and dinners during the tour",
      "Camel ride in the Merzouga desert",
      "Free time to explore the main sightseeing stops",
      "Flexible stops for photos and breaks during the journey",
      "Pickup and final drop-off in Marrakech",
    ],
  
    // ─────────────────────────────
    // NOT INCLUDED
    // ─────────────────────────────
  
    excluded: [
      "Lunches",
      "Drinks",
      "Entrance fees when required",
      "Local guides unless requested",
      "Optional activities not mentioned in the itinerary",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities",
      "Any services not mentioned in the included section",
    ],
  
    // ─────────────────────────────
    // ACCOMMODATION
    // ─────────────────────────────
  
    accommodation: [
      {
        night: 1,
        location: "Dades Valley",
        type: "Hotel or Riad",
      },
      {
        night: 2,
        location: "Merzouga",
        type: "Sahara Desert Camp",
      },
      {
        night: 3,
        location: "Ouarzazate",
        type: "Hotel or Riad",
      },
    ],
  
    // ─────────────────────────────
    // GALLERY
    // ─────────────────────────────
  
    gallery: [
      "/images/tours/4-day-sahara-desert-tour-from-marrakech.webp",
    ],
  
    // ─────────────────────────────
    // FAQ
    // ─────────────────────────────
  
    faqs: [
      {
        question: "Is the 4-day desert tour from Marrakech private?",
  
        answer:
          "Yes. This is a private tour for you and your travel group. You travel in a private vehicle with more flexibility for stops, breaks and the pace of the journey.",
      },
  
      {
        question: "Where does the 4-day Sahara desert tour start and finish?",
  
        answer:
          "The tour starts in Marrakech and finishes in Marrakech. It is a good option for travelers who want to visit Merzouga and the Sahara while keeping Marrakech as their starting and ending city.",
      },
  
      {
        question:
          "What is the difference between the 3-day and 4-day desert tours from Marrakech?",
  
        answer:
          "The 4-day tour has a slower return journey. After visiting Merzouga, you travel through Rissani, Nkob and the Draa Valley and spend a night in Ouarzazate before returning to Marrakech. The 3-day tour returns to Marrakech directly from the desert on the final day.",
      },
  
      {
        question: "Does this tour visit Merzouga?",
  
        answer:
          "Yes. Merzouga and the Erg Chebbi dunes are central parts of the tour. You will experience the Sahara, enjoy a camel ride and spend one night at a desert camp.",
      },
  
      {
        question: "Is the camel ride included?",
  
        answer:
          "Yes. A camel ride across the Erg Chebbi dunes is included as part of the Sahara Desert experience.",
      },
  
      {
        question: "Do we sleep in the Sahara Desert?",
  
        answer:
          "Yes. The second night of the tour is spent at a desert camp near the Erg Chebbi dunes in Merzouga.",
      },
  
      {
        question: "Does the tour visit Ait Ben Haddou?",
  
        answer:
          "Yes. Ait Ben Haddou is visited on the first day while traveling from Marrakech toward Ouarzazate and the Dades Valley.",
      },
  
      {
        question: "Do we visit Todra Gorges?",
  
        answer:
          "Yes. Todra Gorges is one of the main stops on the second day before continuing toward Merzouga.",
      },
  
      {
        question: "Does the tour visit the Draa Valley?",
  
        answer:
          "Yes. The third day follows a scenic route from the Merzouga area toward Ouarzazate through Nkob and the Draa Valley.",
      },
  
      {
        question: "Why choose the 4-day tour instead of the 3-day option?",
  
        answer:
          "The extra day makes the return from the Sahara less rushed and allows you to discover the Draa Valley and spend a night in Ouarzazate. It is a good choice if you prefer a more balanced itinerary.",
      },
  
      {
        question: "Can the 4-day Marrakech desert tour be customized?",
  
        answer:
          "Yes. Because this is a private tour, parts of the itinerary can be adapted to your travel plans, accommodation preferences and interests.",
      },
  
      {
        question: "Is there a lot of driving during the tour?",
  
        answer:
          "The route covers a large part of southern Morocco, so there are several hours of driving on some days. The four-day itinerary divides the journey into more comfortable stages with sightseeing stops and three overnight stays.",
      },
  
      {
        question: "What should I bring for the Sahara Desert?",
  
        answer:
          "Comfortable clothes, walking shoes, sun protection and an extra layer for the evening are useful. Desert temperatures can change between daytime and night.",
      },
  
      {
        question: "Can families take this private desert tour?",
  
        answer:
          "Families can request this tour. If you are traveling with young children, share their ages when contacting us so the route and travel arrangements can be discussed in advance.",
      },
    ],
  
    // ─────────────────────────────
    // SEO
    // ─────────────────────────────
  
    seo: {
      title:
        "4-Day Sahara Desert Tour from Marrakech | Moroccan Trip",
  
      description:
        "Take a private 4-day desert tour from Marrakech to Merzouga with Ait Ben Haddou, Dades Valley, camel trekking, a Sahara camp and Draa Valley.",
  
      // Internal SEO keyword map only.
      // Do not output these as a meta keywords tag.
      keywords: [
        "4 days desert tour from marrakech",
        "4 days tour from marrakech to merzouga",
        "4 day desert tour from marrakech",
        "4 day tour marrakech to merzouga",
        "4 days tour from marrakech to merzouga desert",
        "4 days desert tour from marrakech to merzouga",
        "4 day sahara desert tour marrakech",
        "4 day tour from marrakech to merzouga",
        "4 day sahara tour from marrakech",
        "4 days luxury desert tour from marrakech",
      ],
    },
  
    // ─────────────────────────────
    // BOOKING
    // ─────────────────────────────
  
    booking: {
      available: true,
      minimumDays: 4,
      customizable: true,
      contactLabel: "Request a Quote",
    },
  },

  {
    id: "5",
  
    // ─────────────────────────────
    // BASIC INFORMATION
    // ─────────────────────────────
  
    slug: "5-day-marrakech-fes-desert-tour",
  
    title: "5-Day Marrakech to Fes Desert Tour",
  
    shortDescription:
      "Travel from Marrakech to Fes on a private 5-day desert tour with more time in Merzouga, a Sahara camel trek, desert camp and a relaxed journey through the Middle Atlas.",
  
    image: "/images/tours/5-day-marrakech-fes-desert-tour.webp",
  
    badge: "Slow Travel",
  
    featured: true,
  
    category: "Desert Tours",
  
    // ─────────────────────────────
    // TOUR DETAILS
    // ─────────────────────────────
  
    duration: "5 Days / 4 Nights",
  
    nights: 4,
  
    tourType: "Private Tour",
  
    groupSize: "Up to 4 People",
  
    languages: ["English", "French"],
  
    departure: "Marrakech",
  
    arrival: "Fes",
  
    locations: [
      "Marrakech",
      "High Atlas Mountains",
      "Ait Ben Haddou",
      "Ouarzazate",
      "Dades Valley",
      "Todra Gorges",
      "Merzouga",
      "Erg Chebbi",
      "Khamlia",
      "Sahara Desert",
      "Ziz Valley",
      "Midelt",
      "Middle Atlas Mountains",
      "Ifrane",
      "Fes",
    ],
  
    // ─────────────────────────────
    // PRICING
    // ─────────────────────────────
  
    // No fixed price.
    // The final quote depends on the number of travelers,
    // accommodation level and requested services.
  
    // ─────────────────────────────
    // HIGHLIGHTS
    // ─────────────────────────────
  
    highlights: [
      "Cross the High Atlas Mountains from Marrakech",
      "Visit the historic Ait Ben Haddou fortified village",
      "Travel through Ouarzazate and southern Morocco",
      "Spend the first night in the Dades Valley",
      "Walk through the impressive Todra Gorges",
      "Reach Merzouga and the golden dunes of Erg Chebbi",
      "Enjoy a full day exploring the Merzouga desert area",
      "Visit Khamlia and experience local desert culture",
      "Ride a camel across the Sahara dunes",
      "Watch the sunset over Erg Chebbi",
      "Spend a night at a Sahara desert camp",
      "Travel through the palm-filled Ziz Valley",
      "Spend a night in Midelt near the Middle Atlas Mountains",
      "Continue through mountain and forest landscapes toward Fes",
      "Enjoy a slower and more comfortable Marrakech to Fes journey",
    ],
  
    // ─────────────────────────────
    // OVERVIEW
    // ─────────────────────────────
  
    overview: `
      Discover Morocco at a slower pace on this private 5-day Marrakech to Fes
      desert tour.
  
      The journey begins in Marrakech and crosses the High Atlas Mountains
      toward Ait Ben Haddou, Ouarzazate and the Dades Valley. The first part of
      the tour combines mountain scenery, traditional villages and the wide
      landscapes of southern Morocco.
  
      After visiting Todra Gorges, continue toward Merzouga and the Erg Chebbi
      dunes. Unlike the shorter Marrakech to Fes desert tours, this five-day
      itinerary gives you more time around Merzouga instead of passing quickly
      through the Sahara.
  
      Spend a full day discovering the desert area, visit Khamlia and enjoy time
      around the dunes before taking a camel ride into the Sahara. Watch the
      sunset and spend the night at a desert camp under the open sky.
  
      The journey then continues north through the Ziz Valley toward Midelt,
      where you spend another night before crossing the Middle Atlas Mountains
      on the final day.
  
      This 5-day desert tour from Marrakech to Fes is designed for travelers who
      prefer a more relaxed route, more time in the Sahara and shorter travel
      stages before reaching Fes.
    `,
  
    // ─────────────────────────────
    // ITINERARY
    // ─────────────────────────────
  
    itinerary: [
      {
        day: 1,
  
        title:
          "Marrakech – High Atlas Mountains – Ait Ben Haddou – Dades Valley",
  
        description: `
          Your 5-day Marrakech to Fes desert tour begins with a morning pickup
          in Marrakech.
  
          Travel across the High Atlas Mountains, following winding roads through
          mountain landscapes and traditional villages. Stops can be made along
          the way to enjoy the scenery and take photos.
  
          Continue to Ait Ben Haddou, a historic fortified village known for its
          traditional earthen architecture. Take time to explore the area before
          continuing toward Ouarzazate.
  
          From Ouarzazate, travel farther into southern Morocco toward the Dades
          Valley.
  
          Arrive in the Dades area in the evening, where you will have dinner and
          spend the first night of your journey.
        `,
  
        highlights: [
          "Morning pickup in Marrakech",
          "Cross the High Atlas Mountains",
          "Scenic mountain stops",
          "Visit Ait Ben Haddou",
          "Pass through Ouarzazate",
          "Continue toward the Dades Valley",
          "Dinner and overnight stay in the Dades area",
        ],
      },
  
      {
        day: 2,
  
        title: "Dades Valley – Todra Gorges – Merzouga",
  
        description: `
          After breakfast, leave the Dades Valley and continue through the
          landscapes of southeastern Morocco.
  
          Stop at Todra Gorges, where you can walk between the high canyon walls
          and enjoy the natural surroundings.
  
          Continue toward Merzouga. As you travel farther east, the scenery
          gradually changes from rocky valleys to open desert landscapes.
  
          Arrive in Merzouga beside the Erg Chebbi dunes in the afternoon.
  
          Because this five-day itinerary gives you more time in the Sahara,
          there is no need to rush directly into the camel trek. Enjoy the
          afternoon around Merzouga and take in your first views of the dunes.
  
          Spend the night at a hotel or riad in the Merzouga area.
        `,
  
        highlights: [
          "Breakfast in the Dades Valley",
          "Travel through southeastern Morocco",
          "Visit Todra Gorges",
          "Continue toward Merzouga",
          "See the Erg Chebbi dunes",
          "Free time in the Merzouga area",
          "Overnight stay in Merzouga",
        ],
      },
  
      {
        day: 3,
  
        title:
          "Merzouga Desert Exploration – Khamlia – Camel Trek – Sahara Camp",
  
        description: `
          Today is dedicated to experiencing the Merzouga desert area without
          rushing.
  
          After breakfast, explore the landscapes surrounding the Erg Chebbi
          dunes and discover more of life around the Sahara.
  
          Visit Khamlia, a village near Merzouga known for its local culture and
          musical traditions. There is also time to enjoy the desert scenery and
          make stops around the dunes.
  
          Later in the afternoon, prepare for your camel trek into the Sahara.
          Ride across the golden dunes of Erg Chebbi and enjoy the quiet
          atmosphere as the sun begins to set.
  
          After sunset, continue to your desert camp.
  
          Enjoy dinner and spend the night surrounded by the peaceful Sahara
          landscape.
        `,
  
        highlights: [
          "Full day around the Merzouga desert",
          "Explore the Erg Chebbi area",
          "Visit Khamlia",
          "Discover local desert culture",
          "Free time around the Sahara",
          "Camel ride across the dunes",
          "Watch the Sahara sunset",
          "Dinner at the desert camp",
          "Overnight stay in the Sahara",
        ],
      },
  
      {
        day: 4,
  
        title: "Merzouga – Ziz Valley – Midelt",
  
        description: `
          Start the morning in the Sahara. If you wish, wake up early to watch
          the sunrise over the Erg Chebbi dunes before breakfast.
  
          After leaving Merzouga, begin the journey north.
  
          Travel through the Ziz Valley, where long stretches of palm trees and
          mountain scenery create a strong contrast with the open desert.
  
          The route continues through changing landscapes as you travel toward
          Midelt.
  
          Having a separate overnight stop in Midelt makes this 5-day tour from
          Marrakech to Fes more relaxed than the shorter itineraries. Instead of
          spending one long day traveling all the way from Merzouga to Fes, the
          journey is divided into more comfortable stages.
  
          Arrive in Midelt later in the day and spend the fourth night of the
          tour there.
        `,
  
        highlights: [
          "Optional sunrise over Erg Chebbi",
          "Breakfast before leaving the Sahara",
          "Departure from Merzouga",
          "Travel through the Ziz Valley",
          "See palm groves and mountain landscapes",
          "Continue toward Midelt",
          "Relaxed afternoon journey",
          "Overnight stay in Midelt",
        ],
      },
  
      {
        day: 5,
  
        title: "Midelt – Middle Atlas Mountains – Ifrane – Fes",
  
        description: `
          After breakfast in Midelt, begin the final stage of your Marrakech to
          Fes desert journey.
  
          Travel through the Middle Atlas Mountains, where the dry landscapes of
          southern Morocco gradually change into greener mountain and forest
          scenery.
  
          Continue through the Ifrane area on the way toward Fes. Stops can be
          made during the journey depending on timing and road conditions.
  
          This final day is shorter and more relaxed because the previous night
          was spent in Midelt rather than Merzouga.
  
          Arrive in Fes later in the day, marking the end of your private 5-day
          desert tour from Marrakech to Fes.
        `,
  
        highlights: [
          "Breakfast in Midelt",
          "Cross the Middle Atlas Mountains",
          "Enjoy changing mountain scenery",
          "Pass through the Ifrane area",
          "Flexible stops along the route",
          "Arrival in Fes",
        ],
      },
    ],
  
    // ─────────────────────────────
    // INCLUDED
    // ─────────────────────────────
  
    included: [
      "Private transportation from Marrakech to Fes",
      "English- or French-speaking driver",
      "Four nights of accommodation",
      "One night in the Dades area",
      "One night in the Merzouga area",
      "One night at a Sahara desert camp",
      "One night in Midelt",
      "Breakfasts and dinners during the tour",
      "Camel ride in the Merzouga desert",
      "Time to explore the Merzouga and Erg Chebbi area",
      "Free time at the main sightseeing stops",
      "Flexible stops for photos and breaks during the journey",
      "Drop-off in Fes at the end of the tour",
    ],
  
    // ─────────────────────────────
    // NOT INCLUDED
    // ─────────────────────────────
  
    excluded: [
      "Lunches",
      "Drinks",
      "Entrance fees when required",
      "Local guides unless requested",
      "Optional activities not included in the itinerary",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities",
      "Any services not mentioned in the included section",
    ],
  
    // ─────────────────────────────
    // ACCOMMODATION
    // ─────────────────────────────
  
    accommodation: [
      {
        night: 1,
        location: "Dades Valley",
        type: "Hotel or Riad",
      },
      {
        night: 2,
        location: "Merzouga",
        type: "Hotel or Riad",
      },
      {
        night: 3,
        location: "Merzouga",
        type: "Sahara Desert Camp",
      },
      {
        night: 4,
        location: "Midelt",
        type: "Hotel or Riad",
      },
    ],
  
    // ─────────────────────────────
    // GALLERY
    // ─────────────────────────────
  
    gallery: [
      "/images/tours/5-day-marrakech-fes-desert-tour.webp",
    ],
  
    // ─────────────────────────────
    // FAQ
    // ─────────────────────────────
  
    faqs: [
      {
        question: "Is the 5-day Marrakech to Fes desert tour private?",
  
        answer:
          "Yes. This is a private tour for you and your travel group, with private transportation and more flexibility for stops and travel time.",
      },
  
      {
        question:
          "What is the difference between the 3-day, 4-day and 5-day Marrakech to Fes desert tours?",
  
        answer:
          "The 5-day itinerary offers the slowest pace. It includes more time around Merzouga and divides the journey from the Sahara to Fes with an overnight stay in Midelt. This reduces the amount of driving on the final day.",
      },
  
      {
        question: "How many nights are included in the 5-day tour?",
  
        answer:
          "The tour includes four nights: one in the Dades area, one in Merzouga, one at a Sahara desert camp and one in Midelt.",
      },
  
      {
        question: "Does the tour include a full day in Merzouga?",
  
        answer:
          "Yes. The third day is dedicated to exploring the Merzouga desert area before the camel trek and overnight stay at the Sahara camp.",
      },
  
      {
        question: "Do we visit Khamlia?",
  
        answer:
          "Yes. The itinerary includes a visit to Khamlia during the full day around Merzouga.",
      },
  
      {
        question: "Is the camel ride in Merzouga included?",
  
        answer:
          "Yes. A camel ride across the Erg Chebbi dunes is included as part of the Sahara Desert experience.",
      },
  
      {
        question: "Do we spend a night in the Sahara Desert?",
  
        answer:
          "Yes. One night is spent at a desert camp near the Erg Chebbi dunes.",
      },
  
      {
        question: "Does the tour visit Ait Ben Haddou?",
  
        answer:
          "Yes. Ait Ben Haddou is visited on the first day while traveling from Marrakech toward Ouarzazate and the Dades Valley.",
      },
  
      {
        question: "Do we visit Todra Gorges?",
  
        answer:
          "Yes. Todra Gorges is one of the main stops on the second day before continuing toward Merzouga.",
      },
  
      {
        question: "Why does the 5-day tour include a night in Midelt?",
  
        answer:
          "The Midelt overnight divides the long journey between Merzouga and Fes into two stages. This creates a more relaxed final part of the tour and gives you more time to enjoy the changing landscapes.",
      },
  
      {
        question: "Where does the tour start and finish?",
  
        answer:
          "The tour starts in Marrakech and finishes in Fes, so you can continue your Morocco trip without returning to Marrakech.",
      },
  
      {
        question: "Can this 5-day Marrakech to Fes tour be customized?",
  
        answer:
          "Yes. Because the tour is private, parts of the itinerary can be adapted to your travel plans, interests and preferred accommodation level.",
      },
  
      {
        question: "Is the 5-day option suitable if I prefer slower travel?",
  
        answer:
          "Yes. This itinerary is designed to give you more time in the Sahara and divide the longer driving stages over more days.",
      },
  
      {
        question: "What should I bring for the Sahara Desert?",
  
        answer:
          "Comfortable clothes, walking shoes, sun protection and an extra layer for the evening are useful. Temperatures can change between daytime and night.",
      },
  
      {
        question: "Can families take this private desert tour?",
  
        answer:
          "Families can request this tour. If you are traveling with young children, share their ages when contacting us so the itinerary and travel arrangements can be discussed in advance.",
      },
    ],
  
    // ─────────────────────────────
    // SEO
    // ─────────────────────────────
  
    seo: {
      title:
        "5-Day Marrakech to Fes Desert Tour | Moroccan Trip",
  
      description:
        "Enjoy a private 5-day Marrakech to Fes desert tour with Dades Valley, Merzouga, a full Sahara day, camel trek, desert camp and Middle Atlas route.",
  
      // Internal SEO keyword map only.
      // Do not output these as a meta keywords tag.
      keywords: [
        "5 day marrakech to fes desert tour",
        "5 days marrakech to fes desert tour",
        "5 days desert tour from marrakech to fes",
        "5 day desert tour from marrakech to fes",
        "5 days tour from marrakech to fes",
        "5 day tour from marrakech to fes",
        "5 days trip from marrakech to fes",
        "marrakech to fes via merzouga",
        "5 day sahara tour from marrakech to fes",
        "private marrakech to fes desert tour",
      ],
    },
  
    // ─────────────────────────────
    // BOOKING
    // ─────────────────────────────
  
    booking: {
      available: true,
      minimumDays: 5,
      customizable: true,
      contactLabel: "Request a Quote",
    },
  },

  {
    id: "6",
  
    // ─────────────────────────────
    // BASIC INFORMATION
    // ─────────────────────────────
  
    slug: "7-day-morocco-imperial-cities-tour",
  
    title: "7-Day Imperial Cities Tour from Marrakech",
  
    shortDescription:
      "Discover Morocco's imperial cities on a private 7-day tour from Marrakech through Casablanca, Rabat, Meknes, Fes and the Middle Atlas before returning to Marrakech.",
  
    image: "/images/tours/7-day-morocco-imperial-cities-tour.webp",
  
    badge: "Cultural Journey",
  
    featured: true,
  
    category: "Imperial Cities Tours",
  
    // ─────────────────────────────
    // TOUR DETAILS
    // ─────────────────────────────
  
    duration: "7 Days / 6 Nights",
  
    nights: 6,
  
    tourType: "Private Tour",
  
    groupSize: "Up to 4 People",
  
    languages: ["English", "French"],
  
    departure: "Marrakech",
  
    arrival: "Marrakech",
  
    locations: [
      "Marrakech",
      "Casablanca",
      "Rabat",
      "Meknes",
      "Volubilis",
      "Fes",
      "Ifrane",
      "Middle Atlas Mountains",
      "Beni Mellal",
      "Marrakech",
    ],
  
    // ─────────────────────────────
    // PRICING
    // ─────────────────────────────
  
    // No fixed price.
    // The final quote depends on the number of travelers,
    // accommodation level and requested services.
  
    // ─────────────────────────────
    // HIGHLIGHTS
    // ─────────────────────────────
  
    highlights: [
      "Explore the historic city of Marrakech",
      "Travel to Casablanca and see Morocco's modern Atlantic side",
      "Discover Rabat, Morocco's capital and an imperial city",
      "Visit the historic landmarks of Meknes",
      "Explore the ancient ruins of Volubilis",
      "Spend two nights in Fes and discover its old medina",
      "Experience the culture and traditional architecture of Morocco's imperial cities",
      "Travel through Ifrane and the Middle Atlas Mountains",
      "See changing landscapes between northern and central Morocco",
      "Enjoy a private journey with flexible stops along the route",
      "Travel at a comfortable pace with time to explore each destination",
      "Return to Marrakech through the landscapes of central Morocco",
    ],
  
    // ─────────────────────────────
    // OVERVIEW
    // ─────────────────────────────
  
    overview: `
      Discover Morocco's history, culture and changing landscapes on this private
      7-day Imperial Cities Tour from Marrakech.
  
      The journey connects some of the country's most important historic cities,
      including Marrakech, Rabat, Meknes and Fes. Along the way, you will also
      visit Casablanca and Volubilis before traveling through the Middle Atlas
      Mountains on the return journey.
  
      Begin in Marrakech, where traditional markets, historic architecture and
      lively streets introduce you to Moroccan culture. From there, travel north
      toward Casablanca and Rabat before continuing to Meknes and Fes.
  
      Fes is one of the main highlights of this Morocco imperial cities tour.
      You will have a full day to discover its old medina, traditional
      neighborhoods, historic buildings and local crafts.
  
      After exploring northern Morocco, the route turns south through Ifrane,
      the Middle Atlas Mountains and Beni Mellal before returning to Marrakech.
  
      This Morocco 7-day tour is designed for travelers who want to experience
      the country's history and cities without rushing from one destination to
      the next. It combines cultural visits, scenic drives and comfortable
      overnight stops in one private journey.
    `,
  
    // ─────────────────────────────
    // ITINERARY
    // ─────────────────────────────
  
    itinerary: [
      {
        day: 1,
  
        title: "Discover Marrakech",
  
        description: `
          Your 7-day Morocco tour begins in Marrakech.
  
          Spend the day discovering the atmosphere of one of Morocco's best-known
          imperial cities. Marrakech combines historic neighborhoods, traditional
          markets, gardens and busy public squares in one unique destination.
  
          Depending on your arrival time and travel plans, you can explore parts
          of the old medina, walk through the souks and enjoy time around the
          historic center.
  
          The first day is kept relatively relaxed so you can settle into the
          journey before traveling north the following morning.
  
          Spend the night in Marrakech.
        `,
  
        highlights: [
          "Start your private Morocco tour in Marrakech",
          "Discover the atmosphere of the old city",
          "Explore traditional markets and streets",
          "Free time depending on your arrival schedule",
          "Overnight stay in Marrakech",
        ],
      },
  
      {
        day: 2,
  
        title: "Marrakech – Casablanca – Rabat",
  
        description: `
          After breakfast, leave Marrakech and begin the journey north toward
          Morocco's Atlantic coast.
  
          Arrive in Casablanca, the country's largest city and an important
          economic center. Spend time discovering some of the city's main areas
          before continuing toward Rabat.
  
          Rabat is both Morocco's capital and one of its imperial cities. The city
          has a calmer atmosphere than Marrakech or Fes and combines historic
          monuments with wide streets and Atlantic views.
  
          Take time to discover some of Rabat's important landmarks before
          checking into your accommodation.
  
          Spend the night in Rabat.
        `,
  
        highlights: [
          "Breakfast in Marrakech",
          "Travel north toward Casablanca",
          "Discover part of Casablanca",
          "Continue along the Atlantic route",
          "Arrive in Rabat",
          "Explore Morocco's capital",
          "Overnight stay in Rabat",
        ],
      },
  
      {
        day: 3,
  
        title: "Rabat – Meknes – Volubilis – Fes",
  
        description: `
          Leave Rabat after breakfast and continue your Morocco imperial cities
          journey toward Meknes.
  
          Meknes is one of Morocco's historic imperial cities and offers a
          quieter experience than some of the country's larger destinations.
          Take time to discover its historic center and traditional architecture.
  
          Continue toward Volubilis, where you can explore the remains of an
          ancient settlement surrounded by open countryside.
  
          After the visit, continue toward Fes.
  
          Arrive in Fes later in the day and settle into your accommodation.
          You will spend two nights here, giving you enough time to discover the
          city without rushing.
  
          Spend the night in Fes.
        `,
  
        highlights: [
          "Departure from Rabat",
          "Visit the imperial city of Meknes",
          "Discover historic architecture",
          "Visit Volubilis",
          "Continue toward Fes",
          "First evening in Fes",
          "Overnight stay in Fes",
        ],
      },
  
      {
        day: 4,
  
        title: "Full Day Exploring Fes",
  
        description: `
          Today is dedicated to discovering Fes, one of Morocco's most historic
          and culturally important cities.
  
          Explore the old medina, where narrow streets lead between traditional
          shops, workshops, markets and historic buildings.
  
          The city is known for its traditional crafts, architecture and long
          history. Walking through the medina gives you a closer look at everyday
          life inside one of Morocco's most distinctive urban centers.
  
          Depending on your interests, the day can include important viewpoints,
          traditional craft areas and historic landmarks.
  
          Because this is a private tour, the pace of the day can be adapted to
          your interests.
  
          Return to your accommodation in Fes for a second overnight stay.
        `,
  
        highlights: [
          "Full day in Fes",
          "Explore the old medina",
          "Walk through traditional streets and markets",
          "Discover local crafts",
          "See historic architecture",
          "Flexible sightseeing according to your interests",
          "Second overnight stay in Fes",
        ],
      },
  
      {
        day: 5,
  
        title: "Fes – Ifrane – Middle Atlas Mountains – Beni Mellal",
  
        description: `
          After breakfast, leave Fes and begin traveling south through a very
          different side of Morocco.
  
          The journey passes through the Ifrane area before continuing into the
          Middle Atlas Mountains.
  
          As you travel, the landscape changes from historic cities to forests,
          mountain roads and open countryside.
  
          This part of the Morocco 7-day itinerary gives you a break from busy
          medinas and allows you to experience more of the country's natural
          scenery.
  
          Continue toward Beni Mellal, located between the mountains and the
          agricultural plains of central Morocco.
  
          Arrive later in the day and spend the night in the area.
        `,
  
        highlights: [
          "Departure from Fes",
          "Travel through the Ifrane area",
          "Cross the Middle Atlas Mountains",
          "Enjoy mountain and forest scenery",
          "Discover a different side of Morocco",
          "Continue toward Beni Mellal",
          "Overnight stay in Beni Mellal",
        ],
      },
  
      {
        day: 6,
  
        title: "Beni Mellal – Central Morocco – Marrakech",
  
        description: `
          After breakfast, continue the journey from Beni Mellal toward
          Marrakech.
  
          Today's route passes through the landscapes of central Morocco, with
          views changing between agricultural areas, foothills and open
          countryside.
  
          Stops can be made along the way for rest, photos and meals depending
          on your schedule.
  
          Arrive back in Marrakech later in the day.
  
          After several days traveling through Morocco's imperial cities and
          mountain regions, enjoy a relaxed evening back in Marrakech.
  
          Spend the final night of the tour in Marrakech.
        `,
  
        highlights: [
          "Breakfast in Beni Mellal",
          "Travel through central Morocco",
          "Scenic countryside along the route",
          "Flexible stops for photos and rest",
          "Return to Marrakech",
          "Free evening in the city",
          "Overnight stay in Marrakech",
        ],
      },
  
      {
        day: 7,
  
        title: "Marrakech – Final Day",
  
        description: `
          Enjoy the final day of your 7-day Imperial Cities Tour in Marrakech.
  
          Depending on your departure time, you can enjoy additional free time in
          the city, return to places you would like to explore further or simply
          relax before continuing your journey.
  
          This final day gives the itinerary some flexibility and avoids ending
          your tour immediately after a long driving day.
  
          Your private journey comes to an end in Marrakech after seven days of
          exploring historic cities, traditional medinas, mountain landscapes
          and different regions of Morocco.
        `,
  
        highlights: [
          "Final morning in Marrakech",
          "Free time depending on your schedule",
          "Optional additional exploration",
          "Relax before your onward journey",
          "End of the 7-day Morocco tour",
        ],
      },
    ],
  
    // ─────────────────────────────
    // INCLUDED
    // ─────────────────────────────
  
    included: [
      "Private transportation throughout the tour",
      "English- or French-speaking driver",
      "Six nights of accommodation",
      "Two nights in Marrakech",
      "One night in Rabat",
      "Two nights in Fes",
      "One night in Beni Mellal",
      "Daily breakfasts",
      "Flexible stops for photos and breaks during the journey",
      "Free time to explore the main destinations",
      "Pickup and final drop-off in Marrakech",
    ],
  
    // ─────────────────────────────
    // NOT INCLUDED
    // ─────────────────────────────
  
    excluded: [
      "Lunches and dinners unless arranged in advance",
      "Drinks",
      "Entrance fees to monuments and attractions",
      "Local city guides unless requested",
      "Optional activities",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities",
      "Any services not mentioned in the included section",
    ],
  
    // ─────────────────────────────
    // ACCOMMODATION
    // ─────────────────────────────
  
    accommodation: [
      {
        night: 1,
        location: "Marrakech",
        type: "Hotel or Riad",
      },
      {
        night: 2,
        location: "Rabat",
        type: "Hotel or Riad",
      },
      {
        night: 3,
        location: "Fes",
        type: "Hotel or Riad",
      },
      {
        night: 4,
        location: "Fes",
        type: "Hotel or Riad",
      },
      {
        night: 5,
        location: "Beni Mellal",
        type: "Hotel",
      },
      {
        night: 6,
        location: "Marrakech",
        type: "Hotel or Riad",
      },
    ],
  
    // ─────────────────────────────
    // GALLERY
    // ─────────────────────────────
  
    gallery: [
      "/images/tours/7-day-morocco-imperial-cities-tour.webp",
    ],
  
    // ─────────────────────────────
    // FAQ
    // ─────────────────────────────
  
    faqs: [
      {
        question: "Is the 7-day Imperial Cities Tour private?",
  
        answer:
          "Yes. This is a private tour for you and your travel group, with private transportation and more flexibility throughout the journey.",
      },
  
      {
        question: "Which imperial cities are included in the tour?",
  
        answer:
          "The itinerary includes Marrakech, Rabat, Meknes and Fes. These cities form the main cultural focus of the journey.",
      },
  
      {
        question: "Does the 7-day Morocco tour include Casablanca?",
  
        answer:
          "Yes. Casablanca is included on the journey from Marrakech to Rabat. It is not one of Morocco's imperial cities, but it is an important stop on this route.",
      },
  
      {
        question: "Does the tour visit Volubilis?",
  
        answer:
          "Yes. The itinerary includes a stop at Volubilis while traveling from Meknes toward Fes.",
      },
  
      {
        question: "How much time do we spend in Fes?",
  
        answer:
          "The tour includes two nights in Fes and a full day dedicated to exploring the city, including the old medina and traditional neighborhoods.",
      },
  
      {
        question: "Does this Morocco imperial cities tour include the Sahara?",
  
        answer:
          "No. This itinerary focuses on Morocco's imperial cities, cultural destinations and the Middle Atlas. If you want to include the Sahara Desert, one of our Marrakech to Merzouga tours may be a better choice.",
      },
  
      {
        question: "Where does the tour start and finish?",
  
        answer:
          "The tour starts and finishes in Marrakech, making it convenient if Marrakech is your main base in Morocco.",
      },
  
      {
        question: "Is a local guide included in Marrakech or Fes?",
  
        answer:
          "Local guides are not included by default unless specified in your final tour arrangements. A guide can be requested when planning your trip.",
      },
  
      {
        question: "Can this 7-day Morocco tour be customized?",
  
        answer:
          "Yes. Because this is a private tour, parts of the itinerary can be adapted to your interests, accommodation preferences and travel schedule.",
      },
  
      {
        question: "Is this tour suitable for travelers interested in Moroccan culture?",
  
        answer:
          "Yes. The itinerary focuses on historic cities, traditional medinas, architecture, local life and cultural destinations rather than desert activities.",
      },
  
      {
        question: "Why are there two nights in Fes?",
  
        answer:
          "Fes has a large historic medina and many cultural sites, so two nights allow you to spend a full day exploring the city without needing to continue driving the same afternoon.",
      },
  
      {
        question: "Why does the tour travel through the Middle Atlas?",
  
        answer:
          "The Middle Atlas route provides a scenic journey back toward Marrakech and allows you to experience mountain and countryside landscapes between Fes and central Morocco.",
      },
  
      {
        question: "Are entrance fees included?",
  
        answer:
          "Entrance fees are not included by default. This allows you to choose the monuments and attractions you would like to visit during the tour.",
      },
  
      {
        question: "Can families take this Imperial Cities Tour?",
  
        answer:
          "Families can request this private tour. If you are traveling with children, share their ages when contacting us so the itinerary can be planned comfortably.",
      },
    ],
  
    // ─────────────────────────────
    // SEO
    // ─────────────────────────────
  
    seo: {
      title:
        "7-Day Morocco Imperial Cities Tour | Moroccan Trip",
  
      description:
        "Explore Marrakech, Rabat, Meknes and Fes on a private 7-day Morocco Imperial Cities Tour with Casablanca, Volubilis and the Middle Atlas.",
  
      // Internal SEO keyword map only.
      // Do not output these as a meta keywords tag.
      keywords: [
        "morocco 7 day tour",
        "morocco imperial cities tour",
        "7 days morocco tour",
        "7 day morocco tour",
        "7 day tour of morocco",
        "morocco tour 7 days",
        "imperial cities of morocco tour",
        "morocco itinerary 7 days",
        "morocco 7 day itinerary",
        "7 day morocco itinerary",
        "morocco 7 day itinerary from marrakech",
      ],
    },
  
    // ─────────────────────────────
    // BOOKING
    // ─────────────────────────────
  
    booking: {
      available: true,
      minimumDays: 7,
      customizable: true,
      contactLabel: "Request a Quote",
    },
  },

  {
    id: "7",
  
    // ─────────────────────────────
    // BASIC INFORMATION
    // ─────────────────────────────
  
    slug: "4-day-casablanca-marrakech-desert-tour",
  
    title: "4-Day Casablanca to Marrakech Desert Tour",
  
    shortDescription:
      "Travel from Casablanca to Marrakech on a private 4-day desert tour through Rabat, Fes, the Middle Atlas Mountains, Merzouga, Todra Gorges and the High Atlas.",
  
    image: "/images/tours/4-day-casablanca-marrakech-desert-tour.webp",
  
    badge: "Casablanca to Marrakech",
  
    featured: true,
  
    category: "Desert Tours",
  
    // ─────────────────────────────
    // TOUR DETAILS
    // ─────────────────────────────
  
    duration: "4 Days / 3 Nights",
  
    nights: 3,
  
    tourType: "Private Tour",
  
    groupSize: "Up to 4 People",
  
    languages: ["English", "French"],
  
    departure: "Casablanca",
  
    arrival: "Marrakech",
  
    locations: [
      "Casablanca",
      "Rabat",
      "Meknes",
      "Fes",
      "Ifrane",
      "Middle Atlas Mountains",
      "Midelt",
      "Ziz Valley",
      "Merzouga",
      "Erg Chebbi",
      "Sahara Desert",
      "Rissani",
      "Todra Gorges",
      "Dades Valley",
      "Ouarzazate",
      "Ait Ben Haddou",
      "High Atlas Mountains",
      "Marrakech",
    ],
  
    // ─────────────────────────────
    // PRICING
    // ─────────────────────────────
  
    // No fixed price.
    // The final quote depends on the number of travelers,
    // accommodation level and requested services.
  
    // ─────────────────────────────
    // HIGHLIGHTS
    // ─────────────────────────────
  
    highlights: [
      "Begin your private Morocco journey in Casablanca",
      "Visit Rabat and discover Morocco's capital",
      "Travel through Meknes before continuing to Fes",
      "Cross the Middle Atlas Mountains through changing landscapes",
      "Pass through Ifrane and the mountain scenery of central Morocco",
      "Travel through the Ziz Valley on the way to the Sahara",
      "Reach Merzouga and the golden dunes of Erg Chebbi",
      "Ride a camel across the Sahara Desert at sunset",
      "Spend a night at a desert camp near Merzouga",
      "Walk through the dramatic Todra Gorges",
      "Travel through the beautiful Dades Valley",
      "Visit the historic fortified village of Ait Ben Haddou",
      "Cross the High Atlas Mountains on the way to Marrakech",
      "Travel from Casablanca to Marrakech through several different regions of Morocco",
      "Enjoy a private tour with flexible stops throughout the journey",
    ],
  
    // ─────────────────────────────
    // OVERVIEW
    // ─────────────────────────────
  
    overview: `
      Discover several different sides of Morocco on this private Casablanca desert
      tour that travels from the Atlantic coast to the Sahara before finishing in
      Marrakech.
  
      Your four-day journey begins in Casablanca and travels north to Rabat before
      continuing through Meknes to Fes. This first part of the trip introduces you
      to some of Morocco's most important cities before the landscape changes on
      the road toward the desert.
  
      From Fes, travel south through Ifrane and the Middle Atlas Mountains. Continue
      through Midelt and the Ziz Valley as green mountain scenery gradually gives
      way to the dry landscapes of southeastern Morocco.
  
      The highlight of the journey is Merzouga, located beside the golden dunes of
      Erg Chebbi. Here, you can ride a camel across the Sahara, watch the sunset
      over the dunes and spend the night at a desert camp.
  
      The journey then turns west toward Todra Gorges and the Dades Valley before
      continuing through Ouarzazate and Ait Ben Haddou. On the final day, cross the
      High Atlas Mountains and arrive in Marrakech.
  
      This Casablanca to Marrakech desert tour is designed for travelers who want
      more than a direct transfer between Morocco's main cities. In four days, you
      experience imperial cities, mountain roads, valleys, traditional villages and
      the Sahara Desert in one private journey.
    `,
  
    // ─────────────────────────────
    // ITINERARY
    // ─────────────────────────────
  
    itinerary: [
      {
        day: 1,
  
        title: "Casablanca – Rabat – Meknes – Fes",
  
        description: `
          Your 4-day Casablanca to Marrakech desert tour begins with pickup in
          Casablanca.
  
          Leave the city and travel north toward Rabat, Morocco's capital. Take time
          to discover some of the city's main historic areas and enjoy its quieter
          atmosphere before continuing your journey inland.
  
          From Rabat, travel toward Meknes. This historic imperial city offers a
          different atmosphere from Casablanca and gives you another look at
          Morocco's history and traditional architecture.
  
          After your stop in Meknes, continue toward Fes.
  
          Arrive in Fes later in the day and settle into your accommodation. Fes is
          one of Morocco's oldest and most important cultural cities and marks the
          final urban stop before your journey south toward the Sahara.
  
          Spend the first night of the tour in Fes.
        `,
  
        highlights: [
          "Pickup in Casablanca",
          "Travel to Rabat",
          "Discover Morocco's capital",
          "Continue toward Meknes",
          "Explore part of the historic imperial city",
          "Travel onward to Fes",
          "Overnight stay in Fes",
        ],
      },
  
      {
        day: 2,
  
        title:
          "Fes – Ifrane – Middle Atlas Mountains – Ziz Valley – Merzouga",
  
        description: `
          After breakfast, leave Fes and begin the long but scenic journey toward
          the Sahara Desert.
  
          Travel through Ifrane and continue into the Middle Atlas Mountains. This
          part of Morocco is very different from the dry landscapes that you will
          see later in the day, with mountain roads, forests and cooler scenery.
  
          Continue south through the Midelt area, where there will be time for a
          break before traveling toward the Ziz Valley.
  
          As the journey continues, the landscape becomes drier and more open. Enjoy
          views across the Ziz Valley before traveling farther south toward
          Merzouga.
  
          In the late afternoon, arrive near the Erg Chebbi dunes. Merzouga is one
          of the main destinations for travelers taking a desert tour from
          Casablanca.
  
          Prepare for a camel ride across the golden Sahara dunes. Enjoy the quiet
          desert landscape and watch the sunset as you travel toward your camp.
  
          After sunset, arrive at the desert camp for dinner and spend the night
          surrounded by the dunes.
        `,
  
        highlights: [
          "Breakfast in Fes",
          "Travel through Ifrane",
          "Cross the Middle Atlas Mountains",
          "Pass through the Midelt area",
          "Enjoy views across the Ziz Valley",
          "Arrive in Merzouga",
          "See the Erg Chebbi dunes",
          "Camel ride across the Sahara Desert",
          "Watch the sunset over the dunes",
          "Dinner and overnight stay at a desert camp",
        ],
      },
  
      {
        day: 3,
  
        title:
          "Merzouga – Rissani – Todra Gorges – Dades Valley",
  
        description: `
          Start the morning in the peaceful surroundings of the Sahara Desert.
  
          If you wish, wake up early to watch the sunrise over the Erg Chebbi dunes
          before enjoying breakfast at the camp.
  
          Leave Merzouga and continue your Casablanca to Merzouga tour route west
          through southeastern Morocco.
  
          Travel through the Rissani area before continuing toward Tinghir and
          Todra Gorges.
  
          At Todra Gorges, take time to walk between the impressive canyon walls.
          The high cliffs and rocky landscape offer a complete change from the open
          dunes of Merzouga.
  
          After your visit, continue toward the Dades Valley. The road passes
          through small towns, palm-filled areas and dramatic mountain landscapes.
  
          Arrive in the Dades area later in the day, where you will have dinner and
          spend your third night.
        `,
  
        highlights: [
          "Optional sunrise over the Erg Chebbi dunes",
          "Breakfast at the desert camp",
          "Departure from Merzouga",
          "Travel through the Rissani area",
          "Continue toward Tinghir",
          "Walk through Todra Gorges",
          "Travel through southeastern Morocco",
          "Arrive in the Dades Valley",
          "Dinner and overnight stay in the Dades area",
        ],
      },
  
      {
        day: 4,
  
        title:
          "Dades Valley – Ouarzazate – Ait Ben Haddou – High Atlas – Marrakech",
  
        description: `
          After breakfast, leave the Dades Valley and begin the final part of your
          Morocco desert tour from Casablanca.
  
          Travel through the landscapes of southern Morocco toward Ouarzazate. The
          route passes valleys, traditional villages and dry mountain scenery before
          reaching one of the best-known areas of southern Morocco.
  
          Continue to Ait Ben Haddou, a historic fortified village built with
          traditional earthen architecture. Take time to explore the area before
          beginning the journey across the High Atlas Mountains.
  
          The mountain road offers wide views, small villages and a final change of
          scenery before reaching Marrakech.
  
          Stops can be made along the way for photos, rest and meals depending on
          your schedule.
  
          Arrive in Marrakech later in the day.
  
          Your 4-day Casablanca desert tour ends in Marrakech after a journey through
          imperial cities, the Middle Atlas, the Sahara Desert, dramatic valleys and
          the High Atlas Mountains.
        `,
  
        highlights: [
          "Breakfast in the Dades Valley",
          "Travel toward Ouarzazate",
          "Discover the landscapes of southern Morocco",
          "Visit Ait Ben Haddou",
          "Cross the High Atlas Mountains",
          "Enjoy panoramic mountain views",
          "Flexible stops for photos and breaks",
          "Arrive in Marrakech",
          "End of your private Casablanca to Marrakech journey",
        ],
      },
    ],
  
    // ─────────────────────────────
    // INCLUDED
    // ─────────────────────────────
  
    included: [
      "Private transportation from Casablanca to Marrakech",
      "English- or French-speaking driver",
      "Three nights of accommodation",
      "One night in Fes",
      "One night at a Sahara desert camp near Merzouga",
      "One night in the Dades area",
      "Breakfasts and dinners during the tour",
      "Camel ride in the Merzouga desert",
      "Free time to explore the main stops",
      "Flexible stops for photos and breaks during the journey",
      "Pickup in Casablanca",
      "Final drop-off in Marrakech",
    ],
  
    // ─────────────────────────────
    // NOT INCLUDED
    // ─────────────────────────────
  
    excluded: [
      "Lunches",
      "Drinks",
      "Entrance fees when required",
      "Local city guides unless requested",
      "Optional activities not mentioned in the itinerary",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities",
      "Any services not mentioned in the included section",
    ],
  
    // ─────────────────────────────
    // ACCOMMODATION
    // ─────────────────────────────
  
    accommodation: [
      {
        night: 1,
        location: "Fes",
        type: "Hotel or Riad",
      },
      {
        night: 2,
        location: "Merzouga",
        type: "Sahara Desert Camp",
      },
      {
        night: 3,
        location: "Dades Valley",
        type: "Hotel or Riad",
      },
    ],
  
    // ─────────────────────────────
    // GALLERY
    // ─────────────────────────────
  
    gallery: [
      "/images/tours/4-day-casablanca-marrakech-desert-tour.webp",
    ],
  
    // ─────────────────────────────
    // FAQ
    // ─────────────────────────────
  
    faqs: [
      {
        question: "Is the 4-day Casablanca desert tour private?",
  
        answer:
          "Yes. This is a private tour for you and your travel group. You travel in a private vehicle and have more flexibility for stops, breaks and the pace of the journey.",
      },
  
      {
        question: "Where does the tour start and finish?",
  
        answer:
          "The tour starts in Casablanca and finishes in Marrakech. It is a convenient option for travelers who want to cross Morocco while visiting the Sahara instead of returning to Casablanca.",
      },
  
      {
        question:
          "Does the Casablanca to Marrakech desert tour visit Merzouga?",
  
        answer:
          "Yes. Merzouga and the Erg Chebbi dunes are one of the main highlights of the journey. You will reach Merzouga on the second day and spend the night in the Sahara.",
      },
  
      {
        question: "How long does it take to travel from Casablanca to the Sahara?",
  
        answer:
          "The journey is divided over two days. The first day takes you from Casablanca through Rabat and Meknes to Fes. On the second day, you travel from Fes through the Middle Atlas and Ziz Valley to Merzouga.",
      },
  
      {
        question: "Is the camel ride in Merzouga included?",
  
        answer:
          "Yes. A camel ride across the Erg Chebbi dunes is included as part of the Sahara Desert experience.",
      },
  
      {
        question: "Do we spend a night in the Sahara Desert?",
  
        answer:
          "Yes. The second night of the tour is spent at a desert camp near Merzouga, surrounded by the Erg Chebbi dunes.",
      },
  
      {
        question: "What accommodation is included during the tour?",
  
        answer:
          "The tour includes three nights of accommodation: one night in Fes, one night at a Sahara desert camp near Merzouga and one night in the Dades Valley.",
      },
  
      {
        question: "Does the tour visit Rabat and Meknes?",
  
        answer:
          "Yes. Rabat and Meknes are included on the first day while traveling from Casablanca to Fes.",
      },
  
      {
        question: "Does the tour visit Todra Gorges?",
  
        answer:
          "Yes. Todra Gorges is visited on the third day after leaving Merzouga and before continuing to the Dades Valley.",
      },
  
      {
        question: "Does the tour include Ait Ben Haddou?",
  
        answer:
          "Yes. Ait Ben Haddou is visited on the final day before crossing the High Atlas Mountains toward Marrakech.",
      },
  
      {
        question:
          "Is this Casablanca to Sahara desert tour suitable if I want to finish in Marrakech?",
  
        answer:
          "Yes. The itinerary is designed to begin in Casablanca, visit the Sahara and finish in Marrakech, so there is no need to return to your starting city.",
      },
  
      {
        question: "Is there a lot of driving during the four-day tour?",
  
        answer:
          "Yes. The route covers a large part of Morocco, so some days include several hours of driving. The journey is divided with sightseeing stops, breaks and overnight stays along the way.",
      },
  
      {
        question: "Can the Casablanca desert tour be customized?",
  
        answer:
          "Yes. Because this is a private tour, parts of the itinerary can be adapted to your travel dates, interests and preferred accommodation level.",
      },
  
      {
        question: "What should I bring for the Sahara Desert?",
  
        answer:
          "Bring comfortable clothing, walking shoes, sun protection and an extra layer for the evening. Temperatures in the desert can change noticeably between daytime and night.",
      },
  
      {
        question: "Can families take this private desert tour?",
  
        answer:
          "Families can request this tour. If you are traveling with young children, share their ages when contacting us so the itinerary and travel arrangements can be planned comfortably.",
      },
    ],
  
    // ─────────────────────────────
    // SEO
    // ─────────────────────────────
  
    seo: {
      title:
        "4-Day Casablanca Desert Tour to Marrakech | Moroccan Trip",
  
      description:
        "Take a private 4-day Casablanca desert tour to Marrakech via Fes, Merzouga, Todra Gorges and Ait Ben Haddou, with a camel ride and Sahara camp.",
  
      // Internal SEO keyword map only.
      // Do not output these as a meta keywords tag.
      keywords: [
        "casablanca desert tour",
        "casablanca to merzouga tour",
        "desert tour from casablanca",
        "casablanca to sahara desert tour",
        "sahara desert tour from casablanca",
        "casablanca sahara tour",
        "morocco desert tour from casablanca",
        "4 days tour from casablanca",
        "casablanca to marrakech tour",
        "casablanca to marrakech desert tour",
      ],
    },
  
    // ─────────────────────────────
    // BOOKING
    // ─────────────────────────────
  
    booking: {
      available: true,
      minimumDays: 4,
      customizable: true,
      contactLabel: "Request a Quote",
    },
  },
  {
    id: "8",
  
    // ─────────────────────────────
    // BASIC INFORMATION
    // ─────────────────────────────
  
    slug: "5-day-morocco-tour-from-casablanca",
  
    title: "5-Day Morocco Tour from Casablanca",
  
    shortDescription:
      "Travel from Casablanca to Marrakech on a private five-day journey through Rabat, Fes, the Middle Atlas Mountains, Merzouga, Todra Gorges, Dades Valley and Ait Ben Haddou.",
  
    image: "/images/tours/5-day-morocco-tour-from-casablanca.webp",
  
    badge: "Morocco Highlights",
  
    featured: true,
  
    category: "Morocco Tours",
  
    // ─────────────────────────────
    // TOUR DETAILS
    // ─────────────────────────────
  
    duration: "5 Days / 4 Nights",
  
    nights: 4,
  
    tourType: "Private Tour",
  
    groupSize: "Up to 4 People",
  
    languages: ["English", "French"],
  
    departure: "Casablanca",
  
    arrival: "Marrakech",
  
    locations: [
      "Casablanca",
      "Rabat",
      "Fes",
      "Ifrane",
      "Middle Atlas Mountains",
      "Midelt",
      "Ziz Valley",
      "Merzouga",
      "Erg Chebbi",
      "Khamlia",
      "Sahara Desert",
      "Rissani",
      "Todra Gorges",
      "Dades Valley",
      "Ouarzazate",
      "Ait Ben Haddou",
      "High Atlas Mountains",
      "Marrakech",
    ],
  
    // ─────────────────────────────
    // PRICING
    // ─────────────────────────────
  
    // No fixed price.
    // The final quote depends on the number of travelers,
    // accommodation level and requested services.
  
    // ─────────────────────────────
    // HIGHLIGHTS
    // ─────────────────────────────
  
    highlights: [
      "Start your private Morocco journey in Casablanca",
      "Visit Rabat before continuing toward Fes",
      "Spend the first night in the historic city of Fes",
      "Travel through Ifrane and the Middle Atlas Mountains",
      "Enjoy the changing scenery of the Ziz Valley",
      "Reach Merzouga and the golden dunes of Erg Chebbi",
      "Spend extra time exploring the Merzouga desert area",
      "Visit Khamlia and discover local desert culture",
      "Ride a camel across the Sahara dunes",
      "Watch the sunset over Erg Chebbi",
      "Spend a memorable night at a Sahara desert camp",
      "Walk through the impressive Todra Gorges",
      "Travel through the beautiful Dades Valley",
      "Visit the historic village of Ait Ben Haddou",
      "Cross the High Atlas Mountains before arriving in Marrakech",
      "Enjoy a private journey with flexible stops along the route",
    ],
  
    // ─────────────────────────────
    // OVERVIEW
    // ─────────────────────────────
  
    overview: `
      Discover cities, mountains, valleys and the Sahara on this private
      5-day Morocco tour from Casablanca to Marrakech.
  
      Your journey begins on Morocco's Atlantic side in Casablanca. From there,
      travel to Rabat before continuing to Fes, one of the country's most historic
      cities. This first day gives you a taste of northern Morocco before the route
      turns south toward the desert.
  
      From Fes, cross the Middle Atlas Mountains through Ifrane and Midelt. The
      scenery changes throughout the day, from forests and mountain roads to the
      palm-filled Ziz Valley and the dry landscapes of southeastern Morocco.
  
      Merzouga is one of the main highlights of this journey. The five-day itinerary
      gives you more time around the Erg Chebbi dunes instead of arriving in the
      Sahara and leaving again the next morning. You can explore the desert area,
      visit Khamlia and enjoy the landscape at a slower pace.
  
      Later, ride a camel across the dunes, watch the Sahara sunset and spend the
      night at a desert camp. The following day, continue west through Rissani,
      Todra Gorges and the Dades Valley.
  
      On the final day, travel through Ouarzazate and visit Ait Ben Haddou before
      crossing the High Atlas Mountains to Marrakech.
  
      This 5-day Morocco itinerary is a good choice for travelers who want to start
      in Casablanca, experience the Sahara and finish in Marrakech without rushing
      through the desert part of the journey.
    `,
  
    // ─────────────────────────────
    // ITINERARY
    // ─────────────────────────────
  
    itinerary: [
      {
        day: 1,
  
        title: "Casablanca – Rabat – Fes",
  
        description: `
          Your 5-day Morocco tour begins with pickup in Casablanca.
  
          Leave Casablanca and travel north toward Rabat, Morocco's capital. Take
          time to discover some of the city's historic areas and enjoy its relaxed
          atmosphere before continuing your journey.
  
          After your visit, travel inland toward Fes.
  
          The road introduces you to another side of Morocco as the busy Atlantic
          region gives way to quieter countryside and inland landscapes.
  
          Arrive in Fes later in the day and settle into your accommodation.
  
          Fes is one of Morocco's most important cultural cities, known for its old
          medina, traditional crafts and historic architecture. Depending on your
          arrival time, you can enjoy a relaxed evening or take a short walk before
          the journey continues south the following morning.
  
          Spend the first night in Fes.
        `,
  
        highlights: [
          "Pickup in Casablanca",
          "Travel to Rabat",
          "Discover Morocco's capital",
          "Continue toward Fes",
          "See changing landscapes along the route",
          "Arrive in Fes",
          "Free time depending on arrival time",
          "Overnight stay in Fes",
        ],
      },
  
      {
        day: 2,
  
        title:
          "Fes – Ifrane – Middle Atlas Mountains – Midelt – Ziz Valley – Merzouga",
  
        description: `
          After breakfast, leave Fes and begin one of the most scenic driving days
          of your Morocco tour from Casablanca.
  
          Travel through Ifrane and continue into the Middle Atlas Mountains. The
          landscape here is greener and cooler than the Sahara, with mountain roads,
          forests and small communities along the way.
  
          Continue south toward Midelt, where a break can be made before the journey
          continues toward the desert.
  
          As you travel farther south, the scenery changes again. Pass through the
          Ziz Valley, where palm trees stretch between rocky mountains and dry
          landscapes.
  
          Continue toward Merzouga at the edge of the Erg Chebbi dunes.
  
          Arrive in the Merzouga area later in the day. Unlike a shorter four-day
          route, there is no need to begin the camel trek immediately after the long
          drive from Fes.
  
          Enjoy your first views of the Sahara, relax and prepare for a full desert
          experience the following day.
  
          Spend the night at a hotel or riad in the Merzouga area.
        `,
  
        highlights: [
          "Breakfast in Fes",
          "Travel through Ifrane",
          "Cross the Middle Atlas Mountains",
          "Continue through the Midelt area",
          "Enjoy views across the Ziz Valley",
          "Travel toward southeastern Morocco",
          "Arrive in Merzouga",
          "See the Erg Chebbi dunes",
          "Relax after the journey",
          "Overnight stay in Merzouga",
        ],
      },
  
      {
        day: 3,
  
        title:
          "Merzouga Desert Exploration – Khamlia – Camel Trek – Sahara Camp",
  
        description: `
          Today is dedicated to the Merzouga desert and gives you time to experience
          the Sahara without rushing.
  
          After breakfast, explore the landscapes around Erg Chebbi and discover more
          of the area surrounding the dunes.
  
          Visit Khamlia, a village near Merzouga known for its local culture and
          musical traditions. Depending on the day's arrangements, there can also be
          time for additional stops around the desert.
  
          The slower pace is one of the main advantages of this five-day journey.
          Instead of simply arriving in Merzouga for the night, you have time to see
          more of the Sahara region and enjoy the atmosphere around the dunes.
  
          Later in the afternoon, prepare for your camel trek.
  
          Ride across the golden Erg Chebbi dunes as the sun moves lower over the
          desert. Stop to enjoy the views and watch the sunset before continuing
          toward your camp.
  
          After arriving at the Sahara camp, enjoy dinner and spend the night in the
          quiet desert surroundings.
        `,
  
        highlights: [
          "Full day in the Merzouga desert area",
          "Explore the landscapes around Erg Chebbi",
          "Visit Khamlia",
          "Discover local desert culture",
          "Enjoy free time around Merzouga",
          "Camel ride across the Sahara dunes",
          "Watch the sunset over Erg Chebbi",
          "Dinner at the desert camp",
          "Overnight stay in the Sahara",
        ],
      },
  
      {
        day: 4,
  
        title:
          "Merzouga – Rissani – Todra Gorges – Dades Valley",
  
        description: `
          Start the morning in the peaceful surroundings of the Sahara.
  
          If you wish, wake up early to watch the sunrise over the Erg Chebbi dunes
          before breakfast at the camp.
  
          Leave Merzouga and begin traveling west through southeastern Morocco.
  
          Pass through the Rissani area before continuing toward Tinghir and Todra
          Gorges.
  
          At Todra Gorges, take time to walk between the high canyon walls and enjoy
          the dramatic natural scenery. The rocky cliffs provide a very different
          landscape from the open Sahara dunes you experienced the previous day.
  
          After the visit, continue toward the Dades Valley.
  
          The route passes through small towns, palm-filled areas and mountain
          landscapes before reaching the Dades region.
  
          Arrive later in the day for dinner and your final overnight stay before
          continuing to Marrakech.
        `,
  
        highlights: [
          "Optional sunrise over the Sahara",
          "Breakfast at the desert camp",
          "Leave Merzouga",
          "Travel through the Rissani area",
          "Continue toward Tinghir",
          "Walk through Todra Gorges",
          "Enjoy dramatic canyon scenery",
          "Travel through the Dades Valley",
          "Dinner and overnight stay in the Dades area",
        ],
      },
  
      {
        day: 5,
  
        title:
          "Dades Valley – Ouarzazate – Ait Ben Haddou – High Atlas – Marrakech",
  
        description: `
          After breakfast, leave the Dades Valley and begin the final stage of your
          five-day journey through Morocco.
  
          Travel west through the landscapes of southern Morocco toward Ouarzazate.
          Along the way, see dry mountains, traditional villages and wide valleys.
  
          Continue to Ait Ben Haddou, one of the best-known fortified villages in
          southern Morocco.
  
          Take time to explore the village and its traditional earthen architecture
          before continuing toward the High Atlas Mountains.
  
          Cross the mountains on the road to Marrakech, with stops available for
          photos, rest and meals depending on your schedule.
  
          As you approach Marrakech, the mountain landscapes gradually give way to
          the plains surrounding the city.
  
          Arrive in Marrakech later in the day.
  
          Your 5-day tour of Morocco ends after a journey that has taken you from
          Casablanca through historic cities, mountain regions, the Sahara Desert
          and southern Morocco.
        `,
  
        highlights: [
          "Breakfast in the Dades Valley",
          "Travel through southern Morocco",
          "Continue toward Ouarzazate",
          "Visit Ait Ben Haddou",
          "Discover traditional earthen architecture",
          "Cross the High Atlas Mountains",
          "Enjoy panoramic mountain views",
          "Flexible stops for photos and breaks",
          "Arrive in Marrakech",
          "End of your private Morocco journey",
        ],
      },
    ],
  
    // ─────────────────────────────
    // INCLUDED
    // ─────────────────────────────
  
    included: [
      "Private transportation from Casablanca to Marrakech",
      "English- or French-speaking driver",
      "Four nights of accommodation",
      "One night in Fes",
      "One night at a hotel or riad in Merzouga",
      "One night at a Sahara desert camp",
      "One night in the Dades area",
      "Breakfasts and dinners during the tour",
      "Camel ride in the Merzouga desert",
      "Time to explore the Merzouga and Erg Chebbi area",
      "Free time at the main sightseeing stops",
      "Flexible stops for photos and breaks during the journey",
      "Pickup in Casablanca",
      "Final drop-off in Marrakech",
    ],
  
    // ─────────────────────────────
    // NOT INCLUDED
    // ─────────────────────────────
  
    excluded: [
      "Lunches",
      "Drinks",
      "Entrance fees when required",
      "Local city guides unless requested",
      "Optional activities not mentioned in the itinerary",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities",
      "Any services not mentioned in the included section",
    ],
  
    // ─────────────────────────────
    // ACCOMMODATION
    // ─────────────────────────────
  
    accommodation: [
      {
        night: 1,
        location: "Fes",
        type: "Hotel or Riad",
      },
      {
        night: 2,
        location: "Merzouga",
        type: "Hotel or Riad",
      },
      {
        night: 3,
        location: "Merzouga",
        type: "Sahara Desert Camp",
      },
      {
        night: 4,
        location: "Dades Valley",
        type: "Hotel or Riad",
      },
    ],
  
    // ─────────────────────────────
    // GALLERY
    // ─────────────────────────────
  
    gallery: [
      "/images/tours/5-day-morocco-tour-from-casablanca.webp",
    ],
  
    // ─────────────────────────────
    // FAQ
    // ─────────────────────────────
  
    faqs: [
      {
        question: "Is the 5-day Morocco tour from Casablanca private?",
  
        answer:
          "Yes. This is a private tour for you and your travel group. You travel in a private vehicle with more flexibility for stops, breaks and the pace of the journey.",
      },
  
      {
        question: "Where does the 5-day Morocco tour start and finish?",
  
        answer:
          "The tour starts in Casablanca and finishes in Marrakech. This allows you to travel across Morocco without returning to your starting city.",
      },
  
      {
        question: "What can I see in 5 days in Morocco?",
  
        answer:
          "This itinerary includes Rabat, Fes, the Middle Atlas Mountains, the Ziz Valley, Merzouga, the Sahara Desert, Todra Gorges, Dades Valley, Ait Ben Haddou and Marrakech.",
      },
  
      {
        question:
          "What is the difference between the 4-day and 5-day tours from Casablanca?",
  
        answer:
          "The five-day itinerary gives you an extra day in the Merzouga area. You can explore the desert surroundings, visit Khamlia and enjoy the Sahara at a slower pace before the camel trek and desert camp.",
      },
  
      {
        question: "Does this Morocco tour include the Sahara Desert?",
  
        answer:
          "Yes. The Sahara is one of the main parts of the tour. You spend two nights in the Merzouga area, including one night at a desert camp near the Erg Chebbi dunes.",
      },
  
      {
        question: "Do we have a full day in Merzouga?",
  
        answer:
          "Yes. The third day is dedicated to the Merzouga desert area, including time around Erg Chebbi, a visit to Khamlia and the camel trek to the Sahara camp.",
      },
  
      {
        question: "Is the camel ride in Merzouga included?",
  
        answer:
          "Yes. A camel ride across the Erg Chebbi dunes is included as part of your Sahara Desert experience.",
      },
  
      {
        question: "Do we spend a night in a Sahara desert camp?",
  
        answer:
          "Yes. The third night is spent at a desert camp near Merzouga after your camel ride across the Erg Chebbi dunes.",
      },
  
      {
        question: "What accommodation is included?",
  
        answer:
          "The tour includes four nights of accommodation: one night in Fes, one night at a hotel or riad in Merzouga, one night at a Sahara desert camp and one night in the Dades Valley.",
      },
  
      {
        question: "Does the tour visit Todra Gorges?",
  
        answer:
          "Yes. Todra Gorges is visited on the fourth day while traveling from Merzouga toward the Dades Valley.",
      },
  
      {
        question: "Does the tour visit Ait Ben Haddou?",
  
        answer:
          "Yes. Ait Ben Haddou is included on the final day before crossing the High Atlas Mountains toward Marrakech.",
      },
  
      {
        question: "Is there a lot of driving during this 5-day Morocco itinerary?",
  
        answer:
          "The route covers a large part of Morocco, so some days include several hours of driving. The five-day itinerary gives you more time in Merzouga and divides the journey with sightseeing stops and overnight stays.",
      },
  
      {
        question: "Can the 5-day Morocco tour be customized?",
  
        answer:
          "Yes. Because this is a private tour, parts of the itinerary can be adapted to your travel dates, interests and preferred accommodation level.",
      },
  
      {
        question: "What should I bring for the Sahara Desert?",
  
        answer:
          "Bring comfortable clothing, walking shoes, sun protection and an extra layer for the evening. Desert temperatures can change between daytime and night.",
      },
  
      {
        question: "Can families take this Morocco tour from Casablanca?",
  
        answer:
          "Families can request this private tour. If you are traveling with children, share their ages when contacting us so the itinerary and travel arrangements can be planned comfortably.",
      },
    ],
  
    // ─────────────────────────────
    // SEO
    // ─────────────────────────────
  
    seo: {
      title:
        "5-Day Morocco Tour from Casablanca | Moroccan Trip",
  
      description:
        "Take a private 5-day Morocco tour from Casablanca to Marrakech via Rabat, Fes, Merzouga, the Sahara, Todra Gorges and Ait Ben Haddou.",
  
      // Internal SEO keyword map only.
      // Do not output these as a meta keywords tag.
      keywords: [
        "5 day morocco tour",
        "5 day morocco tour from casablanca",
        "morocco tour from casablanca",
        "morocco itinerary 5 days",
        "5 day morocco itinerary",
        "5 days in morocco",
        "5 day tour of morocco",
        "5-day tour of morocco from casablanca",
      ],
    },
  
    // ─────────────────────────────
    // BOOKING
    // ─────────────────────────────
  
    booking: {
      available: true,
      minimumDays: 5,
      customizable: true,
      contactLabel: "Request a Quote",
    },
  },

  {
    id: "9",
  
    // ─────────────────────────────
    // BASIC INFORMATION
    // ─────────────────────────────
  
    slug: "7-day-sahara-tour-from-casablanca",
  
    title: "7-Day Sahara Tour from Casablanca",
  
    shortDescription:
      "Explore Marrakech, the Sahara and Fes on a private 7-day journey from Casablanca, with the High Atlas Mountains, Dades Valley, Merzouga and a desert camp.",
  
    image: "/images/tours/7-day-sahara-tour-from-casablanca.webp",
  
    badge: "Cities & Sahara",
  
    featured: true,
  
    category: "Morocco Tours",
  
    // ─────────────────────────────
    // TOUR DETAILS
    // ─────────────────────────────
  
    duration: "7 Days / 6 Nights",
  
    nights: 6,
  
    tourType: "Private Tour",
  
    groupSize: "Up to 4 People",
  
    languages: ["English", "French"],
  
    departure: "Casablanca",
  
    arrival: "Casablanca",
  
    locations: [
      "Casablanca",
      "Marrakech",
      "High Atlas Mountains",
      "Ait Ben Haddou",
      "Ouarzazate",
      "Dades Valley",
      "Todra Gorges",
      "Merzouga",
      "Erg Chebbi",
      "Sahara Desert",
      "Ziz Valley",
      "Midelt",
      "Middle Atlas Mountains",
      "Ifrane",
      "Fes",
      "Casablanca",
    ],
  
    // ─────────────────────────────
    // PRICING
    // ─────────────────────────────
  
    // No fixed price.
    // The final quote depends on the number of travelers,
    // accommodation level and requested services.
  
    // ─────────────────────────────
    // HIGHLIGHTS
    // ─────────────────────────────
  
    highlights: [
      "Start and finish your private journey in Casablanca",
      "Spend a full day discovering Marrakech",
      "Cross the High Atlas Mountains through dramatic scenery",
      "Visit the historic fortified village of Ait Ben Haddou",
      "Travel through Ouarzazate and the landscapes of southern Morocco",
      "Spend a night in the beautiful Dades Valley",
      "Walk between the high canyon walls of Todra Gorges",
      "Reach Merzouga and the golden dunes of Erg Chebbi",
      "Ride a camel across the Sahara Desert",
      "Watch the sunset over the dunes",
      "Spend a memorable night at a Sahara desert camp",
      "Travel through the palm-filled Ziz Valley",
      "Cross the Middle Atlas Mountains on the way to Fes",
      "Spend a full day exploring historic Fes",
      "Experience cities, mountains, valleys and desert landscapes in one journey",
      "Enjoy private transportation and flexible stops throughout the tour",
    ],
  
    // ─────────────────────────────
    // OVERVIEW
    // ─────────────────────────────
  
    overview: `
      Discover Morocco's historic cities, mountain landscapes and Sahara Desert on
      this private 7-day Morocco tour from Casablanca.
  
      The journey begins in Casablanca and travels south to Marrakech, where you
      spend time discovering one of Morocco's most famous cities. A full day in
      Marrakech gives you time to explore the old medina, traditional markets,
      historic areas and the atmosphere of the city before continuing toward
      southern Morocco.
  
      From Marrakech, cross the High Atlas Mountains and travel through Ait Ben
      Haddou and Ouarzazate before reaching the Dades Valley. The landscape changes
      quickly as busy cities give way to mountain roads, traditional villages and
      wide valleys.
  
      Continue through Todra Gorges toward Merzouga, where the golden Erg Chebbi
      dunes mark the beginning of your Sahara experience. Ride a camel across the
      dunes, enjoy the desert sunset and spend the night at a Sahara camp.
  
      After leaving Merzouga, travel north through the Ziz Valley, Midelt and the
      Middle Atlas Mountains before arriving in Fes. You then have a full day to
      discover the historic city before returning to Casablanca.
  
      This seven-day Morocco itinerary is designed for travelers who want a balanced
      journey rather than a quick desert trip. It combines time in Marrakech and
      Fes with the Sahara, mountain scenery and some of southern Morocco's most
      memorable landscapes.
    `,
  
    // ─────────────────────────────
    // ITINERARY
    // ─────────────────────────────
  
    itinerary: [
      {
        day: 1,
  
        title: "Casablanca – Marrakech",
  
        description: `
          Your 7-day Sahara tour from Casablanca begins with pickup in Casablanca.
  
          Meet your driver and leave Morocco's Atlantic coast as you begin the
          journey south toward Marrakech.
  
          The first day is designed to be simple and comfortable. Instead of adding
          several sightseeing stops, the main goal is to reach Marrakech with enough
          time to settle into your accommodation and prepare for the days ahead.
  
          Depending on your pickup time, you may have some free time after arrival
          to walk around the city, enjoy a meal or experience the evening atmosphere.
  
          Marrakech will be your base for the first two nights of the journey,
          allowing you to explore the city properly the following day.
  
          Spend the night in Marrakech.
        `,
  
        highlights: [
          "Pickup in Casablanca",
          "Private transfer toward Marrakech",
          "Travel through central Morocco",
          "Arrival in Marrakech",
          "Free time depending on arrival time",
          "Overnight stay in Marrakech",
        ],
      },
  
      {
        day: 2,
  
        title: "Full Day Exploring Marrakech",
  
        description: `
          Today is dedicated to Marrakech, giving you time to experience the city
          without needing to continue driving to another destination.
  
          Explore the historic medina, where narrow streets lead through traditional
          markets, workshops and old neighborhoods.
  
          Take time to discover the city's architecture, public squares and local
          atmosphere. Depending on your interests, you can also visit gardens,
          historic buildings or quieter areas outside the busiest parts of the
          medina.
  
          Having a full day in Marrakech makes this itinerary different from shorter
          desert tours that leave the city soon after arrival.
  
          You can explore at your own pace and choose the places that interest you
          most.
  
          Return to your accommodation for a second night in Marrakech.
        `,
  
        highlights: [
          "Full day in Marrakech",
          "Explore the historic medina",
          "Walk through traditional souks",
          "Discover local architecture",
          "Enjoy time around the city's main areas",
          "Flexible sightseeing according to your interests",
          "Second overnight stay in Marrakech",
        ],
      },
  
      {
        day: 3,
  
        title:
          "Marrakech – High Atlas Mountains – Ait Ben Haddou – Ouarzazate – Dades Valley",
  
        description: `
          After breakfast, leave Marrakech and begin the journey toward southern
          Morocco.
  
          Cross the High Atlas Mountains along a scenic road surrounded by mountain
          peaks, valleys and traditional villages. Stops can be made along the way
          to enjoy the views and take photos.
  
          Continue toward Ait Ben Haddou, a historic fortified village known for its
          traditional earthen architecture.
  
          Take time to explore the area before continuing toward Ouarzazate.
  
          From Ouarzazate, travel farther into southern Morocco as the scenery changes
          between dry mountains, palm-filled areas and wide open valleys.
  
          Continue toward the Dades Valley and arrive later in the day.
  
          Enjoy dinner and spend the third night of your journey in the Dades area.
        `,
  
        highlights: [
          "Breakfast in Marrakech",
          "Cross the High Atlas Mountains",
          "Enjoy panoramic mountain scenery",
          "Visit Ait Ben Haddou",
          "Continue through Ouarzazate",
          "Travel through southern Morocco",
          "Arrive in the Dades Valley",
          "Dinner and overnight stay in the Dades area",
        ],
      },
  
      {
        day: 4,
  
        title:
          "Dades Valley – Todra Gorges – Merzouga – Sahara Desert",
  
        description: `
          After breakfast, leave the Dades Valley and continue your journey toward
          the Sahara.
  
          Travel through the landscapes of southeastern Morocco before reaching
          Todra Gorges.
  
          Take time to walk between the high canyon walls and enjoy the natural
          surroundings. The dramatic cliffs make Todra one of the most distinctive
          stops on the road to the desert.
  
          Continue toward Merzouga as the rocky landscapes gradually become more
          open and the Erg Chebbi dunes begin to appear.
  
          In the late afternoon, prepare for your camel ride into the Sahara.
  
          Ride across the golden dunes and enjoy the quiet desert atmosphere as the
          sun begins to set.
  
          After sunset, continue to your desert camp.
  
          Enjoy dinner and spend the night surrounded by the Sahara dunes.
        `,
  
        highlights: [
          "Breakfast in the Dades Valley",
          "Travel through southeastern Morocco",
          "Visit Todra Gorges",
          "Walk through the canyon",
          "Continue toward Merzouga",
          "Arrive at the Erg Chebbi dunes",
          "Camel ride across the Sahara",
          "Watch the desert sunset",
          "Dinner at the desert camp",
          "Overnight stay in the Sahara",
        ],
      },
  
      {
        day: 5,
  
        title:
          "Merzouga – Ziz Valley – Midelt – Middle Atlas Mountains – Fes",
  
        description: `
          Start the morning in the peaceful Sahara Desert.
  
          If you wish, wake up early to watch the sunrise over the Erg Chebbi dunes
          before returning to the camp for breakfast.
  
          After leaving Merzouga, begin the journey north toward Fes.
  
          Travel through the Ziz Valley, where long stretches of palm trees and
          mountain scenery create a strong contrast with the open desert.
  
          Continue toward Midelt and then into the Middle Atlas Mountains.
  
          As you travel north, the landscape changes again. Dry desert scenery gives
          way to mountains, forests and cooler surroundings.
  
          Continue through the Ifrane area before reaching Fes later in the day.
  
          Check into your accommodation and enjoy a relaxed evening before exploring
          the city the following day.
  
          Spend the night in Fes.
        `,
  
        highlights: [
          "Optional sunrise over Erg Chebbi",
          "Breakfast at the desert camp",
          "Departure from Merzouga",
          "Travel through the Ziz Valley",
          "Continue toward Midelt",
          "Cross the Middle Atlas Mountains",
          "Pass through the Ifrane area",
          "Arrive in Fes",
          "Overnight stay in Fes",
        ],
      },
  
      {
        day: 6,
  
        title: "Full Day Exploring Fes",
  
        description: `
          Today is dedicated to Fes, one of Morocco's oldest and most important
          cultural cities.
  
          Explore the historic medina, where narrow streets connect traditional
          markets, workshops, neighborhoods and historic buildings.
  
          Fes is known for its crafts, architecture and strong cultural traditions.
          Spending a full day here gives you enough time to experience the city
          without immediately continuing to the next destination.
  
          Depending on your interests, you can explore traditional craft areas,
          viewpoints, historic sites and different parts of the old city.
  
          The day can be planned at a comfortable pace, with time for breaks and
          personal exploration.
  
          Return to your accommodation for a second night in Fes.
        `,
  
        highlights: [
          "Full day in Fes",
          "Explore the historic medina",
          "Walk through traditional streets and markets",
          "Discover local crafts",
          "See historic architecture",
          "Enjoy flexible sightseeing",
          "Second overnight stay in Fes",
        ],
      },
  
      {
        day: 7,
  
        title: "Fes – Casablanca",
  
        description: `
          After breakfast, leave Fes and begin the final journey back to Casablanca.
  
          Today's drive completes your seven-day route across Morocco.
  
          After several days of historic cities, mountain roads, desert landscapes
          and valleys, the journey returns to the Atlantic side of the country.
  
          Stops can be made along the way for rest, meals and photos depending on
          your schedule.
  
          Arrive in Casablanca later in the day.
  
          Your 7-day Morocco tour from Casablanca ends after a journey through
          Marrakech, the High Atlas Mountains, the Sahara Desert and Fes.
  
          Final drop-off can be arranged in Casablanca according to your travel
          plans.
        `,
  
        highlights: [
          "Breakfast in Fes",
          "Departure toward Casablanca",
          "Travel through northern and central Morocco",
          "Flexible stops for rest and meals",
          "Return to Casablanca",
          "Final drop-off in Casablanca",
          "End of the seven-day journey",
        ],
      },
    ],
  
    // ─────────────────────────────
    // INCLUDED
    // ─────────────────────────────
  
    included: [
      "Private transportation throughout the tour",
      "English- or French-speaking driver",
      "Six nights of accommodation",
      "Two nights in Marrakech",
      "One night in the Dades area",
      "One night at a Sahara desert camp near Merzouga",
      "Two nights in Fes",
      "Breakfasts throughout the tour",
      "Dinner in the Dades area",
      "Dinner at the Sahara desert camp",
      "Camel ride in the Merzouga desert",
      "Free time to explore Marrakech and Fes",
      "Flexible stops for photos and breaks during the journey",
      "Pickup and final drop-off in Casablanca",
    ],
  
    // ─────────────────────────────
    // NOT INCLUDED
    // ─────────────────────────────
  
    excluded: [
      "Lunches",
      "Dinners unless mentioned in the included section",
      "Drinks",
      "Entrance fees to monuments and attractions",
      "Local city guides unless requested",
      "Optional activities not mentioned in the itinerary",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities",
      "Any services not mentioned in the included section",
    ],
  
    // ─────────────────────────────
    // ACCOMMODATION
    // ─────────────────────────────
  
    accommodation: [
      {
        night: 1,
        location: "Marrakech",
        type: "Hotel or Riad",
      },
      {
        night: 2,
        location: "Marrakech",
        type: "Hotel or Riad",
      },
      {
        night: 3,
        location: "Dades Valley",
        type: "Hotel or Riad",
      },
      {
        night: 4,
        location: "Merzouga",
        type: "Sahara Desert Camp",
      },
      {
        night: 5,
        location: "Fes",
        type: "Hotel or Riad",
      },
      {
        night: 6,
        location: "Fes",
        type: "Hotel or Riad",
      },
    ],
  
    // ─────────────────────────────
    // GALLERY
    // ─────────────────────────────
  
    gallery: [
      "/images/tours/7-day-sahara-tour-from-casablanca.webp",
    ],
  
    // ─────────────────────────────
    // FAQ
    // ─────────────────────────────
  
    faqs: [
      {
        question: "Is the 7-day Sahara tour from Casablanca private?",
  
        answer:
          "Yes. This is a private tour for you and your travel group. You travel in a private vehicle with more flexibility for stops, breaks and the pace of the journey.",
      },
  
      {
        question: "Where does the 7-day Morocco tour start and finish?",
  
        answer:
          "The tour starts and finishes in Casablanca. It follows a circular route through Marrakech, the Sahara Desert and Fes before returning to Casablanca.",
      },
  
      {
        question: "What can I see on a 7-day Morocco tour from Casablanca?",
  
        answer:
          "The itinerary includes Marrakech, the High Atlas Mountains, Ait Ben Haddou, Dades Valley, Todra Gorges, Merzouga, the Sahara Desert, the Ziz Valley, the Middle Atlas Mountains and Fes.",
      },
  
      {
        question: "Does the tour include a full day in Marrakech?",
  
        answer:
          "Yes. The second day is dedicated to Marrakech, giving you time to explore the medina, traditional markets and other areas of the city before traveling toward the desert.",
      },
  
      {
        question: "Does the tour include a full day in Fes?",
  
        answer:
          "Yes. Day six is dedicated to exploring Fes, including time in the historic medina and traditional areas of the city.",
      },
  
      {
        question: "Does this 7-day tour include the Sahara Desert?",
  
        answer:
          "Yes. The Sahara is one of the main highlights of the itinerary. You travel to Merzouga, experience the Erg Chebbi dunes and spend one night at a desert camp.",
      },
  
      {
        question: "Is the camel ride in Merzouga included?",
  
        answer:
          "Yes. A camel ride across the Erg Chebbi dunes is included as part of your Sahara Desert experience.",
      },
  
      {
        question: "Do we spend a night in the Sahara?",
  
        answer:
          "Yes. The fourth night is spent at a Sahara desert camp near Merzouga after the camel ride and sunset experience.",
      },
  
      {
        question: "Does the tour visit Ait Ben Haddou?",
  
        answer:
          "Yes. Ait Ben Haddou is visited on the third day while traveling from Marrakech through the High Atlas Mountains toward the Dades Valley.",
      },
  
      {
        question: "Does the tour visit Todra Gorges?",
  
        answer:
          "Yes. Todra Gorges is one of the main stops on day four before continuing toward Merzouga and the Sahara Desert.",
      },
  
      {
        question: "How many nights are included in the tour?",
  
        answer:
          "The tour includes six nights: two nights in Marrakech, one night in the Dades Valley, one night at a Sahara desert camp and two nights in Fes.",
      },
  
      {
        question: "Is there a lot of driving during the seven-day tour?",
  
        answer:
          "The itinerary covers a large part of Morocco, so some days include several hours of driving. The seven-day schedule balances these journeys with full days in Marrakech and Fes, sightseeing stops and overnight stays.",
      },
  
      {
        question: "Are local guides included in Marrakech and Fes?",
  
        answer:
          "Local city guides are not included by default unless they are part of your final arrangements. A guide can be requested when planning your private tour.",
      },
  
      {
        question: "Can the 7-day Morocco itinerary be customized?",
  
        answer:
          "Yes. Because this is a private tour, parts of the itinerary can be adapted to your travel dates, interests and preferred accommodation level.",
      },
  
      {
        question: "What should I bring for the Sahara Desert?",
  
        answer:
          "Bring comfortable clothing, walking shoes, sun protection and an extra layer for the evening. Desert temperatures can change between daytime and night.",
      },
  
      {
        question: "Can families take this 7-day tour from Casablanca?",
  
        answer:
          "Families can request this private tour. If you are traveling with children, share their ages when contacting us so the route and travel arrangements can be planned comfortably.",
      },
    ],
  
    // ─────────────────────────────
    // SEO
    // ─────────────────────────────
  
    seo: {
      title:
        "7-Day Morocco Tour from Casablanca | Moroccan Trip",
  
      description:
        "Take a private 7-day Morocco tour from Casablanca with Marrakech, the Sahara in Merzouga, Dades Valley and two nights in Fes before returning to Casablanca.",
  
      // Internal SEO keyword map only.
      // Do not output these as a meta keywords tag.
      keywords: [
        "7 day morocco tour from casablanca",
        "7 days morocco tour from casablanca",
        "7 day sahara tour from casablanca",
        "7 days sahara tour from casablanca",
        "7 day desert tour from casablanca",
        "7 day morocco itinerary from casablanca",
        "morocco itinerary 7 days from casablanca",
        "7 day private morocco tour from casablanca",
        "casablanca marrakech merzouga fes 7 day tour",
      ],
    },
  
    // ─────────────────────────────
    // BOOKING
    // ─────────────────────────────
  
    booking: {
      available: true,
      minimumDays: 7,
      customizable: true,
      contactLabel: "Request a Quote",
    },
  },
  {
    id: "10",
  
    // ─────────────────────────────
    // BASIC INFORMATION
    // ─────────────────────────────
  
    slug: "8-day-imperial-cities-tour-from-casablanca",
  
    title: "8-Day Imperial Cities Tour from Casablanca",
  
    shortDescription:
      "Discover northern Morocco and its historic cities on a private 8-day journey from Casablanca through Rabat, Chefchaouen, Tangier, Asilah, Meknes, Volubilis and Fes.",
  
    image: "/images/tours/8-day-imperial-cities-tour-from-casablanca.webp",
  
    badge: "Culture & Imperial Cities",
  
    featured: true,
  
    category: "Imperial Cities Tours",
  
    // ─────────────────────────────
    // TOUR DETAILS
    // ─────────────────────────────
  
    duration: "8 Days / 7 Nights",
  
    nights: 7,
  
    tourType: "Private Tour",
  
    groupSize: "Up to 4 People",
  
    languages: ["English", "French"],
  
    departure: "Casablanca",
  
    arrival: "Casablanca",
  
    locations: [
      "Casablanca",
      "Rabat",
      "Chefchaouen",
      "Tangier",
      "Asilah",
      "Meknes",
      "Volubilis",
      "Fes",
      "Marrakech",
      "Casablanca",
    ],
  
    // ─────────────────────────────
    // PRICING
    // ─────────────────────────────
  
    // No fixed price.
    // The final quote depends on the number of travelers,
    // accommodation level and requested services.
  
    // ─────────────────────────────
    // HIGHLIGHTS
    // ─────────────────────────────
  
    highlights: [
      "Begin your private Morocco journey in Casablanca",
      "Discover Rabat, Morocco's capital and one of its imperial cities",
      "Spend a night in the blue mountain town of Chefchaouen",
      "Explore the northern atmosphere of Tangier",
      "Visit the coastal town of Asilah on the Atlantic",
      "Discover the historic imperial city of Meknes",
      "Explore the ancient archaeological site of Volubilis",
      "Spend two nights in Fes",
      "Enjoy a guided day through the historic medina of Fes",
      "Discover traditional crafts, markets and architecture",
      "Experience Atlantic cities, mountain towns and historic medinas",
      "Travel through several different regions of northern Morocco",
      "Enjoy private transportation throughout the journey",
      "Travel at a comfortable pace with flexible stops along the route",
    ],
  
    // ─────────────────────────────
    // OVERVIEW
    // ─────────────────────────────
  
    overview: `
      Discover historic cities, mountain towns and Morocco's northern coast on this
      private 8-day Imperial Cities Tour from Casablanca.
  
      The journey begins in Casablanca before continuing to Rabat, one of Morocco's
      imperial cities and the country's modern capital. From there, travel north
      toward Chefchaouen, a small mountain town known for its peaceful medina and
      distinctive blue streets.
  
      Continue toward Tangier, where northern Morocco meets the sea, before following
      the Atlantic coast through Asilah. The route then turns inland toward Meknes,
      another of Morocco's historic imperial cities.
  
      From Meknes, visit Volubilis before continuing to Fes. Two nights in Fes give
      you time to experience the city properly instead of passing through quickly.
      A guided day in the old medina introduces you to traditional neighborhoods,
      workshops, markets and historic architecture.
  
      This Casablanca Imperial Cities Tour combines famous destinations with smaller
      towns and changing landscapes. You will experience Atlantic Morocco, the Rif
      region, historic imperial cities and traditional medinas in one private
      journey.
  
      If you are planning 8 days in Morocco and prefer culture, history and cities
      instead of a desert-focused itinerary, this journey offers a varied route
      through some of the country's most interesting northern destinations.
    `,
  
    // ─────────────────────────────
    // ITINERARY
    // ─────────────────────────────
  
    itinerary: [
      {
        day: 1,
  
        title: "Arrival in Casablanca",
  
        description: `
          Welcome to Morocco.
  
          Your 8-day Morocco tour from Casablanca begins with pickup in the city or
          at the airport, depending on your travel arrangements.
  
          The first day is intentionally relaxed so you have time to settle in after
          your journey.
  
          Depending on your arrival time, you can enjoy some free time in Casablanca
          and get your first impression of Morocco's largest city and Atlantic
          atmosphere.
  
          This is also a good opportunity to rest before beginning the road journey
          through northern Morocco the following morning.
  
          Spend your first night in Casablanca.
        `,
  
        highlights: [
          "Arrival in Casablanca",
          "Private pickup according to your travel plans",
          "First introduction to Morocco",
          "Free time depending on arrival time",
          "Relax before the journey begins",
          "Overnight stay in Casablanca",
        ],
      },
  
      {
        day: 2,
  
        title: "Casablanca – Rabat",
  
        description: `
          After breakfast, leave Casablanca and travel north toward Rabat.
  
          Rabat is Morocco's capital and one of the country's historic imperial
          cities. It offers a different atmosphere from Casablanca, combining
          historic areas with wide streets and an Atlantic setting.
  
          Spend time discovering the city at a comfortable pace.
  
          Walk through historic neighborhoods, enjoy the local atmosphere and learn
          more about Rabat's place in Moroccan history.
  
          Because the driving distance today is relatively manageable, there is
          enough time to enjoy the destination rather than simply stopping briefly
          before continuing.
  
          Check into your accommodation and spend the night in Rabat.
        `,
  
        highlights: [
          "Breakfast in Casablanca",
          "Travel north toward Rabat",
          "Discover Morocco's capital",
          "Explore historic areas of the city",
          "Enjoy time near the Atlantic coast",
          "Relaxed sightseeing pace",
          "Overnight stay in Rabat",
        ],
      },
  
      {
        day: 3,
  
        title: "Rabat – Chefchaouen",
  
        description: `
          After breakfast, leave Rabat and continue north toward Chefchaouen.
  
          Today's journey moves away from Morocco's large cities and into a very
          different landscape.
  
          As you approach Chefchaouen, the surroundings become more mountainous and
          the atmosphere quieter.
  
          Chefchaouen is known for its compact medina, narrow streets and blue-painted
          buildings.
  
          After arriving, enjoy time walking through the old town at your own pace.
          The medina is easy to explore slowly, with small squares, local shops and
          traditional streets throughout the center.
  
          The evening is free to relax and enjoy the atmosphere of the town.
  
          Spend the night in Chefchaouen.
        `,
  
        highlights: [
          "Breakfast in Rabat",
          "Travel toward northern Morocco",
          "Enjoy changing mountain scenery",
          "Arrive in Chefchaouen",
          "Explore the blue medina",
          "Walk through traditional streets and small squares",
          "Free evening in Chefchaouen",
          "Overnight stay in Chefchaouen",
        ],
      },
  
      {
        day: 4,
  
        title: "Chefchaouen – Tangier",
  
        description: `
          Enjoy a relaxed morning in Chefchaouen before continuing toward Tangier.
  
          The journey takes you farther north through changing landscapes until you
          reach one of Morocco's best-known port cities.
  
          Tangier has a character that feels different from the inland imperial
          cities. Its location in northern Morocco has shaped a city with a strong
          connection to the sea and a long history of travelers and cultural
          exchange.
  
          After arrival, enjoy time discovering the city and its old neighborhoods.
  
          Depending on your interests and schedule, you can explore parts of the
          medina, enjoy viewpoints and experience the atmosphere of northern Morocco.
  
          Spend the night in Tangier.
        `,
  
        highlights: [
          "Relaxed morning in Chefchaouen",
          "Travel north toward Tangier",
          "Discover a different side of Morocco",
          "Explore parts of Tangier",
          "Experience the atmosphere of the old city",
          "Enjoy northern coastal scenery",
          "Overnight stay in Tangier",
        ],
      },
  
      {
        day: 5,
  
        title: "Tangier – Asilah – Meknes",
  
        description: `
          After breakfast, leave Tangier and begin traveling south along Morocco's
          Atlantic side.
  
          Stop in Asilah, a smaller coastal town known for its relaxed atmosphere,
          traditional medina and position beside the Atlantic Ocean.
  
          Take time to walk through the old town before continuing inland.
  
          The journey then turns away from the coast as you travel toward Meknes.
  
          The changing route makes this one of the most varied travel days of the
          itinerary, moving from northern coastal Morocco toward one of the country's
          historic imperial cities.
  
          Arrive in Meknes later in the day and settle into your accommodation.
  
          Spend the night in Meknes.
        `,
  
        highlights: [
          "Breakfast in Tangier",
          "Travel along Morocco's Atlantic side",
          "Stop in Asilah",
          "Walk through the traditional medina",
          "Enjoy time near the Atlantic coast",
          "Continue inland toward Meknes",
          "Arrive in the imperial city",
          "Overnight stay in Meknes",
        ],
      },
  
      {
        day: 6,
  
        title: "Meknes – Volubilis – Fes",
  
        description: `
          Begin the day discovering Meknes, one of Morocco's historic imperial
          cities.
  
          The city offers a quieter experience than Marrakech or Fes and gives you
          time to see another side of Morocco's imperial history.
  
          After exploring Meknes, continue toward Volubilis.
  
          Here, you can discover the remains of an ancient settlement surrounded by
          open countryside.
  
          After the visit, continue toward Fes.
  
          Arrive later in the day and check into your accommodation.
  
          You will spend two nights in Fes, giving you a full day to explore the city
          without needing to continue driving immediately afterward.
  
          Spend the night in Fes.
        `,
  
        highlights: [
          "Discover the imperial city of Meknes",
          "Explore historic areas of the city",
          "Continue toward Volubilis",
          "Visit the ancient archaeological site",
          "Travel through northern Morocco",
          "Continue toward Fes",
          "Arrive in Fes",
          "First overnight stay in Fes",
        ],
      },
  
      {
        day: 7,
  
        title: "Guided Tour of Fes",
  
        description: `
          Today is dedicated to Fes, one of Morocco's most important historic and
          cultural cities.
  
          Explore the old medina with a local guide and discover the narrow streets,
          traditional neighborhoods and busy markets that make the city unique.
  
          The guided visit gives you a better understanding of Fes and helps you
          navigate a medina that can feel like a maze when visiting for the first
          time.
  
          Discover traditional craft areas, historic architecture and places where
          local skills have been passed between generations.
  
          There is also time to enjoy the atmosphere of the city and stop according
          to your interests.
  
          After the guided tour, return to your accommodation and enjoy your final
          evening in Fes.
  
          Spend a second night in the city.
        `,
  
        highlights: [
          "Full day dedicated to Fes",
          "Explore the medina with a local guide",
          "Walk through traditional neighborhoods",
          "Discover local markets and workshops",
          "Learn about traditional Moroccan crafts",
          "See historic architecture",
          "Enjoy time to explore at a comfortable pace",
          "Second overnight stay in Fes",
        ],
      },
  
      {
        day: 8,
  
        title: "Fes – Marrakech – Casablanca or Extended Stay",
  
        description: `
          After breakfast, begin the final day of your eight-day journey through
          Morocco.
  
          Leave Fes and continue according to your onward travel plans.
  
          The route can take you toward Marrakech before continuing to Casablanca,
          or your final transfer can be adapted if you prefer to extend your stay in
          Morocco.
  
          This flexibility allows the final day to work around your flight,
          accommodation and the next part of your journey.
  
          If you are continuing to Casablanca, final drop-off can be arranged
          according to your travel plans.
  
          If you would rather remain in Marrakech or extend your trip elsewhere,
          this can be discussed when planning the private tour.
  
          Your 8-day Imperial Cities Tour from Casablanca ends after exploring
          Morocco's Atlantic coast, northern towns, imperial cities and historic
          medinas.
        `,
  
        highlights: [
          "Breakfast in Fes",
          "Departure according to your onward travel plans",
          "Continue toward Marrakech or Casablanca",
          "Flexible final transfer",
          "Option to extend your stay in Morocco",
          "Final drop-off according to the agreed itinerary",
          "End of your eight-day private journey",
        ],
      },
    ],
  
    // ─────────────────────────────
    // INCLUDED
    // ─────────────────────────────
  
    included: [
      "Private transportation throughout the tour",
      "English- or French-speaking driver",
      "Seven nights of accommodation",
      "One night in Casablanca",
      "One night in Rabat",
      "One night in Chefchaouen",
      "One night in Tangier",
      "One night in Meknes",
      "Two nights in Fes",
      "Daily breakfasts",
      "Local guided tour of Fes",
      "Free time to explore the main destinations",
      "Flexible stops for photos and breaks during the journey",
      "Pickup in Casablanca",
      "Final transfer according to the agreed itinerary",
    ],
  
    // ─────────────────────────────
    // NOT INCLUDED
    // ─────────────────────────────
  
    excluded: [
      "Lunches and dinners unless arranged in advance",
      "Drinks",
      "Entrance fees to monuments and attractions",
      "Local city guides except the guided visit in Fes",
      "Optional activities",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities",
      "Any services not mentioned in the included section",
    ],
  
    // ─────────────────────────────
    // ACCOMMODATION
    // ─────────────────────────────
  
    accommodation: [
      {
        night: 1,
        location: "Casablanca",
        type: "Hotel",
      },
      {
        night: 2,
        location: "Rabat",
        type: "Hotel or Riad",
      },
      {
        night: 3,
        location: "Chefchaouen",
        type: "Hotel or Riad",
      },
      {
        night: 4,
        location: "Tangier",
        type: "Hotel or Riad",
      },
      {
        night: 5,
        location: "Meknes",
        type: "Hotel or Riad",
      },
      {
        night: 6,
        location: "Fes",
        type: "Hotel or Riad",
      },
      {
        night: 7,
        location: "Fes",
        type: "Hotel or Riad",
      },
    ],
  
    // ─────────────────────────────
    // GALLERY
    // ─────────────────────────────
  
    gallery: [
      "/images/tours/8-day-imperial-cities-tour-from-casablanca.webp",
    ],
  
    // ─────────────────────────────
    // FAQ
    // ─────────────────────────────
  
    faqs: [
      {
        question: "Is the 8-day Imperial Cities Tour from Casablanca private?",
  
        answer:
          "Yes. This is a private tour for you and your travel group, with private transportation and more flexibility throughout the journey.",
      },
  
      {
        question: "Which cities are included in the 8-day tour?",
  
        answer:
          "The itinerary includes Casablanca, Rabat, Chefchaouen, Tangier, Asilah, Meknes, Volubilis and Fes, with flexible final travel toward Marrakech or Casablanca.",
      },
  
      {
        question: "Which Moroccan imperial cities are visited?",
  
        answer:
          "The main imperial cities visited during the journey are Rabat, Meknes and Fes. The itinerary also includes several northern destinations that add coastal, mountain and cultural variety to the tour.",
      },
  
      {
        question: "Does the tour include Chefchaouen?",
  
        answer:
          "Yes. You spend one night in Chefchaouen, giving you time to explore the blue medina and enjoy the atmosphere of the mountain town.",
      },
  
      {
        question: "Does the tour visit Tangier?",
  
        answer:
          "Yes. The itinerary includes one night in Tangier after traveling from Chefchaouen.",
      },
  
      {
        question: "Is Asilah included in the tour?",
  
        answer:
          "Yes. Asilah is visited while traveling from Tangier toward Meknes on day five.",
      },
  
      {
        question: "Does the tour include Volubilis?",
  
        answer:
          "Yes. Volubilis is visited on day six before continuing from the Meknes area toward Fes.",
      },
  
      {
        question: "Is there a guided tour of Fes?",
  
        answer:
          "Yes. Day seven includes a guided visit of Fes, with time to explore the historic medina, traditional neighborhoods, markets and craft areas.",
      },
  
      {
        question: "How many nights do we spend in Fes?",
  
        answer:
          "The itinerary includes two nights in Fes, allowing a full day to explore the city without needing to travel to another destination immediately afterward.",
      },
  
      {
        question: "Does this Imperial Cities Tour include the Sahara Desert?",
  
        answer:
          "No. This itinerary focuses on Morocco's northern cities, cultural destinations and imperial history. Travelers who want to include the Sahara can choose one of our desert tours from Casablanca.",
      },
  
      {
        question: "Is Marrakech part of the itinerary?",
  
        answer:
          "Marrakech can be included as part of the final travel arrangements on day eight. The final transfer can be adapted according to where you want to continue your Morocco journey.",
      },
  
      {
        question: "Can I finish the tour in Marrakech instead of Casablanca?",
  
        answer:
          "Yes. Because this is a private tour, the final transfer can be discussed when planning your trip. You can request to finish in Marrakech if it fits your onward travel plans.",
      },
  
      {
        question: "Can the 8-day Morocco tour from Casablanca be customized?",
  
        answer:
          "Yes. The itinerary can be adapted to your travel dates, interests, accommodation preferences and final destination.",
      },
  
      {
        question: "Is this tour suitable for travelers interested in Moroccan culture?",
  
        answer:
          "Yes. The journey focuses on historic cities, old medinas, traditional architecture, local crafts, northern Morocco and important cultural destinations.",
      },
  
      {
        question: "Are entrance fees included?",
  
        answer:
          "Entrance fees are not included by default. This gives you flexibility to choose the monuments and attractions you want to visit during the journey.",
      },
  
      {
        question: "Can families take this private Morocco tour?",
  
        answer:
          "Families can request this tour. If you are traveling with children, share their ages when contacting us so the itinerary and travel arrangements can be planned comfortably.",
      },
    ],
  
    // ─────────────────────────────
    // SEO
    // ─────────────────────────────
  
    seo: {
      title:
        "8-Day Imperial Cities Tour from Casablanca | Moroccan Trip",
  
      description:
        "Take a private 8-day Imperial Cities Tour from Casablanca through Rabat, Chefchaouen, Tangier, Meknes, Volubilis and Fes with a guided city visit.",
  
      // Internal SEO keyword map only.
      // Do not output these as a meta keywords tag.
      keywords: [
        "8 day imperial cities tour from casablanca",
        "8 days imperial cities tour from casablanca",
        "casablanca imperial cities tour",
        "imperial cities tour from casablanca",
        "8 day morocco tour from casablanca",
        "8 day morocco imperial cities tour from casablanca",
        "8 days in morocco",
        "morocco imperial cities",
      ],
    },
  
    // ─────────────────────────────
    // BOOKING
    // ─────────────────────────────
  
    booking: {
      available: true,
      minimumDays: 8,
      customizable: true,
      contactLabel: "Request a Quote",
    },
  },
  {
    id: "11",
  
    // ─────────────────────────────
    // BASIC INFORMATION
    // ─────────────────────────────
  
    slug: "10-day-morocco-tour-from-casablanca",
  
    title: "10-Day Morocco Tour from Casablanca",
  
    shortDescription:
      "Discover Morocco on a private 10-day tour from Casablanca through Rabat, Fes, the Sahara Desert, Marrakech and Essaouira, with imperial cities, mountain scenery and the Atlantic coast.",
  
    image: "/images/tours/10-day-morocco-tour-from-casablanca.webp",
  
    badge: "Cities, Sahara & Coast",
  
    featured: true,
  
    category: "Morocco Tours",
  
    // ─────────────────────────────
    // TOUR DETAILS
    // ─────────────────────────────
  
    duration: "10 Days / 9 Nights",
  
    nights: 9,
  
    tourType: "Private Tour",
  
    groupSize: "Up to 4 People",
  
    languages: ["English", "French"],
  
    departure: "Casablanca",
  
    arrival: "Casablanca",
  
    locations: [
      "Casablanca",
      "Rabat",
      "Meknes",
      "Fes",
      "Ifrane",
      "Middle Atlas Mountains",
      "Midelt",
      "Ziz Valley",
      "Merzouga",
      "Erg Chebbi",
      "Sahara Desert",
      "Rissani",
      "Todra Gorges",
      "Dades Valley",
      "Ouarzazate",
      "Ait Ben Haddou",
      "High Atlas Mountains",
      "Marrakech",
      "Essaouira",
      "Casablanca",
    ],
  
    // ─────────────────────────────
    // PRICING
    // ─────────────────────────────
  
    // No fixed price.
    // The final quote depends on the number of travelers,
    // accommodation level and requested services.
  
    // ─────────────────────────────
    // HIGHLIGHTS
    // ─────────────────────────────
  
    highlights: [
      "Begin and finish your private Morocco journey in Casablanca",
      "Visit Rabat, Morocco's capital and one of its historic imperial cities",
      "Discover Meknes before continuing toward Fes",
      "Spend two nights in Fes with a full day to explore the historic city",
      "Cross the Middle Atlas Mountains through changing landscapes",
      "Travel through the palm-filled Ziz Valley toward the Sahara",
      "Reach Merzouga and the golden dunes of Erg Chebbi",
      "Spend extra time discovering the Merzouga desert area",
      "Ride a camel across the Sahara dunes at sunset",
      "Spend a memorable night at a Sahara desert camp",
      "Walk between the impressive canyon walls of Todra Gorges",
      "Travel through the beautiful Dades Valley",
      "Visit the historic fortified village of Ait Ben Haddou",
      "Cross the High Atlas Mountains on the way to Marrakech",
      "Spend a full day discovering Marrakech",
      "Relax by the Atlantic coast in Essaouira",
      "Experience cities, mountains, desert landscapes and the coast in one journey",
      "Enjoy private transportation and flexible stops throughout the tour",
    ],
  
    // ─────────────────────────────
    // OVERVIEW
    // ─────────────────────────────
  
    overview: `
      Experience cities, mountains, desert landscapes and the Atlantic coast on
      this private 10-day Morocco tour from Casablanca.
  
      Your journey begins in Casablanca before traveling through Rabat and Meknes
      to Fes. These first days introduce you to some of Morocco's most historic
      cities, with time to discover traditional architecture, old medinas and the
      atmosphere of northern and central Morocco.
  
      From Fes, the scenery changes as you cross the Middle Atlas Mountains and
      travel through the Ziz Valley toward Merzouga. At the edge of the Erg Chebbi
      dunes, you will have time to discover the Sahara before riding a camel across
      the dunes and spending a night at a desert camp.
  
      The journey then continues west through Rissani, Todra Gorges and the Dades
      Valley. After traveling through the landscapes of southern Morocco, visit
      Ait Ben Haddou and cross the High Atlas Mountains before arriving in
      Marrakech.
  
      A full day in Marrakech gives you time to explore the historic medina,
      traditional markets and the atmosphere of one of Morocco's best-known cities
      without rushing to another destination.
  
      The final part of your 10-day Morocco itinerary takes you to Essaouira,
      where the Atlantic coast offers a slower and more relaxed atmosphere before
      returning to Casablanca.
  
      This private journey is designed for travelers who want to see different
      sides of Morocco in ten days. Instead of focusing only on the desert or
      historic cities, the itinerary combines cultural destinations, mountain
      roads, the Sahara Desert, Marrakech and the Atlantic coast in one varied
      route.
    `,
  
    // ─────────────────────────────
    // ITINERARY
    // ─────────────────────────────
  
    itinerary: [
      {
        day: 1,
  
        title: "Arrival in Casablanca",
  
        description: `
          Your 10-day Morocco tour begins in Casablanca.
  
          Depending on your arrival time, you will be met in the city or at
          Casablanca airport and transferred to your accommodation.
  
          The first day is kept relaxed so you can settle in after your journey
          and prepare for the days ahead.
  
          If time allows, you can discover part of Casablanca and enjoy your first
          introduction to Morocco. The city has a modern atmosphere and a strong
          connection to the Atlantic coast, making it a different starting point
          from the historic medinas you will visit later in the tour.
  
          Spend your first night in Casablanca.
        `,
  
        highlights: [
          "Arrival in Casablanca",
          "Private pickup according to your travel plans",
          "Transfer to your accommodation",
          "First introduction to Morocco",
          "Free time depending on arrival time",
          "Overnight stay in Casablanca",
        ],
      },
  
      {
        day: 2,
  
        title: "Casablanca – Rabat – Meknes – Fes",
  
        description: `
          After breakfast, leave Casablanca and travel north toward Rabat.
  
          Rabat is Morocco's capital and one of its historic imperial cities.
          Take time to discover some of the city's important areas and enjoy its
          calmer atmosphere before continuing inland.
  
          The journey then continues toward Meknes, another historic city with
          traditional architecture and a long connection to Morocco's imperial
          history.
  
          After your visit, continue toward Fes.
  
          Arrive in Fes later in the day and check into your accommodation.
          You will spend two nights here, giving you enough time to explore the
          city properly on the following day.
        `,
  
        highlights: [
          "Breakfast in Casablanca",
          "Travel to Rabat",
          "Discover Morocco's capital",
          "Continue toward Meknes",
          "Explore part of the historic city",
          "Travel toward Fes",
          "Arrive in Fes",
          "Overnight stay in Fes",
        ],
      },
  
      {
        day: 3,
  
        title: "Full Day Exploring Fes",
  
        description: `
          Today is dedicated to Fes, one of Morocco's most historic and culturally
          important cities.
  
          Explore the old medina, where narrow streets lead between traditional
          markets, workshops, neighborhoods and historic buildings.
  
          Fes is especially known for its traditional crafts and architecture.
          Spending a full day here gives you time to experience the city without
          having to continue driving toward another destination.
  
          Depending on your interests, you can visit viewpoints, traditional
          craft areas and historic sites while discovering everyday life inside
          the medina.
  
          The day can be enjoyed at a comfortable pace, with time for breaks and
          personal exploration.
  
          Return to your accommodation in the evening for a second night in Fes.
        `,
  
        highlights: [
          "Full day in Fes",
          "Explore the historic medina",
          "Walk through traditional streets and markets",
          "Discover local craft areas",
          "See historic architecture",
          "Flexible sightseeing according to your interests",
          "Second overnight stay in Fes",
        ],
      },
  
      {
        day: 4,
  
        title:
          "Fes – Ifrane – Middle Atlas Mountains – Midelt – Ziz Valley – Merzouga",
  
        description: `
          After breakfast, leave Fes and begin the journey toward the Sahara
          Desert.
  
          Travel through Ifrane and continue across the Middle Atlas Mountains.
          The scenery here is very different from the desert, with mountain roads,
          forests and cooler landscapes.
  
          Continue toward Midelt, where a break can be made before traveling
          farther south.
  
          As the journey continues, the landscape becomes drier and more open.
          Pass through the Ziz Valley, where long stretches of palm trees create
          a striking contrast with the surrounding mountains and rocky scenery.
  
          Later in the day, continue toward Merzouga beside the golden dunes of
          Erg Chebbi.
  
          Unlike shorter Morocco tours, this 10-day itinerary gives you time to
          arrive in Merzouga and relax instead of beginning the camel trek
          immediately after the long drive from Fes.
  
          Spend the night in the Merzouga area and prepare for a full desert
          experience the following day.
        `,
  
        highlights: [
          "Breakfast in Fes",
          "Travel through Ifrane",
          "Cross the Middle Atlas Mountains",
          "Continue through the Midelt area",
          "Enjoy views across the Ziz Valley",
          "Travel toward southeastern Morocco",
          "Arrive in Merzouga",
          "See the Erg Chebbi dunes",
          "Overnight stay in Merzouga",
        ],
      },
  
      {
        day: 5,
  
        title:
          "Merzouga Desert Exploration – Camel Trek – Sahara Desert Camp",
  
        description: `
          Today is dedicated to discovering the Merzouga desert area at a relaxed
          pace.
  
          After breakfast, explore the landscapes surrounding the Erg Chebbi dunes
          and experience more of life near the Sahara.
  
          Depending on the day's arrangements, there can be time to visit local
          communities, make stops around the dunes and enjoy the open desert
          scenery before returning to Merzouga.
  
          Later in the afternoon, prepare for one of the main experiences of your
          journey: a camel trek into the Sahara.
  
          Ride across the golden dunes of Erg Chebbi as the sun moves lower over
          the desert. Stop along the way to enjoy the scenery and watch the sunset.
  
          Continue toward your Sahara camp after sunset.
  
          Enjoy dinner and spend the night surrounded by the peaceful desert
          landscape and open sky.
  
          This is one of the most memorable experiences during your 10 days in
          Morocco.
        `,
  
        highlights: [
          "Full day in the Merzouga desert area",
          "Explore the landscapes around Erg Chebbi",
          "Discover the Sahara surroundings",
          "Experience local desert life",
          "Camel ride across the dunes",
          "Watch the sunset over Erg Chebbi",
          "Dinner at the Sahara camp",
          "Overnight stay in the desert",
        ],
      },
  
      {
        day: 6,
  
        title: "Merzouga – Rissani – Todra Gorges – Dades Valley",
  
        description: `
          Start the morning in the peaceful surroundings of the Sahara.
  
          If you wish, wake up early to watch the sunrise over the Erg Chebbi
          dunes before breakfast.
  
          Leave Merzouga and begin traveling west through southeastern Morocco.
  
          Pass through the Rissani area before continuing toward Tinghir and
          Todra Gorges.
  
          At Todra Gorges, take time to walk between the impressive canyon walls
          and enjoy the dramatic natural scenery. The high rock cliffs provide a
          complete change from the open dunes of Merzouga.
  
          After your visit, continue toward the Dades Valley.
  
          The route passes through changing landscapes, traditional towns,
          palm-filled areas and mountain scenery before reaching the Dades region.
  
          Arrive later in the day for dinner and an overnight stay.
        `,
  
        highlights: [
          "Optional sunrise over the Sahara dunes",
          "Breakfast before leaving Merzouga",
          "Travel through the Rissani area",
          "Continue toward Tinghir",
          "Visit Todra Gorges",
          "Walk between the canyon walls",
          "Travel through southeastern Morocco",
          "Arrive in the Dades Valley",
          "Dinner and overnight stay in the Dades area",
        ],
      },
  
      {
        day: 7,
  
        title:
          "Dades Valley – Ouarzazate – Ait Ben Haddou – High Atlas – Marrakech",
  
        description: `
          After breakfast, leave the Dades Valley and continue through the
          landscapes of southern Morocco.
  
          Travel toward Ouarzazate as the road passes dry mountain scenery,
          traditional communities and wide valleys.
  
          Continue to Ait Ben Haddou, one of the best-known fortified villages
          in Morocco.
  
          Take time to explore the village and see its traditional earthen
          architecture before beginning the journey toward the High Atlas
          Mountains.
  
          Cross the mountains on the road to Marrakech. The route offers
          panoramic views, winding roads and small villages as the scenery changes
          once again.
  
          Stops can be made along the way for rest, photos and meals depending on
          your schedule.
  
          Arrive in Marrakech later in the day and settle into your accommodation.
        `,
  
        highlights: [
          "Breakfast in the Dades Valley",
          "Travel through southern Morocco",
          "Continue toward Ouarzazate",
          "Visit Ait Ben Haddou",
          "Discover traditional earthen architecture",
          "Cross the High Atlas Mountains",
          "Enjoy panoramic mountain scenery",
          "Arrive in Marrakech",
          "Overnight stay in Marrakech",
        ],
      },
  
      {
        day: 8,
  
        title: "Full Day Exploring Marrakech",
  
        description: `
          Spend a full day discovering Marrakech.
  
          Explore the historic medina, where traditional markets, old
          neighborhoods and lively streets create one of Morocco's most
          recognizable city experiences.
  
          Take time to walk through the souks, discover historic architecture and
          enjoy the atmosphere of the city's public squares.
  
          Because you are not traveling to another destination today, the
          sightseeing can be enjoyed at a comfortable pace.
  
          Depending on your interests, you can also visit gardens, historic
          monuments or quieter areas outside the busiest streets of the medina.
  
          After several days traveling through Morocco, this full day gives you
          time to enjoy Marrakech without rushing.
  
          Spend a second night in Marrakech.
        `,
  
        highlights: [
          "Full day in Marrakech",
          "Explore the historic medina",
          "Walk through traditional souks",
          "Discover historic architecture",
          "Enjoy the atmosphere of the city",
          "Flexible sightseeing according to your interests",
          "Free time in Marrakech",
          "Second overnight stay in Marrakech",
        ],
      },
  
      {
        day: 9,
  
        title: "Marrakech – Essaouira",
  
        description: `
          After breakfast, leave Marrakech and travel west toward Morocco's
          Atlantic coast.
  
          Arrive in Essaouira, a relaxed coastal city with a very different
          atmosphere from Marrakech and the Sahara.
  
          Spend time exploring the old medina, walking near the harbor and
          enjoying views of the Atlantic Ocean.
  
          After several days of mountain roads, desert landscapes and historic
          cities, Essaouira offers a slower final stage of your Morocco journey.
  
          The afternoon and evening can be enjoyed at your own pace, with time to
          discover the medina, relax near the coast or simply enjoy the city's
          peaceful atmosphere.
  
          Spend the night in Essaouira.
        `,
  
        highlights: [
          "Breakfast in Marrakech",
          "Travel toward the Atlantic coast",
          "Arrive in Essaouira",
          "Explore the old medina",
          "Walk near the harbor",
          "Enjoy Atlantic Ocean scenery",
          "Free afternoon in Essaouira",
          "Overnight stay in Essaouira",
        ],
      },
  
      {
        day: 10,
  
        title: "Essaouira – Atlantic Coast – Casablanca",
  
        description: `
          Enjoy your final morning on Morocco's Atlantic coast before beginning
          the journey back toward Casablanca.
  
          Leave Essaouira and travel north along the Atlantic side of the country.
  
          The final drive gives you another chance to see Morocco's coastal
          landscapes after experiencing historic cities, mountains and the Sahara
          during the previous days.
  
          Stops can be made during the journey for rest, meals and photos
          depending on your schedule.
  
          Arrive in Casablanca later in the day.
  
          Your 10-day Morocco itinerary ends after a journey through Rabat,
          Meknes, Fes, the Middle Atlas Mountains, Merzouga, the Sahara Desert,
          southern Morocco, Marrakech and Essaouira.
  
          Final drop-off can be arranged in Casablanca according to your onward
          travel plans.
        `,
  
        highlights: [
          "Final morning in Essaouira",
          "Leave the Atlantic coastal city",
          "Travel north toward Casablanca",
          "Enjoy coastal scenery along the journey",
          "Flexible stops for rest and meals",
          "Return to Casablanca",
          "Final drop-off according to your travel plans",
          "End of the 10-day Morocco tour",
        ],
      },
    ],
  
    // ─────────────────────────────
    // INCLUDED
    // ─────────────────────────────
  
    included: [
      "Private transportation throughout the 10-day tour",
      "English- or French-speaking driver",
      "Nine nights of accommodation",
      "One night in Casablanca",
      "Two nights in Fes",
      "One night at a hotel or riad in Merzouga",
      "One night at a Sahara desert camp",
      "One night in the Dades area",
      "Two nights in Marrakech",
      "One night in Essaouira",
      "Daily breakfasts",
      "Dinner in the Dades area",
      "Dinner at the Sahara desert camp",
      "Camel ride in the Merzouga desert",
      "Time to explore the Merzouga and Erg Chebbi area",
      "Free time to explore Fes, Marrakech and Essaouira",
      "Flexible stops for photos and breaks during the journey",
      "Pickup and final drop-off in Casablanca",
    ],
  
    // ─────────────────────────────
    // NOT INCLUDED
    // ─────────────────────────────
  
    excluded: [
      "Lunches",
      "Dinners unless mentioned in the included section",
      "Drinks",
      "Entrance fees to monuments and attractions",
      "Local city guides unless requested",
      "Optional activities not mentioned in the itinerary",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities",
      "Any services not mentioned in the included section",
    ],
  
    // ─────────────────────────────
    // ACCOMMODATION
    // ─────────────────────────────
  
    accommodation: [
      {
        night: 1,
        location: "Casablanca",
        type: "Hotel",
      },
      {
        night: 2,
        location: "Fes",
        type: "Hotel or Riad",
      },
      {
        night: 3,
        location: "Fes",
        type: "Hotel or Riad",
      },
      {
        night: 4,
        location: "Merzouga",
        type: "Hotel or Riad",
      },
      {
        night: 5,
        location: "Merzouga",
        type: "Sahara Desert Camp",
      },
      {
        night: 6,
        location: "Dades Valley",
        type: "Hotel or Riad",
      },
      {
        night: 7,
        location: "Marrakech",
        type: "Hotel or Riad",
      },
      {
        night: 8,
        location: "Marrakech",
        type: "Hotel or Riad",
      },
      {
        night: 9,
        location: "Essaouira",
        type: "Hotel or Riad",
      },
    ],
  
    // ─────────────────────────────
    // GALLERY
    // ─────────────────────────────
  
    gallery: [
      "/images/tours/10-day-morocco-tour-from-casablanca.webp",
    ],
  
    // ─────────────────────────────
    // FAQ
    // ─────────────────────────────
  
    faqs: [
      {
        question: "Is the 10-day Morocco tour private?",
  
        answer:
          "Yes. This is a private tour for you and your travel group. You travel in a private vehicle and have more flexibility for stops, breaks and the pace of the journey.",
      },
  
      {
        question: "Where does the 10-day Morocco tour start and finish?",
  
        answer:
          "The tour starts and finishes in Casablanca. It follows a varied route through Rabat, Fes, Merzouga, the Sahara Desert, Marrakech and Essaouira before returning to Casablanca.",
      },
  
      {
        question: "What can I see during 10 days in Morocco?",
  
        answer:
          "This itinerary includes Casablanca, Rabat, Meknes, Fes, the Middle Atlas Mountains, Ziz Valley, Merzouga, the Sahara Desert, Todra Gorges, Dades Valley, Ait Ben Haddou, Marrakech and Essaouira.",
      },
  
      {
        question: "Is 10 days enough to visit Morocco?",
  
        answer:
          "Ten days gives you time to experience several different parts of Morocco without limiting the journey to one region. This itinerary combines historic cities, the Sahara, mountain landscapes, Marrakech and the Atlantic coast.",
      },
  
      {
        question: "Does the tour include Fes?",
  
        answer:
          "Yes. The tour includes two nights in Fes and a full day to explore the historic medina, traditional neighborhoods, markets and cultural areas of the city.",
      },
  
      {
        question: "Does the 10-day itinerary include the Sahara Desert?",
  
        answer:
          "Yes. The Sahara is one of the main highlights of the journey. You spend two nights in the Merzouga area, including one night at a Sahara desert camp near the Erg Chebbi dunes.",
      },
  
      {
        question: "Do we have extra time in Merzouga?",
  
        answer:
          "Yes. You arrive in Merzouga on day four and spend day five exploring the desert area before the camel trek and overnight stay at the Sahara camp.",
      },
  
      {
        question: "Is the camel ride in Merzouga included?",
  
        answer:
          "Yes. A camel ride across the Erg Chebbi dunes is included as part of your Sahara Desert experience.",
      },
  
      {
        question: "Do we spend a night in the Sahara Desert?",
  
        answer:
          "Yes. One night is spent at a Sahara desert camp near Merzouga after the camel ride and sunset experience.",
      },
  
      {
        question: "Does the tour visit Todra Gorges?",
  
        answer:
          "Yes. Todra Gorges is visited on day six while traveling from Merzouga toward the Dades Valley.",
      },
  
      {
        question: "Does the tour visit Ait Ben Haddou?",
  
        answer:
          "Yes. Ait Ben Haddou is included on day seven before crossing the High Atlas Mountains toward Marrakech.",
      },
  
      {
        question: "How much time do we spend in Marrakech?",
  
        answer:
          "The itinerary includes two nights in Marrakech and a full day dedicated to exploring the city, giving you time to enjoy the medina and other areas without continuing to another destination the same day.",
      },
  
      {
        question: "Does the tour include Essaouira?",
  
        answer:
          "Yes. You travel from Marrakech to Essaouira on day nine and spend one night on the Atlantic coast before returning to Casablanca on the final day.",
      },
  
      {
        question: "Is there a lot of driving during this 10-day Morocco itinerary?",
  
        answer:
          "The tour covers several regions of Morocco, so some days include several hours of driving. The ten-day itinerary balances the longer journeys with full days in Fes, Merzouga and Marrakech as well as sightseeing stops and overnight stays.",
      },
  
      {
        question: "Are local guides included in Fes or Marrakech?",
  
        answer:
          "Local city guides are not included by default unless they are part of your final arrangements. A local guide can be requested when planning your private tour.",
      },
  
      {
        question: "Can this 10-day Morocco tour be customized?",
  
        answer:
          "Yes. Because this is a private tour, parts of the itinerary can be adapted to your travel dates, interests, accommodation preferences and onward travel plans.",
      },
  
      {
        question: "What should I bring for the Sahara Desert?",
  
        answer:
          "Bring comfortable clothing, walking shoes, sun protection and an extra layer for the evening. Temperatures in the desert can change noticeably between daytime and night.",
      },
  
      {
        question: "Can families take this 10-day Morocco tour?",
  
        answer:
          "Families can request this private tour. If you are traveling with children, share their ages when contacting us so the itinerary and travel arrangements can be planned comfortably.",
      },
    ],
  
    // ─────────────────────────────
    // SEO
    // ─────────────────────────────
  
    seo: {
      title:
        "10-Day Morocco Tour from Casablanca | Moroccan Trip",
  
      description:
        "Take a private 10-day Morocco tour from Casablanca through Rabat, Fes, Merzouga, the Sahara, Marrakech and Essaouira with nine nights included.",
  
      // Internal SEO keyword map only.
      // Do not output these as a meta keywords tag.
      keywords: [
        "10 day morocco tour",
        "10 days morocco tour",
        "morocco tour 10 days",
        "10 day morocco itinerary",
        "10 day itinerary morocco",
        "morocco itinerary 10 days",
        "morocco 10 day itinerary",
        "10 days in morocco",
        "10 day morocco tour from casablanca",
        "north morocco tour",
        "northern morocco tour",
        "northern morocco itinerary",
      ],
    },
  
    // ─────────────────────────────
    // BOOKING
    // ─────────────────────────────
  
    booking: {
      available: true,
      minimumDays: 10,
      customizable: true,
      contactLabel: "Request a Quote",
    },
  },
  {
    id: "12",
  
    // ─────────────────────────────
    // BASIC INFORMATION
    // ─────────────────────────────
  
    slug: "14-day-morocco-tour-from-casablanca",
  
    title: "14-Day Morocco Tour from Casablanca",
  
    shortDescription:
      "Experience Morocco on a private 14-day tour from Casablanca through Rabat, Tangier, Chefchaouen, Fes, the Sahara Desert, Marrakech and Essaouira.",
  
    image: "/images/tours/14-day-morocco-tour-from-casablanca.webp",
  
    badge: "Two Weeks in Morocco",
  
    featured: true,
  
    category: "Morocco Tours",
  
    // ─────────────────────────────
    // TOUR DETAILS
    // ─────────────────────────────
  
    duration: "14 Days / 13 Nights",
  
    nights: 13,
  
    tourType: "Private Tour",
  
    groupSize: "Up to 4 People",
  
    languages: ["English", "French"],
  
    departure: "Casablanca",
  
    arrival: "Casablanca",
  
    locations: [
      "Casablanca",
      "Rabat",
      "Tangier",
      "Chefchaouen",
      "Fes",
      "Ifrane",
      "Middle Atlas Mountains",
      "Midelt",
      "Ziz Valley",
      "Merzouga",
      "Erg Chebbi",
      "Sahara Desert",
      "Rissani",
      "Todra Gorges",
      "Dades Valley",
      "Ouarzazate",
      "Ait Ben Haddou",
      "High Atlas Mountains",
      "Marrakech",
      "Essaouira",
      "Casablanca",
    ],
  
    // ─────────────────────────────
    // PRICING
    // ─────────────────────────────
  
    // No fixed price.
    // The final quote depends on the number of travelers,
    // accommodation level and requested services.
  
    // ─────────────────────────────
    // HIGHLIGHTS
    // ─────────────────────────────
  
    highlights: [
      "Start and finish your private Morocco journey in Casablanca",
      "Discover Rabat, Morocco's capital and one of its historic imperial cities",
      "Travel north to Tangier and experience Morocco's coastal atmosphere",
      "Spend a night in Chefchaouen and explore its blue-painted medina",
      "Enjoy two nights in Fes with a full day to discover the historic city",
      "Cross the Middle Atlas Mountains through forests and mountain scenery",
      "Travel through the palm-filled Ziz Valley toward the Sahara",
      "Spend extra time around Merzouga and the Erg Chebbi dunes",
      "Ride a camel across the Sahara at sunset",
      "Spend a memorable night at a desert camp",
      "Walk through the dramatic Todra Gorges",
      "Travel through the landscapes of the Dades Valley",
      "Visit the historic fortified village of Ait Ben Haddou",
      "Cross the High Atlas Mountains before reaching Marrakech",
      "Spend a full day discovering Marrakech",
      "Relax for two nights on the Atlantic coast in Essaouira",
      "Experience northern Morocco, the Sahara and the Atlantic coast in one tour",
      "Travel privately with flexible stops throughout the journey",
    ],
  
    // ─────────────────────────────
    // OVERVIEW
    // ─────────────────────────────
  
    overview: `
      Discover historic cities, mountain landscapes, the Sahara Desert and the
      Atlantic coast on this private 14-day Morocco tour from Casablanca.
  
      Your journey begins in Casablanca before traveling north to Rabat and
      Tangier. From the coast, continue into the Rif Mountains toward
      Chefchaouen, where blue-painted streets, small squares and a relaxed medina
      offer a very different atmosphere from Morocco's larger cities.
  
      The route then continues to Fes. With two nights in the city, you have a
      full day to discover its historic medina, traditional craft areas and old
      neighborhoods before beginning the journey south.
  
      From Fes, cross the Middle Atlas Mountains through Ifrane and Midelt before
      traveling through the Ziz Valley toward Merzouga. The scenery changes
      throughout the day as forests and mountains gradually give way to dry
      valleys and the golden dunes of Erg Chebbi.
  
      The Sahara experience is given more time than on a short desert tour.
      Spend a night in the Merzouga area before exploring the desert surroundings,
      riding a camel across the dunes and spending the following night at a
      Sahara camp.
  
      After leaving the desert, travel west through Rissani, Todra Gorges and the
      Dades Valley. Continue through southern Morocco toward Ouarzazate and Ait
      Ben Haddou before crossing the High Atlas Mountains to Marrakech.
  
      A full day in Marrakech gives you time to enjoy the medina, traditional
      markets and historic areas without needing to continue driving the same day.
  
      The final part of this Morocco itinerary takes you to Essaouira. Two nights
      on the Atlantic coast create a slower ending to the journey and give you
      time to explore the medina, harbor and coastal atmosphere before returning
      to Casablanca.
  
      This Morocco itinerary of 14 days is designed for travelers who want to see
      several different regions without turning every day into a long transfer.
      If you are planning two weeks in Morocco, the route combines northern
      cities, cultural destinations, mountain scenery, the Sahara Desert,
      Marrakech and the Atlantic coast in one private journey.
    `,
  
    // ─────────────────────────────
    // ITINERARY
    // ─────────────────────────────
  
    itinerary: [
      {
        day: 1,
  
        title: "Arrival in Casablanca",
  
        description: `
          Your 14-day Morocco tour begins in Casablanca.
  
          Depending on your travel plans, you will be met in the city or at
          Casablanca airport and transferred to your accommodation.
  
          The first day is intentionally relaxed. After your journey to Morocco,
          you can settle in, rest and prepare for the route ahead.
  
          If your arrival time allows, enjoy some free time and discover part of
          Casablanca. The city's modern atmosphere and Atlantic setting make it a
          very different introduction from the historic medinas you will visit
          later in the tour.
  
          Spend your first night in Casablanca.
        `,
  
        highlights: [
          "Arrival in Casablanca",
          "Private pickup according to your travel plans",
          "Transfer to your accommodation",
          "Free time depending on arrival time",
          "First introduction to Morocco",
          "Overnight stay in Casablanca",
        ],
      },
  
      {
        day: 2,
  
        title: "Casablanca – Rabat",
  
        description: `
          After breakfast, leave Casablanca and travel north toward Rabat.
  
          Rabat is Morocco's capital and one of the country's historic imperial
          cities. Compared with Casablanca, it has a calmer atmosphere and combines
          historic areas with wide streets and an Atlantic setting.
  
          Spend time discovering the city at a comfortable pace.
  
          Depending on your interests, you can explore historic neighborhoods and
          important landmarks while learning more about Rabat's place in Moroccan
          history.
  
          Because today's drive is relatively manageable, there is no need to rush
          through the city before continuing to another destination.
  
          Check into your accommodation and spend the night in Rabat.
        `,
  
        highlights: [
          "Breakfast in Casablanca",
          "Travel north toward Rabat",
          "Discover Morocco's capital",
          "Explore historic areas",
          "Enjoy a relaxed sightseeing pace",
          "Overnight stay in Rabat",
        ],
      },
  
      {
        day: 3,
  
        title: "Rabat – Tangier",
  
        description: `
          After breakfast, continue your journey north toward Tangier.
  
          The route takes you farther into northern Morocco, where the landscape
          and atmosphere begin to change.
  
          Tangier is one of the country's best-known northern cities and has a long
          connection with the sea, international travelers and cultural exchange.
  
          After arriving, enjoy time discovering parts of the city and its old
          neighborhoods.
  
          Depending on your interests and schedule, you can walk through the
          medina, enjoy viewpoints and experience the coastal atmosphere.
  
          Spend the night in Tangier.
        `,
  
        highlights: [
          "Breakfast in Rabat",
          "Travel through northern Morocco",
          "Arrive in Tangier",
          "Explore parts of the old city",
          "Enjoy northern coastal scenery",
          "Free time in Tangier",
          "Overnight stay in Tangier",
        ],
      },
  
      {
        day: 4,
  
        title: "Tangier – Chefchaouen",
  
        description: `
          Enjoy your morning in Tangier before traveling inland toward
          Chefchaouen.
  
          As you leave the coast, the surroundings become more mountainous and the
          journey moves into a quieter part of northern Morocco.
  
          Arrive in Chefchaouen, a small town in the Rif Mountains known for its
          blue-painted streets and relaxed medina.
  
          Spend time walking through the old town at your own pace. Narrow streets
          connect small squares, local shops and traditional neighborhoods
          throughout the center.
  
          The slower atmosphere makes Chefchaouen a comfortable change from the
          larger cities visited earlier in the journey.
  
          Enjoy a free evening and spend the night in Chefchaouen.
        `,
  
        highlights: [
          "Morning in Tangier",
          "Travel toward the Rif Mountains",
          "Arrive in Chefchaouen",
          "Explore the blue medina",
          "Walk through traditional streets",
          "Free evening in Chefchaouen",
          "Overnight stay in Chefchaouen",
        ],
      },
  
      {
        day: 5,
  
        title: "Chefchaouen – Fes",
  
        description: `
          Enjoy a final morning in Chefchaouen before continuing toward Fes.
  
          Today's journey takes you away from the quieter mountain atmosphere of
          the Rif region and toward one of Morocco's most important historic
          cities.
  
          The road passes through changing countryside before reaching Fes later
          in the day.
  
          After arrival, check into your accommodation and enjoy a relaxed
          evening.
  
          You will spend two nights in Fes, allowing you to discover the city
          properly instead of making only a short stop before traveling south.
  
          Spend the night in Fes.
        `,
  
        highlights: [
          "Final morning in Chefchaouen",
          "Travel through northern Morocco",
          "Changing countryside along the route",
          "Arrive in Fes",
          "Free time depending on arrival",
          "First overnight stay in Fes",
        ],
      },
  
      {
        day: 6,
  
        title: "Full Day Exploring Fes",
  
        description: `
          Today is dedicated to discovering Fes, one of Morocco's most historic
          and culturally important cities.
  
          Explore the old medina, where narrow streets lead between traditional
          markets, workshops, neighborhoods and historic buildings.
  
          Fes is especially known for its traditional crafts and architecture.
          Spending a full day here allows you to experience the city at a more
          comfortable pace.
  
          Depending on your interests, the day can include viewpoints, historic
          areas and traditional craft districts while giving you time to observe
          everyday life inside the old city.
  
          There is no long road journey today, so you can take breaks and explore
          according to your interests.
  
          Return to your accommodation for a second night in Fes.
        `,
  
        highlights: [
          "Full day in Fes",
          "Explore the historic medina",
          "Walk through traditional markets",
          "Discover local craft areas",
          "See historic architecture",
          "Flexible sightseeing",
          "Second overnight stay in Fes",
        ],
      },
  
      {
        day: 7,
  
        title:
          "Fes – Ifrane – Middle Atlas Mountains – Midelt – Ziz Valley – Merzouga",
  
        description: `
          After breakfast, leave Fes and begin the journey south toward the Sahara
          Desert.
  
          Travel through Ifrane before entering the Middle Atlas Mountains. This
          part of Morocco offers forest scenery, cooler temperatures and mountain
          roads that feel completely different from the desert landscapes ahead.
  
          Continue toward Midelt, where time can be allowed for a break before
          traveling farther south.
  
          As the route continues, the landscape gradually becomes drier.
  
          Travel through the Ziz Valley, where long stretches of palm trees run
          between rocky mountains and dry scenery.
  
          Continue toward Merzouga at the edge of the Erg Chebbi dunes.
  
          Because this 14-day Morocco itinerary allows more time, there is no need
          to begin the camel trek immediately after the long journey from Fes.
  
          Enjoy your first views of the Sahara and spend the night at a hotel or
          riad in the Merzouga area.
        `,
  
        highlights: [
          "Breakfast in Fes",
          "Travel through Ifrane",
          "Cross the Middle Atlas Mountains",
          "Continue through Midelt",
          "Enjoy views across the Ziz Valley",
          "Travel toward the Sahara",
          "Arrive in Merzouga",
          "See the Erg Chebbi dunes",
          "Overnight stay in Merzouga",
        ],
      },
  
      {
        day: 8,
  
        title:
          "Merzouga Desert Exploration – Camel Trek – Sahara Camp",
  
        description: `
          Today is dedicated to experiencing the Merzouga desert area without
          rushing.
  
          After breakfast, explore the landscapes surrounding the Erg Chebbi dunes
          and spend time discovering more of the Sahara environment.
  
          Depending on the day's arrangements, there can be stops around the desert
          area and opportunities to experience local communities and different
          landscapes surrounding Merzouga.
  
          Later in the afternoon, prepare for your camel ride into the Sahara.
  
          Cross the golden Erg Chebbi dunes as the sun moves lower over the desert.
          Take time to enjoy the quiet scenery and watch the colors change around
          sunset.
  
          Continue to your Sahara camp after the camel trek.
  
          Enjoy dinner and spend the night surrounded by the peaceful desert
          landscape and open sky.
  
          For many travelers spending two weeks in Morocco, this evening becomes
          one of the most memorable parts of the journey.
        `,
  
        highlights: [
          "Full day around the Merzouga desert",
          "Explore the Erg Chebbi area",
          "Discover Sahara landscapes",
          "Experience local desert surroundings",
          "Camel ride across the dunes",
          "Watch the Sahara sunset",
          "Dinner at the desert camp",
          "Overnight stay in the Sahara",
        ],
      },
  
      {
        day: 9,
  
        title: "Merzouga – Rissani – Todra Gorges – Dades Valley",
  
        description: `
          Start the morning in the quiet surroundings of the Sahara.
  
          If you wish, wake up early to watch the sunrise over the Erg Chebbi
          dunes before breakfast.
  
          Leave Merzouga and begin traveling west through southeastern Morocco.
  
          Pass through the Rissani area before continuing toward Tinghir and Todra
          Gorges.
  
          At Todra Gorges, take time to walk between the high canyon walls and
          enjoy the dramatic natural landscape.
  
          The rocky cliffs provide a strong contrast with the open dunes you
          experienced the previous day.
  
          Continue toward the Dades Valley through changing mountain scenery,
          small towns and palm-filled areas.
  
          Arrive in the Dades region later in the day for dinner and an overnight
          stay.
        `,
  
        highlights: [
          "Optional sunrise over Erg Chebbi",
          "Breakfast before leaving the Sahara",
          "Travel through the Rissani area",
          "Continue toward Tinghir",
          "Visit Todra Gorges",
          "Walk between the canyon walls",
          "Travel toward the Dades Valley",
          "Dinner and overnight stay in Dades",
        ],
      },
  
      {
        day: 10,
  
        title:
          "Dades Valley – Ouarzazate – Ait Ben Haddou – High Atlas – Marrakech",
  
        description: `
          After breakfast, leave the Dades Valley and continue through the
          landscapes of southern Morocco.
  
          Travel toward Ouarzazate as the road passes dry valleys, mountain scenery
          and traditional communities.
  
          Continue to Ait Ben Haddou, one of Morocco's best-known fortified
          villages.
  
          Take time to explore the village and see its traditional earthen
          architecture before beginning the journey toward Marrakech.
  
          Cross the High Atlas Mountains along a scenic mountain road with wide
          views and small villages along the route.
  
          Stops can be made for photos, rest and meals depending on your schedule.
  
          Arrive in Marrakech later in the day and check into your accommodation.
  
          Spend the night in Marrakech.
        `,
  
        highlights: [
          "Breakfast in the Dades Valley",
          "Travel through southern Morocco",
          "Continue toward Ouarzazate",
          "Visit Ait Ben Haddou",
          "Discover traditional earthen architecture",
          "Cross the High Atlas Mountains",
          "Enjoy panoramic mountain scenery",
          "Arrive in Marrakech",
          "Overnight stay in Marrakech",
        ],
      },
  
      {
        day: 11,
  
        title: "Full Day Exploring Marrakech",
  
        description: `
          Today is dedicated to Marrakech.
  
          Explore the historic medina, where traditional souks, old neighborhoods
          and lively streets create one of Morocco's most recognizable city
          experiences.
  
          Spend time walking through the markets and discovering historic
          architecture and public areas around the old city.
  
          Marrakech has a very different atmosphere from Fes, Chefchaouen and the
          Sahara, adding another side of Morocco to your journey.
  
          Depending on your interests, you can also visit gardens, monuments or
          quieter neighborhoods outside the busiest parts of the medina.
  
          Because you are staying in Marrakech for a second night, the day can be
          enjoyed without rushing.
  
          Return to your accommodation in the evening.
        `,
  
        highlights: [
          "Full day in Marrakech",
          "Explore the historic medina",
          "Walk through traditional souks",
          "Discover historic architecture",
          "Enjoy flexible sightseeing",
          "Free time in the city",
          "Second overnight stay in Marrakech",
        ],
      },
  
      {
        day: 12,
  
        title: "Marrakech – Essaouira",
  
        description: `
          After breakfast, leave Marrakech and travel west toward Morocco's
          Atlantic coast.
  
          The journey gradually moves away from inland landscapes as you approach
          the ocean.
  
          Arrive in Essaouira, a relaxed coastal city with a very different
          atmosphere from Marrakech.
  
          Spend time walking through the old medina, exploring the harbor area and
          enjoying views of the Atlantic.
  
          After historic cities, mountain roads and the Sahara Desert, Essaouira
          offers a slower final stage of your journey.
  
          The afternoon and evening can be enjoyed at your own pace.
  
          Spend the night in Essaouira.
        `,
  
        highlights: [
          "Breakfast in Marrakech",
          "Travel toward the Atlantic coast",
          "Arrive in Essaouira",
          "Explore the old medina",
          "Walk near the harbor",
          "Enjoy Atlantic scenery",
          "Free evening in Essaouira",
          "Overnight stay in Essaouira",
        ],
      },
  
      {
        day: 13,
  
        title: "Full Day in Essaouira",
  
        description: `
          Enjoy a full day beside the Atlantic Ocean.
  
          There is no need to pack your luggage or spend several hours driving
          today. Instead, explore Essaouira at your own pace.
  
          Walk through more of the medina, spend time around the harbor or enjoy
          the coastal atmosphere.
  
          After the longer travel stages of your Morocco journey, this day gives
          you time to slow down before returning to Casablanca.
  
          Having two nights in Essaouira also makes this itinerary different from
          shorter Morocco tours where the coast is visited only briefly.
  
          Enjoy your final evening by the Atlantic and spend a second night in
          Essaouira.
        `,
  
        highlights: [
          "Full day in Essaouira",
          "Explore the Atlantic coast",
          "Walk through the medina",
          "Spend time around the harbor",
          "Relaxed sightseeing",
          "Free time at your own pace",
          "Second overnight stay in Essaouira",
        ],
      },
  
      {
        day: 14,
  
        title: "Essaouira – Atlantic Coast – Casablanca",
  
        description: `
          Enjoy your final morning in Essaouira before beginning the journey back
          toward Casablanca.
  
          Leave the Atlantic coastal city and travel north.
  
          The final journey gives you time to reflect on the different landscapes
          experienced during the previous two weeks, from northern Morocco and the
          Rif Mountains to the Sahara, High Atlas Mountains and Atlantic coast.
  
          Stops can be made along the way for rest, meals and photos depending on
          your schedule.
  
          Arrive in Casablanca later in the day.
  
          Your Morocco itinerary of 14 days ends after traveling through Rabat,
          Tangier, Chefchaouen, Fes, the Middle Atlas Mountains, Merzouga, the
          Sahara Desert, southern Morocco, Marrakech and Essaouira.
  
          Final drop-off can be arranged in Casablanca according to your onward
          travel plans.
        `,
  
        highlights: [
          "Final morning in Essaouira",
          "Leave the Atlantic coast",
          "Travel north toward Casablanca",
          "Flexible stops during the journey",
          "Return to Casablanca",
          "Final drop-off according to your travel plans",
          "End of the 14-day Morocco tour",
        ],
      },
    ],
  
    // ─────────────────────────────
    // INCLUDED
    // ─────────────────────────────
  
    included: [
      "Private transportation throughout the 14-day tour",
      "English- or French-speaking driver",
      "Thirteen nights of accommodation",
      "One night in Casablanca",
      "One night in Rabat",
      "One night in Tangier",
      "One night in Chefchaouen",
      "Two nights in Fes",
      "One night at a hotel or riad in Merzouga",
      "One night at a Sahara desert camp",
      "One night in the Dades area",
      "Two nights in Marrakech",
      "Two nights in Essaouira",
      "Daily breakfasts",
      "Dinner in the Dades area",
      "Dinner at the Sahara desert camp",
      "Camel ride across the Erg Chebbi dunes",
      "Time to explore the Merzouga desert area",
      "Free time to explore the main destinations",
      "Flexible stops for photos and breaks during the journey",
      "Pickup and final drop-off in Casablanca",
    ],
  
    // ─────────────────────────────
    // NOT INCLUDED
    // ─────────────────────────────
  
    excluded: [
      "Lunches",
      "Dinners unless mentioned in the included section",
      "Drinks",
      "Entrance fees to monuments and attractions",
      "Local city guides unless requested",
      "Optional activities not included in the itinerary",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities",
      "Any services not mentioned in the included section",
    ],
  
    // ─────────────────────────────
    // ACCOMMODATION
    // ─────────────────────────────
  
    accommodation: [
      {
        night: 1,
        location: "Casablanca",
        type: "Hotel",
      },
      {
        night: 2,
        location: "Rabat",
        type: "Hotel or Riad",
      },
      {
        night: 3,
        location: "Tangier",
        type: "Hotel or Riad",
      },
      {
        night: 4,
        location: "Chefchaouen",
        type: "Hotel or Riad",
      },
      {
        night: 5,
        location: "Fes",
        type: "Hotel or Riad",
      },
      {
        night: 6,
        location: "Fes",
        type: "Hotel or Riad",
      },
      {
        night: 7,
        location: "Merzouga",
        type: "Hotel or Riad",
      },
      {
        night: 8,
        location: "Merzouga",
        type: "Sahara Desert Camp",
      },
      {
        night: 9,
        location: "Dades Valley",
        type: "Hotel or Riad",
      },
      {
        night: 10,
        location: "Marrakech",
        type: "Hotel or Riad",
      },
      {
        night: 11,
        location: "Marrakech",
        type: "Hotel or Riad",
      },
      {
        night: 12,
        location: "Essaouira",
        type: "Hotel or Riad",
      },
      {
        night: 13,
        location: "Essaouira",
        type: "Hotel or Riad",
      },
    ],
  
    // ─────────────────────────────
    // GALLERY
    // ─────────────────────────────
  
    gallery: [
      "/images/tours/14-day-morocco-tour-from-casablanca.webp",
    ],
  
    // ─────────────────────────────
    // FAQ
    // ─────────────────────────────
  
    faqs: [
      {
        question: "Is the 14-day Morocco tour from Casablanca private?",
  
        answer:
          "Yes. This is a private tour for you and your travel group. You travel in a private vehicle with more flexibility for stops, breaks and the pace of the journey.",
      },
  
      {
        question: "Where does the 14-day Morocco tour start and finish?",
  
        answer:
          "The tour starts and finishes in Casablanca. It follows a circular route through northern Morocco, Fes, the Sahara Desert, Marrakech and Essaouira before returning to Casablanca.",
      },
  
      {
        question: "What can I see during 14 days in Morocco?",
  
        answer:
          "This itinerary includes Casablanca, Rabat, Tangier, Chefchaouen, Fes, the Middle Atlas Mountains, Ziz Valley, Merzouga, the Sahara Desert, Todra Gorges, Dades Valley, Ait Ben Haddou, Marrakech and Essaouira.",
      },
  
      {
        question: "Is two weeks enough to travel around Morocco?",
  
        answer:
          "Two weeks gives you enough time to experience several different regions at a more comfortable pace. This route combines northern Morocco, historic cities, mountain landscapes, the Sahara Desert, Marrakech and the Atlantic coast.",
      },
  
      {
        question: "Does the 14-day Morocco itinerary include Chefchaouen?",
  
        answer:
          "Yes. The tour includes one night in Chefchaouen, giving you time to explore the blue-painted medina and enjoy the atmosphere of the Rif Mountains.",
      },
  
      {
        question: "Does the tour visit Tangier?",
  
        answer:
          "Yes. Tangier is included on day three before the journey continues toward Chefchaouen.",
      },
  
      {
        question: "How much time do we spend in Fes?",
  
        answer:
          "The itinerary includes two nights in Fes and one full day dedicated to exploring the historic medina, traditional markets, craft areas and architecture of the city.",
      },
  
      {
        question: "Does this two-week Morocco itinerary include the Sahara?",
  
        answer:
          "Yes. The Sahara is one of the main parts of the journey. You spend two nights in the Merzouga area, including one night at a desert camp near the Erg Chebbi dunes.",
      },
  
      {
        question: "Do we have time to explore Merzouga before the desert camp?",
  
        answer:
          "Yes. You arrive in Merzouga on day seven and spend the following day discovering the desert area before your camel ride and overnight stay at the Sahara camp.",
      },
  
      {
        question: "Is the camel ride in Merzouga included?",
  
        answer:
          "Yes. A camel ride across the Erg Chebbi dunes is included as part of your Sahara Desert experience.",
      },
  
      {
        question: "Do we spend a night in the Sahara Desert?",
  
        answer:
          "Yes. One night is spent at a desert camp near Merzouga after the camel ride and sunset experience.",
      },
  
      {
        question: "Does the tour include Todra Gorges?",
  
        answer:
          "Yes. Todra Gorges is visited on day nine while traveling from Merzouga toward the Dades Valley.",
      },
  
      {
        question: "Does the itinerary include Ait Ben Haddou?",
  
        answer:
          "Yes. Ait Ben Haddou is visited on day ten before crossing the High Atlas Mountains toward Marrakech.",
      },
  
      {
        question: "How much time do we spend in Marrakech?",
  
        answer:
          "The itinerary includes two nights in Marrakech and a full day to explore the city at a comfortable pace before traveling to Essaouira.",
      },
  
      {
        question: "Does the 14-day tour include Essaouira?",
  
        answer:
          "Yes. The tour includes two nights in Essaouira, giving you a full day to explore the medina, harbor and Atlantic coast before returning to Casablanca.",
      },
  
      {
        question: "Is there a lot of driving during this 14-day Morocco itinerary?",
  
        answer:
          "The route covers a large part of Morocco, so some travel days include several hours of driving. However, the itinerary balances longer journeys with full days in Fes, Merzouga, Marrakech and Essaouira.",
      },
  
      {
        question: "Are local guides included in Fes or Marrakech?",
  
        answer:
          "Local city guides are not included by default unless they are part of your final arrangements. A local guide can be requested when planning your private tour.",
      },
  
      {
        question: "Can the 14-day Morocco tour be customized?",
  
        answer:
          "Yes. Because this is a private tour, parts of the itinerary can be adapted to your travel dates, preferred accommodation level, interests and onward travel plans.",
      },
  
      {
        question: "What should I bring for the Sahara Desert?",
  
        answer:
          "Bring comfortable clothing, walking shoes, sun protection and an extra layer for the evening. Desert temperatures can change noticeably between daytime and night.",
      },
  
      {
        question: "Is this 14-day Morocco tour suitable for families?",
  
        answer:
          "Families can request this private tour. If you are traveling with children, share their ages when contacting us so the route, accommodation and travel arrangements can be planned comfortably.",
      },
    ],
  
    // ─────────────────────────────
    // SEO
    // ─────────────────────────────
  
    seo: {
      title:
        "14-Day Morocco Tour from Casablanca | Moroccan Trip",
  
      description:
        "Take a private 14-day Morocco tour from Casablanca through Chefchaouen, Fes, the Sahara, Marrakech and Essaouira on a complete two-week journey.",
  
      // Internal SEO keyword map only.
      // Do not output these as a meta keywords tag.
      keywords: [
        "14 day morocco tour",
        "14 day morocco tour from casablanca",
        "14 days tour from casablanca",
        "morocco itinerary 14 days",
        "14 day morocco itinerary",
        "morocco 14 day itinerary",
        "morocco 2 week itinerary",
        "two week morocco itinerary",
        "two weeks in morocco itinerary",
        "2 week morocco itinerary",
        "2 weeks in morocco",
        "two weeks in morocco",
        "14 days grand morocco tours from casablanca",
      ],
    },
  
    // ─────────────────────────────
    // BOOKING
    // ─────────────────────────────
  
    booking: {
      available: true,
      minimumDays: 14,
      customizable: true,
      contactLabel: "Request a Quote",
    },
  },
  {
    id: "13",
  
    // ─────────────────────────────
    // BASIC INFORMATION
    // ─────────────────────────────
  
    slug: "12-day-morocco-tour",
  
    title: "12-Day Morocco Tour: Grand Morocco Adventure",
  
    shortDescription:
      "Discover Morocco on a private 12-day tour through Casablanca, Tangier, Chefchaouen, Fes, the Sahara Desert, Marrakech and Essaouira, with cities, mountains, desert landscapes and the Atlantic coast.",
  
    image: "/images/tours/12-day-morocco-tour.webp",
  
    badge: "Grand Morocco Adventure",
  
    featured: true,
  
    category: "Morocco Tours",
  
    // ─────────────────────────────
    // TOUR DETAILS
    // ─────────────────────────────
  
    duration: "12 Days / 11 Nights",
  
    nights: 11,
  
    tourType: "Private Tour",
  
    groupSize: "Up to 4 People",
  
    languages: ["English", "French"],
  
    departure: "Casablanca",
  
    arrival: "Casablanca",
  
    locations: [
      "Casablanca",
      "Rabat",
      "Tangier",
      "Chefchaouen",
      "Fes",
      "Ifrane",
      "Middle Atlas Mountains",
      "Midelt",
      "Ziz Valley",
      "Merzouga",
      "Erg Chebbi",
      "Sahara Desert",
      "Rissani",
      "Todra Gorges",
      "Dades Valley",
      "Ouarzazate",
      "Ait Ben Haddou",
      "High Atlas Mountains",
      "Marrakech",
      "Essaouira",
      "Casablanca",
    ],
  
    // ─────────────────────────────
    // PRICING
    // ─────────────────────────────
  
    // No fixed price.
    // The final quote depends on the number of travelers,
    // accommodation level and requested services.
  
    // ─────────────────────────────
    // HIGHLIGHTS
    // ─────────────────────────────
  
    highlights: [
      "Begin and finish your private Morocco journey in Casablanca",
      "Visit Rabat, Morocco's capital, on the way north",
      "Discover the coastal atmosphere of Tangier",
      "Spend a night in Chefchaouen and explore its blue-painted medina",
      "Enjoy two nights in Fes with a full day to discover the historic city",
      "Cross the Middle Atlas Mountains through forests and mountain scenery",
      "Travel through the Ziz Valley toward the Sahara Desert",
      "Reach Merzouga and the golden dunes of Erg Chebbi",
      "Spend time exploring the desert area before the camel trek",
      "Ride a camel across the Sahara dunes at sunset",
      "Spend a memorable night at a desert camp",
      "Walk through the impressive Todra Gorges",
      "Travel through the landscapes of the Dades Valley",
      "Visit the fortified village of Ait Ben Haddou",
      "Cross the High Atlas Mountains before arriving in Marrakech",
      "Spend a full day exploring Marrakech",
      "Finish the journey with time on the Atlantic coast in Essaouira",
      "Experience northern Morocco, the Sahara, Marrakech and the coast in one private tour",
    ],
  
    // ─────────────────────────────
    // OVERVIEW
    // ─────────────────────────────
  
    overview: `
      Experience several different sides of Morocco on this private 12-day
      Morocco tour, from northern cities and mountain landscapes to the Sahara
      Desert, Marrakech and the Atlantic coast.
  
      Your journey begins in Casablanca before traveling north through Rabat to
      Tangier. From the coast, continue toward Chefchaouen in the Rif Mountains,
      where blue-painted streets, small squares and a relaxed medina offer a very
      different atmosphere from Morocco's larger cities.
  
      The route then continues to Fes. Two nights in the city give you a full day
      to discover its historic medina, traditional markets, craft areas and old
      neighborhoods before traveling south.
  
      From Fes, cross the Middle Atlas Mountains through Ifrane and Midelt. The
      scenery changes throughout the day as green mountain landscapes gradually
      give way to the palm-filled Ziz Valley and the dry surroundings of
      southeastern Morocco.
  
      Arrive in Merzouga beside the Erg Chebbi dunes and spend the first night in
      the desert area. The following day gives you time to experience more of the
      Sahara before riding a camel across the dunes, watching the sunset and
      spending the night at a desert camp.
  
      Your 12-day Morocco itinerary then continues west through Rissani, Todra
      Gorges and the Dades Valley. Travel through southern Morocco toward
      Ouarzazate and visit Ait Ben Haddou before crossing the High Atlas Mountains
      to Marrakech.
  
      A full day in Marrakech allows you to explore the historic medina,
      traditional souks and other parts of the city without another long drive the
      same day.
  
      The final stage of the journey takes you to Essaouira. Spend time beside the
      Atlantic Ocean before returning to Casablanca on the last day.
  
      This Morocco itinerary of 12 days is designed for travelers who want a
      varied private journey without trying to move through every destination too
      quickly. It combines culture, northern Morocco, mountain scenery, the
      Sahara, Marrakech and the coast in one Grand Morocco Adventure.
    `,
  
    // ─────────────────────────────
    // ITINERARY
    // ─────────────────────────────
  
    itinerary: [
      {
        day: 1,
  
        title: "Arrival in Casablanca",
  
        description: `
          Your 12-day Morocco tour begins in Casablanca.
  
          Depending on your travel plans, you will be met at Casablanca airport
          or another agreed location in the city and transferred to your
          accommodation.
  
          The first day is kept relaxed so you can settle in after your journey
          and prepare for the days ahead.
  
          If your arrival time allows, enjoy some free time and discover part of
          Casablanca at your own pace.
  
          The city's modern atmosphere and Atlantic setting provide a simple
          introduction to Morocco before the road journey begins the following
          morning.
  
          Spend your first night in Casablanca.
        `,
  
        highlights: [
          "Arrival in Casablanca",
          "Private pickup according to your travel plans",
          "Transfer to your accommodation",
          "Free time depending on arrival time",
          "First introduction to Morocco",
          "Overnight stay in Casablanca",
        ],
      },
  
      {
        day: 2,
  
        title: "Casablanca – Rabat – Tangier",
  
        description: `
          After breakfast, leave Casablanca and begin traveling north.
  
          Stop in Rabat, Morocco's capital and one of the country's historic
          imperial cities.
  
          Take time to discover part of the city and enjoy its calmer atmosphere
          before continuing farther north.
  
          The journey then follows the route toward Tangier, where Morocco's
          northern landscape and coastal character begin to become more visible.
  
          Arrive in Tangier later in the day and check into your accommodation.
  
          Depending on timing, enjoy a relaxed evening and your first experience
          of this distinctive northern city.
  
          Spend the night in Tangier.
        `,
  
        highlights: [
          "Breakfast in Casablanca",
          "Travel north toward Rabat",
          "Discover part of Morocco's capital",
          "Continue through northern Morocco",
          "Arrive in Tangier",
          "Free time depending on arrival",
          "Overnight stay in Tangier",
        ],
      },
  
      {
        day: 3,
  
        title: "Tangier – Chefchaouen",
  
        description: `
          Enjoy some time in Tangier before continuing inland toward
          Chefchaouen.
  
          As the journey leaves the coast, the scenery changes and the road moves
          toward the landscapes of the Rif Mountains.
  
          Arrive in Chefchaouen and spend the afternoon discovering its compact
          medina.
  
          Walk through narrow blue-painted streets, small squares and traditional
          neighborhoods while enjoying the slower atmosphere of this mountain
          town.
  
          Staying overnight gives you more time to experience Chefchaouen instead
          of visiting only for a short stop.
  
          Enjoy a free evening and spend the night in Chefchaouen.
        `,
  
        highlights: [
          "Morning in Tangier",
          "Travel toward the Rif Mountains",
          "Arrive in Chefchaouen",
          "Explore the blue medina",
          "Walk through traditional streets",
          "Enjoy a relaxed evening",
          "Overnight stay in Chefchaouen",
        ],
      },
  
      {
        day: 4,
  
        title: "Chefchaouen – Fes",
  
        description: `
          Enjoy a relaxed morning in Chefchaouen before continuing toward Fes.
  
          Today's drive takes you from the mountain landscapes of northern Morocco
          toward one of the country's most important cultural destinations.
  
          Watch the scenery change as you travel through the countryside before
          reaching Fes later in the day.
  
          After arrival, check into your accommodation and enjoy some free time.
  
          You will stay in Fes for two nights, allowing you to dedicate the
          following day to exploring the city instead of leaving again the next
          morning.
  
          Spend the night in Fes.
        `,
  
        highlights: [
          "Morning in Chefchaouen",
          "Travel through northern Morocco",
          "Enjoy changing countryside",
          "Continue toward Fes",
          "Arrive in Fes",
          "Free evening",
          "First overnight stay in Fes",
        ],
      },
  
      {
        day: 5,
  
        title: "Full Day Exploring Fes",
  
        description: `
          Today is dedicated to Fes, one of Morocco's most historic and culturally
          important cities.
  
          Explore the old medina, where narrow streets connect traditional
          markets, workshops, residential neighborhoods and historic buildings.
  
          Fes is especially known for traditional Moroccan craftsmanship and
          architecture.
  
          Depending on your interests, spend time discovering craft areas,
          historic landmarks, viewpoints and different parts of the old city.
  
          Having a full day here means you can explore at a comfortable pace
          instead of treating Fes as a short stop between destinations.
  
          Return to your accommodation in the evening for a second night in Fes.
        `,
  
        highlights: [
          "Full day in Fes",
          "Explore the historic medina",
          "Walk through traditional markets",
          "Discover Moroccan craft areas",
          "See historic architecture",
          "Flexible sightseeing",
          "Second overnight stay in Fes",
        ],
      },
  
      {
        day: 6,
  
        title:
          "Fes – Ifrane – Middle Atlas Mountains – Midelt – Ziz Valley – Merzouga",
  
        description: `
          After breakfast, leave Fes and begin traveling south toward the Sahara
          Desert.
  
          Pass through Ifrane before continuing into the Middle Atlas Mountains.
  
          This part of Morocco offers forest scenery, cooler temperatures and
          mountain roads that feel very different from the desert landscapes you
          will experience later.
  
          Continue toward Midelt, where time can be allowed for a break before
          traveling farther south.
  
          As the journey continues, the landscape becomes increasingly dry.
  
          Travel through the Ziz Valley and enjoy views of palm groves surrounded
          by rocky mountain scenery.
  
          Continue toward Merzouga and arrive beside the Erg Chebbi dunes later
          in the day.
  
          Enjoy your first evening near the Sahara and spend the night at a hotel
          or riad in the Merzouga area.
        `,
  
        highlights: [
          "Breakfast in Fes",
          "Travel through Ifrane",
          "Cross the Middle Atlas Mountains",
          "Continue through Midelt",
          "Enjoy views across the Ziz Valley",
          "Travel toward southeastern Morocco",
          "Arrive in Merzouga",
          "See the Erg Chebbi dunes",
          "Overnight stay in Merzouga",
        ],
      },
  
      {
        day: 7,
  
        title:
          "Merzouga Desert Exploration – Camel Trek – Sahara Camp",
  
        description: `
          Today is dedicated to the Sahara and the landscapes surrounding
          Merzouga.
  
          After breakfast, spend time discovering more of the Erg Chebbi area
          instead of leaving the desert immediately.
  
          Depending on the day's arrangements, there can be stops around the dunes
          and opportunities to experience local communities and different desert
          landscapes.
  
          Later in the afternoon, prepare for your camel ride into the Sahara.
  
          Cross the golden dunes as the sunlight begins to soften and the desert
          becomes quieter.
  
          Stop to enjoy the views and watch the sunset before continuing toward
          your Sahara camp.
  
          After arriving at camp, enjoy dinner and spend the night surrounded by
          the dunes and open desert sky.
  
          For many travelers spending 12 days in Morocco, this is one of the most
          memorable experiences of the journey.
        `,
  
        highlights: [
          "Explore the Merzouga desert area",
          "Discover the landscapes around Erg Chebbi",
          "Experience the Sahara surroundings",
          "Camel ride across the dunes",
          "Watch the desert sunset",
          "Dinner at the Sahara camp",
          "Overnight stay in the desert",
        ],
      },
  
      {
        day: 8,
  
        title: "Merzouga – Rissani – Todra Gorges – Dades Valley",
  
        description: `
          Start the morning in the peaceful surroundings of the Sahara.
  
          If you wish, wake up early to watch the sunrise over the Erg Chebbi
          dunes before breakfast.
  
          Leave Merzouga and begin traveling west through southeastern Morocco.
  
          Pass through the Rissani area before continuing toward Tinghir and
          Todra Gorges.
  
          Take time to walk between the high canyon walls and enjoy a landscape
          completely different from the open dunes of Merzouga.
  
          After the visit, continue toward the Dades Valley.
  
          The road passes through mountain scenery, small communities and
          palm-filled areas before reaching the Dades region.
  
          Arrive later in the day for dinner and an overnight stay.
        `,
  
        highlights: [
          "Optional Sahara sunrise",
          "Breakfast before leaving Merzouga",
          "Travel through the Rissani area",
          "Continue toward Tinghir",
          "Visit Todra Gorges",
          "Walk through the canyon",
          "Travel toward the Dades Valley",
          "Dinner and overnight stay in Dades",
        ],
      },
  
      {
        day: 9,
  
        title:
          "Dades Valley – Ouarzazate – Ait Ben Haddou – High Atlas – Marrakech",
  
        description: `
          After breakfast, leave the Dades Valley and continue west through
          southern Morocco.
  
          Travel through changing valley and mountain scenery toward Ouarzazate.
  
          Continue to Ait Ben Haddou, one of Morocco's best-known fortified
          villages.
  
          Take time to explore the village and discover its traditional earthen
          architecture.
  
          After the visit, begin the journey across the High Atlas Mountains.
  
          The mountain road offers wide views, winding roads and traditional
          villages along the route.
  
          Stops can be made for photos, rest and meals depending on your schedule.
  
          Continue toward Marrakech and arrive later in the day.
  
          Check into your accommodation and enjoy a relaxed evening.
        `,
  
        highlights: [
          "Breakfast in the Dades Valley",
          "Travel through southern Morocco",
          "Continue toward Ouarzazate",
          "Visit Ait Ben Haddou",
          "Discover traditional earthen architecture",
          "Cross the High Atlas Mountains",
          "Enjoy panoramic mountain scenery",
          "Arrive in Marrakech",
          "Overnight stay in Marrakech",
        ],
      },
  
      {
        day: 10,
  
        title: "Full Day Exploring Marrakech",
  
        description: `
          Spend today discovering Marrakech.
  
          Explore the historic medina and walk through traditional souks filled
          with shops, workshops and local activity.
  
          Marrakech has a different atmosphere from Fes, Chefchaouen and the
          Sahara, adding another side of Morocco to your journey.
  
          Depending on your interests, spend time around historic areas, public
          squares, gardens or quieter neighborhoods outside the busiest parts of
          the medina.
  
          Because you are staying in Marrakech for a second night, the day can be
          enjoyed at a comfortable pace without a long transfer afterward.
  
          Enjoy the evening and return to your accommodation.
        `,
  
        highlights: [
          "Full day in Marrakech",
          "Explore the historic medina",
          "Walk through traditional souks",
          "Discover historic areas",
          "Enjoy flexible sightseeing",
          "Free time in the city",
          "Second overnight stay in Marrakech",
        ],
      },
  
      {
        day: 11,
  
        title: "Marrakech – Essaouira",
  
        description: `
          After breakfast, leave Marrakech and travel west toward Morocco's
          Atlantic coast.
  
          The landscape gradually changes as you move away from the interior and
          approach the ocean.
  
          Arrive in Essaouira, where the relaxed coastal atmosphere provides a
          strong contrast with Marrakech.
  
          Spend time exploring the old medina, walking around the harbor and
          enjoying views of the Atlantic.
  
          After the mountain roads and desert landscapes of the previous days,
          Essaouira offers a slower final stage of your Grand Morocco Adventure.
  
          Enjoy the afternoon and evening at your own pace.
  
          Spend the night in Essaouira.
        `,
  
        highlights: [
          "Breakfast in Marrakech",
          "Travel toward the Atlantic coast",
          "Arrive in Essaouira",
          "Explore the old medina",
          "Walk around the harbor",
          "Enjoy Atlantic scenery",
          "Free evening in Essaouira",
          "Overnight stay in Essaouira",
        ],
      },
  
      {
        day: 12,
  
        title: "Essaouira – Atlantic Coast – Casablanca",
  
        description: `
          Enjoy your final morning beside the Atlantic Ocean.
  
          Depending on your schedule, take a final walk through Essaouira before
          beginning the journey north toward Casablanca.
  
          Stops can be made during the drive for rest, meals and photos.
  
          The final journey completes a route that has taken you through northern
          Morocco, mountain regions, historic cities, the Sahara Desert and the
          Atlantic coast.
  
          Arrive in Casablanca later in the day.
  
          Your 12-day Morocco itinerary ends after traveling through Rabat,
          Tangier, Chefchaouen, Fes, the Middle Atlas Mountains, Merzouga, Todra
          Gorges, the Dades Valley, Marrakech and Essaouira.
  
          Final drop-off can be arranged according to your onward travel plans.
        `,
  
        highlights: [
          "Final morning in Essaouira",
          "Leave the Atlantic coast",
          "Travel north toward Casablanca",
          "Flexible stops during the journey",
          "Return to Casablanca",
          "Final drop-off according to your travel plans",
          "End of the 12-day Morocco tour",
        ],
      },
    ],
  
    // ─────────────────────────────
    // INCLUDED
    // ─────────────────────────────
  
    included: [
      "Private transportation throughout the 12-day tour",
      "English- or French-speaking driver",
      "Eleven nights of accommodation",
      "One night in Casablanca",
      "One night in Tangier",
      "One night in Chefchaouen",
      "Two nights in Fes",
      "One night at a hotel or riad in Merzouga",
      "One night at a Sahara desert camp",
      "One night in the Dades area",
      "Two nights in Marrakech",
      "One night in Essaouira",
      "Daily breakfasts",
      "Dinner in the Dades area",
      "Dinner at the Sahara desert camp",
      "Camel ride across the Erg Chebbi dunes",
      "Time to explore the Merzouga desert area",
      "Free time to explore the main destinations",
      "Flexible stops for photos and breaks during the journey",
      "Pickup and final drop-off in Casablanca",
    ],
  
    // ─────────────────────────────
    // NOT INCLUDED
    // ─────────────────────────────
  
    excluded: [
      "Lunches",
      "Dinners unless mentioned in the included section",
      "Drinks",
      "Entrance fees to monuments and attractions",
      "Local city guides unless requested",
      "Optional activities not mentioned in the itinerary",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities",
      "Any services not mentioned in the included section",
    ],
  
    // ─────────────────────────────
    // ACCOMMODATION
    // ─────────────────────────────
  
    accommodation: [
      {
        night: 1,
        location: "Casablanca",
        type: "Hotel",
      },
      {
        night: 2,
        location: "Tangier",
        type: "Hotel or Riad",
      },
      {
        night: 3,
        location: "Chefchaouen",
        type: "Hotel or Riad",
      },
      {
        night: 4,
        location: "Fes",
        type: "Hotel or Riad",
      },
      {
        night: 5,
        location: "Fes",
        type: "Hotel or Riad",
      },
      {
        night: 6,
        location: "Merzouga",
        type: "Hotel or Riad",
      },
      {
        night: 7,
        location: "Merzouga",
        type: "Sahara Desert Camp",
      },
      {
        night: 8,
        location: "Dades Valley",
        type: "Hotel or Riad",
      },
      {
        night: 9,
        location: "Marrakech",
        type: "Hotel or Riad",
      },
      {
        night: 10,
        location: "Marrakech",
        type: "Hotel or Riad",
      },
      {
        night: 11,
        location: "Essaouira",
        type: "Hotel or Riad",
      },
    ],
  
    // ─────────────────────────────
    // GALLERY
    // ─────────────────────────────
  
    gallery: [
      "/images/tours/12-day-morocco-tour.webp",
    ],
  
    // ─────────────────────────────
    // FAQ
    // ─────────────────────────────
  
    faqs: [
      {
        question: "Is the 12-day Morocco tour private?",
  
        answer:
          "Yes. This is a private tour for you and your travel group. You travel in a private vehicle with more flexibility for stops, breaks and the pace of the journey.",
      },
  
      {
        question: "Where does the 12-day Morocco tour start and finish?",
  
        answer:
          "The tour starts and finishes in Casablanca. It follows a circular route through northern Morocco, Fes, the Sahara Desert, Marrakech and Essaouira before returning to Casablanca.",
      },
  
      {
        question: "What can I see during 12 days in Morocco?",
  
        answer:
          "The itinerary includes Casablanca, Rabat, Tangier, Chefchaouen, Fes, the Middle Atlas Mountains, Ziz Valley, Merzouga, the Sahara Desert, Todra Gorges, Dades Valley, Ait Ben Haddou, Marrakech and Essaouira.",
      },
  
      {
        question: "Is 12 days enough to travel around Morocco?",
  
        answer:
          "Twelve days gives you time to experience several different regions of Morocco. This itinerary combines northern cities, mountain landscapes, the Sahara Desert, Marrakech and the Atlantic coast while including longer stays in important destinations.",
      },
  
      {
        question: "Does the 12-day Morocco itinerary include Chefchaouen?",
  
        answer:
          "Yes. You spend one night in Chefchaouen, giving you time to explore its blue-painted medina and enjoy the atmosphere of the Rif Mountains.",
      },
  
      {
        question: "Does the tour include Tangier?",
  
        answer:
          "Yes. Tangier is visited after Rabat and before traveling inland toward Chefchaouen.",
      },
  
      {
        question: "How much time do we spend in Fes?",
  
        answer:
          "The tour includes two nights in Fes and a full day dedicated to exploring the historic medina, traditional markets, craft areas and architecture of the city.",
      },
  
      {
        question: "Does the 12-day tour include the Sahara Desert?",
  
        answer:
          "Yes. The Sahara is one of the main parts of the journey. You spend two nights in the Merzouga area, including one night at a desert camp near the Erg Chebbi dunes.",
      },
  
      {
        question: "Do we have time to explore Merzouga?",
  
        answer:
          "Yes. You arrive in Merzouga on day six and spend the following day discovering the desert area before the camel trek and overnight stay at the Sahara camp.",
      },
  
      {
        question: "Is the camel ride in Merzouga included?",
  
        answer:
          "Yes. A camel ride across the Erg Chebbi dunes is included as part of the Sahara Desert experience.",
      },
  
      {
        question: "Do we spend a night in a Sahara desert camp?",
  
        answer:
          "Yes. The seventh night is spent at a desert camp near Merzouga after your camel ride across the Erg Chebbi dunes.",
      },
  
      {
        question: "Does the tour visit Todra Gorges?",
  
        answer:
          "Yes. Todra Gorges is visited on day eight while traveling from the Merzouga area toward the Dades Valley.",
      },
  
      {
        question: "Does the tour visit Ait Ben Haddou?",
  
        answer:
          "Yes. Ait Ben Haddou is visited on day nine before crossing the High Atlas Mountains toward Marrakech.",
      },
  
      {
        question: "How much time do we spend in Marrakech?",
  
        answer:
          "The itinerary includes two nights in Marrakech and a full day to explore the medina, traditional souks and other areas of the city at a comfortable pace.",
      },
  
      {
        question: "Does the 12-day Morocco tour include Essaouira?",
  
        answer:
          "Yes. You spend the final night in Essaouira, giving you time to explore the medina, harbor and Atlantic coast before returning to Casablanca.",
      },
  
      {
        question: "Is there a lot of driving during the 12-day itinerary?",
  
        answer:
          "The tour covers several regions of Morocco, so some days include several hours of driving. The itinerary balances the longer travel days with full days in Fes and Marrakech, extra time in Merzouga and sightseeing stops along the route.",
      },
  
      {
        question: "Are local guides included in Fes or Marrakech?",
  
        answer:
          "Local city guides are not included by default unless they are part of your final arrangements. A guide can be requested when planning the private tour.",
      },
  
      {
        question: "Can the 12-day Morocco tour be customized?",
  
        answer:
          "Yes. Because this is a private tour, parts of the itinerary can be adapted to your travel dates, interests, accommodation preferences and onward travel plans.",
      },
  
      {
        question: "What should I bring for the Sahara Desert?",
  
        answer:
          "Bring comfortable clothing, walking shoes, sun protection and an extra layer for the evening. Temperatures in the desert can change noticeably between daytime and night.",
      },
  
      {
        question: "Is this 12-day Morocco tour suitable for families?",
  
        answer:
          "Families can request this private tour. If you are traveling with children, share their ages when contacting us so the route, accommodation and travel arrangements can be planned comfortably.",
      },
    ],
  
    // ─────────────────────────────
    // SEO
    // ─────────────────────────────
  
    seo: {
      title:
        "12-Day Morocco Tour | Grand Morocco Adventure",
  
      description:
        "Take a private 12-day Morocco tour through Chefchaouen, Fes, Merzouga, the Sahara, Marrakech and Essaouira on a complete Grand Morocco Adventure.",
  
      // Internal SEO keyword map only.
      // Do not output these as a meta keywords tag.
      keywords: [
        "12 day morocco tour",
        "12 day morocco itinerary",
        "morocco itinerary 12 days",
        "morocco 12 day itinerary",
        "12 day itinerary morocco",
        "12 days morocco itinerary",
        "12 days in morocco",
        "morocco grand tour",
      ],
    },
  
    // ─────────────────────────────
    // BOOKING
    // ─────────────────────────────
  
    booking: {
      available: true,
      minimumDays: 12,
      customizable: true,
      contactLabel: "Request a Quote",
    },
  },
  {
    id: "14",
  
    // ─────────────────────────────
    // BASIC INFORMATION
    // ─────────────────────────────
  
    slug: "4-day-tangier-chefchaouen-tour",
  
    title: "4-Day Tangier to Chefchaouen Tour",
  
    shortDescription:
      "Explore northern Morocco on a private 4-day Tangier to Chefchaouen tour through the Rif Mountains, Fes, Meknes and Rabat before returning to Tangier.",
  
    image: "/images/tours/4-day-tangier-chefchaouen-tour.webp",
  
    badge: "Northern Morocco",
  
    featured: true,
  
    category: "Morocco Tours",
  
    // ─────────────────────────────
    // TOUR DETAILS
    // ─────────────────────────────
  
    duration: "4 Days / 3 Nights",
  
    nights: 3,
  
    tourType: "Private Tour",
  
    groupSize: "Up to 4 People",
  
    languages: ["English", "French"],
  
    departure: "Tangier",
  
    arrival: "Tangier",
  
    locations: [
      "Tangier",
      "Rif Mountains",
      "Chefchaouen",
      "Fes",
      "Meknes",
      "Rabat",
      "Tangier",
    ],
  
    // ─────────────────────────────
    // PRICING
    // ─────────────────────────────
  
    // No fixed price.
    // The final quote depends on the number of travelers,
    // accommodation level and requested services.
  
    // ─────────────────────────────
    // HIGHLIGHTS
    // ─────────────────────────────
  
    highlights: [
      "Begin and finish your private journey in Tangier",
      "Travel through the landscapes of the Rif Mountains",
      "Spend a night in Chefchaouen instead of making a rushed visit",
      "Walk through Chefchaouen's blue-painted medina",
      "Enjoy free time to explore the mountain town at your own pace",
      "Travel from Chefchaouen to the historic city of Fes",
      "Discover traditional streets, markets and architecture in Fes",
      "Visit Meknes, one of Morocco's historic imperial cities",
      "Continue to Rabat and discover Morocco's capital",
      "Experience several different sides of northern Morocco in four days",
      "Enjoy private transportation throughout the journey",
      "Travel with flexible stops for photos, breaks and sightseeing",
    ],
  
    // ─────────────────────────────
    // OVERVIEW
    // ─────────────────────────────
  
    overview: `
      Discover mountain landscapes, historic cities and traditional medinas on
      this private 4-day Tangier to Chefchaouen tour.
  
      The journey begins in Tangier and travels inland through northern Morocco
      toward the Rif Mountains. Your first destination is Chefchaouen, where
      blue-painted streets, small squares and a relaxed mountain atmosphere make
      the town very different from Morocco's larger cities.
  
      Instead of visiting Chefchaouen for only a few hours, you will spend the
      night there. This gives you more time to explore the blue medina, enjoy the
      evening atmosphere and experience the town at a slower pace.
  
      From Chefchaouen, continue south toward Fes. Discover one of Morocco's most
      historic cities, with traditional markets, old neighborhoods, workshops and
      architecture throughout the medina.
  
      The journey then continues through Meknes before reaching Rabat. These two
      cities add another side of Moroccan history and culture to the route before
      you travel north again toward Tangier.
  
      This Chefchaouen tour from Tangier is designed for travelers who want more
      than a simple transfer between the two cities. Over four days, you can
      experience the Rif Mountains, Chefchaouen, Fes, Meknes and Rabat while
      traveling in a private vehicle.
  
      If you are looking for tours from Tangier that combine mountain scenery and
      historic cities without continuing all the way to the Sahara, this route
      offers a varied journey through northern and central Morocco.
    `,
  
    // ─────────────────────────────
    // ITINERARY
    // ─────────────────────────────
  
    itinerary: [
      {
        day: 1,
  
        title: "Tangier – Rif Mountains – Chefchaouen",
  
        description: `
          Your 4-day Tangier to Chefchaouen tour begins with pickup in Tangier.
  
          Leave the coastal city and travel inland toward the Rif Mountains. As
          the journey continues, the surroundings become greener and more
          mountainous.
  
          Arrive in Chefchaouen and begin exploring the town at a relaxed pace.
  
          Walk through the blue-painted medina, where narrow streets connect small
          squares, local shops and traditional neighborhoods.
  
          Chefchaouen is one of northern Morocco's most distinctive destinations,
          and spending the night gives you more time to enjoy the town instead of
          returning to Tangier the same afternoon.
  
          After exploring the medina, enjoy a free evening and experience the
          quieter atmosphere of Chefchaouen after the busiest part of the day.
  
          Spend the first night of your journey in Chefchaouen.
        `,
  
        highlights: [
          "Pickup in Tangier",
          "Travel through northern Morocco",
          "Enjoy Rif Mountain scenery",
          "Arrive in Chefchaouen",
          "Explore the blue-painted medina",
          "Walk through traditional streets and squares",
          "Free evening in Chefchaouen",
          "Overnight stay in Chefchaouen",
        ],
      },
  
      {
        day: 2,
  
        title: "Chefchaouen – Fes",
  
        description: `
          Enjoy a relaxed morning in Chefchaouen before continuing your journey
          toward Fes.
  
          Take some final time to walk through the medina, enjoy the mountain
          views or explore streets you may have missed the previous afternoon.
  
          Leave Chefchaouen and travel south through the changing landscapes of
          northern Morocco.
  
          Arrive in Fes later in the day.
  
          Fes is one of Morocco's most historic cities and offers a very different
          experience from the smaller mountain town of Chefchaouen.
  
          Spend time discovering the old medina, where narrow streets lead between
          traditional markets, workshops, historic buildings and residential
          neighborhoods.
  
          Depending on your arrival time, sightseeing can be adapted to the pace
          of your journey.
  
          Spend the second night of the tour in Fes.
        `,
  
        highlights: [
          "Relaxed morning in Chefchaouen",
          "Final time in the blue medina",
          "Travel toward Fes",
          "Enjoy changing countryside along the route",
          "Arrive in Fes",
          "Discover the historic medina",
          "See traditional markets and architecture",
          "Overnight stay in Fes",
        ],
      },
  
      {
        day: 3,
  
        title: "Fes – Meknes – Rabat",
  
        description: `
          After breakfast, leave Fes and continue west toward Meknes.
  
          Meknes is one of Morocco's historic imperial cities and offers a quieter
          atmosphere than Fes.
  
          Spend time discovering some of the city's historic areas and traditional
          architecture before continuing the journey.
  
          From Meknes, travel toward Rabat.
  
          Rabat is Morocco's capital and combines historic neighborhoods with a
          more open and relaxed city atmosphere.
  
          Depending on your arrival time, explore part of Rabat and discover some
          of the areas that reflect the city's long history.
  
          This part of the journey adds two very different Moroccan cities to your
          Tangier and Chefchaouen route before the final return north.
  
          Check into your accommodation and spend the night in Rabat.
        `,
  
        highlights: [
          "Breakfast in Fes",
          "Travel toward Meknes",
          "Visit one of Morocco's imperial cities",
          "Discover historic architecture",
          "Continue toward Rabat",
          "Explore Morocco's capital",
          "Enjoy a relaxed evening",
          "Overnight stay in Rabat",
        ],
      },
  
      {
        day: 4,
  
        title: "Rabat – Tangier",
  
        description: `
          After breakfast, enjoy some additional time in Rabat before beginning
          the final journey north.
  
          Leave Morocco's capital and travel toward Tangier.
  
          The return drive completes a four-day route through several different
          landscapes and cities, from the Rif Mountains and the blue streets of
          Chefchaouen to the historic medinas of Fes and Meknes.
  
          Stops can be made during the journey for rest, meals and photos
          depending on your schedule.
  
          Arrive back in Tangier later in the day.
  
          Your private Tangier to Chefchaouen tour ends after four days of
          mountain scenery, historic cities and cultural experiences across
          Morocco.
  
          Final drop-off can be arranged in Tangier according to your onward
          travel plans.
        `,
  
        highlights: [
          "Breakfast in Rabat",
          "Final time in Morocco's capital",
          "Travel north toward Tangier",
          "Flexible stops along the route",
          "Return to Tangier",
          "Final drop-off according to your travel plans",
          "End of the 4-day journey",
        ],
      },
    ],
  
    // ─────────────────────────────
    // INCLUDED
    // ─────────────────────────────
  
    included: [
      "Private transportation throughout the four-day tour",
      "English- or French-speaking driver",
      "Three nights of accommodation",
      "One night in Chefchaouen",
      "One night in Fes",
      "One night in Rabat",
      "Daily breakfasts",
      "Free time to explore the main destinations",
      "Flexible stops for photos and breaks during the journey",
      "Pickup in Tangier",
      "Final drop-off in Tangier",
    ],
  
    // ─────────────────────────────
    // NOT INCLUDED
    // ─────────────────────────────
  
    excluded: [
      "Lunches and dinners",
      "Drinks",
      "Entrance fees to monuments and attractions",
      "Local city guides unless requested",
      "Optional activities",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities",
      "Any services not mentioned in the included section",
    ],
  
    // ─────────────────────────────
    // ACCOMMODATION
    // ─────────────────────────────
  
    accommodation: [
      {
        night: 1,
        location: "Chefchaouen",
        type: "Hotel or Riad",
      },
      {
        night: 2,
        location: "Fes",
        type: "Hotel or Riad",
      },
      {
        night: 3,
        location: "Rabat",
        type: "Hotel or Riad",
      },
    ],
  
    // ─────────────────────────────
    // GALLERY
    // ─────────────────────────────
  
    gallery: [
      "/images/tours/4-day-tangier-chefchaouen-tour.webp",
    ],
  
    // ─────────────────────────────
    // FAQ
    // ─────────────────────────────
  
    faqs: [
      {
        question: "Is the 4-day Tangier to Chefchaouen tour private?",
  
        answer:
          "Yes. This is a private tour for you and your travel group. You travel in a private vehicle with more flexibility for stops, breaks and the pace of the journey.",
      },
  
      {
        question: "Where does the Tangier to Chefchaouen tour start and finish?",
  
        answer:
          "The tour starts and finishes in Tangier. The route travels through Chefchaouen, Fes, Meknes and Rabat before returning to Tangier on the fourth day.",
      },
  
      {
        question: "How long is the Tangier to Chefchaouen tour?",
  
        answer:
          "The journey takes four days and three nights. You spend one night in Chefchaouen, one night in Fes and one night in Rabat.",
      },
  
      {
        question: "Do we spend a night in Chefchaouen?",
  
        answer:
          "Yes. The first night is spent in Chefchaouen, giving you more time to enjoy the blue medina and mountain atmosphere instead of returning to Tangier on the same day.",
      },
  
      {
        question: "How far is Chefchaouen from Tangier?",
  
        answer:
          "Chefchaouen is reached by road from Tangier through northern Morocco and the Rif Mountain region. Travel time can vary depending on traffic, road conditions and stops along the journey.",
      },
  
      {
        question: "What can we see in Chefchaouen?",
  
        answer:
          "You will have time to explore the blue-painted medina, walk through traditional streets and small squares, enjoy the mountain atmosphere and discover the town at your own pace.",
      },
  
      {
        question: "Does the tour include Fes?",
  
        answer:
          "Yes. After Chefchaouen, the journey continues to Fes, where you spend one night and have time to discover the historic medina and traditional areas of the city.",
      },
  
      {
        question: "Does the tour visit Meknes?",
  
        answer:
          "Yes. Meknes is visited on the third day while traveling from Fes toward Rabat.",
      },
  
      {
        question: "Does the tour include Rabat?",
  
        answer:
          "Yes. You travel to Rabat on the third day and spend the final night there before returning to Tangier.",
      },
  
      {
        question: "Is this tour different from a Chefchaouen day trip from Tangier?",
  
        answer:
          "Yes. This is a four-day journey rather than a same-day excursion. It includes an overnight stay in Chefchaouen and continues to Fes, Meknes and Rabat before returning to Tangier.",
      },
  
      {
        question: "Is this a good tour if I want to explore more than Chefchaouen?",
  
        answer:
          "Yes. The itinerary is designed for travelers who want to combine Chefchaouen with other important Moroccan cities instead of traveling only between Tangier and the blue city.",
      },
  
      {
        question: "Are local guides included in Chefchaouen or Fes?",
  
        answer:
          "Local city guides are not included by default unless they are part of your final arrangements. A guide can be requested when planning the tour.",
      },
  
      {
        question: "Are breakfasts included during the four-day tour?",
  
        answer:
          "Yes. Daily breakfasts are included with the accommodation during the journey.",
      },
  
      {
        question: "Can the Tangier to Chefchaouen tour be customized?",
  
        answer:
          "Yes. Because this is a private tour, parts of the route can be adapted to your travel dates, interests, accommodation preferences and onward travel plans.",
      },
  
      {
        question: "Can families take this private tour from Tangier?",
  
        answer:
          "Families can request this tour. If you are traveling with children, share their ages when contacting us so the driving schedule and accommodation can be planned comfortably.",
      },
    ],
  
    // ─────────────────────────────
    // SEO
    // ─────────────────────────────
  
    seo: {
      title:
        "4-Day Tangier to Chefchaouen Tour | Moroccan Trip",
  
      description:
        "Take a private 4-day Tangier to Chefchaouen tour through the Rif Mountains, Fes, Meknes and Rabat, with three nights and return to Tangier.",
  
      // Internal SEO keyword map only.
      // Do not output these as a meta keywords tag.
      keywords: [
        "tangier to chefchaouen tour",
        "tangier to chefchaouen",
        "tangier chefchaouen",
        "chefchaouen tour from tangier",
        "tours from tangier to chefchaouen",
        "tours from tangier",
        "morocco tours from tangier",
        "tangier tours",
      ],
    },
  
    // ─────────────────────────────
    // BOOKING
    // ─────────────────────────────
  
    booking: {
      available: true,
      minimumDays: 4,
      customizable: true,
      contactLabel: "Request a Quote",
    },
  },
  {
    id: "15",
  
    // ─────────────────────────────
    // BASIC INFORMATION
    // ─────────────────────────────
  
    slug: "6-day-tangier-marrakech-tour",
  
    title: "6-Day Tangier to Marrakech Tour via the Sahara",
  
    shortDescription:
      "Travel from Tangier to Marrakech on a private 6-day tour through Chefchaouen, Fes, the Middle Atlas Mountains, Merzouga and the Sahara Desert.",
  
    image: "/images/tours/6-day-tangier-marrakech-tour.webp",
  
    badge: "Tangier to Marrakech",
  
    featured: true,
  
    category: "Desert Tours",
  
    // ─────────────────────────────
    // TOUR DETAILS
    // ─────────────────────────────
  
    duration: "6 Days / 5 Nights",
  
    nights: 5,
  
    tourType: "Private Tour",
  
    groupSize: "Up to 4 People",
  
    languages: ["English", "French"],
  
    departure: "Tangier",
  
    arrival: "Marrakech",
  
    locations: [
      "Tangier",
      "Chefchaouen",
      "Fes",
      "Ifrane",
      "Middle Atlas Mountains",
      "Midelt",
      "Ziz Valley",
      "Merzouga",
      "Erg Chebbi",
      "Sahara Desert",
      "Rissani",
      "Todra Gorges",
      "Dades Valley",
      "Ouarzazate",
      "Ait Ben Haddou",
      "High Atlas Mountains",
      "Marrakech",
    ],
  
    // ─────────────────────────────
    // PRICING
    // ─────────────────────────────
  
    // No fixed price.
    // The final quote depends on the number of travelers,
    // accommodation level and requested services.
  
    // ─────────────────────────────
    // HIGHLIGHTS
    // ─────────────────────────────
  
    highlights: [
      "Begin your private journey in Tangier and finish in Marrakech",
      "Spend a night in Chefchaouen and explore the blue-painted medina",
      "Travel through the mountain landscapes of northern Morocco",
      "Discover the historic city of Fes",
      "Cross the Middle Atlas Mountains through Ifrane and Midelt",
      "Enjoy views across the palm-filled Ziz Valley",
      "Reach Merzouga and the golden dunes of Erg Chebbi",
      "Spend time exploring the Sahara surroundings",
      "Ride a camel across the desert dunes at sunset",
      "Spend a memorable night at a Sahara desert camp",
      "Travel through Rissani and southeastern Morocco",
      "Walk through the dramatic Todra Gorges",
      "Continue through the landscapes of the Dades Valley",
      "Visit the fortified village of Ait Ben Haddou",
      "Cross the High Atlas Mountains before arriving in Marrakech",
      "Experience northern cities, mountains and the Sahara in one private journey",
    ],
  
    // ─────────────────────────────
    // OVERVIEW
    // ─────────────────────────────
  
    overview: `
      Travel across Morocco from north to south on this private 6-day Tangier to
      Marrakech tour through Chefchaouen, Fes and the Sahara Desert.
  
      The journey begins in Tangier and travels into northern Morocco toward
      Chefchaouen. Spend your first night in the blue mountain town, giving you
      time to walk through its medina and enjoy the atmosphere of the Rif region
      without returning to Tangier the same day.
  
      From Chefchaouen, continue toward Fes and discover one of Morocco's most
      historic cities before the route turns south.
  
      The landscape changes completely after leaving Fes. Travel through Ifrane,
      the Middle Atlas Mountains and Midelt before reaching the Ziz Valley and
      continuing toward Merzouga.
  
      At the edge of the Erg Chebbi dunes, you will have time to experience the
      Sahara instead of simply passing through. Explore the desert surroundings,
      ride a camel across the dunes, watch the sunset and spend a night at a
      Sahara camp.
  
      After leaving Merzouga, travel west through Rissani, Todra Gorges and the
      landscapes of the Dades Valley before reaching Ouarzazate.
  
      On the final day, visit Ait Ben Haddou and cross the High Atlas Mountains
      before arriving in Marrakech.
  
      This Tangier to Marrakech tour is designed for travelers who want to combine
      northern Morocco with a real Sahara experience while moving between two of
      the country's major travel destinations.
  
      Instead of taking a direct journey from Tangier to Marrakech, the six-day
      route gives you time to experience Chefchaouen, Fes, the Middle Atlas,
      Merzouga and southern Morocco along the way.
    `,
  
    // ─────────────────────────────
    // ITINERARY
    // ─────────────────────────────
  
    itinerary: [
      {
        day: 1,
  
        title: "Tangier – Chefchaouen",
  
        description: `
          Your 6-day Tangier to Marrakech tour begins with pickup in Tangier.
  
          Leave the coastal city and travel inland through the landscapes of
          northern Morocco toward Chefchaouen.
  
          As the road approaches the Rif Mountains, the scenery becomes greener
          and more mountainous.
  
          Arrive in Chefchaouen and spend time exploring the blue-painted medina.
  
          Walk through narrow streets, small squares and traditional neighborhoods
          while enjoying the relaxed atmosphere of this mountain town.
  
          Because you are spending the night here, there is no need to rush your
          visit or return to Tangier in the afternoon.
  
          Enjoy a free evening and spend your first night in Chefchaouen.
        `,
  
        highlights: [
          "Pickup in Tangier",
          "Travel through northern Morocco",
          "Enjoy mountain scenery",
          "Arrive in Chefchaouen",
          "Explore the blue medina",
          "Walk through traditional streets and squares",
          "Free evening in Chefchaouen",
          "Overnight stay in Chefchaouen",
        ],
      },
  
      {
        day: 2,
  
        title: "Chefchaouen – Fes",
  
        description: `
          Enjoy a relaxed morning in Chefchaouen before continuing toward Fes.
  
          Take some final time to explore the medina, enjoy the mountain setting
          or walk through streets you may have missed the previous afternoon.
  
          Leave Chefchaouen and travel south through the changing countryside of
          northern Morocco.
  
          Arrive in Fes later in the day.
  
          Fes offers a completely different experience from Chefchaouen. Its old
          medina is known for narrow streets, traditional markets, workshops and
          historic architecture.
  
          Depending on your arrival time, enjoy an introduction to the city and
          explore some of its historic areas.
  
          Spend the second night of your journey in Fes.
        `,
  
        highlights: [
          "Morning in Chefchaouen",
          "Final time in the blue medina",
          "Travel toward Fes",
          "Enjoy changing northern landscapes",
          "Arrive in Fes",
          "Discover the historic city",
          "Explore traditional streets and markets",
          "Overnight stay in Fes",
        ],
      },
  
      {
        day: 3,
  
        title:
          "Fes – Ifrane – Middle Atlas Mountains – Midelt – Ziz Valley – Merzouga",
  
        description: `
          After breakfast, leave Fes and begin the journey south toward the
          Sahara Desert.
  
          Travel through Ifrane before entering the Middle Atlas Mountains.
  
          The forests, mountain roads and cooler landscapes of this region create
          a strong contrast with the desert scenery you will experience later in
          the day.
  
          Continue toward Midelt, where a break can be made before traveling
          farther south.
  
          As the route continues, the scenery becomes increasingly dry.
  
          Travel through the Ziz Valley and enjoy views of palm groves surrounded
          by rocky mountains.
  
          Continue toward Merzouga and arrive beside the golden Erg Chebbi dunes
          later in the day.
  
          Spend the night at a hotel or riad in the Merzouga area and prepare for
          your full Sahara experience the following day.
        `,
  
        highlights: [
          "Breakfast in Fes",
          "Travel through Ifrane",
          "Cross the Middle Atlas Mountains",
          "Continue through Midelt",
          "Enjoy views across the Ziz Valley",
          "Travel toward the Sahara",
          "Arrive in Merzouga",
          "See the Erg Chebbi dunes",
          "Overnight stay in Merzouga",
        ],
      },
  
      {
        day: 4,
  
        title:
          "Merzouga Desert Exploration – Camel Trek – Sahara Camp",
  
        description: `
          Today is dedicated to the Merzouga desert and the landscapes surrounding
          Erg Chebbi.
  
          After breakfast, spend time discovering more of the Sahara area instead
          of leaving Merzouga immediately.
  
          Depending on the day's arrangements, you can explore different desert
          landscapes and learn more about life around this part of southeastern
          Morocco.
  
          Later in the afternoon, prepare for your camel ride into the Sahara.
  
          Cross the golden dunes of Erg Chebbi as the sun moves lower over the
          desert.
  
          Stop along the way to enjoy the views and watch the sunset before
          continuing toward your camp.
  
          After arriving at the Sahara camp, enjoy dinner and spend the night
          surrounded by the peaceful dunes and open desert sky.
  
          This desert experience is one of the main reasons to choose a Tangier
          to Marrakech journey that travels through Merzouga instead of taking a
          direct route between the two cities.
        `,
  
        highlights: [
          "Explore the Merzouga desert area",
          "Discover the landscapes around Erg Chebbi",
          "Experience the Sahara surroundings",
          "Camel ride across the dunes",
          "Watch the Sahara sunset",
          "Dinner at the desert camp",
          "Overnight stay in the Sahara",
        ],
      },
  
      {
        day: 5,
  
        title:
          "Merzouga – Rissani – Todra Gorges – Dades Valley – Ouarzazate",
  
        description: `
          Start the morning in the peaceful surroundings of the Sahara.
  
          If you wish, wake up early to watch the sunrise over the Erg Chebbi
          dunes before breakfast.
  
          Leave Merzouga and begin traveling west through southeastern Morocco.
  
          Pass through the Rissani area before continuing toward Tinghir and
          Todra Gorges.
  
          Take time to walk between the high canyon walls and enjoy the dramatic
          natural scenery.
  
          After Todra Gorges, continue through the landscapes of the Dades region.
  
          The journey passes rocky mountains, valleys, small communities and
          traditional scenery as you travel farther west.
  
          Continue toward Ouarzazate and arrive later in the day.
  
          Spend the fifth and final night of the tour in Ouarzazate.
        `,
  
        highlights: [
          "Optional sunrise over Erg Chebbi",
          "Breakfast before leaving Merzouga",
          "Travel through the Rissani area",
          "Visit Todra Gorges",
          "Walk through the canyon",
          "Travel through the Dades region",
          "Continue through southern Morocco",
          "Arrive in Ouarzazate",
          "Overnight stay in Ouarzazate",
        ],
      },
  
      {
        day: 6,
  
        title:
          "Ouarzazate – Ait Ben Haddou – High Atlas Mountains – Marrakech",
  
        description: `
          After breakfast in Ouarzazate, begin the final day of your journey to
          Marrakech.
  
          Travel toward Ait Ben Haddou, one of southern Morocco's best-known
          fortified villages.
  
          Take time to explore the village and discover its traditional earthen
          architecture before continuing toward the High Atlas Mountains.
  
          Cross the mountain range along a scenic road surrounded by valleys,
          traditional villages and wide views.
  
          Stops can be made along the journey for photos, rest and meals depending
          on your schedule.
  
          As you approach Marrakech, the mountain landscapes gradually give way to
          the plains surrounding the city.
  
          Arrive in Marrakech later in the day.
  
          Your 6-day Tangier to Marrakech tour ends after a journey through
          Chefchaouen, Fes, the Middle Atlas Mountains, Merzouga, the Sahara Desert
          and southern Morocco.
  
          Final drop-off can be arranged in Marrakech according to your onward
          travel plans.
        `,
  
        highlights: [
          "Breakfast in Ouarzazate",
          "Travel toward Ait Ben Haddou",
          "Visit the historic fortified village",
          "Discover traditional earthen architecture",
          "Cross the High Atlas Mountains",
          "Enjoy panoramic mountain scenery",
          "Arrive in Marrakech",
          "Final drop-off in Marrakech",
          "End of the six-day journey",
        ],
      },
    ],
  
    // ─────────────────────────────
    // INCLUDED
    // ─────────────────────────────
  
    included: [
      "Private transportation from Tangier to Marrakech",
      "English- or French-speaking driver",
      "Five nights of accommodation",
      "One night in Chefchaouen",
      "One night in Fes",
      "One night at a hotel or riad in Merzouga",
      "One night at a Sahara desert camp",
      "One night in Ouarzazate",
      "Daily breakfasts",
      "Dinner at the Sahara desert camp",
      "Camel ride across the Erg Chebbi dunes",
      "Time to explore the Merzouga desert area",
      "Free time to explore the main sightseeing stops",
      "Flexible stops for photos and breaks during the journey",
      "Pickup in Tangier",
      "Final drop-off in Marrakech",
    ],
  
    // ─────────────────────────────
    // NOT INCLUDED
    // ─────────────────────────────
  
    excluded: [
      "Lunches",
      "Dinners unless mentioned in the included section",
      "Drinks",
      "Entrance fees to monuments and attractions",
      "Local city guides unless requested",
      "Optional activities not mentioned in the itinerary",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities",
      "Any services not mentioned in the included section",
    ],
  
    // ─────────────────────────────
    // ACCOMMODATION
    // ─────────────────────────────
  
    accommodation: [
      {
        night: 1,
        location: "Chefchaouen",
        type: "Hotel or Riad",
      },
      {
        night: 2,
        location: "Fes",
        type: "Hotel or Riad",
      },
      {
        night: 3,
        location: "Merzouga",
        type: "Hotel or Riad",
      },
      {
        night: 4,
        location: "Merzouga",
        type: "Sahara Desert Camp",
      },
      {
        night: 5,
        location: "Ouarzazate",
        type: "Hotel or Riad",
      },
    ],
  
    // ─────────────────────────────
    // GALLERY
    // ─────────────────────────────
  
    gallery: [
      "/images/tours/6-day-tangier-marrakech-tour.webp",
    ],
  
    // ─────────────────────────────
    // FAQ
    // ─────────────────────────────
  
    faqs: [
      {
        question: "Is the 6-day Tangier to Marrakech tour private?",
  
        answer:
          "Yes. This is a private tour for you and your travel group. You travel in a private vehicle with more flexibility for stops, breaks and the pace of the journey.",
      },
  
      {
        question: "Where does the tour start and finish?",
  
        answer:
          "The tour starts in Tangier and finishes in Marrakech. This makes it a convenient option for travelers who want to cross Morocco while visiting Chefchaouen, Fes and the Sahara along the way.",
      },
  
      {
        question: "What is included in the Tangier to Marrakech tour?",
  
        answer:
          "The tour includes private transportation, five nights of accommodation, daily breakfasts, a camel ride in Merzouga, a Sahara desert camp experience and flexible sightseeing stops along the route.",
      },
  
      {
        question: "Does the tour include Chefchaouen?",
  
        answer:
          "Yes. The first night is spent in Chefchaouen, giving you time to explore the blue-painted medina before continuing toward Fes.",
      },
  
      {
        question: "Does the Tangier to Marrakech tour include Fes?",
  
        answer:
          "Yes. You travel from Chefchaouen to Fes on the second day and spend one night in the city before beginning the journey south toward the Sahara.",
      },
  
      {
        question: "Does the tour include the Sahara Desert?",
  
        answer:
          "Yes. The Sahara is one of the main parts of this itinerary. You spend two nights in the Merzouga area, including one night at a desert camp near the Erg Chebbi dunes.",
      },
  
      {
        question: "Do we have time to explore Merzouga?",
  
        answer:
          "Yes. You arrive in Merzouga on day three and spend day four experiencing the desert area before the camel ride and overnight stay at the Sahara camp.",
      },
  
      {
        question: "Is the camel ride in Merzouga included?",
  
        answer:
          "Yes. A camel ride across the Erg Chebbi dunes is included as part of your Sahara Desert experience.",
      },
  
      {
        question: "Do we spend a night in a Sahara desert camp?",
  
        answer:
          "Yes. The fourth night of the tour is spent at a Sahara desert camp near Merzouga after your camel ride across the dunes.",
      },
  
      {
        question: "Does the tour visit Todra Gorges?",
  
        answer:
          "Yes. Todra Gorges is included on day five while traveling from Merzouga toward Ouarzazate.",
      },
  
      {
        question: "Does the tour visit Ait Ben Haddou?",
  
        answer:
          "Yes. Ait Ben Haddou is visited on the final day before crossing the High Atlas Mountains toward Marrakech.",
      },
  
      {
        question: "What is the difference between this tour and traveling directly from Tangier to Marrakech?",
  
        answer:
          "This six-day route is designed as a complete journey rather than a direct transfer. It includes Chefchaouen, Fes, the Middle Atlas Mountains, Merzouga, the Sahara Desert, Todra Gorges, Ouarzazate and Ait Ben Haddou before reaching Marrakech.",
      },
  
      {
        question: "Is there a lot of driving during the six-day journey?",
  
        answer:
          "The route covers a large distance from northern Morocco to Marrakech, so some days include several hours of driving. The journey is divided with overnight stays, sightseeing stops and breaks along the way.",
      },
  
      {
        question: "Can the Tangier to Marrakech tour be customized?",
  
        answer:
          "Yes. Because this is a private tour, parts of the itinerary can be adapted to your travel dates, interests, accommodation preferences and onward travel plans.",
      },
  
      {
        question: "Are local guides included in Chefchaouen or Fes?",
  
        answer:
          "Local city guides are not included by default unless they are part of your final arrangements. A guide can be requested when planning the private tour.",
      },
  
      {
        question: "What should I bring for the Sahara Desert?",
  
        answer:
          "Bring comfortable clothing, walking shoes, sun protection and an extra layer for the evening. Desert temperatures can change noticeably between daytime and night.",
      },
  
      {
        question: "Can families take this Tangier to Marrakech tour?",
  
        answer:
          "Families can request this private tour. If you are traveling with children, share their ages when contacting us so the driving schedule, accommodation and desert arrangements can be planned comfortably.",
      },
    ],
  
    // ─────────────────────────────
    // SEO
    // ─────────────────────────────
  
    seo: {
      title:
        "6-Day Tangier to Marrakech Tour | Moroccan Trip",
  
      description:
        "Take a private 6-day Tangier to Marrakech tour through Chefchaouen, Fes and Merzouga, with a camel ride, Sahara camp and Ait Ben Haddou.",
  
      // Internal SEO keyword map only.
      // These targets are intentionally different from the
      // 4-day Tangier to Chefchaouen tour keyword cluster.
      keywords: [
        "tangier to marrakech tour",
        "tangier to marrakech",
        "6 days tour from tangier to marrakech",
        "tours from tangier to marrakech",
        "desert tours from tangier",
        "sahara desert tour from tangier",
        "tangier to merzouga",
        "tangier to marrakech itinerary",
        "tangier desert tour",
      ],
    },
  
    // ─────────────────────────────
    // BOOKING
    // ─────────────────────────────
  
    booking: {
      available: true,
      minimumDays: 6,
      customizable: true,
      contactLabel: "Request a Quote",
    },
  },
  {
    id: "16",
  
    // ─────────────────────────────
    // BASIC INFORMATION
    // ─────────────────────────────
  
    slug: "7-day-tangier-fes-sahara-tour",
  
    title: "7-Day Tangier, Fes & Sahara Desert Tour",
  
    shortDescription:
      "Travel through Morocco on a private 7-day journey from Tangier, with Chefchaouen, a full day in Fes, the Sahara dunes of Merzouga and the High Atlas before finishing in Marrakech.",
  
    image: "/images/tours/7-day-tangier-fes-sahara-tour.webp",
  
    badge: "Fes & Sahara Journey",
  
    featured: true,
  
    category: "Desert Tours",
  
    // ─────────────────────────────
    // TOUR DETAILS
    // ─────────────────────────────
  
    duration: "7 Days / 6 Nights",
  
    nights: 6,
  
    tourType: "Private Tour",
  
    groupSize: "Up to 4 People",
  
    languages: ["English", "French"],
  
    departure: "Tangier",
  
    arrival: "Marrakech",
  
    locations: [
      "Tangier",
      "Chefchaouen",
      "Fes",
      "Ifrane",
      "Middle Atlas Mountains",
      "Midelt",
      "Ziz Valley",
      "Merzouga",
      "Erg Chebbi",
      "Sahara Desert",
      "Rissani",
      "Todra Gorges",
      "Dades Valley",
      "Ouarzazate",
      "Ait Ben Haddou",
      "High Atlas Mountains",
      "Marrakech",
    ],
  
    // ─────────────────────────────
    // PRICING
    // ─────────────────────────────
  
    // No fixed price.
    // The final quote depends on the number of travelers,
    // accommodation level and requested services.
  
    // ─────────────────────────────
    // HIGHLIGHTS
    // ─────────────────────────────
  
    highlights: [
      "Begin your private journey in Tangier and travel across Morocco to Marrakech",
      "Spend a night in Chefchaouen and explore its blue-painted medina",
      "Enjoy the mountain landscapes of northern Morocco",
      "Spend two nights in Fes with a full day dedicated to the historic city",
      "Walk through traditional markets and craft areas in the Fes medina",
      "Cross the Middle Atlas Mountains through Ifrane and Midelt",
      "Travel through the palm-filled Ziz Valley toward the Sahara",
      "Reach Merzouga and the golden dunes of Erg Chebbi",
      "Spend time discovering the desert surroundings before the camel trek",
      "Ride a camel across the Sahara dunes at sunset",
      "Spend a memorable night at a desert camp",
      "Travel through Rissani and the landscapes of southeastern Morocco",
      "Walk between the high canyon walls of Todra Gorges",
      "Continue through the Dades Valley toward Ouarzazate",
      "Visit the historic fortified village of Ait Ben Haddou",
      "Cross the High Atlas Mountains before arriving in Marrakech",
      "Enjoy a slower cultural and desert journey than shorter routes from Tangier",
    ],
  
    // ─────────────────────────────
    // OVERVIEW
    // ─────────────────────────────
  
    overview: `
      Discover northern Morocco, historic Fes and the Sahara Desert on this
      private seven-day journey from Tangier.
  
      The tour begins in Tangier and travels toward Chefchaouen in the Rif
      Mountains. Spend the first night in the blue city, giving you time to walk
      through its medina, discover small squares and enjoy the quieter evening
      atmosphere.
  
      From Chefchaouen, continue south toward Fes. Unlike shorter journeys that
      pass through the city quickly, this itinerary includes two nights in Fes
      and a full day dedicated to exploring its historic medina, traditional
      markets, workshops and architecture.
  
      After Fes, the route turns toward the Sahara. Travel through Ifrane and the
      Middle Atlas Mountains before continuing through Midelt and the Ziz Valley.
      The scenery gradually changes from forests and mountain roads to dry valleys
      and the desert landscapes surrounding Merzouga.
  
      Spend the first night in the Merzouga area before enjoying more time around
      the Erg Chebbi dunes. Later, ride a camel into the Sahara, watch the sunset
      and spend the night at a desert camp.
  
      The journey then continues west through Rissani, Todra Gorges and the Dades
      region before reaching Ouarzazate.
  
      On the final day, visit Ait Ben Haddou and cross the High Atlas Mountains
      before arriving in Marrakech.
  
      This Tangier, Fes and Sahara tour is a good choice for travelers who want
      more time for culture before reaching the desert. The additional day in Fes
      creates a more balanced journey while still including Chefchaouen, Merzouga,
      the Sahara and the landscapes of southern Morocco.
    `,
  
    // ─────────────────────────────
    // ITINERARY
    // ─────────────────────────────
  
    itinerary: [
      {
        day: 1,
  
        title: "Tangier – Chefchaouen",
  
        description: `
          Your seven-day journey begins with pickup in Tangier.
  
          Leave the coast and travel inland through the landscapes of northern
          Morocco toward the Rif Mountains.
  
          As you approach Chefchaouen, the surroundings become greener and more
          mountainous.
  
          Arrive in the blue city and begin exploring its compact medina.
  
          Walk through narrow blue-painted streets, small squares and traditional
          neighborhoods while enjoying the relaxed mountain atmosphere.
  
          Because you are spending the night in Chefchaouen, there is no need to
          rush back to Tangier in the afternoon.
  
          Enjoy some free time in the evening and spend your first night in
          Chefchaouen.
        `,
  
        highlights: [
          "Pickup in Tangier",
          "Travel through northern Morocco",
          "Enjoy Rif Mountain scenery",
          "Arrive in Chefchaouen",
          "Explore the blue medina",
          "Walk through traditional streets and squares",
          "Free evening in Chefchaouen",
          "Overnight stay in Chefchaouen",
        ],
      },
  
      {
        day: 2,
  
        title: "Chefchaouen – Fes",
  
        description: `
          Enjoy a relaxed morning in Chefchaouen before continuing toward Fes.
  
          Take some final time to walk through the medina or enjoy the mountain
          views before leaving the town.
  
          Travel south through the countryside of northern Morocco as the
          landscape gradually changes along the route.
  
          Arrive in Fes later in the day.
  
          After checking into your accommodation, enjoy a first introduction to
          one of Morocco's most historic cities.
  
          Depending on your arrival time, you can explore part of the city or
          simply enjoy a relaxed evening before the full sightseeing day ahead.
  
          Spend the first of two nights in Fes.
        `,
  
        highlights: [
          "Relaxed morning in Chefchaouen",
          "Final time in the blue medina",
          "Travel through northern Morocco",
          "Continue toward Fes",
          "Arrive in the historic city",
          "Free time depending on arrival",
          "First overnight stay in Fes",
        ],
      },
  
      {
        day: 3,
  
        title: "Full Day Exploring Fes",
  
        description: `
          Today is dedicated to discovering Fes at a comfortable pace.
  
          Explore the historic medina, where narrow streets connect traditional
          markets, workshops, residential neighborhoods and old buildings.
  
          Fes is known for its craftsmanship and long cultural history, making it
          one of the most important stops on this journey.
  
          Spend time discovering traditional craft areas, historic architecture
          and different parts of the old city.
  
          Depending on your interests, the day can also include viewpoints and
          quieter areas outside the busiest streets of the medina.
  
          Having a full day in Fes is one of the main differences between this
          seven-day itinerary and shorter routes through northern Morocco and the
          Sahara.
  
          Return to your accommodation for a second night in Fes.
        `,
  
        highlights: [
          "Full day dedicated to Fes",
          "Explore the historic medina",
          "Walk through traditional markets",
          "Discover local craft areas",
          "See historic architecture",
          "Flexible sightseeing according to your interests",
          "Second overnight stay in Fes",
        ],
      },
  
      {
        day: 4,
  
        title:
          "Fes – Ifrane – Middle Atlas Mountains – Midelt – Ziz Valley – Merzouga",
  
        description: `
          After breakfast, leave Fes and begin traveling south toward the Sahara.
  
          Pass through Ifrane before entering the Middle Atlas Mountains.
  
          Forests, mountain roads and cooler scenery make this part of Morocco
          very different from the desert landscapes that appear later in the day.
  
          Continue toward Midelt, where a break can be made before traveling
          farther south.
  
          As the journey continues, the surroundings gradually become drier.
  
          Travel through the Ziz Valley and enjoy views of palm groves stretching
          between rocky mountains.
  
          Continue toward Merzouga at the edge of the Erg Chebbi dunes.
  
          Arrive later in the day and enjoy your first views of the Sahara.
  
          Spend the night at a hotel or riad in the Merzouga area.
        `,
  
        highlights: [
          "Breakfast in Fes",
          "Travel through Ifrane",
          "Cross the Middle Atlas Mountains",
          "Continue through Midelt",
          "Enjoy views across the Ziz Valley",
          "Travel toward southeastern Morocco",
          "Arrive in Merzouga",
          "See the Erg Chebbi dunes",
          "Overnight stay in Merzouga",
        ],
      },
  
      {
        day: 5,
  
        title:
          "Merzouga Desert Exploration – Camel Trek – Sahara Camp",
  
        description: `
          Today gives you more time to experience the landscapes around Merzouga
          and Erg Chebbi.
  
          After breakfast, explore the desert surroundings instead of immediately
          continuing toward another destination.
  
          Depending on the day's arrangements, you can discover different areas
          around the dunes and experience more of life near the Sahara.
  
          Later in the afternoon, prepare for your camel trek.
  
          Ride across the golden dunes as the sun begins to move lower over the
          desert.
  
          Stop along the way to enjoy the views and watch the sunset before
          continuing toward your Sahara camp.
  
          After arriving at camp, enjoy dinner and spend the night surrounded by
          the dunes and open desert sky.
  
          The slower pace of today gives you time to experience the Sahara beyond
          the road journey itself.
        `,
  
        highlights: [
          "Explore the Merzouga desert area",
          "Discover the landscapes around Erg Chebbi",
          "Experience the Sahara surroundings",
          "Camel ride across the dunes",
          "Watch the Sahara sunset",
          "Dinner at the desert camp",
          "Overnight stay in the Sahara",
        ],
      },
  
      {
        day: 6,
  
        title:
          "Merzouga – Rissani – Todra Gorges – Dades Valley – Ouarzazate",
  
        description: `
          Start your morning in the peaceful surroundings of the Sahara.
  
          If you wish, wake up early to watch the sunrise over the Erg Chebbi
          dunes before breakfast.
  
          Leave Merzouga and begin traveling west through southeastern Morocco.
  
          Pass through the Rissani area before continuing toward Tinghir and
          Todra Gorges.
  
          Take time to walk between the high canyon walls and enjoy the dramatic
          natural landscape.
  
          After the visit, continue through the Dades region.
  
          The road passes rocky mountains, valleys and traditional communities as
          you travel farther west.
  
          Continue toward Ouarzazate and arrive later in the day.
  
          Spend the final night of the journey in Ouarzazate.
        `,
  
        highlights: [
          "Optional sunrise over Erg Chebbi",
          "Breakfast before leaving the Sahara",
          "Travel through the Rissani area",
          "Visit Todra Gorges",
          "Walk between the canyon walls",
          "Travel through the Dades region",
          "Continue through southern Morocco",
          "Arrive in Ouarzazate",
          "Overnight stay in Ouarzazate",
        ],
      },
  
      {
        day: 7,
  
        title:
          "Ouarzazate – Ait Ben Haddou – High Atlas Mountains – Marrakech",
  
        description: `
          After breakfast, begin the final stage of your journey.
  
          Leave Ouarzazate and travel toward Ait Ben Haddou, one of southern
          Morocco's best-known fortified villages.
  
          Take time to explore the village and discover its traditional earthen
          architecture before continuing toward the High Atlas Mountains.
  
          Cross the mountain range along a scenic road surrounded by valleys,
          small villages and panoramic views.
  
          Stops can be made during the journey for photos, rest and meals
          depending on your schedule.
  
          As you travel toward Marrakech, the mountain landscapes gradually give
          way to the plains surrounding the city.
  
          Arrive in Marrakech later in the day.
  
          Your seven-day Tangier, Fes and Sahara journey ends after experiencing
          Chefchaouen, historic Fes, the Middle Atlas Mountains, Merzouga, the
          Sahara Desert and southern Morocco.
  
          Final drop-off can be arranged in Marrakech according to your onward
          travel plans.
        `,
  
        highlights: [
          "Breakfast in Ouarzazate",
          "Travel toward Ait Ben Haddou",
          "Visit the historic fortified village",
          "Discover traditional earthen architecture",
          "Cross the High Atlas Mountains",
          "Enjoy panoramic mountain scenery",
          "Arrive in Marrakech",
          "Final drop-off in Marrakech",
          "End of the seven-day journey",
        ],
      },
    ],
  
    // ─────────────────────────────
    // INCLUDED
    // ─────────────────────────────
  
    included: [
      "Private transportation throughout the seven-day journey",
      "English- or French-speaking driver",
      "Six nights of accommodation",
      "One night in Chefchaouen",
      "Two nights in Fes",
      "One night at a hotel or riad in Merzouga",
      "One night at a Sahara desert camp",
      "One night in Ouarzazate",
      "Daily breakfasts",
      "Dinner at the Sahara desert camp",
      "Camel ride across the Erg Chebbi dunes",
      "Time to explore the Merzouga desert area",
      "Full day to explore Fes",
      "Free time at the main sightseeing stops",
      "Flexible stops for photos and breaks during the journey",
      "Pickup in Tangier",
      "Final drop-off in Marrakech",
    ],
  
    // ─────────────────────────────
    // NOT INCLUDED
    // ─────────────────────────────
  
    excluded: [
      "Lunches",
      "Dinners unless mentioned in the included section",
      "Drinks",
      "Entrance fees to monuments and attractions",
      "Local city guides unless requested",
      "Optional activities not mentioned in the itinerary",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities",
      "Any services not mentioned in the included section",
    ],
  
    // ─────────────────────────────
    // ACCOMMODATION
    // ─────────────────────────────
  
    accommodation: [
      {
        night: 1,
        location: "Chefchaouen",
        type: "Hotel or Riad",
      },
      {
        night: 2,
        location: "Fes",
        type: "Hotel or Riad",
      },
      {
        night: 3,
        location: "Fes",
        type: "Hotel or Riad",
      },
      {
        night: 4,
        location: "Merzouga",
        type: "Hotel or Riad",
      },
      {
        night: 5,
        location: "Merzouga",
        type: "Sahara Desert Camp",
      },
      {
        night: 6,
        location: "Ouarzazate",
        type: "Hotel or Riad",
      },
    ],
  
    // ─────────────────────────────
    // GALLERY
    // ─────────────────────────────
  
    gallery: [
      "/images/tours/7-day-tangier-fes-sahara-tour.webp",
    ],
  
    // ─────────────────────────────
    // FAQ
    // ─────────────────────────────
  
    faqs: [
      {
        question: "Is the 7-day Tangier, Fes and Sahara tour private?",
  
        answer:
          "Yes. This is a private journey for you and your travel group, with private transportation and more flexibility for stops, breaks and sightseeing along the route.",
      },
  
      {
        question: "Where does the seven-day tour start and finish?",
  
        answer:
          "The journey starts in Tangier and finishes in Marrakech. Along the way, you visit Chefchaouen, Fes, the Middle Atlas Mountains, Merzouga, the Sahara and southern Morocco.",
      },
  
      {
        question: "How many nights are included?",
  
        answer:
          "The tour includes six nights: one night in Chefchaouen, two nights in Fes, one night in Merzouga, one night at a Sahara desert camp and one night in Ouarzazate.",
      },
  
      {
        question: "Why are there two nights in Fes?",
  
        answer:
          "Two nights allow you to spend a full day discovering Fes instead of arriving and leaving again the following morning. This gives you more time for the medina, traditional markets, crafts and historic areas.",
      },
  
      {
        question: "Does the tour include Chefchaouen?",
  
        answer:
          "Yes. Chefchaouen is the first overnight destination after leaving Tangier, giving you time to explore the blue medina and enjoy the Rif Mountain atmosphere.",
      },
  
      {
        question: "Do we have a full day to explore Fes?",
  
        answer:
          "Yes. Day three is dedicated to Fes, allowing you to explore the historic medina and other parts of the city at a more comfortable pace.",
      },
  
      {
        question: "Does the journey include Merzouga?",
  
        answer:
          "Yes. You arrive in Merzouga on day four and spend the following day experiencing the desert surroundings and Erg Chebbi dunes.",
      },
  
      {
        question: "Is a camel ride included?",
  
        answer:
          "Yes. A camel ride across the Erg Chebbi dunes is included as part of the Sahara experience.",
      },
  
      {
        question: "Do we sleep in the Sahara Desert?",
  
        answer:
          "Yes. One night is spent at a Sahara desert camp near Merzouga after your camel ride and sunset experience.",
      },
  
      {
        question: "Does the tour visit Todra Gorges?",
  
        answer:
          "Yes. Todra Gorges is visited on day six while traveling west from the Merzouga area toward Ouarzazate.",
      },
  
      {
        question: "Does the tour include Ait Ben Haddou?",
  
        answer:
          "Yes. Ait Ben Haddou is visited on the final day before crossing the High Atlas Mountains toward Marrakech.",
      },
  
      {
        question: "What makes this itinerary different from a shorter Tangier desert route?",
  
        answer:
          "The additional day is used to slow down the journey in Fes. You spend two nights there and have a full day for sightseeing before continuing toward the Sahara.",
      },
  
      {
        question: "Is there a lot of driving during the seven days?",
  
        answer:
          "The itinerary crosses a large part of Morocco, so several days include significant driving. The route is divided with overnight stays, sightseeing stops, a full day in Fes and additional time around Merzouga.",
      },
  
      {
        question: "Are local guides included in Fes?",
  
        answer:
          "A local guide is not included by default unless it is part of your final arrangements. A guided visit of Fes can be requested when planning the tour.",
      },
  
      {
        question: "Can this seven-day journey be customized?",
  
        answer:
          "Yes. Because the tour is private, parts of the itinerary can be adapted to your travel dates, interests, accommodation preferences and onward plans.",
      },
  
      {
        question: "What should I bring for the Sahara night?",
  
        answer:
          "Comfortable clothing, walking shoes, sun protection and an extra layer for the evening are useful. Temperatures in the desert can change between daytime and night.",
      },
  
      {
        question: "Can families take this private tour?",
  
        answer:
          "Families can request this journey. If you are traveling with children, share their ages when contacting us so the driving schedule, accommodation and desert arrangements can be planned comfortably.",
      },
    ],
  
    // ─────────────────────────────
    // SEO
    // ─────────────────────────────
  
    seo: {
      title:
        "7-Day Tangier, Fes & Sahara Tour | Moroccan Trip",
  
      description:
        "Explore Chefchaouen, Fes and the Sahara on a private 7-day journey from Tangier, with Merzouga, Todra Gorges, Ait Ben Haddou and Marrakech.",
  
      // Internal SEO keyword map only.
      // This cluster is intentionally different from the
      // 4-day Tangier-Chefchaouen and 6-day Tangier-Marrakech pages.
      keywords: [
        "tangier fes sahara tour",
        "tangier fes desert tour",
        "tangier chefchaouen fes tour",
        "tangier chefchaouen fes desert tour",
        "chefchaouen fes merzouga tour",
        "tangier fes merzouga tour",
        "tangier fes merzouga itinerary",
        "7 day tangier fes sahara tour",
      ],
    },
  
    // ─────────────────────────────
    // BOOKING
    // ─────────────────────────────
  
    booking: {
      available: true,
      minimumDays: 7,
      customizable: true,
      contactLabel: "Request a Quote",
    },
  },
  {
    id: "17",
  
    // ─────────────────────────────
    // BASIC INFORMATION
    // ─────────────────────────────
  
    slug: "10-day-tangier-casablanca-tour",
  
    title: "10-Day Morocco Tour from Tangier to Casablanca",
  
    shortDescription:
      "Travel across Morocco on a private 10-day journey from Tangier to Casablanca through Chefchaouen, Fes, the Sahara Desert, Ait Ben Haddou and Marrakech.",
  
    image: "/images/tours/10-day-tangier-casablanca-tour.webp",
  
    badge: "Tangier to Casablanca",
  
    featured: true,
  
    category: "Morocco Tours",
  
    // ─────────────────────────────
    // TOUR DETAILS
    // ─────────────────────────────
  
    duration: "10 Days / 9 Nights",
  
    nights: 9,
  
    tourType: "Private Tour",
  
    groupSize: "Up to 4 People",
  
    languages: ["English", "French"],
  
    departure: "Tangier",
  
    arrival: "Casablanca",
  
    locations: [
      "Tangier",
      "Chefchaouen",
      "Fes",
      "Ifrane",
      "Middle Atlas Mountains",
      "Midelt",
      "Ziz Valley",
      "Merzouga",
      "Erg Chebbi",
      "Sahara Desert",
      "Rissani",
      "Todra Gorges",
      "Dades Valley",
      "Ouarzazate",
      "Ait Ben Haddou",
      "High Atlas Mountains",
      "Marrakech",
      "Casablanca",
    ],
  
    // ─────────────────────────────
    // PRICING
    // ─────────────────────────────
  
    // No fixed price.
    // The final quote depends on the number of travelers,
    // accommodation level and requested services.
  
    // ─────────────────────────────
    // HIGHLIGHTS
    // ─────────────────────────────
  
    highlights: [
      "Begin your private journey in Tangier and finish in Casablanca",
      "Discover Tangier before traveling into northern Morocco",
      "Spend a night in Chefchaouen and explore the blue-painted medina",
      "Enjoy two nights in Fes with a full day for the historic city",
      "Cross the Middle Atlas Mountains through Ifrane and Midelt",
      "Travel through the palm-filled Ziz Valley toward the Sahara",
      "Reach Merzouga and the golden dunes of Erg Chebbi",
      "Spend time discovering the desert surroundings before the camel trek",
      "Ride a camel across the Sahara dunes at sunset",
      "Spend a memorable night at a desert camp",
      "Travel through Rissani and southeastern Morocco",
      "Walk between the dramatic canyon walls of Todra Gorges",
      "Continue through the Dades Valley toward Ouarzazate",
      "Visit the fortified village of Ait Ben Haddou",
      "Cross the High Atlas Mountains on the way to Marrakech",
      "Spend a full day discovering Marrakech",
      "Finish your cross-country journey in Casablanca",
      "Experience northern cities, mountains, desert and imperial destinations in one private tour",
    ],
  
    // ─────────────────────────────
    // OVERVIEW
    // ─────────────────────────────
  
    overview: `
      Travel across Morocco from Tangier to Casablanca on this private ten-day
      journey through blue mountain towns, historic medinas, the Sahara Desert
      and Marrakech.
  
      Your adventure begins in Tangier, where northern Morocco meets the sea.
      After your first night, travel into the Rif region toward Chefchaouen.
      Spending the night in the blue city gives you time to explore its narrow
      streets and enjoy the quieter evening atmosphere before continuing south.
  
      From Chefchaouen, the route leads to Fes. Two nights in the city allow you
      to spend a complete day discovering the historic medina, traditional
      markets, craft workshops and old neighborhoods without having to leave again
      the following morning.
  
      The scenery changes after Fes as the journey crosses Ifrane and the Middle
      Atlas Mountains. Continue through Midelt and the Ziz Valley before reaching
      Merzouga beside the Erg Chebbi dunes.
  
      Your Sahara experience includes more than simply passing through the desert.
      Spend time around Merzouga before riding a camel across the dunes, watching
      the sunset and spending the night at a desert camp.
  
      After leaving the Sahara, travel west through Rissani, Todra Gorges and the
      landscapes of the Dades region before arriving in Ouarzazate.
  
      The journey then continues to Ait Ben Haddou and across the High Atlas
      Mountains toward Marrakech. A full day in Marrakech gives you time to
      discover its medina, traditional souks and historic areas at a comfortable
      pace.
  
      On the final day, travel from Marrakech to Casablanca, completing a route
      that connects northern Morocco, the Sahara and some of the country's most
      important cultural destinations.
  
      This private tour from Tangier to Casablanca is designed for travelers who
      want to cross Morocco rather than return to the same starting point. The
      itinerary combines Chefchaouen, Fes, Merzouga and Marrakech while allowing
      more time in key destinations along the way.
    `,
  
    // ─────────────────────────────
    // ITINERARY
    // ─────────────────────────────
  
    itinerary: [
      {
        day: 1,
  
        title: "Arrival in Tangier",
  
        description: `
          Your journey begins in Tangier.
  
          Depending on your arrival plans, you will be met at the airport, port
          or another agreed location in the city and transferred to your
          accommodation.
  
          The first day is kept comfortable so you can settle in and begin
          discovering northern Morocco without a long road journey immediately
          after arrival.
  
          If time allows, explore part of Tangier and enjoy its distinctive
          coastal atmosphere.
  
          The city has long been shaped by its position between the Mediterranean,
          Atlantic and northern Morocco, giving it a very different character from
          the inland destinations you will visit later.
  
          Enjoy the evening at your own pace and spend the first night in Tangier.
        `,
  
        highlights: [
          "Arrival in Tangier",
          "Private pickup according to your travel plans",
          "Transfer to your accommodation",
          "Free time depending on arrival",
          "First introduction to northern Morocco",
          "Overnight stay in Tangier",
        ],
      },
  
      {
        day: 2,
  
        title: "Tangier – Chefchaouen",
  
        description: `
          After breakfast, leave Tangier and travel inland toward Chefchaouen.
  
          The route moves away from the coast and into the greener landscapes of
          northern Morocco.
  
          As you approach the Rif region, mountain scenery surrounds the road
          before you arrive in Chefchaouen.
  
          Spend the afternoon exploring the town's blue-painted medina.
  
          Walk through narrow streets, small squares and traditional neighborhoods
          while enjoying the relaxed atmosphere that makes Chefchaouen different
          from Morocco's larger cities.
  
          Because you are spending the night here, there is no need to rush your
          visit or return to Tangier the same afternoon.
  
          Enjoy a free evening and spend the night in Chefchaouen.
        `,
  
        highlights: [
          "Breakfast in Tangier",
          "Travel through northern Morocco",
          "Enjoy Rif Mountain scenery",
          "Arrive in Chefchaouen",
          "Explore the blue-painted medina",
          "Walk through traditional streets and squares",
          "Free evening in Chefchaouen",
          "Overnight stay in Chefchaouen",
        ],
      },
  
      {
        day: 3,
  
        title: "Chefchaouen – Fes",
  
        description: `
          Enjoy a relaxed morning in Chefchaouen before continuing toward Fes.
  
          Take some final time to walk through the medina, enjoy the mountain
          atmosphere or visit areas you may have missed the previous afternoon.
  
          Leave Chefchaouen and travel south through the countryside.
  
          The scenery changes gradually as the journey moves away from the Rif
          region and toward one of Morocco's most important historic cities.
  
          Arrive in Fes later in the day and check into your accommodation.
  
          Depending on the arrival time, enjoy a first walk around the city or
          simply relax before tomorrow's full sightseeing day.
  
          Spend the first of two nights in Fes.
        `,
  
        highlights: [
          "Morning in Chefchaouen",
          "Final time in the blue medina",
          "Travel south toward Fes",
          "Enjoy changing countryside",
          "Arrive in Fes",
          "Free time depending on arrival",
          "First overnight stay in Fes",
        ],
      },
  
      {
        day: 4,
  
        title: "Full Day Exploring Fes",
  
        description: `
          Today is dedicated to discovering Fes without another long road journey.
  
          Explore the historic medina, where narrow streets lead between
          traditional markets, workshops, neighborhoods and old buildings.
  
          Fes is especially known for its craftsmanship and long cultural history.
  
          Spend time discovering traditional craft areas, historic architecture
          and different sections of the old city.
  
          Depending on your interests, the day can also include viewpoints and
          quieter areas beyond the busiest streets of the medina.
  
          Having a complete day in Fes allows you to experience the city at a
          comfortable pace rather than treating it as a quick stop on the way
          south.
  
          Return to your accommodation for a second night in Fes.
        `,
  
        highlights: [
          "Full day dedicated to Fes",
          "Explore the historic medina",
          "Walk through traditional markets",
          "Discover Moroccan craft areas",
          "See historic architecture",
          "Flexible sightseeing",
          "Second overnight stay in Fes",
        ],
      },
  
      {
        day: 5,
  
        title:
          "Fes – Ifrane – Middle Atlas Mountains – Midelt – Ziz Valley – Merzouga",
  
        description: `
          After breakfast, leave Fes and begin traveling south toward the Sahara
          Desert.
  
          Pass through Ifrane before entering the Middle Atlas Mountains.
  
          The forests, cooler temperatures and mountain roads create a strong
          contrast with the desert landscapes that appear later in the journey.
  
          Continue toward Midelt, where time can be allowed for a break.
  
          Farther south, the surroundings gradually become drier.
  
          Travel through the Ziz Valley and enjoy views of palm groves stretching
          between rocky mountains.
  
          Continue toward Merzouga and arrive beside the Erg Chebbi dunes later
          in the day.
  
          Enjoy your first views of the Sahara and spend the night at a hotel or
          riad in the Merzouga area.
        `,
  
        highlights: [
          "Breakfast in Fes",
          "Travel through Ifrane",
          "Cross the Middle Atlas Mountains",
          "Continue through Midelt",
          "Enjoy views across the Ziz Valley",
          "Travel toward the Sahara",
          "Arrive in Merzouga",
          "See the Erg Chebbi dunes",
          "Overnight stay in Merzouga",
        ],
      },
  
      {
        day: 6,
  
        title:
          "Merzouga Desert Exploration – Camel Trek – Sahara Camp",
  
        description: `
          Today is dedicated to experiencing the Sahara around Merzouga.
  
          After breakfast, spend time discovering the landscapes surrounding
          Erg Chebbi instead of immediately continuing toward another destination.
  
          Depending on the day's arrangements, there can be opportunities to
          explore different areas around the dunes and learn more about life near
          the desert.
  
          Later in the afternoon, prepare for your camel trek.
  
          Ride across the golden dunes as the sunlight begins to soften over the
          Sahara.
  
          Stop along the way to enjoy the views and watch the sunset before
          continuing toward your desert camp.
  
          After arriving at camp, enjoy dinner and spend the night surrounded by
          the peaceful dunes and open desert sky.
  
          This evening offers one of the strongest contrasts of the journey from
          Tangier to Casablanca, moving from Morocco's northern coast to the
          landscapes of the Sahara.
        `,
  
        highlights: [
          "Explore the Merzouga desert area",
          "Discover the Erg Chebbi surroundings",
          "Experience the Sahara landscape",
          "Camel ride across the dunes",
          "Watch the desert sunset",
          "Dinner at the Sahara camp",
          "Overnight stay in the desert",
        ],
      },
  
      {
        day: 7,
  
        title:
          "Merzouga – Rissani – Todra Gorges – Dades Valley – Ouarzazate",
  
        description: `
          Start the morning in the quiet surroundings of the Sahara.
  
          If you wish, wake up early to watch the sunrise over the Erg Chebbi
          dunes before breakfast.
  
          Leave Merzouga and begin traveling west through southeastern Morocco.
  
          Pass through the Rissani area before continuing toward Tinghir and
          Todra Gorges.
  
          Take time to walk between the high canyon walls and enjoy the dramatic
          natural scenery.
  
          After the visit, continue through the landscapes of the Dades region.
  
          Rocky mountains, valleys and traditional communities line the journey
          as you travel farther west toward Ouarzazate.
  
          Arrive later in the day and settle into your accommodation.
  
          Spend the night in Ouarzazate.
        `,
  
        highlights: [
          "Optional sunrise over Erg Chebbi",
          "Breakfast before leaving Merzouga",
          "Travel through the Rissani area",
          "Visit Todra Gorges",
          "Walk between the canyon walls",
          "Travel through the Dades region",
          "Continue through southern Morocco",
          "Arrive in Ouarzazate",
          "Overnight stay in Ouarzazate",
        ],
      },
  
      {
        day: 8,
  
        title:
          "Ouarzazate – Ait Ben Haddou – High Atlas Mountains – Marrakech",
  
        description: `
          After breakfast, leave Ouarzazate and continue toward Ait Ben Haddou.
  
          Take time to explore the fortified village and see its traditional
          earthen architecture.
  
          The setting provides another contrast with the Sahara landscapes
          experienced during the previous days.
  
          After the visit, continue toward the High Atlas Mountains.
  
          Cross the mountain range along a scenic road with valleys, small
          villages and panoramic views along the way.
  
          Stops can be made for photos, rest and meals depending on your schedule.
  
          As you approach Marrakech, the mountain scenery gradually gives way to
          the plains surrounding the city.
  
          Arrive later in the day and check into your accommodation.
  
          Spend the first of two nights in Marrakech.
        `,
  
        highlights: [
          "Breakfast in Ouarzazate",
          "Travel toward Ait Ben Haddou",
          "Explore the fortified village",
          "See traditional earthen architecture",
          "Cross the High Atlas Mountains",
          "Enjoy panoramic mountain scenery",
          "Arrive in Marrakech",
          "First overnight stay in Marrakech",
        ],
      },
  
      {
        day: 9,
  
        title: "Full Day Exploring Marrakech",
  
        description: `
          Spend today discovering Marrakech at a comfortable pace.
  
          Explore the historic medina and walk through traditional souks filled
          with workshops, shops and local activity.
  
          The city offers a very different experience from Chefchaouen, Fes and
          the Sahara.
  
          Depending on your interests, spend time around historic sites, public
          squares, gardens or quieter neighborhoods beyond the busiest areas of
          the medina.
  
          Because there is no long transfer today, you can take breaks and enjoy
          the city without planning your sightseeing around several hours of
          driving.
  
          Enjoy your final evening in Marrakech and return to your accommodation
          for a second night.
        `,
  
        highlights: [
          "Full day in Marrakech",
          "Explore the historic medina",
          "Walk through traditional souks",
          "Discover historic areas",
          "Visit places according to your interests",
          "Enjoy free time in the city",
          "Second overnight stay in Marrakech",
        ],
      },
  
      {
        day: 10,
  
        title: "Marrakech – Casablanca",
  
        description: `
          After breakfast, leave Marrakech and begin the final stage of the
          journey toward Casablanca.
  
          The drive takes you north toward Morocco's largest city and completes
          the route that began in Tangier ten days earlier.
  
          Stops can be made along the way for rest and meals depending on your
          schedule.
  
          Arrive in Casablanca later in the day.
  
          Your private tour from Tangier to Casablanca ends after traveling
          through Chefchaouen, Fes, the Middle Atlas Mountains, Merzouga, the
          Sahara Desert, southern Morocco and Marrakech.
  
          Final drop-off can be arranged in Casablanca according to your onward
          travel plans.
        `,
  
        highlights: [
          "Breakfast in Marrakech",
          "Leave Marrakech",
          "Travel toward Casablanca",
          "Flexible stops along the journey",
          "Arrive in Casablanca",
          "Final drop-off according to your travel plans",
          "End of the ten-day journey",
        ],
      },
    ],
  
    // ─────────────────────────────
    // INCLUDED
    // ─────────────────────────────
  
    included: [
      "Private transportation from Tangier to Casablanca",
      "English- or French-speaking driver",
      "Nine nights of accommodation",
      "One night in Tangier",
      "One night in Chefchaouen",
      "Two nights in Fes",
      "One night at a hotel or riad in Merzouga",
      "One night at a Sahara desert camp",
      "One night in Ouarzazate",
      "Two nights in Marrakech",
      "Daily breakfasts",
      "Dinner at the Sahara desert camp",
      "Camel ride across the Erg Chebbi dunes",
      "Time to explore the Merzouga desert area",
      "Full day to explore Fes",
      "Full day to explore Marrakech",
      "Free time at the main sightseeing destinations",
      "Flexible stops for photos and breaks during the journey",
      "Pickup in Tangier",
      "Final drop-off in Casablanca",
    ],
  
    // ─────────────────────────────
    // NOT INCLUDED
    // ─────────────────────────────
  
    excluded: [
      "Lunches",
      "Dinners unless mentioned in the included section",
      "Drinks",
      "Entrance fees to monuments and attractions",
      "Local city guides unless requested",
      "Optional activities not mentioned in the itinerary",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities",
      "Any services not mentioned in the included section",
    ],
  
    // ─────────────────────────────
    // ACCOMMODATION
    // ─────────────────────────────
  
    accommodation: [
      {
        night: 1,
        location: "Tangier",
        type: "Hotel or Riad",
      },
      {
        night: 2,
        location: "Chefchaouen",
        type: "Hotel or Riad",
      },
      {
        night: 3,
        location: "Fes",
        type: "Hotel or Riad",
      },
      {
        night: 4,
        location: "Fes",
        type: "Hotel or Riad",
      },
      {
        night: 5,
        location: "Merzouga",
        type: "Hotel or Riad",
      },
      {
        night: 6,
        location: "Merzouga",
        type: "Sahara Desert Camp",
      },
      {
        night: 7,
        location: "Ouarzazate",
        type: "Hotel or Riad",
      },
      {
        night: 8,
        location: "Marrakech",
        type: "Hotel or Riad",
      },
      {
        night: 9,
        location: "Marrakech",
        type: "Hotel or Riad",
      },
    ],
  
    // ─────────────────────────────
    // GALLERY
    // ─────────────────────────────
  
    gallery: [
      "/images/tours/10-day-tangier-casablanca-tour.webp",
    ],
  
    // ─────────────────────────────
    // FAQ
    // ─────────────────────────────
  
    faqs: [
      {
        question: "Is the Tangier to Casablanca tour private?",
  
        answer:
          "Yes. This is a private journey for you and your travel group, with private transportation and more flexibility for stops, breaks and sightseeing throughout the route.",
      },
  
      {
        question: "Where does the tour start and finish?",
  
        answer:
          "The tour starts in Tangier and finishes in Casablanca. The route travels through Chefchaouen, Fes, Merzouga, the Sahara Desert, Ouarzazate and Marrakech before reaching Casablanca.",
      },
  
      {
        question: "How many nights are included during the journey?",
  
        answer:
          "The itinerary includes nine nights: one in Tangier, one in Chefchaouen, two in Fes, one in Merzouga, one at a Sahara desert camp, one in Ouarzazate and two in Marrakech.",
      },
  
      {
        question: "Does the itinerary include Chefchaouen?",
  
        answer:
          "Yes. You travel from Tangier to Chefchaouen on the second day and spend one night there, giving you time to explore the blue-painted medina.",
      },
  
      {
        question: "How much time do we spend in Fes?",
  
        answer:
          "The tour includes two nights in Fes and a complete day to explore the historic medina, traditional markets, craft areas and other parts of the city.",
      },
  
      {
        question: "Does the journey include the Sahara Desert?",
  
        answer:
          "Yes. You spend two nights in the Merzouga area, including one night at a Sahara desert camp near the Erg Chebbi dunes.",
      },
  
      {
        question: "Do we have time to explore Merzouga?",
  
        answer:
          "Yes. You arrive in Merzouga on day five and spend the following day discovering the desert area before the camel trek and overnight Sahara camp.",
      },
  
      {
        question: "Is the camel ride included?",
  
        answer:
          "Yes. A camel ride across the Erg Chebbi dunes is included as part of your Sahara experience.",
      },
  
      {
        question: "Do we spend a night in the desert?",
  
        answer:
          "Yes. One night is spent at a Sahara desert camp near Merzouga after the camel ride and sunset experience.",
      },
  
      {
        question: "Does the route include Todra Gorges?",
  
        answer:
          "Yes. Todra Gorges is visited while traveling west from the Sahara toward Ouarzazate on day seven.",
      },
  
      {
        question: "Does the tour visit Ait Ben Haddou?",
  
        answer:
          "Yes. Ait Ben Haddou is visited on day eight before crossing the High Atlas Mountains toward Marrakech.",
      },
  
      {
        question: "How much time do we spend in Marrakech?",
  
        answer:
          "The itinerary includes two nights in Marrakech and a full day dedicated to exploring the city before traveling to Casablanca.",
      },
  
      {
        question: "Does the tour end in Marrakech?",
  
        answer:
          "No. After two nights in Marrakech, the journey continues to Casablanca on day ten, where the tour finishes.",
      },
  
      {
        question: "Is this a direct trip from Tangier to Casablanca?",
  
        answer:
          "No. This is a multi-day private tour rather than a direct transfer. The route crosses Morocco through Chefchaouen, Fes, the Sahara Desert, southern Morocco and Marrakech before arriving in Casablanca.",
      },
  
      {
        question: "Is there a lot of driving during the tour?",
  
        answer:
          "The journey covers several regions of Morocco, so some days include several hours on the road. The itinerary balances longer transfers with overnight stays, sightseeing stops and full days in Fes and Marrakech.",
      },
  
      {
        question: "Are local guides included in Fes or Marrakech?",
  
        answer:
          "Local city guides are not included by default unless they are part of your final arrangements. Guides can be requested when planning the private tour.",
      },
  
      {
        question: "Can the Tangier to Casablanca tour be customized?",
  
        answer:
          "Yes. Because this is a private tour, parts of the itinerary can be adapted to your travel dates, interests, preferred accommodation and onward travel plans.",
      },
  
      {
        question: "What should I bring for the Sahara Desert?",
  
        answer:
          "Comfortable clothing, walking shoes, sun protection and an extra layer for the evening are useful. Desert temperatures can change noticeably between daytime and night.",
      },
  
      {
        question: "Can families take this private Morocco tour?",
  
        answer:
          "Families can request the journey. If you are traveling with children, share their ages when contacting us so the route, accommodation and desert arrangements can be planned comfortably.",
      },
    ],
  
    // ─────────────────────────────
    // SEO
    // ─────────────────────────────
  
    seo: {
      title:
        "10-Day Tangier to Casablanca Tour | Moroccan Trip",
  
      description:
        "Travel on a private 10-day Morocco tour from Tangier to Casablanca through Chefchaouen, Fes, Merzouga, the Sahara, Marrakech and Ait Ben Haddou.",
  
      // Internal SEO keyword map only.
      // Do not output these as a meta keywords tag.
      //
      // This cluster is intentionally different from the
      // existing 10-day Casablanca, 4-day Tangier,
      // 6-day Tangier-Marrakech and 7-day Tangier pages.
      keywords: [
        "10 day morocco tour from tangier to casablanca",
        "tangier to casablanca",
        "tangier casablanca",
        "tour from tangier to casablanca",
        "tangier morocco to casablanca",
        "tangier to casablanca morocco",
        "tangier fes marrakech casablanca",
      ],
    },
  
    // ─────────────────────────────
    // BOOKING
    // ─────────────────────────────
  
    booking: {
      available: true,
      minimumDays: 10,
      customizable: true,
      contactLabel: "Request a Quote",
    },
  },
  {
    id: "18",
  
    // ─────────────────────────────
    // BASIC INFORMATION
    // ─────────────────────────────
  
    slug: "12-day-best-of-morocco-tour",
  
    title: "12-Day Best of Morocco Tour from Tangier",
  
    shortDescription:
      "Discover the best of Morocco on a private 12-day journey from Tangier through Chefchaouen, Fes, the Sahara Desert, Ait Ben Haddou and Marrakech before finishing in Casablanca.",
  
    image: "/images/tours/12-day-best-of-morocco-tour.webp",
  
    badge: "Best of Morocco",
  
    featured: true,
  
    category: "Morocco Tours",
  
    // ─────────────────────────────
    // TOUR DETAILS
    // ─────────────────────────────
  
    duration: "12 Days / 11 Nights",
  
    nights: 11,
  
    tourType: "Private Tour",
  
    groupSize: "Up to 4 People",
  
    languages: ["English", "French"],
  
    departure: "Tangier",
  
    arrival: "Casablanca",
  
    locations: [
      "Tangier",
      "Chefchaouen",
      "Rif Mountains",
      "Fes",
      "Ifrane",
      "Middle Atlas Mountains",
      "Midelt",
      "Ziz Valley",
      "Merzouga",
      "Erg Chebbi",
      "Sahara Desert",
      "Rissani",
      "Todra Gorges",
      "Dades Valley",
      "Ouarzazate",
      "Ait Ben Haddou",
      "High Atlas Mountains",
      "Marrakech",
      "Casablanca",
    ],
  
    // ─────────────────────────────
    // PRICING
    // ─────────────────────────────
  
    // No fixed price.
    // The final quote depends on the number of travelers,
    // accommodation level and requested services.
  
    // ─────────────────────────────
    // HIGHLIGHTS
    // ─────────────────────────────
  
    highlights: [
      "Begin your private journey in Tangier and finish in Casablanca",
      "Discover the coastal atmosphere and character of Tangier",
      "Spend two nights in Chefchaouen with time to enjoy the blue medina",
      "Travel through the mountain landscapes of northern Morocco",
      "Spend two nights in Fes with a full day to explore the historic city",
      "Walk through traditional markets and craft areas in the Fes medina",
      "Cross the Middle Atlas Mountains through Ifrane and Midelt",
      "Enjoy the palm-filled landscapes of the Ziz Valley",
      "Reach Merzouga and the golden dunes of Erg Chebbi",
      "Spend extra time discovering the Sahara surroundings",
      "Ride a camel across the desert dunes at sunset",
      "Spend a memorable night at a Sahara desert camp",
      "Walk between the dramatic canyon walls of Todra Gorges",
      "Travel through the landscapes of the Dades Valley",
      "Visit the fortified village of Ait Ben Haddou",
      "Cross the High Atlas Mountains on the way to Marrakech",
      "Spend two nights in Marrakech with a full day to explore the city",
      "Complete the journey with a final night in Casablanca",
      "Experience cities, mountains, desert landscapes and historic destinations in one tour",
    ],
  
    // ─────────────────────────────
    // OVERVIEW
    // ─────────────────────────────
  
    overview: `
      Experience the best of Morocco on this private 12-day journey from Tangier
      to Casablanca, combining northern mountain towns, historic cities, the
      Sahara Desert and Marrakech.
  
      The tour begins in Tangier before traveling into the Rif Mountains toward
      Chefchaouen. With two nights in the blue city, you have time to explore its
      narrow streets, small squares and mountain atmosphere without treating it
      as a quick stop.
  
      From Chefchaouen, continue south toward Fes. Two nights in the city allow
      you to spend a complete day inside one of Morocco's most historic medinas,
      discovering traditional markets, craft areas, old neighborhoods and local
      architecture.
  
      After Fes, the scenery changes as you cross Ifrane and the Middle Atlas
      Mountains. Continue through Midelt and the Ziz Valley before reaching
      Merzouga beside the golden Erg Chebbi dunes.
  
      The Sahara is given enough time to be more than an overnight stop. Explore
      the surroundings of Merzouga before riding a camel across the dunes,
      watching the desert sunset and spending the night at a Sahara camp.
  
      From Merzouga, travel west through Rissani, Todra Gorges and the Dades
      Valley. The journey continues through southern Morocco before visiting
      Ait Ben Haddou and crossing the High Atlas Mountains toward Marrakech.
  
      Two nights in Marrakech give you a full day to discover the historic
      medina, traditional souks and other parts of the city at a comfortable pace.
  
      The final stage takes you from Marrakech to Casablanca, where you spend the
      last night of the journey before departure.
  
      This Best of Morocco tour is designed for travelers who want a broad
      experience of the country without changing hotels every morning. The route
      combines northern Morocco, Fes, the Sahara, mountain scenery, Marrakech and
      Casablanca while allowing extra time in several of the most memorable
      destinations.
    `,
  
    // ─────────────────────────────
    // ITINERARY
    // ─────────────────────────────
  
    itinerary: [
      {
        day: 1,
  
        title: "Arrival and Explore Tangier",
  
        description: `
          Your Best of Morocco journey begins in Tangier.
  
          Depending on your travel plans, you will be met at the airport, port or
          another agreed location in the city and transferred to your
          accommodation.
  
          The first day is kept comfortable so you can settle in before beginning
          the longer road journey through Morocco.
  
          If your arrival time allows, start discovering Tangier and its
          distinctive northern atmosphere.
  
          The city's position between the Mediterranean and Atlantic has shaped
          its character for generations, making it a very different introduction
          from the mountain towns, desert landscapes and inland cities you will
          experience later.
  
          Enjoy the evening at your own pace and spend your first night in
          Tangier.
        `,
  
        highlights: [
          "Arrival in Tangier",
          "Private pickup according to your travel plans",
          "Transfer to your accommodation",
          "First introduction to northern Morocco",
          "Free time depending on arrival",
          "Overnight stay in Tangier",
        ],
      },
  
      {
        day: 2,
  
        title: "Tangier – Rif Mountains – Chefchaouen",
  
        description: `
          After breakfast, leave Tangier and travel inland toward Chefchaouen.
  
          The road moves away from the coast and into the greener landscapes of
          northern Morocco.
  
          As you approach the Rif Mountains, the scenery becomes increasingly
          mountainous before arriving in Chefchaouen.
  
          Spend the afternoon exploring the blue-painted medina.
  
          Walk through narrow streets, small squares and traditional
          neighborhoods while enjoying the relaxed atmosphere of the town.
  
          Because you will spend two nights here, there is no need to rush your
          first visit.
  
          Enjoy a free evening and experience Chefchaouen after the busiest part
          of the day has passed.
        `,
  
        highlights: [
          "Breakfast in Tangier",
          "Travel through northern Morocco",
          "Enjoy Rif Mountain scenery",
          "Arrive in Chefchaouen",
          "Explore the blue medina",
          "Walk through traditional streets and squares",
          "Free evening",
          "First overnight stay in Chefchaouen",
        ],
      },
  
      {
        day: 3,
  
        title: "Full Day in Chefchaouen",
  
        description: `
          Today is dedicated to Chefchaouen, giving you time to enjoy the town
          without packing your luggage or continuing immediately to another city.
  
          Explore more of the blue medina and discover quieter streets beyond the
          most visited areas.
  
          Take time to walk through local neighborhoods, browse small shops and
          enjoy the mountain setting surrounding the town.
  
          The day can be adapted to your interests. You may prefer a relaxed pace
          inside the medina or additional time enjoying viewpoints and the
          surrounding scenery.
  
          Staying a second night makes this part of the journey much less rushed
          than a short visit between Tangier and Fes.
  
          Enjoy your final evening in Chefchaouen before continuing south the
          following morning.
        `,
  
        highlights: [
          "Full day in Chefchaouen",
          "Explore more of the blue medina",
          "Discover quieter traditional streets",
          "Enjoy Rif Mountain views",
          "Flexible sightseeing",
          "Free time at your own pace",
          "Second overnight stay in Chefchaouen",
        ],
      },
  
      {
        day: 4,
  
        title: "Chefchaouen – Fes",
  
        description: `
          After breakfast, leave Chefchaouen and begin traveling south toward
          Fes.
  
          The journey moves away from the Rif Mountains and through changing
          countryside before reaching one of Morocco's most important historic
          cities.
  
          Arrive in Fes later in the day and check into your accommodation.
  
          Depending on your arrival time, enjoy a first introduction to the city
          or simply relax before tomorrow's full sightseeing day.
  
          Fes has a very different atmosphere from Chefchaouen, with a much larger
          medina and a strong tradition of craftsmanship and historic
          architecture.
  
          Spend the first of two nights in Fes.
        `,
  
        highlights: [
          "Breakfast in Chefchaouen",
          "Travel south through changing landscapes",
          "Continue toward Fes",
          "Arrive in the historic city",
          "Free time depending on arrival",
          "First overnight stay in Fes",
        ],
      },
  
      {
        day: 5,
  
        title: "Full Day Exploring Fes",
  
        description: `
          Spend today discovering Fes at a comfortable pace.
  
          Explore the historic medina, where narrow streets connect traditional
          markets, workshops, residential neighborhoods and old buildings.
  
          Fes is especially known for its craftsmanship and long cultural
          history.
  
          Depending on your interests, spend time discovering traditional craft
          areas, historic architecture, viewpoints and different sections of the
          old city.
  
          Having a complete day here means you can experience the medina without
          planning your visit around a long drive to the next destination.
  
          Take breaks when you wish and enjoy the atmosphere of one of Morocco's
          most important cultural cities.
  
          Return to your accommodation for a second night in Fes.
        `,
  
        highlights: [
          "Full day dedicated to Fes",
          "Explore the historic medina",
          "Walk through traditional markets",
          "Discover local craft areas",
          "See historic architecture",
          "Flexible sightseeing",
          "Second overnight stay in Fes",
        ],
      },
  
      {
        day: 6,
  
        title:
          "Fes – Ifrane – Middle Atlas Mountains – Midelt – Ziz Valley – Merzouga",
  
        description: `
          After breakfast, leave Fes and begin traveling south toward the Sahara
          Desert.
  
          Pass through Ifrane before continuing into the Middle Atlas Mountains.
  
          Forests, cooler temperatures and mountain roads create a strong contrast
          with the desert landscapes you will see later in the journey.
  
          Continue toward Midelt, where time can be allowed for a break before
          traveling farther south.
  
          As the route continues, the surroundings gradually become drier.
  
          Travel through the Ziz Valley and enjoy views of palm groves running
          through the rocky landscape.
  
          Continue toward Merzouga and arrive beside the Erg Chebbi dunes later
          in the day.
  
          Enjoy your first views of the Sahara and spend the night at a hotel or
          riad in the Merzouga area.
        `,
  
        highlights: [
          "Breakfast in Fes",
          "Travel through Ifrane",
          "Cross the Middle Atlas Mountains",
          "Continue through Midelt",
          "Enjoy views across the Ziz Valley",
          "Travel toward the Sahara",
          "Arrive in Merzouga",
          "See the Erg Chebbi dunes",
          "Overnight stay in Merzouga",
        ],
      },
  
      {
        day: 7,
  
        title:
          "Merzouga Desert Experience – Camel Trek – Sahara Camp",
  
        description: `
          Today is dedicated to the Sahara and the landscapes surrounding
          Merzouga.
  
          After breakfast, spend time discovering more of the Erg Chebbi area
          instead of immediately continuing to another destination.
  
          Depending on the day's arrangements, explore different desert
          landscapes and experience more of the surroundings beyond the main
          village.
  
          Later in the afternoon, prepare for your camel trek.
  
          Ride across the golden Erg Chebbi dunes as the sunlight begins to soften
          over the Sahara.
  
          Stop to enjoy the scenery and watch the sunset before continuing toward
          your desert camp.
  
          After arriving at camp, enjoy dinner and spend the night surrounded by
          the quiet dunes and open desert sky.
  
          The Sahara experience is one of the defining moments of this Best of
          Morocco tour.
        `,
  
        highlights: [
          "Explore the Merzouga desert surroundings",
          "Discover the landscapes around Erg Chebbi",
          "Experience the Sahara at a relaxed pace",
          "Camel ride across the dunes",
          "Watch the desert sunset",
          "Dinner at the Sahara camp",
          "Overnight stay in the desert",
        ],
      },
  
      {
        day: 8,
  
        title: "Merzouga – Rissani – Todra Gorges – Dades Valley",
  
        description: `
          Start the morning surrounded by the quiet landscapes of the Sahara.
  
          If you wish, wake up early to watch the sunrise over the Erg Chebbi
          dunes before breakfast.
  
          Leave Merzouga and begin traveling west through southeastern Morocco.
  
          Pass through the Rissani area before continuing toward Tinghir and
          Todra Gorges.
  
          Take time to walk between the high canyon walls and enjoy a landscape
          completely different from the open Sahara dunes.
  
          After the visit, continue toward the Dades Valley.
  
          The road passes rocky mountains, traditional communities and changing
          valley scenery before reaching the Dades region.
  
          Arrive later in the day for dinner and an overnight stay.
        `,
  
        highlights: [
          "Optional Sahara sunrise",
          "Breakfast before leaving Merzouga",
          "Travel through the Rissani area",
          "Visit Todra Gorges",
          "Walk between the canyon walls",
          "Travel through the Dades Valley",
          "Dinner and overnight stay in Dades",
        ],
      },
  
      {
        day: 9,
  
        title:
          "Dades Valley – Ouarzazate – Ait Ben Haddou – High Atlas – Marrakech",
  
        description: `
          After breakfast, leave the Dades Valley and continue west through
          southern Morocco.
  
          Travel through changing valley and mountain scenery toward Ouarzazate.
  
          Continue to Ait Ben Haddou, one of Morocco's best-known fortified
          villages.
  
          Take time to explore the village and see its traditional earthen
          architecture before beginning the journey toward Marrakech.
  
          Cross the High Atlas Mountains along a scenic road surrounded by
          valleys, traditional villages and panoramic views.
  
          Stops can be made for photos, rest and meals depending on your schedule.
  
          Arrive in Marrakech later in the day and check into your accommodation.
  
          Spend the first of two nights in Marrakech.
        `,
  
        highlights: [
          "Breakfast in the Dades Valley",
          "Travel through southern Morocco",
          "Continue through Ouarzazate",
          "Visit Ait Ben Haddou",
          "Discover traditional earthen architecture",
          "Cross the High Atlas Mountains",
          "Enjoy panoramic mountain scenery",
          "Arrive in Marrakech",
          "First overnight stay in Marrakech",
        ],
      },
  
      {
        day: 10,
  
        title: "Full Day Exploring Marrakech",
  
        description: `
          Today is dedicated to Marrakech.
  
          Explore the historic medina and walk through traditional souks filled
          with workshops, shops and everyday local activity.
  
          Marrakech offers a very different atmosphere from Chefchaouen, Fes and
          the Sahara.
  
          Depending on your interests, spend time around historic areas, public
          squares, gardens or quieter neighborhoods beyond the busiest parts of
          the old city.
  
          Because there is no long road journey today, you can explore Marrakech
          at a comfortable pace and take breaks whenever you wish.
  
          Enjoy your final evening in the city and return to your accommodation
          for a second night.
        `,
  
        highlights: [
          "Full day in Marrakech",
          "Explore the historic medina",
          "Walk through traditional souks",
          "Discover historic areas",
          "Flexible sightseeing",
          "Free time according to your interests",
          "Second overnight stay in Marrakech",
        ],
      },
  
      {
        day: 11,
  
        title: "Marrakech – Casablanca",
  
        description: `
          After breakfast, leave Marrakech and travel north toward Casablanca.
  
          Today's journey connects the historic atmosphere of Marrakech with
          Morocco's largest city on the Atlantic side of the country.
  
          Stops can be made during the drive for rest, meals and photos depending
          on your schedule.
  
          Arrive in Casablanca later in the day and check into your
          accommodation.
  
          Depending on the arrival time, enjoy some free time and discover part
          of the city before your final day in Morocco.
  
          Spend the last night of the tour in Casablanca.
        `,
  
        highlights: [
          "Breakfast in Marrakech",
          "Leave Marrakech",
          "Travel toward Casablanca",
          "Flexible stops during the journey",
          "Arrive in Casablanca",
          "Free time depending on arrival",
          "Overnight stay in Casablanca",
        ],
      },
  
      {
        day: 12,
  
        title: "Casablanca – Final Visit and Departure",
  
        description: `
          Enjoy the final day of your journey in Casablanca.
  
          Depending on your departure time, there may be an opportunity to
          discover more of the city before your final transfer.
  
          Casablanca provides a modern ending to a route that has taken you
          through mountain towns, historic medinas, the Middle Atlas, the Sahara
          Desert and Marrakech.
  
          After twelve days, your journey has connected several very different
          sides of Morocco without limiting the experience to one region.
  
          Final transfer can be arranged according to your flight or onward travel
          plans.
  
          Your 12-day Best of Morocco tour ends in Casablanca.
        `,
  
        highlights: [
          "Final morning in Casablanca",
          "Free time depending on departure",
          "Optional final city exploration",
          "Transfer according to your travel plans",
          "End of the 12-day Best of Morocco tour",
        ],
      },
    ],
  
    // ─────────────────────────────
    // INCLUDED
    // ─────────────────────────────
  
    included: [
      "Private transportation throughout the 12-day journey",
      "English- or French-speaking driver",
      "Eleven nights of accommodation",
      "One night in Tangier",
      "Two nights in Chefchaouen",
      "Two nights in Fes",
      "One night at a hotel or riad in Merzouga",
      "One night at a Sahara desert camp",
      "One night in the Dades Valley",
      "Two nights in Marrakech",
      "One night in Casablanca",
      "Daily breakfasts",
      "Dinner in the Dades area",
      "Dinner at the Sahara desert camp",
      "Camel ride across the Erg Chebbi dunes",
      "Time to explore the Merzouga desert area",
      "Full day to explore Chefchaouen",
      "Full day to explore Fes",
      "Full day to explore Marrakech",
      "Free time at the main sightseeing destinations",
      "Flexible stops for photos and breaks during the journey",
      "Pickup in Tangier",
      "Final transfer in Casablanca",
    ],
  
    // ─────────────────────────────
    // NOT INCLUDED
    // ─────────────────────────────
  
    excluded: [
      "Lunches",
      "Dinners unless mentioned in the included section",
      "Drinks",
      "Entrance fees to monuments and attractions",
      "Local city guides unless requested",
      "Optional activities not mentioned in the itinerary",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities",
      "Any services not mentioned in the included section",
    ],
  
    // ─────────────────────────────
    // ACCOMMODATION
    // ─────────────────────────────
  
    accommodation: [
      {
        night: 1,
        location: "Tangier",
        type: "Hotel or Riad",
      },
      {
        night: 2,
        location: "Chefchaouen",
        type: "Hotel or Riad",
      },
      {
        night: 3,
        location: "Chefchaouen",
        type: "Hotel or Riad",
      },
      {
        night: 4,
        location: "Fes",
        type: "Hotel or Riad",
      },
      {
        night: 5,
        location: "Fes",
        type: "Hotel or Riad",
      },
      {
        night: 6,
        location: "Merzouga",
        type: "Hotel or Riad",
      },
      {
        night: 7,
        location: "Merzouga",
        type: "Sahara Desert Camp",
      },
      {
        night: 8,
        location: "Dades Valley",
        type: "Hotel or Riad",
      },
      {
        night: 9,
        location: "Marrakech",
        type: "Hotel or Riad",
      },
      {
        night: 10,
        location: "Marrakech",
        type: "Hotel or Riad",
      },
      {
        night: 11,
        location: "Casablanca",
        type: "Hotel",
      },
    ],
  
    // ─────────────────────────────
    // GALLERY
    // ─────────────────────────────
  
    gallery: [
      "/images/tours/12-day-best-of-morocco-tour.webp",
    ],
  
    // ─────────────────────────────
    // FAQ
    // ─────────────────────────────
  
    faqs: [
      {
        question: "What is included in the Best of Morocco tour?",
  
        answer:
          "The journey includes private transportation, eleven nights of accommodation, daily breakfasts, a camel ride in Merzouga, a Sahara desert camp experience and flexible sightseeing stops throughout the route.",
      },
  
      {
        question: "Is the 12-day Best of Morocco tour private?",
  
        answer:
          "Yes. The tour is private for you and your travel group, giving you more flexibility for stops, breaks and the general pace of the journey.",
      },
  
      {
        question: "Where does the tour start and finish?",
  
        answer:
          "The journey starts in Tangier and finishes in Casablanca after traveling through Chefchaouen, Fes, the Sahara Desert, southern Morocco and Marrakech.",
      },
  
      {
        question: "How many nights are included?",
  
        answer:
          "Eleven nights are included: one in Tangier, two in Chefchaouen, two in Fes, one in Merzouga, one at a Sahara desert camp, one in the Dades Valley, two in Marrakech and one in Casablanca.",
      },
  
      {
        question: "Why does the itinerary include two nights in Chefchaouen?",
  
        answer:
          "Two nights give you a complete day to experience Chefchaouen without treating the town as a quick stop between Tangier and Fes.",
      },
  
      {
        question: "How much time do we spend in Fes?",
  
        answer:
          "The tour includes two nights in Fes and a full day to explore the historic medina, traditional markets, craft areas and other parts of the city.",
      },
  
      {
        question: "Does the Best of Morocco tour include the Sahara Desert?",
  
        answer:
          "Yes. You spend two nights in the Merzouga area, including one night at a Sahara desert camp beside the Erg Chebbi dunes.",
      },
  
      {
        question: "Do we have time to explore Merzouga?",
  
        answer:
          "Yes. You arrive in Merzouga on day six and spend the following day discovering the desert surroundings before the camel ride and overnight camp.",
      },
  
      {
        question: "Is the camel ride included?",
  
        answer:
          "Yes. A camel ride across the Erg Chebbi dunes is included as part of your Sahara experience.",
      },
  
      {
        question: "Do we spend a night in a Sahara camp?",
  
        answer:
          "Yes. One night is spent at a Sahara desert camp near Merzouga after the camel ride and sunset experience.",
      },
  
      {
        question: "Does the itinerary visit Todra Gorges?",
  
        answer:
          "Yes. Todra Gorges is visited on day eight while traveling from the Merzouga area toward the Dades Valley.",
      },
  
      {
        question: "Does the tour include Ait Ben Haddou?",
  
        answer:
          "Yes. Ait Ben Haddou is visited on day nine before crossing the High Atlas Mountains toward Marrakech.",
      },
  
      {
        question: "How long do we stay in Marrakech?",
  
        answer:
          "The itinerary includes two nights in Marrakech and one full day to explore the medina, souks and other parts of the city at a comfortable pace.",
      },
  
      {
        question: "Does the tour finish in Marrakech?",
  
        answer:
          "No. After Marrakech, the journey continues to Casablanca, where you spend the final night before the tour ends.",
      },
  
      {
        question: "What makes this tour different from shorter Morocco itineraries?",
  
        answer:
          "The twelve-day route includes more time in Chefchaouen, Fes, the Sahara and Marrakech. This creates a slower journey with fewer rushed visits than shorter cross-country routes.",
      },
  
      {
        question: "Is there a lot of driving during the tour?",
  
        answer:
          "The itinerary crosses several regions of Morocco, so some days include several hours on the road. Longer journeys are balanced by two-night stays and full sightseeing days in key destinations.",
      },
  
      {
        question: "Are local guides included in Fes or Marrakech?",
  
        answer:
          "Local city guides are not included by default unless they are part of your final arrangements. Guides can be requested when planning the private tour.",
      },
  
      {
        question: "Can the 12-day Best of Morocco tour be customized?",
  
        answer:
          "Yes. Because the tour is private, parts of the itinerary can be adapted to your travel dates, interests, preferred accommodation and onward travel plans.",
      },
  
      {
        question: "What should I bring for the Sahara Desert?",
  
        answer:
          "Bring comfortable clothing, walking shoes, sun protection and an extra layer for the evening. Desert temperatures can change noticeably between daytime and night.",
      },
  
      {
        question: "Is the tour suitable for families?",
  
        answer:
          "Families can request this private journey. If you are traveling with children, share their ages when contacting us so the driving schedule, accommodation and desert arrangements can be planned comfortably.",
      },
    ],
  
    // ─────────────────────────────
    // SEO
    // ─────────────────────────────
  
    seo: {
      title:
        "12-Day Best of Morocco Tour | Moroccan Trip",
  
      description:
        "Discover the best of Morocco on a private 12-day tour from Tangier through Chefchaouen, Fes, the Sahara Desert, Marrakech and Casablanca.",
  
      // Internal SEO keyword map only.
      // Do not output these as a meta keywords tag.
      //
      // This cluster intentionally avoids the existing
      // generic 12-day, Imperial Cities, Tangier-Marrakech,
      // Tangier-Casablanca and Tangier-Fes-Sahara clusters.
      keywords: [
        "best of morocco",
        "best of morocco tour",
        "best of morocco tours",
        "12 day best of morocco tour",
        "best of morocco from tangier",
        "best of morocco desert tour",
      ],
    },
  
    // ─────────────────────────────
    // BOOKING
    // ─────────────────────────────
  
    booking: {
      available: true,
      minimumDays: 12,
      customizable: true,
      contactLabel: "Request a Quote",
    },
  },
  {
    id: "19",
  
    // ─────────────────────────────
    // BASIC INFORMATION
    // ─────────────────────────────
  
    slug: "3-day-fes-marrakech-desert-tour",
  
    title: "3-Day Fes to Marrakech Desert Tour via Merzouga",
  
    shortDescription:
      "Travel from Fes to Marrakech on a private 3-day desert tour through the Middle Atlas, Merzouga, the Sahara, Todra Gorges and Ait Ben Haddou.",
  
    image: "/images/tours/3-day-fes-marrakech-desert-tour.webp",
  
    badge: "Fes to Marrakech",
  
    featured: true,
  
    category: "Desert Tours",
  
    // ─────────────────────────────
    // TOUR DETAILS
    // ─────────────────────────────
  
    duration: "3 Days / 2 Nights",
  
    nights: 2,
  
    tourType: "Private Tour",
  
    groupSize: "Up to 4 People",
  
    languages: ["English", "French"],
  
    departure: "Fes",
  
    arrival: "Marrakech",
  
    locations: [
      "Fes",
      "Ifrane",
      "Middle Atlas Mountains",
      "Midelt",
      "Ziz Valley",
      "Errachidia",
      "Merzouga",
      "Erg Chebbi",
      "Sahara Desert",
      "Rissani",
      "Todra Gorges",
      "Dades Valley",
      "Ouarzazate",
      "Ait Ben Haddou",
      "High Atlas Mountains",
      "Marrakech",
    ],
  
    // ─────────────────────────────
    // PRICING
    // ─────────────────────────────
  
    // No fixed price.
    // The final quote depends on the number of travelers,
    // accommodation level and requested services.
  
    // ─────────────────────────────
    // HIGHLIGHTS
    // ─────────────────────────────
  
    highlights: [
      "Travel privately from Fes to Marrakech through the Sahara Desert",
      "Cross the Middle Atlas Mountains through changing scenery",
      "Pass through Ifrane and the landscapes around Midelt",
      "Enjoy panoramic views across the palm-filled Ziz Valley",
      "Reach Merzouga and the golden dunes of Erg Chebbi",
      "Ride a camel across the Sahara dunes near sunset",
      "Spend a memorable night at a desert camp",
      "Wake up surrounded by the landscapes of the Sahara",
      "Travel through Rissani and southeastern Morocco",
      "Walk between the impressive canyon walls of Todra Gorges",
      "Continue through the beautiful landscapes of the Dades Valley",
      "Travel through Ouarzazate and southern Morocco",
      "Visit the fortified village of Ait Ben Haddou",
      "Cross the High Atlas Mountains on the road to Marrakech",
      "Combine a Sahara experience with a practical journey from Fes to Marrakech",
    ],
  
    // ─────────────────────────────
    // OVERVIEW
    // ─────────────────────────────
  
    overview: `
      Travel from Fes to Marrakech through the Sahara on this private 3-day desert
      tour via Merzouga.
  
      Instead of taking the direct route between the two cities, this journey
      crosses several different landscapes of Morocco. Leave Fes and travel
      through Ifrane and the Middle Atlas Mountains before continuing toward
      Midelt and the Ziz Valley.
  
      As you travel farther south, forests and mountain roads gradually give way
      to dry valleys, palm groves and the desert scenery surrounding Merzouga.
  
      At the edge of the Erg Chebbi dunes, leave the vehicle behind and continue
      by camel across the Sahara. Enjoy the changing light over the dunes before
      reaching your desert camp for dinner and an overnight stay.
  
      The second day takes you west from Merzouga through Rissani toward Todra
      Gorges. Walk between the high canyon walls before continuing through the
      landscapes of the Dades Valley, where you spend the second night.
  
      On the final day, travel through southern Morocco toward Ouarzazate and
      Ait Ben Haddou. After exploring the fortified village, cross the High Atlas
      Mountains before arriving in Marrakech.
  
      This Fes to Marrakech desert tour is designed for travelers who want to
      connect the two cities while experiencing Merzouga and the Sahara along the
      way. In three days, the route combines mountain scenery, desert dunes,
      dramatic valleys and historic southern Morocco in one private journey.
    `,
  
    // ─────────────────────────────
    // ITINERARY
    // ─────────────────────────────
  
    itinerary: [
      {
        day: 1,
  
        title:
          "Fes – Ifrane – Middle Atlas – Midelt – Ziz Valley – Merzouga – Sahara Camp",
  
        description: `
          Your 3-day Fes to Marrakech desert tour begins in the morning with
          pickup from Fes.
  
          Leave the city and travel south toward Ifrane before continuing into the
          Middle Atlas Mountains.
  
          The first part of the journey passes through greener mountain scenery,
          forests and small communities. These landscapes provide a strong
          contrast with the Sahara that you will reach later in the day.
  
          Continue toward Midelt, where time can be allowed for a break before
          traveling farther south.
  
          As the road continues, the scenery becomes drier and more open.
  
          Travel through the Ziz Valley, where palm groves stretch through the
          rocky landscape below. Stops can be made along the route for photos and
          panoramic views.
  
          Continue through the Errachidia region toward Merzouga.
  
          On arrival near the Erg Chebbi dunes, prepare for your camel trek into
          the Sahara.
  
          Ride across the golden dunes as the sunlight begins to soften over the
          desert. Depending on timing and weather, stop to enjoy the sunset before
          continuing toward your camp.
  
          After arriving at the Sahara camp, enjoy dinner and spend your first
          night surrounded by the quiet desert landscape.
        `,
  
        highlights: [
          "Morning pickup in Fes",
          "Travel through Ifrane",
          "Cross the Middle Atlas Mountains",
          "Continue through the Midelt region",
          "Enjoy panoramic views of the Ziz Valley",
          "Travel toward Merzouga",
          "Reach the Erg Chebbi dunes",
          "Camel trek across the Sahara",
          "Enjoy the desert sunset",
          "Dinner and overnight at a Sahara camp",
        ],
      },
  
      {
        day: 2,
  
        title: "Merzouga – Rissani – Todra Gorges – Dades Valley",
  
        description: `
          Wake up in the peaceful surroundings of the Sahara.
  
          If you wish, rise early to enjoy the changing morning light over the
          Erg Chebbi dunes before breakfast.
  
          After leaving the desert area, begin traveling west through
          southeastern Morocco.
  
          Pass through the Rissani region before continuing toward Tinghir and
          Todra Gorges.
  
          The landscape changes again as the open desert gives way to rocky
          mountains, palm-filled areas and deep valleys.
  
          At Todra Gorges, take time to walk between the impressive canyon walls
          and enjoy one of the most dramatic natural stops on the journey.
  
          After the visit, continue toward the Dades Valley.
  
          The road passes traditional villages and changing rock formations as you
          travel deeper into southern Morocco.
  
          Arrive in the Dades area later in the day.
  
          Enjoy dinner and spend the second night of your journey in the Dades
          Valley.
        `,
  
        highlights: [
          "Optional sunrise over the Sahara",
          "Breakfast before leaving Merzouga",
          "Travel through the Rissani area",
          "Continue toward Tinghir",
          "Visit Todra Gorges",
          "Walk between the canyon walls",
          "Travel through southern Morocco",
          "Arrive in the Dades Valley",
          "Dinner and overnight in Dades",
        ],
      },
  
      {
        day: 3,
  
        title:
          "Dades Valley – Ouarzazate – Ait Ben Haddou – High Atlas – Marrakech",
  
        description: `
          After breakfast, leave the Dades Valley and continue west toward
          Marrakech.
  
          Travel through the landscapes of southern Morocco toward Ouarzazate.
  
          The route passes dry valleys, traditional communities and mountain
          scenery before continuing to Ait Ben Haddou.
  
          Take time to explore the fortified village and discover its traditional
          earthen architecture.
  
          After the visit, begin crossing the High Atlas Mountains.
  
          The mountain road offers panoramic views, winding passes and small
          villages along the route.
  
          Stops can be made for photos, rest and meals depending on your schedule.
  
          As the journey continues, the mountain landscapes gradually give way to
          the plains surrounding Marrakech.
  
          Arrive in Marrakech later in the day.
  
          Your desert tour from Fes to Marrakech ends after three days of Middle
          Atlas scenery, the Sahara dunes of Merzouga, Todra Gorges, southern
          Morocco and the High Atlas Mountains.
  
          Final drop-off can be arranged according to your accommodation or onward
          travel plans in Marrakech.
        `,
  
        highlights: [
          "Breakfast in the Dades Valley",
          "Travel through southern Morocco",
          "Continue toward Ouarzazate",
          "Visit Ait Ben Haddou",
          "Discover traditional earthen architecture",
          "Cross the High Atlas Mountains",
          "Enjoy panoramic mountain scenery",
          "Arrive in Marrakech",
          "Final drop-off in Marrakech",
          "End of the three-day desert tour",
        ],
      },
    ],
  
    // ─────────────────────────────
    // INCLUDED
    // ─────────────────────────────
  
    included: [
      "Private transportation from Fes to Marrakech",
      "English- or French-speaking driver",
      "Two nights of accommodation",
      "One night at a Sahara desert camp near Merzouga",
      "One night in the Dades Valley",
      "Daily breakfasts",
      "Dinner at the Sahara desert camp",
      "Dinner in the Dades area",
      "Camel ride across the Erg Chebbi dunes",
      "Free time at the main sightseeing stops",
      "Flexible stops for photos and breaks during the journey",
      "Pickup in Fes",
      "Final drop-off in Marrakech",
    ],
  
    // ─────────────────────────────
    // NOT INCLUDED
    // ─────────────────────────────
  
    excluded: [
      "Lunches",
      "Drinks",
      "Entrance fees to monuments and attractions",
      "Local guides unless requested",
      "Optional activities not mentioned in the itinerary",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities",
      "Any services not mentioned in the included section",
    ],
  
    // ─────────────────────────────
    // ACCOMMODATION
    // ─────────────────────────────
  
    accommodation: [
      {
        night: 1,
        location: "Merzouga",
        type: "Sahara Desert Camp",
      },
      {
        night: 2,
        location: "Dades Valley",
        type: "Hotel or Riad",
      },
    ],
  
    // ─────────────────────────────
    // GALLERY
    // ─────────────────────────────
  
    gallery: [
      "/images/tours/3-day-fes-marrakech-desert-tour.webp",
    ],
  
    // ─────────────────────────────
    // FAQ
    // ─────────────────────────────
  
    faqs: [
      {
        question: "Is the Fes to Marrakech desert tour private?",
  
        answer:
          "Yes. This is a private three-day journey for you and your travel group, with private transportation and more flexibility for stops and breaks along the route.",
      },
  
      {
        question: "Where does the 3-day desert tour start and finish?",
  
        answer:
          "The tour starts in Fes and finishes in Marrakech. The route travels south through the Middle Atlas and Merzouga before continuing west through Todra Gorges, the Dades Valley and Ait Ben Haddou.",
      },
  
      {
        question: "Does the Fes to Marrakech desert tour go through Merzouga?",
  
        answer:
          "Yes. Merzouga and the Erg Chebbi dunes are a central part of the itinerary. You reach the Sahara on the first day and spend the night at a desert camp.",
      },
  
      {
        question: "Do we spend a night in the Sahara Desert?",
  
        answer:
          "Yes. The first night is spent at a Sahara desert camp near the Erg Chebbi dunes in Merzouga.",
      },
  
      {
        question: "Is a camel ride included in the tour?",
  
        answer:
          "Yes. A camel ride across the Erg Chebbi dunes is included as part of the Merzouga desert experience.",
      },
  
      {
        question: "Can we watch the sunset in the Sahara?",
  
        answer:
          "The camel trek is normally planned for the later part of the day so you can experience the changing light over the dunes. The exact sunset experience depends on arrival time and weather conditions.",
      },
  
      {
        question: "Where do we stay on the second night?",
  
        answer:
          "The second night is spent in the Dades Valley at a hotel or riad after visiting Todra Gorges.",
      },
  
      {
        question: "Does the tour visit Todra Gorges?",
  
        answer:
          "Yes. Todra Gorges is visited on the second day while traveling from the Merzouga area toward the Dades Valley.",
      },
  
      {
        question: "Does the Fes to Marrakech tour visit Ait Ben Haddou?",
  
        answer:
          "Yes. Ait Ben Haddou is visited on the third day before crossing the High Atlas Mountains toward Marrakech.",
      },
  
      {
        question: "Does the tour pass through Ouarzazate?",
  
        answer:
          "Yes. The final day's route travels through the Ouarzazate area before continuing to Ait Ben Haddou and the High Atlas Mountains.",
      },
  
      {
        question: "How much driving is involved in the three-day tour?",
  
        answer:
          "The route covers a long distance between Fes and Marrakech, so each day includes several hours of driving. The journey is broken up with scenic stops, sightseeing, meals and two overnight stays.",
      },
  
      {
        question: "Is this better than traveling directly from Fes to Marrakech?",
  
        answer:
          "The direct journey is faster, while this three-day route is designed for travelers who want to experience the Sahara. It adds Merzouga, a desert camp, Todra Gorges, the Dades Valley and Ait Ben Haddou before reaching Marrakech.",
      },
  
      {
        question: "Are breakfasts and dinners included?",
  
        answer:
          "Daily breakfasts are included. Dinner is also included at the Sahara desert camp and during the overnight stay in the Dades area.",
      },
  
      {
        question: "Are lunches included?",
  
        answer:
          "Lunches are not included. Stops are made along the route where you can choose a restaurant according to your preferences.",
      },
  
      {
        question: "What should I bring for the Sahara camp?",
  
        answer:
          "Bring comfortable clothing, walking shoes, sun protection and an extra layer for the evening. Temperatures in the desert can change between daytime and night.",
      },
  
      {
        question: "Can the 3-day Fes to Marrakech desert tour be customized?",
  
        answer:
          "Yes. Because the tour is private, some details can be adapted to your travel dates, accommodation preferences and onward plans.",
      },
  
      {
        question: "Can families take this desert tour?",
  
        answer:
          "Families can request the tour. If you are traveling with children, share their ages when contacting us so the driving schedule, accommodation and camel experience can be planned comfortably.",
      },
  
      {
        question: "What time do we arrive in Marrakech on day three?",
  
        answer:
          "Arrival time can vary depending on traffic, sightseeing stops, meals and road conditions. The tour normally reaches Marrakech later in the day.",
      },
    ],
  
    // ─────────────────────────────
    // SEO
    // ─────────────────────────────
  
    seo: {
      title:
        "3-Day Fes to Marrakech Desert Tour | Moroccan Trip",
  
      description:
        "Take a private 3-day Fes to Marrakech desert tour via Merzouga with a camel ride, Sahara camp, Todra Gorges, Ait Ben Haddou and High Atlas views.",
  
      // Internal SEO keyword map only.
      // Do not output these as a meta keywords tag.
      //
      // This cluster intentionally targets the Fes → Marrakech
      // direction and avoids the existing Marrakech → Fes page.
      keywords: [
        "fes to marrakech desert tour",
        "fes to marrakech desert tour 3 days",
        "3 days desert tour from fes to marrakech",
        "fes to marrakech desert tours",
        "desert tour from fes to marrakech",
        "fes to marrakech sahara tour",
        "3 days tour from fes to marrakech",
        "tours from fes to marrakech",
      ],
    },
  
    // ─────────────────────────────
    // BOOKING
    // ─────────────────────────────
  
    booking: {
      available: true,
      minimumDays: 3,
      customizable: true,
      contactLabel: "Request a Quote",
    },
  },
  {
    id: "20",
  
    // ─────────────────────────────
    // BASIC INFORMATION
    // ─────────────────────────────
  
    slug: "3-day-fes-merzouga-desert-tour",
  
    title: "3-Day Fes to Merzouga Desert Tour",
  
    shortDescription:
      "Escape from Fes to the Sahara on a private 3-day Merzouga desert tour through the Middle Atlas, Ziz Valley and Erg Chebbi, with a camel ride and desert camp.",
  
    image: "/images/tours/3-day-fes-merzouga-desert-tour.webp",
  
    badge: "Fes to Merzouga",
  
    featured: true,
  
    category: "Desert Tours",
  
    // ─────────────────────────────
    // TOUR DETAILS
    // ─────────────────────────────
  
    duration: "3 Days / 2 Nights",
  
    nights: 2,
  
    tourType: "Private Tour",
  
    groupSize: "Up to 4 People",
  
    languages: ["English", "French"],
  
    departure: "Fes",
  
    arrival: "Fes",
  
    locations: [
      "Fes",
      "Ifrane",
      "Middle Atlas Mountains",
      "Midelt",
      "Ziz Valley",
      "Errachidia",
      "Erfoud",
      "Merzouga",
      "Erg Chebbi",
      "Sahara Desert",
      "Fes",
    ],
  
    // ─────────────────────────────
    // PRICING
    // ─────────────────────────────
  
    // No fixed price.
    // The final quote depends on the number of travelers,
    // accommodation level and requested services.
  
    // ─────────────────────────────
    // HIGHLIGHTS
    // ─────────────────────────────
  
    highlights: [
      "Travel from Fes to Merzouga on a private three-day journey",
      "Pass through Ifrane and the landscapes of the Middle Atlas Mountains",
      "Enjoy changing scenery as the route moves toward southern Morocco",
      "Stop for panoramic views across the palm-filled Ziz Valley",
      "Travel through Errachidia and Erfoud on the way to the Sahara",
      "Reach Merzouga at the edge of the Erg Chebbi dunes",
      "Ride a camel across the golden Sahara dunes",
      "Watch the changing light over the desert near sunset",
      "Spend a memorable night at a Sahara desert camp",
      "Enjoy extra time around Merzouga instead of leaving the next morning",
      "Discover more of the landscapes surrounding Erg Chebbi",
      "Spend a second night in the Merzouga area",
      "Return to Fes through the Middle Atlas landscapes",
      "Enjoy flexible photo and rest stops during the private journey",
    ],
  
    // ─────────────────────────────
    // OVERVIEW
    // ─────────────────────────────
  
    overview: `
      Leave Fes behind and experience the Sahara on this private 3-day journey
      to Merzouga and the golden dunes of Erg Chebbi.
  
      The route begins by traveling south from Fes through Ifrane and the Middle
      Atlas Mountains. Forests, mountain roads and cooler landscapes gradually
      change as you continue toward Midelt and the valleys of southeastern
      Morocco.
  
      Farther south, travel through the Ziz Valley, where long palm groves run
      between rocky mountains. Continue through the Errachidia and Erfoud areas
      before reaching Merzouga at the edge of the Sahara.
  
      Your first evening is dedicated to one of the main experiences of the
      journey. Ride a camel across the Erg Chebbi dunes, enjoy the changing
      desert light and spend the night at a Sahara camp.
  
      Unlike a route that immediately continues toward Marrakech, this Fes to
      Merzouga tour gives you another day around the desert. Spend time exploring
      the landscapes surrounding Merzouga, enjoy the atmosphere of Erg Chebbi and
      slow the journey down before returning north.
  
      On the third day, leave Merzouga and travel back toward Fes through the Ziz
      Valley, Middle Atlas region and mountain scenery experienced on the first
      day from a different direction.
  
      This three-day tour from Fes to Merzouga is a practical choice for travelers
      who want a Sahara experience while starting and finishing in Fes. It
      combines mountain landscapes, palm valleys, camel trekking, desert scenery
      and two nights near Erg Chebbi in one private journey.
    `,
  
    // ─────────────────────────────
    // ITINERARY
    // ─────────────────────────────
  
    itinerary: [
      {
        day: 1,
  
        title:
          "Fes – Ifrane – Middle Atlas – Midelt – Ziz Valley – Merzouga – Sahara Camp",
  
        description: `
          Your three-day tour from Fes to Merzouga begins with morning pickup in
          Fes.
  
          Leave the city and travel south toward Ifrane before continuing into
          the Middle Atlas Mountains.
  
          This first part of the journey passes through greener landscapes,
          mountain roads and forested areas that look very different from the
          Sahara waiting farther south.
  
          Continue toward the Midelt region, where time can be allowed for a
          break before continuing the journey.
  
          As you travel farther south, the landscape gradually becomes drier and
          more open.
  
          Reach the Ziz Valley and stop to enjoy views across its long palm
          groves and surrounding rocky scenery.
  
          Continue through the Errachidia and Erfoud areas toward Merzouga.
  
          On arrival near the Erg Chebbi dunes, prepare for your camel trek into
          the Sahara.
  
          Ride across the golden dunes as the sunlight begins to soften over the
          desert. Depending on arrival time and weather, enjoy the changing colors
          near sunset before continuing toward your camp.
  
          After arriving at the Sahara camp, enjoy dinner and spend your first
          night surrounded by the quiet dunes and open desert sky.
        `,
  
        highlights: [
          "Morning pickup in Fes",
          "Travel through Ifrane",
          "Cross the Middle Atlas Mountains",
          "Continue through the Midelt region",
          "Enjoy panoramic views across the Ziz Valley",
          "Travel through Errachidia and Erfoud",
          "Arrive in Merzouga",
          "Reach the Erg Chebbi dunes",
          "Camel trek across the Sahara",
          "Enjoy the evening desert scenery",
          "Dinner and overnight at a Sahara camp",
        ],
      },
  
      {
        day: 2,
  
        title: "Merzouga Desert Exploration and Erg Chebbi",
  
        description: `
          Wake up surrounded by the landscapes of the Sahara.
  
          If you wish, rise early and enjoy the morning light over the Erg Chebbi
          dunes before breakfast.
  
          Today is intentionally slower than the first day.
  
          Instead of immediately leaving Merzouga, spend more time discovering
          the desert surroundings and different views around Erg Chebbi.
  
          Depending on the day's arrangements and your interests, stops can be
          made around the Merzouga area to experience different desert landscapes
          and learn more about everyday life near the Sahara.
  
          There is also time to relax after the long journey from Fes and enjoy
          the open scenery at a more comfortable pace.
  
          Later in the day, return to your accommodation in the Merzouga area.
  
          Enjoy the evening near the dunes and spend your second night in
          Merzouga.
        `,
  
        highlights: [
          "Optional early morning Sahara views",
          "Breakfast near the Erg Chebbi dunes",
          "Full day around the Merzouga area",
          "Discover different desert landscapes",
          "Enjoy views around Erg Chebbi",
          "Experience the Sahara at a slower pace",
          "Free time to relax near the dunes",
          "Overnight stay in Merzouga",
        ],
      },
  
      {
        day: 3,
  
        title:
          "Merzouga – Erfoud – Ziz Valley – Midelt – Middle Atlas – Ifrane – Fes",
  
        description: `
          After breakfast, leave Merzouga and begin the return journey toward
          Fes.
  
          Travel north through the Erfoud and Errachidia areas before reaching the
          Ziz Valley once again.
  
          The return route gives you another chance to enjoy the contrast between
          the dry landscapes of southeastern Morocco and the palm-filled valley.
  
          Continue north toward the Midelt region as the scenery gradually
          changes from desert surroundings to higher mountain landscapes.
  
          Travel through the Middle Atlas Mountains and pass through the Ifrane
          area before approaching Fes.
  
          Stops can be made during the journey for rest, meals and photos
          depending on your schedule.
  
          Arrive back in Fes later in the day.
  
          Your Fes to Merzouga tour ends after three days of mountain roads,
          Sahara landscapes, Erg Chebbi dunes and desert experiences.
  
          Final drop-off can be arranged according to your accommodation or
          onward travel plans in Fes.
        `,
  
        highlights: [
          "Breakfast in Merzouga",
          "Leave the Sahara",
          "Travel through Erfoud and Errachidia",
          "See the Ziz Valley again on the return route",
          "Continue through the Midelt region",
          "Cross the Middle Atlas Mountains",
          "Pass through the Ifrane area",
          "Return to Fes",
          "Final drop-off in Fes",
          "End of the three-day journey",
        ],
      },
    ],
  
    // ─────────────────────────────
    // INCLUDED
    // ─────────────────────────────
  
    included: [
      "Private transportation from Fes to Merzouga and back to Fes",
      "English- or French-speaking driver",
      "Two nights of accommodation",
      "One night at a Sahara desert camp near Merzouga",
      "One night at a hotel or riad in the Merzouga area",
      "Daily breakfasts",
      "Dinner at the Sahara desert camp",
      "Camel ride across the Erg Chebbi dunes",
      "Time to explore the Merzouga desert area",
      "Free time at the main sightseeing stops",
      "Flexible stops for photos and breaks during the journey",
      "Pickup in Fes",
      "Final drop-off in Fes",
    ],
  
    // ─────────────────────────────
    // NOT INCLUDED
    // ─────────────────────────────
  
    excluded: [
      "Lunches",
      "Dinners unless mentioned in the included section",
      "Drinks",
      "Entrance fees to attractions",
      "Local guides unless requested",
      "Optional desert activities not mentioned in the itinerary",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities",
      "Any services not mentioned in the included section",
    ],
  
    // ─────────────────────────────
    // ACCOMMODATION
    // ─────────────────────────────
  
    accommodation: [
      {
        night: 1,
        location: "Merzouga",
        type: "Sahara Desert Camp",
      },
      {
        night: 2,
        location: "Merzouga",
        type: "Hotel or Riad",
      },
    ],
  
    // ─────────────────────────────
    // GALLERY
    // ─────────────────────────────
  
    gallery: [
      "/images/tours/3-day-fes-merzouga-desert-tour.webp",
    ],
  
    // ─────────────────────────────
    // FAQ
    // ─────────────────────────────
  
    faqs: [
      {
        question: "Is the 3-day Fes to Merzouga tour private?",
  
        answer:
          "Yes. This is a private journey for you and your travel group, with private transportation and more flexibility for stops, breaks and the pace of the tour.",
      },
  
      {
        question: "Where does the Fes to Merzouga tour start and finish?",
  
        answer:
          "The tour starts in Fes, travels south to Merzouga and the Erg Chebbi dunes, and returns to Fes on the third day.",
      },
  
      {
        question: "How many nights are included?",
  
        answer:
          "The tour includes two nights in the Merzouga area: one night at a Sahara desert camp and one night at a hotel or riad.",
      },
  
      {
        question: "Does the tour include the Sahara Desert?",
  
        answer:
          "Yes. Merzouga and the Erg Chebbi dunes are the main focus of the journey, with a camel trek and an overnight stay at a Sahara desert camp.",
      },
  
      {
        question: "Is a camel ride included?",
  
        answer:
          "Yes. A camel ride across the Erg Chebbi dunes is included as part of your Sahara desert experience.",
      },
  
      {
        question: "Do we sleep in the desert?",
  
        answer:
          "Yes. The first night is spent at a Sahara desert camp near Merzouga and the Erg Chebbi dunes.",
      },
  
      {
        question: "What do we do on the second day in Merzouga?",
  
        answer:
          "The second day is kept for exploring the Merzouga area and enjoying more time around Erg Chebbi instead of immediately beginning the return journey to Fes.",
      },
  
      {
        question: "Do we spend both nights in Merzouga?",
  
        answer:
          "Yes. Both nights are in the Merzouga area, with the first at a Sahara camp and the second at a hotel or riad.",
      },
  
      {
        question: "Does the tour pass through Ifrane?",
  
        answer:
          "Yes. The road between Fes and Merzouga passes through the Ifrane area and the Middle Atlas Mountains.",
      },
  
      {
        question: "Does the tour include the Ziz Valley?",
  
        answer:
          "Yes. The itinerary travels through the Ziz Valley on the way to Merzouga and again during the return journey toward Fes.",
      },
  
      {
        question: "Does the tour pass through Erfoud?",
  
        answer:
          "Yes. The journey passes through the Erfoud region while traveling between the Ziz Valley and Merzouga.",
      },
  
      {
        question: "How much driving is involved?",
  
        answer:
          "Fes and Merzouga are separated by a long road journey, so the first and third days include several hours of driving. Stops are made along the route for scenery, rest, meals and photos.",
      },
  
      {
        question: "What is the difference between this tour and a Fes to Marrakech desert tour?",
  
        answer:
          "This itinerary returns to Fes and gives you more time around Merzouga. A Fes to Marrakech desert tour continues west through Todra Gorges, the Dades Valley and Ait Ben Haddou before finishing in Marrakech.",
      },
  
      {
        question: "Are meals included?",
  
        answer:
          "Daily breakfasts are included, along with dinner at the Sahara desert camp. Other lunches and dinners are not included unless agreed as part of your final arrangements.",
      },
  
      {
        question: "What should I bring for the desert camp?",
  
        answer:
          "Bring comfortable clothing, walking shoes, sun protection and an extra layer for the evening. Sahara temperatures can change between daytime and night.",
      },
  
      {
        question: "Can the Fes to Merzouga tour be customized?",
  
        answer:
          "Yes. Because the journey is private, some details can be adapted to your travel dates, accommodation preferences and interests.",
      },
  
      {
        question: "Is the tour suitable for families?",
  
        answer:
          "Families can request this private tour. If you are traveling with children, share their ages when contacting us so the driving schedule, accommodation and camel experience can be planned comfortably.",
      },
  
      {
        question: "What time do we return to Fes on day three?",
  
        answer:
          "The exact arrival time depends on road conditions, traffic, meal breaks and the number of stops made during the return journey. Arrival is normally later in the day.",
      },
    ],
  
    // ─────────────────────────────
    // SEO
    // ─────────────────────────────
  
    seo: {
      title:
        "3-Day Fes to Merzouga Desert Tour | Moroccan Trip",
  
      description:
        "Take a private 3-day Fes to Merzouga desert tour with Middle Atlas views, Ziz Valley, Erg Chebbi, a camel ride, Sahara camp and return to Fes.",
  
      // Internal SEO keyword map only.
      // Do not output these as a meta keywords tag.
      //
      // This cluster intentionally focuses on Fes → Merzouga
      // and avoids the existing Fes → Marrakech desert page.
      keywords: [
        "3 days tour from fes to merzouga",
        "fes to merzouga tour",
        "3 days from fes to merzouga",
        "fes to merzouga desert tours",
        "tours from fes to merzouga",
        "3 day sahara desert tour from fes",
        "merzouga tour from fes",
        "fes to erg chebbi",
        "fes to sahara desert",
      ],
    },
  
    // ─────────────────────────────
    // BOOKING
    // ─────────────────────────────
  
    booking: {
      available: true,
      minimumDays: 3,
      customizable: true,
      contactLabel: "Request a Quote",
    },
  },
  {
    id: "21",
  
    // ─────────────────────────────
    // BASIC INFORMATION
    // ─────────────────────────────
  
    slug: "4-day-fes-marrakech-desert-tour",
  
    title: "4-Day Fes to Marrakech Desert Tour",
  
    shortDescription:
      "Travel from Fes to Marrakech on a private 4-day desert tour with extra time in Merzouga, a camel trek across Erg Chebbi, a Sahara camp, Todra Gorges and Ait Ben Haddou.",
  
    image: "/images/tours/4-day-fes-marrakech-desert-tour.webp",
  
    badge: "Extended Sahara Journey",
  
    featured: true,
  
    category: "Desert Tours",
  
    // ─────────────────────────────
    // TOUR DETAILS
    // ─────────────────────────────
  
    duration: "4 Days / 3 Nights",
  
    nights: 3,
  
    tourType: "Private Tour",
  
    groupSize: "Up to 4 People",
  
    languages: ["English", "French"],
  
    departure: "Fes",
  
    arrival: "Marrakech",
  
    locations: [
      "Fes",
      "Ifrane",
      "Middle Atlas Mountains",
      "Midelt",
      "Ziz Valley",
      "Errachidia",
      "Erfoud",
      "Merzouga",
      "Erg Chebbi",
      "Sahara Desert",
      "Rissani",
      "Todra Gorges",
      "Dades Valley",
      "Ouarzazate",
      "Ait Ben Haddou",
      "High Atlas Mountains",
      "Marrakech",
    ],
  
    // ─────────────────────────────
    // PRICING
    // ─────────────────────────────
  
    // No fixed price.
    // The final quote depends on the number of travelers,
    // accommodation level and requested services.
  
    // ─────────────────────────────
    // HIGHLIGHTS
    // ─────────────────────────────
  
    highlights: [
      "Travel privately from Fes to Marrakech through the Sahara Desert",
      "Cross the Middle Atlas Mountains through Ifrane and changing scenery",
      "Travel through Midelt and the palm-filled Ziz Valley",
      "Reach Merzouga and enjoy your first views of the Erg Chebbi dunes",
      "Spend your first night near the Sahara instead of rushing directly to camp",
      "Enjoy a full day exploring the landscapes around Merzouga",
      "Experience more of the desert surroundings and local atmosphere",
      "Ride a camel across the golden Erg Chebbi dunes",
      "Watch the changing light over the Sahara near sunset",
      "Spend a memorable night at a desert camp",
      "Travel through Rissani and southeastern Morocco",
      "Walk between the impressive walls of Todra Gorges",
      "Spend a night in the Dades Valley",
      "Travel through Ouarzazate and southern Morocco",
      "Visit the historic fortified village of Ait Ben Haddou",
      "Cross the High Atlas Mountains before arriving in Marrakech",
      "Enjoy a slower desert experience than shorter Fes to Marrakech routes",
    ],
  
    // ─────────────────────────────
    // OVERVIEW
    // ─────────────────────────────
  
    overview: `
      Travel from Fes to Marrakech through the Sahara on this private four-day
      desert journey with extra time in Merzouga.
  
      The route begins in Fes and crosses the Middle Atlas Mountains through
      Ifrane before continuing toward Midelt and the Ziz Valley. As you travel
      south, green mountain landscapes gradually give way to dry valleys, palm
      groves and the scenery of southeastern Morocco.
  
      Arrive in Merzouga beside the golden dunes of Erg Chebbi and spend your
      first night in the desert area. Unlike a shorter route, there is no need to
      begin the camel trek immediately after the long drive from Fes.
  
      The second day is dedicated to Merzouga and the Sahara. Spend time
      discovering the desert surroundings before riding a camel across the dunes
      later in the afternoon. Enjoy the changing colors of Erg Chebbi near sunset
      and continue to your Sahara camp for dinner and an overnight stay.
  
      After leaving the desert, travel through Rissani toward Todra Gorges. Walk
      between the high canyon walls before continuing through the landscapes of
      the Dades Valley, where you spend the third night.
  
      On the final day, continue through southern Morocco toward Ouarzazate and
      Ait Ben Haddou. Explore the fortified village before crossing the High Atlas
      Mountains and arriving in Marrakech.
  
      This four-day Fes to Marrakech desert tour is designed for travelers who
      want more time in the Sahara than a faster three-day itinerary allows. The
      extra day creates a more relaxed Merzouga experience while still including
      Todra Gorges, the Dades Valley, Ait Ben Haddou and the High Atlas Mountains.
    `,
  
    // ─────────────────────────────
    // ITINERARY
    // ─────────────────────────────
  
    itinerary: [
      {
        day: 1,
  
        title:
          "Fes – Ifrane – Middle Atlas – Midelt – Ziz Valley – Erfoud – Merzouga",
  
        description: `
          Your four-day journey from Fes to Marrakech begins with morning pickup
          in Fes.
  
          Leave the city and travel south toward Ifrane before entering the Middle
          Atlas Mountains.
  
          The first part of the journey passes through greener landscapes,
          mountain roads and forested areas that feel very different from the
          Sahara waiting farther south.
  
          Continue toward Midelt, where time can be allowed for a break before
          traveling deeper into southeastern Morocco.
  
          As the road continues, the landscape gradually becomes drier and more
          open.
  
          Travel through the Ziz Valley and stop to enjoy views across its long
          palm groves surrounded by rocky scenery.
  
          Continue through the Errachidia and Erfoud regions before reaching
          Merzouga at the edge of the Erg Chebbi dunes.
  
          Because this itinerary gives you four days between Fes and Marrakech,
          there is no need to begin the camel trek immediately after the long
          drive.
  
          Settle into your accommodation, enjoy your first views of the Sahara and
          spend a relaxed evening near the dunes.
  
          Spend the first night in the Merzouga area.
        `,
  
        highlights: [
          "Morning pickup in Fes",
          "Travel through Ifrane",
          "Cross the Middle Atlas Mountains",
          "Continue through the Midelt region",
          "Enjoy panoramic views across the Ziz Valley",
          "Travel through Errachidia and Erfoud",
          "Arrive in Merzouga",
          "See the Erg Chebbi dunes",
          "Relax after the journey from Fes",
          "Overnight stay in Merzouga",
        ],
      },
  
      {
        day: 2,
  
        title:
          "Merzouga Desert Exploration – Erg Chebbi – Camel Trek – Sahara Camp",
  
        description: `
          Today is dedicated to experiencing the Merzouga desert area at a more
          comfortable pace.
  
          After breakfast, spend time discovering the landscapes surrounding Erg
          Chebbi.
  
          Depending on the day's arrangements and your interests, explore
          different areas around Merzouga and experience more of the environment
          beyond the main road.
  
          The open landscapes, small desert communities and changing views around
          the dunes give you a better understanding of this part of southeastern
          Morocco.
  
          There is also time to relax before beginning the evening desert
          experience.
  
          Later in the afternoon, prepare for your camel trek across the Sahara.
  
          Ride over the golden Erg Chebbi dunes as the sunlight begins to soften.
          Depending on weather and timing, stop to enjoy the changing colors near
          sunset before continuing toward your desert camp.
  
          After arriving at camp, enjoy dinner and spend the night surrounded by
          the quiet dunes and open Sahara sky.
  
          Having a complete day around Merzouga is one of the main advantages of
          choosing a four-day desert route from Fes to Marrakech.
        `,
  
        highlights: [
          "Full day around the Merzouga desert",
          "Explore the landscapes surrounding Erg Chebbi",
          "Discover more of the Sahara environment",
          "Enjoy a relaxed pace before the camel trek",
          "Camel ride across the dunes",
          "Experience the changing desert light",
          "Dinner at the Sahara camp",
          "Overnight stay in the desert",
        ],
      },
  
      {
        day: 3,
  
        title: "Merzouga – Rissani – Todra Gorges – Dades Valley",
  
        description: `
          Wake up in the peaceful surroundings of the Sahara.
  
          If you wish, rise early and enjoy the morning light over the Erg Chebbi
          dunes before breakfast.
  
          Leave the Merzouga area and begin traveling west through southeastern
          Morocco.
  
          Pass through the Rissani region before continuing toward Tinghir and
          Todra Gorges.
  
          The scenery changes as the open desert gives way to rocky mountains,
          palm-filled areas and deep valleys.
  
          At Todra Gorges, take time to walk between the impressive canyon walls
          and enjoy one of the most dramatic natural stops on the route.
  
          After the visit, continue toward the Dades Valley.
  
          The road passes traditional villages, rocky formations and changing
          mountain scenery before reaching the Dades area later in the day.
  
          Enjoy dinner and spend your third night in the Dades Valley.
        `,
  
        highlights: [
          "Optional early Sahara sunrise",
          "Breakfast before leaving Merzouga",
          "Travel through the Rissani region",
          "Continue toward Tinghir",
          "Visit Todra Gorges",
          "Walk between the canyon walls",
          "Travel through changing valley scenery",
          "Arrive in the Dades Valley",
          "Dinner and overnight in Dades",
        ],
      },
  
      {
        day: 4,
  
        title:
          "Dades Valley – Ouarzazate – Ait Ben Haddou – High Atlas – Marrakech",
  
        description: `
          After breakfast, leave the Dades Valley and begin the final stage of
          your journey toward Marrakech.
  
          Travel west through the landscapes of southern Morocco toward
          Ouarzazate.
  
          Continue to Ait Ben Haddou, one of the country's best-known fortified
          villages.
  
          Take time to explore the village and discover its traditional earthen
          architecture before continuing toward the High Atlas Mountains.
  
          The road then climbs through mountain landscapes, valleys and
          traditional villages as you make your way toward Marrakech.
  
          Stops can be made for photos, rest and meals depending on your schedule.
  
          As the journey continues, the High Atlas scenery gradually gives way to
          the plains surrounding Marrakech.
  
          Arrive in Marrakech later in the day.
  
          Your four-day desert journey from Fes to Marrakech ends after
          experiencing the Middle Atlas, Merzouga, Erg Chebbi, the Sahara Desert,
          Todra Gorges, the Dades Valley and Ait Ben Haddou.
  
          Final drop-off can be arranged according to your accommodation or onward
          travel plans in Marrakech.
        `,
  
        highlights: [
          "Breakfast in the Dades Valley",
          "Travel through southern Morocco",
          "Continue toward Ouarzazate",
          "Visit Ait Ben Haddou",
          "Explore traditional earthen architecture",
          "Cross the High Atlas Mountains",
          "Enjoy panoramic mountain scenery",
          "Arrive in Marrakech",
          "Final drop-off in Marrakech",
          "End of the four-day desert journey",
        ],
      },
    ],
  
    // ─────────────────────────────
    // INCLUDED
    // ─────────────────────────────
  
    included: [
      "Private transportation from Fes to Marrakech",
      "English- or French-speaking driver",
      "Three nights of accommodation",
      "One night at a hotel or riad in Merzouga",
      "One night at a Sahara desert camp near Erg Chebbi",
      "One night in the Dades Valley",
      "Daily breakfasts",
      "Dinner at the Sahara desert camp",
      "Dinner in the Dades Valley",
      "Camel ride across the Erg Chebbi dunes",
      "Full day to experience the Merzouga desert area",
      "Free time at the main sightseeing stops",
      "Flexible stops for photos and breaks during the journey",
      "Pickup in Fes",
      "Final drop-off in Marrakech",
    ],
  
    // ─────────────────────────────
    // NOT INCLUDED
    // ─────────────────────────────
  
    excluded: [
      "Lunches",
      "Dinners unless mentioned in the included section",
      "Drinks",
      "Entrance fees to monuments and attractions",
      "Local guides unless requested",
      "Optional desert activities not mentioned in the itinerary",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities",
      "Any services not mentioned in the included section",
    ],
  
    // ─────────────────────────────
    // ACCOMMODATION
    // ─────────────────────────────
  
    accommodation: [
      {
        night: 1,
        location: "Merzouga",
        type: "Hotel or Riad",
      },
      {
        night: 2,
        location: "Merzouga",
        type: "Sahara Desert Camp",
      },
      {
        night: 3,
        location: "Dades Valley",
        type: "Hotel or Riad",
      },
    ],
  
    // ─────────────────────────────
    // GALLERY
    // ─────────────────────────────
  
    gallery: [
      "/images/tours/4-day-fes-marrakech-desert-tour.webp",
    ],
  
    // ─────────────────────────────
    // FAQ
    // ─────────────────────────────
  
    faqs: [
      {
        question: "Is the 4-day Fes to Marrakech desert tour private?",
  
        answer:
          "Yes. This is a private journey for you and your travel group, with private transportation and more flexibility for sightseeing stops, breaks and the pace of the tour.",
      },
  
      {
        question: "Where does the four-day desert tour start and finish?",
  
        answer:
          "The tour starts in Fes and finishes in Marrakech. The route travels through the Middle Atlas Mountains, Merzouga, the Sahara Desert, Todra Gorges, the Dades Valley and Ait Ben Haddou.",
      },
  
      {
        question: "How many nights are included?",
  
        answer:
          "The tour includes three nights: one at a hotel or riad in Merzouga, one at a Sahara desert camp and one in the Dades Valley.",
      },
  
      {
        question: "Does the tour include Merzouga?",
  
        answer:
          "Yes. Merzouga is an important part of the itinerary. You arrive on the first day and spend the following day exploring the desert surroundings before the camel trek and Sahara camp.",
      },
  
      {
        question: "Why choose four days instead of a three-day Fes to Marrakech desert tour?",
  
        answer:
          "The four-day itinerary gives you more time in Merzouga. Instead of arriving after the long drive from Fes and immediately beginning the camel trek, you spend the first night near the dunes and have the following day for the desert experience.",
      },
  
      {
        question: "Do we have a full day in the Merzouga desert?",
  
        answer:
          "Yes. Day two is dedicated to the Merzouga and Erg Chebbi area before your camel trek and overnight stay at the Sahara camp.",
      },
  
      {
        question: "Is the camel ride included?",
  
        answer:
          "Yes. A camel ride across the Erg Chebbi dunes is included as part of the Sahara experience.",
      },
  
      {
        question: "Do we sleep in the Sahara Desert?",
  
        answer:
          "Yes. The second night is spent at a Sahara desert camp near Merzouga and the Erg Chebbi dunes.",
      },
  
      {
        question: "Can we see the Sahara sunset?",
  
        answer:
          "The camel trek is normally planned for later in the day so you can experience the changing evening light over the dunes. Exact conditions depend on weather and timing.",
      },
  
      {
        question: "Does the tour visit Todra Gorges?",
  
        answer:
          "Yes. Todra Gorges is visited on day three while traveling from Merzouga toward the Dades Valley.",
      },
  
      {
        question: "Where do we stay after Todra Gorges?",
  
        answer:
          "After visiting Todra Gorges, the journey continues to the Dades Valley, where you spend the third night.",
      },
  
      {
        question: "Does the tour pass through Ouarzazate?",
  
        answer:
          "Yes. The final day travels through the Ouarzazate area before continuing toward Ait Ben Haddou and the High Atlas Mountains.",
      },
  
      {
        question: "Does the tour include Ait Ben Haddou?",
  
        answer:
          "Yes. Ait Ben Haddou is visited on the final day before crossing the High Atlas Mountains toward Marrakech.",
      },
  
      {
        question: "How much driving is involved?",
  
        answer:
          "The journey covers a long route between Fes and Marrakech, so several days include significant driving. The four-day itinerary makes the experience more comfortable by adding extra time in Merzouga and three overnight stops.",
      },
  
      {
        question: "Are breakfasts and dinners included?",
  
        answer:
          "Daily breakfasts are included. Dinner is also included at the Sahara desert camp and during the overnight stay in the Dades Valley.",
      },
  
      {
        question: "Are lunches included?",
  
        answer:
          "Lunches are not included. Stops are made along the route where you can choose a restaurant according to your preferences.",
      },
  
      {
        question: "Are local guides included?",
  
        answer:
          "Local guides are not included by default unless they are part of your final arrangements. A guide can be requested for specific stops when planning the tour.",
      },
  
      {
        question: "Can the 4-day Fes to Marrakech desert tour be customized?",
  
        answer:
          "Yes. Because this is a private tour, some details can be adapted to your travel dates, interests, accommodation preferences and onward plans.",
      },
  
      {
        question: "What should I bring for the Sahara camp?",
  
        answer:
          "Bring comfortable clothing, walking shoes, sun protection and an extra layer for the evening. Desert temperatures can change noticeably between daytime and night.",
      },
  
      {
        question: "Is the tour suitable for families?",
  
        answer:
          "Families can request this private journey. If you are traveling with children, share their ages when contacting us so the driving schedule, accommodation and camel experience can be planned comfortably.",
      },
    ],
  
    // ─────────────────────────────
    // SEO
    // ─────────────────────────────
  
    seo: {
      title:
        "4-Day Fes to Marrakech Desert Tour | Moroccan Trip",
  
      description:
        "Take a private 4-day Fes to Marrakech desert tour with extra time in Merzouga, a camel ride, Sahara camp, Todra Gorges and Ait Ben Haddou.",
  
      // Internal SEO keyword map only.
      // Do not output these as a meta keywords tag.
      //
      // This cluster intentionally targets the 4-day version
      // and avoids using the generic keyword assigned to the
      // existing 3-day Fes to Marrakech desert tour.
      keywords: [
        "fes to marrakech desert tour 4 days",
        "4 days tour from fes to marrakech",
        "4 days desert tour from fes to marrakech",
        "4 days from fes to marrakech",
        "4 day tour fes to marrakech",
      ],
    },
  
    // ─────────────────────────────
    // BOOKING
    // ─────────────────────────────
  
    booking: {
      available: true,
      minimumDays: 4,
      customizable: true,
      contactLabel: "Request a Quote",
    },
  },
  {
    id: "22",
  
    // ─────────────────────────────
    // BASIC INFORMATION
    // ─────────────────────────────
  
    slug: "5-day-fes-marrakech-desert-tour",
  
    title: "5-Day Desert Tour from Fes to Marrakech",
  
    shortDescription:
      "Travel from Fes to Marrakech on a private 5-day desert journey with extra time in Merzouga, a Sahara camp, Todra Gorges, Dades Valley, Ouarzazate and Ait Ben Haddou.",
  
    image: "/images/tours/5-day-fes-marrakech-desert-tour.webp",
  
    badge: "Extended Desert Journey",
  
    featured: true,
  
    category: "Desert Tours",
  
    // ─────────────────────────────
    // TOUR DETAILS
    // ─────────────────────────────
  
    duration: "5 Days / 4 Nights",
  
    nights: 4,
  
    tourType: "Private Tour",
  
    groupSize: "Up to 4 People",
  
    languages: ["English", "French"],
  
    departure: "Fes",
  
    arrival: "Marrakech",
  
    locations: [
      "Fes",
      "Ifrane",
      "Middle Atlas Mountains",
      "Midelt",
      "Ziz Valley",
      "Errachidia",
      "Erfoud",
      "Merzouga",
      "Erg Chebbi",
      "Sahara Desert",
      "Rissani",
      "Todra Gorges",
      "Dades Valley",
      "Ouarzazate",
      "Ait Ben Haddou",
      "High Atlas Mountains",
      "Marrakech",
    ],
  
    // ─────────────────────────────
    // PRICING
    // ─────────────────────────────
  
    // No fixed price.
    // The final quote depends on the number of travelers,
    // accommodation level and requested services.
  
    // ─────────────────────────────
    // HIGHLIGHTS
    // ─────────────────────────────
  
    highlights: [
      "Travel privately from Fes to Marrakech through the Sahara Desert",
      "Cross the Middle Atlas Mountains through Ifrane and changing landscapes",
      "Travel through Midelt and enjoy views across the Ziz Valley",
      "Reach Merzouga at the edge of the golden Erg Chebbi dunes",
      "Spend your first night near the Sahara without rushing into the camel trek",
      "Enjoy a full day discovering the landscapes around Merzouga",
      "Ride a camel across the Erg Chebbi dunes near sunset",
      "Spend a memorable night at a Sahara desert camp",
      "Travel through Rissani and southeastern Morocco",
      "Walk between the high canyon walls of Todra Gorges",
      "Spend a night among the landscapes of the Dades Valley",
      "Enjoy a slower journey through southern Morocco",
      "Spend a night in the Ouarzazate or Ait Ben Haddou area",
      "Explore the historic fortified village of Ait Ben Haddou",
      "Cross the High Atlas Mountains before arriving in Marrakech",
      "Enjoy more time in the desert and southern Morocco than shorter routes",
    ],
  
    // ─────────────────────────────
    // OVERVIEW
    // ─────────────────────────────
  
    overview: `
      Discover the landscapes between Fes and Marrakech on this private five-day
      desert journey through Merzouga and southern Morocco.
  
      The route begins in Fes and travels south through Ifrane and the Middle
      Atlas Mountains. Continue toward Midelt and the Ziz Valley as green mountain
      scenery gradually changes into dry valleys, palm groves and the landscapes
      of southeastern Morocco.
  
      Arrive in Merzouga beside the Erg Chebbi dunes and spend your first night
      near the Sahara. The slower pace means you do not need to begin the camel
      trek immediately after the long road journey from Fes.
  
      Your second day is dedicated to the Merzouga desert area. Spend time
      discovering the surroundings of Erg Chebbi before riding a camel across the
      dunes later in the day. Enjoy the changing colors of the Sahara and spend
      the night at a desert camp.
  
      From Merzouga, continue west through Rissani toward Todra Gorges. Walk
      between the dramatic canyon walls before traveling onward through the Dades
      Valley, where mountain scenery and traditional communities replace the open
      desert landscape.
  
      The fourth day gives you more time in southern Morocco. Travel from the
      Dades region toward Ouarzazate and continue to the Ait Ben Haddou area,
      where you spend the final night before Marrakech.
  
      On the fifth day, explore Ait Ben Haddou before crossing the High Atlas
      Mountains toward Marrakech.
  
      This five-day desert tour from Fes to Marrakech is designed for travelers
      who prefer a slower journey with more time around Merzouga, the Dades Valley
      and southern Morocco. Compared with shorter routes, it reduces the need to
      combine too many major stops into the same day.
    `,
  
    // ─────────────────────────────
    // ITINERARY
    // ─────────────────────────────
  
    itinerary: [
      {
        day: 1,
  
        title:
          "Fes – Ifrane – Middle Atlas – Midelt – Ziz Valley – Erfoud – Merzouga",
  
        description: `
          Your five-day desert journey begins with morning pickup in Fes.
  
          Leave the city and travel south toward Ifrane before entering the
          landscapes of the Middle Atlas Mountains.
  
          The first part of the route passes through greener mountain scenery,
          forested areas and small communities.
  
          Continue toward Midelt, where time can be allowed for a break before
          traveling farther south.
  
          As the road continues, the surroundings gradually become drier and more
          open.
  
          Reach the Ziz Valley and enjoy views across its long palm groves,
          surrounded by rocky mountains and dry landscapes.
  
          Continue through the Errachidia and Erfoud areas toward Merzouga.
  
          Arrive beside the Erg Chebbi dunes later in the day.
  
          Because this five-day itinerary allows more time, there is no need to
          begin the camel trek immediately after the long drive from Fes.
  
          Check into your accommodation, enjoy your first views of the Sahara and
          spend a relaxed evening near the dunes.
  
          Spend the first night in Merzouga.
        `,
  
        highlights: [
          "Morning pickup in Fes",
          "Travel through Ifrane",
          "Cross the Middle Atlas Mountains",
          "Continue through the Midelt region",
          "Enjoy views across the Ziz Valley",
          "Travel through Errachidia and Erfoud",
          "Arrive in Merzouga",
          "See the Erg Chebbi dunes",
          "Relax after the journey",
          "Overnight stay in Merzouga",
        ],
      },
  
      {
        day: 2,
  
        title:
          "Merzouga Desert Exploration – Erg Chebbi – Camel Trek – Sahara Camp",
  
        description: `
          Today is dedicated to the Sahara and the landscapes surrounding
          Merzouga.
  
          After breakfast, spend time discovering the Erg Chebbi area instead of
          immediately continuing toward another destination.
  
          Depending on the day's arrangements and your interests, explore
          different desert landscapes and enjoy more of the surroundings beyond
          the main village.
  
          The slower schedule gives you time to appreciate the desert atmosphere
          before the evening camel trek.
  
          Later in the afternoon, prepare for your ride across the dunes.
  
          Travel by camel over the golden Erg Chebbi landscape as the sun begins
          to move lower over the Sahara.
  
          Depending on weather and timing, stop to enjoy the changing evening
          colors before continuing toward your desert camp.
  
          After arriving at camp, enjoy dinner and spend the night surrounded by
          the quiet dunes and open desert sky.
  
          The full day around Merzouga is one of the main advantages of choosing a
          longer desert itinerary from Fes.
        `,
  
        highlights: [
          "Full day around Merzouga",
          "Explore the Erg Chebbi desert area",
          "Discover different Sahara landscapes",
          "Enjoy a relaxed pace before the camel trek",
          "Camel ride across the dunes",
          "Experience the evening desert light",
          "Dinner at the Sahara camp",
          "Overnight stay in the desert",
        ],
      },
  
      {
        day: 3,
  
        title: "Merzouga – Rissani – Todra Gorges – Dades Valley",
  
        description: `
          Wake up in the quiet surroundings of the Sahara.
  
          If you wish, rise early to experience the morning light over the Erg
          Chebbi dunes before breakfast.
  
          Leave Merzouga and begin traveling west through southeastern Morocco.
  
          Pass through the Rissani area before continuing toward Tinghir and
          Todra Gorges.
  
          The landscape changes as the open desert gives way to rocky mountains,
          palm-filled areas and deep valleys.
  
          At Todra Gorges, take time to walk between the impressive canyon walls
          and enjoy the natural surroundings.
  
          After the visit, continue toward the Dades Valley.
  
          The road passes through traditional communities, mountain scenery and
          changing rock formations before reaching the Dades area.
  
          The shorter driving stage today gives you more time to enjoy the route
          instead of simply passing through.
  
          Enjoy dinner and spend the third night in the Dades Valley.
        `,
  
        highlights: [
          "Optional early Sahara sunrise",
          "Breakfast before leaving Merzouga",
          "Travel through the Rissani area",
          "Continue toward Tinghir",
          "Visit Todra Gorges",
          "Walk between the canyon walls",
          "Travel through the Dades region",
          "Enjoy a slower sightseeing day",
          "Dinner and overnight in Dades",
        ],
      },
  
      {
        day: 4,
  
        title:
          "Dades Valley – Southern Morocco – Ouarzazate – Ait Ben Haddou",
  
        description: `
          After breakfast, leave the Dades Valley and continue west through
          southern Morocco.
  
          Today's journey is intentionally shorter than combining the entire route
          to Marrakech in one day.
  
          Travel through changing valley landscapes, traditional communities and
          dry mountain scenery toward Ouarzazate.
  
          Spend time in the Ouarzazate area before continuing toward Ait Ben
          Haddou.
  
          Arrive near the historic fortified village with more time available than
          on a faster desert itinerary.
  
          Depending on your schedule, begin exploring the surroundings or save the
          main visit for the following morning.
  
          The additional overnight stop gives you a more relaxed experience of
          this part of southern Morocco before crossing the High Atlas Mountains.
  
          Spend the fourth night in the Ouarzazate or Ait Ben Haddou area.
        `,
  
        highlights: [
          "Breakfast in the Dades Valley",
          "Travel through southern Morocco",
          "Enjoy changing valley scenery",
          "Continue toward Ouarzazate",
          "Spend time in the Ouarzazate area",
          "Travel toward Ait Ben Haddou",
          "Enjoy a slower southern Morocco experience",
          "Overnight near Ouarzazate or Ait Ben Haddou",
        ],
      },
  
      {
        day: 5,
  
        title:
          "Ait Ben Haddou – High Atlas Mountains – Marrakech",
  
        description: `
          Enjoy breakfast before beginning the final day of your journey.
  
          Visit Ait Ben Haddou and take time to discover its traditional earthen
          architecture and historic fortified setting.
  
          Because you stayed nearby the previous night, the visit can be enjoyed
          without combining it with the long road from the Dades Valley on the
          same morning.
  
          After exploring Ait Ben Haddou, continue toward the High Atlas
          Mountains.
  
          Cross the mountain range along a scenic road surrounded by valleys,
          traditional villages and wide views.
  
          Stops can be made for photos, rest and meals depending on your schedule.
  
          As you travel farther west, the mountain scenery gradually gives way to
          the plains surrounding Marrakech.
  
          Arrive in Marrakech later in the day.
  
          Your five-day desert journey ends after traveling from Fes through the
          Middle Atlas Mountains, Merzouga, the Sahara Desert, Todra Gorges,
          Dades Valley, Ouarzazate and Ait Ben Haddou.
  
          Final drop-off can be arranged according to your accommodation or onward
          travel plans in Marrakech.
        `,
  
        highlights: [
          "Breakfast near Ait Ben Haddou",
          "Explore the fortified village",
          "See traditional earthen architecture",
          "Begin the journey toward Marrakech",
          "Cross the High Atlas Mountains",
          "Enjoy panoramic mountain scenery",
          "Flexible photo and rest stops",
          "Arrive in Marrakech",
          "Final drop-off in Marrakech",
          "End of the five-day journey",
        ],
      },
    ],
  
    // ─────────────────────────────
    // INCLUDED
    // ─────────────────────────────
  
    included: [
      "Private transportation from Fes to Marrakech",
      "English- or French-speaking driver",
      "Four nights of accommodation",
      "One night at a hotel or riad in Merzouga",
      "One night at a Sahara desert camp near Erg Chebbi",
      "One night in the Dades Valley",
      "One night in the Ouarzazate or Ait Ben Haddou area",
      "Daily breakfasts",
      "Dinner at the Sahara desert camp",
      "Dinner in the Dades Valley",
      "Camel ride across the Erg Chebbi dunes",
      "Full day to experience the Merzouga desert area",
      "Time to explore Ait Ben Haddou",
      "Free time at the main sightseeing stops",
      "Flexible stops for photos and breaks during the journey",
      "Pickup in Fes",
      "Final drop-off in Marrakech",
    ],
  
    // ─────────────────────────────
    // NOT INCLUDED
    // ─────────────────────────────
  
    excluded: [
      "Lunches",
      "Dinners unless mentioned in the included section",
      "Drinks",
      "Entrance fees to monuments and attractions",
      "Local guides unless requested",
      "Optional desert activities not mentioned in the itinerary",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities",
      "Any services not mentioned in the included section",
    ],
  
    // ─────────────────────────────
    // ACCOMMODATION
    // ─────────────────────────────
  
    accommodation: [
      {
        night: 1,
        location: "Merzouga",
        type: "Hotel or Riad",
      },
      {
        night: 2,
        location: "Merzouga",
        type: "Sahara Desert Camp",
      },
      {
        night: 3,
        location: "Dades Valley",
        type: "Hotel or Riad",
      },
      {
        night: 4,
        location: "Ouarzazate / Ait Ben Haddou",
        type: "Hotel or Riad",
      },
    ],
  
    // ─────────────────────────────
    // GALLERY
    // ─────────────────────────────
  
    gallery: [
      "/images/tours/5-day-fes-marrakech-desert-tour.webp",
    ],
  
    // ─────────────────────────────
    // FAQ
    // ─────────────────────────────
  
    faqs: [
      {
        question: "Is the 5-day desert tour from Fes private?",
  
        answer:
          "Yes. This is a private journey for you and your travel group, with private transportation and more flexibility for sightseeing stops, breaks and the pace of the tour.",
      },
  
      {
        question: "Where does the five-day desert tour start and finish?",
  
        answer:
          "The tour starts in Fes and finishes in Marrakech. The route travels through the Middle Atlas Mountains, Merzouga, the Sahara Desert, Todra Gorges, Dades Valley, Ouarzazate and Ait Ben Haddou.",
      },
  
      {
        question: "How many nights are included?",
  
        answer:
          "The journey includes four nights: one at a hotel or riad in Merzouga, one at a Sahara desert camp, one in the Dades Valley and one in the Ouarzazate or Ait Ben Haddou area.",
      },
  
      {
        question: "Does the tour include Merzouga?",
  
        answer:
          "Yes. You arrive in Merzouga on the first day and spend the following day discovering the desert surroundings before the camel trek and Sahara camp.",
      },
  
      {
        question: "Do we have a full day around the Sahara?",
  
        answer:
          "Yes. The second day is dedicated to the Merzouga and Erg Chebbi area, giving you more time in the desert before the camel trek and overnight camp.",
      },
  
      {
        question: "Is the camel ride included?",
  
        answer:
          "Yes. A camel ride across the Erg Chebbi dunes is included as part of your Sahara Desert experience.",
      },
  
      {
        question: "Do we sleep in the Sahara Desert?",
  
        answer:
          "Yes. The second night is spent at a Sahara desert camp near Merzouga and the Erg Chebbi dunes.",
      },
  
      {
        question: "Can we experience the Sahara sunset?",
  
        answer:
          "The camel trek is normally planned later in the day so you can enjoy the changing evening light over the Erg Chebbi dunes. Exact conditions depend on weather and timing.",
      },
  
      {
        question: "Does the tour visit Todra Gorges?",
  
        answer:
          "Yes. Todra Gorges is visited on day three while traveling west from Merzouga toward the Dades Valley.",
      },
  
      {
        question: "Do we spend a night in the Dades Valley?",
  
        answer:
          "Yes. The third night is spent in the Dades Valley after visiting Todra Gorges.",
      },
  
      {
        question: "Does the tour visit Ouarzazate?",
  
        answer:
          "Yes. Day four travels through the landscapes of southern Morocco toward Ouarzazate before continuing to the Ait Ben Haddou area.",
      },
  
      {
        question: "Do we spend a night near Ait Ben Haddou?",
  
        answer:
          "The fourth night is planned in the Ouarzazate or Ait Ben Haddou area, allowing more time in southern Morocco before the final journey to Marrakech.",
      },
  
      {
        question: "Does the tour include Ait Ben Haddou?",
  
        answer:
          "Yes. Ait Ben Haddou is one of the main stops before crossing the High Atlas Mountains toward Marrakech.",
      },
  
      {
        question: "What makes the five-day itinerary different from shorter Fes desert tours?",
  
        answer:
          "The five-day route gives you more time around Merzouga and divides the journey through southern Morocco into shorter stages. It also includes an additional night around Ouarzazate or Ait Ben Haddou before continuing to Marrakech.",
      },
  
      {
        question: "Is five days more comfortable than the three-day route?",
  
        answer:
          "Yes. The route still covers a large distance, but the additional nights reduce the need to combine as many major stops into each day and give you more time in Merzouga and southern Morocco.",
      },
  
      {
        question: "Are breakfasts and dinners included?",
  
        answer:
          "Daily breakfasts are included. Dinner is also included at the Sahara desert camp and during the overnight stay in the Dades Valley.",
      },
  
      {
        question: "Are lunches included?",
  
        answer:
          "Lunches are not included. Stops are made along the route where you can choose a restaurant according to your preferences.",
      },
  
      {
        question: "Are local guides included?",
  
        answer:
          "Local guides are not included by default unless they are part of your final arrangements. A guide can be requested for selected places when planning the tour.",
      },
  
      {
        question: "Can the 5-day desert tour from Fes be customized?",
  
        answer:
          "Yes. Because this is a private tour, some details can be adapted to your travel dates, interests, accommodation preferences and onward travel plans.",
      },
  
      {
        question: "What should I bring for the Sahara camp?",
  
        answer:
          "Bring comfortable clothing, walking shoes, sun protection and an extra layer for the evening. Desert temperatures can change noticeably between daytime and night.",
      },
  
      {
        question: "Is the tour suitable for families?",
  
        answer:
          "Families can request this private journey. If you are traveling with children, share their ages when contacting us so the driving schedule, accommodation and camel experience can be planned comfortably.",
      },
    ],
  
    // ─────────────────────────────
    // SEO
    // ─────────────────────────────
  
    seo: {
      title:
        "5-Day Desert Tour from Fes to Marrakech | Moroccan Trip",
  
      description:
        "Enjoy a private 5-day desert tour from Fes to Marrakech with Merzouga, a Sahara camp, Todra Gorges, Dades Valley, Ouarzazate and Ait Ben Haddou.",
  
      // Internal SEO keyword map only.
      // Do not output these as a meta keywords tag.
      //
      // Semrush does not currently report measurable data
      // for these exact 5-day phrases.
      // They are intentionally used as product-specific
      // long-tail targets to avoid cannibalizing the
      // existing 3-day and 4-day pages.
      keywords: [
        "5 day desert tour from fes to marrakech",
        "5 days desert tour from fes to marrakech",
        "5 day fes to marrakech desert tour",
        "5 days fes to marrakech desert tour",
        "5 day sahara tour from fes",
        "5 day merzouga desert tour from fes",
      ],
    },
  
    // ─────────────────────────────
    // BOOKING
    // ─────────────────────────────
  
    booking: {
      available: true,
      minimumDays: 5,
      customizable: true,
      contactLabel: "Request a Quote",
    },
  },
  {
    id: "23",
  
    // ─────────────────────────────
    // BASIC INFORMATION
    // ─────────────────────────────
  
    slug: "7-day-fes-rabat-morocco-tour",
  
    title: "7-Day Morocco Tour from Fes to Rabat via the Sahara",
  
    shortDescription:
      "Travel from Fes to Rabat on a private 7-day Morocco tour through Merzouga, the Sahara Desert, Todra Gorges, Ait Ben Haddou, Marrakech and Casablanca.",
  
    image: "/images/tours/7-day-fes-rabat-morocco-tour.webp",
  
    badge: "Fes to Rabat",
  
    featured: true,
  
    category: "Morocco Tours",
  
    // ─────────────────────────────
    // TOUR DETAILS
    // ─────────────────────────────
  
    duration: "7 Days / 6 Nights",
  
    nights: 6,
  
    tourType: "Private Tour",
  
    groupSize: "Up to 4 People",
  
    languages: ["English", "French"],
  
    departure: "Fes",
  
    arrival: "Rabat",
  
    locations: [
      "Fes",
      "Ifrane",
      "Middle Atlas Mountains",
      "Midelt",
      "Ziz Valley",
      "Errachidia",
      "Erfoud",
      "Merzouga",
      "Erg Chebbi",
      "Sahara Desert",
      "Rissani",
      "Todra Gorges",
      "Dades Valley",
      "Ouarzazate",
      "Ait Ben Haddou",
      "High Atlas Mountains",
      "Marrakech",
      "Casablanca",
      "Rabat",
    ],
  
    // ─────────────────────────────
    // PRICING
    // ─────────────────────────────
  
    // No fixed price.
    // The final quote depends on the number of travelers,
    // accommodation level and requested services.
  
    // ─────────────────────────────
    // HIGHLIGHTS
    // ─────────────────────────────
  
    highlights: [
      "Begin your private journey in Fes and finish in Rabat",
      "Cross the Middle Atlas Mountains through Ifrane and changing landscapes",
      "Travel through Midelt and the palm-filled Ziz Valley",
      "Reach Merzouga and the golden dunes of Erg Chebbi",
      "Spend extra time discovering the Sahara surroundings",
      "Ride a camel across the desert dunes near sunset",
      "Spend a memorable night at a Sahara desert camp",
      "Travel through Rissani and southeastern Morocco",
      "Walk between the dramatic canyon walls of Todra Gorges",
      "Spend a night in the Dades Valley",
      "Travel through Ouarzazate and visit Ait Ben Haddou",
      "Cross the High Atlas Mountains before arriving in Marrakech",
      "Spend a full day discovering Marrakech",
      "Continue from Marrakech to Casablanca",
      "Finish the journey in Rabat, Morocco's capital",
      "Combine the Sahara, southern Morocco and major cities in one private route",
    ],
  
    // ─────────────────────────────
    // OVERVIEW
    // ─────────────────────────────
  
    overview: `
      Travel across Morocco on this private 7-day journey from Fes to Rabat,
      combining the Sahara Desert, southern Morocco, Marrakech and the Atlantic
      cities of Casablanca and Rabat.
  
      The route begins in Fes and heads south through Ifrane and the Middle Atlas
      Mountains. Continue toward Midelt and the Ziz Valley as green mountain
      scenery gradually changes into dry valleys, palm groves and the landscapes
      of southeastern Morocco.
  
      Arrive in Merzouga beside the golden dunes of Erg Chebbi and spend your
      first night near the Sahara. The following day gives you more time to
      discover the desert surroundings before riding a camel across the dunes and
      spending the night at a Sahara camp.
  
      After leaving Merzouga, continue through Rissani toward Todra Gorges. Walk
      between the high canyon walls before traveling through the Dades Valley,
      where you spend the third night.
  
      The journey then moves west through Ouarzazate and Ait Ben Haddou before
      crossing the High Atlas Mountains toward Marrakech.
  
      A full day in Marrakech gives you time to explore the medina, traditional
      souks and other parts of the city without another long road journey on the
      same day.
  
      The final part of the tour continues north to Casablanca and then Rabat,
      where the seven-day journey ends.
  
      This Morocco tour from Fes to Rabat is designed for travelers who want more
      than a direct journey between the two cities. Instead, the route crosses the
      Sahara, southern Morocco and Marrakech before finishing in the capital.
    `,
  
    // ─────────────────────────────
    // ITINERARY
    // ─────────────────────────────
  
    itinerary: [
      {
        day: 1,
  
        title:
          "Fes – Ifrane – Middle Atlas – Midelt – Ziz Valley – Erfoud – Merzouga",
  
        description: `
          Your seven-day Morocco journey begins with morning pickup in Fes.
  
          Leave the city and travel south toward Ifrane before continuing into the
          Middle Atlas Mountains.
  
          The first part of the route passes through greener mountain scenery,
          forested areas and small communities.
  
          Continue toward Midelt, where time can be allowed for a break before
          traveling farther south.
  
          As the road continues, the landscape gradually becomes drier and more
          open.
  
          Reach the Ziz Valley and enjoy panoramic views across palm groves
          surrounded by rocky mountains.
  
          Continue through the Errachidia and Erfoud areas before reaching
          Merzouga at the edge of the Erg Chebbi dunes.
  
          Arrive later in the day, settle into your accommodation and enjoy your
          first views of the Sahara.
  
          Spend the first night in the Merzouga area.
        `,
  
        highlights: [
          "Morning pickup in Fes",
          "Travel through Ifrane",
          "Cross the Middle Atlas Mountains",
          "Continue through Midelt",
          "Enjoy views across the Ziz Valley",
          "Travel through Errachidia and Erfoud",
          "Arrive in Merzouga",
          "See the Erg Chebbi dunes",
          "Overnight stay in Merzouga",
        ],
      },
  
      {
        day: 2,
  
        title:
          "Merzouga Desert Exploration – Erg Chebbi – Camel Trek – Sahara Camp",
  
        description: `
          Today is dedicated to the Sahara and the landscapes surrounding
          Merzouga.
  
          After breakfast, spend time discovering more of the Erg Chebbi area
          instead of immediately continuing toward another destination.
  
          Depending on the day's arrangements and your interests, explore
          different desert landscapes and experience more of the surroundings
          beyond the main village.
  
          The relaxed schedule gives you time to enjoy the desert atmosphere
          before the evening camel trek.
  
          Later in the afternoon, prepare for your ride across the dunes.
  
          Travel by camel over the golden Erg Chebbi landscape as the sunlight
          begins to soften.
  
          Depending on weather and timing, stop to enjoy the changing desert
          colors before continuing toward your Sahara camp.
  
          After arriving at camp, enjoy dinner and spend the night surrounded by
          the quiet dunes and open desert sky.
        `,
  
        highlights: [
          "Explore the Merzouga desert area",
          "Discover the landscapes around Erg Chebbi",
          "Enjoy a relaxed Sahara experience",
          "Camel ride across the dunes",
          "Experience the evening desert light",
          "Dinner at the Sahara camp",
          "Overnight stay in the desert",
        ],
      },
  
      {
        day: 3,
  
        title: "Merzouga – Rissani – Todra Gorges – Dades Valley",
  
        description: `
          Wake up in the peaceful surroundings of the Sahara.
  
          If you wish, rise early to enjoy the morning light over the Erg Chebbi
          dunes before breakfast.
  
          Leave Merzouga and begin traveling west through southeastern Morocco.
  
          Pass through the Rissani area before continuing toward Tinghir and
          Todra Gorges.
  
          The landscape changes as the open desert gives way to rocky mountains,
          palm-filled areas and deep valleys.
  
          At Todra Gorges, take time to walk between the high canyon walls and
          enjoy the natural surroundings.
  
          Continue toward the Dades Valley, passing traditional communities and
          changing mountain scenery.
  
          Arrive in the Dades area later in the day.
  
          Enjoy dinner and spend the third night in the Dades Valley.
        `,
  
        highlights: [
          "Optional Sahara sunrise",
          "Breakfast before leaving Merzouga",
          "Travel through Rissani",
          "Continue toward Tinghir",
          "Visit Todra Gorges",
          "Walk between the canyon walls",
          "Travel through the Dades Valley",
          "Dinner and overnight in Dades",
        ],
      },
  
      {
        day: 4,
  
        title:
          "Dades Valley – Ouarzazate – Ait Ben Haddou – High Atlas – Marrakech",
  
        description: `
          After breakfast, leave the Dades Valley and continue west through
          southern Morocco.
  
          Travel through changing valley and mountain scenery toward Ouarzazate.
  
          Continue to Ait Ben Haddou and take time to explore the historic
          fortified village and its traditional earthen architecture.
  
          After the visit, begin the journey across the High Atlas Mountains.
  
          The road passes valleys, traditional villages and panoramic mountain
          scenery on the way toward Marrakech.
  
          Stops can be made for photos, rest and meals depending on your schedule.
  
          Arrive in Marrakech later in the day and check into your accommodation.
  
          Enjoy a relaxed evening and spend the first of two nights in Marrakech.
        `,
  
        highlights: [
          "Breakfast in the Dades Valley",
          "Travel through southern Morocco",
          "Continue through Ouarzazate",
          "Visit Ait Ben Haddou",
          "Discover traditional earthen architecture",
          "Cross the High Atlas Mountains",
          "Arrive in Marrakech",
          "First overnight stay in Marrakech",
        ],
      },
  
      {
        day: 5,
  
        title: "Full Day Exploring Marrakech",
  
        description: `
          Spend today discovering Marrakech at a comfortable pace.
  
          Explore the historic medina and walk through traditional souks filled
          with shops, workshops and everyday local activity.
  
          Marrakech provides a completely different atmosphere from Fes, the
          Middle Atlas and the Sahara.
  
          Depending on your interests, spend time around historic areas, public
          squares, gardens or quieter neighborhoods beyond the busiest parts of
          the medina.
  
          Because there is no long transfer today, you can take breaks and enjoy
          the city without planning your sightseeing around several hours of
          driving.
  
          Enjoy the evening and return to your accommodation for a second night
          in Marrakech.
        `,
  
        highlights: [
          "Full day in Marrakech",
          "Explore the historic medina",
          "Walk through traditional souks",
          "Discover historic areas",
          "Flexible sightseeing",
          "Free time according to your interests",
          "Second overnight stay in Marrakech",
        ],
      },
  
      {
        day: 6,
  
        title: "Marrakech – Casablanca",
  
        description: `
          After breakfast, leave Marrakech and begin traveling north toward
          Casablanca.
  
          The journey takes you away from the landscapes of southern Morocco and
          toward the country's Atlantic side.
  
          Stops can be made during the drive for rest, meals and photos depending
          on your schedule.
  
          Arrive in Casablanca later in the day and check into your
          accommodation.
  
          Depending on arrival time, enjoy some free time and discover part of
          Morocco's largest city.
  
          This stage of the journey creates a gradual transition from the Sahara
          and Marrakech toward the final destination in Rabat.
  
          Spend the sixth night in Casablanca.
        `,
  
        highlights: [
          "Breakfast in Marrakech",
          "Travel north toward Casablanca",
          "Flexible stops during the journey",
          "Arrive in Casablanca",
          "Free time depending on arrival",
          "Overnight stay in Casablanca",
        ],
      },
  
      {
        day: 7,
  
        title: "Casablanca – Rabat",
  
        description: `
          Enjoy breakfast in Casablanca before beginning the final stage of your
          journey.
  
          Depending on your schedule, there may be time for a short visit in
          Casablanca before continuing north toward Rabat.
  
          Travel to Morocco's capital and arrive later in the day.
  
          Rabat offers a calmer atmosphere than several of the larger cities
          visited earlier in the journey and provides a fitting final stop after
          traveling through very different regions of Morocco.
  
          Your seven-day tour from Fes to Rabat ends after crossing the Middle
          Atlas Mountains, visiting the Sahara Desert, traveling through southern
          Morocco and spending time in Marrakech and Casablanca.
  
          Final drop-off can be arranged according to your accommodation, train,
          airport or onward travel plans in Rabat.
        `,
  
        highlights: [
          "Breakfast in Casablanca",
          "Optional time in Casablanca depending on schedule",
          "Travel north toward Rabat",
          "Arrive in Morocco's capital",
          "Final drop-off in Rabat",
          "End of the seven-day Morocco journey",
        ],
      },
    ],
  
    // ─────────────────────────────
    // INCLUDED
    // ─────────────────────────────
  
    included: [
      "Private transportation from Fes to Rabat",
      "English- or French-speaking driver",
      "Six nights of accommodation",
      "One night at a hotel or riad in Merzouga",
      "One night at a Sahara desert camp near Erg Chebbi",
      "One night in the Dades Valley",
      "Two nights in Marrakech",
      "One night in Casablanca",
      "Daily breakfasts",
      "Dinner at the Sahara desert camp",
      "Dinner in the Dades Valley",
      "Camel ride across the Erg Chebbi dunes",
      "Time to explore the Merzouga desert area",
      "Full day to explore Marrakech",
      "Free time at the main sightseeing destinations",
      "Flexible stops for photos and breaks during the journey",
      "Pickup in Fes",
      "Final drop-off in Rabat",
    ],
  
    // ─────────────────────────────
    // NOT INCLUDED
    // ─────────────────────────────
  
    excluded: [
      "Lunches",
      "Dinners unless mentioned in the included section",
      "Drinks",
      "Entrance fees to monuments and attractions",
      "Local city guides unless requested",
      "Optional desert activities not mentioned in the itinerary",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities",
      "Any services not mentioned in the included section",
    ],
  
    // ─────────────────────────────
    // ACCOMMODATION
    // ─────────────────────────────
  
    accommodation: [
      {
        night: 1,
        location: "Merzouga",
        type: "Hotel or Riad",
      },
      {
        night: 2,
        location: "Merzouga",
        type: "Sahara Desert Camp",
      },
      {
        night: 3,
        location: "Dades Valley",
        type: "Hotel or Riad",
      },
      {
        night: 4,
        location: "Marrakech",
        type: "Hotel or Riad",
      },
      {
        night: 5,
        location: "Marrakech",
        type: "Hotel or Riad",
      },
      {
        night: 6,
        location: "Casablanca",
        type: "Hotel",
      },
    ],
  
    // ─────────────────────────────
    // GALLERY
    // ─────────────────────────────
  
    gallery: [
      "/images/tours/7-day-fes-rabat-morocco-tour.webp",
    ],
  
    // ─────────────────────────────
    // FAQ
    // ─────────────────────────────
  
    faqs: [
      {
        question: "Is the 7-day Morocco tour from Fes to Rabat private?",
  
        answer:
          "Yes. This is a private journey for you and your travel group, with private transportation and more flexibility for stops, breaks and sightseeing throughout the route.",
      },
  
      {
        question: "Where does the tour start and finish?",
  
        answer:
          "The journey starts in Fes and finishes in Rabat. It travels through Merzouga, the Sahara Desert, Todra Gorges, the Dades Valley, Marrakech and Casablanca before reaching Rabat.",
      },
  
      {
        question: "Is this a direct trip from Fes to Rabat?",
  
        answer:
          "No. This is a seven-day Morocco tour rather than a direct transfer. The route travels south to the Sahara, continues through Marrakech and Casablanca, and then finishes in Rabat.",
      },
  
      {
        question: "Does the tour include the Sahara Desert?",
  
        answer:
          "Yes. The Sahara is one of the main parts of the journey. You spend two nights in the Merzouga area, including one night at a desert camp near the Erg Chebbi dunes.",
      },
  
      {
        question: "Do we have time to explore Merzouga?",
  
        answer:
          "Yes. You arrive in Merzouga on the first day and spend the following day experiencing the desert surroundings before the camel trek and overnight Sahara camp.",
      },
  
      {
        question: "Is the camel ride included?",
  
        answer:
          "Yes. A camel ride across the Erg Chebbi dunes is included as part of your Sahara desert experience.",
      },
  
      {
        question: "Do we spend a night in the Sahara?",
  
        answer:
          "Yes. One night is spent at a Sahara desert camp near Merzouga and the Erg Chebbi dunes.",
      },
  
      {
        question: "Does the tour visit Todra Gorges?",
  
        answer:
          "Yes. Todra Gorges is visited on day three while traveling from Merzouga toward the Dades Valley.",
      },
  
      {
        question: "Does the tour include Ait Ben Haddou?",
  
        answer:
          "Yes. Ait Ben Haddou is visited on day four before crossing the High Atlas Mountains toward Marrakech.",
      },
  
      {
        question: "How much time do we spend in Marrakech?",
  
        answer:
          "The itinerary includes two nights in Marrakech and one full day dedicated to exploring the city.",
      },
  
      {
        question: "Does the tour include Casablanca?",
  
        answer:
          "Yes. You travel from Marrakech to Casablanca on day six and spend the night there before continuing to Rabat.",
      },
  
      {
        question: "Does the tour finish in Rabat?",
  
        answer:
          "Yes. The final day travels from Casablanca to Rabat, where the tour ends with drop-off according to your onward travel plans.",
      },
  
      {
        question: "What is the difference between Fes and Fez?",
  
        answer:
          "Fes and Fez are two common English spellings for the same Moroccan city. This tour starts in Fes before traveling south toward the Sahara.",
      },
  
      {
        question: "How much driving is involved during the seven days?",
  
        answer:
          "The route crosses a large part of Morocco, so several days include significant driving. The journey is divided with overnight stays, sightseeing stops and a full day in Marrakech.",
      },
  
      {
        question: "Are breakfasts and dinners included?",
  
        answer:
          "Daily breakfasts are included. Dinner is also included at the Sahara desert camp and during the overnight stay in the Dades Valley.",
      },
  
      {
        question: "Are lunches included?",
  
        answer:
          "Lunches are not included. Stops are made during the journey where you can choose a restaurant according to your preferences.",
      },
  
      {
        question: "Are local guides included?",
  
        answer:
          "Local guides are not included by default unless they are part of your final arrangements. Guides can be requested for selected cities or attractions when planning the tour.",
      },
  
      {
        question: "Can the Fes to Rabat tour be customized?",
  
        answer:
          "Yes. Because the tour is private, parts of the itinerary can be adapted to your travel dates, interests, accommodation preferences and onward travel plans.",
      },
  
      {
        question: "Is the tour suitable for families?",
  
        answer:
          "Families can request this private journey. If you are traveling with children, share their ages when contacting us so the driving schedule, accommodation and desert experience can be planned comfortably.",
      },
  
      {
        question: "What should I bring for the Sahara camp?",
  
        answer:
          "Bring comfortable clothing, walking shoes, sun protection and an extra layer for the evening. Desert temperatures can change noticeably between daytime and night.",
      },
    ],
  
    // ─────────────────────────────
    // SEO
    // ─────────────────────────────
  
    seo: {
      title:
        "7-Day Fes to Rabat Morocco Tour | Moroccan Trip",
  
      description:
        "Travel on a private 7-day Morocco tour from Fes to Rabat through Merzouga, the Sahara Desert, Todra Gorges, Marrakech and Casablanca.",
  
      // Internal SEO keyword map only.
      // Do not output these as a meta keywords tag.
      //
      // "fes to rabat" and "fez to rabat" have measurable
      // search demand, but mixed transport intent.
      // The page therefore keeps them as supporting terms
      // while using a specific multi-day tour target.
      keywords: [
        "7 day morocco tour from fes to rabat",
        "7 day tour from fes to rabat",
        "fes to rabat",
        "fez to rabat",
        "fes to rabat tour",
        "morocco tour from fes to rabat",
        "fes to rabat via marrakech",
        "fes to rabat via merzouga",
      ],
    },
  
    // ─────────────────────────────
    // BOOKING
    // ─────────────────────────────
  
    booking: {
      available: true,
      minimumDays: 7,
      customizable: true,
      contactLabel: "Request a Quote",
    },
  },
  {
    id: "24",
  
    // ─────────────────────────────
    // BASIC INFORMATION
    // ─────────────────────────────
  
    slug: "8-day-morocco-tour-from-fes",
  
    title: "8-Day Morocco Tour from Fes: Imperial Cities & Northern Morocco",
  
    shortDescription:
      "Explore Morocco on a private 8-day tour from Fes through Meknes, Rabat, Casablanca, Tangier, Tetouan and Chefchaouen before returning to Fes.",
  
    image: "/images/tours/8-day-morocco-tour-from-fes.webp",
  
    badge: "Imperial Cities & North",
  
    featured: true,
  
    category: "Morocco Tours",
  
    // ─────────────────────────────
    // TOUR DETAILS
    // ─────────────────────────────
  
    duration: "8 Days / 7 Nights",
  
    nights: 7,
  
    tourType: "Private Tour",
  
    groupSize: "Up to 4 People",
  
    languages: ["English", "French"],
  
    departure: "Fes",
  
    arrival: "Fes",
  
    locations: [
      "Fes",
      "Meknes",
      "Rabat",
      "Casablanca",
      "Tangier",
      "Tetouan",
      "Chefchaouen",
      "Rif Mountains",
      "Fes",
    ],
  
    // ─────────────────────────────
    // PRICING
    // ─────────────────────────────
  
    // No fixed price.
    // The final quote depends on the number of travelers,
    // accommodation level and requested services.
  
    // ─────────────────────────────
    // HIGHLIGHTS
    // ─────────────────────────────
  
    highlights: [
      "Begin and finish your private Morocco journey in Fes",
      "Spend time exploring the historic city of Fes",
      "Visit Meknes and discover another side of Morocco's imperial history",
      "Travel to Rabat and explore the country's capital",
      "Continue along the Atlantic side of Morocco to Casablanca",
      "Discover the coastal atmosphere of Tangier",
      "Travel through northern Morocco toward Tetouan",
      "Experience the landscapes of the Rif Mountains",
      "Spend two nights in Chefchaouen instead of making a rushed visit",
      "Walk through Chefchaouen's blue-painted medina",
      "Enjoy a full day to discover the Blue City at your own pace",
      "Return to Fes through the countryside of northern Morocco",
      "Combine imperial cities, Atlantic destinations and mountain towns in one journey",
      "Travel privately with flexible sightseeing and rest stops",
    ],
  
    // ─────────────────────────────
    // OVERVIEW
    // ─────────────────────────────
  
    overview: `
      Discover imperial cities, Atlantic destinations and the blue streets of
      northern Morocco on this private 8-day tour from Fes.
  
      The journey begins in Fes, giving you time to experience one of Morocco's
      most historic cities before traveling west toward Meknes and Rabat.
  
      Visit Meknes and continue to Rabat, where historic areas and the atmosphere
      of Morocco's capital offer a different experience from the old medina of
      Fes.
  
      From Rabat, the route follows the Atlantic side of Morocco to Casablanca.
      Continue north the following day toward Tangier, a coastal city shaped by
      its position between the Mediterranean, Atlantic and northern Morocco.
  
      The journey then moves deeper into the north through Tetouan and the Rif
      region before reaching Chefchaouen.
  
      With two nights in Chefchaouen, you have time to explore the blue-painted
      medina without treating the town as a quick stop. Walk through its narrow
      streets, enjoy the mountain atmosphere and discover quieter areas at your
      own pace.
  
      The final part of the tour returns from Chefchaouen to Fes, completing a
      loop through several very different parts of Morocco.
  
      This eight-day Morocco tour from Fes is designed for travelers who want to
      combine historic cities with northern Morocco rather than traveling south
      to the Sahara. The itinerary includes Meknes, Rabat, Casablanca, Tangier,
      Tetouan and Chefchaouen while keeping the journey private and flexible.
    `,
  
    // ─────────────────────────────
    // ITINERARY
    // ─────────────────────────────
  
    itinerary: [
      {
        day: 1,
  
        title: "Arrival and Explore Fes",
  
        description: `
          Your eight-day Morocco journey begins in Fes.
  
          Depending on your travel plans, pickup can be arranged from the airport,
          train station or another agreed location in the city.
  
          After settling into your accommodation, begin discovering Fes at a
          comfortable pace.
  
          The city is known for its historic medina, traditional craftsmanship,
          old neighborhoods and narrow streets.
  
          Depending on your arrival time and interests, spend part of the day
          exploring the medina or simply enjoy a relaxed introduction before the
          road journey begins the following morning.
  
          The first day allows you to start the tour without immediately spending
          several hours in the vehicle.
  
          Enjoy the evening in Fes and spend the first night in the city.
        `,
  
        highlights: [
          "Arrival in Fes",
          "Private pickup according to your travel plans",
          "Transfer to your accommodation",
          "First introduction to Fes",
          "Free time depending on arrival",
          "Explore part of the historic city",
          "Overnight stay in Fes",
        ],
      },
  
      {
        day: 2,
  
        title: "Fes – Meknes – Rabat",
  
        description: `
          After breakfast, leave Fes and begin traveling west toward Meknes.
  
          Meknes is one of Morocco's historic imperial cities and offers a quieter
          atmosphere than Fes.
  
          Spend time discovering parts of the city, traditional architecture and
          historic areas before continuing the journey.
  
          After your visit, travel toward Rabat.
  
          Morocco's capital combines historic landmarks and traditional
          neighborhoods with wider streets and a more relaxed urban atmosphere.
  
          Depending on your arrival time, begin exploring part of Rabat before
          checking into your accommodation.
  
          Enjoy the evening and spend the second night of your journey in Rabat.
        `,
  
        highlights: [
          "Breakfast in Fes",
          "Travel toward Meknes",
          "Discover an imperial city",
          "Explore historic architecture",
          "Continue toward Rabat",
          "Arrive in Morocco's capital",
          "Free time depending on arrival",
          "Overnight stay in Rabat",
        ],
      },
  
      {
        day: 3,
  
        title: "Rabat – Casablanca",
  
        description: `
          Enjoy breakfast before spending more time in Rabat.
  
          Depending on your interests, explore historic areas of the capital and
          enjoy its calmer atmosphere before continuing south along the Atlantic
          side of Morocco.
  
          Later, leave Rabat and travel toward Casablanca.
  
          Casablanca offers another side of the country. It is larger and more
          modern than many of the historic cities on this itinerary, creating a
          strong contrast with Fes and Meknes.
  
          After arriving, spend time discovering part of the city depending on
          your schedule.
  
          Enjoy the evening and spend the night in Casablanca.
        `,
  
        highlights: [
          "Breakfast in Rabat",
          "Additional time in Morocco's capital",
          "Travel along the Atlantic side of Morocco",
          "Arrive in Casablanca",
          "Discover a different urban atmosphere",
          "Free time depending on arrival",
          "Overnight stay in Casablanca",
        ],
      },
  
      {
        day: 4,
  
        title: "Casablanca – Tangier",
  
        description: `
          After breakfast, leave Casablanca and begin traveling north toward
          Tangier.
  
          The journey follows Morocco's Atlantic side before reaching the far
          north of the country.
  
          Stops can be made during the drive for rest, meals and photos depending
          on your schedule.
  
          Arrive in Tangier and begin discovering the city.
  
          Tangier has a distinctive atmosphere created by its coastal position and
          long connection with different cultures and travelers.
  
          Depending on arrival time, walk through part of the old city, enjoy
          coastal views or simply relax after the journey north.
  
          Spend the fourth night of the tour in Tangier.
        `,
  
        highlights: [
          "Breakfast in Casablanca",
          "Travel north along Morocco's Atlantic side",
          "Flexible stops during the journey",
          "Arrive in Tangier",
          "Discover the northern coastal atmosphere",
          "Free time depending on arrival",
          "Overnight stay in Tangier",
        ],
      },
  
      {
        day: 5,
  
        title: "Tangier – Tetouan – Chefchaouen",
  
        description: `
          After breakfast, leave Tangier and continue through northern Morocco.
  
          Travel toward Tetouan, a city with a strong northern identity and a
          different atmosphere from Morocco's larger imperial destinations.
  
          Spend time discovering part of Tetouan before continuing into the Rif
          region.
  
          The scenery becomes increasingly mountainous as the journey approaches
          Chefchaouen.
  
          Arrive in the blue city later in the day and begin exploring its
          compact medina.
  
          Walk through blue-painted streets, small squares and traditional
          neighborhoods while enjoying the mountain setting.
  
          Because you will spend two nights here, there is no need to fit
          everything into the first afternoon.
  
          Enjoy a free evening and spend the first night in Chefchaouen.
        `,
  
        highlights: [
          "Breakfast in Tangier",
          "Travel through northern Morocco",
          "Visit Tetouan",
          "Enjoy Rif Mountain scenery",
          "Arrive in Chefchaouen",
          "Explore the blue-painted medina",
          "Free evening",
          "First overnight stay in Chefchaouen",
        ],
      },
  
      {
        day: 6,
  
        title: "Full Day Exploring Chefchaouen",
  
        description: `
          Today is dedicated to Chefchaouen.
  
          Having a complete day here gives you more time than a quick visit from
          another city.
  
          Walk through the blue-painted medina and discover small squares,
          traditional streets and quieter neighborhoods.
  
          Take time to browse local shops, enjoy the mountain atmosphere and
          explore areas you may have missed the previous afternoon.
  
          Depending on your interests, you can also spend time enjoying viewpoints
          and the scenery surrounding the town.
  
          There is no long transfer today, so the pace can remain relaxed.
  
          This full day in the Blue City is one of the main highlights of the
          route and creates a natural connection between the Fes to Chefchaouen
          part of the journey and the wider northern Morocco experience.
  
          Enjoy another evening in town and spend your second night in
          Chefchaouen.
        `,
  
        highlights: [
          "Full day in Chefchaouen",
          "Explore the blue medina",
          "Walk through quieter traditional streets",
          "Discover local shops and squares",
          "Enjoy Rif Mountain views",
          "Flexible sightseeing",
          "Free time at your own pace",
          "Second overnight stay in Chefchaouen",
        ],
      },
  
      {
        day: 7,
  
        title: "Chefchaouen – Northern Morocco – Fes",
  
        description: `
          After breakfast, enjoy some final time in Chefchaouen before beginning
          the return journey toward Fes.
  
          Leave the Rif Mountains and travel through the changing countryside of
          northern Morocco.
  
          The route gradually moves away from the mountain landscapes and toward
          the historic surroundings of Fes.
  
          Stops can be made during the journey for rest, meals and photos
          depending on your schedule.
  
          Arrive back in Fes later in the day.
  
          After checking into your accommodation, enjoy a relaxed final evening in
          the city.
  
          Spend the seventh and final night of the tour in Fes.
        `,
  
        highlights: [
          "Breakfast in Chefchaouen",
          "Final time in the Blue City",
          "Leave the Rif Mountains",
          "Travel through northern countryside",
          "Flexible stops during the journey",
          "Return to Fes",
          "Free final evening",
          "Overnight stay in Fes",
        ],
      },
  
      {
        day: 8,
  
        title: "Fes – Final Visit and Departure",
  
        description: `
          Enjoy the final morning of your Morocco journey in Fes.
  
          Depending on your departure time, there may be an opportunity to explore
          more of the city, return to the medina or enjoy a relaxed morning before
          your transfer.
  
          After eight days, the route has connected several different sides of
          northern and central Morocco, from imperial cities and Atlantic
          destinations to Tangier, Tetouan and the Rif Mountains.
  
          Your tour ends in Fes after completing a journey through Meknes, Rabat,
          Casablanca, Tangier and Chefchaouen.
  
          Final transfer can be arranged according to your flight, train or onward
          travel plans.
        `,
  
        highlights: [
          "Final morning in Fes",
          "Free time depending on departure",
          "Optional final city exploration",
          "Transfer according to your travel plans",
          "End of the eight-day Morocco tour",
        ],
      },
    ],
  
    // ─────────────────────────────
    // INCLUDED
    // ─────────────────────────────
  
    included: [
      "Private transportation throughout the eight-day journey",
      "English- or French-speaking driver",
      "Seven nights of accommodation",
      "Two nights in Fes",
      "One night in Rabat",
      "One night in Casablanca",
      "One night in Tangier",
      "Two nights in Chefchaouen",
      "Daily breakfasts",
      "Full day to explore Chefchaouen",
      "Free time at the main sightseeing destinations",
      "Flexible stops for photos and breaks during the journey",
      "Pickup in Fes",
      "Final transfer in Fes",
    ],
  
    // ─────────────────────────────
    // NOT INCLUDED
    // ─────────────────────────────
  
    excluded: [
      "Lunches and dinners",
      "Drinks",
      "Entrance fees to monuments and attractions",
      "Local city guides unless requested",
      "Optional activities not mentioned in the itinerary",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities",
      "Any services not mentioned in the included section",
    ],
  
    // ─────────────────────────────
    // ACCOMMODATION
    // ─────────────────────────────
  
    accommodation: [
      {
        night: 1,
        location: "Fes",
        type: "Hotel or Riad",
      },
      {
        night: 2,
        location: "Rabat",
        type: "Hotel or Riad",
      },
      {
        night: 3,
        location: "Casablanca",
        type: "Hotel",
      },
      {
        night: 4,
        location: "Tangier",
        type: "Hotel or Riad",
      },
      {
        night: 5,
        location: "Chefchaouen",
        type: "Hotel or Riad",
      },
      {
        night: 6,
        location: "Chefchaouen",
        type: "Hotel or Riad",
      },
      {
        night: 7,
        location: "Fes",
        type: "Hotel or Riad",
      },
    ],
  
    // ─────────────────────────────
    // GALLERY
    // ─────────────────────────────
  
    gallery: [
      "/images/tours/8-day-morocco-tour-from-fes.webp",
    ],
  
    // ─────────────────────────────
    // FAQ
    // ─────────────────────────────
  
    faqs: [
      {
        question: "Is the 8-day Morocco tour from Fes private?",
  
        answer:
          "Yes. This is a private journey for you and your travel group, with private transportation and more flexibility for sightseeing stops, breaks and the pace of the tour.",
      },
  
      {
        question: "Where does the 8-day Morocco tour start and finish?",
  
        answer:
          "The tour starts and finishes in Fes. The route travels through Meknes, Rabat, Casablanca, Tangier, Tetouan and Chefchaouen before returning to Fes.",
      },
  
      {
        question: "Does the tour include Chefchaouen?",
  
        answer:
          "Yes. Chefchaouen is one of the main destinations on the itinerary, and the tour includes two nights there with a full day to explore the blue medina.",
      },
  
      {
        question: "How do we travel from Fes to Chefchaouen on this tour?",
  
        answer:
          "This is not a direct transfer from Fes to Chefchaouen. The eight-day itinerary first travels through Meknes, Rabat, Casablanca, Tangier and Tetouan before reaching Chefchaouen and later returning to Fes.",
      },
  
      {
        question: "Is this a Chefchaouen day trip from Fes?",
  
        answer:
          "No. This is an eight-day private Morocco tour. Chefchaouen is part of a larger route through imperial cities, Atlantic destinations and northern Morocco, and the itinerary includes two nights in the Blue City.",
      },
  
      {
        question: "How many nights are included?",
  
        answer:
          "Seven nights are included: two in Fes, one in Rabat, one in Casablanca, one in Tangier and two in Chefchaouen.",
      },
  
      {
        question: "Does the tour visit Meknes?",
  
        answer:
          "Yes. Meknes is visited on day two while traveling from Fes toward Rabat.",
      },
  
      {
        question: "Does the itinerary include Rabat?",
  
        answer:
          "Yes. The journey includes an overnight stay in Rabat, giving you time to experience Morocco's capital before continuing to Casablanca.",
      },
  
      {
        question: "Does the tour include Casablanca?",
  
        answer:
          "Yes. You travel from Rabat to Casablanca on day three and spend one night in the city before continuing north toward Tangier.",
      },
  
      {
        question: "Do we stay overnight in Tangier?",
  
        answer:
          "Yes. One night is spent in Tangier before the journey continues through Tetouan toward Chefchaouen.",
      },
  
      {
        question: "Does the tour visit Tetouan?",
  
        answer:
          "Yes. Tetouan is included on the route between Tangier and Chefchaouen, giving you another experience of northern Morocco before entering the Rif region.",
      },
  
      {
        question: "Do we have a full day in Chefchaouen?",
  
        answer:
          "Yes. Day six is dedicated to Chefchaouen, allowing you to explore the blue-painted medina and enjoy the mountain atmosphere without a long transfer on the same day.",
      },
  
      {
        question: "What is the difference between Fes and Fez?",
  
        answer:
          "Fes and Fez are two common English spellings for the same Moroccan city. This private tour begins and ends there.",
      },
  
      {
        question: "Does this tour include the Sahara Desert?",
  
        answer:
          "No. This itinerary focuses on imperial cities, Atlantic destinations and northern Morocco. Travelers who want Merzouga and the Sahara can choose one of our desert tours from Fes.",
      },
  
      {
        question: "Why choose this tour instead of a desert tour from Fes?",
  
        answer:
          "This itinerary is designed for travelers more interested in historic cities, Atlantic destinations, Tangier and Chefchaouen. It explores northern Morocco rather than traveling south to Merzouga and the Sahara.",
      },
  
      {
        question: "Is there a lot of driving during the eight days?",
  
        answer:
          "The itinerary covers several cities, so some days include significant driving. The route is divided with overnight stays, sightseeing stops and a full day in Chefchaouen to keep the journey more comfortable.",
      },
  
      {
        question: "Are local guides included?",
  
        answer:
          "Local city guides are not included by default unless they are part of your final arrangements. Guides can be requested for selected cities when planning the tour.",
      },
  
      {
        question: "Are breakfasts included?",
  
        answer:
          "Yes. Daily breakfasts are included with your accommodation during the seven-night journey.",
      },
  
      {
        question: "Can the 8-day Morocco tour from Fes be customized?",
  
        answer:
          "Yes. Because this is a private tour, parts of the itinerary can be adapted to your travel dates, interests, accommodation preferences and onward plans.",
      },
  
      {
        question: "Is the tour suitable for families?",
  
        answer:
          "Families can request this private journey. If you are traveling with children, share their ages when contacting us so the route and accommodation can be planned comfortably.",
      },
    ],
  
    // ─────────────────────────────
    // SEO
    // ─────────────────────────────
  
    seo: {
      title:
        "8-Day Morocco Tour from Fes | Moroccan Trip",
  
      description:
        "Explore Morocco on a private 8-day tour from Fes through Meknes, Rabat, Casablanca, Tangier, Tetouan and Chefchaouen before returning to Fes.",
  
      // Internal SEO keyword map only.
      // Do not output these as a meta keywords tag.
      //
      // "fes to chefchaouen" has measurable search demand
      // but mixed transport/day-trip intent, so it is used
      // as a supporting term rather than the page's sole target.
      //
      // Generic Imperial Cities keywords are intentionally
      // excluded because they are already targeted elsewhere.
      keywords: [
        "8 day morocco tour from fes",
        "fes to chefchaouen",
        "chefchaouen tour from fes",
        "fes to chefchaouen tour",
        "tour from fes to chefchaouen",
        "fez to chefchaouen",
        "fes chefchaouen tour",
      ],
    },
  
    // ─────────────────────────────
    // BOOKING
    // ─────────────────────────────
  
    booking: {
      available: true,
      minimumDays: 8,
      customizable: true,
      contactLabel: "Request a Quote",
    },
  },
  {
    id: "25",
  
    // ─────────────────────────────
    // BASIC INFORMATION
    // ─────────────────────────────
  
    slug: "3-day-errachidia-merzouga-desert-tour",
  
    title: "3-Day Errachidia to Merzouga Desert Tour",
  
    shortDescription:
      "Discover the Sahara on a private 3-day journey from Errachidia to Merzouga through the Ziz Valley and Erfoud, with desert exploration, nomad encounters and Gnawa culture.",
  
    image: "/images/tours/3-day-errachidia-merzouga-desert-tour.webp",
  
    badge: "Errachidia to Merzouga",
  
    featured: true,
  
    category: "Desert Tours",
  
    // ─────────────────────────────
    // TOUR DETAILS
    // ─────────────────────────────
  
    duration: "3 Days / 2 Nights",
  
    nights: 2,
  
    tourType: "Private Tour",
  
    groupSize: "Up to 4 People",
  
    languages: ["English", "French"],
  
    departure: "Errachidia",
  
    arrival: "Errachidia",
  
    locations: [
      "Errachidia",
      "Ziz Valley",
      "Erfoud",
      "Merzouga",
      "Erg Chebbi",
      "Sahara Desert",
      "Nomad Areas",
      "Rissani",
    ],
  
    // ─────────────────────────────
    // PRICING
    // ─────────────────────────────
  
    // No fixed price.
    // The final quote depends on the number of travelers,
    // accommodation level and requested services.
  
    // ─────────────────────────────
    // HIGHLIGHTS
    // ─────────────────────────────
  
    highlights: [
      "Begin and finish your private desert journey in Errachidia",
      "Travel through the palm-filled landscapes of the Ziz Valley",
      "Pass through Erfoud on the road toward the Sahara",
      "Reach Merzouga at the edge of the Erg Chebbi dunes",
      "Spend time exploring the landscapes around Merzouga",
      "Discover different sides of life near the Sahara",
      "Visit areas connected with local nomad communities",
      "Experience traditional Gnawa music and culture",
      "Enjoy the peaceful atmosphere of the desert surroundings",
      "Travel through Rissani on the return journey",
      "See the Ziz Valley again before returning to Errachidia",
      "Enjoy a short desert itinerary without a long journey from Marrakech or Fes",
    ],
  
    // ─────────────────────────────
    // OVERVIEW
    // ─────────────────────────────
  
    overview: `
      Discover the Sahara on this private 3-day Errachidia to Merzouga desert
      tour through the Ziz Valley, Erfoud and the landscapes surrounding Erg
      Chebbi.
  
      Starting in Errachidia makes this journey a convenient option for travelers
      who are already in southeastern Morocco and want to experience Merzouga
      without beginning with a long drive from Marrakech or Fes.
  
      The first day takes you through the Ziz Valley, where palm groves stretch
      between dry mountains and traditional communities. Continue through Erfoud
      before reaching Merzouga at the edge of the Sahara.
  
      The second day is dedicated to exploring the Merzouga desert area. Instead
      of spending only a few hours beside the dunes, you have time to discover
      different landscapes around Erg Chebbi, visit areas connected with local
      nomad life and experience Gnawa music and culture.
  
      On the final day, leave Merzouga and travel through Rissani before returning
      through the Ziz Valley toward Errachidia.
  
      This Errachidia to Merzouga tour is designed as a short and focused Sahara
      experience. It combines desert scenery, local culture and the landscapes of
      southeastern Morocco while starting and finishing in Errachidia.
    `,
  
    // ─────────────────────────────
    // ITINERARY
    // ─────────────────────────────
  
    itinerary: [
      {
        day: 1,
  
        title: "Errachidia – Ziz Valley – Erfoud – Merzouga Desert",
  
        description: `
          Your three-day desert journey begins in Errachidia.
  
          After pickup, leave the city and travel toward the Ziz Valley, one of
          the most recognizable landscapes in southeastern Morocco.
  
          Palm groves stretch along the valley floor while dry mountains rise on
          both sides of the route.
  
          Take time to enjoy the scenery and stop for photos before continuing
          toward Erfoud.
  
          Erfoud is an important gateway to the desert and marks another change in
          the landscape as you travel closer to Merzouga.
  
          Continue toward the Erg Chebbi dunes and arrive in the Merzouga area
          later in the day.
  
          The open desert scenery provides a very different atmosphere from
          Errachidia and the Ziz Valley.
  
          Settle into your accommodation and enjoy the evening near the Sahara.
  
          Spend the first night in the Merzouga area.
        `,
  
        highlights: [
          "Pickup in Errachidia",
          "Travel through the Ziz Valley",
          "Enjoy views of palm groves and dry mountains",
          "Continue through Erfoud",
          "Approach the Sahara landscapes",
          "Arrive in Merzouga",
          "See the Erg Chebbi dunes",
          "Overnight stay in the Merzouga area",
        ],
      },
  
      {
        day: 2,
  
        title: "Merzouga Desert Exploration – Nomads – Gnawa Music",
  
        description: `
          Today is dedicated to exploring the Merzouga desert area and discovering
          more than the dunes alone.
  
          After breakfast, begin exploring the landscapes surrounding Erg Chebbi.
  
          Travel through different desert environments and enjoy wide views across
          the Sahara surroundings.
  
          Part of the day focuses on the human side of the region, with time in
          areas connected to local nomad communities and traditional ways of life
          around the desert.
  
          Continue the cultural experience with an introduction to Gnawa music,
          an important musical tradition associated with southern and
          southeastern Morocco.
  
          The slower pace gives you time to enjoy the atmosphere of Merzouga
          instead of arriving one evening and leaving immediately the following
          morning.
  
          Later in the day, return to the Merzouga area and enjoy another evening
          surrounded by the desert landscapes.
  
          Spend your second night near Erg Chebbi.
        `,
  
        highlights: [
          "Full day exploring the Merzouga area",
          "Discover landscapes around Erg Chebbi",
          "Experience different Sahara environments",
          "Visit areas connected with nomad communities",
          "Learn more about local desert life",
          "Experience traditional Gnawa music",
          "Enjoy a relaxed day around Merzouga",
          "Second overnight stay near the Sahara",
        ],
      },
  
      {
        day: 3,
  
        title: "Merzouga – Rissani – Ziz Valley – Errachidia",
  
        description: `
          After breakfast, leave Merzouga and begin the return journey toward
          Errachidia.
  
          Travel first toward Rissani, an important town in southeastern Morocco
          and a natural stop between the desert and the Ziz region.
  
          Depending on your schedule, take time to experience part of the local
          atmosphere before continuing north.
  
          The journey then returns toward the Ziz Valley.
  
          Seeing the valley from the opposite direction provides another chance
          to enjoy its palm groves, mountain scenery and traditional landscapes.
  
          Continue toward Errachidia and arrive later in the day.
  
          Your three-day Errachidia to Merzouga desert tour ends after exploring
          the Ziz Valley, Erfoud, the Sahara surroundings, local desert culture
          and Rissani.
  
          Final drop-off can be arranged according to your accommodation or onward
          travel plans in Errachidia.
        `,
  
        highlights: [
          "Breakfast near Merzouga",
          "Leave the Sahara",
          "Travel toward Rissani",
          "Experience southeastern Morocco",
          "Return through the Ziz Valley",
          "Enjoy final landscape views",
          "Arrive in Errachidia",
          "Final drop-off in Errachidia",
        ],
      },
    ],
  
    // ─────────────────────────────
    // INCLUDED
    // ─────────────────────────────
  
    // Review these items against your real package before publishing.
    included: [
      "Private transportation throughout the three-day journey",
      "English- or French-speaking driver",
      "Two nights of accommodation in the Merzouga area",
      "Daily breakfasts",
      "Merzouga desert exploration",
      "Visit to areas connected with local nomad communities",
      "Gnawa music experience",
      "Free time at the main sightseeing stops",
      "Flexible stops for photos and breaks",
      "Pickup in Errachidia",
      "Final drop-off in Errachidia",
    ],
  
    // ─────────────────────────────
    // NOT INCLUDED
    // ─────────────────────────────
  
    excluded: [
      "Lunches",
      "Dinners unless included in your final package",
      "Drinks",
      "Entrance fees where required",
      "Optional desert activities",
      "Local guides unless requested",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities",
      "Any services not mentioned in the included section",
    ],
  
    // ─────────────────────────────
    // ACCOMMODATION
    // ─────────────────────────────
  
    // The source itinerary does not specify the exact
    // accommodation type, so adjust these to your real offer.
    accommodation: [
      {
        night: 1,
        location: "Merzouga",
        type: "Hotel, Riad or Desert Accommodation",
      },
      {
        night: 2,
        location: "Merzouga",
        type: "Hotel, Riad or Desert Accommodation",
      },
    ],
  
    // ─────────────────────────────
    // GALLERY
    // ─────────────────────────────
  
    gallery: [
      "/images/tours/3-day-errachidia-merzouga-desert-tour.webp",
    ],
  
    // ─────────────────────────────
    // FAQ
    // ─────────────────────────────
  
    faqs: [
      {
        question: "Is the 3-day Errachidia to Merzouga desert tour private?",
  
        answer:
          "Yes. This is a private journey for you and your travel group, giving you more flexibility for stops, sightseeing and the pace of the tour.",
      },
  
      {
        question: "Where does the tour start and finish?",
  
        answer:
          "The tour starts in Errachidia, travels to Merzouga and the Sahara, and returns to Errachidia on the third day.",
      },
  
      {
        question: "How many nights are included?",
  
        answer:
          "The itinerary includes two nights in the Merzouga area. The exact accommodation type depends on the package you choose.",
      },
  
      {
        question: "Does the tour visit the Ziz Valley?",
  
        answer:
          "Yes. The Ziz Valley is included on the first day while traveling toward Merzouga and again on the return journey to Errachidia.",
      },
  
      {
        question: "Does the route pass through Erfoud?",
  
        answer:
          "Yes. Erfoud is included on the first day's route between the Ziz Valley and Merzouga.",
      },
  
      {
        question: "Do we visit Merzouga?",
  
        answer:
          "Yes. Merzouga is the main destination of the tour, and two nights are spent in the area near the Erg Chebbi dunes.",
      },
  
      {
        question: "Do we have a full day to explore the Merzouga desert?",
  
        answer:
          "Yes. Day two is dedicated to exploring the Merzouga area, desert landscapes, local culture and the surroundings of Erg Chebbi.",
      },
  
      {
        question: "Does the tour include a nomad experience?",
  
        answer:
          "The second day includes time in areas connected with local nomad communities, giving you an opportunity to learn more about life around the Sahara.",
      },
  
      {
        question: "Is Gnawa music included in the itinerary?",
  
        answer:
          "Yes. Gnawa music is included as part of the cultural experience during the second day around Merzouga.",
      },
  
      {
        question: "Does the tour visit Rissani?",
  
        answer:
          "Yes. Rissani is included on the third day while traveling from Merzouga back toward Errachidia.",
      },
  
      {
        question: "What is Erg Chebbi?",
  
        answer:
          "Erg Chebbi is the large dune area beside Merzouga and one of the best-known Sahara landscapes in southeastern Morocco.",
      },
  
      {
        question: "Is this tour suitable for travelers arriving in Errachidia?",
  
        answer:
          "Yes. The itinerary is designed to start and finish in Errachidia, making it convenient for travelers who are already in southeastern Morocco.",
      },
  
      {
        question: "How is this different from a desert tour from Fes or Marrakech?",
  
        answer:
          "Starting in Errachidia means you are much closer to Merzouga. The itinerary can therefore focus more on the Ziz Valley, desert surroundings and local experiences instead of spending most of the first and last days on long transfers.",
      },
  
      {
        question: "Is there a lot of driving during the tour?",
  
        answer:
          "The distances are shorter than many desert tours starting in Marrakech or Fes. The itinerary still includes road travel between Errachidia, the Ziz Valley, Erfoud, Merzouga and Rissani.",
      },
  
      {
        question: "Are meals included?",
  
        answer:
          "Daily breakfasts are included in this draft itinerary. Other meals depend on your final package, so confirm the exact meal plan when booking.",
      },
  
      {
        question: "Can the Errachidia to Merzouga tour be customized?",
  
        answer:
          "Yes. Because the tour is private, parts of the itinerary can be adapted to your travel dates, interests, accommodation preferences and onward plans.",
      },
  
      {
        question: "Is this desert tour suitable for families?",
  
        answer:
          "Families can request the tour. If you are traveling with children, share their ages when contacting us so the schedule and accommodation can be planned comfortably.",
      },
  
      {
        question: "What should I bring for Merzouga?",
  
        answer:
          "Comfortable clothing, walking shoes, sun protection and an extra layer for the evening are useful. Temperatures around the desert can change between daytime and night.",
      },
    ],
  
    // ─────────────────────────────
    // SEO
    // ─────────────────────────────
  
    seo: {
      title:
        "3-Day Errachidia to Merzouga Desert Tour | Moroccan Trip",
  
      description:
        "Explore the Sahara on a private 3-day Errachidia to Merzouga desert tour through Ziz Valley and Erfoud, with nomad culture, Gnawa music and Rissani.",
  
      // Internal SEO keyword map only.
      // Semrush currently reports no measurable search data
      // for these exact Errachidia tour phrases.
      //
      // They are intentionally kept highly relevant and
      // separate from Marrakech and Fes desert-tour clusters.
      keywords: [
        "3 day errachidia to merzouga desert tour",
        "errachidia to merzouga tour",
        "errachidia to merzouga desert tour",
        "merzouga tour from errachidia",
        "desert tour from errachidia",
        "errachidia desert tour",
      ],
    },
  
    // ─────────────────────────────
    // BOOKING
    // ─────────────────────────────
  
    booking: {
      available: true,
      minimumDays: 3,
      customizable: true,
      contactLabel: "Request a Quote",
    },
  },
  {
    id: "26",
  
    // ─────────────────────────────
    // BASIC INFORMATION
    // ─────────────────────────────
  
    slug: "4-day-agadir-marrakech-desert-tour",
  
    title: "4-Day Agadir to Marrakech Desert Tour via Merzouga",
  
    shortDescription:
      "Travel from Agadir to Marrakech on a private 4-day desert journey through Ait Ben Haddou, Dades Valley, Todra Gorges, Merzouga, the Draa Valley and the High Atlas Mountains.",
  
    image: "/images/tours/4-day-agadir-marrakech-desert-tour.webp",
  
    badge: "Agadir to Marrakech",
  
    featured: true,
  
    category: "Desert Tours",
  
    // ─────────────────────────────
    // TOUR DETAILS
    // ─────────────────────────────
  
    duration: "4 Days / 3 Nights",
  
    nights: 3,
  
    tourType: "Private Tour",
  
    groupSize: "Up to 4 People",
  
    languages: ["English", "French"],
  
    departure: "Agadir",
  
    arrival: "Marrakech",
  
    locations: [
      "Agadir",
      "Taznakht",
      "Ait Ben Haddou",
      "Dades Valley",
      "Valley of Roses",
      "Todra Gorges",
      "Erfoud",
      "Merzouga",
      "Erg Chebbi",
      "Sahara Desert",
      "Khamlia",
      "Rissani",
      "Draa Valley",
      "Ouarzazate",
      "High Atlas Mountains",
      "Marrakech",
    ],
  
    // ─────────────────────────────
    // PRICING
    // ─────────────────────────────
  
    // No fixed price.
    // The final quote depends on the number of travelers,
    // accommodation level and requested services.
  
    // ─────────────────────────────
    // HIGHLIGHTS
    // ─────────────────────────────
  
    highlights: [
      "Travel privately from Agadir to Marrakech through southern Morocco",
      "Cross changing landscapes on the road from Agadir to Taznakht",
      "Visit the historic fortified village of Ait Ben Haddou",
      "Spend the first night among the landscapes of the Dades Valley",
      "Travel through the beautiful Valley of Roses",
      "Walk between the dramatic canyon walls of Todra Gorges",
      "Continue through Erfoud toward the Sahara",
      "Reach Merzouga at the edge of the Erg Chebbi dunes",
      "Spend time discovering the desert landscapes around Merzouga",
      "Visit Khamlia and experience another side of the desert region",
      "Travel through the historic town of Rissani",
      "Cross the landscapes of the Draa Valley",
      "Spend a night in Ouarzazate",
      "Cross the High Atlas Mountains on the final day",
      "Finish your four-day journey in Marrakech",
      "Combine the Sahara, valleys, kasbahs and mountains in one route from Agadir",
    ],
  
    // ─────────────────────────────
    // OVERVIEW
    // ─────────────────────────────
  
    overview: `
      Discover southern Morocco on this private 4-day Agadir to Marrakech desert
      tour through the Sahara, historic villages, dramatic valleys and the High
      Atlas Mountains.
  
      Instead of taking the direct road from Agadir to Marrakech, this journey
      makes a wide crossing through some of southern Morocco's most memorable
      landscapes.
  
      Leave Agadir and travel toward Taznakht before reaching Ait Ben Haddou.
      Explore the fortified village and continue through southern Morocco toward
      the Dades Valley, where you spend the first night.
  
      The second day takes you through the Valley of Roses and toward Todra
      Gorges. Walk between the high canyon walls before continuing through Erfoud
      toward Merzouga and the Sahara.
  
      Merzouga sits beside the dunes of Erg Chebbi and provides a completely
      different landscape from the valleys and mountain roads experienced earlier
      in the journey.
  
      On day three, spend more time discovering the Merzouga area before
      continuing through Khamlia and Rissani. The route then crosses the Draa
      Valley toward Ouarzazate for the final overnight stay.
  
      The last day takes you from Ouarzazate across the High Atlas Mountains
      before arriving in Marrakech.
  
      This four-day desert tour from Agadir is designed for travelers who want to
      connect Agadir and Marrakech through the Sahara instead of taking the
      direct route. It combines Ait Ben Haddou, Dades, Todra Gorges, Merzouga,
      the Draa Valley and the High Atlas Mountains in one private journey.
    `,
  
    // ─────────────────────────────
    // ITINERARY
    // ─────────────────────────────
  
    itinerary: [
      {
        day: 1,
  
        title:
          "Agadir – Taznakht – Ait Ben Haddou – Dades Valley",
  
        description: `
          Your four-day desert journey begins with pickup in Agadir.
  
          Leave the Atlantic region behind and travel inland toward Taznakht as
          the scenery gradually changes from coastal surroundings to the dry and
          mountainous landscapes of southern Morocco.
  
          Continue toward Ait Ben Haddou.
  
          Take time to explore the historic fortified village and walk through
          its traditional earthen architecture.
  
          The setting provides a first introduction to the kasbah landscapes that
          characterize this part of Morocco.
  
          After the visit, continue east through changing mountain and valley
          scenery toward the Dades region.
  
          The road offers opportunities for photo stops and short breaks along the
          way.
  
          Arrive in the Dades Valley later in the day and settle into your
          accommodation.
  
          Spend the first night surrounded by the landscapes of the valley.
        `,
  
        highlights: [
          "Pickup in Agadir",
          "Travel inland toward Taznakht",
          "Experience changing southern Morocco scenery",
          "Visit Ait Ben Haddou",
          "Explore traditional earthen architecture",
          "Continue toward the Dades Valley",
          "Flexible photo and rest stops",
          "Overnight stay in the Dades Valley",
        ],
      },
  
      {
        day: 2,
  
        title:
          "Dades Valley – Valley of Roses – Todra Gorges – Erfoud – Merzouga",
  
        description: `
          After breakfast, leave the Dades Valley and continue through the
          landscapes of southern Morocco.
  
          Travel through the Valley of Roses before continuing toward Todra
          Gorges.
  
          At Todra, take time to walk between the high canyon walls and enjoy one
          of the most dramatic natural landscapes on the route.
  
          After the visit, continue east through increasingly dry scenery toward
          Erfoud.
  
          The landscape begins to feel more desert-like as you travel closer to
          Merzouga.
  
          Continue toward the Sahara and reach Merzouga beside the Erg Chebbi
          dunes.
  
          The golden dunes create a striking contrast with the valleys, gorges and
          rocky landscapes experienced earlier in the day.
  
          Enjoy the evening in the Merzouga area and spend your second night near
          the Sahara.
        `,
  
        highlights: [
          "Breakfast in the Dades Valley",
          "Travel through the Valley of Roses",
          "Continue toward Todra Gorges",
          "Walk between the canyon walls",
          "Travel through southeastern Morocco",
          "Pass through Erfoud",
          "Reach Merzouga",
          "See the Erg Chebbi dunes",
          "Overnight stay in the Merzouga area",
        ],
      },
  
      {
        day: 3,
  
        title:
          "Merzouga Area – Khamlia – Rissani – Draa Valley – Ouarzazate",
  
        description: `
          Begin the morning in the Merzouga area with time to enjoy the desert
          surroundings.
  
          The day starts with more exploration around the Sahara before leaving
          Merzouga and continuing toward Khamlia.
  
          Khamlia provides a cultural stop and another perspective on communities
          living near the desert.
  
          Continue toward Rissani, an important historic town in southeastern
          Morocco.
  
          After the visit, begin traveling west through changing desert and valley
          landscapes.
  
          The route continues through the Draa Valley, known for its long stretches
          of palm groves surrounded by dry mountains and traditional settlements.
  
          Continue toward Ouarzazate and arrive later in the day.
  
          Spend the third and final night of the journey in Ouarzazate before
          crossing the High Atlas Mountains the following morning.
        `,
  
        highlights: [
          "Morning in the Merzouga area",
          "Enjoy the Sahara surroundings",
          "Visit Khamlia",
          "Experience local desert culture",
          "Continue through Rissani",
          "Travel west through southern Morocco",
          "Cross the Draa Valley",
          "Enjoy palm-grove landscapes",
          "Arrive in Ouarzazate",
          "Overnight stay in Ouarzazate",
        ],
      },
  
      {
        day: 4,
  
        title:
          "Ouarzazate – High Atlas Mountains – Marrakech",
  
        description: `
          After breakfast, leave Ouarzazate and begin the final stage of your
          journey toward Marrakech.
  
          The route climbs toward the High Atlas Mountains, replacing the dry
          landscapes around Ouarzazate with higher mountain scenery.
  
          Travel along winding roads surrounded by valleys, traditional villages
          and wide mountain views.
  
          Stops can be made during the journey for photos, rest and meals
          depending on your schedule.
  
          As you cross the mountains, the scenery continues to change before the
          route begins descending toward the plains surrounding Marrakech.
  
          Arrive in Marrakech later in the day.
  
          Your four-day journey ends after traveling from Agadir through Ait Ben
          Haddou, the Dades Valley, Todra Gorges, Merzouga, the Sahara, the Draa
          Valley and Ouarzazate.
  
          Final drop-off can be arranged according to your accommodation or onward
          travel plans in Marrakech.
        `,
  
        highlights: [
          "Breakfast in Ouarzazate",
          "Leave southern Morocco",
          "Cross the High Atlas Mountains",
          "Enjoy panoramic mountain scenery",
          "See traditional villages along the route",
          "Flexible photo and rest stops",
          "Travel toward Marrakech",
          "Arrive in Marrakech",
          "Final drop-off in Marrakech",
          "End of the four-day journey",
        ],
      },
    ],
  
    // ─────────────────────────────
    // INCLUDED
    // ─────────────────────────────
  
    // The itinerary source confirms the route but does not
    // specify the exact package services.
    // Review these items against your real offer before publishing.
    included: [
      "Private transportation throughout the four-day journey",
      "English- or French-speaking driver",
      "Three nights of accommodation",
      "One night in the Dades Valley",
      "One night in the Merzouga area",
      "One night in Ouarzazate",
      "Free time at the main sightseeing stops",
      "Flexible stops for photos and breaks during the journey",
      "Pickup in Agadir",
      "Final drop-off in Marrakech",
    ],
  
    // ─────────────────────────────
    // NOT INCLUDED
    // ─────────────────────────────
  
    excluded: [
      "Lunches and dinners unless included in your final package",
      "Drinks",
      "Entrance fees to monuments and attractions",
      "Local guides unless requested",
      "Optional Sahara activities",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities",
      "Any services not mentioned in the included section",
    ],
  
    // ─────────────────────────────
    // ACCOMMODATION
    // ─────────────────────────────
  
    // Adjust the exact accommodation categories to match
    // the package you actually sell.
    accommodation: [
      {
        night: 1,
        location: "Dades Valley",
        type: "Hotel or Riad",
      },
      {
        night: 2,
        location: "Merzouga",
        type: "Hotel, Riad or Desert Accommodation",
      },
      {
        night: 3,
        location: "Ouarzazate",
        type: "Hotel or Riad",
      },
    ],
  
    // ─────────────────────────────
    // GALLERY
    // ─────────────────────────────
  
    gallery: [
      "/images/tours/4-day-agadir-marrakech-desert-tour.webp",
    ],
  
    // ─────────────────────────────
    // FAQ
    // ─────────────────────────────
  
    faqs: [
      {
        question: "Is the 4-day Agadir to Marrakech desert tour private?",
  
        answer:
          "Yes. This is a private journey for you and your travel group, giving you more flexibility for sightseeing stops, breaks and the pace of the tour.",
      },
  
      {
        question: "Where does the tour start and finish?",
  
        answer:
          "The tour starts in Agadir and finishes in Marrakech after traveling through Ait Ben Haddou, Dades Valley, Todra Gorges, Merzouga, the Draa Valley and Ouarzazate.",
      },
  
      {
        question: "Is this a direct trip from Agadir to Marrakech?",
  
        answer:
          "No. This is a four-day desert journey rather than a direct transfer. The route travels east through southern Morocco to Merzouga before returning west through Ouarzazate and the High Atlas Mountains to Marrakech.",
      },
  
      {
        question: "Does the tour visit Ait Ben Haddou?",
  
        answer:
          "Yes. Ait Ben Haddou is visited on the first day while traveling from Agadir toward the Dades Valley.",
      },
  
      {
        question: "Does the tour include the Dades Valley?",
  
        answer:
          "Yes. The first overnight stay is in the Dades Valley before the journey continues through the Valley of Roses and Todra Gorges.",
      },
  
      {
        question: "Does the tour visit Todra Gorges?",
  
        answer:
          "Yes. Todra Gorges is included on day two while traveling from the Dades region toward Erfoud and Merzouga.",
      },
  
      {
        question: "Does the Agadir desert tour reach Merzouga?",
  
        answer:
          "Yes. Merzouga is reached on day two and the itinerary includes an overnight stay in the area beside the Erg Chebbi dunes.",
      },
  
      {
        question: "What is Erg Chebbi?",
  
        answer:
          "Erg Chebbi is the large dune area beside Merzouga and one of the best-known Sahara landscapes in southeastern Morocco.",
      },
  
      {
        question: "Does the itinerary include Khamlia?",
  
        answer:
          "Yes. Khamlia is included on the third day as part of the journey from the Merzouga area toward Rissani and the Draa Valley.",
      },
  
      {
        question: "Does the tour visit Rissani?",
  
        answer:
          "Yes. Rissani is included on day three after leaving the Merzouga area.",
      },
  
      {
        question: "Does the journey include the Draa Valley?",
  
        answer:
          "Yes. The third day's route crosses the Draa Valley before arriving in Ouarzazate.",
      },
  
      {
        question: "Do we spend a night in Ouarzazate?",
  
        answer:
          "Yes. The third night is spent in Ouarzazate before crossing the High Atlas Mountains to Marrakech.",
      },
  
      {
        question: "Does the tour cross the High Atlas Mountains?",
  
        answer:
          "Yes. The final day travels from Ouarzazate through the High Atlas Mountains before arriving in Marrakech.",
      },
  
      {
        question: "How many nights are included?",
  
        answer:
          "The itinerary includes three nights: one in the Dades Valley, one in the Merzouga area and one in Ouarzazate.",
      },
  
      {
        question: "How is this different from traveling directly from Agadir to Marrakech?",
  
        answer:
          "A direct journey connects the two cities much faster. This four-day itinerary takes a wide route through southern Morocco and the Sahara, including Ait Ben Haddou, Dades, Todra Gorges, Merzouga and the Draa Valley.",
      },
  
      {
        question: "Is there a lot of driving during the four days?",
  
        answer:
          "The route covers a large part of southern Morocco, so each day includes road travel. The journey is divided across three overnight stops with sightseeing and rest breaks along the way.",
      },
  
      {
        question: "Are camel rides or a Sahara camp included?",
  
        answer:
          "The route includes Merzouga and the Sahara, but the itinerary information provided does not confirm whether a camel ride or desert camp is included. These experiences can be confirmed when arranging your package.",
      },
  
      {
        question: "Are meals included?",
  
        answer:
          "The exact meal plan depends on your final package. Confirm the included breakfasts and dinners when requesting your quote.",
      },
  
      {
        question: "Can the Agadir to Marrakech desert tour be customized?",
  
        answer:
          "Yes. Because this is a private tour, parts of the itinerary can be adapted to your dates, interests, accommodation preferences and onward travel plans.",
      },
  
      {
        question: "Is this tour suitable for families?",
  
        answer:
          "Families can request the private journey. If you are traveling with children, share their ages when contacting us so the driving schedule and accommodation can be planned comfortably.",
      },
    ],
  
    // ─────────────────────────────
    // SEO
    // ─────────────────────────────
  
    seo: {
      title:
        "4-Day Agadir to Marrakech Desert Tour | Moroccan Trip",
  
      description:
        "Travel on a private 4-day Agadir to Marrakech desert tour through Ait Ben Haddou, Dades, Todra Gorges, Merzouga, the Draa Valley and Ouarzazate.",
  
      // Internal SEO keyword map only.
      // Do not output these as a meta keywords tag.
      //
      // Semrush:
      // "agadir to marrakech" = Volume 170 / KD 19
      // "agadir morocco to marrakech" = Volume 90 / KD 21
      // "agadir to marrakech tour" = Volume 10
      //
      // The broad route terms are supporting keywords because
      // much of their intent is transport-related.
      // The specific 4-day phrase remains the product target.
      keywords: [
        "4 day agadir to marrakech desert tour",
        "agadir to marrakech",
        "agadir to marrakech tour",
        "agadir morocco to marrakech",
        "4 day desert tour from agadir",
        "agadir to marrakech via merzouga",
      ],
    },
  
    // ─────────────────────────────
    // BOOKING
    // ─────────────────────────────
  
    booking: {
      available: true,
      minimumDays: 4,
      customizable: true,
      contactLabel: "Request a Quote",
    },
  },
  {
    id: "27",
  
    // ─────────────────────────────
    // BASIC INFORMATION
    // ─────────────────────────────
  
    slug: "8-day-taghazout-surf-camp",
  
    title: "8-Day Taghazout Surf Camp Package",
  
    shortDescription:
      "Enjoy an 8-day Morocco surf trip with accommodation, surf lessons or guiding, daily surf transport, Taghazout, Tamraght, Imsouane and a relaxing Paradise Valley day.",
  
    image: "/images/tours/8-day-taghazout-surf-camp.webp",
  
    badge: "Surf Camp Package",
  
    featured: true,
  
    category: "Surf Packages",
  
    // ─────────────────────────────
    // TOUR DETAILS
    // ─────────────────────────────
  
    duration: "8 Days / 7 Nights",
  
    nights: 7,
  
    tourType: "Private Tour",
  
    groupSize: "Up to 4 People",
  
    languages: ["English", "French"],
  
    departure: "Agadir",
  
    arrival: "Agadir",
  
    locations: [
      "Agadir",
      "Taghazout",
      "Tamraght",
      "Imsouane",
      "Paradise Valley",
      "Atlantic Coast",
    ],
  
    // ─────────────────────────────
    // PRICING
    // ─────────────────────────────
  
    // No fixed price.
    // The final quote depends on:
    // - number of travelers
    // - accommodation level
    // - surf level
    // - equipment requirements
    // - private or shared surf lessons
    // - requested extra activities
  
    // ─────────────────────────────
    // HIGHLIGHTS
    // ─────────────────────────────
  
    highlights: [
      "Stay for seven nights along Morocco's Atlantic surf coast",
      "Enjoy a complete Taghazout surf camp experience with local support",
      "Learn to surf or improve your skills with sessions adapted to your level",
      "Travel daily to surf spots chosen according to waves and conditions",
      "Explore the surf areas around Taghazout and Tamraght",
      "Spend two nights in the relaxed coastal village of Imsouane",
      "Enjoy a full surf day in Imsouane",
      "Take a break from surfing with a Paradise Valley day trip",
      "Use surf equipment during your scheduled surf sessions",
      "Travel with organized transport between accommodation and surf spots",
      "Combine surfing, coastal life, nature and free time in one package",
      "Suitable for beginners, intermediate surfers and experienced surfers",
      "Private customization available for couples, friends and small groups",
      "Non-surfing companions can join with a customized activity plan",
      "Airport pickup and departure transfer can be arranged from Agadir",
    ],
  
    // ─────────────────────────────
    // OVERVIEW
    // ─────────────────────────────
  
    overview: `
      Spend eight days enjoying Morocco's Atlantic coast with this Taghazout surf
      camp package combining surfing, accommodation, transport, coastal villages
      and time to relax.
  
      The trip is based around Taghazout and Tamraght, two popular places for
      travelers who come to Morocco for surfing and beach life. Instead of giving
      every traveler the same surf program, the sessions can be adapted to your
      experience.
  
      First-time surfers can start with the basics, including beach safety,
      paddling, standing on the board and catching suitable waves. Surfers with
      more experience can focus on technique, wave selection and surf guiding.
  
      The surf spot is not fixed every day. Conditions on the Atlantic coast can
      change, so the daily location can be selected according to your surf level,
      swell, tide and local conditions.
  
      This makes the package more flexible and gives you a better chance to spend
      your surf time in conditions that match your ability.
  
      During the first part of the trip, you stay around Taghazout or Tamraght
      and enjoy several surf sessions along the coast.
  
      A recovery day gives you time away from the board with a trip to Paradise
      Valley before the journey continues north toward Imsouane.
  
      You then spend two nights in Imsouane, giving you time for more surfing
      without making the visit a rushed day trip.
  
      After the Imsouane experience, return to the Taghazout and Tamraght area for
      your final night before departure.
  
      This Morocco surf trip is designed for travelers who want more than a single
      surf lesson. Accommodation, transport, surfing and selected activities can
      all be arranged as one easy package.
  
      The itinerary can also be customized for couples or friends with different
      interests. If one person wants to surf and another prefers yoga, beaches,
      nature, hammam or other activities, the program can be adjusted before
      arrival.
    `,
  
    // ─────────────────────────────
    // ITINERARY
    // ─────────────────────────────
  
    itinerary: [
      {
        day: 1,
  
        title:
          "Agadir Arrival – Transfer to Taghazout or Tamraght",
  
        description: `
          Welcome to Morocco.
  
          Your surf holiday begins with pickup in Agadir, including Agadir Al
          Massira Airport when arranged as part of your package.
  
          Meet your driver and travel north toward the Atlantic coast.
  
          Check in at your accommodation in Taghazout or Tamraght and take some
          time to settle in after your journey.
  
          Later, meet the local team and discuss the surf plan for the coming
          days.
  
          Your previous surf experience is important when planning the sessions.
  
          If you have never surfed before, the first lessons will focus on simple
          foundations and safety.
  
          Intermediate or experienced surfers can discuss the type of waves they
          prefer and the kind of surf guiding or coaching they need.
  
          The rest of the day is relaxed.
  
          Walk around the village, enjoy the coast or simply rest before your
          first surf day.
  
          Spend your first night in the Taghazout or Tamraght area.
        `,
  
        highlights: [
          "Arrival in Agadir",
          "Airport pickup when included in your package",
          "Private transfer to the coast",
          "Check-in in Taghazout or Tamraght",
          "Meet the local team",
          "Discuss your surf experience",
          "Plan sessions according to your level",
          "Free time by the Atlantic coast",
          "Overnight in Taghazout or Tamraght",
        ],
      },
  
      {
        day: 2,
  
        title:
          "First Surf Day – Surf Assessment & Lesson",
  
        description: `
          After breakfast, get ready for your first full surf day.
  
          The exact beach is selected according to the day's conditions and your
          level rather than following a fixed surf spot.
  
          Beginners start with an introduction to surf safety, equipment,
          positioning on the board, paddling and the basic movement used to stand
          up.
  
          Once comfortable, continue into suitable water conditions with your
          instructor and begin practicing on real waves.
  
          Intermediate surfers can use the first session as an assessment of their
          current level before working on specific areas such as positioning,
          timing and wave selection.
  
          Experienced surfers can choose surf guiding instead of a beginner-style
          lesson.
  
          After the morning session, enjoy time for lunch and recovery.
  
          Depending on your package, energy level and conditions, the afternoon
          can be used for another surf session or free time.
  
          Return to your accommodation later in the day and enjoy a relaxed
          evening around Taghazout or Tamraght.
        `,
  
        highlights: [
          "Breakfast before surfing",
          "Surf spot selected according to conditions",
          "Surf lesson for beginners",
          "Surf assessment for experienced guests",
          "Surfboard and wetsuit when included",
          "Daily surf transport",
          "Time for lunch and recovery",
          "Optional additional surf session",
          "Overnight in Taghazout or Tamraght",
        ],
      },
  
      {
        day: 3,
  
        title:
          "Taghazout & Tamraght Surf Progression Day",
  
        description: `
          Today is focused on building confidence and improving your surfing.
  
          After breakfast, check the local conditions and travel to a surf spot
          suited to the group.
  
          For beginners, the aim is to build on the first day's lesson.
  
          You may work on catching more waves, improving your take-off and gaining
          better control of the board.
  
          Intermediate surfers can focus on reading waves, positioning, trimming
          and making better decisions in the water.
  
          More experienced surfers can continue with local surf guiding and search
          for suitable conditions along the coast.
  
          The program remains flexible because wave quality, tide and swell can
          change from one day to another.
  
          After surfing, return to the Taghazout or Tamraght area.
  
          The rest of the afternoon can be kept free for the beach, a café, yoga,
          stretching or simply resting before the next day's nature trip.
        `,
  
        highlights: [
          "Second full surf day",
          "Flexible surf spot selection",
          "Beginner progression",
          "Intermediate surf coaching",
          "Surf guiding option",
          "Surf transport included when part of your package",
          "Free afternoon after the session",
          "Optional yoga or stretching",
          "Overnight in Taghazout or Tamraght",
        ],
      },
  
      {
        day: 4,
  
        title:
          "Paradise Valley – Nature & Surf Recovery Day",
  
        description: `
          Take a break from the regular surf schedule and enjoy a change of
          scenery.
  
          After breakfast, travel inland from the Atlantic coast toward Paradise
          Valley.
  
          The journey moves away from the busy beach atmosphere and into a more
          peaceful landscape of mountains, palms and rocky scenery.
  
          Enjoy time to walk, relax and experience a different side of the Agadir
          region.
  
          This day also gives your body time to recover after two active surf
          days.
  
          Lunch can be arranged during the excursion or enjoyed independently,
          depending on your package.
  
          Return to Taghazout or Tamraght later in the day.
  
          The evening is free.
  
          Travelers who want additional relaxation can request activities such as
          hammam, massage or yoga when available.
  
          Spend another night near the coast.
        `,
  
        highlights: [
          "Breakfast at your accommodation",
          "Day trip to Paradise Valley",
          "Mountain and palm landscapes",
          "Time for walking and relaxation",
          "Recovery day between surf sessions",
          "Return to the Atlantic coast",
          "Optional hammam or massage",
          "Optional yoga",
          "Overnight in Taghazout or Tamraght",
        ],
      },
  
      {
        day: 5,
  
        title:
          "Taghazout or Tamraght – Imsouane – Surf Session",
  
        description: `
          After breakfast, leave the Taghazout and Tamraght area and travel north
          along Morocco's Atlantic coast toward Imsouane.
  
          The road journey is part of the experience, with coastal scenery and
          small communities along the way.
  
          Arrive in Imsouane and check in at your accommodation.
  
          Depending on arrival time, surf conditions and your level, head out for
          your first session in the area.
  
          Beginners can continue practicing the skills developed during the first
          part of the trip.
  
          Intermediate surfers can focus on longer rides, better positioning and
          improving control.
  
          Experienced surfers can explore suitable local conditions with surf
          guidance when included in their package.
  
          After the session, enjoy the slower rhythm of Imsouane.
  
          Spend the evening in the village and stay overnight in Imsouane.
        `,
  
        highlights: [
          "Travel north along the Atlantic coast",
          "Arrive in Imsouane",
          "Check in at your accommodation",
          "Surf session according to conditions",
          "Beginner and intermediate progression",
          "Surf guiding option",
          "Free time in Imsouane",
          "Overnight in Imsouane",
        ],
      },
  
      {
        day: 6,
  
        title:
          "Full Imsouane Surf Day",
  
        description: `
          Wake up in Imsouane and prepare for a full day centered around surfing.
  
          After breakfast, check the conditions and plan the morning session.
  
          This day gives you more time in the water without needing to travel back
          to Taghazout immediately.
  
          Beginners continue working on confidence, wave catching and board
          control.
  
          Intermediate surfers can focus on making more of each wave and improving
          technique.
  
          Experienced surfers can use local guidance to choose the most suitable
          session for the day's conditions.
  
          After the morning surf, take a break for food and rest.
  
          A second session can be arranged later if conditions, your package and
          your energy level allow it.
  
          If you prefer a slower afternoon, spend time exploring the village,
          walking near the coast or watching the sunset.
  
          Spend your second night in Imsouane.
        `,
  
        highlights: [
          "Full day in Imsouane",
          "Morning surf session",
          "Coaching adapted to your level",
          "Time to rest between sessions",
          "Optional second surf session",
          "Free time around the village",
          "Atlantic sunset",
          "Second overnight in Imsouane",
        ],
      },
  
      {
        day: 7,
  
        title:
          "Final Surf Session – Imsouane to Taghazout or Tamraght",
  
        description: `
          Enjoy your final active day of the surf package.
  
          Depending on conditions and timing, begin with another surf session in
          Imsouane or choose a suitable spot during the journey back south.
  
          This final session gives beginners a chance to put together everything
          they have practiced during the week.
  
          Intermediate surfers can focus on consistency and independent wave
          selection.
  
          Experienced surfers can enjoy one more guided session before leaving the
          area.
  
          After surfing, travel south toward Taghazout and Tamraght.
  
          Check in for your final night and enjoy the rest of the day at your own
          pace.
  
          Spend time on the beach, walk through Taghazout, enjoy a café or arrange
          an optional wellness activity.
  
          The evening can also be used as a relaxed farewell before your departure
          the following day.
        `,
  
        highlights: [
          "Final surf session",
          "Surfing adapted to your level",
          "Flexible spot according to conditions",
          "Return south along the coast",
          "Arrive in Taghazout or Tamraght",
          "Free time by the beach",
          "Optional wellness activity",
          "Final overnight on the coast",
        ],
      },
  
      {
        day: 8,
  
        title:
          "Taghazout or Tamraght – Agadir Departure",
  
        description: `
          Enjoy breakfast and your final morning on Morocco's Atlantic coast.
  
          Depending on your departure time, you may have some free time for the
          beach, a short walk, shopping or a relaxed coffee before leaving.
  
          Your driver will collect you from the accommodation at the arranged
          time.
  
          Travel back toward Agadir for your final drop-off.
  
          Airport transfer to Agadir Al Massira Airport can be arranged according
          to your flight schedule.
  
          Your eight-day Taghazout surf camp experience ends after a week combining
          surf sessions, Taghazout, Tamraght, Imsouane, Paradise Valley and time
          along Morocco's Atlantic coast.
  
          If you want to continue traveling in Morocco, your onward transfer can
          also be customized when arranging the trip.
        `,
  
        highlights: [
          "Final breakfast",
          "Free time depending on departure",
          "Pickup from your accommodation",
          "Transfer toward Agadir",
          "Airport drop-off when arranged",
          "End of the 8-day surf package",
          "Optional customized onward transfer",
        ],
      },
    ],
  
    // ─────────────────────────────
    // INCLUDED
    // ─────────────────────────────
  
    // Review this list against the exact package you want to sell.
    // You can create different prices for:
    // Beginner / Intermediate / Surf Guiding / Non-Surfer.
  
    included: [
      "Seven nights of accommodation",
      "Accommodation in the Taghazout or Tamraght area",
      "Two nights of accommodation in Imsouane",
      "Daily breakfasts",
      "Agadir arrival transfer when included in the selected package",
      "Agadir departure transfer when included in the selected package",
      "Surf lessons or surf guiding according to the selected package",
      "Surfboard during scheduled surf sessions",
      "Wetsuit during scheduled surf sessions",
      "Transport to selected surf spots",
      "Surf spot selection according to level and local conditions",
      "Transport between Taghazout or Tamraght and Imsouane",
      "Paradise Valley excursion",
      "Local coordination during the trip",
      "Flexible itinerary based on surf conditions",
    ],
  
    // ─────────────────────────────
    // NOT INCLUDED
    // ─────────────────────────────
  
    excluded: [
      "International flights",
      "Lunches and dinners unless included in your selected package",
      "Drinks",
      "Travel insurance",
      "Personal expenses",
      "Optional hammam treatments",
      "Optional massage",
      "Optional yoga sessions unless included in your package",
      "Optional activities not listed in the selected package",
      "Advanced or specialist surf equipment unless requested",
      "Tips and gratuities",
      "Any services not mentioned in the included section",
    ],
  
    // ─────────────────────────────
    // ACCOMMODATION
    // ─────────────────────────────
  
    // Adjust accommodation type to match your real partners.
    accommodation: [
      {
        night: 1,
        location: "Taghazout or Tamraght",
        type: "Surf House, Riad or Hotel",
      },
      {
        night: 2,
        location: "Taghazout or Tamraght",
        type: "Surf House, Riad or Hotel",
      },
      {
        night: 3,
        location: "Taghazout or Tamraght",
        type: "Surf House, Riad or Hotel",
      },
      {
        night: 4,
        location: "Taghazout or Tamraght",
        type: "Surf House, Riad or Hotel",
      },
      {
        night: 5,
        location: "Imsouane",
        type: "Surf House, Guesthouse or Hotel",
      },
      {
        night: 6,
        location: "Imsouane",
        type: "Surf House, Guesthouse or Hotel",
      },
      {
        night: 7,
        location: "Taghazout or Tamraght",
        type: "Surf House, Riad or Hotel",
      },
    ],
  
    // ─────────────────────────────
    // GALLERY
    // ─────────────────────────────
  
    gallery: [
      "/images/tours/8-day-taghazout-surf-camp.webp",
    ],
  
    // ─────────────────────────────
    // FAQ
    // ─────────────────────────────
  
    faqs: [
      {
        question: "Is this Taghazout surf camp suitable for beginners?",
  
        answer:
          "Yes. The package can be adapted for complete beginners. The first sessions can cover surf safety, paddling, standing on the board and catching suitable waves before progressing at a comfortable pace.",
      },
  
      {
        question: "Do I need previous surfing experience?",
  
        answer:
          "No. First-time surfers are welcome. Your program can be adapted according to whether you are a beginner, intermediate surfer or experienced surfer.",
      },
  
      {
        question: "Can intermediate surfers join the package?",
  
        answer:
          "Yes. Intermediate surfers can follow a more advanced program focused on wave selection, positioning, technique and improving consistency rather than repeating beginner lessons.",
      },
  
      {
        question: "Do you offer surf guiding for experienced surfers?",
  
        answer:
          "Yes. Experienced surfers can request surf guiding instead of beginner lessons. The goal is to choose suitable surf spots according to your level and the conditions during your stay.",
      },
  
      {
        question: "Are surf lessons included every day?",
  
        answer:
          "The exact number of lessons depends on the package you choose. Some days are designed for surfing, while the itinerary also includes travel, recovery time and a Paradise Valley excursion.",
      },
  
      {
        question: "Are the surf spots fixed before the trip?",
  
        answer:
          "No. Surf conditions can change, so the daily spot is selected according to your level, swell, tide and local conditions. This keeps the surf program more flexible.",
      },
  
      {
        question: "Is surf equipment included?",
  
        answer:
          "A surfboard and wetsuit can be included during scheduled surf sessions. If you need specific equipment or prefer to bring your own board, this can be discussed before arrival.",
      },
  
      {
        question: "Where will we stay during the surf trip?",
  
        answer:
          "The itinerary includes accommodation around Taghazout or Tamraght and two nights in Imsouane. The exact property depends on your budget and preferred accommodation level.",
      },
  
      {
        question: "Does the package include Taghazout and Tamraght?",
  
        answer:
          "Yes. The main part of the trip is based around the Taghazout and Tamraght area, with surf sessions selected along the surrounding Atlantic coast according to conditions.",
      },
  
      {
        question: "Does the surf package include Imsouane?",
  
        answer:
          "Yes. The itinerary includes two nights in Imsouane, giving you more time to surf and enjoy the village instead of visiting only for a few hours.",
      },
  
      {
        question: "Is Paradise Valley included?",
  
        answer:
          "Yes. Day four is planned as a recovery and nature day with a trip to Paradise Valley before the surf journey continues to Imsouane.",
      },
  
      {
        question: "Can I book a private surf package?",
  
        answer:
          "Yes. The trip can be organized privately for couples, friends, families or small groups, with transport and activities adapted to your travel plans.",
      },
  
      {
        question: "Can a non-surfer travel with me?",
  
        answer:
          "Yes. Non-surfing companions can join the trip. Their program can include accommodation, beach time, Paradise Valley and optional activities while you attend surf sessions.",
      },
  
      {
        question: "Can you arrange yoga during the surf holiday?",
  
        answer:
          "Yes. Yoga can be added when available and can work well as a recovery activity between surf sessions. It should be requested when arranging your package.",
      },
  
      {
        question: "Can you arrange a hammam or massage?",
  
        answer:
          "Yes. Hammam and massage experiences can be added as optional activities depending on availability and where you are staying.",
      },
  
      {
        question: "Is airport transfer included?",
  
        answer:
          "Pickup and drop-off from Agadir Al Massira Airport can be included in your package. Share your flight details when booking so the transfer can be arranged.",
      },
  
      {
        question: "Can you arrange accommodation only or transport only?",
  
        answer:
          "Yes. The package can be customized. If you already have accommodation or only need transport, surf lessons, guiding or selected activities, request a personalized quote.",
      },
  
      {
        question: "Can the Morocco surf trip be customized?",
  
        answer:
          "Yes. The itinerary can be adjusted according to your surf level, travel dates, accommodation preference, group size and the activities you want to include.",
      },
  
      {
        question: "Is this surf holiday suitable for couples?",
  
        answer:
          "Yes. Couples can travel together even if they have different surf levels or if only one person wants to surf. The program can be adapted for both travelers.",
      },
  
      {
        question: "What should I bring for the surf camp?",
  
        answer:
          "Bring comfortable beach clothing, swimwear, sun protection, a reusable water bottle and something warm for cooler mornings or evenings. Surf equipment can be provided when included in your package.",
      },
  
      {
        question: "What happens if surf conditions are not suitable?",
  
        answer:
          "The program stays flexible. The team can change the surf spot, adjust the session time or adapt the day's activities according to local conditions and safety.",
      },
    ],
  
    // ─────────────────────────────
    // SEO
    // ─────────────────────────────
  
    seo: {
      title:
        "8-Day Taghazout Surf Camp Package | Moroccan Trip",
  
      description:
        "Book an 8-day Taghazout surf camp package with accommodation, surf lessons or guiding, surf transport, Tamraght, Imsouane and Paradise Valley.",
  
      // Internal SEO keyword map only.
      // Do not output these as a meta keywords tag.
      //
      // Main Semrush opportunity:
      // "taghazout surf camp" = Volume 260 / KD 20 / Transactional
      //
      // Other useful terms discovered in the surf keyword research
      // are used naturally across the page where relevant.
      keywords: [
        "taghazout surf camp",
        "surf camp taghazout",
        "morocco surf camp",
        "surf camp morocco",
        "morocco surf camp taghazout",
        "surf lessons morocco",
        "surf holidays morocco",
        "surf trip morocco",
        "surf retreat morocco",
        "surfing taghazout",
      ],
    },
  
    // ─────────────────────────────
    // BOOKING
    // ─────────────────────────────
  
    booking: {
      available: true,
      minimumDays: 8,
      customizable: true,
      contactLabel: "Request a Quote",
    },
  },
];



export function getTourSlugs(): string[] {
  return tours.map((tour) => tour.slug);
}