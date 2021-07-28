module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      caveat: ['"Caveat", cursive'],
      satisfy: ['"Satisfy", cursive'],
    },
    extend: {
      colors: {
        green: {
          DEFAULT: '#35C7A8',
        },
        customBlack: {
          DEFAULT: '#1F2937',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
