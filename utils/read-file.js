const fs = require('fs');

const promReadFile = filePath =>
  new Promise((resolve, reject) =>
    fs.readFile(filePath, 'utf8', (error, content) => error ? reject(error) : resolve(content)));

/* eslint-disable-next-line promise/prefer-await-to-then */
const readFile = async filePath => Promise.resolve().then(() => promReadFile(filePath));

module.exports = readFile;
