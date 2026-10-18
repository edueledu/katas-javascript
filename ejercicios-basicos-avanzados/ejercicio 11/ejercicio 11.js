const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];

function averageWord(list) {
  if (list.length === 0) {
    return 0; // Evitamos dividir por 0 si el array está vacío
  }

  let sum = 0;

  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === "number") {
      sum += list[i]; // Si es un número, sumamos su valor
    } else if (typeof list[i] === "string") {
      sum += list[i].length; // Si es un string, sumamos su longitud
    }
  }

  // Com el ejercicio pide calcular el promedio, dividimos la suma total entre la cantidad de elementos
  return sum / list.length; 
}

// Prueba 
console.log(averageWord(mixedElements));