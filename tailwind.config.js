/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#0a0b0e', 2: '#101217', 3: '#161920' },
        line: { DEFAULT: '#23262f', strong: '#343845' },
        paper: '#ece9e2',
        mute: '#a1a4b0',
        faint: '#8b8e9b',
        accent: { DEFAULT: '#7aa2ff', dim: '#1b2845' },
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'system-ui', 'sans-serif'],
        display: ['"Fraunces Variable"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono Variable"', 'ui-monospace', 'monospace'],
      },
      maxWidth: { page: '72rem' },
    },
  },
  plugins: [],
}
