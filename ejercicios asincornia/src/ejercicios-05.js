const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

// Seleccionamos el input por el atributo data-function
const input$$ = document.querySelector('[data-function="toFilterStreamers"]');

// Escuchamos lo que escribe el usuario
input$$.addEventListener('input', (event) => {
	const valorInput = event.target.value.toLowerCase();
	
	const filtrados = streamers.filter(streamer => 
		streamer.name.toLowerCase().includes(valorInput)
	);

	console.log(filtrados);
});