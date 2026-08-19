export type DayTrip = {
    id: string;
  
    slug: string;
    title: string;
    shortDescription: string;
    image: string;
  
    badge?: string;
    featured?: boolean;
    category: string;
  
    duration: string;
    tourType: string;
    groupSize: string;
    languages: string[];
  
    departure: string;
    returnTo: string;
  
    locations: string[];
  
    highlights: string[];
  
    overview: string;
  
    itinerary: {
      title: string;
      description: string;
    }[];
  
    included: string[];
    excluded: string[];
  
    gallery: string[];
  
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
  
  export const dayTrips: DayTrip[] = [
    {
      id: "1",
    
      slug: "ourika-valley-day-trip-from-marrakech",
    
      title: "Ourika Valley Day Trip from Marrakech | Atlas Mountains Escape",
    
      shortDescription:
        "Discover the beauty of the Ourika Valley on a private day trip from Marrakech. Travel through the Atlas Mountains, visit Berber villages, enjoy riverside landscapes and explore the famous Setti Fatma area.",
    
      image: "/images/day-trips/ourika-valley-day-trip-from-marrakech.jpg",
    
      badge: "Popular Day Trip",
    
      featured: true,
    
      category: "Atlas Mountains Day Trips",
    
      duration: "Full Day",
    
      tourType: "Private Day Trip",
    
      groupSize: "Up to 4 People",
    
      languages: ["English", "French"],
    
      departure: "Marrakech",
    
      returnTo: "Marrakech",
    
      locations: [
        "Marrakech",
        "Atlas Mountains",
        "Ourika Valley",
        "Berber Villages",
        "Ourika River",
        "Setti Fatma",
        "Marrakech",
      ],
    
    
      highlights: [
        "Enjoy a private day trip from Marrakech to the beautiful Ourika Valley",
        "Travel through the scenic landscapes of the Atlas Mountains",
        "Discover traditional Berber villages along the mountain roads",
        "Visit the peaceful Ourika River and surrounding green valleys",
        "Explore the Setti Fatma area, one of the valley's most famous destinations",
        "Enjoy flexible stops for photos and local experiences",
        "Relax away from the busy streets of Marrakech",
        "Travel with a private driver at your own pace",
      ],
    
    
      overview: `
        Discover the natural beauty of Morocco with an Ourika Valley day trip from Marrakech, one of the most popular escapes from the city.
    
        Located in the foothills of the Atlas Mountains, the Ourika Valley offers a refreshing change of scenery with green landscapes, flowing rivers and traditional mountain villages. This private day trip allows you to experience the peaceful side of Morocco while staying close to Marrakech.
    
        During the journey, you will leave the city behind and travel through beautiful mountain roads surrounded by impressive views. Along the way, you can stop to enjoy panoramic landscapes, take photos and discover the lifestyle of local Berber communities.
    
        The trip continues toward Setti Fatma, a charming village known for its riverside atmosphere and mountain scenery. You will have free time to explore the area, relax near the river or enjoy a local lunch with views of the valley.
    
        This private Marrakech to Ourika Valley day trip is ideal for travelers who want to experience the Atlas Mountains, local culture and authentic Moroccan landscapes in one relaxing day.
      `,
    
    
      itinerary: [
        {
          title: "Departure from Marrakech towards the Atlas Mountains",
    
          description: `
            Your private Ourika Valley day trip begins with pickup from your accommodation in Marrakech.
    
            Leave the city and drive toward the Atlas Mountains, where the landscape gradually changes from urban areas to mountain roads, green valleys and traditional villages.
    
            Along the route, your driver can make stops for photos and to enjoy the beautiful scenery.
          `,
        },
    
        {
          title: "Discover the Ourika Valley and Berber villages",
    
          description: `
            Continue your journey through the Ourika Valley, one of the most beautiful natural areas near Marrakech.
    
            You will pass through traditional Berber villages built along the mountain slopes and see how local communities live in this peaceful region.
    
            Enjoy views of the Ourika River, surrounding mountains and the green landscapes that make this valley special.
          `,
        },
    
        {
          title: "Explore Setti Fatma and enjoy free time",
    
          description: `
            Arrive at Setti Fatma, a famous village located at the end of the Ourika Valley.
    
            Take time to explore the area, walk near the river, relax in a local restaurant or enjoy the mountain atmosphere.
    
            Travelers who wish to explore more can discuss optional activities with their driver.
          `,
        },
    
        {
          title: "Return to Marrakech",
    
          description: `
            After enjoying the peaceful atmosphere of the Atlas Mountains, begin the drive back to Marrakech.
    
            Enjoy the final views of the valley and mountain landscapes before arriving back in the city in the late afternoon.
          `,
        },
      ],
    
    
      included: [
        "Private transportation from Marrakech",
        "Professional English- or French-speaking driver",
        "Pickup and drop-off at your accommodation",
        "Flexible stops during the journey",
        "Free time to explore the Ourika Valley",
      ],
    
    
      excluded: [
        "Lunch and drinks",
        "Local mountain guide",
        "Entrance fees if required",
        "Optional activities",
        "Personal expenses",
        "Tips",
      ],
    
    
      gallery: [
        "/images/day-trips/ourika-valley-day-trip-from-marrakech.jpg",
      ],
    
    
      faqs: [
        {
          question: "How far is Ourika Valley from Marrakech?",
    
          answer:
            "Ourika Valley is located about 60 kilometers from Marrakech and can usually be reached in around 1.5 hours depending on traffic and stops.",
        },
    
        {
          question: "Is the Ourika Valley day trip private?",
    
          answer:
            "Yes. This is a private day trip with your own transportation, allowing you to enjoy flexible stops and travel at your own pace.",
        },
    
        {
          question: "What can I see during the Ourika Valley trip?",
    
          answer:
            "The trip includes Atlas Mountain landscapes, Berber villages, the Ourika River, scenic viewpoints and the Setti Fatma area.",
        },
    
        {
          question: "Can I visit Setti Fatma during this day trip?",
    
          answer:
            "Yes. Setti Fatma is one of the main stops of the Ourika Valley day trip and offers beautiful mountain scenery and a relaxing riverside atmosphere.",
        },
    
        {
          question: "Is lunch included in the Ourika Valley tour?",
    
          answer:
            "Lunch is not included, but you can choose a local restaurant in the valley and enjoy traditional Moroccan food with mountain views.",
        },
    
        {
          question: "Can this Marrakech to Ourika Valley trip be customized?",
    
          answer:
            "Yes. Because this is a private experience, the timing and stops can be adapted according to your interests and travel plans.",
        },
      ],
    
    
      seo: {
        title:
          "Ourika Valley Day Trip from Marrakech | Atlas Mountains Experience",
    
        description:
          "Book a private Ourika Valley day trip from Marrakech and explore the Atlas Mountains, Berber villages, Ourika River and Setti Fatma with a flexible private driver.",
    
        keywords: [
          "ourika valley day trip from marrakech",
          "ourika valley day trip",
          "marrakech to ourika valley",
          "ourika valley tour from marrakech",
          "private ourika valley tour",
          "marrakech ourika valley",
          "atlas mountains day trip from marrakech",
        ],
      },
    
    
      booking: {
        available: true,
        customizable: true,
        contactLabel: "Request a Quote",
      },
    },
    {
  id: "2",

  slug: "imlil-day-trip-from-marrakech",

  title: "Imlil Day Trip from Marrakech | Atlas Mountains & Berber Village Experience",

  shortDescription:
    "Explore the High Atlas Mountains on a private Imlil day trip from Marrakech. Discover a traditional mountain village, Berber culture, scenic valleys and the landscapes surrounding the Toubkal region.",

  image: "/images/day-trips/imlil-day-trip-from-marrakech.jpg",

  badge: "Mountain Experience",

  featured: true,

  category: "Atlas Mountains Day Trips",


  duration: "Full Day",

  tourType: "Private Day Trip",

  groupSize: "Up to 4 People",

  languages: ["English", "French"],


  departure: "Marrakech",

  returnTo: "Marrakech",


  locations: [
    "Marrakech",
    "High Atlas Mountains",
    "Imlil Village",
    "Ait Mizane Valley",
    "Toubkal Region",
    "Marrakech",
  ],


  highlights: [
    "Enjoy a private Imlil day trip from Marrakech to the High Atlas Mountains",
    "Discover Imlil village, a traditional mountain community near Mount Toubkal",
    "Experience the landscapes of the Ait Mizane Valley",
    "Learn about Berber culture and mountain village life",
    "Enjoy panoramic views of valleys and surrounding peaks",
    "Walk through the peaceful atmosphere of a High Atlas village",
    "Travel at your own pace with flexible private transportation",
    "Escape the busy streets of Marrakech for a day in nature",
  ],


  overview: `
    Experience the beauty of Morocco's High Atlas Mountains with an Imlil day trip from Marrakech, taking you to one of the country's most famous mountain villages.

    Located in the heart of the Atlas Mountains, Imlil is known as the gateway to the Toubkal region and offers a completely different atmosphere from Marrakech. The village is surrounded by dramatic mountain scenery, traditional homes and peaceful valleys where local Berber communities continue their daily way of life.

    During this private day trip, you will travel from Marrakech through changing landscapes before reaching the mountain roads of the High Atlas. Along the way, you will have opportunities to enjoy viewpoints, take photos and discover the natural beauty of the region.

    In Imlil village, you can explore the surroundings, experience the atmosphere of a traditional mountain community and enjoy views of the Ait Mizane Valley. The trip offers a relaxed way to discover the culture and landscapes of the Toubkal area without needing a multi-day adventure.

    This Marrakech to Imlil day trip is ideal for travelers looking for mountains, authentic villages and a closer connection with local Moroccan life.
  `,


  itinerary: [
    {
      title: "Morning departure from Marrakech",

      description: `
        Your private Imlil day trip begins with pickup from your accommodation in Marrakech.

        Leave the city behind and travel toward the High Atlas Mountains. As the journey continues, the scenery changes from the plains around Marrakech to mountain landscapes, valleys and traditional villages.

        Your driver can make stops along the way so you can enjoy the views and capture photos of the changing landscape.
      `,
    },

    {
      title: "Journey through the High Atlas Mountains",

      description: `
        Continue toward the Imlil region, passing through mountain roads and local villages that show a different side of Morocco.

        The route offers beautiful views of the surrounding peaks and valleys, with opportunities to observe traditional mountain architecture and rural life.

        The peaceful atmosphere of the Atlas Mountains makes this journey a memorable contrast to the energy of Marrakech.
      `,
    },

    {
      title: "Discover Imlil Village and the Toubkal region",

      description: `
        Arrive in Imlil, a charming mountain village located in the Ait Mizane Valley.

        Take time to explore the area, walk through the village surroundings and enjoy views of the mountains that make this region famous.

        You can discover the local atmosphere, learn about Berber traditions and enjoy a relaxing moment surrounded by High Atlas landscapes.
      `,
    },

    {
      title: "Return to Marrakech",

      description: `
        After exploring Imlil and the surrounding mountain scenery, begin the journey back to Marrakech.

        Enjoy the final views of the Atlas Mountains before returning to the city in the afternoon or early evening.
      `,
    },
  ],


  included: [
    "Private transportation from Marrakech",
    "Professional English- or French-speaking driver",
    "Pickup and drop-off in Marrakech",
    "Flexible stops during the journey",
    "Free time to explore Imlil village",
  ],


  excluded: [
    "Lunch",
    "Drinks",
    "Local mountain guide unless requested",
    "Optional activities",
    "Personal expenses",
    "Tips and gratuities",
  ],


  gallery: [
    "/images/day-trips/imlil-day-trip-from-marrakech.jpg",
  ],


  faqs: [
    {
      question: "Is the Imlil day trip from Marrakech private?",

      answer:
        "Yes. This is a private day trip with your own transportation, allowing you to enjoy flexible stops and explore the mountains at your own pace.",
    },

    {
      question: "What makes Imlil different from other Atlas Mountain destinations?",

      answer:
        "Imlil is a traditional mountain village known as the gateway to the Toubkal region, offering a closer look at Berber culture and High Atlas village life.",
    },

    {
      question: "How long does it take to reach Imlil from Marrakech?",

      answer:
        "The journey usually takes around 1.5 to 2 hours depending on traffic, road conditions and the stops you make along the way.",
    },

    {
      question: "Can I visit the Toubkal region during this day trip?",

      answer:
        "Yes. Imlil is located in the Toubkal region, and the trip allows you to experience the mountain landscapes surrounding this famous area.",
    },

    {
      question: "Is hiking included in the Imlil day trip?",

      answer:
        "The trip is designed as a flexible mountain experience. Short walks can be enjoyed in the area, while longer hikes or mountain activities can be arranged separately if requested.",
    },

    {
      question: "Can this trip be customized?",

      answer:
        "Yes. Because this is a private experience, timing, stops and activities can be adjusted according to your interests.",
    },
  ],


  seo: {
    title:
      "Imlil Day Trip from Marrakech | Atlas Mountains & Berber Village Experience",

    description:
      "Discover the High Atlas Mountains on a private Imlil day trip from Marrakech. Visit Imlil village, explore Berber culture and enjoy the landscapes of the Toubkal region.",

    keywords: [
      "imlil day trip from marrakech",
      "imlil valley day trip",
      "imlil village morocco",
      "imlil morocco",
      "atlas mountains imlil",
      "marrakech to imlil",
      "private imlil day trip",
    ],
  },


  booking: {
    available: true,
    customizable: true,
    contactLabel: "Request a Quote",
  },
},
{
  id: "3",

  slug: "ouzoud-waterfalls-day-trip-from-marrakech",

  title: "Ouzoud Waterfalls Day Trip from Marrakech | Private Nature Escape",

  shortDescription:
    "Enjoy a private day trip to Ouzoud Waterfalls from Marrakech and discover Morocco's famous cascades, natural landscapes, scenic viewpoints and the peaceful countryside surrounding one of the country's most beautiful waterfalls.",

  image: "/images/day-trips/ouzoud-waterfalls-day-trip-from-marrakech.jpg",

  badge: "Nature Escape",

  featured: true,

  category: "Waterfalls & Nature Day Trips",


  duration: "Full Day",

  tourType: "Private Day Trip",

  groupSize: "Up to 4 People",

  languages: ["English", "French"],


  departure: "Marrakech",

  returnTo: "Marrakech",


  locations: [
    "Marrakech",
    "Moroccan Countryside",
    "Ouzoud Village",
    "Ouzoud Waterfalls",
    "Waterfall Viewpoints",
    "Marrakech",
  ],


  highlights: [
    "Enjoy a private day trip to Ouzoud Waterfalls from Marrakech",
    "Discover one of Morocco's most famous natural attractions",
    "Admire the impressive Ouzoud cascades and surrounding landscapes",
    "Walk around the waterfall viewpoints and enjoy the scenery",
    "Experience the peaceful atmosphere of the Moroccan countryside",
    "Enjoy flexible stops during the journey from Marrakech",
    "Relax near the waterfalls and take memorable photos",
    "Travel comfortably with a private driver",
  ],


  overview: `
    Discover one of Morocco's most spectacular natural sights with a private day trip to Ouzoud Waterfalls from Marrakech.

    Located in the Moroccan countryside, the Ouzoud Waterfalls offer a refreshing escape from the busy streets of Marrakech. The journey takes you through changing landscapes, rural areas and scenic roads before reaching the impressive cascades surrounded by natural beauty.

    During this private excursion, you will have time to explore the waterfall area, enjoy different viewpoints and experience the peaceful atmosphere of one of Morocco's most famous natural destinations.

    The Ouzoud cascades are known for their impressive height, flowing water and beautiful surroundings. Visitors can walk along the paths near the falls, relax in the area and enjoy the landscape at their own pace.

    This Marrakech to Ouzoud Waterfalls day trip is a perfect choice for travelers looking for a nature experience, beautiful scenery and a relaxing full-day escape outside the city.
  `,


  itinerary: [
    {
      title: "Departure from Marrakech",

      description: `
        Your private Ouzoud Waterfalls day trip begins with pickup from your accommodation in Marrakech.

        Leave the city behind and travel toward the Moroccan countryside, where the scenery gradually changes into open landscapes, villages and rural areas.

        Along the way, your driver can make stops so you can enjoy the views and take photos of the journey.
      `,
    },

    {
      title: "Arrival at Ouzoud Waterfalls",

      description: `
        Arrive at Ouzoud Waterfalls, one of Morocco's most impressive natural attractions.

        Take time to explore the area, walk along the paths surrounding the cascades and enjoy the different viewpoints overlooking the waterfalls.

        The peaceful sound of the flowing water and the surrounding landscape create a relaxing atmosphere away from the city.
      `,
    },

    {
      title: "Explore the waterfall surroundings",

      description: `
        Continue discovering the Ouzoud area at your own pace.

        Enjoy the natural scenery, capture photos and relax near the waterfalls. You can also take time to enjoy a local meal or simply appreciate the atmosphere of this beautiful location.

        Because this is a private day trip, the experience can be adapted according to your preferred pace.
      `,
    },

    {
      title: "Return to Marrakech",

      description: `
        After enjoying Ouzoud Waterfalls, begin the journey back to Marrakech.

        Relax during the return drive and enjoy the final views of the Moroccan countryside before arriving back in the city in the evening.
      `,
    },
  ],


  included: [
    "Private transportation from Marrakech",
    "Professional English- or French-speaking driver",
    "Pickup and drop-off at your accommodation",
    "Flexible stops during the journey",
    "Free time to explore Ouzoud Waterfalls",
  ],


  excluded: [
    "Lunch and drinks",
    "Local guide",
    "Boat ride if chosen",
    "Personal expenses",
    "Tips and gratuities",
  ],


  gallery: [
    "/images/day-trips/ouzoud-waterfalls-day-trip-from-marrakech.jpg",
  ],


  faqs: [
    {
      question: "How far are Ouzoud Waterfalls from Marrakech?",

      answer:
        "Ouzoud Waterfalls are located outside Marrakech and the journey usually takes around 2.5 to 3 hours depending on traffic and road conditions.",
    },

    {
      question: "Is the Ouzoud Waterfalls day trip private?",

      answer:
        "Yes. This is a private day trip with your own transportation, allowing you to enjoy flexible stops and explore the waterfalls at your own pace.",
    },

    {
      question: "What can I do at Ouzoud Waterfalls?",

      answer:
        "You can walk around the waterfall viewpoints, enjoy the natural scenery, take photos and relax in the peaceful surroundings.",
    },

    {
      question: "Is lunch included during the Ouzoud trip?",

      answer:
        "Lunch is not included, but you can choose from local restaurants around the waterfall area during your free time.",
    },

    {
      question: "Can I customize this Marrakech to Ouzoud Waterfalls trip?",

      answer:
        "Yes. Since this is a private experience, the timing and stops can be adjusted according to your preferences.",
    },

    {
      question: "Is Ouzoud Waterfalls suitable for families?",

      answer:
        "Yes. Ouzoud Waterfalls is a popular destination for families and travelers who want to enjoy nature and spend a relaxing day outside Marrakech.",
    },
  ],


  seo: {
    title:
      "Ouzoud Waterfalls Day Trip from Marrakech | Private Nature Escape",

    description:
      "Enjoy a private day trip to Ouzoud Waterfalls from Marrakech and discover Morocco's famous cascades, scenic viewpoints and beautiful countryside with a flexible private driver.",

    keywords: [
      "day trip to ouzoud waterfalls from marrakech",
      "ouzoud waterfalls day trip from marrakech",
      "ouzoud waterfalls tour",
      "marrakech to ouzoud waterfalls",
      "ouzoud waterfalls morocco",
      "ouzoud cascades",
      "private ouzoud waterfalls trip",
    ],
  },


  booking: {
    available: true,
    customizable: true,
    contactLabel: "Request a Quote",
  },
},
{
  id: "4",

  slug: "agafay-desert-day-trip-from-marrakech",

  title: "Agafay Desert Day Trip from Marrakech | Sunset & Desert Experience",

  shortDescription:
    "Discover the Agafay Desert on a private day trip from Marrakech. Enjoy rocky desert landscapes, peaceful surroundings, sunset views and a unique desert experience just outside the city.",

  image: "/images/day-trips/agafay-desert-day-trip-from-marrakech.jpg",

  badge: "Desert Experience",

  featured: true,

  category: "Desert Day Trips",


  duration: "Full Day",

  tourType: "Private Day Trip",

  groupSize: "Up to 4 People",

  languages: ["English", "French"],


  departure: "Marrakech",

  returnTo: "Marrakech",


  locations: [
    "Marrakech",
    "Agafay Desert",
    "Rocky Desert Landscapes",
    "Desert Camp Area",
    "Marrakech",
  ],


  highlights: [
    "Enjoy a private Agafay Desert day trip from Marrakech",
    "Discover the unique rocky landscapes of the Agafay Desert",
    "Experience a peaceful desert atmosphere close to the city",
    "Enjoy beautiful views during the afternoon and sunset",
    "Take memorable photos in the desert surroundings",
    "Relax away from the busy streets of Marrakech",
    "Experience a different side of Morocco's natural landscapes",
    "Travel comfortably with a private driver",
  ],


  overview: `
    Experience a different side of Morocco with an Agafay Desert day trip from Marrakech, taking you to a unique desert landscape just outside the city.

    Unlike the traditional Sahara dunes, the Agafay Desert is known for its rocky terrain, open spaces and peaceful atmosphere. Its location near Marrakech makes it a perfect choice for travelers who want to enjoy a desert experience without a long journey.

    During this private day trip, you will leave Marrakech behind and travel toward the Agafay region, where the landscape changes into wide desert views and dramatic rocky scenery.

    The experience allows you to relax in the desert surroundings, enjoy the quiet atmosphere and appreciate the beauty of this unique landscape. Depending on your plans, you can enjoy time for photos, sunset views or a relaxing desert stop.

    This private Agafay Desert day trip from Marrakech is ideal for travelers looking for a memorable nature escape, beautiful landscapes and a special desert experience close to the city.
  `,


  itinerary: [
    {
      title: "Departure from Marrakech",

      description: `
        Your private Agafay Desert day trip begins with pickup from your accommodation in Marrakech.

        Leave the city behind and travel toward the Agafay region, where the urban landscape gradually changes into open countryside and rocky desert scenery.

        Enjoy the journey and the changing views as you approach this unique destination near Marrakech.
      `,
    },

    {
      title: "Discover the Agafay Desert landscape",

      description: `
        Arrive in the Agafay Desert and explore its peaceful surroundings.

        Walk around the area, enjoy the wide-open views and discover the rocky landscape that makes Agafay different from other desert destinations in Morocco.

        The quiet atmosphere and natural scenery create a relaxing escape away from the city.
      `,
    },

    {
      title: "Enjoy the desert atmosphere and sunset views",

      description: `
        Spend time enjoying the beauty of the Agafay landscape.

        Depending on your preferred experience, you can relax, take photos and enjoy the changing colors of the desert as the sun moves across the open horizon.

        The peaceful setting makes Agafay a special place to experience Morocco's desert atmosphere.
      `,
    },

    {
      title: "Return to Marrakech",

      description: `
        After enjoying your time in the Agafay Desert, begin the journey back to Marrakech.

        Relax during the return drive and enjoy the final views of the desert landscape before arriving back in the city.
      `,
    },
  ],


  included: [
    "Private transportation from Marrakech",
    "Professional English- or French-speaking driver",
    "Pickup and drop-off at your accommodation",
    "Flexible stops during the journey",
    "Free time to enjoy the Agafay Desert",
  ],


  excluded: [
    "Meals and drinks",
    "Camel ride or activities unless selected",
    "Desert camp experiences unless requested",
    "Personal expenses",
    "Tips and gratuities",
  ],


  gallery: [
    "/images/day-trips/agafay-desert-day-trip-from-marrakech.jpg",
  ],


  faqs: [
    {
      question: "How far is the Agafay Desert from Marrakech?",

      answer:
        "The Agafay Desert is located close to Marrakech and can usually be reached in around one hour depending on traffic and your departure location.",
    },

    {
      question: "Is the Agafay Desert day trip private?",

      answer:
        "Yes. This is a private day trip with your own transportation, allowing you to enjoy the experience at your own pace.",
    },

    {
      question: "Is Agafay the Sahara Desert?",

      answer:
        "No. Agafay is a rocky desert area near Marrakech, offering a desert atmosphere with open landscapes and beautiful scenery without traveling to the Sahara dunes.",
    },

    {
      question: "What can I do during an Agafay Desert trip?",

      answer:
        "You can enjoy desert views, take photos, relax in the landscape and add optional activities such as camel rides or desert experiences if requested.",
    },

    {
      question: "Can I visit Agafay Desert for sunset?",

      answer:
        "Yes. Many travelers choose Agafay for its peaceful atmosphere and beautiful sunset views over the rocky desert landscape.",
    },

    {
      question: "Can this Agafay Desert tour be customized?",

      answer:
        "Yes. Because this is a private experience, timing, stops and optional activities can be adapted according to your preferences.",
    },
  ],


  seo: {
    title:
      "Agafay Desert Day Trip from Marrakech | Sunset & Desert Experience",

    description:
      "Enjoy a private Agafay Desert day trip from Marrakech and discover rocky desert landscapes, sunset views and a unique desert experience near the city.",

    keywords: [
      "agafay desert day trip from marrakech",
      "agafay desert day trip",
      "agafay desert tour",
      "agafay desert marrakech",
      "agafay desert camp",
      "agafay desert experience",
      "desert near marrakech",
    ],
  },


  booking: {
    available: true,
    customizable: true,
    contactLabel: "Request a Quote",
  },
}

  ];