const type = document.querySelector('#type');
const price = document.querySelector('#price');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const guests = capacity.querySelectorAll('option');
const BUNGALOW_LOW_PRICE = 0;
const FLAT_LOW_PRICE = 1000;
const HOUSE_LOW_PRICE = 5000;
const PALACE_LOW_PRICE = 10000;

// Тип и цена
type.addEventListener('change', () => {
  switch (type.value) {
    case 'bungalow':
      return price.min = BUNGALOW_LOW_PRICE,
      price.placeholder = BUNGALOW_LOW_PRICE;
    case 'flat':
      return price.min = FLAT_LOW_PRICE,
      price.placeholder = FLAT_LOW_PRICE;
    case 'house':
      return price.min = HOUSE_LOW_PRICE,
      price.placeholder = HOUSE_LOW_PRICE;
    case 'palace':
      return price.min = PALACE_LOW_PRICE,
      price.placeholder = PALACE_LOW_PRICE;
  }
});

// Время заеда и выезда
timeIn.addEventListener('change', () => {
  switch (timeIn.value) {
    case '12:00':
      return timeOut.value = '12:00';
    case '13:00':
      return timeOut.value = '13:00';
    case '14:00':
      return timeOut.value = '14:00';
  }
});

// Кол-во комнат и гостей
const disableChoosenCapacity = function (numb) {
  for (let i = 0; i < numb.length; i++) {
    const int = numb[i]
    guests[int].setAttribute('disabled', 'disabled')
  }
};

const enableChoosenCapacity = function (numb) {
  for (let i = 0; i < numb.length; i++) {
    const int = numb[i]
    guests[int].removeAttribute('disabled')
  }
};

disableChoosenCapacity([0, 1, 3])

roomNumber.addEventListener('change', () => {
  switch (roomNumber.value) {
    case '1':
      return capacity.value = '1',
      disableChoosenCapacity([0, 1, 3]),
      enableChoosenCapacity([2]);
    case '2':
      return capacity.value = '1',
      disableChoosenCapacity([0, 3]),
      enableChoosenCapacity([1, 2]);
    case '3':
      return capacity.value = '1',
      disableChoosenCapacity([3]),
      enableChoosenCapacity([0, 1, 2]);
    case '100':
      return capacity.value = '0',
      disableChoosenCapacity([0, 1, 2]),
      enableChoosenCapacity([3]);
  }
})
