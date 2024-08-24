const { Router } = require("express");
const router = Router();
const {groundQuery, getAllGrounds, addData} = require("../controllers/groundcontroller")

router.post('/groundQuery', groundQuery)
router.get('/getAllGrounds', getAllGrounds);
router.get('/addData', addData);

module.exports = router