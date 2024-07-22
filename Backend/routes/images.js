// routes/upload.js
const express = require('express');
const router = express.Router();
const upload = require('../config/multer'); // Adjust the path accordingly
const Image = require('../models/image');

// Uploading Images
router.post('/', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(400).json({ message: err });
    } else {
      if (req.file == undefined) {
        return res.status(400).json({ message: 'No file selected!' });
      } else {
        // Save image data to MongoDB
        const newImage = new Image({
          filename: req.file.originalname,
          data: req.file.buffer,
          contentType: req.file.mimetype
        });

        newImage.save().then(image => {
          res.status(200).json({
            message: 'File uploaded successfully!',
            image: image
          });
        }).catch(err => {
          res.status(500).json({ message: 'Failed to save image data.' });
        });
      }
    }
  });
});

module.exports = router;
