// IMPORT MODULES under test here:
import renderBeverage from '../products/render-beverages.js';

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
