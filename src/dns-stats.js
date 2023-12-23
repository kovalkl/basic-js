const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let domainsArr = [];
  domains.forEach((el) => {
    domainsArr.push(el);
    for (let i = 0; i < el.length; i += 1) {
      if (el[i] === ".") {
        domainsArr.push(el.slice(i));
      }
    }
  });
  const reverseDomainsArr = domainsArr.map((el) => {
    let newEl = el;
    if (el[0] === ".") {
      newEl = el.slice(1);
    }
    return `.${newEl.split(".").reverse().join(".")}`;
  });
  const valueArr = {};
  reverseDomainsArr.forEach((el) => {
    if (valueArr[el]) {
      valueArr[el] += 1;
    }
    if (!valueArr[el]) {
      valueArr[el] = 1;
    }
  });
  return valueArr;
}

module.exports = {
  getDNSStats,
};
