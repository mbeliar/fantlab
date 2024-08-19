'use strict'

// Расширить поле для ввода сообщения на форуме

const messageArea = document.querySelector('[name=message]');


const setHeight = () => {
  messageArea.style.height = 'auto';

  const scrollHeight = messageArea.scrollHeight + 5;   
  messageArea.style.height = `${scrollHeight}px`;
};


setHeight();

messageArea.addEventListener('input', setHeight);