'use strict'

// Удалить все переведённые на русский язык произведения по нажатию на клавишу

const KEY = 'Escape';


const hasMainTranslation = (el) => {
    const firstNotCycleTitle = el.querySelector('a:not([title])');
    // Класс "agray" содержит только иностранный заголовок
    const isTranslated = !firstNotCycleTitle.classList.contains('agray');

    return isTranslated;
}

const hasSideTranslation = (el) => {
    const font = el.querySelector('font:nth-of-type(2)');
    
    return (font !== null) && font.textContent.startsWith('[=');
};


const hasAnyTranslation = (el) =>
    hasMainTranslation(el) || hasSideTranslation(el);

const changeColor = (el, color) => {
    el.style.color = color;

    el.children.forEach((child) => changeColor(child, color));
};

const action = (el) =>
    el.remove();

const findTranslated = () => {
    let titles = document.querySelectorAll('.dots > span');
    titles = [...titles].filter(hasAnyTranslation);
    titles = titles.map((span) => span.closest('tr'));

    return titles;
};

const onDocumentKeydown = (evt) => {
    if (evt.key === KEY) {
        const titles = findTranslated();
        titles.forEach(action);

        document.removeEventListener(onDocumentKeydown);
    }
};


document.addEventListener('keydown', onDocumentKeydown);