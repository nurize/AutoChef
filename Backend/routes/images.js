const express = require('express');
const router = express.Router();
const upload = require('../config/multer');
const Image = require('../models/image');
const Service = require('../models/service'); 

// Uploading Images
router.post('/', (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: err });
    } else {
      if (req.file == undefined) {
        return res.status(400).json({ message: 'No file selected!' });
      } else {
        const { serviceType } = req.body;

        if (!serviceType) {
          return res.status(400).json({ message: 'Please provide service type' });
        }

        // Verify if service type exists
        try {
          const service = await Service.findById(serviceType);
          if (!service) {
            return res.status(400).json({ message: 'Invalid service type' });
          }

          // Save image data to MongoDB with service type
          const newImage = new Image({
            filename: req.file.originalname,
            data: req.file.buffer,
            contentType: req.file.mimetype,
            serviceType: serviceType // Save the service type ID
          });

          const savedImage = await newImage.save();
          res.status(200).json({
            message: 'File uploaded and categorized successfully!',
            image: savedImage
          });

        } catch (error) {
          console.error('Error saving image:', error);
          res.status(500).json({ message: 'Server error' });
        }
      }
    }
  });
});
// Delete the Image

module.exports = router;
