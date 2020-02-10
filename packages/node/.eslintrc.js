module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    node: true,
    browser: true,
    'shared-node-browser': true,
    jest: true,
    amd: true,
  },
  globals: {},
  plugins: ['fp-jxl', 'promise', 'import', 'jest'],
  rules: {
    ...require('./rules.json'),
  },
};
