import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          DEFAULT: '#047DDF',
          light: '#4FB0E5',
          tint: '#F3F9FD',
          deep: '#0367B8',
        },
        navy: {
          DEFAULT: '#12283F',
          soft: '#1D3A57',
        },
        slate: {
          soft: '#5B6B7A',
        },
        leaf: '#4E7D3A',
        whatsapp: '#25D366',
      },
      fontFamily: {
        heading: ['var(--font-bitter)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};

export default config;
