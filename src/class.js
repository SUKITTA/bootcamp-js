class Person {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  getDetail() {
    return `My name is ${this.name} I'm ${this.age} years old.`;
  }

  getEmail() {
    return this.email;
  }
}

const jane = new Person("Jane", 20, "jane@hotmail.com");
console.log(jane.getDetail());

// class Employee{
//   constructor()
// }
