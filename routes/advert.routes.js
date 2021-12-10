const express = require('express')
const router = express.Router()

let JobModel = require('../models/Job.model')


// to display all jobs
router.get('/jobs', (req, res) => {
    JobModel.find()
        .then((jobs) => {
            res.status(200).json(jobs)
        }).catch((err) => {
            res.status(500).json({
                error: `something went wrong`,
                message: err
            })

        });
})


//to create a new 
router.post('/create', (req, res) => {
    const { name, details, skills, username, date, price, contact} = req.body;
    console.log(req.body, name)
    JobModel.create({name})
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((err) => {
            res.status(500).json({
                error: 'Something went wrong',
                message: err
            })
        })
})


// to show only the selected advert with all information
router.get('/jobs/:jobsId', (req, res) => {
    JobModel.findById(req.params.jobsId)
        .then((jobs) => {
            res.status(200).json(jobs)
        }).catch((err) => {
            res.status(500).json({
                error: `something went wrong`,
                message: err
            })

        });
})


// to delete the advert
router.delete(`/jobs/:id`, (req, res) => {
    JobModel.findByIdAndDelete(req.params.id)
        .then((jobs) => {
            res.status(200).json(jobs)
        }).catch((err) => {

        });
})


// to update the data from the advert
router.patch(`/jobs/:id`, (req, res) => {
    let id = req.params.id

    const { name, details, skills, username, date, price, contact } = req.body;

    JobModel.findByIdAndUpdate(id, { $set: { name, details, skills, username, date, price, contact } }, { new: true })

        .then((jobs) => {
            res.status(200).json(jobs)
        }).catch((err) => {

        });

})

module.exports = router;
