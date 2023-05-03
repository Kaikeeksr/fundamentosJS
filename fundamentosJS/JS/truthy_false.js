//uma string vazia, 0, null e undefined sempre sera false

const x = ""
const y = 0
const a = null
const b = undefined

//Já uma lista ou um objeto vazio, são true

const list = []
const obj = {}

//verificando se as costante são falsas ou verdadeiras
// !! = checando se é truthy ou false
// !  = inverte o booleano (se for true, vira false)

console.log(!!x)
console.log(!!y)
console.log(!!a)
console.log(!!b)

console.log(!!obj)
console.log(!!list)
