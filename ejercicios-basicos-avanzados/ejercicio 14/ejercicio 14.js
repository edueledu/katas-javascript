const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];

function repeatCounter(list) {
  // Creamos un objeto vacío donde guardaremos cada palabra y su contador
  const countObject = {};

  for (let i = 0; i < list.length; i++) {
    const word = list[i];
    
    // Si la palabra ya existe en nuestro objeto, le sumamos 1
    if (countObject[word]) {
      countObject[word]++;
    } else {
      // Si no existe, la creamos y le asignamos el valor 1
      countObject[word] = 1;
    }
  }

  return countObject;
}

// Prueba 
console.log(repeatCounter(words));