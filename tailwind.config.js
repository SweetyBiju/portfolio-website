/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#2D4030',
          light:   '#3A5240',
          dark:    '#1E2D22',
        },
        amber: {
          DEFAULT: '#FFB800',
          light:   '#FFC933',
          dark:    '#E6A600',
          muted:   '#FFF3CC',
        },
        warm: {
          white: '#F9F9F5',
          cream: '#F4F0E8',
          gray:  '#E5E5E0',
        },
        charcoal: {
          DEFAULT: '#1A1A1A',
          light:   '#2A2A2A',
          muted:   '#6B6B6B',
        },
      },

      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono:  ['"JetBrains Mono"', 'monospace'],
      },

      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },

      boxShadow: {
        forest:      '0 4px 32px rgba(45,64,48,0.15)',
        amber:       '0 4px 24px rgba(255,184,0,0.25)',
        card:        '0 2px 16px rgba(26,26,26,0.06)',
        'card-hover':'0 8px 40px rgba(26,26,26,0.12)',
      },

      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'float':     'float 6s ease-in-out infinite',
        'ticker':    'ticker 30s linear infinite',
        'fade-up':   'fadeUp 0.6s ease-out forwards',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
      },

      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-10px)' },
        },
        ticker: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0.4' },
        },
      },
    },
  },
  plugins: [],
}
