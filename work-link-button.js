'use strict'

// Предоставить ссылку на произведение в формате [work=2088]Билет на планету Транай[/work]
// Для https://fantlab.ru/work*

let workLink = '';

const createLink = () => {
    const title = document.querySelector('[itemprop=name]').textContent;
    const workNumber = window.location.pathname.slice(5); // "/work2088" => "2088"

    workLink = `[work=${workNumber}]${title}[/work]`;
};

const copyLink = () =>
  navigator.clipboard.writeText(workLink);



const createButton = () => {
  const button = document.createElement('button');

  button.textContent = 'W';
  button.style.marginLeft = '20px';
  button.title = `Копировать для форума:\n\n${workLink}`;

  return button;
};

const addButton = () => {
  const container = document.querySelector('.main-info-block-header h1');
  const button = createButton();
  
  container.append(button);  

  button.addEventListener('click', copyLink);
};


createLink();
addButton();
