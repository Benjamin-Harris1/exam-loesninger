"use strict";

/* window.addEventListener("load", start);

// PRØVEEKSAMEN FRA TIMEN ØVELSE 21

function start() {
  console.log("Hello");
  document.querySelector("#create-student-form").addEventListener("submit", formClicked);
}

const students = [];

function createStudent(name, email, age) {
  const student = {
    name: name,
    email: email,
    age: Number(age),
  };

  students.push(student);
  return student;
}

function formClicked(event) {
  event.preventDefault();

  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const age = form.age.value;

  createStudent(name, email, age);
  showStudents();
  console.log(students);
}

function showStudents() {
  document.querySelector("#students-table-body").innerHTML = "";
  students.sort((a, b) => a.name.localeCompare(b.name));
  for (const student of students) {
    if (student.age >= 18) {
      const html =
        /*html*/
/* `
        <tr>
          <td>${student.name}</td>
          <td>${student.email}</td>
          <td>${student.age}</td>
         </tr>
        `;
      document.querySelector("#students-table-body").insertAdjacentHTML("beforeend", html);
    }
  }
}*/

/*1. Lav en funktion der opretter et `student` objekt med `name`, `email` og `age`, fra formularen på websiden og tilføjer det til en liste.
2. Udskriv listen til websiden hver gang der bliver tilføjet en ny student.
3. Sortér listen efter `age` så de yngste vises først.*/

// ØVELSE 20

window.addEventListener("load", start);

const students = [];

function start() {
  console.log("Hello");
  document.querySelector("#create-student-form").addEventListener("submit", formClicked);
}

function createStudent(name, email, age) {
  const student = {
    name: name,
    email: email,
    age: Number(age),
  };

  students.push(student);
}

function formClicked(event) {
  event.preventDefault();

  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const age = form.age.value;

  createStudent(name, email, age);
  showStudents();
  console.log(students);
}

function showStudents() {
  students.sort((a, b) => a.age - b.age);
  document.querySelector("#students-table-body").innerHTML = "";
  for (const student of students) {
    const html = `
                <tr>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.age}</td>
          </tr>
    `;
    document.querySelector("#students-table-body").insertAdjacentHTML("beforeend", html);
  }
}
