
// Ejercicio 1.1: Destructuring de Objetos

const game = { 
  title: 'The Last of Us 2', 
  gender: ['action', 'zombie', 'survival'], 
  year: 2020 
};

// Extraemos las propiedades usando llaves {}
const { title, gender, year } = game;

console.log('--- Ejercicio 1.1 ---');
console.log(title);
console.log(gender);
console.log(year);


// Ejercicio 1.2
const fruits = ['Banana', 'Strawberry', 'Orange'];

// Extraemos los elementos por orden usando corchetes []
const [fruit1, fruit2, fruit3] = fruits;

console.log('--- Ejercicio 1.2 ---');
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);



// Ejercicio 1.3

const animalFunction = () => {
  return { name: 'Bengal Tiger', race: 'Tiger' };
};

// Al llamar a la función, extraemos directamente las llaves devueltas
const { name: animalName, race } = animalFunction();

console.log('--- Ejercicio 1.3 ---');
console.log(animalName);
console.log(race);



// Ejercicio 1.4
const car = { 
  name: 'Mazda 6', 
  itv: [2015, 2011, 2020] 
};

// 1. Destructuring del objeto principal
const { name: carName, itv } = car;

// 2. Destructuring del array 'itv'
const [year1, year2, year3] = itv;

console.log('--- Ejercicio 1.4 ---');
console.log(carName);
console.log(itv);
console.log(year1, year2, year3);