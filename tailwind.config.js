module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        noto: [ "Noto Sans" ],
        syne: [ "Syne" ],
        druk: [ "Druk" ]
      },
      colors: {
        yellow: {
          "200": "#FFF1BF",
          "300": "#FFEA79",
          DEFAULT: "#FFD600",
          "600": "#E6B300"
        },
      }
    },
  },
  variants: {
    extend: {
      textDecoration: ['active']
  },
},
  plugins: [],
}
