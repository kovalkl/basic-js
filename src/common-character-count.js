const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1WithoutSpace = s1.replaceAll(' ', '').split('');
  let counter = 0;
  const s2Arr = s2.split('');
  for (let i = 0; i < s1WithoutSpace.length; i += 1) {
    for (let j = 0; j < s2.length; j += 1) {
      if (s1WithoutSpace[i] === s2Arr[j]) {
        counter += 1;
        delete s2Arr[j]
        break;
      }
    }
  }
  return counter
}

module.exports = {
  getCommonCharacterCount
};
