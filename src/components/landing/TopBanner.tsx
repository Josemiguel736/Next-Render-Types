import Link from "next/link"

export const TopBanner = () =>{
    return (
        <section className="bg-[#03363e] text-center text-amber-50 p-4">
<ul className="flex justify-center gap-5 ">
    <li>
        CX Trends 2025
    </li>
    <li>
        Unlock growth with costumer service
    </li>
     <li>
       <Link href={"/"} className="underline">Get the report </Link>
    </li>
</ul>
        </section>
    )
}