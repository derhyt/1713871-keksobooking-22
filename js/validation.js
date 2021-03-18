const type = document.querySelector('#type');
const price = document.querySelector('#price');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const guests = capacity.querySelectorAll('option');

// Тип и цена
type.addEventListener('change', () => {
  switch (type.value) {
    case 'bungalow':
      return price.min = 0,
      price.placeholder = 0;
    case 'flat':
      return price.min = 1000,
      price.placeholder = 1000;
    case 'house':
      return price.min = 5000,
      price.placeholder = 5000;
    case 'palace':
      return price.min = 10000,
      price.placeholder = 10000;
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
