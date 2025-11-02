/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D62828',
        'primary-500': '#B73232',
        'primary-600': '#B21F1F',
        'primary-700': '#8E1717',
        'primary-800': '#741212',
        'primary-900': '#5B0E0E',
        accent: '#F4B000',
        ink: '#0E1E2B',
        paper: '#FFF6E5',
        bg: '#F8FAFC',
        muted: '#64748B',
      },
      fontFamily: {
        'display': ['DM Serif Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 6px 24px rgba(14,30,43,0.08)',
        'cta': '0 10px 30px rgba(214,40,40,0.25)',
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
}

