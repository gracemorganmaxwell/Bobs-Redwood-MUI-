const path = require('path')

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')(path.resolve(__dirname, 'tailwind.config.js')),
    require('autoprefixer'),
    require('@material-tailwind/react/utils/withMT'),
  ],
}
