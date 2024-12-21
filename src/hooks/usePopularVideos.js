import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addPopularVideo } from "../utils/movieSlice";
import { useEffect } from "react";
const usePopularVideos = () => {
  const dispatch = useDispatch();
  // Fetch Data TMDB API's Now Playing Movies And Update Store
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    const results = json?.results;
    dispatch(addPopularVideo(results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularVideos;