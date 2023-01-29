/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif']
      },
      colors: {
        primary: {
          main: '#182953',
          hover: '#4E4AD4',
          pressed: '#3F3BAA',
          surface: '#DFDEFF',
          border: '#7975FF'
        },
        secondary: {
          main: '#6DC7FF',
          hover: '#5BA6D4',
          pressed: '#366380',
          surface: '#E2F4FF',
          border: '#9EDAFF'
        },
        error: {
          main: '#FF3366',
          hover: '#D42B55',
          pressed: '#801933',
          surface: '#FFD6E0',
          border: '#FF7799'
        },
        warning: {
          main: '#FF950A',
          hover: '#D47C08',
          pressed: '#AA7200',
          surface: '#FFEACE',
          border: '#FFB85C'
        },
        success: {
          main: '#2FC29E',
          hover: '#22AA89',
          pressed: '#156653',
          surface: '#D4F5ED',
          border: '#70DDC3'
        },
        info: {
          main: '#0065FF',
          hover: '#0054D4',
          pressed: '#0043AA',
          surface: '#CCE0FF',
          border: '#2A7FFF'
        },
        netral: {
          100: '#FFFFFF',
          200: '#F4F5F6',
          300: '#E5E7EB',
          400: '#D3D6DA',
          500: '#A0A8B0',
          600: '#707784',
          700: '#515966',
          800: '#3B4453',
          900: '#101623'
        },
        accent: {
          surface: '#6DC7FF'
        }
      },
      boxShadow: {
        primary: '0px 1px 0px rgba(0, 0, 0, 0.05)'
      },
      borderRadius: {
        large: '10px'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
