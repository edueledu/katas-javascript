const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(stringList) {
  let longestWord = stringList[0];

  for (let i = 1; i < stringList.length; i++) {
    // Usamos ">" estrictamente para mantener el primer elemento si por algun casual da empate 
    if (stringList[i].length > longestWord.length) {
      longestWord = stringList[i];
    }
  }

  return longestWord;
}

// Prueba
console.log(findLongestWord(avengers));