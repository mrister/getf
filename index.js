'use strict'
// import get from 'lodash.get'
const get = require('lodash.get')

module.exports = function getf(object, paths, defaultValue) {
  const allPaths = Array.isArray(paths)  ? paths : [paths];
  for (const path of allPaths) {
    if  (!path) continue;
    const val = get(object, path);
    if (val !== undefined)  return val;
  }

  return defaultValue;
}
