
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}${ext}`);
  }
});
const fileFilter = (req, file, cb) => {
  const allowedExtensions = ['.jpeg', '.png', '.jpg', '.web'];
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowedExtensions.includes(ext)) {
    return cb(null, true);
  }
  cb(new Error("Le type d'image doit être jpeg, png, jpg ou web"));
};
const upload = multer({ storage, fileFilter });

module.exports = upload;