"use strict";

window.addEventListener("load", start);

const basket = [];
let products = [];

async function start() {
  console.log("Hello");
  products = await getProducts();
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
  let incrementProduct = basket.find(product => product.name === name);

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
  showBasketTotals();
}

function showBasket() {
  document.querySelector("#basket tbody").innerHTML = "";
  for (const product of basket) {
    const html = /*html*/ `
        <tr>
              <td>
              <button class="remove">-</button>
                  ${product.quantity}
                <button class="add">+</button>
              </td>
              <td>${product.name}</td>
              <td>${product.price},-</td>
              <td>PRIS I ALT,-</td>
            </tr> 
        `;
    document.querySelector("#basket tbody").insertAdjacentHTML("beforeend", html);
    document.querySelector("#basket tbody tr:last-child .remove").addEventListener("click", () => removeFromBasket(product.name));
    document.querySelector("#basket tbody tr:last-child .add").addEventListener("click", () => addProduct(product.name));
  }
}

function removeFromBasket() {
  let productInBasket = basket.findIndex(product => product.name);

  if (productInBasket) {
    productInBasket.quantity--;
    if (productInBasket.quantity === 0) {
      const index = basket.splice(index, 1);
    }
    showBasket();
  }
}

function showBasketTotals() {
  const totalProducts = basket.length;
  document.querySelector("#total-products").textContent = totalProducts;

  let totalInBasket = 0;
  for (const productInBasket of basket) {
    totalInBasket += productInBasket.quantity;
  }

  document.querySelector("#total-in-basket").textContent = totalInBasket;

  let totalPrice = 0;
  let totalWeight = 0;

  for (const productInBasket of basket) {
    totalPrice += productInBasket.price * productInBasket.quantity;
    totalWeight += productInBasket.weight * productInBasket.quantity;
  }

  document.querySelector("#total-price").textContent = totalPrice;
  document.querySelector("#total-weight").textContent = totalWeight;
}
