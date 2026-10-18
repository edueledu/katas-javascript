const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
];

function findOldestXMen(xMen) {
  if (xMen.length === 0) return null; // Por si el array estuviera vacío

  // Tomamos el primer miembro como punto de referencia
  let oldestMember = xMen[0];

  for (const member of xMen) {
    // Si el año de aparición del miembro actual es menor, actualizamos nuestra variable
    if (member.year < oldestMember.year) {
      oldestMember = member;
    }
  }

  return oldestMember;
}

// Prueba
console.log(findOldestXMen(xMen));
// Nota: Como hay varios personajes del mismo año (1963), la función devolverá el primero que encuentre (Cyclops).