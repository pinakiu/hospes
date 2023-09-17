const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController.js')
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix + '-' + file.originalname);
    }
  });
const upload = multer({ storage: storage });

router.get("/allHosts", userController.getAllHosts);
router.get("/host", userController.queryHosts);

router.get("/host/locations", userController.getAllLocations);
router.get("/:id", userController.getUser);
router.post("/", userController.postUser);
router.put('/', upload.fields([{ name: 'homeImage', maxCount: 1 }, { name: 'personImage', maxCount: 1 }]), userController.postMore);

module.exports = router;