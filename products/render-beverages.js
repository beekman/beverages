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
    section.appendChild(price);

    const usd = '$' + beverage.price.toFixed(2);
    price.textContent = usd;


    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = beverage.id;
    section.appendChild(button);

    return article;
}

export default renderBeverage;
