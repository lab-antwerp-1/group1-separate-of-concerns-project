/* eslint-disable prettier/prettier */
/* eslint-disable spellcheck/spell-checker */
/* eslint-disable sonarjs/no-identical-functions */
/* eslint-disable filenames/match-regex */
/* eslint-disable folders/match-regex */
/**
 * Given a string input, the function will delete all space characters from the end and
 * begin of the string. Then, if there are more than 1 space characters between
 * words, it will delete all extra spaces. Lastly, it will make first letter of sentence
 * uppercase.
 *
 * @param {string} userInput - The string to format.
 * @returns {string} - Returns a formatted string.
 *
 */
export const formatSentence = (userInput) =>
  userInput
    .trim()
    .split('')
    .filter(
      (v, i, arr) => arr[i] !== ' ' || (arr[i] === ' ' && arr[i + 1] !== ' '),
    )
    .join('')
    .split('.')
    .map((v) => v.trim().slice(0, 1).toUpperCase() + v.trim().slice(1))
    .join('. ')
    .trim()
    .split('?')
    .map((v) =>
      (v !== '' ? v.trim().slice(0, 1).toUpperCase() + v.trim().slice(1) : v),
    )
    .join('? ')
    .trim()
    .split('!')
    .map((v) =>
      (v !== '' ? v.trim().slice(0, 1).toUpperCase() + v.trim().slice(1) : v),
    )
    .join('! ')
    .trim();
