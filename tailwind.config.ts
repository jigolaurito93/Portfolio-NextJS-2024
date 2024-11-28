import { transform } from 'next/dist/build/swc/generated-native';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'loop-scroll': 'loop-scroll 40s linear infinite',
        'loop-scroll-reverse': 'loop-scroll-reverse 40s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - 1rem))' },
        },
        'loop-scroll-reverse': {
          '0%': { transform: 'translateX(calc(-100% - 1rem))' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        primary: {
          DEFAULT: '#BFA181',
          light: '#D4BEA4',
          dark: '#A88460',
        },
        secondary: {
          DEFAULT: '#178582',
          light: '#1A9D99',
          dark: '#146D6A',
        },
        tertiary: {
          DEFAULT: '#0A1828',
        },
      },
    },
  },
  plugins: [],
};

export default config;
