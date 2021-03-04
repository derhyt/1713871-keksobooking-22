import { mainPinMarker } from './map.js'

// Доработал функцию отсюда: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomNumb = function (min, max) {
  if (min > max || max < 0) {return}
  if (min < 0) {min = 0}
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomFraction = function (min, max, period = 0) {
  const expon = 10**period;
  return (getRandomNumb(min*expon, max*expon))/expon;
};

const getRandomIndex = function (array) {
  const lengthArray = array.length - 1;
  const randomIndex = getRandomNumb(0, lengthArray);
  return array[randomIndex];
};

// Эта функция создает массив из случайного количества элементов другого массива
const getRandomFoundedArray = function (array) {
  const newArray = new Array(1).fill(getRandomIndex(array));
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== newArray[0]) {
      if (getRandomNumb(0, 1) === 1) {
        newArray.push(array[i])
      }
    }
  }
  return newArray;
};

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

const mapFilters = document.querySelector('.map__filters');
const address = document.querySelector('#address');
const setAddressToDefault = function () {
  address.value = '35.68128, 139.75296'
}

// Действия в случае незагрузки обьявлений
const replyOnDataError = function () {
  mapFilters.classList.add('ad-form--disabled');

  for (let i = 0; i < mapFilters.children.length; i++) {
    mapFilters.children[i].setAttribute('disabled', 'disabled')}

  showAlert('На этой странице обьявлений не будет!', 4000)
}

// Действия при ресете страницы
const resetPage = function () {
  mainPinMarker.setLatLng([35.68128, 139.75296]);
  mapFilters.reset();
  setTimeout(() => {setAddressToDefault()}, 0)
}

// Обработчик кнопки ресет
const resetButton = document.querySelector('.ad-form__reset')
resetButton.addEventListener('click', () => {
  resetPage()
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

export { getRandomNumb,
  getRandomFraction,
  getRandomIndex,
  getRandomFoundedArray,
  replyOnDataError,
  resetPage,
  showErrorMessage,
  showSuccessMessage
};
