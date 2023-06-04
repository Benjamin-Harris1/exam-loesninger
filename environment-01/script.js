"use strict";

/*1. Lav en funktion der indlæser JSON-filen `users.json` og gemmer listen i en variabel.
2. Lav en funktion der viser listen på websiden.
3. Lav en funktion der tæller hvor mange brugere der har rollerne `admin`, `user` og `guest` - og viser antallene på websiden.*/

window.addEventListener("load", start); /*`

/* async function start() {
  const users = await getData();
  console.log(users);
  showUsers(users);
  UsersByRole(users);
}

async function getData() {
  const response = await fetch("users.json");
  const data = response.json();
  return data;
}

function showUsers(users) {
  for (const user of users) {
    const html =
      /*html*/
/*`<ul>
            <li>ID: ${user.id} - name: ${user.name} - role: ${user.role}</li>
        </ul>`;
    document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
  }
}

function UsersByRole(users) {
  let roleCount = {
    admin: 0,
    user: 0,
    guest: 0,
  };

  for (const user of users) {
    if ((user.role === "user", "admin", "guest")) {
      roleCount[user.role]++;
    }
  }

  document.querySelector("#admin-count").textContent = roleCount.admin;
  document.querySelector("#user-count").textContent = roleCount.user;
  document.querySelector("#guest-count").textContent = roleCount.guest;
} */

/* 1. Lav en funktion der indlæser JSON-filen `users.json` og gemmer listen i en variabel.
2. Lav en funktion der viser listen på websiden - hver user skal vises med navn og hvorvidt de er aktive eller ej.
3. Filtrér listen så den kun viser admin-brugere. */

// const users = [];

async function start() {
  const user = await getData();
  // users.push(user);
  console.log(user);
  showUsers(user);
  roleCount(user);
}

async function getData() {
  const response = await fetch("users.json");
  const data = await response.json();
  return data;
}

function showUsers(users) {
  for (const user of users) {
    // if (user.role === "admin")
    {
      const html =
        /*html*/
        `
        <ul>
        <li>ID: ${user.id} - role: ${user.role}</li>
        </ul>`;

      document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
    }
  }
}

function roleCount(users) {
  let adminCount = 0;
  let userCount = 0;
  let guestCount = 0;

  for (const user of users) {
    if (user.role === "admin") {
      adminCount++;
    } else if (user.role === "guest") {
      guestCount++;
    } else if (user.role === "user") {
      userCount++;
    }
    document.querySelector("#admin-count").textContent = adminCount;
    document.querySelector("#guest-count").textContent = guestCount;
    document.querySelector("#user-count").textContent = userCount;
  }
}

/*`

/* 1. Lav en funktion der indlæser JSON-filen `users.json` og gemmer listen i en global variabel.
2. Lav en funktion der viser listen på websiden - vis kun aktive brugere.
3. Lav en funktion der modtager `name`, `active` og `role`, opretter et `user` objekt med de tre properties, og tilføjer objektet til den globale liste. Listen på websiden opdateres hver gang, der oprettes et nyt objekt. */

/*async function start() {
  const users = await getUsers();
  console.log(users);

  const active = getActive(users);
  showUsers(active);
}

async function getUsers() {
  const response = await fetch("users.json");
  const data = await response.json();
  return data;
}

function showUsers(users) {
  for (const user of users) {
    const html = /*html*/
/*<ul>
    <li>Name: ${user.name} - role: ${user.role} - active: ${user.active}</li>
    </ul>
    `;
    document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
  }
}

function checkActive(user) {
  return user.active === true;
}

function getActive(users) {
  const results = users.filter(checkActive);
  return results;
}*/

/*1. Lav en funktion der indlæser JSON-filen `users.json` og gemmer listen i en global variabel.
2. Lav en funktion der viser listen på websiden - vis kun aktive brugere.
3. Lav en funktion der modtager `name`, `active` og `role`, opretter et `user` objekt med de tre properties, og tilføjer objektet til den globale liste. Listen på websiden opdateres hver gang, der oprettes et nyt objekt.*/

/*const users = [];
console.log(users);

async function start() {
  const data = await getUsers();
  users.push(...data);
  showUsers();
}

async function getUsers() {
  const response = await fetch("users.json");
  const data = await response.json();
  return data;
}

function showUsers() {
  document.querySelector("#userlist").innerHTML = "";

  for (const user of users) {
    if (user.active === true) {
      const html = /*html*/
/* <ul>
  <li>Name: ${user.name} - role: ${user.role} - active: ${user.active}</li>
  </ul>`;

      document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
    }
  }
}

function createUser(name, active, role) {
  const user = {
    name: name,
    active: active,
    role: role,
  };

  users.push(user);
  return user;
}

createUser("børge", true, "admin");*/
