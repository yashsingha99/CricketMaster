const { Router } = require("express");
const router = Router();
const { addPlayer } = require("../controllers/players.controllers");

router.post("/addTeam", addPlayer);

module.exports = router;