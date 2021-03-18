const URL_GET = 'https://22.javascript.pages.academy/keksobooking/data'
const URL_POST = 'https://22.javascript.pages.academy/keksobooking'

// Получаем данные
const getData = function (onSuccess, err) {
  fetch(URL_GET)
    .then((response) => response.json())
    .then((data) => onSuccess(data))
    .catch(() => {err()})
};

// Пытаемся отдать данные
const sendData = function (data, onSuccess, err) {
  fetch(URL_POST, {
    method: 'POST',
    body: data,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {err()
      }
    })
    .catch(() => {
      err()
    });
};

export { getData, sendData }
