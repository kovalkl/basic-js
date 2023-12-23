const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = "";
  let counter = 0;

  function checkPrevLetter(i) {
    if (str[i] === str[i - 1]) {
      counter += 1;
    }
    if (str[i] !== str[i - 1]) {
      counter = 1;
    }
  }

  // Проверка на пустую строку и цикл
  for (let i = 0; i < str.length; i += 1) {
    // Первый символ
    if (i === 0) {
      if (str[i] === str[i + 1]) {
        counter += 1;
      }
      if (str[i] !== str[i + 1]) {
        result += str[i];
      }
    }

    // Последующие символы
    if (i >= 1) {
      // Далее - конец строки или другой символ
      if (i === str.length || str[i] !== str[i + 1]) {
        checkPrevLetter(i);

        if (i < str.length - 1 && counter === 1) {
          result += str[i];
          counter = 0;
        }
        if (i === str.length - 1 || (i < str.length - 1 && counter > 1)) {
          if (counter === 1) {
            result += str[i];
          }
          if (counter > 1) {
            result += `${counter}${str[i]}`;
          }
          counter = 0;
        }
      }

      // Далее - такой же символ и не конец строки
      if (i < str.length - 1 && str[i] === str[i + 1]) {
        checkPrevLetter(i);
      }
    }
  }
  return result;
}

module.exports = {
  encodeLine,
};
