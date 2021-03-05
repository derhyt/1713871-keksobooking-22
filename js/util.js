import { mainPinMarker } from './map.js'
import { disableMapFilters, mapFilters, addressLabel } from './form.js'

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

// Обработчик кнопки ресет
const resetButton = document.querySelector('.ad-form__reset')

const setAddressToDefault = function () {
  addressLabel.value = '35.68128, 139.75296'
}
resetButton.addEventListener('click', () => {
  mainPinMarker.setLatLng([35.68128, 139.75296]);
  mapFilters.reset();
  setTimeout(() => {setAddressToDefault()}, 0)
})

// Реализуем показ сообщения ошибки отправки формы
const main = document.querySelector('main')

const errorTemplate = document.querySelector('#error').content
const errorMessage = errorTemplate.querySelector('.error')
const newErrorMessage = errorMessage.cloneNode(true)

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

// Сообщение об удачной отправке формы
const successTemplate = document.querySelector('#success').content
const successMessage = successTemplate.querySelector('.success')
const newSuccessMessage = successMessage.cloneNode(true)

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
  showSuccessMessage
};
