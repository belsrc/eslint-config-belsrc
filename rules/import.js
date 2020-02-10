module.exports = {
  // eslint-plugin-import
  // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
  'import/no-unresolved': 2,
  'import/default': 2,
  'import/named': 2,
  'import/no-cycle': 2,
  'import/no-self-import': 2,
  'import/namespace': 2,
  'import/no-useless-path-segments': 1,
  'import/export': 2,
  'import/no-extraneous-dependencies': 2,
  'import/no-mutable-exports': 2,
  'import/first': 1,
  'import/exports-last': 1,
  'import/no-duplicates': 1,
  'import/extensions': 1,
  'import/newline-after-import': 1,
  'import/no-anonymous-default-export': [1, {
    'allowArray': false,
    'allowLiteral': false,
    'allowObject': false
  }],
};
