/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    './public/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        bg:      '#0a0a0a',
        surface: '#111111',
        border:  '#1f1f1f',
        primary: '#ededed',
        muted:   '#666666',
        accent:  '#ffffff',
        danger:  '#ef4444',
        success: '#22c55e',
      },
    },
  },
  plugins: [],
};
