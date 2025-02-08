import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-green': '#093509',
        'secondary-yellow': '#f6d44d',
      }
    },
  },
  plugins: [],
} satisfies Config

