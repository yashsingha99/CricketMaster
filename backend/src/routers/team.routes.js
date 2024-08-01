const { Router } = require("express");
const router = Router();
const { addTeam } = require("../controllers/players.controllers");

router.post("/addTeam", addPlayer);

module.exports = router;
