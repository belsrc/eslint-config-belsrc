# eslint-config-belsrc

[![Last Commit](https://img.shields.io/github/last-commit/belsrc/eslint-config-belsrc/master.svg?style=flat-square)](https://github.com/belsrc/eslint-config-belsrc/commits/master)

A monorepo of opinionated collection of ESLint plugin configs I use in different types of projects.

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
npm i -D @belsrc/eslint-config-[package]
```

## Use

```js
// .eslintrc.js
module.exports = {
  extends: ['@belsrc/eslint-config-[package]'],
};
```

Each package also contains a prettier config.

```js
// .prettierrc.js
const config = require('@belsrc/eslint-config-[package]/.prettierrc');

module.exports = config;
```

## Packages

* [@belsrc/eslint-config-node](packages/node/README.md)
* [@belsrc/eslint-config-node-ts](packages/node-ts/README.md)
* [@belsrc/eslint-config-react](packages/react/README.md)
* [@belsrc/eslint-config-react-ts](packages/react-ts/README.md)

## LICENCE

[MIT](LICENCE)
