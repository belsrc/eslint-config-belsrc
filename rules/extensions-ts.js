module.exports = {
  // TS ESLint Extensions
  'brace-style': 0,
  '@typescript-eslint/brace-style': [1, 'stroustrup', {}],

  'comma-spacing': 0,
  '@typescript-eslint/comma-spacing': [1, { after: true }],

  'default-param-last': 0,
  '@typescript-eslint/default-param-last': [1],

  'func-call-spacing': 0,
  '@typescript-eslint/func-call-spacing': [1, 'never'],

  indent: 0,
  '@typescript-eslint/indent': [1, 2, { SwitchCase: 1 }],

  'no-array-constructor': 0,
  '@typescript-eslint/no-array-constructor': [2],

  'no-empty-function' : 0,
  '@typescript-eslint/no-empty-function' : [2],

  'no-extra-parens': 0,
  '@typescript-eslint/no-extra-parens': [2, 'all', { ignoreJSX: 'multi-line' }],

  'no-extra-semi': 0,
  '@typescript-eslint/no-extra-semi': [2],

  'no-magic-numbers': 0,
  '@typescript-eslint/no-magic-numbers': [1, {
    ignoreArrayIndexes: true,
    detectObjects: true,
    ignoreNumericLiteralTypes: true,
    ignoreReadonlyClassProperties: true,
    ignoreEnums: true
  }],

  'no-unused-expressions': 0,
  '@typescript-eslint/no-unused-expressions': [2],

  'no-unused-vars': 0,
  '@typescript-eslint/no-unused-vars': [1, { varsIgnorePattern: 'React' }],

  'no-use-before-define': 0,
  '@typescript-eslint/no-use-before-define': [2],

  quotes: 0,
  '@typescript-eslint/quotes': [1, 'single', 'avoid-escape'],

  'require-await': 0,
  '@typescript-eslint/require-await': [2],

  'return-await': 0,
  '@typescript-eslint/return-await': [2],

  semi: 0,
  '@typescript-eslint/semi': [2, 'always'],

  'space-before-function-paren': 0,
  '@typescript-eslint/space-before-function-paren': [
    1,
    { anonymous: 'never', named: 'never', asyncArrow: 'always' },
  ],
};
