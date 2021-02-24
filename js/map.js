import { disableAdForm, enableAdForm } from './form.js';
import { createSomeAds } from './data.js';
import { createTemplateAd } from './card-template-generator.js';

/* global L:readonly */

disableAdForm();

const map = L.map('map-canvas')
  .on('load', () => {
    enableAdForm()
  })
  .setView({
    lat: 35.68128,
    lng: 139.75296,
  }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

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
mainPinMarker.addTo(map);

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

// Мелкие маркеры
// На основе сгенерированных обьявлений создаем обьекты с координатами и карточками
const points = new Array(createSomeAds.length).fill(null).map(() => new Object());
for (let i = 0; i < createSomeAds.length; i++) {
  points[i].title = createSomeAds[i].offer.title;
  points[i].lat = createSomeAds[i].location.x;
  points[i].lng = createSomeAds[i].location.y;
  points[i].popup = createTemplateAd(createSomeAds[i]);
}

points.forEach((point) => {
  const {lat, lng} = point;

  const icon = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker
    .addTo(map)
    .bindPopup(
      point.popup,
      {
        keepInView: true,
      },
    );
});
