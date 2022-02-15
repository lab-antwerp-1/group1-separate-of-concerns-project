import {handlerAdd} from '../handlers/handlerAdd.js'

export const listenerAdd = (id) => {
    document.getElementById(id).addEventListener("click", handlerAdd);
};

