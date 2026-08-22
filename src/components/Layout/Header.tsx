"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


const tripadvisorUrl =
  "https://www.tripadvisor.fr/Attraction_Review-g293734-d33115204-Reviews-Limitless_morocco_tours-Marrakech_Marrakech_Safi.html";


const navItems = [
  {
    label: "Tours",
    dropdown: [
      ["Tours From Marrakech", "/tours/from-marrakech"],
      ["Tours From Fes", "/tours/from-fes"],
      ["Tours From Casablanca", "/tours/from-casablanca"],
      ["Tours From Tangier", "/tours/from-tangier"],
      ["Tours From Agadir", "/tours/from-agadir"],
      ["Tours From Errachidia", "/tours/from-errachidia"],
    ],
  },

  {
    label: "Day Trips",
    href: "/day-trips",
  },

  {
    label: "Custom Tours",
    href: "/custom-tour",
  },

  {
    label: "Special Offers",
    href: "/special-offers",
  },

  {
    label: "Shop",
    href: "/shop",
  },

  {
    label: "About Us",
    href: "/about-us",
  },

  {
    label: "Blog",
    href: "/blog",
  },

  {
    label: "Contact",
    href: "/contact",
  },
];



function Arrow(){

return (

<svg
width="15"
height="15"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
strokeWidth="2"
>

<path d="M5 12h14"/>
<path d="m13 6 6 6-6 6"/>

</svg>

)

}




function Chevron(){

return (

<svg
width="14"
height="14"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
strokeWidth="2"
>

<path d="m6 9 6 6 6-6"/>

</svg>

)

}




export default function Header(){


const pathname = usePathname();


const [mobileOpen,setMobileOpen] =
useState(false);


const [dropdown,setDropdown] =
useState<string|null>(null);



const active=(href:string)=>{

return pathname === href ||
pathname.startsWith(href + "/");

};



return (

<header
className="
sticky
top-0
z-50
w-full
"
>


{/* ================= TOP BAR ================= */}

<div
  className="
  hidden
  border-b
  border-[hsl(var(--border))]
  bg-[hsl(var(--background))]
  lg:block
  "
>

  <div
    className="
    flex
    h-10
    items-center
    justify-center
    "
  >

    <div
      className="
      flex
      items-center
      gap-4
      text-xs
      font-semibold
      "
    >


      {/* Tripadvisor */}

      <a
        href={tripadvisorUrl}
        target="_blank"
        className="
        flex
        items-center
        gap-2
        text-[hsl(var(--heading))]
        transition-opacity
        hover:opacity-70
        "
      >

        <Image
          src="/images/home/TripAdvisor_Logo.svg"
          alt="Tripadvisor"
          width={70}
          height={22}
        />

        <span>
          Rated Experience
        </span>

      </a>




      {/* Divider */}

      <span
        className="
        h-4
        w-px
        bg-[hsl(var(--border))]
        "
      />




      {/* Email */}

      <a
        href="mailto:contact@moroccan-trip.com"
        className="
        text-[hsl(var(--text-secondary))]
        hover:text-[hsl(var(--primary))]
        "
      >

        ✉ contact@moroccan-trip.com

      </a>





      {/* Divider */}

      <span
        className="
        h-4
        w-px
        bg-[hsl(var(--border))]
        "
      />





      {/* WhatsApp */}

      <a
        href="https://wa.me/212607747056"
        className="
        text-[hsl(var(--text-secondary))]
        hover:text-[hsl(var(--primary))]
        "
      >

        WhatsApp +212607747056

      </a>



    </div>


  </div>

</div>






{/* ================= MAIN HEADER ================= */}


<div
className="
border-b
border-[hsl(var(--border))]
bg-[hsl(var(--background)/0.96)]
backdrop-blur-xl
"
>


<div
className="
mx-auto
flex
h-[82px]
max-w-[1280px]
items-center
justify-between
px-5
lg:px-6
"
>



{/* LOGO */}

<Link href="/">

<Image

src="/images/home/Moroccan-Trip-Logo.svg"

alt="MoroccanTrip"

width={170}

height={55}

priority

/>

</Link>






{/* DESKTOP NAV */}


<nav
className="
hidden
items-center
gap-1
lg:flex
"
>


{
navItems.map((item)=>


<div
key={item.label}
className="relative"
onMouseEnter={()=>
item.dropdown &&
setDropdown(item.label)
}
onMouseLeave={()=>
item.dropdown &&
setDropdown(null)
}
>


{
item.dropdown ?


<button

className="
flex
items-center
gap-2
px-3
py-6
text-sm
font-semibold
text-[hsl(var(--heading))]
hover:text-[hsl(var(--primary))]
"

>

{item.label}

<Chevron/>

</button>


:


<Link

href={item.href!}

className={`
px-3
py-6
text-sm
font-semibold

${
active(item.href!)
?
"text-[hsl(var(--primary))]"
:
"text-[hsl(var(--heading))]"
}
`}

>

{item.label}

</Link>

}





{
dropdown===item.label && item.dropdown &&

<div
className="
absolute
left-1/2
top-full
w-[620px]
-translate-x-1/2
"
>


<div
className="
grid
grid-cols-2
gap-2
rounded-xl
border
border-[hsl(var(--border))]
bg-[hsl(var(--card))]
p-4
shadow-xl
"
>


{
item.dropdown.map(([label,href])=>(


<Link

key={href}

href={href}

className="
rounded-lg
px-4
py-3
text-sm
font-medium
text-[hsl(var(--text-main))]
hover:bg-[hsl(var(--muted))]
hover:text-[hsl(var(--primary))]
"

>

{label}

</Link>


))

}


</div>


</div>


}



</div>


)

}


</nav>







{/* CTA */}


<Link

href="/contact"

className="
hidden
items-center
gap-2
rounded-full
bg-[hsl(var(--primary))]
px-6
py-3
text-sm
font-bold
text-white
hover:bg-[hsl(var(--primary-hover))]
lg:flex
"

>

Plan Your Trip

<Arrow/>

</Link>






{/* MOBILE */}


<div
className="
flex
items-center
gap-4
lg:hidden
"
>


<a
href={tripadvisorUrl}
target="_blank"
>

<Image

src="/images/home/TripAdvisor_Logo.svg"

alt="Tripadvisor"

width={75}

height={24}

/>

</a>




<button

onClick={()=>setMobileOpen(!mobileOpen)}

className="
flex
h-10
w-10
items-center
justify-center
rounded-full
border
border-[hsl(var(--border))]
"

>

☰

</button>


</div>



</div>


</div>






{/* MOBILE MENU */}


{

mobileOpen &&

<div
className="
border-b
border-[hsl(var(--border))]
bg-[hsl(var(--background))]
px-5
py-5
lg:hidden
"
>


{
navItems.map((item)=>

<div
key={item.label}
className="
border-b
border-[hsl(var(--border))]
py-3
"
>


{
item.href ?

<Link
href={item.href}
className="font-semibold"
>

{item.label}

</Link>


:

<p className="font-semibold">

{item.label}

</p>

}


</div>

)

}



<Link

href="/contact"

className="
mt-5
flex
justify-center
rounded-full
bg-[hsl(var(--primary))]
py-3
font-bold
text-white
"

>

Plan Your Trip

</Link>


</div>

}


</header>

);

}