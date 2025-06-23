import React, { useEffect, useState } from "react";
import GlobalApi from "../services/GlobalApi";

function Hero() {
  const Image_Base_Url = "https://image.tmdb.org/t/p/original";

  const [movieList, setMovieList] = useState<any>([]);

  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = () => {
    GlobalApi.getPopularMovies.then((resp: any) => {
      const result = resp.data.results;
      const randomNum = Math.floor(Math.random() * 10);
      setMovieList(result[randomNum]);
    });
  };

  return (
    <div>
      <div className="absolute h-[85vh] bg-gradient-to-t from-[#1e2126] via-transparent to-transparent w-full"></div>
      <div className="absolute mt-[400px] md:mt[350px] px-10 md:px-24">
        <h2 className="text-white text-[19px] lg:text-[27px]">
          Watch only on HULU
        </h2>
        <h2 className="lg:text-[47px] font-extrabold">
          {movieList.original_title}
        </h2>
        <div className="flex gap-5 mt-5">
          <button className="p-2 bg-white border-2 border-white rounded-lg text-black cursor-pointer hover:border-gray-500">
            PLAY
          </button>
          <button className="p-2 bg-transparent border-2 border-white rounded-lg text-white cursor-pointer">
            DETAILS
          </button>
        </div>
      </div>
      <img
        src={Image_Base_Url + movieList.backdrop_path}
        alt="image"
        width={2000}
        height={1080}
        className="h-[85vh] object-cover"
      />
    </div>
  );
}

export default Hero;
