import TEST_CONSTANTS from './constants';

const { printNode16PackageVersion } = require('node16Dep');
console.log('App apps/next running version: ' + process.version);

printNode16PackageVersion();

TEST_CONSTANTS.map((item) => {
  console.log(item);
});
