//1.1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ulCountries = document.createElement('ul');

countries.forEach(country => {
  const li = document.createElement('li');
  li.textContent = country;
  ulCountries.appendChild(li);
});

document.body.appendChild(ulCountries);

//1.2
const elementToRemove = document.querySelector('.fn-remove-me');
elementToRemove.remove();

//1.3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const targetDiv = document.querySelector('[data-function="printHere"]');
const ulCars = document.createElement('ul');

cars.forEach(car => {
  const li = document.createElement('li');
  li.textContent = car;
  ulCars.appendChild(li);
});

targetDiv.appendChild(ulCars);

//1.4
const countriesData = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

countriesData.forEach(country => {
  const div = document.createElement('div');
  div.className = 'country-card'; // Añado una clase para facilitar lo siguiente 
  
  const h4 = document.createElement('h4');
  h4.textContent = country.title;
  
  const img = document.createElement('img');
  img.src = country.imgUrl;
  
  div.appendChild(h4);
  div.appendChild(img);
  document.body.appendChild(div);
});

//1.5
const deleteLastBtn = document.createElement('button');
deleteLastBtn.textContent = 'Eliminar último';
document.body.appendChild(deleteLastBtn);

deleteLastBtn.addEventListener('click', () => {
  const allCards = document.querySelectorAll('.country-card');
  if (allCards.length > 0) {
    allCards[allCards.length - 1].remove();
  }
});

//1.6
const allCards = document.querySelectorAll('.country-card');

allCards.forEach(card => {
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '¡Bórrame!';
  
  deleteBtn.addEventListener('click', () => {
    card.remove();
  });
  
  card.appendChild(deleteBtn);
});