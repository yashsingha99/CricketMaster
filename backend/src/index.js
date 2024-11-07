const mongoose  = require('mongoose')

const dotenv  = require('dotenv')
dotenv.config()

const URI = process.env.URI
const connectDb = async() => {
    try {
        const connect = await mongoose.connect(URI)
        console.log("database connected");
    } catch (error) {
        console.log(error);
    }
}
connectDb()

const app = require("./app")
const port = process.env.PORT || 5000
app.listen(port ,console.log("server is running....."))