/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line spellcheck/spell-checker
/* eslint-disable filenames/match-regex */
/* eslint-disable folders/match-regex */

/**
 * Creates a boolean value after checking whether given book name is not in the array.
 * If the book title is not in the array, it returns true. Otherwise, false.
 *
 * @param {Array} arrayBookList - The array of objects to inspect.
 * @param {any} toRemove - The value to check.
 * @returns {boolean} - Returns a boolean value of true/false.
 *
 */

 export const isBookNotInTheList = (arrayBookList, bookToRemove) =>
  arrayBookList.every((v) => v.bookTitle !== bookToRemove);

