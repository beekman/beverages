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

    section.appendChild(price);

    const usd = '$' + beverage.price.toFixed(2);
    price.textContent = usd;

    const btn_add = document.createElement('button');
    btn_add.textContent = 'Add';
    btn_add.value = beverage.id;
    let qty = 1;
    btn_add.addEventListener('click', () => {
        let json = localStorage.getItem('CART');
        let cart;
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
        }
        else {
            lineItem.quantity= lineItem.quantity + qty;
        }

        json = JSON.stringify(cart);
        localStorage.setItem('CART', json);

        console.log( qty + ' ' + beverage.name + ' added to cart');
        console.log( localStorage );

    });

    section.appendChild(price);
    section.appendChild(btn_add);

    return article;
}

export default renderBeverage;
