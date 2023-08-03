const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")

const noteRoutes = require("./routes/notes.js")
const userRoutes = require("./routes/users.js")

const { saveCreateNote, getNotes, getNote, delNote } = require('./controllers/notes.js')

const tester = typeof(saveCreateNote)
console.log("tester",tester)
const app = express()
dotenv.config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(cors())

app.get("/", (req,res)=>{res.send({"hello": "check"})})

app.use("/notes", noteRoutes)
// app.use("/users", userRoutes)

mongoose.connect(process.env.CONNECTION_URL,  { useNewUrlParser: true, useUnifiedTopology: true })
    .then(app.listen(process.env.PORT, ()=>{console.log("ready to go on port", process.env.PORT)}))
    .catch((error) => console.log(error))