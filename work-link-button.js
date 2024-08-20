'use strict'

// Предоставить ссылку на произведение в формате [work=2088]Билет на планету Транай[/work]

const makeLink = () => {
    const title = document.querySelector('[itemprop=name]').textContent;
    const workNumber = window.location.pathname.slice(5); // "/work2088" => "2088"

    const workLink = `[work=${workNumber}]${title}[/work]`;

    return workLink;
};

const showLink = () => {
  const workLink = makeLink();
  alert(workLink);
};



const createButton = () => {
  const button = document.createElement('button');

  button.textContent = 'W';
  button.style.marginLeft = '20px';

  return button;
};

const addButton = () => {
  const container = document.querySelector('.main-info-block-header h1');
  const button = createButton();
  
  container.append(button);  

  button.addEventListener('click', showLink);
};


addButton();
