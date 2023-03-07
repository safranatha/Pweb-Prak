
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


function HidePlaceHolder (Element){
    Element.addEventListener("click",function(){
        Element.placeholder="";
    })
}

var Fullname_Register = document.getElementById("Fullname_Register")
var Email_Register = document.getElementById("Email_Register")
var PhoneNumber_Register = document.getElementById("PhoneNumber_Register")
var password_Register = document.getElementById("password_Register")


HidePlaceHolder(Fullname_Register)
HidePlaceHolder(Email_Register)
HidePlaceHolder(PhoneNumber_Register)
HidePlaceHolder(password_Register)



/* var SuccesfulAlert = document.getElementById("Register-button");
SuccesfulAlert.addEventListener("click",function(){
    alert("Registrasi akun berhasil");
}) */