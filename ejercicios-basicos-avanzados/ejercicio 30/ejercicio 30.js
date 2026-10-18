const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
];

// Creamos el objeto vacío para agrupar las canciones
const tracksByGenre = {};

for (const track of tracks) {
  // Comprobamos si ya existe una clave con ese género en nuestro objeto
  if (!tracksByGenre[track.genre]) {
    // Si no existe, la inicializamos con un array vacío
    tracksByGenre[track.genre] = [];
  }
  
  // Añadimos la canción al array correspondiente a su género
  tracksByGenre[track.genre].push(track);
}

// Imprimimos el objeto agrupado por consola
console.log(tracksByGenre);