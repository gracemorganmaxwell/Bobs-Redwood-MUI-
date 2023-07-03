const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    'websiteLandscaping/my-redwood-project/node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    'websiteLandscaping/my-redwood-project/node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  important: '#root',
  theme: {
    extend: {},
  },
  plugins: { preflight: false },
})