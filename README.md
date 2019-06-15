# eslint-config-belsrc

[![Last Commit](https://img.shields.io/github/last-commit/belsrc/eslint-config-belsrc/master.svg?style=flat-square)](https://github.com/belsrc/eslint-config-belsrc/commits/master)

An opinionated collection of ESLint plugin configs I use in other projects.

* eslint-plugin-fp
* eslint-plugin-import
* eslint-plugin-promise
* eslint-plugin-react
* eslint-plugin-vue

## Install

```bash
npm i -D eslint-config-belsrc
```

## Use

```js
// .eslintrc.js
module.exports = {
  extends: ['eslint-config-belsrc'],
};
```

The package also contains a usable prettier config.

```js
// .prettierrc.js
const config = require('eslint-config-belsrc/.prettierrc');

module.exports = config;
```

## TODO

* add `eslint-plugin-jsx-a11y`
* add `eslint-plugin-jest`
* add `eslint-plugin-security` (is it maintained enough to use?)

### Peer Dependencies

* eslint: `>= 5.2.0` & `< 6`
* prettier: `>=1.14.0` & `< 2`
* babel-eslint: `>=10.0.0` & `< 11`

## LICENCE

[MIT](LICENCE)
