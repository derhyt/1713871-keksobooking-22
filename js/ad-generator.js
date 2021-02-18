import { createSomeAds } from './data.js';

// Создаю шаблон обьявления
const adTemplate = document.querySelector('#card').content;
const newAdTemplate = adTemplate.querySelector('.popup');

// Функция для определения типа помещения
const getType = function (type) {
  switch (type) {
    case 'flat':
      return 'Квартира';
    case 'bungalow':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'palace':
      return 'Дворец';
  }
};

// Тут происходит заполнение шаблон информацией
const getFoundedAd = function(adExample) {
  const ad = newAdTemplate.cloneNode(true);
  const offer = adExample.offer
  const adList = document.querySelector('#map-canvas');

  const title = ad.querySelector('.popup__title');
  const address = ad.querySelector('.popup__text--address');
  const price = ad.querySelector('.popup__text--price');
  const type = ad.querySelector('.popup__type');
  const capacity = ad.querySelector('.popup__text--capacity');
  const time = ad.querySelector('.popup__text--time');
  const feature = ad.querySelector('.popup__features');
  const description = ad.querySelector('.popup__description');
  const div = ad.querySelector('div');
  const photo = ad.querySelector('.popup__photo');
  const avatar = ad.querySelector('img');

  title.textContent = offer.title;
  address.textContent = offer.address;
  price.textContent = `${offer.price} ₽/ночь`;
  type.textContent = getType(offer.type);
  capacity.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`
  time.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  feature.textContent = offer.features.join(', ');
  description.textContent = offer.description;
  avatar.src = adExample.author.avatar;

  // Если фотографий в массиве много - создаем копию тэга, задаем им значения и удаляем изначальный тэг
  if (offer.photos.length > 1) {
    for (let i = 0; i < offer.photos.length; i++) {
      const newPhotoTemplate = div.cloneNode(true);
      const newPhotoTab = newPhotoTemplate.querySelector('img');
      newPhotoTab.src = offer.photos[i];
      ad.appendChild(newPhotoTemplate);
      div.remove();
    }
  } else {photo.src =  offer.photos}

  return adList.appendChild(ad);
};

// Вставляем первое обьявление из массива на карту
const adData = createSomeAds[1];
getFoundedAd(adData);

export { newAdTemplate };
