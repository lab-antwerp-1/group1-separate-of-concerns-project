/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
/* eslint-disable folders/match-regex */
import { listenerLoad } from '../listeners/listener-load.js';
import { listenerAdd } from '../listeners/listener-add.js';
import { listenerRemove } from '../listeners/listener-remove.js';
import { listenerStyle } from '../listeners/listener-style.js';

listenerLoad();
listenerAdd('submitBtnAdd');
listenerRemove('submitBtnRemove');
listenerStyle('style-type');
