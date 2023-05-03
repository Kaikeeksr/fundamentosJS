//Poo

class Person {
  constructor(firstname, lastname, age) {
    ;(this.firstname = firstname), (this.lastname = lastname), (this.age = age)
  }

  //criando método que imprime o nome completo
  getFullName() {
    console.log(`${this.firstname} ${this.lastname}`)
  }

  //Método estático
  static speak() {
    console.log("Olá mundo!")
  }
}

const person = new Person("Kaike", "Rocha", "18")

person.getFullName()
Person.speak()

//Heranças

class Animal {
  constructor(name) {
    this.name = name
  }

  speak() {
    console.log(`${this.name} made some noise`)
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name)
  }
}

const animal = new Animal("Simba")
const dog = new Animal("bob")

dog.speak()
