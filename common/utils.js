export function findById(items, id) {
    // loop the array
    for (let i = 0; i < items.length; i++) {
        const item = items[i];

        // check the id against item.id
        if (item.id === id) {
            return item;
        }
    }

    // loop done, nothing found
    return null;
}

export function toUSD(number) {
    return number.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
}

export function calcLineTotal(quantity, price) {
    const amount = quantity * price;
    return roundCurrency(amount);
}

// fun with JavaScript maths and floating point numbers!
function roundCurrency(amount) {
    return Math.round(amount * 100) / 100;
}

export function calcOrderTotal(cart, beverages) {
    let orderTotal = 0;

    for (let i = 0; i < cart.length; i++) {
        const lineItem = cart[i];
        const beverage = findById(beverages, lineItem.id);
        const lineTotal = calcLineTotal(lineItem.quantity, beverage.price);
        orderTotal += lineTotal;
    }

    return roundCurrency(orderTotal);
}
