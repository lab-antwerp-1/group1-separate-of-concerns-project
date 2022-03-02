/* eslint-disable prettier/prettier */
/* eslint-disable spellcheck/spell-checker */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable folders/match-regex */
export const handlerStyle = (event) => {
  const style = event.target.value;

  const bodyElement = document.getElementById('body');
  const mainElement = document.getElementById('root');
  const headerElement = document.getElementById('header');
  const addElement = document.getElementById('addBooks');
  const removeElement = document.getElementById('removeBooks');
  const screenElement = document.getElementById('displayScreen');
  const footerElement = document.getElementById('footer');
  const button1Element = document.getElementById('submitBtnAdd');
  const button2Element = document.getElementById('submitBtnRemove');

  bodyElement.classList.remove('body-classic', 'body-abstract', 'body-green');
  mainElement.classList.remove('main-classic', 'main-abstract', 'main-green');
  headerElement.classList.remove(
    'header-classic',
    'header-abstract',
    'header-green',
  );
  addElement.classList.remove(
    'section-add-classic',
    'section-add-abstract',
    'section-add-green',
  );
  removeElement.classList.remove(
    'section-remove-classic',
    'section-remove-abstract',
    'section-remove-green',
  );
  screenElement.classList.remove(
    'screen-classic',
    'screen-abstract',
    'screen-green',
  );
  footerElement.classList.remove(
    'footer-classic',
    'footer-abstract',
    'footer-green',
  );
  button1Element.classList.remove('btn-classic', 'btn-abstract', 'btn-green');
  button2Element.classList.remove('btn-classic', 'btn-abstract', 'btn-green');

  if (style === 'Abstract') {
    bodyElement.classList.add('body-abstract');
    mainElement.classList.add('main-abstract');
    headerElement.classList.add('header-abstract');
    addElement.classList.add('section-add-abstract');
    removeElement.classList.add('section-remove-abstract');
    screenElement.classList.add('screen-abstract');
    footerElement.classList.add('footer-abstract');
    button1Element.classList.add('btn-abstract');
    button2Element.classList.add('btn-abstract');
  }
  if (style === 'Green') {
    bodyElement.classList.add('body-green');
    mainElement.classList.add('main-green');
    headerElement.classList.add('header-green');
    addElement.classList.add('section-add-green');
    removeElement.classList.add('section-remove-green');
    screenElement.classList.add('screen-green');
    footerElement.classList.add('footer-green');
    button1Element.classList.add('btn-green');
    button2Element.classList.add('btn-green');
  }

  if (style === 'Classic') {
    bodyElement.classList.add('body-classic');
    mainElement.classList.add('main-classic');
    headerElement.classList.add('header-classic');
    addElement.classList.add('section-add-classic');
    removeElement.classList.add('section-remove-classic');
    screenElement.classList.add('screen-classic');
    footerElement.classList.add('footer-classic');
    button1Element.classList.add('btn-classic');
    button2Element.classList.add('btn-classic');
  }
};
