"use strict";

// ØVELSE 23

/* 1. Opret en liste af sang-objekter, hvor hver sang indeholder `artist`, `title` og `duration` (i form af minutter:sekunder, fx 3:21)
2. Lav en funktion til at udskrive listen af sange på websiden - tilføj en `upvote`-knap til hver sang.
3. Få `upvote`-knappen til flytte den pågældende sang én tak op i listen - udskriv derefter listen igen. */

/*const songs = [
  {
    artist: "Yeahw",
    title: "Something",
    duration: "5:23",
  },
  {
    artist: "asdads2",
    title: "Something2",
    duration: "1:22",
  },
  {
    artist: "asdasd3",
    title: "Something3",
    duration: "3:21",
  },
];

window.addEventListener("load", start);

function start() {
  console.log(songs);
  showSongs();
}

function showSongs() {
  document.querySelector("#songlist").innerHTML = "";
  for (const song of songs) {
    const html = `
          <li>${song.artist}, ${song.title}, ${song.duration} <button>Upvote</button></li>
            
        `;
    document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
    document.querySelector("#songlist li:last-child button").addEventListener("click", upvoteClicked);
    const songId = songs.indexOf(song);
    function upvoteClicked() {
      if (songId !== 0) {
        songs.splice(songId, 1);
        songs.splice(songId - 1, 0, song);
        showSongs();
      }
    }
  }
}*/

// ØVELSE 22

/* 1. Lav en funktion der indlæser JSON-filen `playlist.json` og gemmer listen i en variabel.
2. Lav en funktion til at udskrive listen af sange på websiden- tilføj en `remove`-knap til hver sang.
3. Få remove-knappen til at fjerne den pågældende sang fra listen, og udskriv listen igen.*/

window.addEventListener("load", start);

async function start() {
  const playlist = await getData();
  console.log(playlist);
  showPlaylist(playlist);
}

async function getData() {
  const response = await fetch("playlist.json");
  const data = await response.json();
  return data;
}

function showPlaylist(playlist) {
  document.querySelector("#songlist").innerHTML = "";
  for (const song of playlist) {
    const html = `
            <li>${song.artist}, ${song.title}, ${song.duration} <button>Remove</button></li>
        `;
    document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
    document.querySelector("#songlist li:last-child button").addEventListener("click", () => removeSong(playlist, song));
  }
}

function removeSong(playlist, song) {
  const songId = playlist.indexOf(song);
  playlist.splice(songId, 1);
  showPlaylist(playlist);
}
