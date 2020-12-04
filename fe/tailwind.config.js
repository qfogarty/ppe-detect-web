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
                'off-yellow': '#FFFDFB',
                'off-blue': '#F7F8FF',
                'night': '#060932'
            }
        }
    },
    variants: {},
    plugins: []
};
