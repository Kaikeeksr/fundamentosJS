function getData(){
    const result = fetch('https://api.github.com/users/Kaikeeksr')
    console.log(result)
}

getData()

//Qual é a situação?

//a constante result armazena os dados do fetch(), após isso logamos isso no console
//porém, como não é uma requisição imediata ele loga no console a 'promessa do fetch'
// o resultado no console é de Promise: { <state>: "pending" }

//Usando async await

async function getData2(){
    const result = await fetch('https://api.github.com/users/Kaikeeksr')
    console.log(result)
}

getData2()

//usando async await o result 'espera' o resultado do fetch pra ser logado