import { disableAdForm, enableAdForm } from './form.js';
import { getAds } from './data.js';
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

// На основе сгенерированных обьявлений создаем маркеры с карточками
const ads = getAds;
const icon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

ads.forEach(ad => {
  const popup = createTemplateAd(ad);
  const marker = L.marker(
    {
      lat: ad.location.x,
      lng: ad.location.y,
    },
    {
      icon,
    },
  );

  marker
    .addTo(map)
    .bindPopup(
      popup,
      {
        keepInView: true,
      },
    );
})
