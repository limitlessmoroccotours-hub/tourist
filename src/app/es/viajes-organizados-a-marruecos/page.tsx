import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


const SITE_URL = "https://moroccan-trip.com";


export const metadata: Metadata = {

  title: {
    absolute:
      "Viajes Organizados a Marruecos | Rutas Personalizadas y Tours Privados",
  },


  description:
    "Organiza tu viaje a Marruecos con una ruta personalizada según tus intereses, fechas y estilo de viaje. Descubre Marruecos con tours privados, experiencias únicas y un itinerario creado para ti.",


  alternates: {
    canonical:
      `${SITE_URL}/es/viajes-organizados-a-marruecos`,
  },


  openGraph: {

    title:
      "Viajes Organizados a Marruecos | Rutas Personalizadas y Tours Privados",

    description:
      "Diseña un viaje a Marruecos a tu medida con una ruta personalizada creada según tus intereses y forma de viajar.",

    url:
      `${SITE_URL}/es/viajes-organizados-a-marruecos`,

    siteName:
      "Moroccan Trip",

    type:
      "website",

    locale:
      "es_ES",

    images:[
      {
        url:
          `${SITE_URL}/images/viajes-organizados-marruecos.webp`,

        alt:
          "Viaje organizado a Marruecos personalizado",
      },
    ],
  },


  robots:{
    index:true,
    follow:true,
  },

};



export default function ViajesOrganizadosMarruecosPage(){

return (

<main className="min-h-screen bg-[hsl(var(--background))]">


{/* HERO */}


<section className="relative overflow-hidden">


<div className="relative min-h-[620px]">


<Image

src="/images/custom-tour.webp"

alt="Viaje organizado a Marruecos personalizado"

fill

priority

sizes="100vw"

className="object-cover"

/>


<div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20"/>



<div className="relative mx-auto flex min-h-[620px] max-w-7xl flex-col justify-end px-5 pb-20 sm:px-8 lg:px-10">


<div className="max-w-4xl">


<p className="text-xs font-bold uppercase tracking-[0.22em] text-[hsl(var(--primary))]">

Viajes a Marruecos a Medida

</p>



<h1 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">

Viajes Organizados a Marruecos Diseñados Para Ti

</h1>



<p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">

Creamos viajes a Marruecos personalizados según tus intereses, fechas y estilo de viaje. Desde rutas privadas hasta experiencias culturales, aventuras en el desierto y circuitos completos, descubre Marruecos a tu manera.

</p>



<div className="mt-8 flex flex-wrap gap-4">


<Link

href="/es/contact"

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

Solicita Tu Viaje Personalizado

</Link>



<a

href="#experiencia"

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

Explorar Opciones

</a>


</div>


</div>


</div>


</div>


</section>





{/* INTRO */}


<section
id="experiencia"
className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10"
>


<div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr]">


<div>


<p className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--primary))]">

Viajes Organizados a Marruecos

</p>



<h2 className="mt-4 text-4xl font-semibold text-[hsl(var(--heading))]">

Un Viaje a Marruecos Creado Según Tu Estilo

</h2>



<p className="mt-6 leading-8 text-[hsl(var(--text-secondary))]">

Cada viajero tiene una forma diferente de descubrir Marruecos. Algunos buscan aventuras en el desierto, otros prefieren conocer ciudades imperiales, pueblos tradicionales, montañas o la costa atlántica.

</p>



<p className="mt-5 leading-8 text-[hsl(var(--text-secondary))]">

Nuestros viajes organizados a Marruecos están diseñados para crear una experiencia personalizada. Elegimos contigo los destinos, actividades y ritmo del viaje para crear una ruta por Marruecos adaptada a tus expectativas.

</p>



<p className="mt-5 leading-8 text-[hsl(var(--text-secondary))]">

Ya sea un viaje en pareja, unas vacaciones familiares, un circuito privado o una aventura con amigos, organizamos cada detalle para que disfrutes de Marruecos con comodidad y tranquilidad.

</p>


</div>




<aside className="rounded-[30px] bg-[hsl(var(--secondary))] p-8 text-white">


<p className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--primary))]">

¿Por Qué Elegir Un Viaje Personalizado?

</p>



<h3 className="mt-4 text-3xl font-semibold">

Marruecos A Tu Propio Ritmo

</h3>



<ul className="mt-6 space-y-4 text-white/80">


<li>
✓ Fechas de viaje flexibles
</li>


<li>
✓ Ruta personalizada por Marruecos
</li>


<li>
✓ Guía y conductor privado disponibles
</li>


<li>
✓ Circuitos privados y experiencias en grupo
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

Nuestras Experiencias

</p>



<h2 className="mt-4 text-4xl font-semibold text-[hsl(var(--heading))]">

¿Qué Tipo de Viaje a Marruecos Podemos Crear?

</h2>


<p className="mt-5 leading-8 text-[hsl(var(--text-secondary))]">

Creamos viajes organizados a Marruecos adaptados a diferentes estilos de viajeros. Desde rutas por el desierto hasta experiencias culturales, diseñamos cada itinerario según tus preferencias.

</p>


</div>





<div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">


{[


{
title:
"Viajes al Desierto",

text:
"Explora el Sahara, disfruta de paisajes únicos y descubre la cultura local con una ruta por Marruecos diseñada según tu tiempo e intereses."
},


{
title:
"Rutas Culturales",

text:
"Descubre ciudades imperiales, mercados tradicionales, monumentos históricos y experiencias auténticas lejos de las rutas habituales."
},


{
title:
"Viajes Privados y Familiares",

text:
"Disfruta de un viaje organizado a Marruecos cómodo y flexible para parejas, familias o grupos privados con una ruta creada para vosotros."
},


{
title:
"Experiencias en las Montañas del Atlas",

text:
"Combina naturaleza, pueblos bereberes y paisajes de montaña con un itinerario personalizado por el Alto Atlas."
},


{
title:
"Rutas por la Costa de Marruecos",

text:
"Descubre la costa atlántica, ciudades con encanto y experiencias relajantes junto al mar con una ruta adaptada a tu estilo."
},


{
title:
"Viajes en Grupo",

text:
"Participa en una experiencia compartida por Marruecos con otros viajeros disfrutando de rutas organizadas y un viaje cómodo."
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

Viajes Privados a Marruecos

</p>



<h2 className="mt-4 text-3xl font-semibold text-[hsl(var(--heading))]">

Tu Ruta, Tu Ritmo, Tu Experiencia

</h2>



<p className="mt-5 leading-8 text-[hsl(var(--text-secondary))]">

Elige tus destinos, actividades y ritmo de viaje. Creamos una ruta privada por Marruecos con planificación flexible y atención personalizada desde el primer día hasta el final del viaje.

</p>



</div>






<div className="rounded-[30px] border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-8">


<p className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--primary))]">

Viajes Compartidos

</p>



<h2 className="mt-4 text-3xl font-semibold text-[hsl(var(--heading))]">

Experiencias Cómodas en Grupo

</h2>



<p className="mt-5 leading-8 text-[hsl(var(--text-secondary))]">

Para viajeros que prefieren compartir la experiencia con otras personas, organizamos viajes en grupo por Marruecos con rutas cuidadosamente planificadas y servicios de calidad.

</p>



</div>


</div>


</section>








{/* HOW IT WORKS */}


<section className="bg-[hsl(var(--surface-soft))]">


<div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">


<h2 className="text-4xl font-semibold text-[hsl(var(--heading))]">

¿Cómo Funciona Tu Viaje Organizado a Marruecos?

</h2>




<div className="mt-10 grid gap-6 md:grid-cols-3">


{[


{
number:"01",

title:"Cuéntanos Tus Ideas",

text:
"Comparte tus destinos favoritos, fechas, intereses y estilo de viaje."
},


{
number:"02",

title:"Creamos Tu Ruta Personalizada",

text:
"Nuestro equipo diseña un itinerario por Marruecos adaptado a tus necesidades."
},


{
number:"03",

title:"Disfruta Marruecos",

text:
"Viaja con tranquilidad y descubre Marruecos con una experiencia creada para ti."
},


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

Preguntas Frecuentes Sobre Viajes a Marruecos

</h2>



<div className="mt-10 space-y-6">


{[


{
q:
"¿Pueden crear un viaje a Marruecos según nuestros intereses?",

a:
"Sí. Diseñamos viajes a Marruecos personalizados según tus destinos favoritos, fechas, presupuesto, estilo de viaje y actividades que deseas realizar."
},


{
q:
"¿Organizan viajes privados y viajes en grupo por Marruecos?",

a:
"Sí. Podemos organizar tanto viajes privados a Marruecos como experiencias compartidas en grupo, adaptando la ruta y los servicios según tus preferencias."
},


{
q:
"¿Podemos combinar el desierto, ciudades y la costa en un mismo viaje?",

a:
"Sí. Creamos rutas por Marruecos combinando diferentes regiones como el desierto del Sahara, ciudades imperiales, las montañas del Atlas y la costa atlántica."
},


{
q:
"¿Cuánto dura un viaje organizado a Marruecos?",

a:
"La duración depende de tu disponibilidad y del tipo de experiencia que buscas. Podemos crear rutas cortas o circuitos completos por Marruecos de varios días."
},


{
q:
"¿Los viajes a Marruecos a medida incluyen conductor y guía?",

a:
"Podemos organizar transporte privado, conductor profesional y guías locales según las necesidades de tu viaje personalizado."
},


{
q:
"¿Puedo modificar la ruta después de recibir la propuesta?",

a:
"Sí. Al ser viajes personalizados, podemos ajustar destinos, actividades y ritmo del itinerario hasta crear la experiencia ideal para ti."
},


].map((faq)=>(


<div

key={faq.q}

className="
border-b
border-[hsl(var(--border))]
pb-6
"


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

¿Listo Para Crear Tu Viaje a Marruecos?

</h2>



<p className="mt-5 max-w-2xl leading-8 text-white/70">

Cuéntanos qué quieres descubrir en Marruecos. Nuestro equipo creará un viaje organizado y personalizado según tus expectativas, fechas y forma de viajar.

</p>




<Link

href="/es/contact"

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

Solicitar Mi Viaje Personalizado

</Link>



</div>


</section>
</main>

);

}