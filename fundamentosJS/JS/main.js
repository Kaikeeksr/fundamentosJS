//'removendo' os itens do HTML
//const items = document.querySelector(".items")

//consolelog(allItems)

//        allItems.remove()
//TESTE

//const submitButton = document.querySelectorAll("#submit-button")

//submitButton.onClick = function () {
//  alert("clicaram nele")
//}

const items = document.querySelector(".items")
const buttonHide = document.querySelector("#btnHide")
const buttonShow = document.querySelector("#btnShow")
const submitButton = document.querySelector("#submit")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const form = document.querySelector("my-form")
const nameValue = nameInput.value
const emailValue = emailInput.value

// método 1 -  clicar no botão com 1 click = itens somes, 2 clicks eles voltam a aparecer
//Adicionando evento que muda o comportamento dos itens (aparecer e sumir)
buttonHide.addEventListener("click", (event) => {
  event.preventDefault() //impedir o comportamente o padrão do input 'recarregar a página'
  items.hidden = true
})

buttonShow.addEventListener("click", (event) => {
  event.preventDefault()
  items.hidden = false
})

//Logando o valor de um input no console
nameInput.addEventListener("change", (event) => {
  console.log(event.target.value)
})

emailInput.addEventListener("change", (event) => {
  console.log(event.target.value)
})

//exbindo alert se os input estiverem vazio ao 'enviar dados'
submitButton.addEventListener("click", (event) => {
  event.preventDefault()

  if (nameValue === "" || emailValue === "") {
    return alert("Por favor preencha os campos!")
  }

  //fazer os valores dos inputs aparecerem nos 'itens'
  items.children[0].textContent = nameValue
  items.children[1].textContent = emailValue
})
