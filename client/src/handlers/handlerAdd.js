// eslint-disable-next-line spellcheck/spell-checker
/* eslint-disable filenames/match-regex */
/* eslint-disable folders/match-regex */
// eslint-disable-next-line boundaries/no-unknown
import { data } from '../data.js';
import { renderList } from '../components/render.js';
import { validityCheck } from '../logic/validityCheck.js';
import { formatWords } from '../logic/formatWords.js';
import { formatSentence } from '../logic/formatSentence.js';

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
    bookTitle: formatWords(bookNameInput),
    author: formatWords(authorInput),
    summary: formatSentence(summaryInput),
  });

  const newList = renderList(data.books); // run renderList() function to receive updated list and assign it to newList variable
  const listContainer = document.getElementById('displayScreen'); // get and assign display area to listContainer variable
  listContainer.innerHTML = ''; // assign empty string to listContainer.innerHTML to clear display screen, otherwise new list will be added to old list in the webpage
  listContainer.appendChild(newList); // add new list to display area with using appendChild() method
};
