const URL = 'https://raw.githubusercontent.com/alexxalexx/JSON/main/data/goods.json';

const button = document.querySelector('.btn');

fetch(URL)
.then((res) => res.json())
.then((data) => {
    data.forEach(makeCard)
})

const container = document.querySelector('.container');
const cardTemplate = document.querySelector('#item-card');
function makeCard({title, description, img, price, id}) {
    const card = cardTemplate.content.cloneNode(true);
    card.querySelector('.item').setAttribute('data-id', id);
    card.querySelector('h1').textContent = title;
    card.querySelector('p').textContent = description;
    card.querySelector('img').src = `${URL}/${img}`;
    card.querySelector('.price').textContent = price;
    card.querySelector('.btn').onclick = function()
    {
        alert('Купить пока нельзя, товар закончился :(');
    }

    container.append(card);
}