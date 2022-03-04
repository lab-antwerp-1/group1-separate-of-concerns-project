/* eslint-disable folders/match-regex */
export const renderList = (array = []) => {
  const ol = document.createElement('ol');
  for (const object of array) {
    let randomImage = Math.floor((Math.random() * 4) + 0);
      console.log(randomImage);
    const li = document.createElement('li');
    li.innerHTML = `
           <div class = row>

       <div class="col-6">
               <h1><img src="${object.image[randomImage]}" alt="" id = "img"></h1>
    </div>
    <div class="col-6">
    
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

    </div>
          
               `;
    ol.appendChild(li);
  }
  return ol;
};
