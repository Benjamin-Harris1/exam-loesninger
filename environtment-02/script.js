"use strict";

/* 1. Lav en funktion der modtager `name`, `type` og `age`, opretter et `animal` objekt med de tre properties, og returnerer det.
2. Lav en funktion der reagerer når brugeren trykker på "Create new" knappen, og opretter et nyt `animal` objekt med de data der er tastet ind på websiden.
3. Lav en funktion der viser listen af alle animal-objekter - sorteret alfabetisk. Listen opdateres hver gang brugeren opretter et nyt. */

window.addEventListener("load", start);

function start() {
  document.querySelector("#btn-submit").addEventListener("click", createAnimalClicked);
  console.log("hi");
}

function createAnimal(name, type, age) {
  const animal = {
    name: name,
    type: type,
    age: age,
  };

  return animal;
}

function createAnimalClicked(event) {
  event.preventDefault();

  const form = event.target;
  const name = form.querySelector("#animal-name").value;
  const type = form.querySelector("#animal-type").value;
  const age = form.querySelector("#animal-age").value;

  const newAnimal = createAnimal(name, type, age);
  showAnimal(newAnimal);

  form.reset();
}

function showAnimal(animal) {
  const html = /*html*/ `<tr>
  <td>${animal.name}</td>
    </tr>`;

  document.querySelector("#list-container").insertAdjacentHTML("beforeend", html);
  console.log("hi");
}
