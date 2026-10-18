const cartoons = [
  { name: 'Bugs Bunny', debut: 1938 },
  { name: 'SpongeBob SquarePants', debut: 1999 },
  { name: 'Tom and Jerry', debut: 1940 },
  { name: 'Mickey Mouse', debut: 1928 },
  { name: 'Scooby-Doo', debut: 1969 },
  { name: 'The Flintstones', debut: 1960 },
  { name: 'Batman: The Animated Series', debut: 1992 },
  { name: 'The Simpsons', debut: 1989 },
  { name: 'Pokémon', debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 }
];

// Tomamos la primera serie como punto de referencia
let oldestCartoon = cartoons[0];

// Usamos un bucle for...of para comparar cada serie
for (const cartoon of cartoons) {
  // Si el año de debut de la serie actual es menor que el de nuestra referencia, actualizamos
  if (cartoon.debut < oldestCartoon.debut) {
    oldestCartoon = cartoon;
  }
}

// Guardamos el nombre en una variable tal como pide el enunciado
const oldestCartoonName = oldestCartoon.name;

console.log(oldestCartoonName);