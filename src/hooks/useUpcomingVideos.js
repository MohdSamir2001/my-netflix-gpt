import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addUpcomingVideo } from "../utils/movieSlice";
import { useEffect } from "react";
const useUpcomingVideos = () => {
  const dispatch = useDispatch();
  const upcomingVideo = useSelector((store) => store?.movie?.upcomingVideo);
  // Fetch Data TMDB API's Now Playing Movies And Update Store
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    const results = json?.results;
    dispatch(addUpcomingVideo(results));
  };
  useEffect(() => {
    !upcomingVideo && getUpcomingMovies();
  }, []);
};

export default useUpcomingVideos;
