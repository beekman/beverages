import {
    findById
} from '../common/utils.js';
import {
    toUSD
} from '../common/utils.js';

function renderBeverage(beverage) {
    const article = document.createElement('article');
    article.className = 'product';

    const header = document.createElement('header');
    article.appendChild(header);

    const h3 = document.createElement('h3');
    h3.textContent = beverage.name;
    h3.className = beverage.category;
    header.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../assets/' + beverage.image;
    img.alt = beverage.name + ' picture';
    header.appendChild(img);

    const section = document.createElement('section');
    article.appendChild(section);

    const desc = document.createElement('p');
    desc.className = 'description';
    desc.textContent = beverage.description;
    section.appendChild(desc);

    const price = document.createElement('p');
    price.className = 'price';
    price.textContent = toUSD(beverage.price);

    const usd = '$' + beverage.price.toFixed(2);
    price.textContent = usd;

    const input_qty = document.createElement('input');
    input_qty.setAttribute('type', 'Number');
    input_qty.value = 1;
    input_qty.id = beverage.id + 'qty-input';

    const btn_add = document.createElement('button');
    btn_add.textContent = 'Add';
    btn_add.value = beverage.id;

    section.appendChild(price);
    section.appendChild(input_qty);
    section.appendChild(btn_add);

    btn_add.addEventListener('click', () => {
        let json = localStorage.getItem('CART');
        let cart;
        let qty_in = document.getElementById(beverage.id + 'qty-input');
        let qty = Number(qty_in.value);
        if (json) {
            cart = JSON.parse(json);
        } else {
            cart = [];
        }
        let lineItem = findById(cart, beverage.id);

        if (!lineItem) {
            lineItem = {
                id: beverage.id,
                quantity: qty
            };

            cart.push(lineItem);
        } else {
            lineItem.quantity = lineItem.quantity + qty;
        }

        json = JSON.stringify(cart);
        localStorage.setItem('CART', json);

    });



    return article;
}

export default renderBeverage;
