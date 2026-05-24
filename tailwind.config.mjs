/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f1f5f9',
          100: '#e2e8f0',
          500: '#334155',
          700: '#1e293b',
          800: '#172033',
          900: '#0f172a'
        },
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          500: '#0f766e',
          600: '#0d665f',
          700: '#115e59'
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          500: '#f59e0b',
          600: '#d97706'
        },
        mist: '#f8fafc'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif']
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15, 23, 42, 0.08)',
        card: '0 12px 30px rgba(15, 23, 42, 0.06)'
      }
    }
  },
  plugins: []
};
