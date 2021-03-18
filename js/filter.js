/* global _:readonly */

const mapFilters = document.querySelector('.map__filters');
const typeFilter = mapFilters.querySelector('#housing-type');
const priceFilter = mapFilters.querySelector('#housing-price');
const roomFilter = mapFilters.querySelector('#housing-rooms');
const guestFilter = mapFilters.querySelector('#housing-guests');
const SIMILAR_AD_COUNT = 10;
const RERENDER_DELAY = 500;

// Фильтр по типу
const filterType = function (ad, type) {
  if (type === 'any' || ad.offer.type === type) {
    return true;
  }
  return false;
};

// По цене
const filterPrice = function (ad, price) {
  if (price === 'any') {
    return true;
  }
  if (ad.offer.price <= 10000 && price === 'low') {
    return true;
  }
  if (ad.offer.price > 10000 && ad.offer.price <= 50000 && price === 'middle') {
    return true;
  }
  if (ad.offer.price > 50000 && price === 'high') {
    return true;
  }
  return false;
};

// По комнатам
const filterRooms = function (ad, room) {
  if (room === 'any') {
    return true;
  }
  if (Number(room) === Number(ad.offer.rooms)) {
    return true;
  }
  return false;
};

// По гостям
const filterGuests = function (ad, guest) {
  if (guest === 'any') {
    return true;
  }
  if (Number(guest) === ad.offer.guests) {
    return true;
  }
  return false;
};

// По удобствам
const filterFeature = function (ad) {
  const featureFilters = mapFilters.querySelectorAll('.map__checkbox:checked');
  const featureList = Array.from(featureFilters).map(el => el.value);
  return featureList.every((feature) => ad.offer.features.includes(feature));
};

// Фильтруем обьявления
const filterAds = function (ads) {
  const elems = ads.filter((ad) => {
    return filterType(ad, typeFilter.value)
    && filterPrice(ad, priceFilter.value)
    && filterRooms(ad, roomFilter.value)
    && filterGuests(ad, guestFilter.value)
    && filterFeature(ad);
  });
  return elems;
};

// Получаем обработанную дату
const filterData = function (ads, cb) {
  mapFilters.addEventListener('change', _.debounce(() => {
    const result =  filterAds(ads).slice(0, SIMILAR_AD_COUNT);
    cb(result);
  }, RERENDER_DELAY));
  return cb(ads)
};

export { filterData };
