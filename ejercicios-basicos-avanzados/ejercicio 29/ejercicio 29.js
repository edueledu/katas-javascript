const starWarsMovies = [
  { title: 'A New Hope', releaseYear: 1977 },
  { title: 'The Empire Strikes Back', releaseYear: 1980 },
  { title: 'Return of the Jedi', releaseYear: 1983 },
  { title: 'The Phantom Menace', releaseYear: 1999 },
  { title: 'Attack of the Clones', releaseYear: 2002 },
  { title: 'Revenge of the Sith', releaseYear: 2005 },
  { title: 'The Force Awakens', releaseYear: 2015 },
  { title: 'The Last Jedi', releaseYear: 2017 },
  { title: 'The Rise of Skywalker', releaseYear: 2019 },
  { title: 'Rogue One', releaseYear: 2016 },
  { title: 'Solo', releaseYear: 2018 }
];

// Creamos un objeto vacío donde agruparemos las películas
const moviesByDecade = {};

for (const movie of starWarsMovies) {
  // Calculamos la década (ej: 1977 / 10 = 197.7 -> floor redondea a 197 -> * 10 = 1970)
  const decade = Math.floor(movie.releaseYear / 10) * 10;
  
  // Si esta década aún no existe como clave en nuestro objeto, la creamos con un array vacío
  if (!moviesByDecade[decade]) {
    moviesByDecade[decade] = [];
  }
  
  // Añadimos la película al array de la década correspondiente
  moviesByDecade[decade].push(movie);
}

// Imprimimos el objeto final agrupado
console.log(moviesByDecade);