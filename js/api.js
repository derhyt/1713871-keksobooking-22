import { replyOnDataError, showSuccessMessage, showErrorMessage } from './util.js'

const URL_GET = 'https://22.javascript.pages.academy/keksobooking/data'
const URL_POST = 'https://22.javascript.pages.academy/keksobooking'

// Получаем данные
const getData = fetch(URL_GET)
  .then((response) => response.json())
  .catch(() => {replyOnDataError()})

// Пытаемся отдать данные
const sendData = function (data) {fetch(
  URL_POST,
  {
    method: 'POST',
    body: data,
  },
)
  .then((response) => {
    if (response.ok) {
      showSuccessMessage();
    } else {showErrorMessage()
    }
  })
  .catch(() => {showErrorMessage()})
}

export { getData, sendData }
