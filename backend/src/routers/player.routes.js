const { Router } = require("express");
const router = Router();

const { addTeam, addPlayer } = require("../controllers/players.controllers");

router.post("/addPlayer", addPlayer);
router.post("/addTeam", addTeam);
router.post("/addPlayer", addPlayer);
router.post("/addPlayer", addPlayer);

module.exports =  router ;
