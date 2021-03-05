import { sendData } from './api.js'

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

  addressLabel.setAttribute('disabled', 'disabled')
}

const enableMapFilters = function () {
  mapFilters.classList.remove('ad-form--disabled')

  for (let i = 0; i < mapFilters.children.length; i++) {
    mapFilters.children[i].removeAttribute('disabled')
  }
}

// Обработка нажатия кнопки Отправить
adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);

  sendData(formData)
});

export { mapFilters,
  addressLabel,
  disableMapFilters,
  disablePage,
  enableAdForm,
  enableMapFilters };
