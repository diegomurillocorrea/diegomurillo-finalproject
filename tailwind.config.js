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
          DEFAULT: "#FFD600"
        }
      }
    },
  },
  variants: {
    extend: {
  },
},
  plugins: [],
}
