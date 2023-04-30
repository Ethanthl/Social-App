/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.{js,tsx}"],
  content: [],
  theme: {
    fontFamily: {
      sans: [
        "Open Sans, sans-serif",
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32'
        },
      ],
    },
    extend: {},
  },
  plugins: [],
};
