let footerElement = document.querySelector('.footerbar')

function component() {
  let element = document.createElement('div');
  element.innerHTML = 'Curso Webpack';

  return element;
}

footerElement.appendChild(component());