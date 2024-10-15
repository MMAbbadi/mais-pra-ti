let btnSend = document.getElementById('btn_enviar')
let user = document.getElementById('user')
let mail = document.getElementById('mail')
let pass = document.getElementById('pass')
let warning = document.getElementById('wng_msg')


function checkFields() {
  if (user.value === "" || mail.value === "" || pass.value === "") {
    btnSend.disabled = true;
    warning.style.display = 'block'; 
  } else {
    btnSend.disabled = false;
    warning.style.display = 'none'; 
  }
}

checkFields()

user.addEventListener('input', checkFields);
mail.addEventListener('input', checkFields);
pass.addEventListener('input', checkFields);

btnSend.addEventListener('click', function enviar(e) {
  e.preventDefault(); 
  console.log('Enviado com sucesso!'); 
})

