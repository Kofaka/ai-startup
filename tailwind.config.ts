import type { Config } from 'tailwindcss';

const brandColor: Record<number, string> = {
  100: '#d9d9d9',
  200: '#b372cf',
  300: '#8c45ff', // most common
  400: '#9855ff', // most common
  500: '#56299d',
  600: '#622a9a',
  700: '#361764',
  800: '#020103',
  900: '#010002',
}

const innerWhiteLgShadow = 'inset 0 0 6px 3px rgb(255 255 255 / 25%)';
const outerVioletLgShadow = `0 10px 15px -3px ${brandColor[500]}, 0 4px 6px -4px ${brandColor[500]}`;

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '810px',
        'desktop': '1200px',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
      colors: {
        brand: brandColor,
      },
      boxShadow: {
        innerWhiteLg: innerWhiteLgShadow,
        outerVioletLg: outerVioletLgShadow,
        innerWhiteOuterVioletLg: `${innerWhiteLgShadow}, ${outerVioletLgShadow};`,
      }
    },
  },
  plugins: [],
} satisfies Config;
