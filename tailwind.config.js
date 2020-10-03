module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './pages/**/*.jsx',
    './pages/**/*.js'
  ],
  theme: {
    extend: {
      screens: {
        sm: '520px',
      },
      fontSize: {
        'number-h1': '24px',
        'title-page': '18px',
        'title-item': '14px',
        'description': '12px',
        'price': '13px',
        'label': '10px',
      },
      borderRadius: {
        container: '10px',
        card: '5px',
      },
      boxShadow: {
        blue: '0px 41.7776px 33.4221px rgba(84, 128, 222, 0.0086), 0px 22.3363px 250px rgba(84, 128, 222, 0.106), 0px 12.5216px 10.0172px rgba(84, 128, 222, 0.125), 0px 6.6501px 5.32008px rgba(84, 128, 222, 0.15), 0px 2.76726px 2.21381px rgba(84, 128, 222, 0.21)',
        btnsquare: '-10px -10px 15px #FFFFFF, 5px 5px 10px rgba(84, 128, 222, 0.15)',
        container: '0px 1px 3px rgba(187, 204, 242, 0.3), 0px 3px 12px -2px rgba(187, 204, 242, 0.8)',
        container_inner: 'inset 0px 1px 3px rgba(187, 204, 242, 0.3), inset 0px 3px 12px -2px rgba(187, 204, 242, 0.8)',
        item: '0px 1px 3px rgba(187, 204, 242, 0.3), 0px 3px 12px -2px rgba(187, 204, 242, 0.8)',
      },
      colors: {
        p_blue: {
          100: "#DDE6F8",
          200: "#BBCCF2",
          300: "#98B3EB",
          400: "#7699E5",
          500: "#5480DE",
          600: "#4366B2",
          700: "#324D85",
          800: "#223359",
          900: "#111A2C",
        },
        carbon: {
          100: "#DBDBDC",
          200: "#B6B8B9",
          300: "#929495",
          400: "#6D7172",
          500: "#494D4F",
          600: "#3A3E3F",
          700: "#2C2E2F",
          800: "#1D1F20",
          900: "#0F0F10",
        },
        background: "#ECF0F3",
      },
    },
  },
  variants: {},
  plugins: [],
}
