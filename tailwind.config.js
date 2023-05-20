/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}', './*.html'],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#0B0D17',
        'secondary': '#D0D6F9',
      },
      fontFamily: {
        'Barlow-condensed': ['Barlow Condensed', 'sans-serif'],
        'Barlow': ['Barlow', 'sans-serif'],
        'Bellefair': ['Bellefair', 'sans-serif'],
      },
      fontSize: {
        'h1': ['150px', '171.9px'],
        'h2': ['100px', '114.6px'],
        'h3': ['56px', '64.18px'],
        'h4': ['32px', '36.67px'],
        'h5': ['28px', {
          lineHeight: '33.6px',
          letterSpacing: '4.72px'}
        ],
        'sh1': ['28px', '32px'],
        'sh2': ['14px', {
          lineHeight: '16.8px',
          letterSpacing: '2.36px'
        }],
        'sh3': ['16px', {
          lineHeight: '19.2px',
          letterSpacing: '2.7px'}],
        'b-text': ['18px', '32px']
      }
    },
  },
  plugins: [require('@shrutibalasa/tailwind-grid-auto-fit')],
}

