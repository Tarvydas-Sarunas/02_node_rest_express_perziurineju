const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
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
  const filtered = users.filter(obj);
  // issiusti atgal su res.json
  res.send("gauti userius kuriu amzius daugiau nei 21");
});

// gauti viena useri
// GET - /api/users?userId=2
app.get("/api/users/single", (req, res) => {
  const userId = 2;
  const found = "";
  // issiusti atgal su res.json
  // extra jei neradom pranesti kad nerasta
  res.send("gauti viena useri");
});

// isrikiuti userius pagal amziu
// GET - /api/users/sort/age

app.listen(PORT, () => {
  console.log(`Users server listening on port http://localhost:${PORT}`);
});
