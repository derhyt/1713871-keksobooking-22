const forms = document.querySelectorAll('form');
const selects = document.querySelectorAll('select');
const fieldsets = document.querySelectorAll('fieldset');
const addressLabel = document.querySelector('#address');

const disableAdForm = function () {
  for (let i = 0; i < forms.length; i++) {
    forms[i].classList.add('ad-form--disabled');
  }
  for (let i = 0; i < fieldsets.length; i++) {
    fieldsets[i].setAttribute('disabled', 'disabled');
  }
  for (let i = 0; i < selects.length; i++) {
    selects[i].setAttribute('disabled', 'disabled');
  }
}

const enableAdForm = function () {
  for (let i = 0; i < forms.length; i++) {
    forms[i].classList.remove('ad-form--disabled');
  }
  for (let i = 0; i < fieldsets.length; i++) {
    fieldsets[i].removeAttribute('disabled');
  }
  for (let i = 0; i < selects.length; i++) {
    selects[i].removeAttribute('disabled');
  }
  addressLabel.setAttribute('disabled', 'disabled');
}

export { disableAdForm, enableAdForm };
