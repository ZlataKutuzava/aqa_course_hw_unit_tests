// Создайте функцию validatePassword, которая принимает строку (пароль) и возвращает true,
// если пароль соответствует следующим правилам:
//   - Пароль должен содержать хотя бы одну заглавную букву.
//   - Пароль должен содержать хотя бы одну букву в нижнем регистре.
//   - Пароль должен содержать хотя бы одну цифру.
//   - Пароль должен быть не менее 8 символов.
//   - Пароль не должен состоять из одних пробелов
// Функция должна возвращать false, если хотя бы одно из условий не выполнено.

function validatePassword(password: string): boolean {
  return password.length >= 8 &&
    password.trim().length &&
    password.match(/(?=.*\d)/) &&
    password.match(/[A-Z]/) &&
    password.match(/[a-z]/)
    ? true
    : false;
}

let passwords = ['12345678', 'Passw0rd', '        ', 'pasW0rd', 'Passwordd', 'PASSW00RD', 'passw0rdlower'];

passwords.forEach((password) => console.log(validatePassword(password)));
