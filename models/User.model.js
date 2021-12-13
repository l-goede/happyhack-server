const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  image: {
    type: String,
  },
  name: String,
  email: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },

  location: String,

  events: {
    type: Array,
  },

  jobsCreated: {
    type: Array,
  },

  jobsAccepted: {
    type: Array,
  },

  skills: {
    enum: [
      "Javascript",
      "React",
      "Typescript",
      "Python",
      "C#",
      "Java",
      "PHP",
      "Angular",
      "VueJS",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "Mongoose",
      "MySQL",
      "RESTful API",
      "UX/UI",
      "Figma",
      "Adobe XD",
    ],
  },
});

let UserModel = model("user", userSchema);

module.exports = UserModel;
