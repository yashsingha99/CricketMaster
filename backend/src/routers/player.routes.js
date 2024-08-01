const { Router } = require("express");
const router = Router();

const { addPlayer } = require("../controllers/players.controllers");

router.post("/addPlayer", addPlayer);

module.exports =  router ;
