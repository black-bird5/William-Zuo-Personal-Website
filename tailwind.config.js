module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        accent: '#2f3d66',
        subtle: '#f7f7f8'
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
