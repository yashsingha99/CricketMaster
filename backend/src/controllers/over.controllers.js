const Over = require("../models/over.model");

const createOver = async (req, res) => {
  try {
    const { noOfOver, runs, bowler } = req.body;
    let totalNoBWLs = 0;
    let totalWides = 0;
    let totalWickets = 0;
    for(const boll of runs){
      if(boll[0] == 'NB')
        totalNoBWLs++;
      else if(boll[0] == 'WD') 
        totalWides++;
      else if(boll[0] == 'W') 
        totalWickets++;
    }

    
  } catch (error) {
    console.log("createOver", createOver);
  }
};

const updateOver = async (req, res) => {

};

module.exports = {
  createOver,
  updateOver,
};
