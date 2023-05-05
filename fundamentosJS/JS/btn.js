const buttonHide = document.querySelector("#btnHide")
const buttonShow = document.querySelector("#btnShow")

export default function showBtns() {
  buttonHide.addEventListener("click", (event) => {
    event.preventDefault() //impedir o comportamente o padrão do input 'recarregar a página'
    items.hidden = true
  })

  buttonShow.addEventListener("click", (event) => {
    event.preventDefault()
    items.hidden = false
  })
}
