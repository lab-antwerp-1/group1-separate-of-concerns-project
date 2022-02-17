/* eslint-disable folders/match-regex */
import { listenerLoad } from '../listeners/listenerLoad.js';
import { listenerAdd } from '../listeners/listenerAdd.js';
import { listenerRemove } from '../listeners/listenerRemove.js';

listenerLoad();
listenerAdd('submitBtnAdd');
listenerRemove('submitBtnRemove');

/*
const data = {
    books: [{bookTitle: "War and Peace", author: "Leo Tolstoy", description: "War and Peace is a vast epic centred on Napoleon's war with Russia. While it expresses Tolstoy's view that history is an inexorable process which man cannot influence, he peoples his great novel with a cast of over five hundred characters. Three of these, the artless and delightful Natasha Rostov, the world-weary Prince Andrew Bolkonsky and the idealistic Pierre Bezukhov illustrate Tolstoy's philosophy in this novel of unquestioned mastery. "}]
};

const renderList = (array = []) => {
    const ol = document.createElement('ol');
    for (let object of array) {
      const li = document.createElement('li');
      li.innerHTML = `<div>
                        <h4>Book Title:</h4>
                        <p> ${object.bookTitle}\n</p>
                    </div>
                    <div>
                        <h4>Author:</h4>
                        <p> ${object.author}\n</p>
                    </div>
                    <div>
                        <h4>Description:</h4>
                        <p> ${object.description}\n</p>
                    </div>`;
      ol.appendChild(li);
    }
    return ol;
};

const handlerLoad = () => {
    const newList = renderList(data.books);
    const listContainer = document.getElementById("displayScreen");
    listContainer.innerHTML = '';
    listContainer.appendChild(newList);
};

const handlerAdd = () => {
    const bookNameInput = document.getElementById("bookName").value;
    const authorInput = document.getElementById("author").value;
    const descriptionInput = document.getElementById("description").value;

    // check that book title, author and description will have at least 2 characters without any space characters
    const validityCheck = (parameter) => {
        return parameter.split("").filter(v=>v!==" ").join("").length<2 ? true : false;
    };

    if(validityCheck(bookNameInput)){
        return document.getElementById("invalidEntryAdd").innerHTML=
                                    "Enter a valid input!";
    }
    if(validityCheck(authorInput)){
        return document.getElementById("invalidEntryAdd").innerHTML=
                                    "Enter a valid input!";
    }
    if(validityCheck(descriptionInput)){
        return document.getElementById("invalidEntryAdd").innerHTML=
                                    "Enter a valid input!";
    }
    data.books.push({bookTitle:bookNameInput,author:authorInput,description:descriptionInput});

    const newList = renderList(data.books);
    const listContainer = document.getElementById("displayScreen");
    listContainer.innerHTML = '';
    listContainer.appendChild(newList);
};

const handlerRemove = () => {
    const removeBook = document.getElementById("bookNameRemove").value;
    // check data whether given book name is available in the data
    if(data.books.every(v => v.bookTitle!==removeBook)){
        document.getElementById("invalidEntryRemove").innerHTML = "You don't have this book in your list!";
    }
    // if given book name is available in the data, then remove it
    for(let i=0; i<data.books.length; i++){
        if(data.books[i].bookTitle===removeBook){
            data.books.splice(i,1);git clone
            break;
        }
    }
    const newList = renderList(data.books);
    const listContainer = document.getElementById("displayScreen");
    listContainer.innerHTML = '';
    listContainer.appendChild(newList);
};


window.addEventListener("load", handlerLoad);
document.getElementById("submitBtnAdd").addEventListener("click", handlerAdd);
document.getElementById("submitBtnRemove").addEventListener("click", handlerRemove);


// see updated data in console
//console.log(data.books);
*/
