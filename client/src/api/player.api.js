import axios from "axios"

const URI = "http://localhost:5000"

export const getPlayer = async(data) => {
   try {
    // console.log(data);
    
    const res = await axios.post(`${URI}/api/player/playerQuery`, data);
    console.log(res);
    return res;
   } catch (error) {
     console.log("addPlayerGeneralInfo", error);
   }
}