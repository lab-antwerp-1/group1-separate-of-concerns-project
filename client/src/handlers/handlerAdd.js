import{data} from '../data.js';
import {renderList} from '../components/render.js';
import {validityCheck} from '../logic/validityCheck.js';

export const handlerAdd = () => {
    const bookNameInput = document.getElementById("bookName").value;  //get Book Title info from <input> using ID 
    const authorInput = document.getElementById("author").value;  //get Author info from <input> tag using ID
    const descriptionInput = document.getElementById("description").value; //get Description info from <textarea> using ID
 
    if(validityCheck(bookNameInput)){                // check whether user input at least 2 characters
        return document.getElementById("invalidEntryAdd").innerHTML=
                                    "Enter a valid input!";  // if user input is less than 2 characters, warning appears
    }
    if(validityCheck(authorInput)){                 // check whether user input at least 2 characters
        return document.getElementById("invalidEntryAdd").innerHTML=
                                    "Enter a valid input!";  // if user input is less than 2 characters, warning appears
    }
    if(validityCheck(descriptionInput)){             // check whether user input at least 2 characters
        return document.getElementById("invalidEntryAdd").innerHTML=
                                    "Enter a valid input!";  // if user input is less than 2 characters, warning appears
    }
    // push user input (as object {bookTitle:" ",author:" ",description: " "}) into data.books array (books is an array in data object)
    data.books.push({bookTitle:bookNameInput,author:authorInput,description:descriptionInput});

    const newList = renderList(data.books);   // run renderList() function to receive updated list and assign it to newList variable
    const listContainer = document.getElementById("displayScreen"); // get and assign display area to listContainer variable
    listContainer.innerHTML = '';  // assign empty string to listContainer.innerHTML to clear display screen, otherwise new list will be added to old list in the webpage
    listContainer.appendChild(newList); // add new list to display area with using appendChild() method
};