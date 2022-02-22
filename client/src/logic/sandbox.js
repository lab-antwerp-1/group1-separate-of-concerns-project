/* eslint-disable prettier/prettier */
/* eslint-disable folders/match-regex */
const isBookNotInTheList = (arrayBookList, bookToRemove) =>
  arrayBookList.every((v) => v.bookTitle !== bookToRemove);

const validityCheck = (userInput) =>
  String(userInput)
    .split('')
    .filter((v) => v !== ' ')
    .join('').length < 2;

module.exports = {
    isBookNotInTheList,
    validityCheck
}
