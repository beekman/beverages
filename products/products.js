import beverages from '../data/beverages.js';
import renderBeverages from './render-beverages.js';

const list = document.getElementById('beverages');

for (let i = 0; i < beverages.length; i++) {
    const beverage = beverage[i];
    const dom = renderBeverages(beverage);
    list.appendChild(dom);
}
