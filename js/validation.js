// Тип и цена
const type = document.querySelector('#type')

type.addEventListener('change', () => {
  const typeIndex = type.selectedIndex
  const price = document.querySelector('#price')

  switch (typeIndex) {
    case 0:
      return price.min = 0,
      price.placeholder = 0;
    case 1:
      return price.min = 1000,
      price.placeholder = 1000;
    case 2:
      return price.min = 5000,
      price.placeholder = 5000;
    case 3:
      return price.min = 10000,
      price.placeholder = 10000;
  }
})

// Время заеда и выезда
const timeIn = document.querySelector('#timein')

timeIn.addEventListener('change', () => {
  const timeInIndex = timeIn.selectedIndex
  const timeOut = document.querySelector('#timeout')

  switch (timeInIndex) {
    case 0:
      return timeOut.value = '12:00';
    case 1:
      return timeOut.value = '13:00';
    case 2:
      return timeOut.value = '14:00';
  }
})

// Кол-во комнат и гостей
const roomNumber = document.querySelector('#room_number')
const capacity = document.querySelector('#capacity')
const guests = capacity.querySelectorAll('option')

const disableChoosenCapacity = function (numb) {
  for (let i = 0; i < numb.length; i++) {
    const int = numb[i]
    guests[int].setAttribute('disabled', 'disabled')
  }
}

const enableChoosenCapacity = function (numb) {
  for (let i = 0; i < numb.length; i++) {
    const int = numb[i]
    guests[int].removeAttribute('disabled')
  }
}

// Какой вариант тут лучше? Блокировать окно выбора комнаты или оставить там один вариант?
// capacity.setAttribute('disabled', 'disabled')
disableChoosenCapacity([0, 1, 3])

roomNumber.addEventListener('change', () => {
  const roomNumberIndex = roomNumber.selectedIndex

  switch (roomNumberIndex) {
    case 0:
      return capacity.value = '1',
      disableChoosenCapacity([0, 1, 3]),
      enableChoosenCapacity([2]);
    case 1:
      return capacity.value = '1',
      disableChoosenCapacity([0, 3]),
      enableChoosenCapacity([1, 2]);
    case 2:
      return capacity.value = '1',
      disableChoosenCapacity([3]),
      enableChoosenCapacity([0, 1, 2]);
    case 3:
      return capacity.value = '0',
      disableChoosenCapacity([0, 1, 2]),
      enableChoosenCapacity([3]);
  }
})
