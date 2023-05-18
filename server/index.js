import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv"
import bodyParser from "body-parser";

import noteRoutes from "./routes/notes.js"
import userRoutes from "./routes/users.js"

const app = express()
dotenv.config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(cors())

app.get("/", (req,res)=>{res.send({"hello": "world"})})

app.use("/notes", noteRoutes)
app.use("/users", userRoutes)

mongoose.connect(process.env.CONNECTION_URL,  { useNewUrlParser: true, useUnifiedTopology: true })
    .then(app.listen(process.env.PORT, ()=>{console.log("ready to go on port", process.env.PORT)}))
    .catch((error) => console.log(error))