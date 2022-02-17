/* eslint-disable spellcheck/spell-checker */
/* eslint-disable filenames/match-regex */
/* eslint-disable folders/match-regex */
import { handlerRemove } from '../handlers/handlerRemove.js';

export const listenerRemove = (id) => {
  document.getElementById(id).addEventListener('click', handlerRemove);
};
