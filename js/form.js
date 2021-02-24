const adForm = document.querySelector('.ad-form');
const adFieldsets = adForm.querySelectorAll('fieldset');
const mapForm = document.querySelector('.map__filters');
const mapSelect = mapForm.querySelectorAll('select');
const mapFieldsets = mapForm.querySelectorAll('fieldset');
const addressLabel = adForm.querySelector('#address');

const disableAdForm = function () {
  adForm.classList.add('ad-form--disabled');
  mapForm.classList.add('ad-form--disabled');

  for (let i = 0; i < adFieldsets.length; i++) {
    adFieldsets[i].setAttribute('disabled', 'disabled');
  }
  for (let i = 0; i < mapSelect.length; i++) {
    mapSelect[i].setAttribute('disabled', 'disabled');
  }
  for (let i = 0; i < mapFieldsets.length; i++) {
    mapFieldsets[i].setAttribute('disabled', 'disabled');
  }
}

const enableAdForm = function () {
  adForm.classList.remove('ad-form--disabled');
  mapForm.classList.remove('ad-form--disabled');

  for (let i = 0; i < adFieldsets.length; i++) {
    adFieldsets[i].removeAttribute('disabled');
  }
  for (let i = 0; i < mapSelect.length; i++) {
    mapSelect[i].removeAttribute('disabled');
  }
  for (let i = 0; i < mapFieldsets.length; i++) {
    mapFieldsets[i].removeAttribute('disabled');
  }
  addressLabel.setAttribute('disabled', 'disabled');
}

export { disableAdForm, enableAdForm };
