//Prommises
const nome = "Kaike"

const p = new Promise((resolve, reject) => {
  if (nome === "Kaike") {
    resolve("Usuário Kaike foi encontrado!")
  } else {
    reject("Usuário Kaike não foi econtrado!")
  }
})

p.then((data) => {
  console.log(data)
}).catch((err) => {
  console.log("Aconteceu um erro: " + err)
})

//Resolvendo várias promises com método all

const p1 = new Promise((resolve, reject) => {
  resolve("P1 ok!")
})
const p2 = new Promise((resolve, reject) => {
  resolve("P2 ok!")
})
const p3 = new Promise((resolve, reject) => {
  resolve("P3 ok!")
})
//Delay promise
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P4 ok!")
  }, 3000)
})

const resolveAll = Promise.all([p1, p2, p3, p4]).then((data) => {
  console.log(data)
})

console.log("Este console.log n é atrasado por causa do setTimeout da p4")

//O Promise.race() faz tem praticamente a msm função que o Promise.all()
//porém, é literalmente uma corrida, as promisses que tiverem resposta mais rápida
// aparecerão primeiro

//OBS: a promise do nome não interfere no funcionameto das demais, poís são assíncronas
