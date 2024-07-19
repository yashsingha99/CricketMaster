const express = require('express')
const dotenv = require('dotenv')
const app = express()
const cors = require("cors")
const cookieParser = require("cookie-parser")

dotenv.config();
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

const userRouter = require("./routers/user.router")
const groundRouter = require("./routers/ground.router")
const matchRouter = require("./routers/match.router")
const playerRouter = require("./routers/player.router")
const teamRouter = require("./routers/team.router")
app.use('/app/user', userRouter)
app.use('/app/ground', groundRouter)
app.use('/app/match', matchRouter)
app.use('/app/player', playerRouter)
app.use('/app/team', teamRouter)
module.exports = app
