module.exports = {
  mode: 'jit',
  content: ['./src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          100: '#F3F0FF',
          200: '#E5DBFF',
          400: '#996DFF',
          500: '#8257E5',
          600: '#5F3DC4',
          700: '#331983'
        },
        beige: {
          500: 'hsl(39, 100%, 97%)'
        }
      },
      borderRadius: {
        md: '4px'
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')]
}
