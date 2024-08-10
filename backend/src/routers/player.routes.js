const { Router } = require("express");
const router = Router();

const {addPlayerGeneralInfo, updateCrearePlayer } = require("../controllers/players.controllers");
const { upload } = require("../middleware/multer")
router.post("/addPlayerGeneralInfo", upload,  addPlayerGeneralInfo);
router.post("/updateCrearePlayer", updateCrearePlayer);

module.exports =  router ;
