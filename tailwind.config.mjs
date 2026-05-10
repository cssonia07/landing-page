/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef4fb',
          100: '#d8e7f5',
          500: '#285b8c',
          700: '#173f66',
          800: '#123554',
          900: '#0d263d'
        },
        accent: {
          500: '#b9852d',
          600: '#9b6f23'
        },
        mist: '#f5f7fa'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif']
      },
      boxShadow: {
        soft: '0 16px 40px rgba(13, 38, 61, 0.08)'
      }
    }
  },
  plugins: []
};
