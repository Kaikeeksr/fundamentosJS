for (let i = 0; i <= 10; i++) {
  console.log(i)
}

//usando loops com arrays

const cars = ["Honda", "Tesla", "Toyota", "Mercedes"]

//for

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i])
}

// for of

for (let car of cars) {
  console.log(car)
}

//for each

cars.forEach(function (car, index) {
  console.log(index)
  console.log(car)
})

//WHILE

let i = 0
while (i < 10) {
  console.log("index é menor do que 10!")
  i++
}

const person = {
  name: "Junior",
  age: 22
}
