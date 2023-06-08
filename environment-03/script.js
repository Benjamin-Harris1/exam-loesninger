"use strict";

/*1. Lav en liste med tre `product`-objekter. Hvert objekt har følgende properties: `name` (string), `price` (number) og `inStock` (boolean).
2. Lav en funktion der viser listen af alle `product`-objekter - vis kun produkter hvor `inStock` er `true`.
3. Lav en funktion der ved hjælp af formularen, opretter et nyt `product`-objekt og tilføjer det til listen. Listen på websiden opdateres hver gang, der oprettes et nyt objekt.*/

window.addEventListener("load", start); /*`

// ØVELSE 6 //
/*function start() {
  document.querySelector("#create-form").addEventListener("submit", formClicked);
  showList();
}

const products = [
  {
    name: "Product 1",
    price: 23,
    inStock: true,
  },
  {
    name: "Product 2",
    price: 10.5,
    inStock: false,
  },
  {
    name: "Product 3",
    price: 37,
    inStock: true,
  },
];

function showList() {
  document.querySelector("#list-container").innerHTML = "";
  for (const product of products) {
    if (product.inStock === true) {
      const html = /*html*/

/*  <li> Name: ${product.name} - Price: ${product.price}</li>
          `;
      document.querySelector("#list-container").insertAdjacentHTML("beforeend", html);
    }
  }
}

function createProduct(name, price, inStock) {
  const product = {
    name: name,
    price: Number(price),
    inStock: inStock === "true" ? true : false,
  };

  products.push(product);
  return product;
}

function formClicked(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const price = form.price.value;
  const inStock = form.inStock.value;

  createProduct(name, price, inStock);
  showList();
  console.log(products);
} */

// ØVELSE 7 //

/* 1. Lav en liste med tre `product`-objekter. Hvert objekt har følgende properties: `name` (string), `price` (number) og `inStock` (boolean).
2. Lav en funktion der viser en sorteret liste af alle produkter. Produkter som er i `stock` (hvor `inStock` er `true`) skal vises først.
3. Lav en funktion der ved hjælp af formularen, opretter et nyt `product`-objekt og tilføjer det til listen. Listen på websiden opdateres hver gang, der oprettes et nyt objekt.*/

function start() {
  showList();
  document.querySelector("#create-form").addEventListener("submit", formClicked);
}

const products = [
  {
    name: "Product 1",
    price: 27,
    inStock: true,
  },
  {
    name: "Product 2",
    price: 200,
    inStock: true,
  },
  {
    name: "Product 3",
    price: 10,
    inStock: false,
  },
];

function showList() {
  document.querySelector("#list-container").innerHTML = "";
  products.sort((b, a) => a.inStock - b.inStock);
  for (const product of products) {
    const html =
      /*html*/
      `
            <li> Name: ${product.name} - price: ${product.price} - in stock: ${product.inStock}</li>
        `;
    document.querySelector("#list-container").insertAdjacentHTML("beforeend", html);
  }
}

function createProduct(name, price, inStock) {
  const product = {
    name: name,
    price: Number(price),
    inStock: inStock === "true" ? true : false,
  };

  products.push(product);
  return product;
}

function formClicked(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const price = form.price.value;
  const inStock = form.inStock.value;
  createProduct(name, price, inStock);
  showList();
  console.log(products);
}

// ØVELSE 6

/* 1. Lav en liste med tre `product`-objekter. Hvert objekt har følgende properties: `name` (string), `price` (number) og `inStock` (boolean).
2. Lav en funktion der viser listen af alle `product`-objekter - vis kun produkter hvor `inStock` er `true`.
3. Lav en funktion der ved hjælp af formularen, opretter et nyt `product`-objekt og tilføjer det til listen. Listen på websiden opdateres hver gang, der oprettes et nyt objekt.*/

/* const products = [
  {
    name: "Product-01",
    price: 7,
    inStock: false,
  },
  {
    name: "Product-02",
    price: 17,
    inStock: true,
  },
  {
    name: "Product-03",
    price: 21,
    inStock: false,
  },
];

window.addEventListener("load", start);

function start() {
  console.log("herro");
  document.querySelector("#create-form").addEventListener("submit", formClicked);
  showProducts();
}

function showProducts() {
  document.querySelector("#list-container").innerHTML = "";
  for (const product of products) {
    if (product.inStock === true) {
      const html = `
            <li>${product.name}, ${product.price}, ${product.inStock}</li>
        `;
      document.querySelector("#list-container").insertAdjacentHTML("beforeend", html);
    }
  }
}

function addProduct(name, price, inStock) {
  const product = {
    name: name,
    price: Number(price),
    inStock: inStock,
  };

  products.push(product);
  console.log(products);
  return product;
}

function formClicked(event) {
  event.preventDefault();

  const form = event.target;
  const name = form.name.value;
  const price = form.price.value;
  const inStock = form.inStock.checked;
  addProduct(name, price, inStock);
  showProducts();
}*/
