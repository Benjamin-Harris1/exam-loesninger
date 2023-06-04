"use strict";

/* 1. Importer `courses`-listen i `script.js`.
2. Lav en funktion, der viser listen af alle `course`-objekter på websiden. Vis som minimum `name`, `ectsPoints` og `teacher`.
3. Lav en funktion der tilføjer et nyt `course`-objekt til listen. Sørg for at nye `course`-objekter vises på websiden. */

// ØVELSE 11

/* import { courses } from "./courses.js";

window.addEventListener("load", start);

function start() {
  console.log("Hi");
  showCourses(courses);
}

function showCourses() {
  document.querySelector("#courses-list").innerHTML = "";
  for (const course of courses) {
    const html =
      /*html*/
/*   `
            <li> Name: ${course.name} - start date: ${course.startDate} - end date: ${course.endDate} -  ECTS: ${course.ectsPoints} - max students: ${course.maxStudents} - teacher: ${course.teacher} </li>
        `;
    document.querySelector("#courses-list").insertAdjacentHTML("beforeend", html);
  }
}

function addCourse(name, startDate, endDate, ectsPoints, maxStudents, teacher) {
  const course = {
    name: name,
    startDate: startDate,
    endDate: endDate,
    ectsPoints: Number(ectsPoints),
    maxStudents: Number(maxStudents),
    teacher: teacher,
  };

  courses.push(course);
}

addCourse("Yehaw", "21-01-99", "22-02-01", "15", "12", "Jørgen");
console.log(courses);*/

/* 1. Importer `courses`-listen i `script.js`.
2. Lav en funktion, der viser listen af alle `course`-objekter på websiden. Vis som minimum `name` og `ectsPoints`.
3. Lav en funktion, der sorterer listen af `courses` efter stigende antal ECTS. Vis den sorterde liste på websiden.*/

// ØVELSE 12

/* import { courses } from "./courses.js";

window.addEventListener("load", start);

function start() {
  console.log("heyo");

  showCourses();
}

function showCourses() {
  document.querySelector("#courses-list").innerHTML = "";
  for (const course of courses) {
    const html =
      /*html*/
/*  `
            <li>${course.name} - ${course.ectsPoints} ECTS</li>
        `;
    document.querySelector("#courses-list").insertAdjacentHTML("beforeend", html);
  }
}

function sortByECTS() {
  return courses.sort((a, b) => a.ectsPoints - b.ectsPoints);
}

sortByECTS();*/

/*1. Importér `courses`-listen i `script.js`.
2. Lav en funktion, der viser listen af alle `course`-objekter på websiden. Vis som minimum `name` og `ectsPoints`.
3. Lav en funktion, der filtrer listen af `courses` på baggrund af valgte `option` i `select` (se `environment-05`). Filtreringen ændrer sig hver gang en ny `option` vælges.*/

// ØVELSE 13

/* import { courses } from "./courses.js";

window.addEventListener("load", start);

let option = "alle";

function start() {
  document.querySelector("#select-filter-ects").addEventListener("change", selectedECTS);
  showCourses();
}

function showCourses() {
  const filteredCourses = filterByECTSOption(option);
  document.querySelector("#courses-list").innerHTML = "";
  for (const course of filteredCourses) {
    const html = `
            <li>${course.name} - ${course.ectsPoints} ECTS</li>
        `;
    document.querySelector("#courses-list").insertAdjacentHTML("beforeend", html);
  }
}

function selectedECTS(event) {
  option = event.target.value;
  showCourses();
  console.log(option);
}

function filterByECTSOption(option) {
  if (option === "alle") return courses;
  return courses.filter((course) => {
    return course.ectsPoints === Number(option);
    // return course.ectsPoints.toString() === option;
  });
}*/

/* 1. Importér `courses`-listen i `script.js`.
2. Lav en funktion, der viser listen af alle `course`-objekter på websiden. Vis som minimum `name`, `startDate` `ectsPoints`.
3. Lav en funktion, der sorterer listen af `courses` stigende efter `startDate`. Vis sorteringen på websiden.*/

// ØVELSE 14

import { courses } from "./courses.js";

window.addEventListener("load", start);

function start() {
  console.log("hello");
  sortByDate();
  showCourses();
}

function showCourses() {
  document.querySelector("#courses-list").innerHTML = "";
  for (const course of courses) {
    const html = `
            <li>${course.name} - ${course.ectsPoints} ECTS - start date: ${course.startDate}</li>
        `;
    document.querySelector("#courses-list").insertAdjacentHTML("beforeend", html);
  }
}

function sortByDate() {
  return courses.sort((b, a) => new Date(a.startDate) - new Date(b.startDate));
}
