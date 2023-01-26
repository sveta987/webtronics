/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      Hello: (theme) => ({
        'gradient-primary': `linear-gradient(152.14deg, rgba(21, 191, 253, 0.7) 9.96%, rgba(156, 55, 253, 0.7) 100%))`,
      }),
    },
  },
  plugins: [],
}
