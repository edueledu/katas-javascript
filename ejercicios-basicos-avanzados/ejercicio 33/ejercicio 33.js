const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};

function getCapital(country) {
  // Comprobamos si el país existe en nuestro objeto usando la notación de corchetes
  if (capitals[country]) {
    return capitals[country];
  } else {
    // Si no existe, devolvemos un mensaje de aviso
    return `No se ha encontrado la capital de ${country} en la lista.`;
  }
}

// Pruebas 
console.log(getCapital('Spain')); // Devolverá: 'Madrid'
console.log(getCapital('France')); // Devolverá: 'Paris'
console.log(getCapital('Japan')); // Devolverá: 'No se ha encontrado la capital de Japan en la lista.'