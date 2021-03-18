import './validation.js'
import { disablePage, enableAdForm, enableMapFilters } from './form.js';
import { initializeMap, renderMarkers } from './map.js';
import { getData } from './api.js';
import { replyOnDataError } from './util.js';
import { filterData } from './filter.js';

disablePage()

initializeMap(() => {
  enableAdForm();
  getData((ads) => filterData(ads, renderMarkers), replyOnDataError)
  enableMapFilters();
})
