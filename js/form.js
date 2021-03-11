import { getData, sendData } from './api.js'
import { mainPinMarker, renderMarkers } from './map.js'
import { showSuccessMessage, showErrorMessage, replyOnDataError } from './util.js'

const adForm = document.querySelector('.ad-form')
const mapFilters = document.querySelector('.map__filters');
const addressLabel = document.querySelector('#address');

// Функции для перевода страницы в неактивное состояние
const disableAdForm = function () {
  adForm.classList.add('ad-form--disabled')

  for (let i = 0; i < adForm.children.length; i++) {
    adForm.children[i].setAttribute('disabled', 'disabled')
  }
}

const disableMapFilters = function () {
  mapFilters.classList.add('ad-form--disabled')

  for (let i = 0; i < mapFilters.children.length; i++) {
    mapFilters.children[i].setAttribute('disabled', 'disabled')
  }
}

const disablePage = function () {
  disableAdForm(),
  disableMapFilters()
}

// Функции для включения страницы
const enableAdForm = function () {
  adForm.classList.remove('ad-form--disabled')

  for (let i = 0; i < adForm.children.length; i++) {
    adForm.children[i].removeAttribute('disabled')
  }
}

const enableMapFilters = function () {
  mapFilters.classList.remove('ad-form--disabled')

  for (let i = 0; i < mapFilters.children.length; i++) {
    mapFilters.children[i].removeAttribute('disabled')
  }
}

// Возвращение фильтров и страницы в изначальное состояние
const setAddressToDefault = function () {
  addressLabel.value = '35.68128, 139.75296'
}

const resetPage = function () {
  mainPinMarker.setLatLng([35.68128, 139.75296]);
  mapFilters.reset();
  adForm.reset();
  setTimeout(() => {setAddressToDefault()}, 0);
  getData(renderMarkers, replyOnDataError);
}

// В случае отправки данных будет это:
const sendDataSuccess = function () {
  showSuccessMessage();
  resetPage();
}

// Обработчик кнопки ресет
const resetButton = document.querySelector('.ad-form__reset')

resetButton.addEventListener('click', () => {
  resetPage();
})


// Обработка нажатия кнопки Отправить
adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);

  sendData(formData, sendDataSuccess, showErrorMessage);
});

export {
  disableMapFilters,
  disablePage,
  enableAdForm,
  enableMapFilters };
