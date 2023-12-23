const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const strArr = [];
  const additionArr = [];
  let additionString = "";
  let strString = "";
  if (
    (options.addition ||
      typeof options.addition === "boolean" ||
      typeof options.addition === "object") &&
    options.additionRepeatTimes &&
    options.additionRepeatTimes > 1
  ) {
    for (let i = 0; i < options.additionRepeatTimes; i += 1) {
      additionArr.push(`${options.addition}`);
    }
  }
  if (
    (options.addition ||
      typeof options.addition === "boolean" ||
      typeof options.addition === "object") &&
    (!options.additionRepeatTimes || options.additionRepeatTimes === 1)
  ) {
    additionArr.push(`${options.addition}`);
  }
  if (additionArr.length) {
    if (options.additionSeparator) {
      additionString = additionArr.join(`${options.additionSeparator}`);
    }
    if (!options.additionSeparator) {
      additionString = additionArr.join("|");
    }
  }
  if (!options.repeatTimes || options.repeatTimes === 1) {
    strArr.push(str + additionString);
  }
  if (options.repeatTimes && options.repeatTimes > 1) {
    for (let i = 0; i < options.repeatTimes; i += 1) {
      strArr.push(str + additionString);
    }
  }
  if (options.separator) {
    strString = strArr.join(`${options.separator}`);
  }
  if (!options.separator) {
    strString = strArr.join("+");
  }

  return strString;
}

module.exports = {
  repeater,
};
