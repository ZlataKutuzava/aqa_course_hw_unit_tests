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
 let vowerCounter = 0;
 for (let i = 0; i <= word.length; i++) {
 for (let vowel of vowels) {
  if (word[i] == vowel) {
    vowerCounter++;
  }
 }
  }
  return vowerCounter;
}


function sortedByVowels(wordsArr) {
  return [...wordsArr].sort((a,b) => countVowels(a) - countVowels(b));
}
export { sortedByVowels };
