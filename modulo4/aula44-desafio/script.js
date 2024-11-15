let contentTab1 = document.getElementById('list-1')
let contentTab2 = document.getElementById('list-2')
let contentTab3 = document.getElementById('list-3')

let btn1 = document.getElementById('item-1')
let btn2 = document.getElementById('item-2')
let btn3 = document.getElementById('item-3')

function resetTabs() {
    btn1.classList.remove('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
    contentTab1.classList.remove('active');
    contentTab2.classList.remove('active');
    contentTab3.classList.remove('active');
}

btn1.addEventListener('click', function(){
    resetTabs();
    btn1.classList.add('active')
    contentTab1.classList.add('active')
})

btn2.addEventListener('click', function(){
    resetTabs();
    btn2.classList.add('active')
    contentTab2.classList.add('active')

})

btn3.addEventListener('click', function(){    
    resetTabs();
    btn3.classList.add('active')
    contentTab3.classList.add('active')

})