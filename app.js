const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const addToCartBtn = document.querySelector(".addToCart");
const cartProductsDom = document.querySelector(".cart-products div");
const cartProductsMegaMenu = document.querySelector(".cart-products");
const badgeDom = document.querySelector(".badge");
const shoppingIcon = document.querySelector(".shopping");

addToCartBtn.setAttribute("onclick", `addedToCart(1)`);

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;
    addToCartBtn.setAttribute("onclick", `addedToCart(${choosenProduct.id})`);

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

// check if there is user's data in localstorage

let userDom = document.querySelector(".user-info");
let registerNav = document.querySelector(".navlinks");
let userData = document.querySelector("#user");
let logoutBtn = document.querySelector("#logout");

let username = localStorage.getItem("username");

logoutBtn.addEventListener("click", function () {
  localStorage.clear();
  setTimeout(() => {
    window.location = "register.html";
  }, 1500);
});

if (username) {
  registerNav.remove();
  userDom.style.display = "flex";

  userData.innerHTML = username;
}

// Add to cart

function checkLogedInUser() {
  if (localStorage.getItem("username")) {
    console.log("added to cart");
  } else {
    window.location = "login.html";
  }
}

function addedToCart(id) {
  let cartProductItems = document.querySelectorAll(".cart-products div p");
  let choosenItem = products.find((item) => item.id === id);
  cartProductsDom.innerHTML += `<p>${choosenItem.title}</p>`;

  badgeDom.innerHTML = 1 + cartProductItems.length;
}

// Open megamenu
function openCartMenu() {
  if (cartProductsDom.innerHTML != "") {
    if (cartProductsMegaMenu.style.display == "block") {
      cartProductsMegaMenu.style.display = "none";
    } else {
      cartProductsMegaMenu.style.display = "block";
    }
  }
}

shoppingIcon.addEventListener("click", openCartMenu);
