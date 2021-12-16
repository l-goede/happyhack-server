const express = require("express");
const router = express.Router();

let EventModel = require("../models/Event.model");
const UserModel = require("../models/User.model");

// to display all events
router.get("/events", (req, res) => {
  EventModel.find()
    .then((events) => {
      res.status(200).json(events);
    })
    .catch((err) => {
      res.status(500).json({
        error: `something went wrong`,
        message: err,
      });
    });
});

// save the events in my profile
router.patch(`/yourevents`, (req, res, next) => {
  const saved = req.session.loggedInUser._id;
  const { eventId } = req.body;
  console.log(saved);
  UserModel.findByIdAndUpdate(
    saved,
    {
      $push: { events: eventId },
    },
    { new: true }
  )
    .then(() => {
      EventModel.findById(eventId)
        .then((events) => {
          res.status(200).json(events);
        })
        .catch(() => {});
    })
    .catch((err) => {
      next(err);
    });
});

// delete event from profile

router.patch(`/events/:id`, (req, res, next) => {
  console.log(req.session);
  const saved = req.session.loggedInUser._id;
  console.log(saved, req.params.id);
  UserModel.findByIdAndUpdate(saved, { $pull: { events: req.params.id } })
    .then((events) => {
      res.status(200).json(events);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
