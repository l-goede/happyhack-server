const { Schema, model } = require("mongoose");

const jobSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: Schema.Types.ObjectId,
    ref: "user"
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
  details:
  
  {
      type: String,
    },
  
    date:  Date,

  price: {
    type: Number,
  },
  contact: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
});

const JobModel = model("Job", jobSchema);

module.exports = JobModel;
