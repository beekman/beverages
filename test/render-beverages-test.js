// IMPORT MODULES under test here:
import renderBeverage from '../products/render-beverages.js';
import renderTableRow from '../shopping-cart/render-line-item.js';
const test = QUnit.test;
QUnit.module('Render Fruit');

test('renders a beverage', assert => {
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

    const expected = '<article class="product"><header><h3 class="hot">Coffee</h3><img src="../assets/coffee.jpg" alt="Coffee picture"></header><section><p class="description">A hot cuppa joe.</p><p class="price">$2.25</p><button value="coffee">Add</button></section></article>';
    //Act
    // Call the function you're testing and set the result to a const
    // act
    const dom = renderBeverage(coffee);
    const html = dom.outerHTML;
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(html, expected);
});

test('renders a table row', assert => {
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
