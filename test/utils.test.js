// IMPORT MODULES under test here:
import beverages from '../data/beverages.js';
import cart from '../data/cart.js';
import { findById, calcLineTotal, calcOrderTotal } from '../common/utils.js';

const test = QUnit.test;
QUnit.module('Utilities');

test('find product by id', assert => {
    // arrange
    const id = 'coffee';
    const expected = 'Coffee';

    // act
    const foundBeverage = findById(beverages, id);

    // assert
    assert.ok(foundBeverage);
    assert.equal(foundBeverage.name, expected);
});

test('find product by id returns null if not found', assert => {
    // arrange
    const id = 'not found';
    const expected = null;

    // act
    const foundBeverage = findById(beverages, id);

    // assert
    assert.equal(foundBeverage, expected);
});

test('calculate line total', (assert) => {
    // arrange
    const quantity = 3;
    const price = 2.01;
    const expected = 6.03;

    // act
    const total = calcLineTotal(quantity, price);

    // assert
    assert.equal(total, expected);
});

// This one can be left to students to do...
test('calculate order total', (assert) => {
    // arrange
    const expected = 61.5;

    // act
    const orderTotal = calcOrderTotal(cart, beverages);

    // assert
    assert.equal(orderTotal, expected);
});
