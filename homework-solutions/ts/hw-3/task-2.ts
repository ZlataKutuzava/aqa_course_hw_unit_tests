// Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ, соответствующий этому значению. 
// Если значение не найдено, функция должна возвращать undefined.
// Используйте keyof для типизации ключей объекта

function getKeyByValue<T extends object>(object: T, value: T[keyof T]): keyof T | undefined {
   for (const key in object) {
    if (object[key] === value) {
        return key;
    }
   }
}

const person = {
    "name": "Zlata",
    "age": 28,
    "location": "Minsk"
}

console.log(getKeyByValue(person, "Minsk"))
console.log(getKeyByValue(person, "hasPets"));