/* eslint-disable prettier/prettier */
/* eslint-disable spellcheck/spell-checker */
/* eslint-disable import/extensions */
/* eslint-disable filenames/match-regex */
/* eslint-disable folders/match-regex */
const modules = require('./sandbox');

const { formatSentence } = modules;

describe('Returns a formatted string of given input', () => {
  it('it deletes spaces at the end and begin of a given string', () => {
    expect(formatSentence('  Hello happy people    ')).toBe(
      'Hello happy people',
    );
  });
  it('it deletes spaces between the words if there are more than 1', () => {
    expect(
      formatSentence(' Where is  my car   keys?   I did not  see.    '),
    ).toBe('Where is my car keys? I did not see.');
  });
  it('it makes first letters of sentences uppercase', () => {
    expect(
      formatSentence(
        'I will come later.but, are you coming also? when will you come?',
      ),
    ).toBe('I will come later. But, are you coming also? When will you come?');
  });
  it('it insert a space after ".","?","!" characters if there was not, except end of sentence', () => {
    expect(
      formatSentence('good morning everybody!How can I help you?Tell me please.  '),
    ).toBe('Good morning everybody! How can I help you? Tell me please.');
  });
});
