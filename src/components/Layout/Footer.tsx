import Link from "next/link";


const footerLinks = {
  explore: [
    {
      name: "Morocco Tours",
      href: "/tours",
    },
    {
      name: "Day Trips",
      href: "/day-trips",
    },
    {
      name: "Custom Tours",
      href: "/custom-tour",
    },
    {
      name: "Special Offers",
      href: "/special-offers",
    },
  ],


  company: [
    {
      name: "About Us",
      href: "/about-us",
    },
    {
      name: "Travel Blog",
      href: "/blog",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ],


  departures: [
    {
      name: "Marrakech",
      href: "/tours/from-marrakech",
    },
    {
      name: "Casablanca",
      href: "/tours/from-casablanca",
    },
    {
      name: "Fes",
      href: "/tours/from-fes",
    },
    {
      name: "Tangier",
      href: "/tours/from-tangier",
    },
    {
      name: "Agadir",
      href: "/tours/from-agadir",
    },
    {
      name: "Errachidia",
      href: "/tours/from-errachidia",
    },
  ],
};



export default function Footer(){


return (

<footer
className="
bg-[hsl(var(--footer))]
text-white
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
lg:py-20
"
>



{/* Main Footer */}

<div
className="
grid
gap-12

lg:grid-cols-5
"
>



{/* Brand */}

<div
className="
lg:col-span-2
"
>


<Link
href="/"
className="
font-[family-name:var(--font-cormorant)]

text-4xl

font-semibold
"
>

Moroccan
<span
className="
text-[hsl(var(--primary))]
"
>
Trip
</span>

</Link>



<p
className="
mt-6

max-w-sm

text-sm

leading-7

text-white/65
"
>
Discover Morocco through private tours, Sahara adventures
and authentic travel experiences created by local experts.
</p>



{/* Trust */}

<div
className="
mt-6
flex
items-center
gap-3
"
>


<div
className="
rounded-full

border

border-white/20

px-4

py-2
"
>

<span
className="
text-xs
font-semibold
text-white/80
"
>
★★★★★
</span>

</div>



<p
className="
text-xs
text-white/60
"
>
Tripadvisor Rated Experience
</p>


</div>


</div>





{/* Explore */}

<div>


<h3
className="
mb-5

text-xs

font-bold

uppercase

tracking-[0.25em]

text-[hsl(var(--gold-muted))]
"
>
Explore
</h3>



<ul
className="
space-y-3
"
>

{
footerLinks.explore.map((item)=>(
<li key={item.name}>

<Link
href={item.href}
className="
text-sm

text-white/70

transition

hover:text-white
"
>
{item.name}
</Link>

</li>
))
}

</ul>


</div>






{/* Company */}

<div>


<h3
className="
mb-5

text-xs

font-bold

uppercase

tracking-[0.25em]

text-[hsl(var(--gold-muted))]
"
>
Company
</h3>



<ul
className="
space-y-3
"
>

{
footerLinks.company.map((item)=>(
<li key={item.name}>

<Link
href={item.href}
className="
text-sm

text-white/70

transition

hover:text-white
"
>
{item.name}
</Link>

</li>
))
}

</ul>


</div>






{/* Departures */}

<div>


<h3
className="
mb-5

text-xs

font-bold

uppercase

tracking-[0.25em]

text-[hsl(var(--gold-muted))]
"
>
Start From
</h3>



<ul
className="
space-y-3
"
>

{
footerLinks.departures.map((item)=>(
<li key={item.name}>

<Link
href={item.href}
className="
text-sm

text-white/70

transition

hover:text-white
"
>
{item.name}
</Link>

</li>
))
}

</ul>


</div>




</div>







{/* CTA */}

<div
className="
mt-16

rounded-3xl

border

border-white/10

bg-white/5

p-8

flex

flex-col

gap-6


sm:flex-row

sm:items-center

sm:justify-between
"
>


<div>

<h3
className="
font-[family-name:var(--font-cormorant)]

text-3xl

font-semibold
"
>
Ready to explore Morocco?
</h3>


<p
className="
mt-2

text-sm

text-white/60
"
>
Create your personalized Morocco journey with our local team.
</p>


</div>



<Link
href="/contact"

className="
inline-flex

rounded-full

bg-[hsl(var(--primary))]

px-7

py-3

text-sm

font-semibold

transition

hover:bg-[hsl(var(--primary-hover))]
"
>
Plan Your Trip →
</Link>


</div>








{/* Bottom */}

<div
className="
mt-10

border-t

border-white/10

pt-6

flex

flex-col

gap-4

text-xs

text-white/50


sm:flex-row

sm:items-center

sm:justify-between
"
>


<p>
© {new Date().getFullYear()} MoroccanTrip. All rights reserved.
</p>



<div
className="
flex

gap-5
"
>

<Link href="/privacy-policy">
Privacy Policy
</Link>

<Link href="/terms">
Terms
</Link>

</div>


</div>



</div>


</footer>

);

}