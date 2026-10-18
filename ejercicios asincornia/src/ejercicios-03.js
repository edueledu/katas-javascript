// ej 3.1 sacar solo los nombres con .map()
const users = [
	{id: 1, name: 'Abel'},
	{id: 2, name: 'Julia'},
	{id: 3, name: 'Pedro'},
	{id: 4, name: 'Amanda'}
];

const nombres = users.map(user => user.name);
console.log(nombres);

// ej 3.2 cambiar nombre a 'Anacleto' si empieza por 'A'
// (usamos el mismo array de users)
const nombresAnacleto = users.map(user => {
	if (user.name.startsWith('A')) {
		return 'Anacleto';
	}
	return user.name;
});
console.log(nombresAnacleto);

// ej 3.3 
const cities = [
	{isVisited: true, name: 'Tokyo'},
	{isVisited: false, name: 'Madagascar'},
	{isVisited: true, name: 'Amsterdam'},
	{isVisited: false, name: 'Seul'}
];

const listaCiudades = cities.map(city => {
	if (city.isVisited) {
		return city.name + ' (Visitado)';
	}
	return city.name;
});
console.log(listaCiudades);