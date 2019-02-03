let footerElement = document.querySelector('.footerbar')

let addConteudo = () => {
  let element = document.createElement('div');
  element.innerHTML = 'Curso Webpack';

  return element;
}

footerElement.appendChild(addConteudo());