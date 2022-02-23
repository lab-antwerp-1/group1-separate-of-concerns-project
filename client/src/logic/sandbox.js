/* eslint-disable prettier/prettier */
/* eslint-disable folders/match-regex */
const isBookNotInTheList = (arrayBookList, bookToRemove) =>
  arrayBookList.every((v) => v.bookTitle !== bookToRemove);

const validityCheck = (userInput) =>
  String(userInput)
    .split('')
    .filter((v) => v !== ' ')
    .join('').length < 2;

const formatWords = (userInput) =>
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

const formatSentence = (userInput) =>
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

module.exports = {
  isBookNotInTheList,
  validityCheck,
  formatWords,
  formatSentence,
};
