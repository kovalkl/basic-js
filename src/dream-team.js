const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const firstLettersOfNames = [];
  if (members && members.length > 0) {
    members.forEach((name) => {
      if (typeof name === "string") {
        firstLettersOfNames.push(name.trim()[0].toUpperCase());
      }
    });
  }
  return firstLettersOfNames.sort().join("");
}

module.exports = {
  createDreamTeam,
};
