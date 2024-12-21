module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add all the file extensions used in your project
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
  variants: {
    extend: {
      scrollbar: ["hover", "dark"],
    },
  },
};
