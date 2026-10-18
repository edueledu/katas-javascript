// URLs de la API y selección de elementos del DOM
const API_URL = 'https://thronesapi.com/api/v2/Characters';
const select$$ = document.querySelector('#character-list');
const img$$ = document.querySelector('.character-image');

// Función principal para obtener los personajes de la API
async function getCharacters() {
    try {
        const response = await fetch(API_URL);
        const characters = await response.json();

        fillSelect(characters);
        setupChangeListener(characters);
    } catch (error) {
        console.error('Error al obtener los personajes:', error);
    }
}

// Rellenp el elemento <select> con los nombres de los personajes
function fillSelect(characters) {
    // Opción por defecto
    select$$.innerHTML = '<option value="">Selecciona un personaje</option>';

    characters.forEach((character, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = character.fullName;
        select$$.appendChild(option);
    });
}

// Escucha d los cambios del select y muestra la imagen del personaje seleccionado
function setupChangeListener(characters) {
    select$$.addEventListener('change', (event) => {
        const selectedIndex = event.target.value;

        if (selectedIndex !== '') {
            const selectedCharacter = characters[selectedIndex];
            img$$.src = selectedCharacter.imageUrl;
            img$$.alt = selectedCharacter.fullName;
        } else {
            img$$.src = '';
            img$$.alt = '';
        }
    });
}

// Inicializamos la llamada a la API
getCharacters();