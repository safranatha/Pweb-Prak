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

var Username_login = document.getElementById("Username_Login");
var Password_login = document.getElementById("Password_Login");
const form = document.querySelector("form");

const Icon = document.querySelector("#user-icon");
const Icon2 = document.querySelector("#password-icon");


function HidePlaceHolder(Element) {
  Element.addEventListener("click", function () {
    Element.placeholder = "";
  })
}

HidePlaceHolder(Username_login);
HidePlaceHolder(Password_login);

let hasError = false;

form.addEventListener('submit', function (e) {
  checkInputs();
});

function checkInputs() {
  const Username_login_Value = Username_login.value.trim();
  const Password_login_Value = Password_login.value.trim();

  if (Username_login_Value === '') {
    setErrorFor(Username_login, "Username cannot be blank");
    hasError = true;
  }
  else {
    setSuccessFor(Username_login);
  }

  if (Password_login_Value === '') {
    setErrorFor(Password_login, "Password cannot be blank");
    hasError = true;
  } else if (Password_login_Value.length < 8) {
    setErrorFor(Password_login, "Password must be at least 8 characters long");
    hasError = true;
  } else {
    setSuccessFor(Password_login);
  }

  if (!hasError) {
    form.submit();
  }
  else {
    form.preventDefault();
  }
}

const IconList = [Icon, Icon2];

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const feedback = formControl.querySelector("p");
  feedback.textContent = message;
  feedback.style.visibility = "visible"
  for(let i=0;i<IconList.length;i++){
    IconList[i].style.paddingBottom = "40px";
  }
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  const feedback = formControl.querySelector("p");
  feedback.style.visibility = "hidden"
}
