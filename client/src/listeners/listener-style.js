/* eslint-disable prettier/prettier */
/* eslint-disable folders/match-regex */
import { handlerStyle } from '../handlers/handler-style.js';

export const listenerStyle = (id) => {
  document.getElementById(id).addEventListener('click', handlerStyle);
};
