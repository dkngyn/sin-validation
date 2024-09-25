import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        'index.html',
        './src/**/*.{vue,ts}',
    ],
    theme: {
        extend: {},
    },
    daisyui: {
        theme: false,
        base: true,
        styled: true,
        utils: true,
        themeRoot: ":root"
    },
    plugins: [daisyui],
}
