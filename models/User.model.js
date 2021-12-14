const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  image: {
    type: String,
    default: 'https://i.pinimg.com/474x/5f/3b/48/5f3b486198cb4e1db5729207a666c750.jpg' 
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

  events: {
    type: Array,
  },

  jobsCreated: {
    type: Array,
  },

  jobsAccepted: {
    type: Array,
  },

  aboutMe: String,

  skills:[String],

});

let UserModel = model("user", userSchema);

module.exports = UserModel;
