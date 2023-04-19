import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv"
import bodyParser from "body-parser";

const app = express()
dotenv.config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(cors())

app.get("/", (req,res)=>{res.send({"hello": "world"})})


app.listen(process.env.PORT, ()=>{console.log("ready to go on port", process.env.PORT)} )