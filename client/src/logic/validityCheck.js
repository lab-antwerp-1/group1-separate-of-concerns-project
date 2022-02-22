/* eslint-disable spellcheck/spell-checker */
/* eslint-disable filenames/match-regex */
/* eslint-disable folders/match-regex */

//  without any space characters
/**
 * Check whether given parameter have at least 2 characters after space characters are removed
 * If parameter length is less than 2, it return true. Otherwise, false.
 *
 * @param {string} userInput - The user input to check.
 * @returns {boolean} - Returns a boolean value of true/false.
 *
 */

export const validityCheck = (userInput) =>
  String(userInput)
    .split('')
    .filter((v) => v !== ' ')
    .join('').length < 2;
