// Register User ...........................................
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let registerBtn = document.querySelector("#register");

registerBtn.addEventListener("click", register);

function register(e) {
  e.preventDefault();
  //   if no data was inserted
  if (username.value === "" || email.value === "" || password.value === "") {
    alert("Please Fill data");
  } else {
    // if all input are filled successfully
    // save the data in the local storage
    localStorage.setItem("username", username.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);

    // after 1.5s navigate to index.html
    setTimeout(() => {
      window.location = "login.html";
    }, 1500);
  }
}
