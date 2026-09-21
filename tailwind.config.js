/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        airbnb: {
          red: '#FF385C',
          darkRed: '#E00B41',
          gradientStart: '#E61E4D',
          gradientEnd: '#D70466',
          text: '#222222',
          muted: '#717171',
          border: '#DDDDDD',
          borderLight: '#EBEBEB',
          bgLight: '#F7F7F7',
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Roboto',
          '"Helvetica Neue"',
          'sans-serif',
        ],
      },
      maxWidth: {
        'listing': '1120px',
      },
      boxShadow: {
        'card': '0 6px 16px rgba(0, 0, 0, 0.12)',
        'dropdown': '0 2px 16px rgba(0, 0, 0, 0.12)',
        'header': '0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
