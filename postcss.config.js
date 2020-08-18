/* eslint-disable global-require */
const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [tailwindcss('./tailwind.js'), require('autoprefixer')],
};
