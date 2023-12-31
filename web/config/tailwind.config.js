/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');
module.exports = withMT({
  content: ['src/**/*.{js,jsx,ts,tsx}'
],
  theme: {
    extend: {
      colors: { almostBlack: '#242424',
        lemonLime: '#E6FF00', /* safety green */
        onyx: '##111111', /* almost black */
        nero: '#252525' /* dark gray */,
        dolphin: '#7e7f9a' /* purple gray */,
        turquoise: '#40ebd4' /* turquoise */,
        oriolesOrange: '#fe4e1c' /* red orange */,
        sunsetOrange: '#ff6054' /* coral */,
        chartreuse: '#80ff01' /* green */,
        tamarillo: '#911412' /* deep red */,
        eerieBlack: '#1e1e1e' /* almost black */,
        jet: '#353535' /* lighter - almost black rollover */,
    },
    },
    fontFamily: {
      modern: ['Abril Fatface', cursive],
      sanSerif: ['Inter', sans-serif],
    },
  },
  plugins: [],
});

