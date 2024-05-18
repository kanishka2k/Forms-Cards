const signUpBtn = document.querySelector(".SignUp-button");
const signInBtn = document.querySelector(".SignIn-button");
const formsWrapper = document.querySelector(".forms-wrapper");

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formsWrapper.classList.add("change");
});

signInBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formsWrapper.classList.remove("change");
});