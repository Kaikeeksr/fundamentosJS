//LISTAS
const times = [
  "Corinthians",
  "São Paulo",
  "Palmeiras",
  "Flamengo",
  "Santos",
  "Grêmio",
  "Vasco"
]
const sccp = times[0]

times.push("Ceará") //adicionou ceará no final da lista
times.unshift("Corinthians") //adicionou guarani no inicio da lista
times.pop() //remove o último item da lista, no caso "ceara"

times[1] = "Ponte Preta" // agr o index1 da lista não é mais o sp é a Ponte Preta

console.log(times)
console.log(times.length) //mostra o 'tamanho' da lista

//criando mais uma lista

const names = [
  "Kaike",
  "Ana",
  "Julia",
  "Melissa",
  "Lucas",
  "Wallace",
  "Daniel",
  "Vitor"
]

console.log(names.sort()) //ordena os nomes em ordem alfabética

//utilizando template string com listas

const news = `A final do campeonato paulista de 2017 foi entre ${sccp} e ${times[1]}`
const news2 = `A final da libertadores de 2021 foi entre ${times[2]} e ${times[3]}`
const news3 = `${times[6]} e ${times[7]} subiram para a primeira divisão do campeonato Brasileiro`

const newsList = [news, news2, news3]

console.log(newsList)
