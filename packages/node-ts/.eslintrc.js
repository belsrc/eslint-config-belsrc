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

    // Standard ESLint
    // https://eslint.org/docs/rules/
    'array-bracket-newline': [1, { multiline: true, minItems: 3 }],
    'array-bracket-spacing': [
      1,
      'always',
      { singleValue: false, objectsInArrays: true, arraysInArrays: true },
    ],
    'array-element-newline': [1, { minItems: 3 }],
    'arrow-body-style': [1, 'as-needed'],
    'arrow-parens': [1, 'as-needed'],
    'arrow-spacing': [1, { before: true, after: true }],
    'block-scoped-var': 2,

    // TS Extension
    // 'brace-style': [1, 'stroustrup', {}],
    '@typescript-eslint/brace-style': [1, 'stroustrup', {}],

    'callback-return': [
      2,
      [
        'callback',
        'cb',
        'next',
        'done',
        'resolve',
        'reject',
        'res',
        'response',
        'req',
        'request',
        'fn',
        'func',
      ],
    ],
    camelcase: [1, { properties: 'never' }],
    'comma-dangle': [1, 'always-multiline'],

    // TS Extension
    // 'comma-spacing': [1, { after: true }],
    '@typescript-eslint/comma-spacing': [1, { after: true }],

    'comma-style': [1, 'last'],
    complexity: [2, 15],
    'computed-property-spacing': [1, 'never'],
    'consistent-this': [1, '"self"'],
    'constructor-super': 1,
    curly: [2, 'all'],
    'default-case': 2,

    // TS Extension
    // 'default-param-last': 1,
    '@typescript-eslint/default-param-last': 1,

    'dot-location': [2, 'property'],
    'dot-notation': [2, { allowKeywords: true }],
    'eol-last': 2,
    eqeqeq: [2, 'smart'],

    // TS Extension
    // 'func-call-spacing': [1, 'never'],
    '@typescript-eslint/func-call-spacing': [1, 'never'],


    'func-style': [1, 'declaration', { allowArrowFunctions: true }],
    'function-paren-newline': [2, 'multiline'],
    'generator-star-spacing': [1, 'before'],
    'guard-for-in': 2,
    'handle-callback-err': [2, '"^(err|error)$"'],

    // TS Extension
    // indent: [1, 2, { SwitchCase: 1 }],
    '@typescript-eslint/indent': [1, 2, { SwitchCase: 1 }],

    'key-spacing': [1, { afterColon: true }],
    'keyword-spacing': [
      1,
      {
        before: true,
        after: false,
        overrides: {
          async: { after: true },
          await: { after: true },
          case: { after: true },
          from: { after: true },
          export: { after: true },
          import: { after: true },
          else: { after: true },
          return: { after: true },
          try: { after: true },
          finally: { after: true },
          const: { after: true },
          let: { after: true },
          default: { after: true },
        },
      },
    ],
    'linebreak-style': [1, 'unix'],
    'lines-around-comment': [
      1,
      { beforeBlockComment: true, beforeLineComment: true, allowBlockStart: true },
    ],
    'max-depth': [1, 3],
    'max-len': [
      1,
      {
        code: 120,
        tabWidth: 2,
        ignoreRegExpLiterals: true,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'max-nested-callbacks': [1, 3],
    'multiline-ternary': [1, 'always-multiline'],
    'new-cap': [1, { newIsCap: true, properties: false }],
    'new-parens': 1,
    'newline-after-var': [1, 'always'],
    'no-alert': 2,

    // TS Extension
    // 'no-array-constructor': 2,
    '@typescript-eslint/no-array-constructor': 2,

    'no-caller': 2,
    'no-catch-shadow': 2,
    'no-class-assign': 2,
    'no-cond-assign': [2, 'always'],
    'no-console': 0,
    'no-const-assign': 2,
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-delete-var': 1,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-else-return': 2,
    'no-empty-character-class': 2,

    // TS Extension
    // 'no-empty-function' : 2,
    '@typescript-eslint/no-empty-function' : 2,

    'no-empty': 2,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,

    // TS Extension
    // 'no-extra-parens': [2, 'all'],
    '@typescript-eslint/no-extra-parens': [2, 'all'],

    // TS Extension
    // 'no-extra-semi': 2,
    '@typescript-eslint/no-extra-semi': 2,

    'no-fallthrough': 2,
    'no-floating-decimal': 1,
    'no-func-assign': 2,
    'no-implicit-coercion': [2, { boolean: false, string: true }],
    'no-implied-eval': 2,
    'no-inline-comments': 1,
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,
    'no-invalid-this': 1,
    'no-irregular-whitespace': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-lonely-if': 2,
    'no-loop-func': 1,

    // TS Extension
    // 'no-magic-numbers': [1, { ignoreArrayIndexes: true, detectObjects: true }],
    '@typescript-eslint/no-magic-numbers': [1, {
      ignoreArrayIndexes: true,
      detectObjects: true,
      ignoreNumericLiteralTypes: true,
      ignoreReadonlyClassProperties: true,
      ignoreEnums: true
    }],

    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-multiple-empty-lines': [1, { max: 2 }],
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    'no-new-func': 2,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-wrappers': 2,
    'no-new': 2,
    'no-obj-calls': 2,
    'no-octal-escape': 2,
    'no-octal': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-return-assign': [2, 'always'],
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow-restricted-names': 2,
    'no-shadow': 2,
    'no-spaced-func': 2,
    'no-sparse-arrays': 2,
    'no-sync': 1,
    'no-this-before-super': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 1,
    'no-undef-init': 2,
    'no-undef': 2,
    'no-unexpected-multiline': 2,
    'no-unneeded-ternary': 1,
    'no-unreachable': 2,

    // TS Extension
    // 'no-unused-expressions': 2,
    '@typescript-eslint/no-unused-expressions': 2,

    // TS Extension
    // 'no-unused-vars': [1, { varsIgnorePattern: 'React' }],
    '@typescript-eslint/no-unused-vars': [1, { varsIgnorePattern: 'React' }],

    // TS Extension
    // 'no-use-before-define': 2,
    '@typescript-eslint/no-use-before-define': 2,


    'no-useless-call': 2,

    // TS Extension
    // 'no-useless-constructor': 2,
    '@typescript-eslint/no-useless-constructor"': 2,

    'no-var': 1,
    'no-void': 2,
    'no-with': 2,
    'object-curly-newline': [
      1,
      {
        ObjectExpression: { multiline: true, minProperties: 3 },
        ObjectPattern: { multiline: true },
        ImportDeclaration: { multiline: true, minProperties: 5 },
        ExportDeclaration: { multiline: true, minProperties: 3 },
      },
    ],
    'object-curly-spacing': [1, 'always', { arraysInObjects: false, objectsInObjects: false }],
    'object-property-newline': [1, { allowAllPropertiesOnSameLine: true }],
    'object-shorthand': [1, 'always'],
    'operator-assignment': [1, 'always'],
    'operator-linebreak': [1, 'after'],
    'padded-blocks': [1, 'never'],
    'prefer-const': 1,
    'prefer-spread': 1,

    // TS Extension
    // quotes: [1, 'single', 'avoid-escape'],
    '@typescript-eslint/quotes': [1, 'single', 'avoid-escape'],

    radix: 2,

    // TS Extension
    // 'require-await': 2,
    '@typescript-eslint/require-await': 2,

    'require-yield': 2,

    // TS Extension
    // 'return-await': 2,
    '@typescript-eslint/return-await': 2,

    'semi-spacing': [1, { after: true }],

    // TS Extension
    // semi: [2, 'always'],
    '@typescript-eslint/semi': [2, 'always'],

    'space-before-blocks': [1, 'always'],

    // TS Extension
    // 'space-before-function-paren': [
    //   1,
    //   { anonymous: 'never', named: 'never', asyncArrow: 'always' },
    // ],
    '@typescript-eslint/space-before-function-paren': [
      1,
      { anonymous: 'never', named: 'never', asyncArrow: 'always' },
    ],

    'space-in-parens': [1, 'never'],
    'space-infix-ops': 1,
    'space-unary-ops': [1, { words: true }],
    'spaced-comment': [1, 'always', { exceptions: ['"-"', ' "+"', ' "="', ' "*"'] }],
    'template-curly-spacing': [2, 'always'],
    'use-isnan': 2,
    'valid-typeof': 2,
    'vars-on-top': 1,
    'wrap-iife': [2, 'outside'],
    yoda: [2, 'never', { exceptRange: true }],

    // @typescript-eslint/eslint-plugin
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
    '@typescript-eslint/adjacent-overload-signatures': 2,
    '@typescript-eslint/array-type': [1, { default: 'array-simple', readonly: 'array-simple' }],
    '@typescript-eslint/await-thenable': 1,
    '@typescript-eslint/ban-ts-comment': 2,
    '@typescript-eslint/ban-types': [2, {
      // https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html
      types: {
        'String': {
          message: 'Don\'t boxed objects in place of primitives. Use "string" instead',
          fixWith: 'string'
        },
        'Number': {
          message: 'Don\'t boxed objects in place of primitives. Use "number" instead',
          fixWith: 'number'
        },
        'Boolean': {
          message: 'Don\'t boxed objects in place of primitives. Use "boolean" instead',
          fixWith: 'boolean'
        },
        'Symbol': {
          message: 'Don\'t boxed objects in place of primitives. Use "symbol" instead',
          fixWith: 'symbol'
        },
        'Object': {
          message: 'Don\'t boxed objects in place of primitives. Use "object" or "{}" instead',
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
      "multiline": {
        delimiter: "comma",
        requireLast: true
      },
      "singleline": {
        delimiter: "comma",
        requireLast: false
      }
    }],
    '@typescript-eslint/member-ordering': 1,
    '@typescript-eslint/naming-convention': [1, [
      {
        selector: 'default',
        format: ['camelCaseStrict'],
        leadingUnderscore: 'disallow',
        trailingUnderscore: 'disallow',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: "memberLike",
        modifiers: ["private"],
        format: ["camelCaseStrict"],
        leadingUnderscore: "require"
      },
      {
        selector: "variable",
        types: ["boolean"],
        format: ["camelCaseStrict"],
        prefix: ["is", "should", "has", "can", "did", "will"]
      }
    ]],
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
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 2,
    '@typescript-eslint/no-unnecessary-condition': [1, { allowConstantLoopConditions: true }],
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
    '@typescript-eslint/refer-regexp-exec': 1,
    '@typescript-eslint/prefer-string-starts-ends-with': 1,
    '@typescript-eslint/promise-function-async': 1,
    '@typescript-eslint/require-array-sort-compare': 2,
    '@typescript-eslint/restrict-plus-operands': [1, { checkCompoundAssignments: true }],
    '@typescript-eslint/restrict-template-expressions': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/switch-exhaustiveness-check': 2,
    '@typescript-eslint/triple-slash-reference': 2,
    '@typescript-eslint/type-annotation-spacing': 1,
    '@typescript-eslint/typedef': 0,
    '@typescript-eslint/unbound-method': 2,
    '@typescript-eslint/unified-signatures': 1,

    // eslint-plugin-fp
    // https://github.com/JesterXL/eslint-plugin-fp-jxl/tree/master/rules
    'fp-jxl/no-arguments': 2,
    'fp-jxl/no-class': 2,
    'fp-jxl/no-delete': 2,
    'fp-jxl/no-events': 2,
    'fp-jxl/no-get-set': 2,
    'fp-jxl/no-let': 2,
    'fp-jxl/no-loops': 2,
    'fp-jxl/no-mutating-assign': 2,
    'fp-jxl/no-mutating-methods': [2, { 'allowedObjects': ['fjp'] }],
    'fp-jxl/no-mutation': [2, { 'commonjs': true }],
    'fp-jxl/no-nil': 1,
    'fp-jxl/no-proxy': 2,
    'fp-jxl/no-rest-parameters': 0,
    'fp-jxl/no-this': 2,
    'fp-jxl/no-throw': 2,
    'fp-jxl/no-unused-expression': 1,
    'fp-jxl/no-valueof-field': 2,

    // eslint-plugin-promise
    // https://github.com/xjamundx/eslint-plugin-promise/tree/master/docs/rules
    'promise/catch-or-return': 2,
    'promise/no-return-wrap': 2,
    'promise/param-names': 2,
    'promise/always-return': 2,
    'promise/no-native': 0,
    'promise/no-nesting': 1,
    'promise/no-promise-in-callback': 1,
    'promise/no-callback-in-promise': 1,
    'promise/avoid-new': 0,
    'promise/no-return-in-finally': 1,
    'promise/prefer-await-to-then': 1,
    'promise/prefer-await-to-callbacks': 1,

    // eslint-plugin-jest
    // https://github.com/jest-community/eslint-plugin-jest/tree/master/docs/rules
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
