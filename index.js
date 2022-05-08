const form = document.getElementById("form");
const email = form.querySelector("#email");
const error = form.querySelector(".error-message");
let format = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateEmail(email);
});

function validateEmail(email) {
  error.style.display = "block";
  if (email.value.match(format)) {
    error.innerHTML = "Succesfully submitted!";
    error.style.color = "green";
    email.style.outlineColor = "var(--clr-primary-200)";
    return true;
  } else {
    error.innerHTML = "Please provide a valid email address";
    error.style.color = "var(--clr-danger)";
    email.style.outlineColor = "var(--clr-danger)";
    return false;
  }
}
