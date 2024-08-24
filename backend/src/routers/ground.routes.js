const express = require("express");
const router = express.Router();
const groundController = require("../controllers/groundcontroller");

// Route to get all grounds
router.get("/grounds", groundController.getAllGrounds);
router.get("/ground", groundController.getAllGrounds);

module.exports = router;
