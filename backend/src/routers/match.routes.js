const { Router } = require("express");
const router = Router();

const {
  addMatchData,
  search,
  searchMatch,
  findMatch,
} = require("../controllers/matches.controllers");
router.post("/addMatchData", addMatchData);
router.post("/Matchsearch", search);
router.post("/searchMatch", searchMatch);
router.post("/findMatch", findMatch);

module.exports = router;
