import Image from "next/image";
import Link from "next/link";


const destinations = [
  {
    city: "Marrakech",
    tours: 13,
    image: "/images/marrakech.webp",
    description:
      "Sahara adventures & Atlas Mountains journeys",
    href: "/tours/from-marrakech",
  },

  {
    city: "Casablanca",
    tours: 10,
    image: "/images/Casablanca.webp",
    description:
      "Atlantic coast & Morocco private journeys",
    href: "/tours/from-casablanca",
  },

  {
    city: "Fes",
    tours: 12,
    image: "/images/Fes.webp",
    description:
      "Imperial cities & cultural experiences",
    href: "/tours/from-fes",
  },

  {
    city: "Tangier",
    tours: 6,
    image: "/images/Tangier.webp",
    description:
      "Northern Morocco & Mediterranean escapes",
    href: "/tours/from-tangier",
  },
];



const extraDepartures = [
  {
    name: "Agadir",
    href: "/tours/from-agadir",
  },
  {
    name: "Errachidia",
    href: "/tours/from-errachidia",
  },
];



export default function DepartureCities() {


return (

<section
className="
bg-[hsl(var(--background))]
"
>


<div
className="
mx-auto
max-w-7xl
px-5
py-20

sm:px-8
lg:px-10
lg:py-24
"
>



{/* Heading */}

<div
className="
max-w-3xl
mb-14
"
>


<p
className="
mb-4
text-xs
font-bold
uppercase
tracking-[0.28em]
text-[hsl(var(--primary))]
"
>
Start Your Journey
</p>



<h2
className="
font-[family-name:var(--font-cormorant)]
text-5xl
font-semibold
leading-tight
tracking-tight
text-[hsl(var(--heading))]

sm:text-6xl
"
>
Explore Morocco From
<span
className="
text-[hsl(var(--primary))]
"
>
 Your Departure City
</span>
</h2>



<p
className="
mt-5
max-w-2xl
text-base
leading-7
text-[hsl(var(--text-secondary))]
"
>
Choose your starting point and discover private Morocco tours
created around your travel style and interests.
</p>


</div>





{/* Cards */}

<div
className="
grid
gap-6

sm:grid-cols-2
lg:grid-cols-4
"
>


{
destinations.map((destination)=>(


<Link
key={destination.city}
href={destination.href}

className="
group
relative
h-[410px]
overflow-hidden
rounded-3xl

transition-all
duration-500

hover:-translate-y-1
hover:shadow-xl
"

>


<Image

src={destination.image}

alt={`${destination.city} Morocco tours`}

fill

sizes="
(max-width:768px) 100vw,
25vw
"

className="
object-cover
transition-transform
duration-700

group-hover:scale-110
"

/>



{/* Elegant Overlay */}

<div
className="
absolute
inset-0

bg-gradient-to-t
from-black/80
via-black/20
to-transparent
"
/>





{/* Tour badge */}

<div
className="
absolute
right-5
top-5

rounded-full

border
border-white/20

bg-black/20

px-4
py-2

backdrop-blur-md
"
>

<span
className="
text-[10px]
font-bold
uppercase
tracking-wider
text-white
"
>
{destination.tours} Tours
</span>


</div>





{/* Content */}

<div
className="
absolute
bottom-0
left-0
right-0

p-6
"
>


<p
className="
text-[10px]
font-bold
uppercase
tracking-[0.25em]
text-white/60
"
>
Starting Point
</p>



<h3
className="
mt-2

font-[family-name:var(--font-cormorant)]

text-5xl

font-semibold

leading-none

text-white
"
>
{destination.city}
</h3>




<p
className="
mt-4

text-sm

leading-5

text-white/75
"
>
{destination.description}
</p>




<div
className="
mt-5

text-xs

font-bold

uppercase

tracking-[0.18em]

text-[hsl(var(--gold-muted))]
"
>
Explore Tours →
</div>



</div>



</Link>


))
}


</div>






{/* Additional cities */}

<div
className="
mt-12

flex

justify-center

flex-wrap

gap-4
"
>


{
extraDepartures.map((city)=>(


<Link

key={city.name}

href={city.href}

className="
inline-flex

items-center

rounded-full

border

border-[hsl(var(--border))]

bg-[hsl(var(--card))]

px-7

py-3

text-sm

font-semibold

text-[hsl(var(--heading))]

transition-all

hover:border-[hsl(var(--primary))]

hover:text-[hsl(var(--primary))]
"

>

Tours From {city.name}

<span
className="
ml-2
text-[hsl(var(--primary))]
"
>
→
</span>


</Link>


))
}


</div>



</div>


</section>


);


}