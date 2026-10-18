const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, index1, index2) {
  // Guardamos temporalmente el valor del primer índice
  const temp = array[index1];
  
  // Intercambiamos los valores
  array[index1] = array[index2];
  array[index2] = temp;
  
  return array;
}

// Ejemplos de uso (usando el operador spread [...] para no mutar el array original en la prueba)
console.log("Intercambiar índice 0 y 3:");
console.log(swap([...fantasticFour], 0, 3)); 
// Resultado: ["La cosa", "Mr. Fantástico", "La mujer invisible", "La antorcha humana"]

console.log("Intercambiar índice 1 y 2:");
console.log(swap([...fantasticFour], 1, 2)); 
// Resultado: ["La antorcha humana", "La mujer invisible", "Mr. Fantástico", "La cosa"]