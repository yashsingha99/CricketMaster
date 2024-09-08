const { Router } = require("express");
const router = Router();

const {addMatchData } = require("../controllers/matches.controllers");
router.post("/addMatchData",addMatchData);

module.exports =  router ;
