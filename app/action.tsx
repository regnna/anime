"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import Anime from "@/components/anime";

export  const fetchAnime = async (page: number) => {
    const response=await fetch(`https://shikimori.one/api/animes?page=${page}&limit=80&order=popularity`);

    const data=await response.json();

    // console.log(data);

    return data.map((item: AnimeProp, index: number) => (
        <AnimeCard key={item.id} anime={item} index={index} />
      ))

};

export const fetchanimes= async (id: number)=>{
    const response= await fetch(`https://shikimori.one/api/animes/${id}`);
    const data=await response.json();
    // console.log(data);

    return (
      // < className="items-center justify-center">
      <Anime index={id} anime={data}  />
      
    )
}