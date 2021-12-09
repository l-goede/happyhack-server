const express = require('express')
const router = express.Router()

let AdvertModel = require('../models/')


// to display all adverts
router.get('/adverts', (req, res) => {
    AdvertModel.find()
    .then((adverts) => {
        res.status(200).json(adverts)
    }).catch((err) => {
        res.status(500).json({
            error: `something went wrong`,
            message: err
        })
        
    });
})


//to create a new 
router.post('/create', (req, res) => {  
    const {name, details, skills_needed, username} = req.body;
    AdvertModel.findById(req.params.advertsId)
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
router.get('/adverts/:advertsId', (req, res) => {
    AdvertModel.findById(req.params.advertsId)
    .then((adverts) => {
        res.status(200).json(adverts)
    }).catch((err) => {
        res.status(500).json({
            error: `something went wrong`,
            message: err
        })
        
    });
})


// to delete the advert
router.delete(`/adverts/:id`, (req, res) => {
    AdvertModel.findByIdAndDelete(req.params.id)
    .then((adverts) => {
        res.status(200).json(adverts)
    }).catch((err) => {
        
    });
})


// to update the data from the advert
router.patch(`/adverts/:id`, (req, res) => {
    let id = req.params.id

    const {name, details, skills_needed, username} = req.body;

    AdvertModel.findByIdAndUpdate(id, {$set: {name: name, details: details,  skills_needed: skills_needed, username: username}}, {new: true})

    .then((adverts) => {
        res.status(200).json(adverts)
    }).catch((err) => {
        
    });

})
