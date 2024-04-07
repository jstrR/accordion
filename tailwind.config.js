import tailwindAnimate from "tailwindcss-animate";
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: ["prettier-plugin-tailwindcss", tailwindAnimate],
};
