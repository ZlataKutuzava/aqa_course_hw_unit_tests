/** 
   Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
   Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
   После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
   Преобразуйте респонс из JSON в объект
   Проверьте, что айди в респонсе === 201
   Функция должна возвращать полученный объект из респонса
   Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена
   **/
const baseUrl = 'https://jsonplaceholder.typicode.com/todos';

async function createTodo(todoBodyRequest) {
  try {
    const response = await fetch(baseUrl, {
      method: 'post',
      body: JSON.stringify(todoBodyRequest),
    });
    if (response.status !== 201) throw new Error(`Response status code is ${response.status}`);
    if (response.status == 201) {
      const body = await response.json();
      console.log(body.id);
      if (body.id !== 201) {
        throw new Error('Incorrect ToDo ID');
      } else {
        return body;
      }
    }
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log('Function execution is completed');
  }
}

createTodo({
  userId: 1,
  title: 'go to the gym',
  completed: false,
})
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.log(reject));
