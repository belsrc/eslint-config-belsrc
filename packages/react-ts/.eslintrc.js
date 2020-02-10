module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
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
  extends: [
    'plugin:jsx-a11y/recommended'
  ],
  plugins: ['fp-jxl', 'promise', 'import', 'simple-import-sort', 'react', 'jsx-a11y', 'react-hooks', 'jest', '@typescript-eslint'],
  rules: {
    ...require('./rules.json'),
  },
  overrides: [
    {
      'files': ['*.js', '*.jsx'],
      'rules': {
        '@typescript-eslint/explicit-member-accessibility': 0,
      }
    },
    {
      files: ['*.jsx', '*.tsx'],
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
