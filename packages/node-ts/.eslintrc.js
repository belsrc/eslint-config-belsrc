module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    warnOnUnsupportedTypeScriptVersion: true,
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
  overrides: [
    {
      "files": ['*.js', '*.jsx'],
      "rules": {
        "@typescript-eslint/explicit-member-accessibility": 0,
      }
    },
  ],
};
