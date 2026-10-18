const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

for (const user of users) {
  // Primera condición: menor de edad (menor de 18)
  if (user.years < 18) {
    console.log("Usuarios menores de edad: " + user.name);
  } 
  // Segunda condición: mayor de edad (18 o mayor)
  else if (user.years >= 18) { 
    console.log("Usuarios mayores de edad: " + user.name);
  }
}