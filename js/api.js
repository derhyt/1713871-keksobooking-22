const URL_GET = 'https://22.javascript.pages.academy/keksobooking/data'
const URL_POST = 'https://22.javascript.pages.academy/keksobooking'

// Получаем данные
const getData = function (onSuccess, onFail) {
  fetch(URL_GET)
    .then((response) => response.json())
    .then((data) => onSuccess(data))
    .catch(() => {onFail()})
};

// Пытаемся отдать данные
const sendData = function (data, onSuccess, onFail) {
  fetch(URL_POST, {
    method: 'POST',
    body: data,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {onFail()
      }
    })
    .catch(() => {
      onFail()
    });
};

export { getData, sendData }
