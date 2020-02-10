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
  extends: [
    'plugin:jsx-a11y/recommended'
  ],
  plugins: ['fp-jxl', 'promise', 'import', 'simple-import-sort', 'react', 'jsx-a11y', 'react-hooks', 'jest'],
  rules: {
    ...require('./rules.json'),
  },
  overrides: [
    {
      files: ['*.jsx'],
      rules: {
        'import/extensions': [
          2,
          {
            sass: 'always',
          },
        ],
      },
    },
  ],
};
