
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

var form = document.querySelector("form")
var Fullname_Register = document.getElementById("Fullname_Register")
var Email_Register = document.getElementById("Email_Register")
var PhoneNumber_Register = document.getElementById("PhoneNumber_Register")
var password_Register = document.getElementById("password_Register")
const Icon1 = document.querySelector("#Full_Name");
const Icon2 = document.querySelector("#Email_2");
const Icon3 = document.querySelector("#Phone");
const Icon4 = document.querySelector("#Password");


HidePlaceHolder(Fullname_Register)
HidePlaceHolder(Email_Register)
HidePlaceHolder(PhoneNumber_Register)
HidePlaceHolder(password_Register)



form.addEventListener('submit', function (e) {
e.preventDefault();
checkInputs();
});

function checkInputs() {
const Fullname_Register_Value = Fullname_Register.value.trim();
const Email_Register_Value = Email_Register.value.trim();
const Phone_Register_Value = PhoneNumber_Register.value.trim();
const password_Register_Value = password_Register.value.trim();


if (Fullname_Register_Value === '') {
  setErrorFor(Fullname_Register, "Username cannot be blank");
}
else {
  setSuccessFor(Fullname_Register);
}

if (Email_Register_Value === '') {
  setErrorFor(Email_Register, "Email cannot be blank");
} else {
  setSuccessFor(Email_Register);
}


if (Phone_Register_Value === '') {
  setErrorFor(Phone_Register, "Phone cannot be blank");
} 
  else {
  setSuccessFor(Phone_Register);
}

if (password_Register_Value === '') {
  setErrorFor(password_Register, "Password cannot be blank");
} else if (password_Register_Value.length < 8) {
  setErrorFor(password_Register, "Password must be at least 8 characters long");
} else {
  setSuccessFor(password_Register);
  form.submit();
}
}

function setErrorFor(input, message) {
const formControl = input.parentElement;
const feedback = formControl.querySelector("p");
feedback.textContent = message;
feedback.style.visibility = "visible"
Icon1.style.paddingBottom = "35px";
Icon2.style.paddingBottom = "35px";
Icon3.style.paddingBottom = "35px";
Icon4.style.paddingBottom = "35px";

}

function setSuccessFor(input) {
const formControl = input.parentElement;
const feedback = formControl.querySelector("p");
feedback.style.visibility = "hidden"
}