const { Schema, model } = require("mongoose");

const eventsSchema = new Schema({
  image: {
    type: String,
    default:
      "https://i.pinimg.com/474x/5f/3b/48/5f3b486198cb4e1db5729207a666c750.jpg",
  },

  title: {
    type: String,
  },

  saved: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  location: {
    type: String,
  },
  date: [{ type: Date }],

  description: {
    type: String,
  },
});

const EventModel = model("Event", userSchema);

module.exports = EventModel;
