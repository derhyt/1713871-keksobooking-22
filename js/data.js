import { replyOnDataError, showSuccessMessage, showErrorMessage } from './util.js'

const urlGet = 'https://22.javascript.pages.academy/keksobooking/data'
const urlPost = 'https://22.javascript.pages.academy/keksobooking'

// Получаем данные
const getData = fetch(urlGet)
  .then((response) => response.json())
  .catch(() => {replyOnDataError()})

// Пытаемся отдать данные
const adForm = document.querySelector('.ad-form')

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);

  fetch(
    urlPost,
    {
      method: 'POST',
      body: formData,
    },
  )
    .then((response) => {
      if (response.ok) {
        showSuccessMessage();
      } else {showErrorMessage()
      }
    })
    .catch(() => {showErrorMessage()})
});

export { getData }
