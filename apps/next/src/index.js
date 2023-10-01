import TEST_CONSTANTS from './util/constants';

const { printNode16PackageVersion } = require('node16Dep');
console.log('App Node18 running version: ' + process.version);

printNode16PackageVersion();

TEST_CONSTANTS.map((item) => {
  console.log(item);
});
