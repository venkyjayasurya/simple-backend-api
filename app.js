const express = require("express");
require("dotenv/config");

const User = require("./model/users");

const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// const customMiddleware = (req, res, next) => {
//     console.log("Welcome to middleware")
//     next();
// }
// app.use(customMiddleware);

app.get("/", (req, res) => {
  res.send("First Request");
});

app.get("/users", (req, res) => {
  let users = ["venky", "tharun", "pranav", "pushpa"];
  res.send({ users: users });
});

app.post("/createUser", async (req, res) => {
  try {
    const myUser = new User(req.body);
    await myUser.save();
    res.send(myUser);
  } catch (err) {
    res.send({ message: err });
  }
});

mongoose.connect(
  process.env.DB_CONNECTION_STRING,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (req, res) => {
    console.log("Connected to Database");
  }
);

app.listen(3000, () => {
  console.log("Listening to Port 3000");
});
