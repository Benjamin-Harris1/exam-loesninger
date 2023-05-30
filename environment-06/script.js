"use strict";

window.addEventListener("load", start);

const basket = [];
const products = [];

async function start() {
  console.log("Hello");
  const product = await getProducts();
  products.push(...product);
  showProducts(products);
}

async function getProducts() {
  const response = await fetch("products.json");
  const data = await response.json();
  return data;
}

function showProducts(products) {
  document.querySelector("#products").innerHTML = "";
  for (const product of products) {
    const html =
      /*html*/
      `
      <article>
               <h3>${product.name}</h3>
               <p>vægt: ${product.weight} g</p>
               <p>pris: ${product.price},-</p>
               <button class="add-btn">Læg i kurv</button>
            </article>
        `;
    document.querySelector("#products").insertAdjacentHTML("beforeend", html);
    document
      .querySelector("#products article:last-child .add-btn")
      .addEventListener("click", () => addProduct(product.name, product.weight, product.price));
  }
}

function addProduct(name, weight, price) {
  let incrementProduct = basket.find((product) => product.name === name);

  if (incrementProduct) {
    incrementProduct.quantity++;
  } else {
    const product = {
      name: name,
      weight: weight,
      price: price,
      quantity: 1,
    };

    basket.push(product);
  }
  showBasket();
}

function showBasket() {
  document.querySelector("#basket").innerHTML = "";
  for (const product of basket) {
    const html = /*html*/ `
        <tr>
              <td>
              <button class="remove" onclick="removeFromBasket('${product.name}')">-</button>
                  ${product.quantity}
                <button class="add" onclick="addProduct('${product.name}')">+</button>
              </td>
              <td>${product.name}</td>
              <td>${product.price},-</td>
              <td>PRIS I ALT,-</td>
            </tr> 
        `;
    console.log(basket);
    document.querySelector("#basket").insertAdjacentHTML("beforeend", html);
  }
}

function removeFromBasket() {
  let productIndex = basket.findIndex((product) => product.name);

  if (productIndex !== -1) {
    if (basket[productIndex].quantity > 1) {
      basket[productIndex].quantity--;
    } else basket.splice(productIndex, 1);
  }
  showBasket();
}

function showBasketTotals() {
  
}