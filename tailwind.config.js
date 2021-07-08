const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
		colors: {
			sel: colors.indigo,
			unsel: colors.gray,
		}
	},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
