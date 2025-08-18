/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
function countVowels(word) {
  return [...word.toLowerCase()].filter((letter) => vowels.includes(letter)).length;
}

function sortedByVowels(wordsArr) {
  return [...wordsArr].sort((a, b) => countVowels(a) - countVowels(b));
}
export { sortedByVowels };
