const { Schema, model } = require("mongoose");

const eventsSchema = new Schema({
  name: {
    type: String,
  },
  username: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  location: {
    type: String,
  },
  date: [{ type: Date }],
  contact: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  skills: {
    enum: [
      "JavaScrip",
      "HTML",
      "MongoDB",
      "CSS",
      "UI",
      "Python",
      "Tableau",
      "Design Thinking",
      "Research",
    ],
  },
  details: {
    type: String,
  },
});

const EventModel = model("Event", userSchema);

module.exports = EventModel;
