import Image from "next/image";
import Link from "next/link";



export const metadata = {

  title:
    "Sobre Moroccan Trip | Agencia Local de Viajes en Marruecos",


  description:
    "Conoce Moroccan Trip, una agencia local en Marrakech especializada en tours privados, excursiones, viajes al Sahara y experiencias auténticas en Marruecos.",


  keywords: [

    "viajes a Marruecos",

    "tours privados Marruecos",

    "agencia de viajes Marruecos",

    "excursiones desde Marrakech",

    "equipo local Marrakech",

    "experiencias auténticas Marruecos"

  ],


};







export default function NosotrosPage() {


  const aboutSchema = {


    "@context": "https://schema.org",


    "@type": "AboutPage",


    name:
      "Sobre Moroccan Trip",


    description:
      "Conoce nuestro equipo local y descubre cómo creamos experiencias auténticas de viaje en Marruecos.",



    mainEntity: {


      "@type": "TravelAgency",


      name:
        "Moroccan Trip",


      description:
        "Agencia local de viajes especializada en tours privados, excursiones y experiencias personalizadas en Marruecos.",



      areaServed: {

        "@type": "Country",

        name:
          "Morocco"

      },


      address: {

        "@type": "PostalAddress",

        addressLocality:
          "Marrakech",

        addressCountry:
          "MA"

      }


    }


  };






  return (


<main

className="
min-h-screen
bg-[hsl(var(--background))]
"

>



<script

type="application/ld+json"

dangerouslySetInnerHTML={{

__html:
JSON.stringify(aboutSchema)

}}

/>







{/* Breadcrumb */}



<div

className="
mx-auto
max-w-7xl
px-5
pt-8
sm:px-8
lg:px-10
"

>


<nav

className="
text-sm
text-[hsl(var(--text-muted))]
"

>


<Link href="/es">

Inicio

</Link>



<span className="mx-2">

/

</span>



<span>

Sobre nosotros

</span>



</nav>


</div>









{/* Hero */}





<section

className="
mx-auto
max-w-7xl
px-5
py-16
sm:px-8
lg:px-10
lg:py-24
"

>


<div

className="
grid
gap-12
lg:grid-cols-2
lg:items-center
"

>







<div>


<p

className="
text-xs
font-bold
uppercase
tracking-[0.22em]
text-[hsl(var(--primary))]
"

>

Viajes auténticos en Marruecos

</p>







<h1

className="
mt-5
text-4xl
font-semibold
leading-tight
tracking-tight
text-[hsl(var(--heading))]
sm:text-5xl
lg:text-6xl
"

>

Conoce Moroccan Trip, tu agencia local para descubrir Marruecos

</h1>







<p

className="
mt-6
text-lg
leading-8
text-[hsl(var(--text-secondary))]
"

>

Somos un equipo local apasionado por mostrar la verdadera esencia de Marruecos. Creamos tours privados, excursiones desde Marrakech y experiencias personalizadas para viajeros que buscan descubrir la cultura, la naturaleza y la historia del país.

</p>







<div

className="
mt-8
flex
flex-wrap
gap-4
"

>



<Link

href="/es/tours"

className="
inline-flex
rounded-full
bg-[hsl(var(--primary))]
px-7
py-3
text-sm
font-bold
text-white
"

>

Ver nuestros tours

</Link>





<Link

href="/es/contacto"

className="
inline-flex
rounded-full
border
border-[hsl(var(--border))]
px-7
py-3
text-sm
font-bold
text-[hsl(var(--heading))]
"

>

Contactar

</Link>



</div>



</div>










<div

className="
relative
aspect-[4/3]
overflow-hidden
rounded-3xl
"

>


<Image

src="/images/about/moroccan-trip-team-guests-1.webp"

alt="Equipo local de Moroccan Trip con viajeros en Marruecos"

fill

priority

className="
object-cover
"

/>



</div>






</div>



</section>









{/* Trust Section */}



<section

className="
border-y
border-[hsl(var(--border))]
bg-[hsl(var(--surface-soft))]
"

>


<div

className="
mx-auto
max-w-7xl
px-5
py-10
sm:px-8
lg:px-10
"

>


<div

className="
grid
gap-8
md:grid-cols-3
"

>






<div>


<h3

className="
text-xl
font-semibold
text-[hsl(var(--heading))]
"

>

Equipo local

</h3>



<p

className="
mt-3
text-sm
leading-7
text-[hsl(var(--text-secondary))]
"

>

Conocemos Marruecos desde dentro y compartimos lugares auténticos lejos de las rutas habituales.

</p>


</div>







<div>


<h3

className="
text-xl
font-semibold
text-[hsl(var(--heading))]
"

>

Experiencias personalizadas

</h3>



<p

className="
mt-3
text-sm
leading-7
text-[hsl(var(--text-secondary))]
"

>

Diseñamos viajes adaptados a tus intereses, tiempo y forma de viajar.

</p>


</div>








<div>


<h3

className="
text-xl
font-semibold
text-[hsl(var(--heading))]
"

>

Atención cercana

</h3>



<p

className="
mt-3
text-sm
leading-7
text-[hsl(var(--text-secondary))]
"

>

Te acompañamos antes, durante y después del viaje para que disfrutes de Marruecos con tranquilidad.

</p>


</div>







</div>


</div>


</section>
{/* Our Story */}



<section

className="
mx-auto
max-w-7xl
px-5
py-16
sm:px-8
lg:px-10
"

>


<div

className="
grid
gap-12
lg:grid-cols-2
lg:items-center
"

>





<div>


<p

className="
text-xs
font-bold
uppercase
tracking-[0.18em]
text-[hsl(var(--primary))]
"

>

Nuestra historia

</p>







<h2

className="
mt-4
text-3xl
font-semibold
tracking-tight
text-[hsl(var(--heading))]
sm:text-4xl
"

>

Nacimos para compartir el verdadero Marruecos

</h2>







<p

className="
mt-5
leading-8
text-[hsl(var(--text-secondary))]
"

>

Moroccan Trip nació con una idea sencilla: ayudar a los viajeros a descubrir Marruecos de una manera más auténtica y personal.

</p>






<p

className="
mt-5
leading-8
text-[hsl(var(--text-secondary))]
"

>

Como equipo local, conocemos las tradiciones, los paisajes y los lugares especiales que hacen que cada viaje sea único. Nuestro objetivo es crear experiencias memorables combinando cultura, aventura, naturaleza y contacto con las comunidades locales.

</p>





<p

className="
mt-5
leading-8
text-[hsl(var(--text-secondary))]
"

>

Desde Marrakech hasta el desierto del Sahara, diseñamos viajes que permiten descubrir la verdadera belleza de Marruecos.

</p>



</div>







<div

className="
relative
aspect-square
overflow-hidden
rounded-3xl
"

>


<Image

src="/images/about/moroccan-trip-team-guests-2.webp"

alt="Viajeros disfrutando una experiencia con Moroccan Trip"

fill

className="
object-cover
"

/>


</div>





</div>


</section>









{/* Tripadvisor */}




<section

className="
bg-[hsl(var(--surface-soft))]
"

>


<div

className="
mx-auto
max-w-7xl
px-5
py-16
sm:px-8
lg:px-10
"

>



<div

className="
max-w-3xl
"

>



<p

className="
text-xs
font-bold
uppercase
tracking-[0.18em]
text-[hsl(var(--primary))]
"

>

Opiniones de viajeros

</p>






<h2

className="
mt-4
text-3xl
font-semibold
text-[hsl(var(--heading))]
sm:text-4xl
"

>

Miles de viajeros han compartido su experiencia con nosotros

</h2>







<p

className="
mt-5
leading-8
text-[hsl(var(--text-secondary))]
"

>

La confianza de nuestros viajeros es una parte fundamental de Moroccan Trip. Cada experiencia nos ayuda a seguir creando viajes personalizados y servicios de calidad en Marruecos.

</p>




</div>









<div

className="
mt-10
grid
gap-6
md:grid-cols-3
"

>





<div

className="
rounded-3xl
border
border-[hsl(var(--border))]
bg-[hsl(var(--card))]
p-6
"

>


<p

className="
text-3xl
font-bold
text-[hsl(var(--primary))]
"

>

★★★★★

</p>



<p

className="
mt-4
text-sm
leading-7
"

>

Experiencias auténticas y atención personalizada para viajeros de todo el mundo.

</p>


</div>








<div

className="
rounded-3xl
border
border-[hsl(var(--border))]
bg-[hsl(var(--card))]
p-6
"

>


<p

className="
text-3xl
font-bold
text-[hsl(var(--primary))]
"

>

🌍

</p>



<p

className="
mt-4
text-sm
leading-7
"

>

Tours privados, excursiones y viajes organizados adaptados a cada viajero.

</p>


</div>








<div

className="
rounded-3xl
border
border-[hsl(var(--border))]
bg-[hsl(var(--card))]
p-6
"

>


<p

className="
text-3xl
font-bold
text-[hsl(var(--primary))]
"

>

🇲🇦

</p>



<p

className="
mt-4
text-sm
leading-7
"

>

Un equipo local que conoce Marruecos y comparte su cultura con pasión.

</p>


</div>






</div>




</div>


</section>









{/* Real Journeys Gallery */}





<section

className="
mx-auto
max-w-7xl
px-5
py-16
sm:px-8
lg:px-10
"

>


<div>


<p

className="
text-xs
font-bold
uppercase
tracking-[0.18em]
text-[hsl(var(--primary))]
"

>

Momentos reales

</p>






<h2

className="
mt-4
text-3xl
font-semibold
text-[hsl(var(--heading))]
sm:text-4xl
"

>

Viajeros descubriendo Marruecos

</h2>



</div>







<div

className="
mt-10
grid
gap-6
sm:grid-cols-2
lg:grid-cols-3
"

>



{[

"/images/about/moroccan-trip-team-guests-1.webp",

"/images/about/moroccan-trip-team-guests-2.webp",

"/images/about/moroccan-trip-team-guests-3.webp",

].map((image)=>(


<div

key={image}

className="
relative
aspect-[4/3]
overflow-hidden
rounded-3xl
"

>


<Image

src={image}

alt="Viajeros con Moroccan Trip en Marruecos"

fill

className="
object-cover
"

/>


</div>


))}



</div>




</section>









{/* Local Team */}




<section

className="
bg-[hsl(var(--surface-soft))]
"

>


<div

className="
mx-auto
max-w-7xl
px-5
py-16
sm:px-8
lg:px-10
"

>


<div

className="
grid
gap-12
lg:grid-cols-2
lg:items-center
"

>





<div>


<p

className="
text-xs
font-bold
uppercase
tracking-[0.18em]
text-[hsl(var(--primary))]
"

>

Nuestro equipo local

</p>






<h2

className="
mt-4
text-3xl
font-semibold
text-[hsl(var(--heading))]
sm:text-4xl
"

>

Personas locales creando experiencias únicas

</h2>






<p

className="
mt-5
leading-8
text-[hsl(var(--text-secondary))]
"

>

Nuestro equipo está formado por personas locales que conocen Marruecos profundamente. Compartimos nuestra cultura, nuestras historias y nuestros lugares favoritos para crear viajes más cercanos y especiales.

</p>






<p

className="
mt-5
leading-8
text-[hsl(var(--text-secondary))]
"

>

Desde la planificación hasta el último día del viaje, estamos aquí para ayudarte a disfrutar Marruecos con comodidad y confianza.

</p>



</div>








<div

className="
relative
aspect-[4/3]
overflow-hidden
rounded-3xl
"

>


<Image

src="/images/about/moroccan-trip-team-guests-4.webp"

alt="Equipo local de Moroccan Trip"

fill

className="
object-cover
"

/>


</div>





</div>


</div>


</section>
{/* Our Approach */}



<section

className="
mx-auto
max-w-7xl
px-5
py-16
sm:px-8
lg:px-10
"

>


<div

className="
grid
gap-12
lg:grid-cols-2
"

>





<div>


<p

className="
text-xs
font-bold
uppercase
tracking-[0.18em]
text-[hsl(var(--primary))]
"

>

Nuestro enfoque

</p>







<h2

className="
mt-4
text-3xl
font-semibold
text-[hsl(var(--heading))]
sm:text-4xl
"

>

Creamos viajes con significado

</h2>







<p

className="
mt-5
leading-8
text-[hsl(var(--text-secondary))]
"

>

No creemos en los viajes genéricos. Cada viajero es diferente y por eso diseñamos experiencias adaptadas a tus intereses, ritmo y forma de descubrir Marruecos.

</p>







<p

className="
mt-5
leading-8
text-[hsl(var(--text-secondary))]
"

>

Combinamos lugares famosos con rincones menos conocidos para ofrecer una experiencia equilibrada entre cultura, aventura, naturaleza y momentos auténticos.

</p>



</div>








<div

className="
grid
gap-6
"

>


<div

className="
rounded-3xl
border
border-[hsl(var(--border))]
p-6
"

>


<h3

className="
text-xl
font-semibold
text-[hsl(var(--heading))]
"

>

Viajes personalizados

</h3>


<p

className="
mt-3
text-sm
leading-7
text-[hsl(var(--text-secondary))]
"

>

Adaptamos cada experiencia según tus fechas, intereses y expectativas.

</p>


</div>








<div

className="
rounded-3xl
border
border-[hsl(var(--border))]
p-6
"

>


<h3

className="
text-xl
font-semibold
text-[hsl(var(--heading))]
"

>

Conocimiento local

</h3>


<p

className="
mt-3
text-sm
leading-7
text-[hsl(var(--text-secondary))]
"

>

Nuestro equipo comparte lugares, historias y tradiciones que solo los locales conocen.

</p>


</div>






</div>





</div>


</section>









{/* Why Choose Us */}





<section

className="
bg-[hsl(var(--surface-soft))]
"

>


<div

className="
mx-auto
max-w-7xl
px-5
py-16
sm:px-8
lg:px-10
"

>



<div

className="
max-w-3xl
"

>


<p

className="
text-xs
font-bold
uppercase
tracking-[0.18em]
text-[hsl(var(--primary))]
"

>

¿Por qué elegirnos?

</p>







<h2

className="
mt-4
text-3xl
font-semibold
text-[hsl(var(--heading))]
sm:text-4xl
"

>

Una forma diferente de descubrir Marruecos

</h2>



</div>









<div

className="
mt-10
grid
gap-8
md:grid-cols-3
"

>



<div>


<h3

className="
text-xl
font-semibold
"

>

Experiencias auténticas

</h3>


<p

className="
mt-3
text-sm
leading-7
text-[hsl(var(--text-secondary))]
"

>

Descubre la cultura marroquí, los paisajes naturales y las tradiciones locales.

</p>


</div>








<div>


<h3

className="
text-xl
font-semibold
"

>

Atención personalizada

</h3>


<p

className="
mt-3
text-sm
leading-7
text-[hsl(var(--text-secondary))]
"

>

Te ayudamos a organizar cada detalle para disfrutar un viaje cómodo y especial.

</p>


</div>








<div>


<h3

className="
text-xl
font-semibold
"

>

Pasión por Marruecos

</h3>


<p

className="
mt-3
text-sm
leading-7
text-[hsl(var(--text-secondary))]
"

>

Compartimos nuestro país con viajeros que quieren vivir algo más que unas simples vacaciones.

</p>


</div>





</div>




</div>


</section>









{/* What We Offer */}




<section

className="
mx-auto
max-w-7xl
px-5
py-16
sm:px-8
lg:px-10
"

>


<p

className="
text-xs
font-bold
uppercase
tracking-[0.18em]
text-[hsl(var(--primary))]
"

>

Nuestros servicios

</p>







<h2

className="
mt-4
text-3xl
font-semibold
text-[hsl(var(--heading))]
sm:text-4xl
"

>

Todo lo que necesitas para viajar por Marruecos

</h2>








<div

className="
mt-10
grid
gap-6
sm:grid-cols-2
lg:grid-cols-4
"

>



{[

" Tours privados en Marruecos",

"Excursiones desde Marrakech",

"Viajes al desierto del Sahara",

"Viajes organizados personalizados"

].map((item)=>(


<div

key={item}

className="
rounded-3xl
border
border-[hsl(var(--border))]
p-6
"

>

<p

className="
font-semibold
text-[hsl(var(--heading))]
"

>

{item}

</p>


</div>


))}



</div>



</section>









{/* How It Works */}




<section

className="
bg-[hsl(var(--surface-soft))]
"

>


<div

className="
mx-auto
max-w-7xl
px-5
py-16
sm:px-8
lg:px-10
"

>


<h2

className="
text-3xl
font-semibold
text-[hsl(var(--heading))]
sm:text-4xl
"

>

Cómo funciona tu viaje con nosotros

</h2>







<div

className="
mt-10
grid
gap-8
md:grid-cols-3
"

>



<div>

<span

className="
text-4xl
font-bold
text-[hsl(var(--primary))]
"

>
01
</span>


<h3 className="mt-4 text-xl font-semibold">

Cuéntanos tu idea

</h3>


<p className="mt-3 text-sm leading-7">

Comparte tus fechas, intereses y el tipo de experiencia que buscas.

</p>


</div>







<div>

<span

className="
text-4xl
font-bold
text-[hsl(var(--primary))]
"

>
02
</span>


<h3 className="mt-4 text-xl font-semibold">

Creamos tu experiencia

</h3>


<p className="mt-3 text-sm leading-7">

Diseñamos un itinerario personalizado para descubrir Marruecos.

</p>


</div>







<div>

<span

className="
text-4xl
font-bold
text-[hsl(var(--primary))]
"

>
03
</span>


<h3 className="mt-4 text-xl font-semibold">

Disfruta Marruecos

</h3>


<p className="mt-3 text-sm leading-7">

Nos encargamos de los detalles para que vivas un viaje inolvidable.

</p>


</div>





</div>



</div>


</section>









{/* Final CTA */}




<section

className="
mx-auto
max-w-7xl
px-5
py-16
sm:px-8
lg:px-10
"

>


<div

className="
rounded-3xl
bg-[hsl(var(--secondary))]
p-10
sm:p-14
"

>


<h2

className="
text-3xl
font-semibold
text-white
sm:text-4xl
"

>

¿Listo para descubrir Marruecos?

</h2>






<p

className="
mt-5
max-w-2xl
leading-8
text-white/70
"

>

Contacta con nuestro equipo local y empieza a planificar tu próxima experiencia en Marruecos.

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

Planificar mi viaje

</Link>





</div>


</section>





</main>


  );

}