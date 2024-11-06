/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0D1117',
        card: 'rgba(35, 39, 49, 0.18)',
        primary: '#58A6FF',
        secondary: '#3B3E41',
        font: '#F0F0F0'
      },
      fontFamily:{
        nrml:['roboR','sans-serif'],
        med:['roboM','sans-serif'],
        bld:['HeadB','monospace'],
        sembld:['HeadS','monospace']

        
      }
    },
  },
  plugins: [],
}