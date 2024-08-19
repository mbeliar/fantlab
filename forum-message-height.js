'use strict'

// Расширить поле для ввода сообщения на форуме

const messageArea = document.querySelector('[name=message]');
const scrollHeight = messageArea.scrollHeight + 10;

messageArea.style.height = `${scrollHeight}px`;