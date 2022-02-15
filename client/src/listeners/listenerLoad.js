import {handlerLoad} from '../handlers/handlerLoad.js'

export const listenerLoad = () => {
    window.addEventListener("load", handlerLoad);
};