import { makePrettyCurrency } from '../common/utils.js';

const makeTD = (content) => {
    const tdElement = document.createElement('td');
    tdElement.textContent = content;

    return tdElement;
};



export default (beverage, order) => {
    const tableRow =
        document.createElement('tr');

    const columnOne = makeTD('Coffee');
    const columnTwo = makeTD('4');
    const prettyPrice = makePrettyCurrency(order.price);
    const columnThree = makeTD(prettyPrice);
    const totalPrice = order.quantity * beverage.price;
    const prettyTotal = makePrettyCurrency(totalPrice);
    const columnFour = makeTD(prettyTotal);


    tableRow.appendChild(columnOne);
    tableRow.appendChild(columnTwo);
    tableRow.appendChild(columnThree);
    tableRow.appendChild(columnFour);

    return tableRow;
};
