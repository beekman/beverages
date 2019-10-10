import renderTableRow from './render-line-item.js';
import dataFruits from '../data/order.js/index.js';
import { makePrettyCurrency } from '../common/utils.js';
import { CART_KEY } from '../products/render-beverages.js';

const tableElement = document.querySelector('tbody');

export const getById = (id, beverages) => {
    let matchingFruit;

    beverages.forEach(beverage => {
        if (beverage.id === id) {
            matchingFruit = beverage;
        }
    });

    return matchingFruit;
};

const getLineTotal = (order, item) => item.price * order.quantity;

const getCartTotal = (cart, beverages) => {
    let cartTotal = 0;
    cart.forEach(order => {
        const orderFruit = getById(order.id, beverages);
        const lineTotal = getLineTotal(order, orderFruit);

        cartTotal = cartTotal + lineTotal;
    });

    return cartTotal;
};

const addRow = (beverageOrder, beverages) => {
    const orderFruit = getById(beverageOrder.id, beverages);
    const row = renderTableRow(orderFruit, beverageOrder);

    tableElement.appendChild(row);
};

const addRows = (cart, beverages) => {
    cart.forEach(beverageOrder => {
        addRow(beverageOrder, beverages);
    });
};

const buildTotalCell = (cart, beverages) => {
    const totalCell = document.getElementById('order-total-cell');
    const cartTotal = getCartTotal(cart, beverages);

    totalCell.textContent = makePrettyCurrency(cartTotal);
};

const buildTable = (cart, beverages) => {
    buildTotalCell(cart, beverages);
    addRows(cart, beverages);
};

const javascriptReadableCart = JSON.parse(localStorage.getItem(CART));

buildTable(javascriptReadableCart, dataFruits);
