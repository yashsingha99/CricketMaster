const express = require('express')
const dotenv = require('dotenv')
const app = express()
const cors = require("cors")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
dotenv.config();
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static("public"))
app.use(cookieParser())

// const userRouter = require("./routers/user.routes")
// const playerRouter = require("./routers/player.routes")
// const teamRouter = require("./routers/team.routes")

// app.use('/api/user', userRouter)
// app.use('/api/player', playerRouter)
// app.use('/api/team', teamRouter)


const groundRouter = require("./routers/ground.routes")
app.use('/api/ground', groundRouter)
module.exports = app