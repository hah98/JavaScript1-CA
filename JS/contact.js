const sendForm = document.document.querySelector("sendForm");

sendForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

let names = document.getElementById("name");
let email = document.getElementById("email");
let adress = document.getElementById("adress");
let submitt = document.getElementById("submitt");

if (
  names.value == "" ||
  email.value == "" ||
  adress.value == "" ||
  submitt.value == ""
) {
  alert("please make sure to fill out the whole form!");
} else {
  alert("Your information has been successfully submitted!");
  console.log(
    `This form has a username of ${names.value} , emailadress of ${email.value} , adress of ${adress.value} 
     and send of ${submitt.value}`
  );
}
