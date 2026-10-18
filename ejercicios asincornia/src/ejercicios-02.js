// ej 2.1 copiar array
const pointsList = [32, 54, 21, 64, 75, 43];
const copiaPuntos = [...pointsList];
console.log(copiaPuntos);

// ej 2.2 copiar objeto
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const copiaToy = {...toy};
console.log(copiaToy);

// ej 2.3 juntar los dos arrays (usando el pointsList de arriba)
const pointsLis2 = [54,87,99,65,32];
const puntosJuntos = [...pointsList, ...pointsLis2];
console.log(puntosJuntos);

// ej 2.4 juntar los objetos (usando el toy de arriba)
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};
const juguetesJuntos = {...toy, ...toyUpdate};
console.log(juguetesJuntos);

// ej 2.5 quitar la posicion 2 (amarillo) sin tocar el original
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const coloresCortados = [...colors.slice(0, 2), ...colors.slice(3)];
console.log(coloresCortados);