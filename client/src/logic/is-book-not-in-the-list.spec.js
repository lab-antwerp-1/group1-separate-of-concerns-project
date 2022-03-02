/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable spellcheck/spell-checker */
/* eslint-disable no-undef */
// eslint-disable-next-line spellcheck/spell-checker
/* eslint-disable filenames/match-regex */
/* eslint-disable folders/match-regex */

const modules = require('./sandbox');

const {isBookNotInTheList} = modules;

describe('Returns true if the given book title is not in the given list', () => {
  it('returns false if the given book title is in the list', () => {
    expect(
      isBookNotInTheList(
        [
          {
            bookTitle: 'War and Peace',
            author: 'Leo Tolstoy',
            summary: 'War is not good',
          },
        ],
        'War and Peace',
      )
    ).toBe(false);
  });
  it('returns false if the given book title is in the list', () => {
    expect(
      isBookNotInTheList(
        [
          {
            bookTitle: 'Chess',
            author: 'Stefan Zweig',
            summary: 'It is a very good book',
          },
        ],
        'Chess',
      )
    ).toBe(false);
  });
  it('returns true if the given book title is not in the list', () => {
    expect(
      isBookNotInTheList(
        [
          {
            bookTitle: 'Hard Times',
            author: 'Charles Dickens',
            summary: 'It is a famous book',
          },
        ],
        'Game of Thrones',
      )
    ).toBe(true);
  });
  it('returns true if an empty string is given as parameter to check with the list', () => {
    expect(
      isBookNotInTheList(
        [
          {
            bookTitle: 'Crime and Punishment',
            author: 'Dostoyevski',
            summary: 'It is a masterpiece',
          },
        ],
        '',
      )
    ).toBe(true);
  });
});
