import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#fff9f1',
          100: '#f8efe1',
          200: '#f1e0c6'
        },
        cocoa: {
          600: '#5b3a29',
          700: '#4a2f22',
          800: '#39251a'
        },
        amber: {
          500: '#f7a440'
        }
      },
      boxShadow: {
        warm: '0 10px 30px rgba(91, 58, 41, 0.12)'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      fontFamily: {
        sans: ['var(--font-vazirmatn)']
      }
    }
  },
  plugins: []
};

export default config;
