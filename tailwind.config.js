module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'green-logo1': '#4E7D2F',
        'green-logo2': '#68A63E',
        'green-logo3': '#A2CD57',
        'green-logo4': '#77BB49',
        'green-logo': '#68A63E',
      }
    },
  },
  corePlugins: {
    // aspectRatio: false,
  },
  plugins: [
    // require("flowbite/plugin"),
    // require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
};
