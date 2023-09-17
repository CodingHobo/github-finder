module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [ require('daisyui') ],

  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      {
        mytheme: {

"primary": "#ba9425",

"secondary": "#53ed58",

"accent": "#63aac6",

"neutral": "#1c1e26",

"base-100": "#343755",

"info": "#5fa7ce",

"success": "#1dcda7",

"warning": "#e99f2f",

"error": "#e8688f",
        },
      },
    ],
  },
}


