import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import LoadMore from "../components/LoadMore";
// import { data } from "./_data";
import { fetchAnime } from "./action";
import Hero from "@/components/Hero";

async function Home() {
  const data=await fetchAnime(1);
  return (
    <div>
                <Hero />

    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold tracking-tight">Explore Anime</h2>

      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {/* {data.map((item: AnimeProp, index: number) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))} */}
        {data}
      </section>
      <LoadMore />
    </main>
    </div>
  );
}

export default Home;
