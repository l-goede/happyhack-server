const express = require("express");
const router = express.Router();

let JobModel = require("../models/Job.model");

// to display all jobs
router.get("/jobs", (req, res) => {
  JobModel.find()
    .then((jobs) => {
      res.status(200).json(jobs);
    })
    .catch((err) => {
      res.status(500).json({
        error: `something went wrong`,
        message: err,
      });
    });
});

//to create a new
router.post("/add-form", (req, res) => {
  const id = req.session.loggedInUser._id;
  console.log(id);

  const {
    jobTitle,
    jobDescription,
    skills,
    deadline,
    price,
    completed,
    accepted,
  } = req.body;
  console.log(req.body);

  let allSkills = skills.split(",");

  JobModel.create({
    username: id,
    jobTitle,
    jobDescription,
    skills: allSkills,

    deadline,
    price,
    completed,
    accepted,
  })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Something went wrong",
        message: err,
      });
    });
});

// to show only the selected advert with all information
router.get("/jobs/:jobsId", (req, res) => {
  JobModel.findById(req.params.jobsId)
    .then((jobs) => {
      res.status(200).json(jobs);
    })
    .catch((err) => {
      res.status(500).json({
        error: `something went wrong`,
        message: err,
      });
    });
});

// to delete the advert
router.delete(`/jobs/:id`, (req, res) => {
  JobModel.findByIdAndDelete(req.params.id)
    .then((jobs) => {
      res.status(200).json(jobs);
    })
    .catch((err) => {});
});

// to update the data from the advert
router.patch(`/jobs/:id`, (req, res) => {
  let id = req.params.id;
  const {
    username,
    jobTitle,
    jobDescription,
    skills,

    deadline,
    price,
    completed,
    accepted,
  } = req.body;
  let allSkills = skills.split(",");
  JobModel.findByIdAndUpdate(
    id,
    {
      $set: {
        username,
        jobTitle,
        jobDescription,
        skills: allSkills,
        deadline,
        price,
        completed,
        accepted,
      },
    },
    { new: true }
  )

    .then((jobs) => {
      res.status(200).json(jobs);
    })
    .catch((err) => {});
});

// update jobcard - set developer and accepted to true
router.patch(`/yourjobs`, (req, res) => {
  const { id, developer } = req.session.loggedInUser._id;
  const { accepted } = req.body;

  JobModel.findByIdAndUpdate(
    id,
    {
      $set: {
        developer,
        accepted,
      },
    },
    { new: true }
  )

    .then((jobs) => {
      res.status(200).json(jobs);
    })
    .catch((err) => {});
});

module.exports = router;
