const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhalla', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The Last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10},
];

// 1. Filtrar los juegos que incluyen 'RPG' en su array de géneros
const rpgGames = videogames.filter(game => game.genders.includes('RPG'));

// 2. Sumar las notas con .reduce() y dividir entre el número de juegos filtrados
const mediaRPG = rpgGames.reduce((acc, game) => acc + game.score, 0) / rpgGames.length;

console.log('Juegos RPG:', rpgGames);
console.log('Media de score RPG:', mediaRPG);