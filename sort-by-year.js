'use strict'

const list = document.querySelector('#childrens_list tbody');
const all = list.children;

/**
 * 
 * @param {HTMLTableRowElement} tr 
 * @returns {string}
 */
const getYear = (tr) =>
  tr.getAttribute('year');

// const compare = (a, b) =>
//   getYear(a) > getYear(b);

const compare = (a, b) => {
  const res = getYear(a) > getYear(b);
  // console.log(a.getAttribute('year'), '>', b.getAttribute('year'), res);
  return res;
}



const sort = () => {
  [...all].sort(compare);
};

const deleteCycleTitle = (tr) => {
  if (tr.querySelector('.li-custom-cycle-empty')) {
    tr.remove();
  }
};


const deleteCycleTitles = () => {
  [...all].forEach(deleteCycleTitle);
  const arr = [...all];
  arr.sort(compare);
  const fragment = document.createDocumentFragment();
  arr.forEach((tr) => fragment.append(tr));
  arr.forEach((tr) => console.log(tr.getAttribute('year')));
};


const addBtn = () => {
  const sortContainer = document.querySelector('p > span[style="float:right"]');
  const yearBtn = sortContainer.querySelector('a[title="Сортировать по году издания"]');

  const myBtn = yearBtn.cloneNode(true);
  myBtn.textContent = 'по году+';
  myBtn.removeAttribute('onclick');
  myBtn.addEventListener('click', deleteCycleTitles);

  sortContainer.append(myBtn);
};
addBtn();
