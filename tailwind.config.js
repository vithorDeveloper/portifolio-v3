export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dark': "url('/src/assets/bg-desktop-dark.svg')",
        'light': "url('/src/assets/bg-desktop-light.svg')",
        'about': "url('/src/assets/about.jpg')",
        'skills': "url('/src/assets/sombra1.png')"
      },

      fontFamily:{
        'title': ['VT323', 'sans-serif'],
        'about': ['Victor Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}