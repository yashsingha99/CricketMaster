const Ground = require("../models/grounds.model"); // Assuming you have a Ground model defined in the models directory

// Controller function to get all grounds
exports.getAllGrounds = async (req, res) => {
  try {
    const grounds = await Ground.find({}); // Fetch all grounds from the database
    console.log("grounds", grounds);
    
    res.status(200).json({
      success: true,
      data: grounds
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch grounds",
      error: error.message
    });
  }
};
