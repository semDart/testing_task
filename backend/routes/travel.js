const express = require("express");

const travelsController = require("../controllers/travelsController");

const router = express.Router();

router.get("/", travelsController.getAllData);

module.exports = router;
