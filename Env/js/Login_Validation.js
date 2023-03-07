
(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })
})()



/* Hide PlaceHolder */
function HidePlaceHolder(Element) {
  Element.addEventListener("click", function () {
    Element.placeholder = "";
  })
}

var Username_login = document.getElementById("Username_Login");
var Password_login = document.getElementById("Password_Login");
const form = document.getElementsByTagName("form")[0]; // add [0] to get the first form element

HidePlaceHolder(Username_login);
HidePlaceHolder(Password_login);


form.addEventListener('submit', function(e) {
  e.preventDefault();
  checkInputs();
});

function checkInputs(){
  const Username_login_Value = Username_login.value.trim();
  const Password_Login_Value = Password_login.value.trim();

  if(Username_login_Value === ""){
     setErrorFor(Username_login, "Username cannot be blank")
  }
  else{
     setSuccesFor(Username_login);
  }
}

function setErrorFor(input,message){
  const formControl = input.parentElement;
  const display = formControl.getElementById("Username_Valid");
  display.innerText = message;
  formControl.className = "form-Control error"
}

function setSuccesFor(input){
    const formControl = input.parentElement;
    formControl.className = "form-Control success"
}
