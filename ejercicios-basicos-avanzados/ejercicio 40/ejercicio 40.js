const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  return -1;
}

function removeItem(array, text) {
  const index = findArrayIndex(array, text);
  
  // Si se encuentra el elemento, lo eliminamos con splice
  if (index !== -1) {
    array.splice(index, 1);
  }
  
  return array;
}

// Ejemplos y comprobaciones
console.log("--- Pruebas de findArrayIndex ---");
console.log(findArrayIndex(mainCharacters, "Rey"));      // Devolverá: 4
console.log(findArrayIndex(mainCharacters, "Luke"));     // Devolverá: 0
console.log(findArrayIndex(mainCharacters, "Yoda"));     // Devolverá: -1 (no existe)

console.log("\n--- Pruebas de removeItem ---");
// Usamos el operador spread [...] para no mutar el array original en los ejemplos
console.log(removeItem([...mainCharacters], "Han Solo")); 
// Devolverá: ["Luke", "Leia", "Chewbacca", "Rey", "Anakin", "Obi-Wan"]

console.log(removeItem([...mainCharacters], "Anakin")); 
// Devolverá: ["Luke", "Leia", "Han Solo", "Chewbacca", "Rey", "Obi-Wan"]

console.log(removeItem([...mainCharacters], "Palpatine")); 
// Devolverá el array original intacto ya que no encuentra el elemento