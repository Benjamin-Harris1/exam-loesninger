"use strict"; /*

/* 1. Importer `teachers`-listen i `script.js`.
2. Lav en funktion i `script.js`, der viser listen af alle `teacher`-objekter på websiden.
3. Lav en funktion der kan sortere listen efter `name` og en anden funktion, der kan sortere listen efter `email`.
*/ /*

// ØVELSE 9

/* import { teachers } from "./teachers.js";

window.addEventListener("load", start);

function start() {
  console.log("Herrrooo");
  const sortedByEmail = sortByMail();
  showTeachers(sortedByEmail);
}

function showTeachers() {
  document.querySelector("#teachers-list").innerHTML = "";
  for (const teacher of teachers) {
    const html =
      /*html*/
/* `
        <li>${teacher.name} - ${teacher.email}</li>
        `;

    document.querySelector("#teachers-list").insertAdjacentHTML("beforeend", html);
  }
}

function sortByName() {
  const sortedTeachers = teachers.sort((a, b) => a.name.localeCompare(b.name));
  return sortedTeachers;
}

function sortByMail() {
  const sortedTeachers = teachers.sort((a, b) => a.email.localeCompare(b.email));
  return sortedTeachers;
}*/

/* 1. Importer `teachers`-listen i `script.js`.
2. Lav en funktion, der viser listen af alle `teacher`-objekter på websiden.
3. Lav en funktion der tilføjer et nyt `teacher`-objekt til listen. Sørg for at nye `teacher`-objekter vises på websiden. */

// ØVELSE 10

import { teachers } from "./teachers.js";

window.addEventListener("load", start);

function start() {
  console.log("Eyo");

  showTeachers(teachers);
}

function showTeachers() {
  document.querySelector("#teachers-list").innerHTML = "";
  for (const teacher of teachers) {
    const html =
      /*html*/
      `
            <li>${teacher.name} - ${teacher.email}</li>
        `;
    document.querySelector("#teachers-list").insertAdjacentHTML("beforeend", html);
  }
}

function addTeacher(name, email) {
  const teacher = {
    name: name,
    email: email,
  };

  teachers.push(teacher);
}

addTeacher("Benjamin", "mail@mail.com");

console.log(teachers);
