import './validation.js'
import { initializeMap, renderMarkers } from './map.js';
import { enableMapFilters, enableAdForm, disablePage } from './form.js';
import { getData } from './api.js';
import { replyOnDataError } from './util.js';

disablePage()

initializeMap(() => {
  enableAdForm();
  getData(renderMarkers, replyOnDataError);
  enableMapFilters();
})
