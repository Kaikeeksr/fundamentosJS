// OBJETOS

const person = {
  firstName: "Kaike",
  lastName: "Rocha",
  age: "18",
  hobbies: ["Jogar videogame", "Assistir esportes em geral", "Dirigir"],
  address: {
    country: "Brasil",
    state: "São Paulo",
    city: "Embu das Artes"
  }
}

//DESCTRUCTURING

const {
  firstName,
  lastName,
  age,
  hobbies,
  address: { country, state, city }
} = person

/* console.log(firstName)
  console.log(lastName)
  console.log(age)
  console.log(hobbies)
  console.log(person.address.country)
  */

//EXEMPLO 2

const ToDo = [
  {
    id: 1,
    description: "Estudar progormação",
    isCompleted: true
  },
  {
    id: 2,
    description: "Ler",
    isCompleted: false
  },
  {
    id: 3,
    description: "Ir ao mercado",
    isCompleted: false
  }
]

console.log(ToDo[2].description)

//Convertendo o objeto ToDo em formato JSON
const toDoJSON = JSON.stringify(ToDo)

console.log(toDoJSON)
