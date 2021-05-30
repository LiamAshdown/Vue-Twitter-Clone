module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        spacing: 'padding-top',
        height: 'height'
      },
      maxHeight: {
        'header-bottom': 'calc(100vh - 8rem)'
      },
      backgroundImage: () => ({
        splash: "url('/img/splash_background.png')"
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
