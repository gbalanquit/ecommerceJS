// Example of generating html

// 1.  fake data that eventually you will get from API
const fakeItemsFromDatabase = [
  {
    imgUrl: "./images/product11.png",
    name: "Watermelon",
    price: "$6.25"
  },
  {
    imgUrl: "./images/product1.png",
    name: "Pineapple",
    price: "$5.25"
  },
  {
    imgUrl: "./images/product2.png",
    name: "Manila Mango",
    price: "$7.25"
  },
  {
    imgUrl: "./images/product3.png",
    name: "Lemon",
    price: "$4.25"
  },
  {
    imgUrl: "./images/product5.png",
    name: "Grapes",
    price: "$5.50"
  },
  {
    imgUrl: "./images/product6.png",
    name: "Mango",
    price: "$6.50"
  },
  {
    imgUrl: "./images/product7.png",
    name: "Strawberry",
    price: "$5.50"
  },
  {
    imgUrl: "./images/product4.png",
    name: "Banana",
    price: "$5.25"
  },
  {
    imgUrl: "./images/product9.png",
    name: "Apple",
    price: "$4.75"
  }
];

// 2.  Our html template
const htmlTemplate = item => `
  <div class="product">
  <div class="product__header">
      <img src="${item.imgUrl}" alt="${item.name}">
      <span>
          <svg>
              <use xlink:href="./images/sprite.svg#icon-camera"></use>
          </svg>
      </span>
  </div>
  <div class="product__footer">
      <h2>${item.name}</h2>
      <div class="rating">
          <span>
              <svg>
                  <use xlink:href="./images/sprite.svg#icon-star-full"></use>
              </svg>
          </span>
          <span>
              <svg>
                  <use xlink:href="./images/sprite.svg#icon-star-full"></use>
              </svg>
          </span>
          <span>
              <svg>
                  <use xlink:href="./images/sprite.svg#icon-star-full"></use>
              </svg>
          </span>
          <span>
              <svg>
                  <use xlink:href="./images/sprite.svg#icon-star-full"></use>
              </svg>
          </span>
          <span>
              <svg>
                  <use xlink:href="./images/sprite.svg#icon-star-empty"></use>
              </svg>
          </span>
      </div>
      <h4 class="price">$6.25</h4>
  </div>
</div>
`;
// 3.  Our function that adds this to the html
function showAllProducts(items) {
  const allProductsContainer = document.getElementById("all-products");

  console.log("test");

  let html = items.map(item => htmlTemplate(item)).join("");
  allProductsContainer.innerHTML = html;
}

// 4.  Calling the function
showAllProducts(fakeItemsFromDatabase);
