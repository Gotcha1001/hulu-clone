import { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

function MovieList(genreId: any) {
  const [movieList, setMovieList] = useState<any>([]);

  const elementRef = useRef(null);

  useEffect(() => {
    getMovieListByGenreId();
  }, []);

  const slideRight = (element: any) => {
    element.scrollLeft += 500;
  };

  const slideLeft = (element: any) => {
    element.scrollLeft -= 500;
  };

  const getMovieListByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId.genreId).then((resp: any) => {
      console.log("ID:", resp.data.results);
      setMovieList(resp.data.results);
    });
  };

  return (
    <div className="flex items-center">
      <IoChevronBackOutline
        onClick={() => slideLeft(elementRef.current)}
        className="text-[40px] text-white mb-[120px] bg-black p-2 cursor-pointer rounded-full z-10"
      />
      <div
        ref={elementRef}
        id="slider"
        className="w-full overflow-scroll scroll-smooth overflow-x-auto whitespace-nowrap scrollbar-hide mb-16 ml-[-20px] mr-[-20px] "
      >
        {movieList.map(
          (item: any, index: any) => index < 7 && <MovieCard movie={item} />
        )}
      </div>
      <IoChevronForwardOutline
        onClick={() => slideRight(elementRef.current)}
        className="text-[40px] mb-[120px] text-white bg-black p-2 cursor-pointer rounded-full z-10 "
      />
    </div>
  );
}

export default MovieList;
