const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { after } = require("node:test");
const { request } = require("http");
const app = express();

const PORT = 3000;

// middleware
app.use(cors());
app.use(morgan("dev"));

const users = [
  {
    id: 1,
    name: "John Doe",
    age: 25,
    isActive: true,
    address: {
      street: "123 Main St",
      city: "New York",
      country: "USA",
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 30,
    isActive: false,
    address: {
      street: "456 Elm St",
      city: "Los Angeles",
      country: "USA",
    },
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 35,
    isActive: true,
    address: {
      street: "789 Oak St",
      city: "Chicago",
      country: "USA",
    },
  },
  {
    id: 4,
    name: "Serbentautas Bordiuras",
    age: 18,
    isActive: true,
    address: {
      street: "Vytauto 19",
      city: "Kaunas",
      country: "LT",
    },
  },
];

// gauti visus userius
// GET - /api/users - grazina visus vartotojus
app.get("/api/users", (req, res) => {
  // res.send("gauti visus userius");
  res.json(users);
});

// gauti userius kuriu amzius daugiau nei 21
// GET - /api/users/adults
app.get("/api/users/adults", (req, res) => {
  // atfiltruoti users
  // amziu paduodam kaip query parametra ?age=30
  const userAge = req.query.age; // visada stringas
  const filtered = users.filter((userObj) => userObj.age >= +userAge);
  // issiusti atgal su res.json
  if (filtered.length === 0) {
    res.status(200).json({
      success: false,
      msg: "no users in that age found",
    });
    return;
  }
  res.json(filtered);
});

// gauti viena useri
// GET - /api/users?userId=2
app.get("/api/users/single", (req, res) => {
  const userId = req.query.userId; // visada stringas
  const found = users.find((userObj) => userObj.id === +userId);
  // issiusti atgal su res.json
  // extra jei neradom pranesti kad nerasta
  if (!found) {
    res.status(404).json({ msg: "user not found" });
    return;
  }
  res.json(found);
});

// isrikiuti userius pagal amziu
// GET - /api/users/sort/age
app.get("/api/users/sort/age", (request, response) => {
  // query parametras ?order=desc arba ?order=asc
  const order = request.query.order;
  // isrikiuoti users
  const usersCopy = users.slice();
  // const usersCopy = [...users]
  if (order === "asc") {
    const sorted = usersCopy.sort((a, b) => a.age - b.age);
    response.json(sorted);
  } else if (order === "desc") {
    const sorted = usersCopy.sort((a, b) => b.age - a.age);
    response.json(sorted);
  }
  // issiusti atgal su response
  // response.send('isrikiuoti userius pagal amziu');

  // extra jei neradom pranesti kad nerasta
});

app.listen(PORT, () => {
  console.log(`Users server listening on port http://localhost:${PORT}`);
});
