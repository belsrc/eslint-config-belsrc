const path = require('path');
const fs = require('fs');
const writeFile = require('./write-file');

const main = async () => {
  const srcDir = path.join(__dirname, '../packages');

  const packages = fs
    .readdirSync(srcDir)
    .filter(item => fs.lstatSync(path.join(srcDir, item)).isDirectory());

  const proms = packages.map(async package => {
    const baseRulePath = `${ srcDir }/${ package }/_rules.js`;
    const rulePath = `${ srcDir }/${ package }/rules.json`;
    const r = require(baseRulePath);
    return writeFile(rulePath, JSON.stringify(r, null, 2));
  });

  await Promise.all(proms);
};

main();
