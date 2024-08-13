import axios from "axios"

const URI = "http://localhost:5000"

export const addPlayerGeneralInfo = async(data) => {
   try {
    console.log(data);
    
    const res = await axios.post(`${URI}/api/player/addPlayerGeneralInfo`, data);
    console.log(res);
    return res;
   } catch (error) {
     console.log("addPlayerGeneralInfo", error);
   }
}