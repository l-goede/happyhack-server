const { Schema, model } = require("mongoose");
require('./User.model')

let ConversationSchema = new Schema({
  participants: [{
      ref: 'User',
      type: Schema.Types.ObjectId
    },
  ] 
})

let ConversationModel = model('conversation', ConversationSchema)


module.exports = ConversationModel