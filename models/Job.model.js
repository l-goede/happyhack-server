const { Schema, model } = require("mongoose");
require("./User.model");

const jobSchema = new Schema({
  username: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  developer: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },

  jobTitle: {
    type: String,
    required: true,
  },

  jobDescription: String,

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

  deadline: Date,

  price: Number,

  accepted: Boolean,
  completed: Boolean,
});
const JobModel = model("Job", jobSchema);
module.exports = JobModel;
