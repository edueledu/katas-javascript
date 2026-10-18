const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

// Añadimos un segundo parámetro "nameToFind" para recibir el valor a buscar
function nameFinder(nameList, nameToFind) {
  for (let i = 0; i < nameList.length; i++) {
    if (nameList[i] === nameToFind) {
      // Si lo encuentra, devolvemos un objeto con el true y la posición
      return { exists: true, position: i }; 
    }
  }
  
  // Si termina el bucle y no lo ha encontrado, devuelve false
  return false;
}

// Prueba
console.log(nameFinder(names, 'Logan')); 
console.log(nameFinder(names, 'Carlos')); 