const toys = [
    {id: 5, name: 'Transformers'},
    {id: 11, name: 'LEGO'},
    {id: 23, name: 'Hot Wheels'},
    {id: 40, name: 'Rascador de gato'},
    {id: 40, name: 'FurReal Friends gato interactivo'},
    {id: 60, name: 'Nerf Blaster'},
    {id: 71, name: 'Sylvanian Families - Familia gato'}
];

// Como modificar un array mientras lo recorres con un for...of puede dar problemas (se saltan posiciones),
// la mejor opción y la más segura es crear un nuevo array con los juguetes que no incluyen la palabra "gato".
const filteredToys = [];

for (const toy of toys) {
    if (!toy.name.includes('gato')) {
        filteredToys.push(toy);
    }
}

console.log(filteredToys);