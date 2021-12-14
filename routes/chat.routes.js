const router = require("express").Router();
const Conversation = require('../models/Conversation.model')
const Message = require('../models/Message.model')

router.post('/conversation', (req, res, next) => {
    const {participants} = req.body
    Conversation.findOne({ participants: { $all: participants} })
      .then((found) => {
        if (found) {
          res.status(200).json(found)
        }
        else {
          Conversation.create({participants})
            .then((response) => {
              res.status(200).json(response)
            })
        }
      })
      .catch((err) => {
          next(err)       
      })
})

router.get('/messages/:conversationId', (req, res, next) => {
  const {conversationId} = req.params
  Message.find({conversationId})
    .populate('sender')
    .then((messages) => {
      res.status(200).json(messages)
    })
    .catch((err) => {
      next(err)       
  })
})

module.exports = router;