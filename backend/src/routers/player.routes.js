const { Router } = require("express");
const router = Router();

const {addData, playerQuery } = require("../controllers/players.controllers");
router.post("/addData",addData);
router.post("/playerQuery", playerQuery);

module.exports =  router ;
