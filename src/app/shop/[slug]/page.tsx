import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { shopProducts } from "@/data/shop";



type Props = {
  params: Promise<{
    slug: string;
  }>;
};





export async function generateMetadata({ params }: Props) {

  const { slug } = await params;


  const product = shopProducts.find(
    (item) => item.slug === slug
  );


  if (!product) {
    return {};
  }


  return {

    title: product.seo.title,

    description: product.seo.description,

    keywords: product.seo.keywords,


    openGraph: {

      title: product.seo.title,

      description: product.seo.description,

      images:[
        product.image
      ]

    }

  };

}






export default async function ShopProductPage({
  params
}: Props) {


  const { slug } = await params;



  const product = shopProducts.find(
    (item)=> item.slug === slug
  );



  if(!product){

    notFound();

  }
  const relatedProducts =
  product.relatedProducts
    ?.map((slug) =>
      shopProducts.find(
        (item) => item.slug === slug
      )
    )
    .filter(Boolean);






  const productSchema = {

    "@context":"https://schema.org",

    "@type":"Thing",

    name:product.title,

    description:product.description,


    image:[
      product.image,
      ...product.gallery
    ],


    category:product.category,


    material:product.material,


    countryOfOrigin:{
      "@type":"Country",
      name:"Morocco"
    },


    brand:{
      "@type":"Brand",
      name:"Moroccan Trip"
    },




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
__html:JSON.stringify(productSchema)
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


<Link href="/">
Home
</Link>


<span className="mx-2">
/
</span>


<Link href="/shop">
Shop
</Link>


<span className="mx-2">
/
</span>


<span>
{product.title}
</span>


</nav>


</div>








{/* Product Hero */}


<section
className="
mx-auto
max-w-7xl
px-5
py-12
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





{/* Gallery */}


<div>


<div
className="
relative
aspect-square
overflow-hidden
rounded-3xl
"
>


<Image

src={product.image}

alt={product.title}

fill

priority

className="
object-cover
"

/>


</div>





<div
className="
mt-5
grid
grid-cols-3
gap-4
"
>


{product.gallery.map((image)=>(


<div

key={image}

className="
relative
aspect-square
overflow-hidden
rounded-xl
"

>


<Image

src={image}

alt={product.title}

fill

className="
object-cover
"

/>


</div>


))}



</div>


</div>









{/* Information */}


<div>


{product.badge && (

<span

className="
inline-flex
rounded-full
bg-[hsl(var(--primary))]
px-4
py-2
text-xs
font-bold
text-white
"

>

{product.badge}

</span>

)}




<h1

className="
mt-5
text-4xl
font-semibold
tracking-tight
text-[hsl(var(--heading))]
sm:text-5xl
"

>

{product.title}

</h1>






<p

className="
mt-6
text-lg
leading-8
text-[hsl(var(--text-secondary))]
"

>

{product.shortDescription}

</p>








<a

href={`https://wa.me/212607747056?text=${encodeURIComponent(
  `Hello Moroccan Trip, I am interested in ${product.title}`
)}`}

target="_blank"
rel="noopener noreferrer"

className="
mt-8
inline-flex
rounded-full
bg-green-600
px-8
py-4
text-sm
font-bold
text-white
"

>

Contact us on WhatsApp

</a>



</div>




</div>


</section>









{/* Description */}



<section

className="
mx-auto
max-w-5xl
px-5
py-10
sm:px-8
"

>


<h2

className="
text-3xl
font-semibold
text-[hsl(var(--heading))]
"

>

About this Moroccan Fossil

</h2>



<p

className="
mt-5
leading-8
text-[hsl(var(--text-secondary))]
"

>

{product.description}

</p>



</section>









{/* Details */}


<section

className="
mx-auto
max-w-7xl
px-5
py-12
sm:px-8
lg:px-10
"

>


<div

className="
grid
gap-8
md:grid-cols-2
"

>



<div

className="
rounded-3xl
border
border-[hsl(var(--border))]
p-8
"

>


<h2
className="
text-2xl
font-semibold
"
>

Fossil Details

</h2>



<ul

className="
mt-5
space-y-3
text-sm
"

>

<li>
<strong>Origin:</strong> {product.origin}
</li>


<li>
<strong>Period:</strong> {product.period}
</li>


<li>
<strong>Material:</strong> {product.material}
</li>


<li>
<strong>Dimensions:</strong> {product.dimensions}
</li>


</ul>


</div>









<div

className="
rounded-3xl
border
border-[hsl(var(--border))]
p-8
"

>


<h2
className="
text-2xl
font-semibold
"
>

Highlights

</h2>



<ul

className="
mt-5
space-y-3
list-disc
pl-5
"

>


{product.highlights.map((item)=>(

<li key={item}>
{item}
</li>

))}


</ul>


</div>



</div>



</section>









{/* Authenticity */}



<section

className="
mx-auto
max-w-5xl
px-5
py-10
sm:px-8
"

>


<div

className="
rounded-3xl
bg-[hsl(var(--surface-soft))]
p-8
"

>


<h2

className="
text-2xl
font-semibold
"

>

Authenticity Guarantee

</h2>



<p

className="
mt-4
leading-8
"

>

{product.authenticity}

</p>



</div>


</section>









{/* FAQ */}



<section

className="
mx-auto
max-w-5xl
px-5
py-12
sm:px-8
"

>


<h2

className="
text-3xl
font-semibold
"

>

Frequently Asked Questions

</h2>



<div className="mt-8 space-y-6">


<div>

<h3 className="font-semibold">

Are Moroccan trilobite fossils authentic?

</h3>

<p className="mt-2 text-sm leading-7">

Yes, our fossils are selected from Moroccan fossil regions and information is provided before purchase.

</p>

</div>




<div>

<h3 className="font-semibold">

Can you ship Moroccan fossils worldwide?

</h3>

<p className="mt-2 text-sm leading-7">

Yes, contact us to check shipping availability and delivery options.

</p>

</div>




<div>

<h3 className="font-semibold">

How can I request more details about a fossil?

</h3>

<p className="mt-2 text-sm leading-7">

You can contact Moroccan Trip through WhatsApp for additional photos and information.

</p>

</div>


</div>


</section>




{/* Related Products */}

{relatedProducts && relatedProducts.length > 0 && (

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
flex
items-end
justify-between
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

Recommended Products

</p>


<h2

className="
mt-3
text-3xl
font-semibold
tracking-tight
text-[hsl(var(--heading))]
"

>

Explore More Moroccan Products

</h2>


</div>


</div>





<div

className="
mt-8
grid
gap-8
sm:grid-cols-2
lg:grid-cols-3
"

>


{relatedProducts.map((item)=>(


<article

key={item!.id}

className="
group
overflow-hidden
rounded-3xl
border
border-[hsl(var(--border))]
bg-[hsl(var(--card))]
transition-all
duration-300
hover:-translate-y-1
hover:shadow-xl
"

>



{/* Image */}

<div

className="
relative
aspect-[4/3]
overflow-hidden
"

>


<Image

src={item!.image}

alt={item!.title}

fill

sizes="
(max-width:768px)100vw,
(max-width:1200px)50vw,
33vw
"

className="
object-cover
transition-transform
duration-700
group-hover:scale-105
"

/>


<div

className="
absolute
inset-0
bg-gradient-to-t
from-black/40
to-transparent
"

/>


</div>





<div

className="
p-6
"

>


<p

className="
text-xs
font-bold
uppercase
tracking-[0.15em]
text-[hsl(var(--primary))]
"

>

{item!.category}

</p>




<h3

className="
mt-3
text-xl
font-semibold
leading-tight
text-[hsl(var(--heading))]
"

>

{item!.title}

</h3>





<p

className="
mt-3
text-sm
leading-7
text-[hsl(var(--text-secondary))]
"

>

{item!.shortDescription}

</p>




<Link

href={`/shop/${item!.slug}`}

className="
mt-5
inline-flex
items-center
font-bold
text-sm
text-[hsl(var(--primary))]
"

>

View Product →

</Link>



</div>



</article>


))}



</div>


</section>


)}
</main>


  );

}