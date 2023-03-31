function HidePlaceHolder(Element) {
  Element.addEventListener("click", function () {
    Element.placeholder = "";
  });
}

var form = document.querySelector("form");
var Fullname_Register = document.getElementById("Fullname_Register");
var Email_Register = document.getElementById("Email_Register");
var PhoneNumber_Register = document.getElementById("PhoneNumber_Register");
var password_Register = document.getElementById("password_Register");

HidePlaceHolder(Fullname_Register);
HidePlaceHolder(Email_Register);
HidePlaceHolder(PhoneNumber_Register);
HidePlaceHolder(password_Register);

const Icon1 = document.querySelector("#Full_Name");
const Icon2 = document.querySelector("#Email_2");
const Icon3 = document.querySelector("#Phone");
const Icon4 = document.querySelector("#Password");

form.addEventListener("submit", function (e) {
  RequiredFiledCheck(Fullname_Register, e, "Nama Tidak Boleh Kosong");

  emailValidation(Email_Register, e, "Masukkan email yang valid");
  phoneNumberValidation(PhoneNumber_Register,e,"Masukkan Nomor Telefon yang Valid");
  passwordValidation(password_Register,e,"Masukkan Password Setidaknya 8 karakter")
  /* checkInputs(); */
});

function RequiredFiledCheck(element, e, message) {
  if (element.value.trim() === "") {
    setErrorFor(element, message);
    e.preventDefault();
    return false;
  } else {
    setSuccessFor(element);
  }
}

function emailValidation(element, e, message) {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(element.value.trim()===""){
    e.preventDefault();
    setErrorFor(element,"Email tidak boleh kosong")
    return false;
  }
  if(!regex.test(element.value.trim())) {
    e.preventDefault();
    setErrorFor(element, message);
    return false;
  } else {
    setSuccessFor(element);
    return true;
  }
}

function phoneNumberValidation(element, e, message) {
  const regex = /^[0-9]{10,13}$/;
  if(element.value.trim()===""){
    setErrorFor(element,"Nomor Telefon Tidak boleh Kosong");
    e.preventDefault();
    return false;
  }
  if(regex.test(element.value.trim())){
    setSuccessFor(element)
    return true;
  }
  else{
    e.preventDefault()
    setErrorFor(element,message)
    return false
  }
}

function passwordValidation(element, e, message) {
  if(element.value.trim()===""){
    e.preventDefault();
    setErrorFor(element,"Password Tidak Boleh Kosong")
    return false;
  }
  if(element.value.trim().length<8){
    e.preventDefault();
    setErrorFor(element,"Password setidaknya 8 karakter");
    return false
  }
  else{
    setSuccessFor(element);
    return true;
  }
}


const IconList = [Icon1, Icon2, Icon3, Icon4];

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const feedback = formControl.querySelector("p");
  feedback.textContent = message;
  feedback.style.visibility = "visible";
  for (let i = 0; i < IconList.length; i++) {
    IconList[i].style.paddingBottom = "35px";
  }
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  const feedback = formControl.querySelector("p");
  feedback.style.visibility = "hidden";
  for (let i = 0; i < IconList.length; i++) {
    IconList[i].style.paddingBottom = "35px";
  }
}
