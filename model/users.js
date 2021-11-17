const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

// const userModel = mongoose.model("user", User);

// module.exports = userModel;
module.exports = mongoose.model("user", User)