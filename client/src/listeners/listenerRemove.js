import {handlerRemove} from '../handlers/handlerRemove.js'

export const listenerRemove = (id) => {
    document.getElementById(id).addEventListener("click", handlerRemove);
};