import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://moroccan-trip.com";


export const metadata: Metadata = {

  title: {
    absolute:
      "Morocco Custom Tours | Tailor Made Travel Experiences",
  },

  description:
    "Create your Morocco custom tour with a personalized itinerary designed around your interests, travel style and travel dates. Discover Morocco with a flexible travel experience.",

  alternates: {
    canonical: `${SITE_URL}/custom-tour`,
  },


  openGraph: {

    title:
      "Morocco Custom Tours | Tailor Made Travel Experiences",

    description:
      "Design your own Morocco journey with a personalized itinerary created around your interests and travel style.",

    url:
      `${SITE_URL}/custom-tour`,

    siteName:
      "Moroccan Trip",

    type:
      "website",

    locale:
      "en_US",

    images:[
      {
        url:
          `${SITE_URL}/image/custom-tour.jpg`,
        alt:
          "Custom Morocco Tour Experience",
      },
    ],

  },


  robots:{
    index:true,
    follow:true,
  },

};




const breadcrumbJsonLd = {

  "@context":
    "https://schema.org",

  "@type":
    "BreadcrumbList",

  itemListElement:[

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
        "Custom Tour",

      item:
        `${SITE_URL}/custom-tour`,

    },

  ],

};





export default function CustomTourPage(){

return (

<main className="min-h-screen bg-[hsl(var(--background))]">


<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html:
JSON.stringify(breadcrumbJsonLd),
}}
/>




{/* HERO */}


<section className="relative overflow-hidden">


<div className="relative min-h-[620px]">


<Image

src="/images/custom-tour.webp"

alt="Custom Morocco Tour Experience"

fill

priority

sizes="100vw"

className="object-cover"

/>



<div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20"/>




<div className="relative mx-auto flex min-h-[620px] max-w-7xl flex-col justify-end px-5 pb-20 sm:px-8 lg:px-10">


<div className="max-w-4xl">


<p className="text-xs font-bold uppercase tracking-[0.22em] text-[hsl(var(--primary))]">

Create Your Own Morocco Experience

</p>




<h1 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">

Morocco Custom Tours Designed Around You

</h1>




<p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">


Create a personalized Morocco itinerary based on your interests,
travel style and schedule. From private journeys to shared group
experiences, Moroccan Trip helps you discover Morocco your way.


</p>




<div className="mt-8 flex flex-wrap gap-4">


<Link

href="/contact"

className="
rounded-full
bg-[hsl(var(--primary))]
px-8
py-4
text-sm
font-bold
text-white
"

>

Request Your Custom Tour

</Link>




<a

href="#experience"

className="
rounded-full
border
border-white/30
bg-white/10
px-8
py-4
text-sm
font-semibold
text-white
"

>

Explore Options

</a>



</div>


</div>


</div>


</div>


</section>





{/* INTRO */}



<section
id="experience"
className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10"
>


<div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr]">


<div>


<p className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--primary))]">

Tailor Made Morocco Travel

</p>




<h2 className="mt-4 text-4xl font-semibold text-[hsl(var(--heading))]">

A Morocco Journey Created For Your Travel Style

</h2>




<p className="mt-6 leading-8 text-[hsl(var(--text-secondary))]">


Every traveler has a different vision of Morocco. Some want
desert adventures, others prefer cultural discoveries, coastal
towns or relaxing experiences.


</p>




<p className="mt-5 leading-8 text-[hsl(var(--text-secondary))]">


Our Morocco custom tours allow you to choose your destinations,
activities and travel pace. We create a flexible itinerary that
matches your expectations.


</p>




<p className="mt-5 leading-8 text-[hsl(var(--text-secondary))]">


Whether you are planning a couple trip, family holiday, private
adventure or group journey, we can organize a personalized
Morocco experience from start to finish.


</p>


</div>





<aside className="rounded-[30px] bg-[hsl(var(--secondary))] p-8 text-white">


<p className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--primary))]">

Why Choose A Custom Tour

</p>



<h3 className="mt-4 text-3xl font-semibold">

Travel Morocco Your Way

</h3>



<ul className="mt-6 space-y-4 text-white/80">


<li>
✓ Flexible travel dates
</li>


<li>
✓ Personalized itinerary
</li>


<li>
✓ Private guide and driver options
</li>


<li>
✓ Shared group experiences available
</li>


</ul>


</aside>



</div>


</section>
{/* TOUR OPTIONS */}


<section className="bg-[hsl(var(--surface-soft))]">


<div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">


<div className="max-w-3xl">


<p className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--primary))]">

Our Experiences

</p>



<h2 className="mt-4 text-4xl font-semibold text-[hsl(var(--heading))]">

What Kind Of Morocco Trip Can We Create?

</h2>


</div>





<div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">


{[

{
title:"Desert Adventures",
text:"Explore the Sahara Desert, experience local culture and discover Morocco's most famous landscapes with a journey designed around your time."
},

{
title:"Cultural Journeys",
text:"Discover imperial cities, traditional markets, historical sites and authentic Moroccan experiences away from standard routes."
},

{
title:"Family & Private Trips",
text:"Enjoy a comfortable Morocco holiday with an itinerary created for families, couples or private groups."
},

{
title:"Atlas Mountains Experiences",
text:"Combine nature, villages and mountain landscapes with a flexible route adapted to your interests."
},

{
title:"Coastal Morocco Trips",
text:"Discover Morocco's Atlantic coastline, charming towns and relaxing seaside experiences."
},

{
title:"Shared Group Experiences",
text:"Join a small group Morocco experience and enjoy a social journey with other travelers while keeping comfort and quality."
},

].map((item)=>(


<div

key={item.title}

className="
rounded-[28px]
border
border-[hsl(var(--border))]
bg-[hsl(var(--card))]
p-7
"

>


<h3 className="text-2xl font-semibold text-[hsl(var(--heading))]">

{item.title}

</h3>



<p className="mt-4 leading-7 text-[hsl(var(--text-secondary))]">

{item.text}

</p>



</div>


))}


</div>


</div>


</section>







{/* PRIVATE VS GROUP */}



<section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">


<div className="grid gap-8 md:grid-cols-2">



<div className="rounded-[30px] border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-8">


<p className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--primary))]">

Private Morocco Tours

</p>



<h2 className="mt-4 text-3xl font-semibold text-[hsl(var(--heading))]">

Your Own Route, Your Own Pace

</h2>



<p className="mt-5 leading-8 text-[hsl(var(--text-secondary))]">


Choose your destinations, activities and travel rhythm.
Our team creates a private Morocco experience with flexible
planning and personalized service.


</p>


</div>





<div className="rounded-[30px] border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-8">


<p className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--primary))]">

Small Group Travel

</p>



<h2 className="mt-4 text-3xl font-semibold text-[hsl(var(--heading))]">

Comfortable Shared Experiences

</h2>



<p className="mt-5 leading-8 text-[hsl(var(--text-secondary))]">


For travelers who prefer meeting new people and sharing
the experience, we can arrange small group Morocco tours
with carefully planned routes.


</p>


</div>



</div>


</section>







{/* HOW IT WORKS */}



<section className="bg-[hsl(var(--surface-soft))]">


<div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">


<h2 className="text-4xl font-semibold text-[hsl(var(--heading))]">

How Your Custom Morocco Tour Works

</h2>




<div className="mt-10 grid gap-6 md:grid-cols-3">


{[

{
number:"01",
title:"Share Your Ideas",
text:"Tell us your preferred destinations, dates, interests and travel style."
},

{
number:"02",
title:"We Create Your Plan",
text:"Our local team designs a personalized itinerary based on your wishes."
},

{
number:"03",
title:"Enjoy Morocco",
text:"Travel with confidence and discover Morocco with a journey created for you."
}

].map((step)=>(


<div

key={step.number}

className="
rounded-[28px]
bg-[hsl(var(--card))]
p-8
border
border-[hsl(var(--border))]
"

>


<p className="text-sm font-bold text-[hsl(var(--primary))]">

{step.number}

</p>



<h3 className="mt-4 text-2xl font-semibold text-[hsl(var(--heading))]">

{step.title}

</h3>



<p className="mt-4 leading-7 text-[hsl(var(--text-secondary))]">

{step.text}

</p>



</div>


))}



</div>


</div>


</section>








{/* FAQ */}



<section className="mx-auto max-w-5xl px-5 py-20 sm:px-8">


<h2 className="text-center text-4xl font-semibold text-[hsl(var(--heading))]">

Frequently Asked Questions

</h2>




<div className="mt-10 space-y-6">


{[

{
q:"Can you create a Morocco itinerary based on our interests?",
a:"Yes. We design personalized Morocco itineraries according to your preferred destinations, activities, travel dates and budget."
},

{
q:"Do you arrange private and shared group tours?",
a:"Yes. Moroccan Trip can organize private journeys as well as shared group experiences depending on your preferences."
},

{
q:"Can we combine desert, cities and coastal destinations?",
a:"Yes. We can create a balanced Morocco journey combining different regions and experiences."
}

].map((faq)=>(


<div

key={faq.q}

className="border-b border-[hsl(var(--border))] pb-6"

>


<h3 className="text-xl font-semibold text-[hsl(var(--heading))]">

{faq.q}

</h3>



<p className="mt-3 leading-7 text-[hsl(var(--text-secondary))]">

{faq.a}

</p>



</div>


))}



</div>


</section>








{/* CTA */}



<section className="bg-[hsl(var(--secondary))]">


<div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">



<h2 className="text-4xl font-semibold text-white">

Ready To Create Your Morocco Journey?

</h2>




<p className="mt-5 max-w-2xl leading-8 text-white/70">


Tell us what you want to experience in Morocco.
Our team will help you design a personalized journey
made around your expectations.


</p>





<Link

href="/contact"

className="
mt-8
inline-flex
rounded-full
bg-[hsl(var(--primary))]
px-8
py-4
text-sm
font-bold
text-white
"

>

Request Your Custom Tour

</Link>




</div>


</section>



</main>

);

}