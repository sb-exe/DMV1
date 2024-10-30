/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF1F3',
          100: '#FFE4E8',
          200: '#FFCCD5',
          300: '#FFA3B3',
          400: '#FF6B85',
          500: '#EE1133', // Digital Medium Red
          600: '#E00B2C',
          700: '#BA0725',
          800: '#980820',
          900: '#7C0A1E',
        },
        gray: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        }
      },
      // Add custom button styles
      components: {
        '.btn': {
          '@apply px-4 py-2 rounded-lg font-medium transition-colors': {},
        },
        '.btn-primary': {
          '@apply bg-primary-500 text-white hover:bg-primary-600': {},
        },
        '.btn-secondary': {
          '@apply bg-gray-100 text-gray-700 hover:bg-gray-200': {},
        },
        '.btn-outline': {
          '@apply border border-gray-200 text-gray-600 hover:bg-gray-50': {},
        },
        '.btn-danger': {
          '@apply bg-red-500 text-white hover:bg-red-600': {},
        }
      }
    },
  },
  plugins: [],
};