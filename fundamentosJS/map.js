//MAP
const number = [1, 2, 3, 4, 5]

//multiplicando cada item da lista por 2

const numberMultiplybyTwo = number.map(function (algarismos) {
  return algarismos * 2
})

//adicionando 1 em cada item da lista

const plusOne = number.map(function (n) {
  return n + 1
})

//FILTER

const years = [2001, 2004, 2008, 2003, 1997, 1987, 2002, 2012]

//retornando uma lista nova apenas com números pares

const evenYears = years.filter(function (years) {
  return years % 2 === 0
})

console.log(evenYears.sort())

//REDUCE

const ages = [18, 19, 23, 12, 8, 15, 36]

//somar o valor de todas as idades

const sumOfAges = ages.reduce(function (age, acumulator) {
  return acumulator + age
}, 0)

console.log(sumOfAges)
