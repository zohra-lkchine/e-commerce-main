let products = [
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
 
    let layoutdiv = document.querySelector(".layout");
    let btnadd = document.querySelector(".additem");
    let cartdiv = document.querySelector(".cart .addeditems");
    let addeditems = document.querySelectorAll(".cart .addeditems .cart-items");
    let totalpDiv = document.querySelector(".totalprice");
    let deleteBtn = document.querySelector(".delete");
    let numbrAdd = document.querySelector(".nbr");
    
    let pr = document.querySelector(".addeditems");
    let totalPrice = 0;
    
    
    
    
    
    const Addproducts = () => {
        let productsList = products.map(item => {
          return `
          <div class="item">
          <img src="${item.image}" alt="${item.name}" class="image">
          <div class="like">
          <h3>${item.name}</h3>
          <button class="likebtn" id="#like-${item.id}" onclick="likeItem(${item.id})">
          <svg xmlns="http://www.w3.org/2000/svg" class="likeicon" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
    </svg>
    
    
          </buton>
          </div>
          <span>${item.price} $</span>
          <button type="button" onclick="getItem(${item.id})" id="#cart-${item.id}" class="additem">Add to Cart</button>
          <div class="addtocart">
          <span class="plus" onclick="increaseItems(${item.id})"  id="#inc-${item.id}">+</span>
          <span class="nbr" id="#product-${item.id}">${item.numbrInCart}</span>
          <span class="moins" onclick="decreaseItems(${item.id})">-</span>
          </div>
          </div>
          `
        })
        
        layoutdiv.innerHTML = productsList.join('');
    }
    
    // function call
    Addproducts();
    
    
    let newNmb = 0;
    
    
    const increaseItems = (id) => {
    
        let currentItem = products.find(item => item.id === id);
    
      let add = currentItem.numbrInCart++;
    
    
       let numbrElement = document.getElementById(`#product-${currentItem.id}`);
    
       numbrElement.innerHTML = `<span>${add + 1}</span>`;
       totalPrice += currentItem.price;
       
       totalpDiv.innerHTML = `${totalPrice} $`;
    
    }
    
    
     
    
    // function pour ajouter produit au panier
    const getItem = (id) => {
        
    
    let currentProduct = products.find(item => item.id === id);
    
    let numbrElement = document.getElementById(`#product-${currentProduct.id}`);
        
    
         cartdiv.innerHTML += `
        <div class="cart-items" id="#rm-${currentProduct.id}">
        <img src="${currentProduct.image}" width="100" height="100" />
        <h4>Name</span>
        <p>${currentProduct.name}
        <h4>Price</span>
        <p>${currentProduct.price} $
        </div> `;
    
        totalPrice += currentProduct.price;
        totalpDiv.innerHTML = `${totalPrice} $`;
         currentProduct.numbrInCart = newNmb + 1;
        numbrElement.innerHTML = `<span>${currentProduct.numbrInCart}</span>`
    
        let disbtn = document.getElementById(`#cart-${currentProduct.id}`);
    
        disbtn.setAttribute("disabled", "");
        
    }
    
    const decreaseItems = (id) => {
    
        let currentItem = products.find(item => item.id === id);
        let numbrElement = document.getElementById(`#product-${currentItem.id}`);
        let cartItemToRemove = document.getElementById(`#rm-${id}`);
        let disbtn = document.getElementById(`#cart-${currentItem.id}`);
      if (currentItem.numbrInCart != 0) {
        let add = currentItem.numbrInCart--;
        numbrElement.innerHTML = `<span>${add - 1}</span>`;
        totalPrice -= currentItem.price;
        totalpDiv.innerHTML = `${totalPrice} $`;
    
        if (add === 1) {
            cartItemToRemove.parentNode.removeChild(cartItemToRemove);
    
        disbtn.removeAttribute("disabled")
    
        }
      } else {
        return
      }
    }
    
    
    // Like function 
    
    const likeItem = (id) => {
        let currentLiked = products.find(item => item.id === id);
        
        let likeIcon = document.getElementById(`#like-${currentLiked.id}`);
    
        likeIcon.style.color == "" ? likeIcon.style.color = "red" : likeIcon.style.color = "" 
       // if (likeIcon.style.color == "") {
        //    likeIcon.style.color = "red"
       // } else {
        //    likeIcon.style.color = "" 
       // }
    
    }
    
    
    // function to increase items added in cart
    
    // arrow function : const functionname = () => {}.
    
    
    
    // function pour supprimer touts les produits du panier
    
    const removeAll = () => {
        cartdiv.innerHTML = "";
        totalpDiv.innerHTML = "";
    
        setTimeout(() => {
            location.reload();
        }, 500);
    }
    
    
    
