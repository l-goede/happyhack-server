const { Schema, model } = require("mongoose");


const eventsSchema = new Schema(
  {
    name: {
          type: String,
      
    },
    username: {
          type: Schema.Types.ObjectId,
          required: true,
    },
    location: {
          type: String,
    },
    date: [
          { type: Date}
     ],
     contact: {
          type: Schema.Types.ObjectId,
    },
    skills: {
          enum: ['JavaScrip','HTML', 'MongoDB', 'CSS', 'UI', 'Python', 'Tableau', 'Design Thinking', 'Research'],
     },
     details:{    
          type:  String
     },
  },
);

const User = model("Event", userSchema);

module.exports = User;
