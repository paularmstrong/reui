'use strict';

module.exports = {
  plugins: ['@next/eslint-plugin-next'],
  extends: [
    'plugin:@reui/eslint-plugin/base',
    'plugin:@next/eslint-plugin-next/recommended',
    'plugin:@next/eslint-plugin-next/core-web-vitals',
  ],
  settings: {
    next: {
      rootDir: __dirname,
    },
  },
};
