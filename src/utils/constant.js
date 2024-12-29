export const LOGO_URL =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const BACKGROUND_IMAGE_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/158a0e2a-cca4-40f5-86b8-11ea2a281b06/web_tall_panel/IN-en-20241202-TRIFECTA-perspective_052fb757-35ce-4655-946e-3c9ffac95fd0_small.jpg";
export const USER_AVATAR_URL =
  "https://th.bing.com/th?q=Netflix+User+Face+Icon.+Download&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247";

export const OPENAI_GPT_KEY = process.env.REACT_APP_OPENAI_KEY;

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMAGE_URL = "https://image.tmdb.org/t/p/w780/";

export const SUPPORTED_LANGUAGES = [
  {
    identifier: "en",
    name: "English",
  },
  {
    identifier: "hi",
    name: "Hindi",
  },
];
