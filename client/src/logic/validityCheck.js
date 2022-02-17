/* eslint-disable spellcheck/spell-checker */
/* eslint-disable filenames/match-regex */
/* eslint-disable folders/match-regex */

// check that user input (book title, author and description) will have at least 2 characters without any space characters
export const validityCheck = (parameter) =>
  parameter
    .split('')
    .filter((v) => v !== ' ')
    .join('').length < 2;
