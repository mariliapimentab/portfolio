import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#4427ED',
        'gray-brand': {
          100: '#F8F9FA',
          200: '#E1E3E8',
          400: '#939AA4',
          600: '#444D56',
          800: '#2C2C2C',
        },
        ink: '#0F111B',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'sans-serif'],
        serif: ['var(--font-dm-serif)', 'serif'],
      },
      maxWidth: {
        container: '1100px',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
      },
      animation: {
        'fade-up':       'fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-up-slow':  'fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s forwards',
        'fade-up-mid':   'fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.35s forwards',
        'fade-up-late':  'fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.5s forwards',
        'fade-up-last':  'fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.65s forwards',
        'fade-in':       'fadeIn 0.4s ease forwards',
      },
    },
  },
  plugins: [],
}

export default config
