/* global _:readonly */
const mapFilters = document.querySelector('.map__filters');
const roomFilter = mapFilters.querySelector('#housing-rooms');
const priceFilter = mapFilters.querySelector('#housing-price');
const typeFilter = mapFilters.querySelector('#housing-type');
const guestFilter = mapFilters.querySelector('#housing-guests');
const SIMILAR_AD_COUNT = 10;
const RERENDER_DELAY = 500;
const LOW_PRICE_THRESHOLD = 10000;
const HIGH_PRICE_THRESHOLD = 50000;

// Фильтр по типу
const filterType = function (ad, type) {
  return type === 'any' || ad.offer.type === type
};

// По цене
const filterPrice = function (ad, price) {
  return (price === 'any') ||
   (ad.offer.price <= LOW_PRICE_THRESHOLD && price === 'low') ||
   (ad.offer.price > LOW_PRICE_THRESHOLD && ad.offer.price <= HIGH_PRICE_THRESHOLD && price === 'middle') ||
   (ad.offer.price > HIGH_PRICE_THRESHOLD && price === 'high')
};

// По комнатам
const filterRooms = function (ad, room) {
  return room === 'any' || Number(room) === Number(ad.offer.rooms)
};

// По гостям
const filterGuests = function (ad, guest) {
  return guest === 'any' || Number(guest) === ad.offer.guests
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
const filterData = function (ads, render) {
  mapFilters.addEventListener('change', _.debounce(() => {
    const result =  filterAds(ads).slice(0, SIMILAR_AD_COUNT);
    render(result);
  }, RERENDER_DELAY));
  return render(ads)
};

export { filterData };
