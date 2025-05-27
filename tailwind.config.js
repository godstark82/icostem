/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1f1f33',    // Dark blue/navy
                secondary: '#D0224A',  // Red/crimson
                light: '#E5E5E5',      // Light gray
            },
        },
    },
    plugins: [],
} 