"use strict";

/*
1. Lav en funktion der modtager `name`, `type` og `age`, opretter et `animal` objekt med de tre properties, og tilføjer det til en global liste, `animals`.
2. Lav en funktion der reagerer når brugeren trykker på "Create new" knappen, og opretter et nyt `animal` objekt med de data der er tastet ind på websiden. Test at objektet er tilføjet den globale liste, `animals`.
3. Lav en funktion der viser listen af alle animal-objekter - sorteret alfabetisk. Listen opdateres hver gang brugeren opretter et nyt.
*/

window.addEventListener("load", start); /*`

/*const animals = [];

function start() {
  document.querySelector("#create-form").addEventListener("submit", formSubmit);
}

function createAnimal(name, type, age) {
  const animal = {
    name: name,
    type: type,
    age: age,
  };
  animals.push(animal);
  return animal;
}

function formSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const type = form.type.value;
  const age = form.age.value;

  createAnimal(name, type, age);
  console.log(animals);
  showAnimals();
}

function showAnimals() {
  document.querySelector("#list-container tbody").innerHTML = "";
  animals.sort(sort);
  for (const animal of animals) {
    const html = /*html*/ /*
    <tr>
 <td>${animal.name}  </td>
 <td>${animal.type}</td>
 <td>${animal.age}</td>
 </tr>`;
    document.querySelector("#list-container tbody").insertAdjacentHTML("beforeend", html);
  }
}

function sort(a, b) {
  return a.name.localeCompare(b.name);
} 
*/

/* 1. Lav en liste med tre `animal` objekter. Hvert objekt har følgende properties: `name`, `type` og `age`.
2. Lav en funktion der viser listen af alle animal-objekter - sorteret efter `age`.
3. Lav en funktion der ved hjælp af formularen, opretter et nyt `animal` objekt og tilføjer det til den liste. Listen på websiden opdateres hver gang, der opretteres et nyt objekt.*/

function start() {
  console.log("Hi");
  document.querySelector("#create-form").addEventListener("submit", formClicked);
  showAnimals();
}

const animals = [
  {
    name: "Hanne",
    type: "Kat",
    age: 20,
  },
  {
    name: "Kurt",
    type: "Hund",
    age: 12,
  },
  {
    name: "Søren",
    type: "Pingvin",
    age: 50,
  },
];

function showAnimals() {
  document.querySelector("#list-container tbody").innerHTML = "";
  animals.sort((a, b) => a.age - b.age);

  for (const animal of animals) {
    const html = /*html*/ `
    <tr>
    <td>${animal.name}</td>
    <td>${animal.type}</td>
    <td>${animal.age}</td>
    </tr>
    `;

    document.querySelector("#list-container tbody").insertAdjacentHTML("beforeend", html);
  }
}

function createAnimal(name, type, age) {
  const animal = {
    name: name,
    type: type,
    age: age,
  };
  animals.push(animal);
  return animal;
}

function formClicked(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const type = form.type.value;
  const age = form.age.value;
  createAnimal(name, type, age);
  showAnimals();
}
