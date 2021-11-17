const express = require("express");
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

app.post('/createUser', (req, res)=>{
    console.log(req.body);

    res.send(`User Created ${req.body.name}`);
})

app.listen(3000, () => {
  console.log("Listening to Port 3000");
});
