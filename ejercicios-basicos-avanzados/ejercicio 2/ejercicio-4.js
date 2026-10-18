let precioBaseGlobal = 10000;

precioBaseGlobal = 25000

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

nave1.precioFinal = precioBaseGlobal + nave1.precioBase
nave2.precioFinal = precioBaseGlobal + nave2.precioBase

console.log(nave1)