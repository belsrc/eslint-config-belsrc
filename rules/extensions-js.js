module.exports = {
  // Rules that are extended with typescript-eslint
  'brace-style': [1, 'stroustrup', {}],
  'comma-spacing': [1, { after: true }],
  'default-param-last': 1,
  'func-call-spacing': [1, 'never'],
  indent: [1, 2, { SwitchCase: 1 }],
  'no-array-constructor': 2,
  'no-empty-function' : 2,
  'no-extra-parens': [2, 'all', { ignoreJSX: 'multi-line' }],
  'no-extra-semi': 2,
  'no-magic-numbers': [1, { ignoreArrayIndexes: true, detectObjects: true }],
  'no-unused-expressions': 2,
  'no-unused-vars': [1, { varsIgnorePattern: 'React' }],
  'no-use-before-define': 2,
  quotes: [1, 'single', 'avoid-escape'],
  'require-await': 2,
  'return-await': 2,
  semi: [2, 'always'],
  'space-before-function-paren': [
    1,
    { anonymous: 'never', named: 'never', asyncArrow: 'always' },
  ],
};
