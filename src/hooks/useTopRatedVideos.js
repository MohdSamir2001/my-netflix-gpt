import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTopRatedVideo } from "../utils/movieSlice";
import { useEffect } from "react";
const useTopRatedVideos = () => {
  const dispatch = useDispatch();
  const topRatedVideo = useSelector((store) => store?.movie?.topRatedVideo);
  // Fetch Data TMDB API's Now Playing Movies And Update Store
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    const results = json?.results;
    dispatch(addTopRatedVideo(results));
  };
  useEffect(() => {
    !topRatedVideo && getTopRatedMovies();
  }, []);
};

export default useTopRatedVideos;
