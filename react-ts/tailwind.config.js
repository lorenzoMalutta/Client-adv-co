/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
    content: [
        "./src/**/*.{html,js,jsx,ts,tsx}",
        "./src/pages/**/*.{html,js,jsx,ts,tsx}",
        "./src/components/**/*.{html,js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter, sans-serif'],
            },
            transitionDuration: {
                900: '900ms',
            },
            colors: {
                blue: {
                    500: '#81D8F7',
                    600: '#00A3ED',
                    700: '#006B9E',
                },
                gray: {
                    100: '#F4F4F5',
                    150: '#Ececec',
                    200: '#C4C4CC',
                    300: '#8D8D99',
                    500: '#323238',
                    600: '#29292E',
                    700: '#5E666F',
                    900: '#09090A',
                },
                blueHover: '#F8FAFC',
            },
        },
    },
    plugins: [],
}
