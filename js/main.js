import { createSomeAds } from './data.js';

import { createTemplateAd } from './ad-generator.js';

// Вставляем первое обьявление из сгенерированного массива на карту
const adData = createSomeAds[1];
createTemplateAd(adData);
