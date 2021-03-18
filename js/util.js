import { disableMapFilters } from './form.js'

const main = document.querySelector('main');
const errorTemplate = document.querySelector('#error').content;
const errorMessage = errorTemplate.querySelector('.error');
const newErrorMessage = errorMessage.cloneNode(true);
const successTemplate = document.querySelector('#success').content;
const successMessage = successTemplate.querySelector('.success');
const newSuccessMessage = successMessage.cloneNode(true);
// Координаты центра Токио
const LAT = 35.68128;
const LNG = 139.75296;

// Плашка с сообщением на красном фоне
const showAlert = (message, time) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, time);
}

// Действия в случае незагрузки обьявлений
const replyOnDataError = function () {
  disableMapFilters(),
  showAlert('На этой странице обьявлений не будет!', 4000)
}

// Работаем с отправкой формы
// Неуспешная
const showErrorMessage = function () {
  newErrorMessage.style.zIndex ='1000'
  main.appendChild(newErrorMessage)

  document.addEventListener('keydown', (evt) => {
    if (evt.key === ('Escape' || 'Esc')) {
      newErrorMessage.remove()
    }
  })
  document.addEventListener('click', () => {
    newErrorMessage.remove()
  })
}

// Успешная
const showSuccessMessage = function () {
  newSuccessMessage.style.zIndex ='1000'
  main.appendChild(newSuccessMessage);

  document.addEventListener('keydown', (evt) => {
    if (evt.key === ('Escape' || 'Esc')) {
      newSuccessMessage.remove()
    }
  })
  document.addEventListener('click', () => {
    newSuccessMessage.remove()
  })
}

export {
  replyOnDataError,
  showErrorMessage,
  showSuccessMessage,
  LAT,
  LNG
};
