const plugin = require('tailwindcss/plugin');

module.exports = {
    purge: ['./src/**/*.js', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['Inter', 'sans-serif']
        },
        screens: {
            'sm': '600px',
            'md': '812px',
            'lg': '1024px',
            'xl': '1440px',
            '2xl': '1536px'
        },
        extend: {
            colors: {
                'off': {
                    'DEFAULT': '#FFFDFB',
                    'yellow': '#FFFDFB',
                    'blue': '#F7F8FF'
                },
                'night': {
                    'DEFAULT': '#060932',
                    'light': '#E1E1E6',
                    'medium': '#515370',
                    'dark': '#040626',
                    '50': '#E1E1E6',
                    '100': '#B4B5C2',
                    '200': '#838499',
                    '300': '#515370',
                    '400': '#2B2E51',
                    '500': '#060932',
                    '600': '#05082D',
                    '700': '#040626',
                    '800': '#03051F',
                    '900': '#020213'
                },
                'pastel-blue': {
                    'DEFAULT': '#B3E4FF',
                    'light': '#F6FCFF',
                    'medium': '#CAECFF',
                    'dark': '#A3DDFF',
                    '50': '#F6FCFF',
                    '100': '#E8F7FF',
                    '200': '#D9F2FF',
                    '300': '#CAECFF',
                    '400': '#BEE8FF',
                    '500': '#B3E4FF',
                    '600': '#ACE1FF',
                    '700': '#A3DDFF',
                    '800': '#9AD9FF',
                    '900': '#8BD1FF'
                },
                'pastel-green': {
                    'DEFAULT': '#B3FFBF',
                    'light': '#F6FFF7',
                    'medium': '#CAFFD2',
                    'dark': '#A3FFB1',
                    '50': '#F6FFF7',
                    '100': '#E8FFEC',
                    '200': '#D9FFDF',
                    '300': '#CAFFD2',
                    '400': '#BEFFC9',
                    '500': '#B3FFBF',
                    '600': '#ACFFB9',
                    '700': '#A3FFB1',
                    '800': '#9AFFA9',
                    '900': '#8BFF9B'
                },
                'pastel-pink': {
                    'DEFAULT': '#FFC6F1',
                    'light': '#FFF8FD',
                    'medium': '#FFD7F5',
                    'dark': '#FFB9ED',
                    '50': '#FFF8FD',
                    '100': '#FFEEFB',
                    '200': '#FFE3F8',
                    '300': '#FFD7F5',
                    '400': '#FFCFF3',
                    '500': '#FFC6F1',
                    '600': '#FFC0EF',
                    '700': '#FFB9ED',
                    '800': '#FFB1EB',
                    '900': '#FFA4E7'
                },
                'pastel-purple': {
                    'DEFAULT': '#FBF8FF',
                    'light': '#F5EEFF',
                    'medium': '#E7D7FF',
                    'dark': '#D4B9FF',
                    '50': '#F5EEFF',
                    '100': '#F6FFF7',
                    '200': '#EEE3FF',
                    '300': '#E7D7FF',
                    '400': '#E2CFFF',
                    '500': '#DDC6FF',
                    '600': '#D9C0FF',
                    '700': '#D4B9FF',
                    '800': '#CFB1FF',
                    '900': '#C7A4FF'
                },
                'pastel-yellow': {
                    'DEFAULT': '#FFFDB3',
                    'light': '#FFFFF6',
                    'medium': '#FFFECA',
                    'dark': '#FFFCA3',
                    '50': '#FFFFF6',
                    '100': '#FFFEE8',
                    '200': '#FFFED9',
                    '300': '#FFFECA',
                    '400': '#FFFDBE',
                    '500': '#FFFDB3',
                    '600': '#FFFDAC',
                    '700': '#FFFCA3',
                    '800': '#FFFC9A',
                    '900': '#FFFC8B'
                },
                'vivid-blue': {
                    'DEFAULT': '#3D4FFA',
                    'light': '#E8EAFE',
                    'medium': '#7784FC',
                    'dark': '#2F3FF9',
                    '50': '#E8EAFE',
                    '100': '#C5CAFE',
                    '200': '#9EA7FD',
                    '300': '#7784FC',
                    '400': '#5A69FB',
                    '500': '#3D4FFA',
                    '600': '#3748F9',
                    '700': '#2F3FF9',
                    '800': '#2736F8',
                    '900': '#1A26F6'
                },
                'vivid-red': {
                    'DEFAULT': '#EB1951',
                    'light': '#FDE3EA',
                    'medium': '#F15E85',
                    'dark': '#E51240',
                    '50': '#FDE3EA',
                    '100': '#F9BACB',
                    '200': '#F58CA8',
                    '300': '#F15E85',
                    '400': '#EE3C6B',
                    '500': '#EB1951',
                    '600': '#E9164A',
                    '700': '#E51240',
                    '800': '#E20E37',
                    '900': '#DD0827'
                }
            }
        }
    },
    variants: {},
    plugins: []
};
