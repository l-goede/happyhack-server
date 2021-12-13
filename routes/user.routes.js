const express = require("express");
const router = express.Router();
const UserModel = require("../models/User.model");



// to display profile information
const isLoggedIn = (req, res, next) => {
  if (req.session.loggedInUser) {
    //calls whatever is to be executed after the isLoggedIn function is over
    next();
  } else {
    res.status(401).json({
      message: "Unauthorized user",
      code: 401,
    });
  }
};

// to display profile information
router.get("/profile", isLoggedIn, (req, res, next) => {
     res.status(200).json(req.session.loggedInUser);
     console.log("its connecting")
   });

// add new info in user profile



router.post("/profile/:userId", isLoggedIn, (req, res) => {
  const { name, location, image } = req.body;
});


// to update (and add) profile details
// needs to add SKILLS! marcos say is not working, so we are testing without first.

router.patch("/profile/:id", isLoggedIn, (req, res) => {
  let id = req.params.id;
  console.log(id)
  const { name, location, image } = req.body;

  UserModel.findByIdAndUpdate(
    id,
    {
      $set: {
        name: name,
        location: location,
        image: image,
        // events: events,
        // jobs: jobs,
        // skills: skills,
      },
    },
    { new: true }
  )

    .then((profile) => {
      res.status(200).json(profile);
    })
    .catch((err) => {});
});


module.exports = router;
