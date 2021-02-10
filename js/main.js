'use strict';

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

// Создаю массивы с вариантами параметров
const TYPE_OPTIONS = ['palace', 'flat', 'house', 'bungalow'];
const CHECK_OPTIONS = ['12:00', '13:00', '14:00'];
const FEATURE_OPTIONS = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner']
const PHOTO_OPTIONS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];
const TITLE_OPTIONS = [
  'Предлагаем дом в историческом районе города.',
  'Сдается квартира в баре. Вы не захотите смотреть другие варианты!',
  'Сдается чистая, просторная жил-площадь в центре Токио!',
  'Просмотрите это обьявление с квартирой.',
];
const DESCRIPTION_OPTIONS = [
  'Это обьявление оказалось здесь случайно, не верьте ему.',
  'Отзывы говорят, что эта квартира должна вам понравиться.',
  'Просто выберите нас и нажмите нужные кнопки.',
  'Предложение нереально - мы просто хотим похвастаться видом из окна.',
  'Курить на кухне. Можно с котиками. Только для японцев.',
  'Хотели бы пожить в лофте? Мы тоже...',
];

// Функции генерирующие обьекты для обьяления
const createAuthor = function () {
  return {
    avatar: `img/avatars/user0${getRandomNumb(1, 8)}.png`,
  };
};

const createLocation = function () {
  return {
    x: getRandomFraction(35.65, 35.7, 5),
    y: getRandomFraction(139.7, 139.8, 5),
  };
};

const createOffer = function () {
  return {
    title: getRandomIndex(TITLE_OPTIONS),
    address: Object.values(createLocation()).join(', '),
    price: getRandomNumb(1, 997),
    type: getRandomIndex(TYPE_OPTIONS),
    rooms: getRandomNumb(1, 17),
    guests: getRandomNumb(1, 13),
    checkin: getRandomIndex(CHECK_OPTIONS),
    checkout: getRandomIndex(CHECK_OPTIONS),
    features: getRandomFoundedArray(FEATURE_OPTIONS),
    description: getRandomIndex(DESCRIPTION_OPTIONS),
    photos: getRandomFoundedArray(PHOTO_OPTIONS),
  };
};

// Собираем обьявление из обьектов
const createNewAd = function () {
  const newAd = {
    Author: createAuthor(),
    Offer: createOffer(),
    Location: createLocation(),
  }
  return newAd
};

// Создаем массив из обьявлений
const someAds = new Array(10).fill(null).map(() => createNewAd());

// Это тут, чтобы линтер не жаловался
someAds.join();
