const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
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
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

let UserModel = model("user", UserSchema);

module.exports = UserModel;
