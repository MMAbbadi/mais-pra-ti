//Variables
let count = 1
let title = document.getElementById('title')
let list = document.getElementById('list')
let remBtn = document.getElementById('btn-rem')

//Functions
function inserir(){
  let newItem = document.createElement('li')

  newItem.classList.add('list-item')
  newItem.innerHTML = `Item ${count}`

  count++
  title.innerHTML = 'Item Adicionado!'
  title.style.color = 'green'
  list.appendChild(newItem)

  verfList()
}

function remover() {
  if (list.children.length > 0) {
    title.innerHTML = `Item Removido!`;
    title.style.color = 'red';
    list.removeChild(list.lastChild);
    count --
  }
  verfList()
}

function verfList(){
  if(list.children.length == 0){
    title.innerHTML = 'Nenhum item para remover!';
    title.style.color = 'lightgray';

    remBtn.disabled = true
  } else {
    remBtn.disabled = false
  }
}