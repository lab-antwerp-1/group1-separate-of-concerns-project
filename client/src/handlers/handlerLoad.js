import{data} from '../data.js';
import {renderList} from '../components/render.js';


export const handlerLoad = () => {
    const newList = renderList(data.books);   // run renderList() function to receive updated list and assign it to newList variable
    const listContainer = document.getElementById("displayScreen"); // get and assign display area to listContainer variable
    listContainer.innerHTML = '';  // assign empty string to listContainer.innerHTML to clear display screen, otherwise new list will be added to old list in the webpage
    listContainer.appendChild(newList); // add new list to display area with using appendChild() method
};