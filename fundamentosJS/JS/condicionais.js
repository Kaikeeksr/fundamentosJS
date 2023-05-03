//Condicionais

const sum1 = 2 + 2
const sum2 = 3 + 3

if (sum1 === 4 && sum2 === 6) {
  console.log("sum1 is 4 and sum2 is 6")
}

//exemplo 2 - Ternary operator

const sum = 1 + 1

let number = sum === 2 ? 2 : 4
console.log(number)

//Exemplo 3 - switch case

const car = "Mercedes"

switch (car) {
  case "Mercedes":
    console.log("Mercedes is beautiful")
    break
  case "Ferrari":
    console.log("Ferrari is very red")
    break
  case "Tesla":
    console.log("Tesla is very smart")
    break
}
