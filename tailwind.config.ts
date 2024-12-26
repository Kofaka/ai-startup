import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
      colors: {
        brand: {
          100: '#d9d9d9',
          200: '#b372cf',
          300: '#8c45ff', // most common
          400: '#9855ff', // most common
          500: '#56299d',
          600: '#622a9a',
          700: '#361764',
          800: '#020103',
          900: '#010002',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
