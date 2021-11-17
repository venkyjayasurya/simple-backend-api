const express = require("express");
const app = express();

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

app.post('/createUser', (req, res)=>{
    console.log(req);
})

app.listen(3000, () => {
  console.log("Listening to Port 3000");
});
