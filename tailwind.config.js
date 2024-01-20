/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': "450px",
        'tablet': '768px',  
        'laptop': '1024px',
        'desktop': '1920px',
      },
      colors: {
        transparent: "transparent",
        navItem: "#ffffff80",
        tPrimary: "#fff",
        tSecondary: "#aaa6c3",
        tertiary: "#151030",
      },
      gridTemplateColumns : {
        autofit: "repeat(auto-fit, minmax(270px, 1fr));"
      },
      fontFamily: {
        elianto: ["elianto"],
        tahoma: ["tahoma"],
        sourceSansPro: ["sourceSansPro"],
        roboto: ["roboto"],
        poppins: ["poppins"],
        nunito: ["nunito"],
        monserrat: ["monserrat"],
        inter: ["inter"],
        manrope: ["manrope"],
        drGlitch: ["drGlitch"]
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      backgroundImage: {
        landingBG: "url('/src/Assets/herobg.png')",
      },
    },
  },
  plugins: [require('tailwind-scrollbar'),],
}