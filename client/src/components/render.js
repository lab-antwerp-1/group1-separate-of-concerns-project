/* eslint-disable folders/match-regex */
export const renderList = (array = []) => {
  const ol = document.createElement('ol');
  for (const object of array) {
    const li = document.createElement('li');
    li.innerHTML = `
    <div >
           <div>
              <h4>Book Title:</h4>
              <p> ${object.bookTitle}\n</p>
          </div>
          <div>
              <h4>Author:</h4>
              <p> ${object.author}\n</p>
         </div>
      <div>
          <h4>Summary:</h4>
         <p> ${object.summary}\n</p>
      </div>
    
    </div>
    
               `;
    ol.appendChild(li);
  }
  return ol;
};
