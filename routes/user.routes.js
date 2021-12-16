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
  const { name, lastName, location, image, aboutMe, skills} = req.body;
  let allSkills = skills.split(",")

  UserModel.findByIdAndUpdate(
    id,
    {
      $set: {
        name: name,
        lastName: lastName,
        location: location,
        image: image,
        skills: allSkills,
        aboutMe: aboutMe,
      },
    },
    { new: true }
  )
    .then((profile) => {
      req.session.loggedInUser = profile
      res.status(200).json(profile);
    })
    .catch((err) => {});
});

router.get("/users", (req, res) => {
  UserModel.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json({
        error: `something went wrong`,
        message: err,
      });
    });
});

module.exports = router;
