const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5},
    {name: 'Maria Aranda Jimenez', score: 1},
    {name: 'Cristóbal Martínez Lorenzo', score: 6},
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

// 6.1 Suma de todas las notas
const sumaTotal = exams.reduce((acc, exam) => acc + exam.score, 0);
console.log('Suma total:', sumaTotal);

// 6.2 Suma de las notas de los aprobados (score >= 5)
const sumaAprobados = exams.reduce((acc, exam) => {
    if (exam.score >= 5) {
        return acc + exam.score;
    }
    return acc;
}, 0);
console.log('Suma aprobados:', sumaAprobados);

// 6.3 Media de todas las notas
const media = exams.reduce((acc, exam) => acc + exam.score, 0) / exams.length;
console.log('Media:', media);