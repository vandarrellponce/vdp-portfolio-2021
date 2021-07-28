module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      caveat: ['"Caveat", cursive'],
    },
    extend: {
      colors: {
        green: {
          DEFAULT: '#35C7A8',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
