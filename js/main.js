import './validation.js'
import { disablePage, enableAdForm, enableMapFilters } from './form.js';
import { initializeMap } from './map.js';
import { processedData } from './filter.js';


disablePage()

initializeMap(() => {
  enableAdForm();
  processedData;
  enableMapFilters();
})
