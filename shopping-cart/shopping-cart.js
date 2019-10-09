import cart from '../data/cart.js';
import beverages from '../data/beverages.js';
import { findById, calcOrderTotal, toUSD } from '../common/utils.js';
import renderLineItem from './render-line-item.js';

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const fruit = findById(beverages, lineItem.id);
    const dom = renderLineItem(lineItem, fruit);

    tbody.appendChild(dom);
}

const orderTotal = calcOrderTotal(cart, beverages);
orderTotalCell.textContent = toUSD(orderTotal);
