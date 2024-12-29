import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addBackgroundVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useBackgroundVideo = (movieId) => {
  const dispatch = useDispatch();
  const backgroundVideo = useSelector((store) => store?.movie?.backgroundVideo);
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const trailers = json.results.filter((video) => video.type === "Trailer");
    const trailer = trailers.length ? trailers[0] : json.results[0];
    dispatch(addBackgroundVideo(trailer));
  };
  useEffect(() => {
    !backgroundVideo && getMovieVideos();
  }, []);
};
export default useBackgroundVideo;
