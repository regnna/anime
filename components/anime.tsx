// import Image from "next/image";
// import {motion} from "framer-motion";
// import MotionDiv from "./MotionDiv";

import Image from "next/image";
// import MotionDiv from "./MotionDiv";
import { Calendar, SquareKanban } from 'lucide-react';

export interface AnimeeProp {
  id: string;
  name: string;
  english: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
  studios:[string];
  description: string;
  released_on: string;
  rating: string;
  japanese:string;
}

interface Prop {
  anime: AnimeeProp;
  index: number;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function Anime({ anime,index }: Prop) {
  return (
    // <MotionDiv
    //   variants={variants}
    //   initial="hidden"
    //   animate="visible"
    //   transition={{
    //     delay: index*0.25,
    //     ease: "easeInOut",
    //     duration: 0.5,
    //   }}
    //   className="max-w-sm rounded relative w-full"
    // >
    // <div className="items-center justify-end ">
      
      <div>
        <div className="flex justify-between items-center gap-1 mb-5 mt-[-10]">
            <div className="flex flex-col gap-7 my-[-10]">
                <div>
                        <h2 className="font-bold -tracking-tighter text-white text-xl line-clamp-1 w-full">
                        {anime.english} 
                            </h2>
                        <h4 className="font-light">({anime.name},{anime.japanese})</h4>
                 </div>
            <div>
                    <p className="max-w-md">{anime.description}</p>

          </div>
          
            {/* anime.description_html */}
          

            </div>
          
         
          <div className="py-1 px-2 bg-[#161921]/10 rounded-2xl ">
            <div>
          <Image

                src={`https://shikimori.one/system/animes/original/${anime.id}.jpg?`}
                //   src={`https://shikimori.one${anime.image.original}`}
                alt={anime.english}
                height={350}
                width={350}
                className="rounded-xl  "
                />
          </div>
            {/* <p className="text-white text-sm font-bold capitalize">
              {anime.kind}
            </p> */}
          </div>
          
        </div>

        <div className="relative flex flex-row gap-10 justify-between">
        

        <div className="flex gap-4 items-center ">
        
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="/episodes.svg"
              alt="episodes"
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="text-base text-white font-bold">
              {anime.episodes || anime.episodes_aired}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="/star.svg"
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-base font-bold text-[#FFAD49]">{anime.score}</p>
          </div>

          <div className="flex flex-row gap-2 items-center">
          <Image
              src={`https://shikimori.one/${anime.studios[0]["image"]}`}
              alt="star"
              width={25}
              height={25}
              className="object-contain"
            />
            {/* <SquareKanban /> */}
                {anime.studios[0]['name']}
            </div>
           
      </div>
      
                <div className="flex flex-row gap-5 ">
                    <div className="flex flex-row gap-2 items-center">
                        <h1 className="font-semibold">{anime.rating}</h1>
                        {/* <h3 className="font-light">ratted</h3> */}
                    </div>
          <div className="flex flex-row gap-2 items-center">
            <Calendar size={18}/>
                    <h1>{anime.released_on}</h1>
                    </div>
                    <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-white text-sm font-bold capitalize">
              {anime.kind}
            </p>

          </div>
                </div>
        </div>
      </div>
    
    
  );
}

export default Anime;
