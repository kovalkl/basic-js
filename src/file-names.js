const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const resultArr = [];
  const resultCounter = {};
  for (let i = 0; i < names.length; i += 1) {
    if (resultArr.includes(names[i])) {
      let itemCount = resultCounter[names[i]];
      resultArr.push(`${names[i]}(${itemCount})`);
      resultCounter[`${names[i]}(${itemCount})`] = 1;
      resultCounter[names[i]] += 1;
    } else {
      resultArr.push(names[i]);
      resultCounter[names[i]] = 1;
    }
  }
  return resultArr;
}

module.exports = {
  renameFiles,
};
