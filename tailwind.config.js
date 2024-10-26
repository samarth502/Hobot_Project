/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins font here
      },
      screens: {
        xs: "375px",
      // => @media (min-width: 640px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }
        custom820: '820px',
        custom414: '414px',
        custom430: '430px',
        custom412: '412px',
        custom912: '912px',
        custom540: '540px',
        custom344: '344px',
        custom720: '720px',



        

        custom360: '360px',
        

      },
    },
  },
  plugins: [],
}

