import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { specialOffers } from "@/data/specialOffers";
import { tours } from "@/data/tours";


type SpecialOfferPageProps = {
  params: Promise<{
    slug: string;
  }>;
};


const SITE_URL = "https://moroccan-trip.com";



export function generateStaticParams() {
  return specialOffers.map((offer) => ({
    slug: offer.slug,
  }));
}




export async function generateMetadata({
  params,
}: SpecialOfferPageProps): Promise<Metadata> {

  const { slug } = await params;


  const offer = specialOffers.find(
    (item) => item.slug === slug
  );


  if (!offer) {
    return {
      title: "Offer Not Found | Moroccan Trip",
      robots: {
        index: false,
        follow: false,
      },
    };
  }


  const canonicalUrl =
    `${SITE_URL}/special-offers/${offer.slug}`;


  return {

    title: {
      absolute: offer.seo.title,
    },


    description:
      offer.seo.description,


    alternates:{
      canonical: canonicalUrl,
    },


    openGraph:{
      title: offer.seo.title,
      description: offer.seo.description,
      url: canonicalUrl,
      siteName:"Moroccan Trip",
      type:"website",
      locale:"en_US",
      images:[
        {
          url:`${SITE_URL}${offer.image}`,
          alt:offer.title,
        },
      ],
    },


    robots:{
      index:true,
      follow:true,
    },

  };
}





export default async function SpecialOfferPage({
  params,
}: SpecialOfferPageProps) {


  const { slug } = await params;


  const offer = specialOffers.find(
    (item)=>item.slug === slug
  );


  if(!offer){
    notFound();
  }

  const recommendedTours =
  offer.recommendedTours
    ? tours.filter((tour) =>
        offer.recommendedTours?.includes(tour.slug)
      )
    : [];


  const overviewParagraphs =
    offer.overview
      .trim()
      .split(/\n\s*\n/)
      .filter(Boolean);



  const breadcrumbJsonLd = {

    "@context":"https://schema.org",

    "@type":"BreadcrumbList",

    itemListElement:[

      {
        "@type":"ListItem",
        position:1,
        name:"Home",
        item:SITE_URL,
      },

      {
        "@type":"ListItem",
        position:2,
        name:"Special Offers",
        item:`${SITE_URL}/special-offers`,
      },


      {
        "@type":"ListItem",
        position:3,
        name:offer.title,
        item:`${SITE_URL}/special-offers/${offer.slug}`,
      },

    ],

  };





return (

<main className="min-h-screen bg-[hsl(var(--background))]">


<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html:JSON.stringify(breadcrumbJsonLd),
}}
/>



{/* HERO */}


<section className="relative min-h-[650px] overflow-hidden">


<Image
src={offer.image}
alt={offer.title}
fill
priority
sizes="100vw"
className="object-cover"
/>


<div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20"/>



<div className="relative mx-auto flex min-h-[650px] max-w-7xl flex-col px-5 pb-28 pt-8 sm:px-8 lg:px-10">


<nav className="text-sm text-white/70">

<Link href="/">
Home
</Link>

<span className="mx-2">
/
</span>

<Link href="/special-offers">
Special Offers
</Link>

<span className="mx-2">
/
</span>

<span className="text-white/90">
{offer.title}
</span>

</nav>




<div className="mt-auto max-w-4xl">


<div className="flex flex-wrap gap-3">


{offer.badge && (

<span className="rounded-full bg-[hsl(var(--primary))] px-4 py-2 text-xs font-bold text-white">

{offer.badge}

</span>

)}



<span className="rounded-full bg-white/15 px-4 py-2 text-xs font-semibold text-white backdrop-blur">

{offer.category}

</span>


</div>




<h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">

{offer.title}

</h1>



<p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">

{offer.shortDescription}

</p>




<div className="mt-8 flex flex-wrap gap-4">


<Link
href="/contact"
className="rounded-full bg-[hsl(var(--primary))] px-8 py-4 text-sm font-bold text-white"
>

{offer.booking.contactLabel}

</Link>



<a
href="#overview"
className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white"
>

Explore Offer

</a>


</div>


</div>


</div>


</section>





{/* QUICK INFO */}


<section className="-mt-16 relative z-10">


<div className="mx-auto max-w-6xl px-5">


<div className="grid rounded-[28px] border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 shadow-xl md:grid-cols-3">


<div>
<p className="text-xs uppercase text-[hsl(var(--text-muted))]">
Duration
</p>

<p className="mt-2 font-semibold">
{offer.duration}
</p>
</div>



<div>
<p className="text-xs uppercase text-[hsl(var(--text-muted))]">
Designed For
</p>

<p className="mt-2 font-semibold">
{offer.targetAudience}
</p>
</div>



<div>
<p className="text-xs uppercase text-[hsl(var(--text-muted))]">
Destinations
</p>

<p className="mt-2 font-semibold">
{offer.destinations.length} locations
</p>
</div>



</div>

</div>

</section>





{/* OVERVIEW */}


<section
id="overview"
className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10"
>


<div className="grid gap-12 lg:grid-cols-[1.3fr_.7fr]">


<div>


<p className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--primary))]">

The Experience

</p>


<h2 className="mt-3 text-4xl font-semibold text-[hsl(var(--heading))]">

Discover your Morocco journey

</h2>



<div className="mt-8 space-y-6">

{overviewParagraphs.map((text,index)=>(

<p
key={index}
className="text-[hsl(var(--text-secondary))] leading-8"
>

{text}

</p>

))}

</div>


</div>




<aside className="rounded-[30px] bg-[hsl(var(--secondary))] p-8 text-white">


<p className="text-xs uppercase tracking-widest text-[hsl(var(--primary))]">

Why choose this offer

</p>


<h3 className="mt-3 text-3xl font-semibold">

Highlights

</h3>


<ul className="mt-6 space-y-4">

{offer.highlights.map((item)=>(

<li
key={item}
className="flex gap-3 text-sm text-white/80"
>

<span className="text-[hsl(var(--primary))]">
✓
</span>

{item}

</li>

))}

</ul>


</aside>


</div>

</section>





{/* DESTINATIONS */}


<section className="border-y border-[hsl(var(--border))] bg-[hsl(var(--surface-soft))]">


<div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">


<h2 className="text-3xl font-semibold">

Your Route

</h2>



<div className="mt-6 flex flex-wrap gap-3">


{offer.destinations.map((place)=>(

<span
key={place}
className="rounded-full border bg-[hsl(var(--card))] px-5 py-3 text-sm font-semibold"
>

{place}

</span>

))}


</div>


</div>


</section>



{/* RECOMMENDED TOURS */}

{recommendedTours.length > 0 && (

<section className="bg-[hsl(var(--surface-soft))]">


<div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">


<div className="max-w-3xl">

<p className="text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--primary))]">
Recommended Tours
</p>


<h2 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-[hsl(var(--heading))]">
Choose your desert itinerary
</h2>


<p className="mt-5 leading-8 text-[hsl(var(--text-secondary))]">
Explore our most popular Morocco desert tours and choose the journey that matches your travel time and travel style.
</p>

</div>




<div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3">


{recommendedTours.map((tour)=>(

<article
key={tour.id}
className="
group
overflow-hidden
rounded-[28px]
border
border-[hsl(var(--border))]
bg-[hsl(var(--card))]
shadow-[0_4px_20px_rgba(0,0,0,0.04)]
transition-all
duration-300
hover:-translate-y-1
hover:shadow-xl
"
>


<Link
href={`/tours/${tour.slug}`}
className="relative block aspect-[4/3] overflow-hidden"
>


<Image
src={tour.image}
alt={tour.title}
fill
sizes="(max-width:768px)100vw,(max-width:1280px)50vw,33vw"
className="
object-cover
transition-transform
duration-700
group-hover:scale-105
"
/>



{tour.badge && (

<span className="
absolute
left-5
top-5
rounded-full
bg-white/95
px-3
py-2
text-xs
font-bold
text-[hsl(var(--heading))]
">

{tour.badge}

</span>

)}


</Link>





<div className="p-6">


<p className="text-xs font-bold uppercase tracking-[0.15em] text-[hsl(var(--primary))]">

{tour.category}

</p>




<Link href={`/tours/${tour.slug}`}>

<h3 className="
mt-3
text-2xl
font-semibold
leading-tight
text-[hsl(var(--heading))]
transition-colors
group-hover:text-[hsl(var(--primary))]
">

{tour.title}

</h3>

</Link>





<p className="mt-4 text-sm leading-7 text-[hsl(var(--text-secondary))]">

{tour.shortDescription}

</p>





<div className="
mt-6
flex
items-center
justify-between
border-t
border-[hsl(var(--border))]
pt-5
">


<span className="text-sm font-semibold text-[hsl(var(--heading))]">

{tour.duration}

</span>


<Link
href={`/tours/${tour.slug}`}
className="text-sm font-bold text-[hsl(var(--primary))]"
>

View Tour →

</Link>


</div>


</div>


</article>


))}


</div>


</div>


</section>

)}

{/* ITINERARY */}


<section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10">


<h2 className="text-4xl font-semibold">

How your experience unfolds

</h2>


<div className="mt-10 space-y-8">


{offer.itinerary.map((item,index)=>(

<div
key={item.title}
className="rounded-[28px] border bg-[hsl(var(--card))] p-8"
>


<p className="text-xs font-bold uppercase text-[hsl(var(--primary))]">
Step {index+1}
</p>


<h3 className="mt-3 text-2xl font-semibold">
{item.title}
</h3>


<p className="mt-4 leading-8 text-[hsl(var(--text-secondary))]">
{item.description}
</p>


</div>

))}


</div>


</section>





{/* INCLUDED */}


<section className="bg-[hsl(var(--surface-soft))]">


<div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">


<div className="grid gap-8 md:grid-cols-2">


<div className="rounded-[28px] bg-[hsl(var(--card))] p-8">

<h2 className="text-3xl font-semibold">
Included
</h2>


<ul className="mt-6 space-y-3">

{offer.included.map(item=>(

<li key={item}>
✓ {item}
</li>

))}

</ul>


</div>



<div className="rounded-[28px] bg-[hsl(var(--card))] p-8">

<h2 className="text-3xl font-semibold">
Not Included
</h2>


<ul className="mt-6 space-y-3">

{offer.excluded.map(item=>(

<li key={item}>
× {item}
</li>

))}

</ul>


</div>


</div>


</div>


</section>





{/* FAQ */}


<section className="mx-auto max-w-5xl px-5 py-20 sm:px-8">


<h2 className="text-center text-4xl font-semibold">

Frequently Asked Questions

</h2>


<div className="mt-10 space-y-6">


{offer.faqs.map((faq)=>(

<div
key={faq.question}
className="border-b pb-6"
>


<h3 className="text-xl font-semibold">
{faq.question}
</h3>


<p className="mt-3 text-[hsl(var(--text-secondary))]">
{faq.answer}
</p>


</div>

))}


</div>


</section>





{/* FINAL CTA */}


<section className="bg-[hsl(var(--secondary))]">


<div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">


<h2 className="text-4xl font-semibold text-white">

Ready for this Morocco experience?

</h2>


<p className="mt-5 max-w-2xl text-white/70">

Tell us your dates and preferences. We will help organize the right experience for your trip.

</p>


<Link
href="/contact"
className="mt-8 inline-flex rounded-full bg-[hsl(var(--primary))] px-8 py-4 font-bold text-white"
>

Request This Offer

</Link>


</div>


</section>


</main>

);

}