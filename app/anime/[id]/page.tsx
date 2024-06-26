import { fetchanimes } from "@/app/action"
import Image from "next/image"
import Link from "next/link"

export default async function Page({ params }: { params: { id: number } }) {
    // return <div>My Post: {params.slug}</div>
    // console.log(params.id)
    const data= await fetchanimes(params.id)
    // console.log(data)

  return (

    // <section className="grid lg:gridcols-3 sm:grid-cols-2 grid-cols-1 gap-10">
     
    //  < className="flex-1 flex-col gap-10">
<div >
    <Link href="/">

<Image
          src="/logo.svg"
          alt="logo"
          width={90}
          height={76}
          className="object-contain "
        />
        </Link>
{data}
</div>
     
 
  )
  }