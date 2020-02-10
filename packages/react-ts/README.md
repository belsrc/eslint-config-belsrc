# @belsrc/eslint-config-react-ts

An opinionated collection of ESLint plugin configs I use in other projects.

_(Part of [eslint-config-belsrc](https://github.com/belsrc/eslint-config-belsrc/blob/master/README.md) mono repo)_

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
npm i -D @belsrc/eslint-config-react-ts
```

## Use

```js
// .eslintrc.js
module.exports = {
  extends: ['@belsrc/eslint-config-react-ts'],
};
```

The package also contains a usable prettier config.

```js
// .prettierrc.js
const config = require('@belsrc/eslint-config-react-ts/.prettierrc');

module.exports = config;
```

## TODO

* add `eslint-plugin-jest`
* add `eslint-plugin-security` (is it maintained enough to use?)

### Peer Dependencies

* eslint: `>= 6.6.0`
* prettier: `>=1.19.0`
* typescript: `>=3.7.5`
