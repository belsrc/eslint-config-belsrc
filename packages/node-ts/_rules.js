module.exports = {
  ...require('./../../rules/eslint-base'),
  ...require('./../../rules/extensions-ts'),
  ...require('./../../rules/ts'),
  ...require('./../../rules/import'),
  ...require('./../../rules/fp'),
  ...require('./../../rules/promise'),
};
