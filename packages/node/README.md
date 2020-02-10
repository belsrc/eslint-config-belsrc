# @belsrc/eslint-config-node

An opinionated collection of ESLint plugin configs I use in other projects.

* eslint-plugin-fp-jxl
* eslint-plugin-import
* eslint-plugin-promise

## Install

```bash
npm i -D @belsrc/eslint-config-node
```

## Use

```js
// .eslintrc.js
module.exports = {
  extends: ['@belsrc/eslint-config-node'],
};
```

The package also contains a usable prettier config.

```js
// .prettierrc.js
const config = require('@belsrc/eslint-config-node/.prettierrc');

module.exports = config;
```

## TODO

* add `eslint-plugin-jest`
* add `eslint-plugin-security` (is it maintained enough to use?)

### Peer Dependencies

* eslint: `>= 6.6.0`
* prettier: `>=1.19.0`
* babel-eslint: `>=10.0.0`
