/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== 'string') {
    return false;
  }
  if (typeof word === 'string') {
    return word.split('').reverse().join('').toLowerCase() === word.toLowerCase();
  }
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (typeof sentence !== 'string' || !sentence.length) {
    return [];
  } else if (typeof sentence == 'string') {
    let arrayWords = sentence.split(' ');
    let longestWordLength = 0;
    for (let word of arrayWords) {
      if (word.length > longestWordLength) {
        longestWordLength = word.length;
      }
    }
    return arrayWords.filter((word) => word.length === longestWordLength);
  }
}

export { isPalindrom, findLongestWords };
