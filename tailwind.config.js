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
        'skills': "url('/src/assets/sombra1.png')",
        'brand': "url('/src/assets/brand.png')",
        'profile': "url('/src/assets/profile.png')",
        'logo': "url('/src/assets/logo.png')"
      },

      fontFamily:{
        'title': ['VT323', 'sans-serif'],
        'about': ['Victor Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}