import { createTemplateAd } from './card-template-generator.js';

/* global L:readonly */

const MAP = L.map('map-canvas');

// Функция отрисовки маркеров
const renderMarkers = function (ads) {
  const icon = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  ads.forEach(ad => {
    const popup = createTemplateAd(ad);
    const marker = L.marker(
      {
        lat: ad.location.lat,
        lng: ad.location.lng,
      },
      {
        icon,
      },
    );


    marker
      .addTo(MAP)
      .bindPopup(
        popup,
        {
          keepInView: true,
        },
      );
  })
}

// Создаем главный маркер
const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.68128,
    lng: 139.75296,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(MAP);

// Реализуем принципы работы главного маркера
const address = document.querySelector('#address');
address.value = '35.68128, 139.75296';
mainPinMarker.on('moveend', (evt) => {
  const addressLatIng = Object.values(evt.target.getLatLng());
  const fixedAddressLatIng = new Array(0);
  for(let i = 0; i < addressLatIng.length; i++) {
    fixedAddressLatIng.push(addressLatIng[i].toFixed(5));
  }
  address.value = fixedAddressLatIng.join(', ');
});

// Функция инициализации карты
const initializeMap = function (afterInit) {
  MAP.on('load', () => {
    afterInit()
  })
    .setView({
      lat: 35.68128,
      lng: 139.75296,
    }, 10);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(MAP);
}

export { mainPinMarker, initializeMap, renderMarkers }
