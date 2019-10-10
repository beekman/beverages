import {
    toUSD
} from '../common/utils.js';

const makeTD = (content) => {
    const tdElement = document.createElement('td');
    tdElement.textContent = content;
    return tdElement;
};

export default (beverage, order) => {
    const tableRow = document.createElement('tr');

    const totalPrice = order.quantity * beverage.price;
    const prettyPrice = toUSD(beverage.price);
    const prettyTotal = toUSD(totalPrice);

    const columnOne = makeTD(beverage.name);
    const columnTwo = makeTD(order.quantity);
    const columnThree = makeTD(prettyPrice);
    const columnFour = makeTD(prettyTotal);

    tableRow.appendChild(columnOne);
    tableRow.appendChild(columnTwo);
    tableRow.appendChild(columnThree);
    tableRow.appendChild(columnFour);

    return tableRow;
};
