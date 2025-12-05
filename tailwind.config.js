/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   extend: {
extend: {
  keyframes: {
    sweep: {
      "0%": { transform: "translateX(-100%)" },
      "100%": { transform: "translateX(300%)" },
    },
  },
  animation: {
    sweep: "sweep 2s linear infinite",
  },
}




}

  },
  plugins: [],
};
