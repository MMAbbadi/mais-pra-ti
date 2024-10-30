let title = document.getElementById('title')
let body = document.getElementById('body')
let newP = document.createElement('p')
let newP2 = document.createElement('p')
let clicker = document.getElementById('clicker')
let paragrafo = document.querySelector('.paragraph')


clicker.addEventListener('click', function(){
  title.innerHTML = 'Novo Ttitle'
  title.style.color = 'red'
})

paragrafo.innerText = 'Hello'
paragrafo.remove()

console.log(title.textContent)
newP2.innerHTML = 'Novo P2'
newP.innerText = 'Novo P'
body.appendChild(newP)
body.appendChild(newP2)