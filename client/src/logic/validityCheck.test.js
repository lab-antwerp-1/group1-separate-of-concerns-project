/* eslint-disable prettier/prettier */
/* eslint-disable spellcheck/spell-checker */
/* eslint-disable no-undef */
/* eslint-disable filenames/match-regex */
/* eslint-disable import/extensions */
/* eslint-disable folders/match-regex */

const modules = require('./sandbox');

const {validityCheck} = modules;

describe('Returns true if the given parameter length is less than 2 after space characters are removed', () => {
  it('returns true if the given parameter length is 1', () => {
    expect(validityCheck('a')).toBe(true);
  });
  it('returns true if the given parameter length is 1 after space characters are removed', () => {
    expect(validityCheck('a   ')).toBe(true);
  });
  it('returns true if the given parameter length is 0', () => {
    expect(validityCheck('')).toBe(true);
  });
  it('returns true if the given parameter length is 0 after space characters are removed', () => {
    expect(validityCheck('     ')).toBe(true);
  });
  it('returns false if the given parameter length is 2', () => {
    expect(validityCheck('Hi')).toBe(false);
  });
  it('returns false if the given parameter length is more than 2', () => {
    expect(validityCheck('Hello')).toBe(false);
  });
});
