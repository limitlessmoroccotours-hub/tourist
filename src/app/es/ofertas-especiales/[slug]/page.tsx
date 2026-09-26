import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { specialOffersEs } from "@/data/specialOffers-es";
import { toursEs } from "@/data/tours-es";



type SpecialOfferPageProps = {

  params: Promise<{
    slug: string;
  }>;

};



const SITE_URL = "https://moroccan-trip.com";





export function generateStaticParams() {

  return specialOffersEs.map((offer) => ({

    slug: offer.slug,

  }));

}





export async function generateMetadata({

  params,

}: SpecialOfferPageProps): Promise<Metadata> {


  const { slug } = await params;



  const offer = specialOffersEs.find(

    (item) => item.slug === slug

  );



  if (!offer) {

    return {

      title: "Oferta no encontrada | Moroccan Trip",

      robots: {

        index: false,

        follow: false,

      },

    };

  }



  const canonicalUrl =

    `${SITE_URL}/es/ofertas-especiales/${offer.slug}`;



  return {


    title: {

      absolute: offer.seo.title,

    },


    description:

      offer.seo.description,


    alternates: {

      canonical: canonicalUrl,

    },



    openGraph: {


      title: offer.seo.title,


      description: offer.seo.description,


      url: canonicalUrl,


      siteName: "Moroccan Trip",


      type: "website",


      locale: "es_ES",


      images: [

        {

          url: `${SITE_URL}${offer.image}`,

          alt: offer.title,

        },

      ],

    },



    robots: {

      index: true,

      follow: true,

    },


  };


}









export default async function SpecialOfferPage({

  params,

}: SpecialOfferPageProps) {



  const { slug } = await params;




  const offer = specialOffersEs.find(

    (item) => item.slug === slug

  );





  if (!offer) {

    notFound();

  }






  const recommendedTours =


    offer.recommendedTours


      ? toursEs.filter((tour) =>

          offer.recommendedTours?.includes(tour.slug)

        )

      : [];






  const overviewParagraphs =

    offer.overview

      .trim()

      .split(/\n\s*\n/)

      .filter(Boolean);








  const breadcrumbJsonLd = {


    "@context": "https://schema.org",


    "@type": "BreadcrumbList",



    itemListElement: [



      {

        "@type": "ListItem",

        position: 1,

        name: "Inicio",

        item: SITE_URL,

      },



      {

        "@type": "ListItem",

        position: 2,

        name: "Ofertas especiales",

        item: `${SITE_URL}/es/ofertas-especiales`,

      },



      {

        "@type": "ListItem",

        position: 3,

        name: offer.title,

        item:

          `${SITE_URL}/es/ofertas-especiales/${offer.slug}`,

      },


    ],


  };









return (


<main className="min-h-screen bg-[hsl(var(--background))]">



<script

type="application/ld+json"

dangerouslySetInnerHTML={{

__html: JSON.stringify(breadcrumbJsonLd),

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



<Link href="/es">

Inicio

</Link>



<span className="mx-2">

/

</span>




<Link href="/es/ofertas-especiales">

Ofertas especiales

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

href="/es/contacto"

className="rounded-full bg-[hsl(var(--primary))] px-8 py-4 text-sm font-bold text-white"

>


{offer.booking.contactLabel}


</Link>






<a

href="#overview"

className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white"

>


Explorar oferta


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

Duración

</p>


<p className="mt-2 font-semibold">

{offer.duration}

</p>


</div>







<div>


<p className="text-xs uppercase text-[hsl(var(--text-muted))]">

Diseñado para

</p>


<p className="mt-2 font-semibold">

{offer.targetAudience}

</p>


</div>







<div>


<p className="text-xs uppercase text-[hsl(var(--text-muted))]">

Destinos

</p>


<p className="mt-2 font-semibold">

{offer.destinations.length} lugares

</p>


</div>






</div>


</div>


</section>









{/* OVERVIEW + HIGHLIGHTS */}



<section

id="overview"

className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10"

>




<div className="grid gap-12 lg:grid-cols-[1.3fr_.7fr]">





<div>



<p className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--primary))]">


La experiencia


</p>





<h2 className="mt-3 text-4xl font-semibold text-[hsl(var(--heading))]">


Descubre tu viaje por Marruecos


</h2>






<div className="mt-8 space-y-6">


{overviewParagraphs.map((text,index)=>(


<p

key={index}

className="leading-8 text-[hsl(var(--text-secondary))]"

>


{text}


</p>


))}



</div>



</div>








<aside className="rounded-[30px] bg-[hsl(var(--secondary))] p-8 text-white">



<p className="text-xs uppercase tracking-widest text-[hsl(var(--primary))]">


¿Por qué elegir esta experiencia?


</p>





<h3 className="mt-3 text-3xl font-semibold">


Aspectos destacados


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


Tu ruta por Marruecos


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





<p className="text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--primary))]">

Tours recomendados

</p>





<h2 className="mt-3 text-4xl font-semibold text-[hsl(var(--heading))]">


Elige tu ruta por el desierto


</h2>





<p className="mt-5 max-w-2xl leading-8 text-[hsl(var(--text-secondary))]">


Descubre nuestros tours por el desierto de Marruecos y elige la experiencia que mejor se adapta a tu tiempo y estilo de viaje.


</p>








<div className="mt-10 grid gap-8 md:grid-cols-3">





{recommendedTours.map((tour)=>(



<article

key={tour.id}

className="
group
overflow-hidden
rounded-[30px]
border
border-[hsl(var(--border))]
bg-[hsl(var(--card))]
transition-all
duration-300
hover:-translate-y-1
hover:shadow-xl
"

>




<Link

href={`/es/tours/${tour.slug}`}

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


</Link>






<div className="p-6">





<p className="text-[11px] font-bold uppercase tracking-widest text-[hsl(var(--primary))]">


{tour.category}


</p>







<h3 className="mt-3 text-xl font-semibold text-[hsl(var(--heading))]">


{tour.title}


</h3>







<p className="mt-4 text-sm leading-7 text-[hsl(var(--text-secondary))]">


{tour.shortDescription}


</p>







<Link

href={`/es/tours/${tour.slug}`}

className="
mt-6
inline-flex
font-bold
text-[hsl(var(--primary))]
"

>


Ver tour →

</Link>






</div>






</article>




))}





</div>






</div>


</section>



)}









{/* ITINERARY */}



<section>


<div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">





<p className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--primary))]">


Ruta del viaje


</p>






<h2 className="mt-3 text-4xl font-semibold text-[hsl(var(--heading))]">


Itinerario del viaje


</h2>








<div className="mt-10 space-y-8">





{offer.itinerary.map((day,index)=>(



<div

key={index}

className="
rounded-[28px]
border
border-[hsl(var(--border))]
bg-[hsl(var(--card))]
p-7
"

>




<div className="flex items-start gap-5">





<div className="
flex
h-10
w-10
shrink-0
items-center
justify-center
rounded-full
bg-[hsl(var(--primary))]
text-sm
font-bold
text-white
">


{index + 1}


</div>







<div>



<h3 className="text-xl font-semibold text-[hsl(var(--heading))]">


{day.title}


</h3>





<p className="mt-3 leading-8 text-[hsl(var(--text-secondary))]">


{day.description}


</p>



</div>





</div>





</div>





))}





</div>





</div>


</section>









{/* INCLUDED / NOT INCLUDED */}



<section className="bg-[hsl(var(--surface-soft))]">



<div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">





<div className="grid gap-8 md:grid-cols-2">





<div className="
rounded-[30px]
border
border-[hsl(var(--border))]
bg-[hsl(var(--card))]
p-8
">





<h2 className="text-2xl font-semibold">


Incluido


</h2>






<ul className="mt-6 space-y-4">



{offer.included.map((item)=>(



<li

key={item}

className="flex gap-3 text-sm leading-7 text-[hsl(var(--text-secondary))]"

>


<span className="text-[hsl(var(--primary))]">

✓

</span>


{item}


</li>



))}





</ul>





</div>









<div className="
rounded-[30px]
border
border-[hsl(var(--border))]
bg-[hsl(var(--card))]
p-8
">





<h2 className="text-2xl font-semibold">


No incluido


</h2>






<ul className="mt-6 space-y-4">



{offer.excluded.map((item)=>(



<li

key={item}

className="flex gap-3 text-sm leading-7 text-[hsl(var(--text-secondary))]"

>


<span className="text-red-500">

×

</span>


{item}


</li>



))}





</ul>





</div>







</div>







</div>



</section>









{/* FAQ */}



<section>


<div className="mx-auto max-w-4xl px-5 py-20 sm:px-8">





<p className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--primary))]">


Ayuda


</p>






<h2 className="mt-3 text-4xl font-semibold text-[hsl(var(--heading))]">


Preguntas frecuentes


</h2>







<div className="mt-10 space-y-8">





{offer.faqs.map((faq,index)=>(



<div

key={index}

className="
border-b
border-[hsl(var(--border))]
pb-6
"

>




<h3 className="text-xl font-semibold text-[hsl(var(--heading))]">


{faq.question}


</h3>






<p className="mt-3 leading-8 text-[hsl(var(--text-secondary))]">


{faq.answer}


</p>






</div>




))}





</div>







</div>



</section>









{/* CTA */}



<section className="pb-20">



<div className="mx-auto max-w-5xl px-5">





<div className="
rounded-[32px]
bg-[hsl(var(--secondary))]
p-10
sm:p-14
">





<p className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--primary))]">


Viaje privado a Marruecos


</p>







<h2 className="mt-4 text-4xl font-semibold text-white">


¿Listo para descubrir Marruecos?


</h2>







<p className="mt-5 max-w-2xl leading-8 text-white/70">


Contacta con nosotros y crearemos una experiencia privada adaptada a tus fechas, intereses y estilo de viaje.


</p>







<Link

href="/es/contacto"

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


Solicitar esta oferta


</Link>







</div>






</div>



</section>








</main>

);

}
