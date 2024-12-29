import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMoviesResults: [],
    gptMoviesNames: [],
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMoviesResults: (state, action) => {
      const { moviesNames, moviesResults } = action.payload;
      state.gptMoviesNames = moviesNames;
      state.gptMoviesResults = moviesResults;
    },
    removeGptMoviesResults: (state) => {
      state.gptMoviesNames = [];
      state.gptMoviesResults = [];
    },
  },
});
export const { toggleGptSearch, removeGptMoviesResults, addGptMoviesResults } =
  gptSlice.actions;
export default gptSlice.reducer;
