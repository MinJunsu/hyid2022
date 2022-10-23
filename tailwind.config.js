/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      cursor: {
        works: "url(/dummy/images/mouse.png), works",
      },
    },
  },
  plugins: [
    require("tailwindcss-writing-mode")({
      variants: ["responsive", "hover"],
    }),
  ],
};
