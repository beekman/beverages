import beverages from '../data/beverages.js';
import renderBeverage from './render-beverages.js';

const list = document.getElementById('beverages');

for (let i = 0; i < beverages.length; i++) {
    const beverage = beverages[i];
    const dom = renderBeverage(beverage);
    list.appendChild(dom);
}
