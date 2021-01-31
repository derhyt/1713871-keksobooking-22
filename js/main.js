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
  let expon = 10**period;
  return (getRandomNumb(min*expon, max*expon))/expon;
};
