import order from '../data/order.js';
import beverages from '../data/beverages.js';
import {
    findById,
    calcOrderTotal,
    toUSD
} from '../common/utils.js';
import renderLineItem from './render-line-item.js';

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');
const placeOrderButton = document.getElementById('place-order-button');

const localCart = localStorage.getItem('CART');
let cart;

if (localCart) {
    cart = JSON.parse(localCart);
} else {
    cart = [];
}

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const beverage = findById(beverages, lineItem.id);
    const dom = renderLineItem(beverage, lineItem);

    tbody.appendChild(dom);
}

const orderTotal = calcOrderTotal(cart, beverages);
orderTotalCell.textContent = toUSD(orderTotal);

if (cart.length === 0) {
    placeOrderButton.setAttribute('disabled', 'true')
} else {
    placeOrderButton.addEventListener('click', () => {
        localStorage.removeItem('CART');
        alert('Order placed:\n' + JSON.stringify(cart, true, 2));
        window.location = '../';
    });
}
