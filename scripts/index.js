const botaoBusca = document.querySelector("#page-home main a")
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .header a")

botaoBusca.addEventListener("click", ()=>{
    modal.classList.remove("hide")
})
close.addEventListener("click", ()=>{
    modal.classList.add("hide")
})