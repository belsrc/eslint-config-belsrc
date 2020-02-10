# @belsrc/eslint-config-node-ts

An opinionated collection of ESLint plugin configs I use in other projects.

* @typescript-eslint/eslint-plugin
* eslint-plugin-fp-jxl
* eslint-plugin-import
* eslint-plugin-promise

## Install

```bash
npm i -D @belsrc/eslint-config-node-ts
```

## Use

```js
// .eslintrc.js
module.exports = {
  extends: ['@belsrc/eslint-config-node-ts'],
};
```

The package also contains a usable prettier config.

```js
// .prettierrc.js
const config = require('@belsrc/eslint-config-node-ts/.prettierrc');

module.exports = config;
```

## TODO

* add `eslint-plugin-jest`
* add `eslint-plugin-security` (is it maintained enough to use?)

### Peer Dependencies

* eslint: `>= 6.6.0`
* prettier: `>=1.19.0`
* typescript: `>=3.7.5`
