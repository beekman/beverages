// IMPORT MODULES under test here:
import beverages from '../data/beverages.js';
import cart from '../data/cart.js';
import { findById, calcLineTotal, calcOrderTotal } from '../common/utils.js';

const test = QUnit.test;
QUnit.module('Utilities');

test('finds an id from an array', assert => {
    // arrange
    // Set up your parameters and expectations
    const coffee = {
        id: 'coffee',
        name: 'Coffee',
        image: 'coffee.jpg',
        description: 'A hot cuppa joe.',
        category: 'hot',
        price: 2.25,
        cost: 0.50
    };

    const coffeeOrder = {
        id: 'coffee',
        quantity: 4
    };

    const expected = '<tr><td>Coffee</td><td>4</td><td>$2.25</td><td>$9.00</td></tr>';
    //Act
    // Call the function you're testing and set the result to a const
    // act
    const beverageElementTR = renderTableRow(coffee, coffeeOrder);
    const stringHTMLofBeverageElement = beverageElementTR.outerHTML;
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(stringHTMLofBeverageElement, expected);
});
