const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

// Creamos un contador para llevar el control de qué fruta nos toca añadir
let fruitIndex = 0;

for (let i = 0; i < foodSchedule.length; i++) {
  // Comprobamos si la comida NO es vegana
  if (foodSchedule[i].isVegan === false) {
    // Reemplazamos el nombre por la fruta correspondiente
    foodSchedule[i].name = fruits[fruitIndex];
    // Cambiamos la propiedad a vegana
    foodSchedule[i].isVegan = true;
    // Aumentamos el contador de la fruta para no repetir la misma en el siguiente reemplazo
    fruitIndex++;
  }
}

console.log(foodSchedule);