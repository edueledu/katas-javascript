const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
  const foundMutants = [];

  // Buscamos todos los mutantes que coincidan con el poder
  for (const mutant of mutants) {
    if (mutant.power === power) {
      foundMutants.push(mutant.name);
    }
  }

  // Comprobamos si hemos encontrado alguno y devolvemos el mensaje correspondiente
  if (foundMutants.length > 0) {
    return `Se ha encontrado el poder '${power}' en los siguientes mutantes: ${foundMutants.join(', ')}.`;
  } else {
    return `No se encontró ningún mutante con el poder '${power}'.`;
  }
}

// Pruebas de la función
console.log(findMutantByPower(mutants, 'telepathy')); // 1 mutante
console.log(findMutantByPower(mutants, 'regeneration')); // 1 mutante
console.log(findMutantByPower(mutants, 'invisibility')); // 0 mutantes

// Prueba extra simulando múltiples mutantes con el mismo poder
mutants.push({ name: 'Deadpool', power: 'regeneration' });
console.log(findMutantByPower(mutants, 'regeneration')); // 2 mutantes