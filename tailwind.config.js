/** @type {import('tailwindcss').Config} */
import {Colors} from './constants/Colors'

module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        light:  {
          ...Colors.light,
        },
        dark: {
          ...Colors.dark
        }
      }
    },
  },
  plugins: [],
}