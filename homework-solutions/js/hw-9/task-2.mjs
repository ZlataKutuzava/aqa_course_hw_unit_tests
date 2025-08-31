/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {
  if (!character || typeof character.name !== 'string' || typeof character.age !== 'number') {
    throw new Error('Invalid input');
  } else characters.push(character);
}

function getCharacter(name) {
  return characters.find((objectInArray) => objectInArray.name === name);
}

function getCharactersByAge(minAge) {
  if (typeof minAge !== 'number') {
    throw new Error('Invalid input');
  } else {
    return characters.filter((objectInArray) => objectInArray.age >= minAge);
  }
}

function updateCharacter(name, newCharacter) {
  if (!getCharacter(name)) {
    throw new Error('Character is not found');
  } else {
   return Object.assign(getCharacter(name), newCharacter);
  }
}

function removeCharacter(name) {
  let index = characters.findIndex((objectInArray) => objectInArray.name == name);
  if (index == -1) {
    throw new Error('Character is not found');
  } else {
    return characters.splice(index, 1);
  }
}

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
// Ваш код
