// eslint-disable-next-line spellcheck/spell-checker
/* eslint-disable filenames/match-regex */
/* eslint-disable folders/match-regex */
// eslint-disable-next-line boundaries/no-unknown
import { data } from '../data.js';
import { renderList } from '../components/render.js';
import { validityCheck } from '../logic/validityCheck.js';
import { formatWords } from '../logic/format-words.js';
import { formatSentence } from '../logic/format-sentence.js';

export const handlerAdd = () => {
  const bookNameInput = document.getElementById('bookName').value; // get Book Title info from <input> using ID
  const authorInput = document.getElementById('author').value; // get Author info from <input> tag using ID
  const summaryInput = document.getElementById('summary').value; // get Summary info from <textarea> using ID

  // check whether user input at least 2 characters,
  // if user input is less than 2 characters, warning appears
  if (validityCheck(bookNameInput)) {
    document.getElementById('invalidEntryAdd').innerHTML =
      'Enter a valid Book Title!';
    return;
  }
  if (validityCheck(authorInput)) {
    document.getElementById('invalidEntryAdd').innerHTML =
      'Enter a valid Author name!';
    return;
  }
  if (validityCheck(summaryInput)) {
    document.getElementById('invalidEntryAdd').innerHTML =
      'Enter a valid Summary!';
    return;
  }

  // push user input (as object {bookTitle:" ",author:" ",summary: " "}) into data.books array (books is an array in data object)
  data.books.push({
    image: ['https://images.unsplash.com/photo-1510172951991-856a654063f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80','https://images.unsplash.com/photo-1491841573634-28140fc7ced7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80','https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940','https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'],
    bookTitle: formatWords(bookNameInput),
    author: formatWords(authorInput),
    summary: formatSentence(summaryInput),
  });

  const newList = renderList(data.books); // run renderList() function to receive updated list and assign it to newList variable
  const listContainer = document.getElementById('displayScreen'); // get and assign display area to listContainer variable
  listContainer.innerHTML = ''; // assign empty string to listContainer.innerHTML to clear display screen, otherwise new list will be added to old list in the webpage
  listContainer.appendChild(newList); // add new list to display area with using appendChild() method
};
