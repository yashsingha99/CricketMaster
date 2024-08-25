const { Router } = require("express");
const router = Router();
const {groundQuery, getAllGrounds, addData} = require("../controllers/ground.controller")

router.post('/groundQuery', groundQuery)
router.get('/getAllGrounds', getAllGrounds);
router.post('/addData', addData);

module.exports = router