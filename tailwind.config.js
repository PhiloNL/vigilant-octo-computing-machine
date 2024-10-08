/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./resources/**/*.blade.php",
      "./resources/**/*.js",
      "./resources/**/*.vue",
      './vendor/wire-elements/pro/config/wire-elements-pro.php',
      './vendor/wire-elements/pro/**/*.blade.php'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

