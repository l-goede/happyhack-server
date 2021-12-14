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

  skills: [String],


  deadline: Date,

  price: Number,

  accepted: Boolean,
  completed: Boolean,
});
const JobModel = model("Job", jobSchema);
module.exports = JobModel;
