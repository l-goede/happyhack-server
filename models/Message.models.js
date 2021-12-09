const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const msgSchema = new Schema({
  name: {
    type: Schema.Types.ObjectId,
    ref: "Item",
  },
  messages: [
    {
      sender: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
      message: {
        type: String,
        required: true,
      },
      timestamp: Date,
    },
  ],
});

const MsgModel = model("Msg", msgSchema);

module.exports = MsgModel;
