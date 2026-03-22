const express = require("express")
const app = express()
const PORT = 3500
const airportRoute = require("../src/routes/airportRoute")
const mongoose = require("mongoose")
app.get("/",(req,res)=>{
    res.send("Hello CMJD 113")
})
app.use("/air/api/v1",airportRoute)

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