// eslint-disable-next-line spellcheck/spell-checker
/* eslint-disable filenames/match-regex */
/* eslint-disable folders/match-regex */
import { handlerAdd } from '../handlers/handlerAdd.js';

export const listenerAdd = (id) => {
  document.getElementById(id).addEventListener('click', handlerAdd);
};
