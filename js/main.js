import './validation.js'

import './util.js'

import { initializeMap, renderMarkers } from './map.js';

import { enableMapFilters, enableAdForm, disablePage } from './form.js';

import { getData } from './api.js';

// disablePage()

disablePage()

initializeMap(() => {
  enableAdForm();
  getData
    .then(data => {
      renderMarkers(data);
      enableMapFilters();
    })
})
