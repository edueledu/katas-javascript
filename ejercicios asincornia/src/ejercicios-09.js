// Genera un número aleatorio entre 1 y 151
const randomId = Math.floor(Math.random() * 151) + 1;
const API_URL = `https://pokeapi.co/api/v2/pokemon/${randomId}`;

const img$$ = document.querySelector('.random-image');

async function getRandomPokemon() {
    try {
        const response = await fetch(API_URL);
        const pokemon = await response.json();

        // Usamos el artwork oficial de alta resolución
        const pokemonImg = pokemon.sprites.other['official-artwork'].front_default 
            || pokemon.sprites.front_default;

        if (img$$) {
            img$$.src = pokemonImg;
            img$$.alt = pokemon.name;
        }
    } catch (error) {
        console.error('Error al obtener el Pokémon:', error);
    }
}

getRandomPokemon();