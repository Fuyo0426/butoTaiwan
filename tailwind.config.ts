import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F8F6F1',
        kendo: {
          red: '#8B1A1A',
          black: '#1A1A1A',
          blue: '#2C3E50',
        },
        border: '#E8E4DC',
      },
      fontFamily: {
        serif: ['Noto Serif TC', 'serif'],
        sans: ['Noto Sans TC', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
