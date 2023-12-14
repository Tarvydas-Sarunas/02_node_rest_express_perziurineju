"use strict";
console.log("front.js file was loaded");

const url = "http://localhost:3000/users";

// gauti userius su fetch
fetch(url)
  .then((resp) => resp.json)
  .then((data) => console.log("data ===", data))
  .catch((error) => {
    console.warn("ivyko klaida:", error);
  });
