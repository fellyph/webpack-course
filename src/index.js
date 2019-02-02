let footerElement = document.querySelector('.footerbar')

function component() {
  let element = document.createElement('div');
  element.innerHTML = 'Curso webpack';

  return element;
}

footerElement.appendChild(component());