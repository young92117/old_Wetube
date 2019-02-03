//const express = require('express')
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import express from "express"
import helmet from "helmet"
import morgan from "morgan"


const app = express()

const PORT = 4000

/*
function handleListening() {
    console.log(`Listening on: http://localhost:${PORT}`)
}

function handleHome(req, res) {
  res.send("Hello from homw")
}


function handleProfile(req,res) {
  res.send("You are on my profile")
}
*/
const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`)

const handleHome = (req,res) => res.send("Hello from Young")

const handleProfile = (req,res) => res.send("You are on my profile")

app.use(cookieParser())
app.use(bodyParser.json())
//eslint-disable-next-line quote-props
app.use(bodyParser.urlencoded({extended: true}))
app.use(helmet())
app.use(morgan("dev"))

app.get("/", handleHome)

app.get("/profile", handleProfile)

app.listen(PORT, handleListening)
/*
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})
*/
