import axios from "axios"

const URI = "http://localhost:5000"

export const getPlayer = async(allPlayer) => {
   try {
    // console.log(data);
    
    const res = await axios.post(`${URI}/api/player/playerQuery`, allPlayer);
    console.log(res);
    return res;
   } catch (error) {
     console.log("getPlayer", error);
   }
}