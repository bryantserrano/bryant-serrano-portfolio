/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#f7f8f8',
        ink: '#17212b',
        muted: '#65727e',
        accent: '#315f86',
        line: '#dce2e6',
      },
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      letterSpacing: { eyebrow: '0.16em' },
    },
  },
  plugins: [],
}
