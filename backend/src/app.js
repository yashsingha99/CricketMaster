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

const userRouter = require("./routers/user.routes")
// const groundRouter = require("./routers/ground.router")
// const matchRouter = require("./routers/match.router")
const playerRouter = require("./routers/player.routes")
const teamRouter = require("./routers/team.routes")
app.use('/api/user', userRouter)
// app.use('/api/ground', groundRouter)
// app.use('/api/match', matchRouter)
app.use('/api/player', playerRouter)
app.use('/api/team', teamRouter)
module.exports = app
