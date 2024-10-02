const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  age: Number,
  favorite_foods: [String],
});

const personModel = mongoose.model("Person", personSchema);

module.exports = personModel;
