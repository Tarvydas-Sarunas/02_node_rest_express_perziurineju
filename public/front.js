"use strict";
console.log("front.js file was loaded");

const url = "http://localhost:3000/api/users";

// gauti userius su fetch
function getAll() {
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => console.log("data ===", data))
    .catch((error) => {
      console.warn("ivyko klaida:", error);
    });
}
getAll();

// sukurti funkcija kuri priims pirma useri is back end ir atvaizduos ji html h3 tage http://localhost:3000/users/1

const url1 = "http://localhost:3000/api/users/1";

function getOneUser() {
  fetch(url1)
    .then((resp) => resp.json())
    .then((data) => toHtml(data))
    .catch((error) => {
      console.warn("ivyko klaida:", error);
    });
}

function toHtml(userOne) {
  const h3El = document.createElement("h3");
  h3El.textContent = `${userOne.name} is ${userOne.age} years old`;
  document.body.append(h3El);
}
getOneUser();
