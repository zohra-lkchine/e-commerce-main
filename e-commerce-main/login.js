let username = document.querySelector("#username");
let password = document.querySelector("#password");
let signInBtn = document.querySelector("#signin");

let getUsername = localStorage.getItem("username");
let getPassword = localStorage.getItem("password");

signInBtn.addEventListener("click", login);

function login(e) {
  e.preventDefault();
  //   if no data was inserted
  if (username.value === "" || password.value === "") {
    alert("Please Fill data");
  } else {
    // check if username and password match with localstorage data
    if (
      getUsername &&
      getUsername.trim() === username.value &&
      getPassword &&
      getPassword.trim() === password.value
    ) {
      setTimeout(() => {
        window.location = "index.html";
      }, 1500);
    } else {
      console.log("username or password is wrong!");
    }
  }
}
