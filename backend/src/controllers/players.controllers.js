const addPlayer = async (req, res) => {
   const {name, role, teamsPlayedFor, age, nationality} = req.data;
   if (
    [name, role, teamsPlayedFor, age, nationality].some(
      (field) => field?.trim() === ""
    )
  ) {
    return res.send(400).json({ mesage: "All credentials are required!!" });

    
  }
};

const updatePlayer = async (req, res) => {
    
};

module.exports = {
  addPlayer,
  updatePlayer,
};
