import * as util from './util.js';

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
    avatar: `img/avatars/user0${util.getRandomNumb(1, 8)}.png`,
  };
};

const createLocation = function () {
  return {
    x: util.getRandomFraction(35.65, 35.7, 5),
    y: util.getRandomFraction(139.7, 139.8, 5),
  };
};

const createOffer = function () {
  return {
    title: util.getRandomIndex(TITLE_OPTIONS),
    address: Object.values(createLocation()).join(', '),
    price: util.getRandomNumb(1, 997),
    type: util.getRandomIndex(TYPE_OPTIONS),
    rooms: util.getRandomNumb(1, 17),
    guests: util.getRandomNumb(1, 13),
    checkin: util.getRandomIndex(CHECK_OPTIONS),
    checkout: util.getRandomIndex(CHECK_OPTIONS),
    features: util.getRandomFoundedArray(FEATURE_OPTIONS),
    description: util.getRandomIndex(DESCRIPTION_OPTIONS),
    photos: util.getRandomFoundedArray(PHOTO_OPTIONS),
  };
};

// Собираем обьявление из обьектов
const createNewAd = function () {
  const newAd = {
    author: createAuthor(),
    offer: createOffer(),
    location: createLocation(),
  }
  return newAd
};

// Получаем массив из обьявлений
const getAds = () => new Array(10).fill(null).map(() => createNewAd());

export { getAds };
