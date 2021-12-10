const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    location: {
      type: String,
    },
    image: {
      type: String,
    },
    events: {
      type: Array,
    },
    jobs: {
      type: Array,
    },
    skills: {
      type: Array,
    },
  },
);

let UserModel = model("user", userSchema);

module.exports = UserModel;
