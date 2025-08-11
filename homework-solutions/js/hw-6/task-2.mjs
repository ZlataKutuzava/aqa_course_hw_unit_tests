/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

let resultUnique = [];
let resultNull;
let resultUnique1 = [];
let resultUnique2 = [];

let competitorPizzasLowerCase = competitorPizzas.map((pizza) => pizza.toLowerCase());
console.log(competitorPizzasLowerCase);

for (let pizza of myPizzasT1) {
  if (!competitorPizzasLowerCase.includes(pizza.toLowerCase())) {
    resultUnique1.push(pizza);
  }
}
if (!resultUnique1.length) {
  resultNull = null;
} else {
  resultUnique = resultUnique1;
}

for (let pizza of myPizzasT2) {
  if (!competitorPizzasLowerCase.includes(pizza.toLowerCase())) {
    resultUnique2.push(pizza);
  }
}
if (!resultUnique2.length) {
  resultNull = null;
} else {
  resultUnique = resultUnique.push(resultUnique2);
}

console.log(resultUnique);
console.log(resultNull);

export { resultNull, resultUnique };
