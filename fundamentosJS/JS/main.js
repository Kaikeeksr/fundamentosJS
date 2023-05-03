//'removendo' os itens do HTML
//const items = document.querySelector(".items")

//consolelog(allItems)

//        allItems.remove()
//TESTE
const items = document.querySelector(".items")

//const submitButton = document.querySelectorAll("#submit-button")

//submitButton.onClick = function () {
//  alert("clicaram nele")
//}

// método 1 -  clicar no botão com 1 click = itens somes, 2 clicks eles voltam a aparecer
const buttonHide = document.querySelector("#btnHide")
const buttonShow = document.querySelector("#btnShow")

buttonHide.addEventListener("click", () => {
  items.hidden = true
})

buttonShow.addEventListener("click", () => {
  items.hidden = false
})
