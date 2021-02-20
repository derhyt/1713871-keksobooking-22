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

// Тут происходит заполнение шаблона информацией
const createTemplateAd = function(inputedFromDataAd) {
  const adTemplateClone = newAdTemplate.cloneNode(true);
  const offer = inputedFromDataAd.offer
  const adList = document.querySelector('#map-canvas');

  const title = adTemplateClone.querySelector('.popup__title');
  const address = adTemplateClone.querySelector('.popup__text--address');
  const price = adTemplateClone.querySelector('.popup__text--price');
  const type = adTemplateClone.querySelector('.popup__type');
  const capacity = adTemplateClone.querySelector('.popup__text--capacity');
  const time = adTemplateClone.querySelector('.popup__text--time');
  const feature = adTemplateClone.querySelector('.popup__features');
  const description = adTemplateClone.querySelector('.popup__description');
  const photo = adTemplateClone.querySelector('.popup__photos');
  const avatar = adTemplateClone.querySelector('img');

  title.textContent = offer.title;
  address.textContent = offer.address;
  price.textContent = `${offer.price} ₽/ночь`;
  type.textContent = getType(offer.type);
  capacity.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`
  time.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  feature.textContent = offer.features.join(', ');
  description.textContent = offer.description;
  avatar.src = inputedFromDataAd.author.avatar;

  for (let i = 0; i < offer.photos.length; i++) {
    const newPhotoTemplate = photo.cloneNode(true);
    const newPhotoTab = newPhotoTemplate.querySelector('img');
    newPhotoTab.src = offer.photos[i];
    adTemplateClone.appendChild(newPhotoTemplate);
    photo.remove();
  }

  return adList.appendChild(adTemplateClone);
};

export { createTemplateAd };
