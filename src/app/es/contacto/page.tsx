import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import {
  ArrowUpRight,
  MessageCircle,
  Sparkles
} from "lucide-react";

import ContactForm from "@/components/sections/contact/ContactForm";





// ─────────────────────────────
// CONTACT CONFIG
// ─────────────────────────────


const SITE_URL =
  "https://moroccan-trip.com";


const CONTACT_EMAIL =
  "contact@moroccan-trip.com";


const WHATSAPP_NUMBER =
  "212607747056";


const WHATSAPP_DISPLAY =
  "+212 607 747 056";







// ─────────────────────────────
// SEO
// ─────────────────────────────


export const metadata: Metadata = {


  title:
    "Contacto Moroccan Trip | Viajes a Marruecos",



  description:
    "Contacta con nuestro equipo local en Marrakech para organizar tours privados, excursiones, viajes al desierto del Sahara y experiencias personalizadas en Marruecos.",



  keywords: [

    "contacto Moroccan Trip",

    "viajes a Marruecos",

    "tours privados Marruecos",

    "excursiones desde Marrakech",

    "agencia local Marruecos",

    "viaje Sahara Marruecos"

  ],



  alternates: {

    canonical:
      `${SITE_URL}/es/contacto`

  },



  openGraph: {

    title:
      "Contacto Moroccan Trip | Viajes a Marruecos",



    description:
      "Contacta con nuestro equipo local en Marrakech para planificar tu experiencia personalizada en Marruecos.",



    url:
      `${SITE_URL}/es/contacto`,



    siteName:
      "Moroccan Trip",



    type:
      "website"

  }


};









// ─────────────────────────────
// SERVER ACTION
// ─────────────────────────────


async function submitContactForm(

  formData: FormData

) {


  "use server";



  const getValue = (name: string) =>

    String(

      formData.get(name) ?? ""

    ).trim();




  const fullName =
    getValue("fullName");



  const email =
    getValue("email");



  const phone =
    getValue("phone");



  const subject =
    getValue("subject");



  const message =
    getValue("message");






  const whatsappMessage = `

Hola Moroccan Trip,

Me gustaría contactar con vuestro equipo.


DATOS DEL CLIENTE


Nombre:
${fullName}


Email:
${email}


WhatsApp / Teléfono:
${phone || "No indicado"}



ASUNTO


${subject}



MENSAJE


${message}



Gracias.

`.trim();







  const whatsappUrl =

    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(

      whatsappMessage

    )}`;





  redirect(whatsappUrl);


}









// ─────────────────────────────
// JSON-LD HELPER
// ─────────────────────────────


function jsonLdString(data: unknown) {


  return JSON.stringify(data).replace(

    /</g,

    "\\u003c"

  );


}









// ─────────────────────────────
// PAGE
// ─────────────────────────────


export default function ContactoPage() {



  const contactPageJsonLd = {


    "@context":
      "https://schema.org",



    "@type":
      "ContactPage",



    name:
      "Contacto Moroccan Trip",



    url:
      `${SITE_URL}/es/contacto`,



    description:
      "Contacta con el equipo local de Moroccan Trip en Marrakech, Marruecos.",





    mainEntity: {


      "@type":
        "Organization",



      name:
        "Moroccan Trip",



      url:
        SITE_URL,



      areaServed: {


        "@type":
          "Country",



        name:
          "Morocco"


      },



      address: {


        "@type":
          "PostalAddress",



        addressLocality:
          "Marrakech",



        addressCountry:
          "MA"


      }


    }


  };









  const breadcrumbJsonLd = {


    "@context":
      "https://schema.org",



    "@type":
      "BreadcrumbList",



    itemListElement: [


      {


        "@type":
          "ListItem",



        position:
          1,



        name:
          "Inicio",



        item:
          SITE_URL


      },



      {


        "@type":
          "ListItem",



        position:
          2,



        name:
          "Contacto",



        item:
          `${SITE_URL}/es/contacto`


      }


    ]


  };








  return (

<>



<script

type="application/ld+json"

dangerouslySetInnerHTML={{

__html:

jsonLdString(

contactPageJsonLd

)

}}

/>





<script

type="application/ld+json"

dangerouslySetInnerHTML={{

__html:

jsonLdString(

breadcrumbJsonLd

)

}}

/>








<section

className="
bg-background
px-4
py-12
text-foreground
sm:px-6
lg:px-8
lg:py-16
"

>


<section

className="
mx-auto
max-w-6xl
"

>





<div

className="
mx-auto
max-w-2xl
text-center
"

>


<p

className="
text-sm
font-bold
uppercase
tracking-[0.2em]
text-primary
"

>

Contacto

</p>







<h1

className="
mt-3
text-3xl
font-bold
text-heading
sm:text-4xl
"

>

Planifica tu viaje a Marruecos

</h1>







<p

className="
mx-auto
mt-4
max-w-xl
text-base
leading-7
text-text-secondary
"

>

Cuéntanos tus planes de viaje y nuestro equipo local te ayudará a crear una experiencia privada en Marruecos adaptada a tus intereses.

</p>




</div>
<div

className="
mt-10
grid
gap-6
lg:grid-cols-[1.1fr_0.9fr]
"

>






{/* FORM */}



<div

className="
rounded-xl
border
border-border
bg-card
p-6
shadow-sm
sm:p-8
"

>


<h2

className="
text-2xl
font-bold
text-heading
"

>

Envíanos un mensaje

</h2>






<p

className="
mt-2
text-sm
leading-6
text-text-secondary
"

>

Completa el formulario y nuestro equipo de viajes en Marruecos se pondrá en contacto contigo lo antes posible.

</p>






<ContactForm />



</div>









{/* CONTACT INFORMATION */}



<aside

className="
relative
flex
min-h-full
flex-col
overflow-hidden
rounded-xl
bg-secondary
p-7
text-secondary-foreground
shadow-sm
sm:p-9
"

>



<div

className="
relative
"

>


<p

className="
text-sm
font-bold
uppercase
tracking-[0.22em]
text-gold-muted
"

>

Tu asesor local de viajes en Marruecos

</p>








<h2

className="
mt-4
max-w-md
text-3xl
font-bold
leading-tight
sm:text-4xl
"

>

Desde tu primera idea hasta un viaje diseñado para ti

</h2>








<p

className="
mt-5
max-w-md
text-base
leading-8
text-secondary-foreground/75
"

>

Comparte tus planes de viaje y nuestro equipo local los convertirá en un itinerario claro, cómodo y auténtico para descubrir Marruecos.

</p>



</div>









<div

className="
relative
mt-9
space-y-7
"

>






<div

className="
grid
grid-cols-[44px_1fr]
gap-4
"

>


<div

className="
flex
h-11
w-11
items-center
justify-center
rounded-full
border
border-secondary-foreground/15
bg-secondary-foreground/5
"

>

<MessageCircle

className="
h-5
w-5
text-gold-muted
"

/>


</div>







<div

className="
border-b
border-secondary-foreground/10
pb-7
"

>


<h3

className="
mt-1
text-lg
font-bold
"

>

Cuéntanos sobre tu viaje

</h3>






<p

className="
mt-2
text-sm
leading-6
text-secondary-foreground/70
"

>

Comparte tus fechas, destinos preferidos, número de viajeros y estilo de viaje.

</p>



</div>


</div>









<div

className="
grid
grid-cols-[44px_1fr]
gap-4
"

>


<div

className="
flex
h-11
w-11
items-center
justify-center
rounded-full
border
border-secondary-foreground/15
bg-secondary-foreground/5
"

>

<Sparkles

className="
h-5
w-5
text-gold-muted
"

/>


</div>







<div>


<h3

className="
mt-1
text-lg
font-bold
"

>

Viaja con confianza

</h3>







<p

className="
mt-2
text-sm
leading-6
text-secondary-foreground/70
"

>

Disfruta de asistencia local, transporte privado y una experiencia organizada según tus necesidades.

</p>




</div>


</div>





</div>









<a

href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(

"Hola Moroccan Trip, quiero planificar mi viaje a Marruecos."

)}`}

target="_blank"

rel="noopener noreferrer"

className="
mt-5
inline-flex
w-full
items-center
justify-between
rounded-xl
bg-primary
px-5
py-4
font-bold
text-primary-foreground
transition
hover:bg-primary-hover
"

>


<span

className="
flex
items-center
gap-3
"

>


<MessageCircle

className="
h-5
w-5
"

/>


Empezar por WhatsApp


</span>




<ArrowUpRight

className="
h-5
w-5
"

/>



</a>





</aside>








</div>









{/* SUPPORTING SEO CONTENT */}





<div

className="
mx-auto
mt-12
max-w-4xl
border-t
border-border
pt-10
"

>



<div

className="
grid
gap-10
md:grid-cols-2
"

>







{/* LEFT */}



<div>


<p

className="
text-sm
font-bold
uppercase
tracking-[0.2em]
text-primary
"

>

Planifica tu viaje a Marruecos

</p>







<h2

className="
mt-3
text-2xl
font-bold
text-heading
sm:text-3xl
"

>

Cuéntanos qué experiencia en Marruecos tienes en mente

</h2>







<p

className="
mt-4
leading-7
text-text-secondary
"

>

Ya sea que estés pensando en un tour privado por Marruecos, un viaje al desierto del Sahara, una excursión desde Marrakech o un itinerario personalizado, nuestro equipo local puede ayudarte a organizar un viaje adaptado a tus fechas, intereses y estilo de viaje.

</p>







<p

className="
mt-4
leading-7
text-text-secondary
"

>

Explora nuestros{" "}


<Link

href="/es/tours"

className="
font-semibold
text-primary
hover:underline
"

>

tours por Marruecos

</Link>


, descubre nuestras{" "}


<Link

href="/es/excursiones"

className="
font-semibold
text-primary
hover:underline
"

>

excursiones

</Link>


, o cuéntanos tus ideas para crear una experiencia personalizada.

</p>



</div>









{/* RIGHT */}



<div>


<p

className="
text-sm
font-bold
uppercase
tracking-[0.2em]
text-primary
"

>

Antes de contactar

</p>







<h2

className="
mt-3
text-2xl
font-bold
text-heading
sm:text-3xl
"

>

Qué incluir en tu mensaje

</h2>







<p

className="
mt-4
leading-7
text-text-secondary
"

>

Si es posible, incluye tus fechas de viaje, número de viajeros, ciudad de llegada, destinos preferidos, duración del viaje y cualquier solicitud especial.

</p>







<p

className="
mt-4
leading-7
text-text-secondary
"

>

Si tus planes todavía son flexibles, simplemente dinos qué te gustaría descubrir en Marruecos y te ayudaremos a encontrar las mejores opciones.

</p>


</div>






</div>



</div>








</section>


</section>


</>

  );

}