# @belsrc/eslint-config-belsrc-ts

An opinionated collection of ESLint plugin configs I use in other projects.

* @typescript-eslint/eslint-plugin
* eslint-plugin-fp-jxl
* eslint-plugin-import
* eslint-plugin-jsx-a11y
* eslint-plugin-promise
* eslint-plugin-react
* eslint-plugin-react-hooks
* eslint-plugin-simple-import-sort

## Install

```bash
npm i -D @belsrc/eslint-config-belsrc-ts
```

## Use

```js
// .eslintrc.js
module.exports = {
  extends: ['@belsrc/eslint-config-belsrc-ts'],
};
```

The package also contains a usable prettier config.

```js
// .prettierrc.js
const config = require('@belsrc/eslint-config-belsrc-ts/.prettierrc');

module.exports = config;
```

## TODO

* add `eslint-plugin-jest`
* add `eslint-plugin-security` (is it maintained enough to use?)

### Peer Dependencies

* eslint: `>= 6.6.0`
* prettier: `>=1.19.0`
* typescript: `>=3.7.5`
