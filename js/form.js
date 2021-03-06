import { getData, sendData } from './api.js'
import { mainPinMarker, renderMarkers } from './map.js'
import { showSuccessMessage, showErrorMessage, replyOnDataError, LAT, LNG } from './util.js'

const adForm = document.querySelector('.ad-form')
const mapFilters = document.querySelector('.map__filters');
const addressLabel = document.querySelector('#address');
const resetButton = document.querySelector('.ad-form__reset');

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
  setTimeout(() => {addressLabel.value = `${LAT}, ${LNG}`}, 0)
}

const resetPage = function () {
  mainPinMarker.setLatLng([LAT, LNG]);
  mapFilters.reset();
  adForm.reset();
  setAddressToDefault();
  getData(renderMarkers, replyOnDataError);
}

// В случае отправки данных будет это:
const sendDataSuccess = function () {
  showSuccessMessage();
  resetPage();
}

// Обработчик кнопки ресет
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
  enableAdForm,
  enableMapFilters };
