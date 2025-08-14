/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...array) {
  return [].concat(...array);
}

/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  if (!sentence) {
    return '';
  } else if (typeof sentence == 'string') {
    if (sentence.length == 1) {
      return sentence.trim().toLowerCase();
    } else {
      let array = sentence
        .split(' ')
        .map((el) => el.toLowerCase())
        .filter((el) => el)
        .map((element, index) => element.charAt(0).toUpperCase() + element.slice(1))
        .join('_');

      return array.slice(0, 1).toLowerCase() + array.slice(1);
    }
  }
}
/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  let arr = [0,1];
  if (n == 0 || n == 1) {
    return n;
  } else if (n == 2 || n == 3) {
    return n - 1;
  } else if (n > 3) {
 for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  }
  return arr[n];
}

export { mergeArrays, fibonacci, devideBy };
