"use strict";

window.addEventListener("load", start);

const basket = [];

async function start() {
  console.log("Hello");
  const products = await getProducts();
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
  console.log(basket);
}

function addProduct(name, weight, price) {
  const product = {
    name: name,
    weight: weight,
    price: price,
  };

  basket.push(product);
  showBasket();
  return product;
}

function showBasket(product) {
  document.querySelector("#basket").innerHTML = "";
  for (const product of basket) {
    const html = /*html*/ `
        <tr>
              <td>
                <button class="remove">-</button>
                  ANTAL
                <button class="add">+</button>
              </td>
              <td>${product.name}</td>
              <td>${product.price},-</td>
              <td>PRIS I ALT,-</td>
            </tr> 
        `;
    document.querySelector("#basket").insertAdjacentHTML("beforeend", html);
  }
}
