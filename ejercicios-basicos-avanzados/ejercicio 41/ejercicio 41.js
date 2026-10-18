function rollDice(faces) {
  // Lo multiplicamos por las caras, usamos Math.floor para redondear hacia abajo y sumamos 1 para que empiece en 1.
  return Math.floor(Math.random() * faces) + 1;
}

// Ejemplos de uso con diferentes tipos de dados
console.log("Tirada de dado de 6 caras:", rollDice(6));
console.log("Tirada de dado de 20 caras (D&D):", rollDice(20));
console.log("Tirada de dado de 100 caras (Percentil):", rollDice(100));