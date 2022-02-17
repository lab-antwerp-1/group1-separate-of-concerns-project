// eslint-disable-next-line spellcheck/spell-checker
/* eslint-disable filenames/match-regex */
/* eslint-disable folders/match-regex */
export const isBookInTheList = (arrayBookList, bookToRemove) =>
  arrayBookList.every((v) => v.bookTitle !== bookToRemove);
