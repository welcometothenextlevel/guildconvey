export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        rosegold: {
          DEFAULT: '#B08D7A',
          light: '#C9A882',
          dark: '#A67C68',
          muted: 'rgba(176, 141, 122, 0.2)',
          glow: 'rgba(176, 141, 122, 0.35)',
        },
        dark: {
          DEFAULT: '#0F1B2D',
          surface: '#162236',
          card: '#1E2D42',
        },
        cream: '#E8E0D8',
        muted: '#8A8078',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        rosegold: '0 0 12px rgba(176, 141, 122, 0.35)',
      },
    },
  },
  plugins: [],
}
