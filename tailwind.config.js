/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      xs: '320px',
      sm: '480px',
      md: '667px',
      xm: '857px',
      lg: '927px',
      xl: '989px',
      xxl: '1117px'
    },
    extend: {
      colors: {
        tail_dark: '#011d24',
        tail_d_theme: '#011d2499',
        tail_red: '#e9003a',
        tail_light: '#fff',
        tail_l_theme: '#eee9',
        tail_l_hover: '#eee5'
      }
    },
  },
  plugins: [],
}
