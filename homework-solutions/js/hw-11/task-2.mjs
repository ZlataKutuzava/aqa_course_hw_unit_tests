class Employee {
  #salary;
  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.#salary = salary;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if (typeof value !== 'string') {
      return;
    }
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (typeof value !== 'string') {
      return;
    }
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    if (typeof value !== 'string') {
      return;
    }
    this._profession = value;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (typeof value !== 'number' || value <= 0) throw new Error('Invalid salary');
    return (this.#salary = value);
  }

  getFullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}

class Company {
  #employees;
  constructor(title, phone, address, employees = []) {
    this.title = title;
    this.phone = phone;
    this.address = address;
    this.#employees = employees;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (typeof value !== 'string') throw new Error('Invalid title');
    return (this._title = value);
  }

  get number() {
    return this._number;
  }

  set number(value) {
    if (typeof value !== 'number' && value.length == 0) throw new Error('Invalid number');
    return (this._number = value);
  }

  get address() {
    return this._address;
  }

  set address(value) {
    if (typeof value !== 'string') throw new Error('Invalid address');
    return (this._address = value);
  }

  addEmployee(employee) {
    if (!(employee instanceof Employee)) throw new Error('Object is not the instance of Employee class');
    this.#employees.push(employee);
  }

  getEmployees() {
    return this.#employees;
  }

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }

  findEmployeeByName(firstName) {
     this.#employees.find(employee =>  {
      if (employee.firstName === firstName) {
      return employee;
     }
     else throw new Error ("Employee is not found");
     } ) 
  }
}
export { Employee, Company };
