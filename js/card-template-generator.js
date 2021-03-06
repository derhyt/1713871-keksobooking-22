// Нахожу шаблон обьявления
const adTemplate = document.querySelector('#card').content;
const newAdTemplate = adTemplate.querySelector('.popup');

// Функция для определения типа помещения
const mapType = function (type) {
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
const createTemplateAd = function(inputedFromData) {
  const templateClone = newAdTemplate.cloneNode(true);
  const offer = inputedFromData.offer
  const adList = document.querySelector('#map-canvas');

  const title = templateClone.querySelector('.popup__title');
  const address = templateClone.querySelector('.popup__text--address');
  const price = templateClone.querySelector('.popup__text--price');
  const type = templateClone.querySelector('.popup__type');
  const capacity = templateClone.querySelector('.popup__text--capacity');
  const time = templateClone.querySelector('.popup__text--time');
  const feature = templateClone.querySelector('.popup__features');
  const description = templateClone.querySelector('.popup__description');
  const photo = templateClone.querySelector('.popup__photos');
  const avatar = templateClone.querySelector('img');
  const imageNode = photo.querySelector('img');


  title.textContent = offer.title
  address.textContent = offer.address
  price.textContent = `${offer.price} ₽/ночь`
  type.textContent = mapType(offer.type)
  capacity.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`
  time.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`
  description.textContent = offer.description
  avatar.src = inputedFromData.author.avatar

  feature.textContent = '';
  for (let i = 0; i < offer.features.length; i++) {
    const newFeature = document.createElement('li');
    newFeature.classList.add('popup__feature', `popup__feature--${offer.features[i]}`);
    feature.appendChild(newFeature)
  }

  for (let i = 0; i < offer.photos.length; i++) {
    const imageNodeClone = imageNode.cloneNode(true);
    imageNodeClone.src = offer.photos[i];
    photo.appendChild(imageNodeClone);
  }
  imageNode.remove();


  return adList.appendChild(templateClone);
};

export { createTemplateAd };
