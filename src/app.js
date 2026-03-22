const express = require("express")
require("dotenv").config()
const app = express()
const PORT = process.env.PORT || 3500
const airportRoute = require("../src/routes/airportRoute")
const authRoute = require("../src/routes/authRoutes")
const mongoose = require("mongoose")
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("Hello CMJD 113")
})
app.use("/air/api/v1",airportRoute)
app.use("/air/api/v1",authRoute)

mongoose.connect("mongodb://localhost:27017/airTicketerCmjd113")
.then(()=>{
    console.log("MongoDB Connected")
})
.catch((err)=>{
    console.error("Failed to connect MongoDB",err)
})
app.listen(PORT,()=>{
    console.log("Server started at ",PORT)
})