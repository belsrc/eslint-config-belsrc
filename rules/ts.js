module.exports = {
  // @typescript-eslint/eslint-plugin
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
  '@typescript-eslint/adjacent-overload-signatures': 2,
  '@typescript-eslint/array-type': [1, { default: 'array', readonly: 'array' }],
  '@typescript-eslint/await-thenable': 1,
  '@typescript-eslint/ban-ts-comment': 2,
  '@typescript-eslint/ban-types': [2, {
    // https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html
    types: {
      'String': {
        message: 'Don\'t boxed objects in place of primitives. Use \'string\' instead',
        fixWith: 'string'
      },
      'Number': {
        message: 'Don\'t boxed objects in place of primitives. Use \'number\' instead',
        fixWith: 'number'
      },
      'Boolean': {
        message: 'Don\'t boxed objects in place of primitives. Use \'boolean\' instead',
        fixWith: 'boolean'
      },
      'Symbol': {
        message: 'Don\'t boxed objects in place of primitives. Use \'symbol\' instead',
        fixWith: 'symbol'
      },
      'Object': {
        message: 'Don\'t boxed objects in place of primitives. Use \'object\' or \'{}\' instead',
        fixWith: '{}'
      }
    }
  }],
  '@typescript-eslint/consistent-type-assertions': [2, { assertionStyle: 'as', objectLiteralTypeAssertions: 'never' }],
  '@typescript-eslint/consistent-type-definitions': [2, 'interface'],
  '@typescript-eslint/explicit-function-return-type': 0,
  '@typescript-eslint/explicit-member-accessibility': 1,
  '@typescript-eslint/explicit-module-boundary-types': 0,
  '@typescript-eslint/member-delimiter-style': [1, {
    'multiline': {
      delimiter: 'comma',
      requireLast: true
    },
    'singleline': {
      delimiter: 'comma',
      requireLast: false
    }
  }],
  '@typescript-eslint/member-ordering': 1,
  '@typescript-eslint/naming-convention': [1,
    {
      selector: 'default',
      format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      leadingUnderscore: 'forbid',
      trailingUnderscore: 'forbid',
    },
    {
      selector: 'variable',
      types: ['boolean'],
      format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      prefix: ['is', 'should', 'has', 'can', 'did', 'will', 'does']
    },
    {
      'selector': 'parameter',
      'format': ['camelCase'],
    },
    {
      selector: 'parameter',
      types: ['boolean'],
      format: ['camelCase',],
      prefix: ['is', 'should', 'has', 'can', 'did', 'will', 'does']
    },
    {
      'selector': 'memberLike',
      'modifiers': ['private'],
      'format': ['camelCase', 'UPPER_CASE', 'PascalCase'],
      'leadingUnderscore': 'require'
    },
    {
      selector: 'typeLike',
      format: ['PascalCase'],
    },
  ],
  '@typescript-eslint/no-dynamic-delete': 2,
  '@typescript-eslint/no-empty-interface': 0,
  '@typescript-eslint/no-explicit-any': 0,
  '@typescript-eslint/no-extra-non-null-assertion': 2,
  '@typescript-eslint/no-extraneous-class': 2,
  '@typescript-eslint/no-floating-promises': 1,
  '@typescript-eslint/no-for-in-array': 2,
  '@typescript-eslint/no-implied-eval': 2,
  '@typescript-eslint/no-inferrable-types': [1, { ignoreParameters: false }],
  '@typescript-eslint/no-misused-new': 2,
  '@typescript-eslint/no-misused-promises': 2,
  '@typescript-eslint/no-namespace': 1,
  '@typescript-eslint/no-non-null-asserted-optional-chain': 1,
  '@typescript-eslint/no-non-null-assertion': 1,
  '@typescript-eslint/no-parameter-properties': 2,
  '@typescript-eslint/no-require-imports': 0,
  '@typescript-eslint/no-this-alias': 0,
  '@typescript-eslint/no-throw-literal': 2,
  '@typescript-eslint/no-type-alias': 0, // TAKE ANOTHER LOOK AT THIS ONE
  // '@typescript-eslint/no-unnecessary-boolean-literal-compare': 2,
  '@typescript-eslint/no-unnecessary-condition': 0,
  '@typescript-eslint/no-unnecessary-qualifier': 2,
  '@typescript-eslint/no-unnecessary-type-arguments': 1,
  '@typescript-eslint/no-unnecessary-type-assertion': 1,
  '@typescript-eslint/no-unused-vars-experimental': 2,
  '@typescript-eslint/refer-as-const': 0,
  '@typescript-eslint/prefer-for-of': 1,
  '@typescript-eslint/prefer-function-type': 1,
  '@typescript-eslint/prefer-includes': 2,
  '@typescript-eslint/prefer-namespace-keyword': 2,
  '@typescript-eslint/prefer-nullish-coalescing': 1,
  '@typescript-eslint/prefer-optional-chain': 1,
  '@typescript-eslint/prefer-readonly': 0,
  // '@typescript-eslint/refer-regexp-exec': 1,
  '@typescript-eslint/prefer-string-starts-ends-with': 1,
  '@typescript-eslint/promise-function-async': 1,
  '@typescript-eslint/require-array-sort-compare': 2,
  '@typescript-eslint/restrict-plus-operands': [1, { checkCompoundAssignments: true }],
  '@typescript-eslint/restrict-template-expressions': 0,
  '@typescript-eslint/strict-boolean-expressions': 0,
  // '@typescript-eslint/switch-exhaustiveness-check': 2,
  '@typescript-eslint/triple-slash-reference': 2,
  '@typescript-eslint/type-annotation-spacing': 1,
  '@typescript-eslint/typedef': 0,
  '@typescript-eslint/unbound-method': 2,
  '@typescript-eslint/unified-signatures': 1,
};
