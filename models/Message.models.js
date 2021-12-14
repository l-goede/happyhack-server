const { Schema, model } = require("mongoose");
require('./User.model')
require('./Conversation.model')

let MessageSchema = new Schema({
  sender: {
    ref: 'User',
    type: Schema.Types.ObjectId
  },
  message: String,
  conversationId : {
    ref: 'conversation',
    type: Schema.Types.ObjectId
  } 
}, {
  timestamps: true
})

let MessageModel = model('message', MessageSchema)

module.exports = MessageModel