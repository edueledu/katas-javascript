const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

// Creamos un objeto para almacenar el conteo de cada sonido
const soundCounts = {};

// Bucle for...of para recorrer cada usuario del array
for (const user of users) {
  // Bucle for...in para recorrer las claves (los sonidos) dentro de favoritesSounds
  for (const sound in user.favoritesSounds) {
    // Si el sonido ya existe en nuestro objeto de conteo, sumamos 1
    if (soundCounts[sound]) {
      soundCounts[sound]++;
    } else {
      // Si no existe, lo inicializamos en 1
      soundCounts[sound] = 1;
    }
  }
}

// el resultado final por consola
console.log(soundCounts);