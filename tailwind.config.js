// As is with no custom configuration
module.exports = require('@studiometa/tailwind-config');

// By merging the package's configuration with you own custom one
const config = require('@studiometa/tailwind-config');
const merge = require('lodash.merge');

module.exports = merge(config, {
  theme: {
    debugOutline: true,
    filter: { // defaults to {}
      'none': 'none',
      'grayscale': 'grayscale(1)',
      'invert': 'invert(1)',
      'sepia': 'sepia(1)',
    },
    backdropFilter: { // defaults to {}
      'none': 'none',
      'blur': 'blur(20px)',
    },
  },
  variants: {
    filter: ['responsive'], // defaults to ['responsive']
    backdropFilter: ['responsive'], // defaults to ['responsive']
  },
  plugins: [
    require('tailwind-filter-utilities'),
  ],
});