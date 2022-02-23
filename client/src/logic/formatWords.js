/* eslint-disable prettier/prettier */
/* eslint-disable spellcheck/spell-checker */
/* eslint-disable filenames/match-regex */
/* eslint-disable folders/match-regex */
/**
 * Given a string input, the function will delete all space characters from the end and
 * begin of the string. Then, if there are more than 1 space characters between
 * words, it will delete all extra spaces. Lastly, it will make first letter of words
 * uppercase and other letters lowercase.
 *
 * @param {string} userInput - The string to format.
 * @returns {string} - Returns a formatted string.
 *
 */

export const formatWords = (userInput) =>
  userInput
    .trim()
    .split('')
    .filter(
      (v, i, arr) => arr[i] !== ' ' || (arr[i] === ' ' && arr[i + 1] !== ' '),
    )
    .join('')
    .split(' ')
    .map((v) => v[0].toUpperCase() + v.slice(1).toLowerCase())
    .join(' ');
