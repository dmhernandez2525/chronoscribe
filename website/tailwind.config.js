/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7ee',
          100: '#fdecd7',
          200: '#fad5ae',
          300: '#f6b87b',
          400: '#f19146',
          500: '#ed7423',
          600: '#de5a19',
          700: '#b84317',
          800: '#93371a',
          900: '#772f18',
          950: '#40150a',
        },
        secondary: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d5dae2',
          300: '#b0b9c9',
          400: '#8594ab',
          500: '#667791',
          600: '#516078',
          700: '#424e62',
          800: '#394353',
          900: '#333b47',
          950: '#22272f',
        },
      },
    },
  },
  plugins: [],
}
