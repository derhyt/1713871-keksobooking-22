import './validation.js'
import { disablePage, enableAdForm, enableMapFilters } from './form.js';
import { initializeMap, renderMarkers } from './map.js';
import { getData } from './api.js';
import { replyOnDataError } from './util.js';
import { processData } from './filter.js';


disablePage()

initializeMap(() => {
  enableAdForm();
  getData((ads) => processData(ads, renderMarkers), replyOnDataError)
  enableMapFilters();
})
