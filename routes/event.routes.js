const express = require("express");
const router = express.Router();

let EventModel = require("../models/Event.model");
const UserModel = require("../models/User.model");

// to display all events
router.get("/events", (req, res) => {
  EventModel.find()

    .then((events) => {
      res.status(200).json(jobs);
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

  EventModel.findByIdAndUpdate(
    eventId,
    {
      $set: {
        saved,
      },
    },
    { new: true }
  )

    .then((events) => {
      UserModel.findByIdAndUpdate(
        saved,
        {
          $push: { jobsAccepted: events._id },
        },
        { new: true }
      )
        .then(() => {
          res.status(200).json(events);
        })
        .catch((err) => {
          next(err);
        });
    })
    .catch((err) => {
      next(err);
    });
});

// delete event from profile

router.delete(`/events/:id`, (req, res) => {
  JobModel.findByIdAndDelete(req.params.id)
    .then((events) => {
      res.status(200).json(events);
    })
    .catch((err) => {});
});

module.exports = router;
