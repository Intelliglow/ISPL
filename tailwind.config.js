/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-h': 'var(--text-h)',
        'text': 'var(--text)',
        'bg': 'var(--bg)',
        'surface': 'var(--surface)',
        'border': 'var(--border)',
        'accent': 'var(--accent)',
        'accent-bg': 'var(--accent-bg)',
      },
      spacing: {
        '8vw': '8vw',
      },
    },
  },
  plugins: [],
}
