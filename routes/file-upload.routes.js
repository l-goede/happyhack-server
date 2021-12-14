const express = require('express');
const router = express.Router();

// include CLOUDINARY:
const uploader = require('../config/cloudinary.config.js');


// handles POST requests to /api/upload

router.post('/upload', uploader.single("imageUrl"), (req, res, next) => {

	console.log('file is: ', req.file)

	if (!req.file) {
		next(new Error('No file uploaded!'));
		return;
	}

	//You will get the image url in 'req.file.path'
	//send it back to the user or store it in the DB
	res.status(200).json({
		image: req.file.path
	})

})

module.exports = router;