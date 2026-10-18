const artists = [
  { name: 'Kurt Cobain', influences: ['The Beatles', 'Pixies', 'Lead Belly'] },
  { name: 'David Bowie', influences: ['Little Richard', 'Chuck Berry', 'The Velvet Underground'] },
  { name: 'Eddie Vedder', influences: ['The Who', 'Neil Young', 'Jim Morrison'] },
  { name: 'Freddie Mercury', influences: ['Liza Minnelli', 'Jimi Hendrix', 'Aretha Franklin'] },
  { name: 'John Lennon', influences: ['Elvis Presley', 'Chuck Berry', 'Buddy Holly'] }
];

// Bucle externo para recorrer cada artista
for (const artist of artists) {
  // Bucle interno para recorrer las influencias del artista actual
  for (const influence of artist.influences) {
    // Imprimimos el par artista - influencia
    console.log(`${artist.name} está influenciado por: ${influence}`);
  }
}