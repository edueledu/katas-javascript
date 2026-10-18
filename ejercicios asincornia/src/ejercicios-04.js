// ej 4.1 mayores de 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const mayores = ages.filter(age => age > 18);
console.log(mayores);

// ej 4.2 numeros pares
const pares = ages.filter(age => age % 2 === 0);
console.log(pares);

// ej 4.3 juego igual a League of Legends
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const lolStreamers = streamers.filter(streamer => streamer.gameMorePlayed === 'League of Legends');
console.log(lolStreamers);

// ej 4.4 
const conU = streamers.filter(streamer => streamer.name.includes('u'));
console.log(conU);

// ej 4.5 
const leyendasMod = streamers
	.filter(streamer => streamer.gameMorePlayed.includes('Legends'))
	.map(streamer => {
		if (streamer.age > 35) {
			return {
				...streamer,
				gameMorePlayed: streamer.gameMorePlayed.toUpperCase()
			};
		}
		return streamer;
	});

console.log(leyendasMod);