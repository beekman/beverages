// IMPORT MODULES under test here:
import beverages from '../data/beverages.js';
import { findById } from '../common/utils.js';
import renderLineItem from '../shopping-cart/render-line-item.js';

const test = QUnit.test;

QUnit.module('Render Line Item');

test('renders a table row', assert => {
    // arrange
    // Set up your parameters and expectations

    const lineItem = {
        id: 'coffee',
        quantity: 4
    };

    const coffee = findById(beverages, lineItem.id);
    const expected = '<tr><td>Coffee</td><td>4</td><td>$2.25</td><td>$9.00</td></tr>';
    //Act
    // Call the function you're testing and set the result to a const
    const dom = renderLineItem(coffee, lineItem);
    const html = dom.outerHTML;

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(html, expected);
});
