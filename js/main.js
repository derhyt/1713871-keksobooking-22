import './validation.js'
import { disablePage, enableAdForm, enableMapFilters } from './form.js';
import { initializeMap, renderMarkers } from './map.js';
import { getData } from './api.js';
import { replyOnDataError } from './util.js';


disablePage()

initializeMap(() => {
  enableAdForm();
  getData(renderMarkers, replyOnDataError)
  enableMapFilters();
})
