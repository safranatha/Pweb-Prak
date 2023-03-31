var Username_login = document.getElementById("Username_Login");
var Password_login = document.getElementById("Password_Login");
const form = document.querySelector("form");

const Icon = document.querySelector("#user-icon");
const Icon2 = document.querySelector("#password-icon");

function HidePlaceHolder(Element) {
  Element.addEventListener("click", function () {
    Element.placeholder = "";
  });
}

HidePlaceHolder(Username_login);
HidePlaceHolder(Password_login);


form.addEventListener("submit", function (e) {
  /* checkInputs(); */
  RequiredFiledCheck(Username_login, e, "Username tidak boleh kosong");
  validatePassword(Password_login, e, "Password harus terdiri dari 8 karakter")
});

function RequiredFiledCheck(element, e, message) {
  if (element.value.trim() === "") {
    e.preventDefault();
    setErrorFor(element, message);
    return false;
  } else {
    setSuccessFor(element);
    return true;
  }
}

function validatePassword(element, e, message) {
  if(element.value.trim()===""){
    setErrorFor(element,"Password Tidak Boleh Kosong");
    e.preventDefault();
    return false;
  }
  if (element.value.trim().length >0 && element.value.trim().length<8) {
    e.preventDefault();
    setErrorFor(element, message);
    return false;
  } 
  else {
    setSuccessFor(element)
    return true
  }
}



const IconList = [Icon, Icon2];

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const feedback = formControl.querySelector("p");
  feedback.textContent = message;
  feedback.style.visibility = "visible";
  for (let i = 0; i < IconList.length; i++) {
    IconList[i].style.paddingBottom = "40px";
  }
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  const feedback = formControl.querySelector("p");
  feedback.style.visibility = "hidden";
}
