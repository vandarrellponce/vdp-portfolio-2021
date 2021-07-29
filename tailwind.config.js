module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      caveat: ['"Caveat", cursive'],
      satisfy: ['"Satisfy", cursive'],
      blackSans: ['"Roboto", sans-serif;'],
    },
    extend: {
      colors: {
        green: {
          DEFAULT: '#35C7A8',
        },
        customBlack: {
          DEFAULT: '#1F2937',
        },
        black1: {
          DEFAULT: 'rgba(24,24,24)',
        },
        black2: {
          DEFAULT: 'rgba(32,32,32)',
        },
        black3: {
          DEFAULT: 'rgba(55,55,55)',
        },
        black4: {
          DEFAULT: 'rgba(18,18,18)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
