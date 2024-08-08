const { Router } = require("express");
const router = Router();

const {addPlayerGeneralInfo } = require("../controllers/players.controllers");

router.post("/addPlayerGeneralInfo", addPlayerGeneralInfo);


module.exports =  router ;
