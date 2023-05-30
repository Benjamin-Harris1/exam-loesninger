
"use strict";

window.addEventListener("load", start);

// PRØVEEKSAMEN FRA TIMEN

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
        `
        <tr>
          <td>${student.name}</td>
          <td>${student.email}</td>
          <td>${student.age}</td>
         </tr>
        `;
      document.querySelector("#students-table-body").insertAdjacentHTML("beforeend", html);
    }
  }
}
