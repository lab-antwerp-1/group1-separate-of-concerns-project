import{data} from '../data.js';
import {renderList} from '../components/render.js'
import { isBookInTheList } from '../logic/isBookInTheList.js';

export const handlerRemove = () => {
    const removeBook = document.getElementById("bookNameRemove").value; //get Book Title info (to remove) from <input> using ID 

    // check data file whether given book name is available in the data
    if(isBookInTheList(data.books)){
        document.getElementById("invalidEntryRemove").innerHTML = "You don't have this book in your list!";
    }
    // if given book name is available in the data, it will be removed
    for(let i=0; i<data.books.length; i++){
        const booksArray = data.books;
        if(booksArray[i].bookTitle===removeBook){
            booksArray.splice(i,1);
            break;
        }
    }
    const newList = renderList(data.books);   // run renderList() function to receive updated list and assign it to newList variable
    const listContainer = document.getElementById("displayScreen"); // get and assign display area to listContainer variable
    listContainer.innerHTML = '';  // assign empty string to listContainer.innerHTML to clear display screen, otherwise new list will be added to old list in the webpage
    listContainer.appendChild(newList); // add new list to display area with using appendChild() method
};