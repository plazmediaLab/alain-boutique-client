module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: [],
  theme: {
    extend: {
      margin: {
        small: '0.15rem',
        14: '3.5rem'
      },
      padding: {
        small: '0.15rem',
        14: '3.5rem'
      },
      gap: {
        small: '0.15rem',
        14: '3.5rem'
      },
      space: {
        '05': '0.15rem',
        14: '3.5rem'
      },
      inset: {
        1: '1rem'
      },
      height: {
        custom: '56px'
      },
      screens: {
        sm: '520px'
      },
      fontSize: {
        'number-h1': '24px',
        'title-page': '18px',
        'title-item': '14px',
        description: '12px',
        price: '13px',
        label: '10px'
      },
      borderRadius: {
        container: '10px',
        card: '5px'
      },
      boxShadow: {
        alain:
          '0px 41.7776px 33.4221px rgba(99, 91, 255, 0.0086), 0px 22.3363px 250px rgba(99, 91, 255, 0.106), 0px 12.5216px 10.0172px rgba(99, 91, 255, 0.125), 0px 6.6501px 5.32008px rgba(99, 91, 255, 0.15), 0px 2.76726px 2.21381px rgba(99, 91, 255, 0.21)',
        menu: '0px 5px 15px 0px rgba(0,0,0,0.1), 0px 3px 6px 0px rgba(0,0,0,0.13)',
        item: '0px 1px 2px 0px rgba(0, 0, 0, 0.07), 0px 2px 10px 0px rgba(0, 0, 0, 0.07)'
      },
      colors: {
        p_blue: {
          100: '#DDE6F8',
          200: '#BBCCF2',
          300: '#98B3EB',
          400: '#7699E5',
          500: '#5480DE',
          600: '#4366B2',
          700: '#324D85',
          800: '#223359',
          900: '#111A2C'
        },
        carbon: {
          100: '#DBDBDC',
          200: '#B6B8B9',
          300: '#929495',
          400: '#6D7172',
          500: '#494D4F',
          600: '#3A3E3F',
          700: '#2C2E2F',
          800: '#1D1F20',
          900: '#0F0F10'
        },
        'slate-gray': {
          50: '#F7F9F9',
          100: '#EFF2F3',
          200: '#D7DFE2',
          300: '#BFCBD1',
          400: '#90A4AE',
          500: '#607D8B',
          600: '#56717D',
          700: '#3A4B53',
          800: '#2B383F',
          900: '#1D262A'
        },
        'alain-blue': {
          50: '#F7F7FF',
          100: '#EFEFFF',
          200: '#D8D6FF',
          300: '#C1BDFF',
          400: '#928CFF',
          500: '#635BFF',
          600: '#5952E6',
          700: '#3B3799',
          800: '#2D2973',
          900: '#1E1B4D'
        },
        background: '#ECF0F3'
      }
    }
  },
  variants: {},
  plugins: []
};
