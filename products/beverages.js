export function renderBeverages(beverage) {
    const li = document.createElement('li');
    li.className = beverage.category;
    li.title = beverage.description;

    const h3 = document.createElement('h3');
    h3.textContent = beverage.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../assets/' + beverage.image;
    img.alt = beverage.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = '$' + beverage.price.toFixed(2);
    p.textContent = usd;

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = beverage.id;
    p.appendChild(button);

    li.appendChild(p);

    return li;
}
