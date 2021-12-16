const { Schema, model } = require("mongoose");
require("./Job.model");
require("./Event.model");

const userSchema = new Schema({
  image: {
    type: String,
    default:
      "https://i.pinimg.com/474x/5f/3b/48/5f3b486198cb4e1db5729207a666c750.jpg",
  },
  name: String,
  lastName: String,
  email: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },

  location: String,

  events: [
    {
      ref: "Event",
      type: Schema.Types.ObjectId,
    },
  ],

  jobsCreated: [
    {
      ref: "Job",
      type: Schema.Types.ObjectId,
    },
  ],

  jobsAccepted: [
    {
      ref: "Job",
      type: Schema.Types.ObjectId,
    },
  ],

  aboutMe: String,

  skills: [String],
});

let UserModel = model("user", userSchema);

module.exports = UserModel;
