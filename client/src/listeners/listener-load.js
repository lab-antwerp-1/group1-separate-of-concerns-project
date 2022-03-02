/* eslint-disable spellcheck/spell-checker */
/* eslint-disable filenames/match-regex */
/* eslint-disable folders/match-regex */
import { handlerLoad } from '../handlers/handler-load.js';

export const listenerLoad = () => {
  window.addEventListener('load', handlerLoad);
};
