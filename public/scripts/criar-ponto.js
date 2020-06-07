function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then( states => {

        for( const state of states ) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }

    })
}

populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text


    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`


    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
    .then( res => res.json() )
    .then( cities => {

        for( const city of cities ) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false
    } )
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)

//Itens de coleta
//pegar todos os li

const itenParaColeta = document.querySelectorAll(".items-grid li")

for(item of itenParaColeta){
    item.addEventListener("click", handleSelectedItem)
}
const itensColetados = document.querySelector("input[name=items")

let selectedItems = []

function handleSelectedItem(item){
    const itemLi = event.target

    //add ou remover classe com js = toggle
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id
    console.log(itemId)

    //verificar se existem itens selecionados
    //se sim pegar os itens selecionados

    const jaSelecionado = selectedItems.findIndex(function(item){
        const itemAchado = item == itemId
        return itemAchado
    })

    //se estiverem selecionados, tirar da seleção
    if(jaSelecionado >= 0){
        const itensFiltrados = selectedItems.filter( item => {
            const itemEDiferente = item != itemId
            return itemEDiferente
        })
        selectedItems = itensFiltrados
    } else{
       //se não estiver selecionado, 
       //adicionar
       selectedItems.push(itemId)

    }
    console.log(selectedItems)

    //atualizar o input escondido com os itens selecionados
    itensColetados.value = selectedItems
}