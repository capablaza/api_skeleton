var express = require("express");
var router = express.Router();
var apiController = require("../controllers/apiController");

router.get("/",apiController.home)
router.post("/",apiController.save)

module.exports = router;
