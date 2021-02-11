// Доработал функцию отсюда: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomNumb = function (min, max) {
  if (min > max || max < 0) {return}
  if (min < 0) {min = 0}
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomFraction = function (min, max, period = 0) {
  const expon = 10**period;
  return (getRandomNumb(min*expon, max*expon))/expon;
};

const getRandomIndex = function (array) {
  const lengthArray = array.length - 1;
  const randomIndex = getRandomNumb(0, lengthArray);
  return array[randomIndex];
};

// Эта функция создает массив из случайного количества элементов другого массива
const getRandomFoundedArray = function (array) {
  const newArray = new Array(1).fill(getRandomIndex(array));
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== newArray[0]) {
      if (getRandomNumb(0, 1) === 1) {
        newArray.push(array[i])
      }
    }
  }
  return newArray;
};

export { getRandomNumb, getRandomFraction, getRandomIndex, getRandomFoundedArray };
