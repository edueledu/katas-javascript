const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },
  { name: "The Matrix", durationInMinutes: 136 },
  { name: "Amélie", durationInMinutes: 110 },
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

// Creamos los tres arrays vacíos para clasificar las películas
const smallMovies = [];
const mediumMovies = [];
const largeMovies = [];

// Recorremos el array de películas con un bucle for...of
for (const movie of movies) {
  if (movie.durationInMinutes < 100) {
    smallMovies.push(movie);
  } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
    mediumMovies.push(movie);
  } else if (movie.durationInMinutes >= 200) {
    largeMovies.push(movie);
  }
}

// Imprimimos los resultados por consola
console.log("Películas pequeñas (menos de 100 min):", smallMovies);
console.log("Películas medianas (entre 100 y 199 min):", mediumMovies);
console.log("Películas grandes (200 min o más):", largeMovies);