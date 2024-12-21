import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    backgroundVideo: null,
    popularVideo: null,
    topRatedVideo: null,
    upcomingVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addBackgroundVideo: (state, action) => {
      state.backgroundVideo = action.payload;
    },
    addPopularVideo: (state, action) => {
      state.popularVideo = action.payload;
    },
    addTopRatedVideo: (state, action) => {
      state.topRatedVideo = action.payload;
    },
    addUpcomingVideo: (state, action) => {
      state.upcomingVideo = action.payload;
    },
  },
});
export const {
  addNowPlayingMovies,
  addTopRatedVideo,
  addUpcomingVideo,
  addPopularVideo,
  addBackgroundVideo,
} = movieSlice.actions;
export default movieSlice.reducer;
