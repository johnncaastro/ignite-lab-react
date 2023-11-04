import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        mobile: '360px',
        laptop: '820px',
        'laptop-large': '1024px',
        desktop: '1280px',
        'desktop-large': '1340px',
      },
      colors: {
        green: {
          300: '#00b37e',
          500: '#00875f',
          600: '#015f43',
        },
        blue: {
          300: '#81d8f7',
        },
        gray: {
          100: '#e1e1e6',
          300: '#c4c4cc',
          400: '#8d8d99',
          500: '#323238',
          700: '#121214',
          800: '#09090a',
        },
        white: '#fff',
        warning: '#fba94c',
        error: '#f75a68',
      },
    },
  },
  plugins: [],
}
export default config
