/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'hit-pink': {
          50: '#fef4ee',
          100: '#fde5d7',
          200: '#fac7ae',
          300: '#f7a582',
          400: '#f26e45',
          500: '#ee4a21',
          600: '#df3117',
          700: '#b92215',
          800: '#941d18',
          900: '#771b17',
          950: '#400b0a',
        },
      },
    },
  },
  plugins: [],
};
