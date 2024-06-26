import Image from "next/image"

export default function animeLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return(

    <section>
    <main className=" bg-center  bg-cover bg-gradient-to-br from-slate-400 via-slate-600 to-slate-800 items-center justify-center mx-5 px-5 py-2 my-3">
    
      {/* <p>It's a layout</p> */}
      {children}
      </main>
      </section>
    )
  }