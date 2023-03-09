// Button back to top 
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";    
    mybutton.style.transition = "all 0.5s ease-in-out";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// Button back to top 










function tambahFunction() {
  let value;
  value = Number(document.getElementById("nilai").value);
  value++;
  document.getElementById("nilai").value = value

  console.log(value)

}
function kurangFunction() {
  let value;
  value = Number(document.getElementById("nilai").value);
  if (value <= 1) {

  } else {
    value--
    document.getElementById("nilai").value = value
  }

  console.log(value)
}

// ShowPassword
function showPassword() {
  let value = document.getElementById("inputPassword");
  if(value.type == "password"){
    value.type = "text";
  }else{
    value.type = "password";
  }
}