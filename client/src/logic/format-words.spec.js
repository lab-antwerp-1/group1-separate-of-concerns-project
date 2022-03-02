/* eslint-disable prettier/prettier */
/* eslint-disable spellcheck/spell-checker */
/* eslint-disable import/extensions */
/* eslint-disable filenames/match-regex */
/* eslint-disable folders/match-regex */
const modules = require('./sandbox');

const { formatWords } = modules;

describe('Returns a formatted string of given input', () => {
  it('it deletes spaces at the end and begin of a given string', () => {
    expect(formatWords('  War And Peace  ')).toBe('War And Peace');
  });
  it('it deletes spaces between the words if there are more than 1', () => {
    expect(formatWords('Hard Times  Are   Coming  ')).toBe(
      'Hard Times Are Coming',
    );
  });
  it('it makes first letters of words uppercase', () => {
    expect(formatWords('  new World history  ')).toBe('New World History');
  });
  it('it makes all letters of words lowercase except first letter', () => {
    expect(formatWords('charlES DickENs  ')).toBe('Charles Dickens');
  });
});
