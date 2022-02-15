export const renderList = (array = []) => {
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