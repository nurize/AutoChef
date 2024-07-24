const multer = require('multer');

// Set storage engine to memory storage
const storage = multer.memoryStorage();

// Initialize upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 2000000 }, // 2MB file size limit
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  }
}).single('File'); // 'image' is the name of the form field

// Check file type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(file.originalname.toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}

module.exports = upload;
