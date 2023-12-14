const express = require("express");
const app = express(); // sukuriame musu aplikacija. GALIME SAKYTI KAD CIA SUKURIAME SERVERIO APLIKACIJA
const PORT = 3000;

const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 35 },
];
// route GET - /about.html
app.get("/about.html", (req, res) => {
  res.send("Hello World!");
});
// route GET - / slesiukas yra lygus localhost:3000
app.get("/", (req, res) => {
  res.send("Welcome to Homepage!");
});
// route GET - /users
app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
});
